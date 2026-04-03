"use client";

import { useMemo, useState, useEffect } from "react";
import { useUser } from "@/features/auth/hooks/use-user";
import { useCategories, Category } from "@/features/categories/hooks/use-categories";

export type Tx = {
    id: string;
    name: string;
    category: string;
    date: string;
    amount: string;
    positive: boolean;
    currency?: string;
};

const EMPTY_TXS: Tx[] = [];
const EMPTY_CATS: Category[] = [];

export const useTransactions = (initialData: Tx[] = EMPTY_TXS, initialCategories: Category[] = EMPTY_CATS) => {
    const [transactions, setTransactions] = useState<Tx[]>(initialData);
    const [isLoaded, setIsLoaded] = useState(true);

    const { user, profile } = useUser();
    const { categories } = useCategories(initialCategories);

    useEffect(() => {
        setTransactions(initialData);
    }, [initialData]);

    const [pageSize, setPageSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    
    // Read-only state
    const [dateRange, setDateRange] = useState<{ from: string; to: string }>({ from: "", to: "" });
    const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
    const [sortConfig, setSortConfig] = useState<{ key: keyof Tx | "dateValue" | "amountValue"; direction: "asc" | "desc" }>({ key: "dateValue", direction: "desc" });

    const availableCategories = useMemo(() => {
        const cats = new Set(transactions.map(t => t.category));
        return ["All Categories", ...Array.from(cats)];
    }, [transactions]);

    const filteredAndSortedTransactions = useMemo(() => {
        let result = [...transactions];

        if (dateRange.from) {
            const fromTime = new Date(dateRange.from).getTime();
            result = result.filter(t => new Date(t.date).getTime() >= fromTime);
        }
        if (dateRange.to) {
            const toTime = new Date(dateRange.to).getTime();
            result = result.filter(t => new Date(t.date).getTime() <= toTime + 86400000);
        }

        if (selectedCategory !== "All Categories") {
            result = result.filter(t => t.category === selectedCategory);
        }

        result.sort((a, b) => {
            let aValue: any = a[sortConfig.key as keyof Tx];
            let bValue: any = b[sortConfig.key as keyof Tx];

            if (sortConfig.key === "dateValue") {
                aValue = new Date(a.date).getTime();
                bValue = new Date(b.date).getTime();
            } else if (sortConfig.key === "amountValue") {
                aValue = parseFloat(a.amount.replace(/[^0-9.-]+/g, ""));
                bValue = parseFloat(b.amount.replace(/[^0-9.-]+/g, ""));
            }

            if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });

        return result;
    }, [transactions, dateRange, selectedCategory, sortConfig]);

    const dynamicTotalPages = Math.max(1, Math.ceil(filteredAndSortedTransactions.length / pageSize));
    const currentPage = Math.min(page, dynamicTotalPages);

    const visibleRows = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredAndSortedTransactions.slice(start, start + pageSize);
    }, [filteredAndSortedTransactions, pageSize, currentPage]);

    const handleSort = (key: keyof Tx | "dateValue" | "amountValue") => {
        setSortConfig(current => ({
            key,
            direction: current.key === key && current.direction === "desc" ? "asc" : "desc"
        }));
    };

    const changePageSize = (size: number) => {
        setPageSize(size);
        setPage(1);
    };

    const changePage = (next: number) => {
        if (next < 1 || next > dynamicTotalPages) return;
        setPage(next);
    };

    return {
        transactions,
        allCategories: categories,
        visibleRows,
        pageSize,
        currentPage,
        totalPages: dynamicTotalPages,
        dateRange,
        setDateRange,
        selectedCategory,
        setSelectedCategory,
        availableCategories,
        sortConfig,
        handleSort,
        totalFiltered: filteredAndSortedTransactions.length,
        changePageSize,
        changePage,
        isLoading: !isLoaded,
    };
};
