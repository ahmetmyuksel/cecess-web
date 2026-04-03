"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Search } from "lucide-react";

interface Bank {
    id: string;
    name: string;
    logo: string; // Emoji for now
}

const POPULAR_BANKS: Bank[] = [
    { id: "revolut", name: "Revolut", logo: "🇷" },
    { id: "wise", name: "Wise", logo: "🇼" },
    { id: "monzo", name: "Monzo", logo: "🇲" },
    { id: "starling", name: "Starling Bank", logo: "🇸" },
    { id: "barclays", name: "Barclays", logo: "🦅" },
    { id: "hsbc", name: "HSBC UK", logo: "🔴" },
    { id: "lloyds", name: "Lloyds Bank", logo: "🐎" },
    { id: "natwest", name: "NatWest", logo: "🔺" },
];

interface BankSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (bank: Bank) => void;
}

export function BankSelectorModal({ isOpen, onClose, onSelect }: BankSelectorModalProps) {
    const [search, setSearch] = useState("");

    const filteredBanks = POPULAR_BANKS.filter(bank =>
        bank.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Connect your Bank">
            <div className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search for your bank..."
                        className="w-full rounded-lg border border-slate-200 pl-9 pr-4 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto p-1">
                    {filteredBanks.map(bank => (
                        <button
                            key={bank.id}
                            onClick={() => onSelect(bank)}
                            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-left group"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-xl shadow-sm group-hover:scale-105 transition-transform">
                                {bank.logo}
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                                {bank.name}
                            </span>
                        </button>
                    ))}
                    {filteredBanks.length === 0 && (
                        <div className="col-span-2 py-8 text-center text-sm text-slate-500">
                            No banks found matching "{search}"
                        </div>
                    )}
                </div>

                <div className="rounded-lg bg-blue-50 p-3 text-xs text-blue-700">
                    <p className="font-semibold mb-1">🔒 Secure Connection</p>
                    Your connection is encrypted. We never see your login credentials. You will be redirected to your bank to approve access.
                </div>
            </div>
        </Modal>
    );
}
