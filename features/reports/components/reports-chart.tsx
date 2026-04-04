"use client";

import { useState } from "react";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { ReportsTrends } from "@/features/reports/domain/report-types";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/utils/currency-converter";

type ReportsChartProps = {
    data: ReportsTrends;
    loading?: boolean;
};

export function ReportsChart({ data, loading = false }: ReportsChartProps) {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState("Total");

    if (loading) {
        return <div className="h-64 flex items-center justify-center bg-slate-50 rounded-xl animate-pulse">{t.reports.chart.loading}</div>;
    }

    if (!data || data.chartData.length === 0) {
        return (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center py-12">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">SB</div>
                <h3 className="text-lg font-medium text-slate-900">{t.reports.chart.emptyTitle}</h3>
                <p className="text-slate-500 max-w-sm mx-auto mt-2">{t.reports.chart.emptyDescription}</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <header className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">{t.reports.chart.title}</h3>
                    <p className="text-sm text-slate-500">{t.reports.chart.subtitle}</p>
                </div>

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="Total">{t.reports.chart.totalSpending}</option>
                    {data.allCategories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </header>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.chartData}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} dy={10} />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                            formatter={(value: any) => [formatCurrency(Number(value), "USD"), selectedCategory]}
                        />
                        <Area
                            type="monotone"
                            dataKey={selectedCategory}
                            stroke="#6366f1"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 flex justify-between items-center text-xs text-slate-400 px-2">
                <span>{t.reports.chart.lastMonths}</span>
                <span>{t.reports.chart.recordedExpenses}</span>
            </div>
        </div>
    );
}
