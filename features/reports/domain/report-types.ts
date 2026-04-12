export type ReportSentiment = "Great" | "Good" | "Needs Improvement" | "Critical";

export type ReportCategoryBreakdownItem = {
    name: string;
    value: number;
};

export type ReportDataPayload = {
    summary?: string | null;
    sentiment?: ReportSentiment | null;
    financialHealthScore?: number | null;
    categoryBreakdown?: ReportCategoryBreakdownItem[] | null;
    subscriptionWarnings?: string[] | null;
    savingsTips?: string[] | null;
};

export type ReportRecord = {
    id: string;
    month: string;
    createdAt: string;
    summary: string;
    sentiment: ReportSentiment;
    financialHealthScore: number;
    categoryBreakdown: ReportCategoryBreakdownItem[];
    subscriptionWarnings: string[];
    savingsTips: string[];
};

export type ReportsTrendPoint = {
    month: string;
    [category: string]: number | string;
};

export type ReportsTrends = {
    chartData: ReportsTrendPoint[];
    allCategories: string[];
};

type ReportRow = {
    id: string;
    month: string;
    created_at: string;
    summary: string | null;
    sentiment: ReportSentiment | null;
    financialhealthscore: number | null;
    data: ReportDataPayload | null;
};

const EMPTY_BREAKDOWN: ReportCategoryBreakdownItem[] = [];
const EMPTY_WARNINGS: string[] = [];
const EMPTY_TIPS: string[] = [];

export function mapReportRowToRecord(row: ReportRow): ReportRecord {
    const payload = row.data ?? {};

    return {
        id: row.id,
        month: row.month,
        createdAt: row.created_at,
        summary: row.summary ?? payload.summary ?? "",
        sentiment: row.sentiment ?? payload.sentiment ?? "Needs Improvement",
        financialHealthScore: Number(row.financialhealthscore ?? payload.financialHealthScore ?? 0),
        categoryBreakdown: Array.isArray(payload.categoryBreakdown) ? payload.categoryBreakdown : EMPTY_BREAKDOWN,
        subscriptionWarnings: Array.isArray(payload.subscriptionWarnings) ? payload.subscriptionWarnings : EMPTY_WARNINGS,
        savingsTips: Array.isArray(payload.savingsTips) ? payload.savingsTips : EMPTY_TIPS,
    };
}
