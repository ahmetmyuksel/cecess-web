"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Tx, useTransactions } from "../hooks/use-transactions";
import { Modal } from "@/components/ui/modal";
import { DatePicker } from "@/components/ui/date-picker";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { useUser } from "@/features/auth/hooks/use-user";
import { Category } from "@/features/categories/hooks/use-categories";
import { ReadonlyStatus } from "@/components/ui/readonly-status";

export function TransactionsView({
    initialTransactions,
    initialCategories
}: {
    initialTransactions?: Tx[],
    initialCategories?: Category[]
}) {

    const { t } = useLanguage();
    const { profile } = useUser();
    // Initialize hook with server data
    const {
        transactions,
        allCategories, // New exposed prop
        visibleRows,
        pageSize,
        currentPage,
        totalPages,
        dateRange,
        setDateRange,
        selectedCategory,
        setSelectedCategory,
        availableCategories,
        sortConfig,
        handleSort,
        changePageSize,
        changePage,
        totalFiltered,
        isLoading
    } = useTransactions(initialTransactions, initialCategories);

    // Selection Handlers


    const getSortIcon = (key: any) => {
        if (sortConfig.key !== key) return <span className="text-slate-300 ml-1">⇅</span>;
        return <span className="text-blue-600 ml-1">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>;
    };

    // Calculate available years from transactions for DatePicker limits
    const transactionYears = transactions.map(t => new Date(t.date).getFullYear());
    const minYear = transactionYears.length > 0 ? Math.min(...transactionYears) : new Date().getFullYear();
    const maxYear = transactionYears.length > 0 ? Math.max(...transactionYears) : new Date().getFullYear();



    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <main className="flex-1 overflow-auto px-8 py-6">
                <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">{t.transactions.title}</h1>
                    </div>
                    <ReadonlyStatus />
                </header>

                <div className="mt-5 flex flex-wrap gap-4 items-center">
                    {/* Date Range Filters */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2 shadow-sm">
                            <span className="text-xs font-medium text-slate-500">{t.common.range.from}</span>
                            <DatePicker
                                date={dateRange.from}
                                setDate={(date) => setDateRange(prev => ({ ...prev, from: date }))}
                                placeholder={t.common.range.from}
                                className="w-[120px] border-none shadow-none text-slate-700 h-8 p-0 hover:bg-transparent"
                                startYear={minYear}
                                endYear={maxYear}
                            />
                        </div>
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2 shadow-sm">
                            <span className="text-xs font-medium text-slate-500">{t.common.range.to}</span>
                            <DatePicker
                                date={dateRange.to}
                                setDate={(date) => setDateRange(prev => ({ ...prev, to: date }))}
                                placeholder={t.common.range.to}
                                minDate={dateRange.from}
                                className="w-[120px] border-none shadow-none text-slate-700 h-8 p-0 hover:bg-transparent"
                                startYear={minYear}
                                endYear={maxYear}
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2 shadow-sm min-w-[200px]">
                        <span className="text-xs font-medium text-slate-500">{t.transactions.form.category}:</span>
                        <select
                            className="text-sm outline-none text-slate-700 w-full bg-transparent cursor-pointer"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {availableCategories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <section className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    {isLoading && transactions.length === 0 ? (
                        <div className="space-y-4 animate-pulse">
                            {/* Header Skeleton */}
                            <div className="flex items-center justify-between py-3 border-b border-slate-100">
                                <div className="h-4 bg-slate-100 rounded w-10"></div>
                                <div className="h-4 bg-slate-100 rounded w-20"></div>
                                <div className="h-4 bg-slate-100 rounded w-32"></div>
                                <div className="h-4 bg-slate-100 rounded w-20"></div>
                                <div className="h-4 bg-slate-100 rounded w-16"></div>
                                <div className="h-4 bg-slate-100 rounded w-10"></div>
                            </div>
                            {/* Rows Skeleton */}
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50">
                                    <div className="h-4 bg-slate-100 rounded w-10"></div>
                                    <div className="h-4 bg-slate-100 rounded w-20"></div>
                                    <div className="h-4 bg-slate-100 rounded w-32"></div>
                                    <div className="h-4 bg-slate-100 rounded w-20"></div>
                                    <div className="h-4 bg-slate-100 rounded w-16"></div>
                                    <div className="h-4 bg-slate-100 rounded w-10"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-slate-700">
                                <thead>
                                    <tr className="text-left text-slate-500 border-b border-slate-100 divide-x divide-slate-100">

                                        <th
                                            className="py-3 px-4 font-semibold cursor-pointer hover:bg-slate-50 transition-colors select-none whitespace-nowrap w-[1%]"
                                            onClick={() => handleSort("dateValue")}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span>{t.common.table.date}</span>
                                                {getSortIcon("dateValue")}
                                            </div>
                                        </th>
                                        <th
                                            className="py-3 px-4 font-semibold cursor-pointer hover:bg-slate-50 transition-colors select-none"
                                            onClick={() => handleSort("name")}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span>{t.common.table.transaction}</span>
                                                {getSortIcon("name")}
                                            </div>
                                        </th>
                                        <th
                                            className="py-3 px-4 font-semibold cursor-pointer hover:bg-slate-50 transition-colors select-none whitespace-nowrap w-[1%]"
                                            onClick={() => handleSort("category")}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span>{t.common.table.category}</span>
                                                {getSortIcon("category")}
                                            </div>
                                        </th>
                                        <th
                                            className="py-3 px-4 text-right font-semibold cursor-pointer hover:bg-slate-50 transition-colors select-none whitespace-nowrap w-[1%]"
                                            onClick={() => handleSort("amountValue")}
                                        >
                                            <div className="flex items-center justify-end gap-1">
                                                <span>{t.common.table.amount}</span>
                                                {getSortIcon("amountValue")}
                                            </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {visibleRows.map((tx) => {
                                        return (
                                            <tr key={tx.id} className={`group hover:bg-slate-50 transition-colors`}>
                                                {/* DATE */}
                                                <td className="py-3 pr-4 whitespace-nowrap pl-4">
                                                    <span className="font-medium text-slate-600">
                                                        {(() => {
                                                            const d = new Date(tx.date);
                                                            return isNaN(d.getTime()) ? tx.date : d.toLocaleDateString('en-GB', {
                                                                day: '2-digit', month: 'short', year: 'numeric'
                                                            });
                                                        })()}
                                                    </span>
                                                </td>

                                                {/* TRANSACTION NAME */}
                                                <td className="py-3 px-4 font-medium text-slate-900 whitespace-normal break-words" title={tx.name}>
                                                    {tx.name}
                                                </td>

                                                {/* CATEGORY */}
                                                <td className="py-3 pr-4 whitespace-nowrap">
                                                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                                                        {tx.category}
                                                    </span>
                                                </td>

                                                {/* AMOUNT */}
                                                <td
                                                    className={`py-3 pr-4 text-right font-semibold whitespace-nowrap ${tx.amount.trim().startsWith("-") ? "text-rose-600" : "text-emerald-600"
                                                        }`}
                                                >
                                                    {tx.amount}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <span className="text-sm">{t.transactions.rows}</span>
                                    {[10, 20, 50, 100].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => changePageSize(size)}
                                            className={`rounded border px-2 py-1 text-xs font-medium ${pageSize === size
                                                ? "bg-blue-50 text-blue-600 border-blue-200"
                                                : "bg-white text-slate-600 border-slate-200"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-slate-500">
                                        {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalFiltered)} {t.transactions.of} {totalFiltered}
                                    </span>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => changePage(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="rounded border px-2 py-1 hover:bg-slate-50 disabled:opacity-50"
                                        >
                                            ◀
                                        </button>
                                        <button className="rounded bg-blue-600 px-3 py-1 text-white text-sm">
                                            {currentPage}
                                        </button>
                                        <button
                                            onClick={() => changePage(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className="rounded border px-2 py-1 hover:bg-slate-50 disabled:opacity-50"
                                        >
                                            ▶
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>

        </div >
    );
}
