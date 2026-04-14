"use client";

import { useState, useEffect, useCallback } from "react";

export const useAccounts = () => {
    const [accounts, setAccounts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAccounts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("/api/accounts");
            if (!res.ok) {
                setError("Failed to fetch accounts");
                return;
            }
            const data = await res.json();
            setAccounts(data);
        } catch (err) {
            console.error("Failed to fetch accounts:", err);
            setError("Failed to fetch accounts");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);

    return {
        accounts,
        loading,
        error,
        refresh: fetchAccounts
    };
};
