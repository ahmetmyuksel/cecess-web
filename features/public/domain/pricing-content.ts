export type PricingPlanContent = {
    key: "free" | "premium" | "pro";
    featureKeys: string[];
};

export const pricingPlanContent: PricingPlanContent[] = [
    {
        key: "free",
        featureKeys: [
            "transactionLimit",
            "manualEntry",
            "ocrScan",
            "basicReports",
            "singleCurrency",
            "aiRequestFree",
        ],
    },
    {
        key: "premium",
        featureKeys: [
            "unlimitedTransactions",
            "manualEntry",
            "ocrScan",
            "basicReports",
            "multiCurrency",
            "detailedCharts",
            "budgetAlerts",
            "aiAnalysis",
            "aiInsightsHub",
            "unlimitedAiRequests",
        ],
    },
    {
        key: "pro",
        featureKeys: [
            "unlimitedTransactions",
            "manualEntry",
            "ocrScan",
            "basicReports",
            "multiCurrency",
            "detailedCharts",
            "budgetAlerts",
            "aiAnalysis",
            "aiInsightsHub",
            "unlimitedAiRequests",
            "excelCsvExport",
            "prioritySupport",
        ],
    },
];

export type ComparisonRow = {
    featureKey: string;
    values: [string, string, string]; // [Free, Premium, Pro]
};

export const pricingComparisonRows: ComparisonRow[] = [
    { featureKey: "transactionLimit", values: ["100", "unlimited", "unlimited"] },
    { featureKey: "manualEntry", values: ["yes", "yes", "yes"] },
    { featureKey: "ocrScan", values: ["yes", "yes", "yes"] },
    { featureKey: "basicReports", values: ["yes", "yes", "yes"] },
    { featureKey: "singleCurrency", values: ["yes", "yes", "yes"] },
    { featureKey: "aiRequestFree", values: ["1/week", "unlimited", "unlimited"] },
    { featureKey: "multiCurrency", values: ["no", "yes", "yes"] },
    { featureKey: "detailedCharts", values: ["no", "yes", "yes"] },
    { featureKey: "budgetAlerts", values: ["no", "yes", "yes"] },
    { featureKey: "aiAnalysis", values: ["no", "yes", "yes"] },
    { featureKey: "aiInsightsHub", values: ["no", "yes", "yes"] },
    { featureKey: "excelCsvExport", values: ["no", "no", "yes"] },
    { featureKey: "prioritySupport", values: ["no", "no", "comingSoon"] },
];
