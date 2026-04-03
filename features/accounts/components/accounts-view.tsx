"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/features/auth/hooks/use-user";
import { formatCurrency } from "@/utils/currency-converter";
import { useLanguage } from "@/features/i18n/hooks/use-language";

const CURRENCIES = ["USD", "EUR", "TRY", "GBP", "JPY"];

export type AccountDTO = {
    id: string;
    name: string;
    type: string;
    balance: number | string;
    currency: string;
    is_encrypted?: boolean;
    user_id?: string;
    created_at?: string;
};

type Account = AccountDTO & {
    balance: string; // Formatted display string
    balanceValue: number; // Raw number
    positive: boolean;
    source: "manual" | "gocardless";
};

interface AccountsViewProps {
    initialAccounts?: any[];
}

export function AccountsView({ initialAccounts = [] }: AccountsViewProps) {
    const { profile } = useUser();
    const { t } = useLanguage();

    const mapToView = (data: any[]): Account[] => {
        return data.map(acc => ({
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
    };

    const [accounts, setAccounts] = useState<Account[]>(mapToView(initialAccounts));

    useEffect(() => {
        setAccounts(mapToView(initialAccounts));
    }, [initialAccounts]);

    // Read-only on the web. Manage through the app.

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <main className="flex-1 overflow-auto px-8 py-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">{t.accounts.title}</h1>
                        <p className="text-sm text-slate-600">{t.accounts.subtitle}</p>
                    </div>
                    <div className="flex gap-3 items-center text-sm text-slate-500 font-medium">
                        Read-only on Web
                    </div>
                </header>

                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    {accounts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="mb-4 text-4xl">🏦</div>
                            <h3 className="text-lg font-medium text-slate-900">{t.accounts.noAccounts.title}</h3>
                            <p className="mt-1 max-w-sm text-sm text-slate-500">
                                {t.accounts.noAccounts.desc} Add accounts using the mobile app.
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
                                                            ⚡ Linked
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
