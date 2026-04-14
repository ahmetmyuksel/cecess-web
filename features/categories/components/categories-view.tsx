"use client";

import { useLanguage } from "@/features/i18n/hooks/use-language";
import { ReadonlyStatus } from "@/components/ui/readonly-status";
import { useCategories, Category } from "../hooks/use-categories";

export function CategoriesView() {
    const { t } = useLanguage();
    const { categories, loading } = useCategories();

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <main className="flex-1 overflow-auto px-8 py-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">{t.categories.title}</h1>
                        <p className="text-sm text-slate-600">{t.dashboard.status.manageInApp}</p>
                    </div>
                    <ReadonlyStatus />
                </header>

                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    {loading ? (
                        <div className="space-y-4 animate-pulse">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50">
                                    <div className="h-4 bg-slate-100 rounded w-8"></div>
                                    <div className="h-4 bg-slate-100 rounded w-32"></div>
                                    <div className="h-4 bg-slate-100 rounded w-16"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="overflow-hidden rounded-lg border border-slate-100">
                            <table className="w-full text-sm text-slate-700">
                                <thead>
                                    <tr className="text-left text-slate-500 bg-slate-50 border-b border-slate-100 select-none">
                                        <th className="py-2 px-4 cursor-default w-10 text-center">
                                            #
                                        </th>
                                        <th className="py-2 px-4">
                                            {t.categories.table.name}
                                        </th>
                                        <th className="py-2 px-4">
                                            {t.categories.table.type}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    {categories.length === 0 ? (
                                        <tr>
                                            <td colSpan={3} className="py-12 text-center text-slate-500 italic">
                                                {t.dashboard.empty.generic}
                                            </td>
                                        </tr>
                                    ) : (
                                        categories.map((cat, index) => (
                                            <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 w-10 text-center text-slate-400 font-mono text-xs">
                                                    {String(index + 1).padStart(2, '0')}
                                                </td>
                                                <td className="py-3 px-4 font-medium text-slate-900">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xl">{cat.icon ?? "\uD83D\uDCC1"}</span>
                                                        <span>{cat.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cat.type === "Income" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                                                        {cat.type === "Income" ? t.common.types.income : (cat.type === "Expense" ? t.common.types.expense : cat.type)}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
