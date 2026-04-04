export type PricingPlanContent = {
    key: "free" | "premium" | "pro";
    features: string[];
};

export const pricingPlanContent: PricingPlanContent[] = [
    {
        key: "free",
        features: [
            "100 transactions limit",
            "Basic categorization",
            "1 AI request/day",
        ],
    },
    {
        key: "premium",
        features: [
            "100 transactions limit",
            "Basic categorization",
            "1 AI request/day",
            "Unlimited Transactions",
            "Detailed Charts & Filtering",
            "Budget Limits & Alerts",
        ],
    },
    {
        key: "pro",
        features: [
            "100 transactions limit",
            "Basic categorization",
            "1 AI request/day",
            "Unlimited Transactions",
            "Detailed Charts & Filtering",
            "Budget Limits & Alerts",
            "Advanced AI Financial Analysis",
            "Future Budget Forecasts",
            "Excel / PDF Data Export",
        ],
    },
];

export const pricingComparisonRows = [
    {
        feature: "100 transactions limit",
        values: ["yes", "yes", "yes"],
    },
    {
        feature: "Basic categorization",
        values: ["yes", "yes", "yes"],
    },
    {
        feature: "1 AI request/day",
        values: ["yes", "yes", "yes"],
    },
    {
        feature: "Unlimited Transactions",
        values: ["no", "yes", "yes"],
    },
    {
        feature: "Detailed Charts & Filtering",
        values: ["no", "yes", "yes"],
    },
    {
        feature: "Budget Limits & Alerts",
        values: ["no", "yes", "yes"],
    },
    {
        feature: "Advanced AI Financial Analysis",
        values: ["no", "no", "yes"],
    },
    {
        feature: "Future Budget Forecasts",
        values: ["no", "no", "yes"],
    },
    {
        feature: "Excel / PDF Data Export",
        values: ["no", "no", "yes"],
    },
] as const;
