"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const IncomeExpenseChart = dynamic(() => import("@/components/charts/income-expense-chart").then(mod => mod.IncomeExpenseChart), {
    ssr: false,
    loading: () => <Skeleton className="h-full w-full rounded-xl" />
});

const CategoryPieChart = dynamic(() => import("@/components/charts/category-pie-chart").then(mod => mod.CategoryPieChart), {
    ssr: false,
    loading: () => <Skeleton className="h-full w-full rounded-xl" />
});
import { DatePicker } from "@/components/ui/date-picker";
import { useUser } from "@/features/auth/hooks/use-user";
import { formatCurrency, convertCurrency } from "@/utils/currency-converter";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { useTransactions } from "@/features/transactions/hooks/use-transactions";
import { format } from "date-fns";
import { ReadonlyStatus } from "@/components/ui/readonly-status";

import { Tx } from "@/features/transactions/hooks/use-transactions";
import { Category } from "@/features/categories/hooks/use-categories";

type DateRange = "This Month" | "Last 30 Days" | "This Year" | "Custom Range";

const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return format(new Date(dateStr), "MMM dd, yyyy");
};

function getDateRangeForPeriod(period: string, from?: string, to?: string) {
    const now = new Date();
    let startDate: string | undefined;
    let endDate: string | undefined;

    if (period === "this_month") {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).toISOString();
    } else if (period === "last_30_days") {
        const start = new Date();
        start.setDate(now.getDate() - 30);
        startDate = start.toISOString();
        endDate = now.toISOString();
    } else if (period === "this_year") {
        startDate = new Date(now.getFullYear(), 0, 1).toISOString();
        endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59).toISOString();
    } else if (period === "custom" && from && to) {
        const parsedFrom = new Date(from);
        const parsedTo = new Date(to);
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 10);
        if (!isNaN(parsedFrom.getTime()) && !isNaN(parsedTo.getTime()) &&
            parsedFrom >= minDate && parsedTo >= minDate && parsedTo >= parsedFrom) {
            startDate = parsedFrom.toISOString();
            const end = new Date(parsedTo);
            end.setHours(23, 59, 59, 999);
            endDate = end.toISOString();
        }
    }

    return { startDate, endDate };
}

