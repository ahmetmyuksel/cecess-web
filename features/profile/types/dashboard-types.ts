export type DashboardStat = {
    title: string;
    value: string;
    change: string;
    positive: boolean;
};

export type Transaction = {
    name: string;
    category: string;
    date: string;
    amount: string;
    positive: boolean;
    currency?: string;
};

export type MonthlyStat = {
    name: string;
    Income: number;
    Expense: number;
};

export type CategoryStat = {
    name: string;
    value: number;
};

export type DashboardData = {
    stats: DashboardStat[];
    transactions: Transaction[];
    allTransactions: Transaction[]; // For client-side filtering
    monthlyStats?: MonthlyStat[];
    categoryStats?: CategoryStat[];
};
