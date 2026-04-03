"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IncomeExpenseChart } from "@/components/charts/income-expense-chart";
import { CategoryPieChart } from "@/components/charts/category-pie-chart";
import { DatePicker } from "@/components/ui/date-picker";
import { useUser } from "@/features/auth/hooks/use-user";
import { formatCurrency, convertCurrency } from "@/utils/currency-converter";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { useTransactions } from "@/features/transactions/hooks/use-transactions";
import { format } from "date-fns";

import { Tx } from "@/features/transactions/hooks/use-transactions";
import { Category } from "@/features/categories/hooks/use-categories";

interface DashboardViewProps {
    initialTransactions?: Tx[];
    initialCategories?: Category[];
    user?: {
        first_name?: string;
        email?: string;
    };
}

type DateRange = "This Month" | "Last 30 Days" | "This Year" | "Custom Range";

const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return format(new Date(dateStr), "MMM dd, yyyy");
};

export function DashboardView({ initialTransactions = [], initialCategories = [], user: serverUser }: DashboardViewProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Server-filtered data is passed here
    const { transactions, isLoading: txLoading } = useTransactions(initialTransactions, initialCategories);

    const currentPeriod = searchParams.get("period") || "this_month";
    const { user, profile, loading: userLoading, error } = useUser();
    const { t } = useLanguage();

    const loading = txLoading || userLoading;

    const username = profile?.first_name || profile?.username || user?.email?.split('@')[0] || serverUser?.first_name || "User";

    // Filter Buttons Logic (URL Based)
    const handleRangeChange = (period: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("period", period);
        // Clear custom dates if switching to preset
        if (period !== "custom") {
            params.delete("from");
            params.delete("to");
        }
        router.push(`/profile/dashboard?${params.toString()}`);
    };

    const handleCustomFilter = (from: string, to: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("period", "custom");
        params.set("from", from);
        params.set("to", to);
        router.push(`/profile/dashboard?${params.toString()}`);
    };

    // UI states for inputs (Temp, until applied)
    const [tempStartDate, setTempStartDate] = useState("");
    const [tempEndDate, setTempEndDate] = useState("");

    // Calculate Stats specifically from the transactions we HAVE (which are already filtered by Server)
    const { income, expense, balance } = useMemo(() => {
        let inc = 0;
        let exp = 0;
        const targetCurrency = profile?.currency || "USD";

        transactions.forEach(t => {
            const rawVal = parseFloat(t.amount.replace(/[^0-9.]/g, ""));
            const actualVal = t.positive ? rawVal : -rawVal;
            const convertedVal = convertCurrency(actualVal, t.currency || "USD", targetCurrency);

            if (actualVal > 0) inc += convertedVal;
            else exp += Math.abs(convertedVal);
        });

        return { income: inc, expense: exp, balance: inc - exp };
    }, [transactions, profile?.currency]);

    // Use transactions directly for charts as they are already filtered
    const filteredTxs = transactions;


    const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" }>({ key: "net", direction: "desc" });

    // Calculate Category Breakdown & Chart Data
    const { categoryBreakdown, categoryStats, monthlyStats } = useMemo(() => {
        const stats: Record<string, { income: number; expense: number }> = {};
        const targetCurrency = profile?.currency || "USD";

        // Group by Month for Chart
        const monthlyGroups: Record<string, { income: number; expense: number }> = {};

        filteredTxs.forEach(t => {
            const rawVal = parseFloat(t.amount.replace(/[^0-9.]/g, ""));
            const actualVal = t.positive ? rawVal : -rawVal;

            const sourceCurrency = t.currency || "USD";
            const converted = convertCurrency(actualVal, sourceCurrency, targetCurrency);

            const cat = t.category || "Uncategorized";

            // Category Stats
            if (!stats[cat]) stats[cat] = { income: 0, expense: 0 };
            if (actualVal > 0) stats[cat].income += converted;
            else stats[cat].expense += Math.abs(converted);

            // Monthly Stats (YYYY-MM-DD to simplify chart grouping if needed, or by month if range is large)
            // For simpler charts, let's group by "Day" if 'This Month', else 'Month'
            // For now, staying simple: group by date
            const dateKey = t.date;
            if (!monthlyGroups[dateKey]) monthlyGroups[dateKey] = { income: 0, expense: 0 };
            if (actualVal > 0) monthlyGroups[dateKey].income += converted;
            else monthlyGroups[dateKey].expense += Math.abs(converted);
        });

        // 1. Category Breakdown List
        let breakdown = Object.entries(stats)
            .map(([name, { income, expense }]) => ({
                name,
                income,
                expense,
                net: income - expense
            }));

        // Sort Breakdown
        breakdown.sort((a, b) => {
            const multiplier = sortConfig.direction === "asc" ? 1 : -1;
            switch (sortConfig.key) {
                case "name": return a.name.localeCompare(b.name) * multiplier;
                case "income": return (a.income - b.income) * multiplier;
                case "expense": return (a.expense - b.expense) * multiplier;
                case "percentIncome":
                    return ((income > 0 ? a.income / income : 0) - (income > 0 ? b.income / income : 0)) * multiplier;
                case "percentExpense":
                    return ((expense > 0 ? a.expense / expense : 0) - (expense > 0 ? b.expense / expense : 0)) * multiplier;
                case "net": default: return (a.net - b.net) * multiplier;
            }
        });

        // 2. Pie Chart Data: Top 5 + Others
        const pieData = breakdown
            .filter(b => b.expense > 0)
            .sort((a, b) => b.expense - a.expense)
            .map(b => ({ name: b.name, value: b.expense }));

        // 3. Bar Chart Data: Sort by date
        const barData = Object.entries(monthlyGroups)
            .map(([date, values]) => ({
                name: date,
                Income: values.income,
                Expense: values.expense
            }))
            .sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime());

        return {
            categoryBreakdown: breakdown,
            categoryStats: pieData,
            monthlyStats: barData
        };
    }, [filteredTxs, sortConfig, income, expense, profile?.currency]);

    const handleSort = (key: string) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === "desc" ? "asc" : "desc"
        }));
    };

    const getSortIcon = (key: string) => {
        if (sortConfig.key !== key) return <span className="text-slate-300 ml-1">↕</span>;
        return <span className="text-blue-600 ml-1">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>;
    };



    // Format for display
    const currentCurrency = profile?.currency || "USD";
    const displayStats = [
        {
            title: t.common.table.totalIncome,
            value: formatCurrency(income, currentCurrency),
            change: "+0%",
            positive: true,
            colorClass: "text-emerald-600"
        },
        {
            title: t.common.table.totalExpense,
            value: formatCurrency(expense, currentCurrency),
            change: "-0%",
            positive: false,
            colorClass: "text-rose-600"
        },
        {
            title: t.dashboard.balance,
            value: formatCurrency(balance, currentCurrency),
            change: "+0%",
            positive: balance >= 0,
            colorClass: balance >= 0 ? "text-emerald-600" : "text-rose-600"
        },
    ];

    if (loading && transactions.length === 0) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <main className="flex-1 overflow-auto px-8 py-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                            {loading ? (
                                <div className="h-9 w-48 animate-pulse rounded-md bg-slate-200" />
                            ) : (
                                <>
                                    {t.dashboard.welcome.replace("{name}", username || "User")}
                                    {error && <span className="text-sm font-normal text-red-500" title={error}>(Error loading profile)</span>}
                                </>
                            )}
                        </h1>
                        <div className="text-sm text-slate-600 mt-1">
                            {loading ? (
                                <div className="h-4 w-64 animate-pulse rounded bg-slate-200" />
                            ) : (
                                t.dashboard.overview.replace("{range}",
                                    currentPeriod === "custom" && (searchParams.get("from") || searchParams.get("to"))
                                        ? `${searchParams.get("from") ? formatDate(searchParams.get("from")!) : 'Start'} - ${searchParams.get("to") ? formatDate(searchParams.get("to")!) : 'Now'}`
                                        : (
                                            currentPeriod === "this_month" ? t.common.range.thisMonth :
                                                currentPeriod === "last_30_days" ? t.common.range.last30Days :
                                                    currentPeriod === "this_year" ? t.common.range.thisYear :
                                                        t.common.range.custom
                                        )
                                )
                            )}
                        </div>
                    </div>
                </header>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
                        {(["This Month", "Last 30 Days", "This Year", "Custom Range"] as const).map((range) => {
                            const valMap: Record<string, string> = {
                                "This Month": "this_month",
                                "Last 30 Days": "last_30_days",
                                "This Year": "this_year",
                                "Custom Range": "custom"
                            };
                            const val = valMap[range];
                            return (
                                <button
                                    key={range}
                                    onClick={() => handleRangeChange(val)}
                                    className={`rounded-lg border px-3 py-1.5 transition-colors ${currentPeriod === val
                                        ? "border-blue-100 bg-blue-50 text-blue-700"
                                        : "border-slate-200 bg-white hover:border-blue-200 hover:text-blue-700"
                                        }`}
                                >
                                    {
                                        range === "This Month" ? t.common.range.thisMonth :
                                            range === "Last 30 Days" ? t.common.range.last30Days :
                                                range === "This Year" ? t.common.range.thisYear :
                                                    t.common.range.custom
                                    }
                                </button>
                            );
                        })}
                    </div>

                    {currentPeriod === "custom" && (
                        <div className="flex items-center gap-2 text-sm animate-in fade-in slide-in-from-left-5 duration-300">
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500 font-medium">{t.common.range.from}</span>
                                <DatePicker
                                    date={tempStartDate}
                                    setDate={setTempStartDate}
                                    placeholder={t.common.range.from}
                                    className="w-[120px] border-none shadow-none text-slate-700 h-8 p-0 hover:bg-transparent"
                                />
                            </div>
                            <span className="text-slate-300">|</span>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500 font-medium">{t.common.range.to}</span>
                                <DatePicker
                                    date={tempEndDate}
                                    setDate={setTempEndDate}
                                    placeholder={t.common.range.to}
                                    minDate={tempStartDate}
                                    className="w-[120px] border-none shadow-none text-slate-700 h-8 p-0 hover:bg-transparent shadow-none"
                                />
                            </div>
                            <button
                                onClick={() => handleCustomFilter(tempStartDate, tempEndDate)}
                                className="ml-2 rounded-lg bg-blue-600 px-4 py-1.5 text-white shadow-sm hover:bg-blue-700 transition-colors"
                            >
                                {t.common.range.filter}
                            </button>
                        </div>
                    )}
                </div>

                <section className="mt-4 grid gap-4 md:grid-cols-3">
                    {displayStats.map((stat) => (
                        <div key={stat.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300">
                            <div className="text-sm font-semibold text-slate-700">{stat.title}</div>
                            <div className={`mt-3 text-3xl font-bold ${stat.colorClass}`}>{stat.value}</div>
                            <div className={`mt-1 text-sm font-semibold ${stat.positive ? "text-emerald-600" : "text-rose-600"}`}>
                                {stat.change}
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="text-sm font-semibold text-slate-800">
                            {t.dashboard.incomeVsExpense}
                        </div>
                        <div className="mt-4 h-64 w-full">
                            <IncomeExpenseChart
                                data={monthlyStats}
                                incomeLabel={t.common.types.income}
                                expenseLabel={t.common.types.expense}
                            />
                        </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="text-sm font-semibold text-slate-800">
                            {t.dashboard.expenseByCategory}
                        </div>
                        <div className="mt-4 h-64 w-full">
                            <CategoryPieChart data={categoryStats} />
                        </div>
                    </div>
                </section>

                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="text-sm font-semibold text-slate-800">{t.dashboard.spendingByCategory}</div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-slate-700">
                            <thead>
                                <tr className="text-left text-slate-500 border-b border-slate-100 select-none">
                                    <th className="py-2 pr-4 w-[25%] font-semibold cursor-pointer hover:bg-slate-50" onClick={() => handleSort("name")}>
                                        {t.common.table.category} {getSortIcon("name")}
                                    </th>
                                    <th className="py-2 pr-4 text-right w-[15%] font-semibold text-emerald-600 cursor-pointer hover:bg-slate-50" onClick={() => handleSort("income")}>
                                        {t.common.table.totalIncome} {getSortIcon("income")}
                                    </th>
                                    <th className="py-2 pr-4 text-center w-[12%] font-semibold cursor-pointer hover:bg-slate-50" onClick={() => handleSort("percentIncome")}>
                                        {t.common.table.percentIncome} {getSortIcon("percentIncome")}
                                    </th>
                                    <th className="py-2 pr-4 text-right w-[15%] font-semibold text-rose-600 cursor-pointer hover:bg-slate-50" onClick={() => handleSort("expense")}>
                                        {t.common.table.totalExpense} {getSortIcon("expense")}
                                    </th>
                                    <th className="py-2 pr-4 text-center w-[12%] font-semibold cursor-pointer hover:bg-slate-50" onClick={() => handleSort("percentExpense")}>
                                        {t.common.table.percentExpense} {getSortIcon("percentExpense")}
                                    </th>
                                    <th className="py-2 pr-4 text-right w-[21%] font-semibold cursor-pointer hover:bg-slate-50" onClick={() => handleSort("net")}>
                                        {t.common.table.netAmount} {getSortIcon("net")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {categoryBreakdown.length > 0 ? categoryBreakdown.map((cat) => {
                                    // Use absolute values for percentage calcs to avoid negatives messing up ratio if any logic allows
                                    const percentIncome = income > 0 ? (cat.income / income) * 100 : 0;
                                    const percentExpense = expense > 0 ? (cat.expense / expense) * 100 : 0;
                                    const fmt = (val: number) => formatCurrency(val, currentCurrency);

                                    return (
                                        <tr key={cat.name} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-3 pr-4 font-medium text-slate-900 flex items-center gap-2">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600 shrink-0">
                                                    {cat.name.charAt(0)}
                                                </span>
                                                <span className="truncate">{cat.name}</span>
                                            </td>

                                            {/* Total Income */}
                                            <td className="py-3 pr-4 text-right font-medium text-emerald-600">
                                                {cat.income > 0.01 ? fmt(cat.income) : "-"}
                                            </td>

                                            {/* % Income */}
                                            <td className="py-3 pr-4 text-center">
                                                {percentIncome > 0 && (
                                                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                                                        {percentIncome.toFixed(1)}%
                                                    </span>
                                                )}
                                            </td>

                                            {/* Total Expense */}
                                            <td className="py-3 pr-4 text-right font-medium text-rose-600">
                                                {cat.expense > 0.01 ? fmt(cat.expense) : "-"}
                                            </td>

                                            {/* % Expense */}
                                            <td className="py-3 pr-4 text-center">
                                                {percentExpense > 0 && (
                                                    <span className="inline-block px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-medium">
                                                        {percentExpense.toFixed(1)}%
                                                    </span>
                                                )}
                                            </td>

                                            {/* Net Amount */}
                                            <td className={`py-3 pr-4 text-right font-bold ${cat.net >= 0 ? "text-emerald-700" : "text-rose-700"}`}>
                                                {cat.net >= 0 ? "+" : ""}{fmt(cat.net)}
                                            </td>
                                        </tr>
                                    );
                                }) : (
                                    <tr>
                                        <td colSpan={6} className="py-8 text-center text-slate-500">
                                            {t.dashboard.noTransactions}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

