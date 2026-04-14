"use client";

import { useState, useEffect, useCallback } from "react";

export type Category = {
    id: string;
    name: string;
    type: "Income" | "Expense";
    icon?: string;
};

const EMPTY_CATEGORIES: Category[] = [];

export const useCategories = (initialData?: Category[]) => {
    const [categories, setCategories] = useState<Category[]>(initialData || EMPTY_CATEGORIES);
    const [isLoaded, setIsLoaded] = useState(!!initialData);
    const [loading, setLoading] = useState(!initialData);

    const fetchCategories = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/categories");
            if (!res.ok) return;
            const data: Category[] = await res.json();
            setCategories(data);
            setIsLoaded(true);
        } catch (err) {
            console.error("Failed to fetch categories:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!initialData) {
            fetchCategories();
        }
    }, [initialData, fetchCategories]);

    return {
        categories,
        setCategories,
        isLoaded,
        loading,
        refresh: fetchCategories
    };
};
