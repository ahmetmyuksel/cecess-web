"use client";

import { createClient } from "@/utils/supabase/client";
import { ActionResponse } from "@/types";
import {
    mapReportRowToRecord,
    ReportsTrends,
    ReportRecord,
} from "@/features/reports/domain/report-types";

type ReportRow = {
    id: string;
    month: string;
    created_at: string;
    summary: string | null;
    sentiment: "Great" | "Good" | "Needs Improvement" | "Critical" | null;
    financialHealthScore: number | null;
    data: {
        financialHealthScore?: number | null;
        summary?: string | null;
        sentiment?: "Great" | "Good" | "Needs Improvement" | "Critical" | null;
        categoryBreakdown?: { name: string; value: number }[] | null;
        subscriptionWarnings?: string[] | null;
        savingsTips?: string[] | null;
    } | null;
};

export async function getReportsHistory(): Promise<ActionResponse<ReportRecord[]>> {
    const supabase = createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
        return { success: false, error: "Unauthorized" };
    }

    const { data, error } = await supabase
        .from("reports")
        .select("id, month, created_at, summary, sentiment, financialHealthScore, data")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("report-service:getReportsHistory", error);
        return { success: false, error: "Failed to fetch reports" };
    }

    return {
        success: true,
        data: ((data ?? []) as ReportRow[]).map(mapReportRowToRecord),
    };
}

export async function getReportsTrends(monthsLookback: number = 6): Promise<ActionResponse<ReportsTrends>> {
    const supabase = createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
        return { success: false, error: "Unauthorized" };
    }

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - monthsLookback + 1);
    startDate.setDate(1);

    const { data, error } = await supabase
        .from("transactions")
        .select(`
            date,
            amount,
            categories (name),
            category_id
        `)
        .eq("user_id", user.id)
        .gte("date", startDate.toISOString())
        .order("date", { ascending: true });

    if (error) {
        console.error("report-service:getReportsTrends", error);
        return { success: false, error: "Failed to fetch trends" };
    }

    const transactions = (data ?? []) as Array<{
        date: string;
        amount: number | string;
        categories?: { name?: string | null } | null;
    }>;

    if (transactions.length === 0) {
        return { success: true, data: { chartData: [], allCategories: [] } };
    }

    const monthlyMap = new Map<string, Record<string, number>>();
    const allCategories = new Set<string>();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    transactions.forEach((transaction) => {
        const amount = Number(transaction.amount);
        if (amount >= 0) {
            return;
        }

        const date = new Date(transaction.date);
        const monthKey = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        const categoryName = transaction.categories?.name || "Uncategorized";
        const absAmount = Math.abs(amount);

        allCategories.add(categoryName);

        if (!monthlyMap.has(monthKey)) {
            monthlyMap.set(monthKey, {});
        }

        const monthData = monthlyMap.get(monthKey)!;
        monthData[categoryName] = (monthData[categoryName] || 0) + absAmount;
        monthData.Total = (monthData.Total || 0) + absAmount;
    });

    const chartData: ReportsTrends["chartData"] = [];

    for (let index = 0; index < monthsLookback; index += 1) {
        const date = new Date(startDate);
        date.setMonth(date.getMonth() + index);

        const monthKey = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        chartData.push({
            month: monthKey,
            ...(monthlyMap.get(monthKey) || {}),
        });
    }

    return {
        success: true,
        data: {
            chartData,
            allCategories: Array.from(allCategories).sort(),
        },
    };
}
