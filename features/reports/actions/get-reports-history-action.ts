"use server";

import { createClient } from "@/utils/supabase/server";
import { ActionResponse } from "@/types";

export interface ReportHistoryItem {
    id: number;
    month: string;
    created_at: string;
    summary: string;
    financial_health_score: number;
    sentiment: "Great" | "Good" | "Needs Improvement" | "Critical";
    data?: any; // To load data immediately if needed
}

export async function getReportsHistoryAction(): Promise<ActionResponse<ReportHistoryItem[]>> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return { success: false, error: "Unauthorized" };

    try {
        const { data: reports, error } = await supabase
            .from("reports")
            .select("id, month, created_at, summary, sentiment, data")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching reports:", error);
            return { success: false, error: "Failed to fetch reports" };
        }

        const mappedReports = reports.map(r => ({
            ...r,
            financial_health_score: r.data?.financialHealthScore || 0
        }));

        return { success: true, data: mappedReports as ReportHistoryItem[] };

    } catch (error) {
        console.error("Reports History Error:", error);
        return { success: false, error: "Unexpected error" };
    }
}
