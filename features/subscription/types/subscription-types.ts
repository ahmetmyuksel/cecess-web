export type SubscriptionTier = 'Free' | 'Premium' | 'Pro';

export interface PlanFeature {
    key: string; // Translation key
    included: boolean;
}

export interface TierDetails {
    id: SubscriptionTier;
    price: {
        monthly: number;
        yearly: number;
    };
    popular?: boolean;
}

export const MAX_FREE_TRANSACTIONS = 50;
export const MAX_FREE_ACCOUNTS = 1;

export const TIERS: TierDetails[] = [
    {
        id: 'Free',
        price: { monthly: 0, yearly: 0 }
    },
    {
        id: 'Premium',
        price: { monthly: 4.99, yearly: 49.99 },
        popular: true
    },
    {
        id: 'Pro',
        price: { monthly: 9.99, yearly: 99.99 }
    }
];

// Feature keys for translation lookups
export const PLAN_FEATURES = [
    "unlimitedTransactions",
    "exportData",
    "multiCurrency",
    "aiInsights",
    "advancedCharts",
    "prioritySupport"
] as const;

export const TIER_FEATURES: Record<SubscriptionTier, Record<string, boolean>> = {
    Free: {
        unlimitedTransactions: false,
        exportData: false,
        advancedCharts: false,
        multiCurrency: false,
        prioritySupport: false,
        aiInsights: false
    },
    Premium: {
        unlimitedTransactions: true,
        exportData: true,
        advancedCharts: false,
        multiCurrency: true,
        prioritySupport: false,
        aiInsights: true
    },
    Pro: {
        unlimitedTransactions: true,
        exportData: true,
        advancedCharts: true,
        multiCurrency: true,
        prioritySupport: true,
        aiInsights: true
    }
};
