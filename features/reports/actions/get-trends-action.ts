"use server";

import { createClient } from "@/utils/supabase/server";
import { ActionResponse } from "@/types";

export interface ChartDataPoint {
    month: string; // "Jan 2024"
    [category: string]: number | string; // Dynamic keys for categories
}

export interface TrendsData {
    chartData: ChartDataPoint[];
    allCategories: string[];
}

export async function getTrendsAction(monthsLookback: number = 6): Promise<ActionResponse<TrendsData>> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return { success: false, error: "Unauthorized" };

    // 1. Calculate Date Range
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - monthsLookback + 1); // +1 to include current month
    startDate.setDate(1); // Start of that month

    // 2. Fetch Transactions
    const { data: transactions, error } = await supabase
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
        console.error("Trends Error:", error);
        return { success: false, error: "Failed to fetch trends" };
    }

    if (!transactions || transactions.length === 0) {
        return { success: true, data: { chartData: [], allCategories: [] } };
    }

    // 3. Process Data
    // Group by Month -> Category -> Sum
    const monthlyMap = new Map<string, Record<string, number>>();
    const allCategoriesSet = new Set<string>();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    transactions.forEach((t: any) => {
        const d = new Date(t.date);
        const monthKey = `${monthNames[d.getMonth()]} ${d.getFullYear()}`; // "Dec 2025"

        // Skip income for spending charts? usually yes.
        // Assuming strictly spending if amount < 0 or logic?
        // Let's assume absolute values for spending charts, but maybe filter by category type if we had it.
        // For now, simple sum. If negative (expense), make positive.
        // Wait, typical logic: Expenses are negative or positive depending on schema.
        // In this app, expenses seem to be entered as positive usually but shown with +/- logic?
        // Let's look at `use-transactions.ts`: `amount` is stored signed?
        // Line 306: `finalAmount = parseFloat(amountClean) * (isPositive ? 1 : -1);`
        // So Expenses are NEGATIVE.

        const amount = Number(t.amount);
        if (amount >= 0) return; // Skip Income for Spending Trends? Or show both?
        // User asked for "Spending grap", "how much I spent". So filter only negative.

        const absAmount = Math.abs(amount);
        const categoryName = t.categories?.name || "Uncategorized";
        allCategoriesSet.add(categoryName);

        if (!monthlyMap.has(monthKey)) {
            monthlyMap.set(monthKey, {});
        }
        const monthData = monthlyMap.get(monthKey)!;
        monthData[categoryName] = (monthData[categoryName] || 0) + absAmount;
        monthData["Total"] = (monthData["Total"] || 0) + absAmount;
    });

    // 4. Transform to Array
    // Ensure chronological order based on lookback
    const chartData: ChartDataPoint[] = [];

    for (let i = 0; i < monthsLookback; i++) {
        const d = new Date(startDate);
        d.setMonth(d.getMonth() + i);
        const monthKey = `${monthNames[d.getMonth()]} ${d.getFullYear()}`;

        const data = monthlyMap.get(monthKey) || {};
        chartData.push({
            month: monthKey,
            ...data
        });
    }

    return {
        success: true,
        data: {
            chartData,
            allCategories: Array.from(allCategoriesSet).sort()
        }
    };
}
