"use client";

import { useUser } from "@/features/auth/hooks/use-user";
import { formatCurrency } from "@/utils/currency-converter";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { ReadonlyStatus } from "@/components/ui/readonly-status";
import { useAccounts } from "@/features/accounts/hooks/use-accounts";

type Account = {
    id: string;
    name: string;
    type: string;
    balance: string;
    balanceValue: number;
    positive: boolean;
    source: "manual" | "gocardless";
    currency: string;
    is_encrypted?: boolean;
    user_id?: string;
    created_at?: string;
};

export function AccountsView() {
    const { profile } = useUser();
    const { t } = useLanguage();
    const { accounts: rawAccounts, loading } = useAccounts();

    const accounts: Account[] = rawAccounts.map(acc => ({
        id: acc.id,
        name: acc.name,
        type: acc.type,
        balanceValue: Number(acc.balance),
        currency: acc.currency || "USD",
        balance: formatCurrency(acc.balance, acc.currency || "USD"),
        positive: acc.balance >= 0,
        source: acc.is_encrypted ? "gocardless" : "manual",
        is_encrypted: acc.is_encrypted,
        user_id: acc.user_id,
        created_at: acc.created_at
    }));

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <main className="flex-1 overflow-auto px-8 py-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">{t.accounts.title}</h1>
                        <p className="text-sm text-slate-600">{t.accounts.subtitle}</p>
                    </div>
                    <ReadonlyStatus />
                </header>

                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    {loading ? (
                        <div className="space-y-4 animate-pulse">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50">
                                    <div className="h-4 bg-slate-100 rounded w-32"></div>
                                    <div className="h-4 bg-slate-100 rounded w-20"></div>
                                    <div className="h-4 bg-slate-100 rounded w-24"></div>
                                </div>
                            ))}
                        </div>
                    ) : accounts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="mb-4 text-4xl">&#127974;</div>
                            <h3 className="text-lg font-medium text-slate-900">{t.accounts.noAccounts.title}</h3>
                            <p className="mt-1 max-w-sm text-sm text-slate-500">
                                {t.dashboard.empty.generic}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-slate-700">
                                <thead>
                                    <tr className="text-left text-slate-500">
                                        <th className="py-2 pr-4">{t.accounts.table.name}</th>
                                        <th className="py-2 pr-4">{t.accounts.table.type}</th>
                                        <th className="py-2 pr-4 text-right">{t.accounts.table.balance}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {accounts.map((acc) => (
                                        <tr key={acc.id}>
                                            <td className="py-3 pr-4">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-900">{acc.name}</span>
                                                    {acc.source === "gocardless" && (
                                                        <span className="text-[10px] uppercase tracking-wide text-blue-600 font-bold flex items-center gap-1">
                                                            &#9889; Linked
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="py-3 pr-4">{acc.type}</td>
                                            <td className={`py-3 pr-4 text-right font-semibold ${acc.positive ? "text-slate-900" : "text-rose-600"}`}>
                                                {acc.balance}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
