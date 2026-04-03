"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/features/auth/hooks/use-user";
import { getReportsHistoryAction, ReportHistoryItem } from "@/features/reports/actions/get-reports-history-action";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryExpenseChart = dynamic(() => import("@/features/reports/components/category-expense-chart").then(mod => mod.CategoryExpenseChart), { 
    ssr: false,
    loading: () => <Skeleton className="h-64 w-full rounded-3xl" />
});

const ReportsChart = dynamic(() => import("@/features/reports/components/reports-chart").then(mod => mod.ReportsChart), { 
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full rounded-2xl" />
});
import Link from "next/link";
import { useLanguage } from "@/features/i18n/hooks/use-language";

export function ReportsView({ isPro = false }: { isPro?: boolean }) {
    const { profile, loading } = useUser();
    const { language } = useLanguage();
    const [report, setReport] = useState<any | null>(null);
    const [history, setHistory] = useState<ReportHistoryItem[]>([]);
    const [showHistory, setShowHistory] = useState(true);

    // Month Selection
    const [selectedMonth, setSelectedMonth] = useState(() => new Date().toISOString().slice(0, 7)); // YYYY-MM

    // Generate last 12 months for dropdown
    const months = Array.from({ length: 12 }, (_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        const value = d.toISOString().slice(0, 7);
        const label = d.toLocaleString(language === 'tr' ? 'tr-TR' : 'default', { month: 'long', year: 'numeric' });
        return { value, label };
    });

    const hasAccess = isPro || profile?.subscription_tier === "Pro";

    // Load History
    useEffect(() => {
        if (hasAccess) {
            getReportsHistoryAction().then(res => {
                if (res.success && res.data) {
                    setHistory(res.data);
                }
            });
        }
    }, [hasAccess]);

    const handleGenerate = async () => {
        alert("Generating reports is only available in the mobile app.");
    };

    const handleLoadHistory = (item: ReportHistoryItem) => {
        if (item.data) {
            setReport(item.data as any);
            setSelectedMonth(item.month);
            setShowHistory(false); // Close mobile history if open
        }
    };

    if (!hasAccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-full text-white text-4xl mb-6 shadow-lg">✨</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Financial Analyst</h1>
                <p className="text-slate-600 max-w-md mb-8">Unlock deep insights, subscription detection, and personalized savings tips.</p>
                <Link href="/profile/subscription" className="rounded-full bg-indigo-600 px-8 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition">
                    Upgrade to Pro (€9.99/mo)
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">AI Financial Report</h1>
                    <p className="text-slate-500">Your personal CFO analysis.</p>
                </div>

                <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="bg-transparent border-none text-sm font-medium text-slate-700 focus:ring-0 cursor-pointer pl-4 pr-8 py-2 outline-none"
                    >
                        {months.map(m => (
                            <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                    </select>
                    <button
                        onClick={handleGenerate}
                        className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-slate-800 transition disabled:opacity-50"
                    >
                        Generate in App
                    </button>
                </div>
            </header>

            {/* History Section (Horizontal List) */}
            {history.length > 0 && (
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-slate-700 flex items-center gap-2 text-sm uppercase tracking-wide">
                            📜 Recent Reports
                        </h3>
                        <button
                            onClick={() => setShowHistory(!showHistory)}
                            className="text-indigo-600 text-xs font-medium hover:underline"
                        >
                            {showHistory ? "Hide" : "Show All"}
                        </button>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${showHistory ? '' : 'hidden'}`}>
                        {history.map(item => (
                            <button
                                key={item.id}
                                onClick={() => handleLoadHistory(item)}
                                className={`text-left p-4 rounded-xl border transition group relative overflow-hidden ${report?.summary === item.summary
                                    ? "bg-indigo-50 border-indigo-200 shadow-sm"
                                    : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-slate-800">{item.month}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${item.sentiment === "Great" ? "bg-emerald-100 text-emerald-700" :
                                        item.sentiment === "Good" ? "bg-blue-100 text-blue-700" :
                                            "bg-amber-100 text-amber-700"
                                        }`}>
                                        {item.sentiment}
                                    </span>
                                </div>
                                <div className="text-xs text-slate-500 mb-1">
                                    {new Date(item.created_at).toLocaleDateString()} • {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${item.financial_health_score >= 80 ? "bg-emerald-500" :
                                                item.financial_health_score >= 50 ? "bg-blue-500" : "bg-amber-500"
                                                }`}
                                            style={{ width: `${item.financial_health_score}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">{item.financial_health_score}/100</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            )}

            <section className="fade-in">
                <ReportsChart />
            </section>



            {report && (
                <div className="space-y-6 fade-in">
                    {/* Score & Sentiment */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">✨</div>
                            <h2 className="text-lg font-medium text-indigo-200 mb-4 flex items-center gap-2">
                                <span className="bg-indigo-500/20 p-1.5 rounded-lg">📝</span> Executive Summary
                            </h2>
                            <p className="text-lg leading-relaxed opacity-90 font-light">{report.summary}</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-500"></div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Financial Health</h3>
                            <div className="relative flex items-center justify-center mb-4">
                                <svg className="w-40 h-40 transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        stroke={report.financialHealthScore >= 80 ? "#10b981" : report.financialHealthScore >= 50 ? "#3b82f6" : "#ef4444"}
                                        strokeWidth="12"
                                        fill="transparent"
                                        strokeDasharray={439.82}
                                        strokeDashoffset={439.82 - (439.82 * report.financialHealthScore) / 100}
                                        className="transition-all duration-1000 ease-out"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-5xl font-bold text-slate-900">{report.financialHealthScore}</span>
                                    <span className="text-xs text-slate-400 font-medium">/ 100</span>
                                </div>
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border ${report.sentiment === "Great" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                                report.sentiment === "Good" ? "bg-blue-50 text-blue-700 border-blue-100" :
                                    "bg-amber-50 text-amber-700 border-amber-100"
                                }`}>
                                {report.sentiment}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Breakdown Chart */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg">
                            <h3 className="text-slate-800 font-bold mb-6 flex items-center gap-2">
                                <span className="bg-orange-100 text-orange-600 p-1.5 rounded-lg">📊</span> Spending Breakdown
                            </h3>
                            {report.categoryBreakdown && report.categoryBreakdown.length > 0 ? (
                                <CategoryExpenseChart data={report.categoryBreakdown} />
                            ) : (
                                <p className="text-slate-400 italic text-sm text-center py-10">No category data available.</p>
                            )}
                        </div>

                        {/* Subscriptions & Tips */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg">
                                <h3 className="text-slate-800 font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg">🔄</span> Detected Subscriptions
                                </h3>
                                {report.subscriptionWarnings.length > 0 ? (
                                    <ul className="space-y-2">
                                        {report.subscriptionWarnings.map((sub: string, i: number) => (
                                            <li key={i} className="bg-slate-50 text-slate-700 px-4 py-3 rounded-xl text-sm font-medium border border-slate-100 flex items-center justify-between group hover:border-indigo-200 transition">
                                                {sub}
                                                <span className="opacity-0 group-hover:opacity-100 text-indigo-500 transition">→</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-slate-500 italic text-sm">No recurring subscriptions detected.</p>
                                )}
                            </div>

                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-100 shadow-sm">
                                <h3 className="text-emerald-800 font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-white text-emerald-600 p-1.5 rounded-lg shadow-sm">💡</span> CFO Recommendations
                                </h3>
                                <ul className="space-y-3">
                                    {report.savingsTips.map((tip: string, i: number) => (
                                        <li key={i} className="flex gap-3 text-emerald-900 text-sm bg-white/60 p-3 rounded-xl border border-emerald-100/50">
                                            <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