export function DashboardView() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPeriod = searchParams.get("period") || "this_month";
    const customFrom = searchParams.get("from") || undefined;
    const customTo = searchParams.get("to") || undefined;

    // Fetch transactions with date filter via client-side API
    const { transactions, isLoading: txLoading, fetchTransactions } = useTransactions();
    const { user, profile, loading: userLoading } = useUser();
    const { t } = useLanguage();

    // Fetch transactions when period/params change
    useEffect(() => {
        const { startDate, endDate } = getDateRangeForPeriod(currentPeriod, customFrom, customTo);
        fetchTransactions({ startDate, endDate });
    }, [currentPeriod, customFrom, customTo, fetchTransactions]);

    const loading = txLoading || userLoading;

    const username = profile?.first_name || profile?.username || user?.email?.split('@')[0] || "User";

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

    // Calculate Stats specifically from the transactions we HAVE (which are already filtered)
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
        if (sortConfig.key !== key) return <span className="text-slate-300 ml-1">&#8597;</span>;
        return <span className="text-blue-600 ml-1">{sortConfig.direction === "asc" ? "\u2191" : "\u2193"}</span>;
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
            <main className="flex-1 overflow-y-auto bg-slate-50/50">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <div className="space-y-0.5 sm:space-y-1">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2 sm:gap-3">
                                {loading ? (
                                    <div className="h-7 w-40 sm:h-9 sm:w-48 animate-pulse rounded-md bg-slate-200" />
                                ) : (
                                    <>
                                        {t.dashboard.welcome.replace("{name}", username || "User")}
                                        <div className="hidden sm:block">
                                            <ReadonlyStatus />
                                        </div>
                                    </>
                                )}
                            </h1>
                            <div className="text-xs sm:text-sm text-slate-500 font-medium">
                                {loading ? (
                                    <div className="h-3 w-48 sm:h-4 sm:w-64 animate-pulse rounded bg-slate-200" />
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
                        <div className="sm:hidden flex translate-y-[-4px]">
                            <ReadonlyStatus />
                        </div>
                    </header>

                    <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3 sm:p-4 flex items-start gap-3 sm:gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div>
                            <h3 className="text-xs sm:text-sm font-bold text-blue-900">{t.dashboard.status.readonly}</h3>
                            <p className="mt-0.5 text-[11px] sm:text-sm text-blue-700/80 leading-relaxed">
                                {t.dashboard.status.manageInApp}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
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
                                        className={`rounded-lg border px-3 py-1.5 transition-colors text-xs sm:text-sm whitespace-nowrap ${currentPeriod === val
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
                            <div className="flex flex-wrap items-center gap-3 text-sm animate-in fade-in slide-in-from-left-5 duration-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 font-medium whitespace-nowrap">{t.common.range.from}</span>
                                    <DatePicker
                                        date={tempStartDate}
                                        setDate={setTempStartDate}
                                        placeholder={t.common.range.from}
                                        className="w-[120px] border-slate-200 shadow-none text-slate-700 h-9"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 font-medium whitespace-nowrap">{t.common.range.to}</span>
                                    <DatePicker
                                        date={tempEndDate}
                                        setDate={setTempEndDate}
                                        placeholder={t.common.range.to}
                                        minDate={tempStartDate}
                                        className="w-[120px] border-slate-200 shadow-none text-slate-700 h-9"
                                    />
                                </div>
                                <button
                                    onClick={() => handleCustomFilter(tempStartDate, tempEndDate)}
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 transition-colors font-bold text-xs"
                                >
                                    {t.common.range.filter}
                                </button>
                            </div>
                        )}
                    </div>

                    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {displayStats.map((stat) => (
                            <div key={stat.title} className="rounded-[1.5rem] sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.title}</div>
                                <div className={`mt-3 text-3xl font-black ${stat.colorClass} tracking-tight`}>{stat.value}</div>
                                <div className={`mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${stat.positive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                                    {stat.change}
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[1.5rem] sm:rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">
                                {t.dashboard.incomeVsExpense}
                            </div>
                            <div className="h-64 sm:h-80 w-full">
                                <IncomeExpenseChart
                                    data={monthlyStats}
                                    incomeLabel={t.common.types.income}
                                    expenseLabel={t.common.types.expense}
                                />
                            </div>
                        </div>
                        <div className="rounded-[1.5rem] sm:rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">
                                {t.dashboard.expenseByCategory}
                            </div>
                            <div className="h-64 sm:h-80 w-full">
                                <CategoryPieChart data={categoryStats} />
                            </div>
                        </div>
                    </section>

                    <section className="rounded-[1.5rem] sm:rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden">
                        <div className="mb-6">
                            <div className="text-sm font-bold text-slate-900 uppercase tracking-widest text-[10px]">{t.dashboard.spendingByCategory}</div>
                        </div>
                        <div className="overflow-x-auto -mx-6 sm:mx-0">
                            <div className="inline-block min-w-full align-middle px-6 sm:px-0">
                                <table className="w-full text-sm text-slate-700 min-w-[800px]">
                                    <thead>
                                        <tr className="text-left text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 select-none">
                                            <th className="py-4 pr-4 w-[25%] cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort("name")}>
                                                {t.common.table.category} {getSortIcon("name")}
                                            </th>
                                            <th className="py-4 pr-4 text-right w-[15%] text-emerald-600 cursor-pointer hover:text-emerald-700 transition-colors" onClick={() => handleSort("income")}>
                                                {t.common.table.totalIncome} {getSortIcon("income")}
                                            </th>
                                            <th className="py-4 pr-4 text-center w-[12%] cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort("percentIncome")}>
                                                {t.common.table.percentIncome} {getSortIcon("percentIncome")}
                                            </th>
                                            <th className="py-4 pr-4 text-right w-[15%] text-rose-600 cursor-pointer hover:text-rose-700 transition-colors" onClick={() => handleSort("expense")}>
                                                {t.common.table.totalExpense} {getSortIcon("expense")}
                                            </th>
                                            <th className="py-4 pr-4 text-center w-[12%] cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort("percentExpense")}>
                                                {t.common.table.percentExpense} {getSortIcon("percentExpense")}
                                            </th>
                                            <th className="py-4 pr-4 text-right w-[21%] cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSort("net")}>
                                                {t.common.table.netAmount} {getSortIcon("net")}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {categoryBreakdown.length > 0 ? categoryBreakdown.map((cat) => {
                                            const percentIncomeValue = income > 0 ? (cat.income / income) * 100 : 0;
                                            const percentExpenseValue = expense > 0 ? (cat.expense / expense) * 100 : 0;
                                            const fmt = (val: number) => formatCurrency(val, currentCurrency);

                                            return (
                                                <tr key={cat.name} className="hover:bg-slate-50/50 transition-colors group">
                                                    <td className="py-4 pr-4 font-bold text-slate-900">
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                                {cat.name.charAt(0)}
                                                            </div>
                                                            <span className="truncate">{cat.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 pr-4 text-right font-bold text-emerald-600">
                                                        {cat.income > 0.01 ? fmt(cat.income) : "-"}
                                                    </td>
                                                    <td className="py-4 pr-4 text-center">
                                                        {percentIncomeValue > 0 && (
                                                            <span className="inline-block px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                                                                {percentIncomeValue.toFixed(1)}%
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="py-4 pr-4 text-right font-bold text-rose-600">
                                                        {cat.expense > 0.01 ? fmt(cat.expense) : "-"}
                                                    </td>
                                                    <td className="py-4 pr-4 text-center">
                                                        {percentExpenseValue > 0 && (
                                                            <span className="inline-block px-2 py-0.5 rounded-lg bg-rose-50 text-rose-700 text-[10px] font-bold">
                                                                {percentExpenseValue.toFixed(1)}%
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className={`py-4 pr-4 text-right font-black ${cat.net >= 0 ? "text-emerald-700" : "text-rose-700"}`}>
                                                        {cat.net >= 0 ? "+" : ""}{fmt(cat.net)}
                                                    </td>
                                                </tr>
                                            );
                                        }) : (
                                            <tr>
                                                <td colSpan={6} className="py-12 text-center text-slate-400 font-medium">
                                                    {t.dashboard.noTransactions}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
