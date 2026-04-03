"use client";

import { useState, useEffect } from "react";

export type Category = {
    id: string;
    name: string;
    type: "Income" | "Expense";
    icon?: string;
};

const EMPTY_CATEGORIES: Category[] = [];

export const useCategories = (initialData: Category[] = EMPTY_CATEGORIES) => {
    const [categories, setCategories] = useState<Category[]>(initialData);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        setCategories(initialData);
    }, [initialData]);

    return {
        categories,
        setCategories,
        isLoaded,
        refresh: () => { }
    };
};
