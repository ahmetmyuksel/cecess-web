"use client";

import { useEffect, useMemo, useState } from "react";
import { ReportRecord, ReportsTrends } from "@/features/reports/domain/report-types";
import { getReportsHistory, getReportsTrends } from "@/features/reports/services/report-service";
import { useLanguage } from "@/features/i18n/hooks/use-language";

type ReportsData = {
    report: ReportRecord | null;
    history: ReportRecord[];
    trends: ReportsTrends;
    selectedMonth: string;
    monthOptions: Array<{ value: string; label: string }>;
    showHistory: boolean;
};

type ReportsActions = {
    setSelectedMonth: (month: string) => void;
    toggleHistory: () => void;
    loadHistoryItem: (item: ReportRecord) => void;
    generateInApp: () => void;
};

const EMPTY_TRENDS: ReportsTrends = { chartData: [], allCategories: [] };

export function useReports(): {
    data: ReportsData;
    loading: boolean;
    error: string | null;
    actions: ReportsActions;
} {
    const { language, t } = useLanguage();
    const [history, setHistory] = useState<ReportRecord[]>([]);
    const [trends, setTrends] = useState<ReportsTrends>(EMPTY_TRENDS);
    const [report, setReport] = useState<ReportRecord | null>(null);
    const [selectedMonth, setSelectedMonth] = useState(() => new Date().toISOString().slice(0, 7));
    const [showHistory, setShowHistory] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;

        async function loadReports() {
            setLoading(true);
            setError(null);

            const [historyResponse, trendsResponse] = await Promise.all([
                getReportsHistory(),
                getReportsTrends(),
            ]);

            if (!active) {
                return;
            }

            if (!historyResponse.success) {
                setError(historyResponse.error ?? "Failed to load reports");
                setHistory([]);
                setReport(null);
            } else {
                const nextHistory = historyResponse.data ?? [];
                setHistory(nextHistory);

                const currentMonthReport = nextHistory.find((item) => item.month === selectedMonth);
                const initialReport = currentMonthReport ?? nextHistory[0] ?? null;

                setReport(initialReport);

                if (initialReport && initialReport.month !== selectedMonth) {
                    setSelectedMonth(initialReport.month);
                }
            }

            if (trendsResponse.success && trendsResponse.data) {
                setTrends(trendsResponse.data);
            } else if (!historyResponse.success) {
                setTrends(EMPTY_TRENDS);
            }

            setLoading(false);
        }

        loadReports();

        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        const selectedReport = history.find((item) => item.month === selectedMonth) ?? null;
        setReport(selectedReport);
    }, [history, selectedMonth]);

    const monthOptions = useMemo(() => {
        const formatter = new Intl.DateTimeFormat(language === "tr" ? "tr-TR" : "en-US", {
            month: "long",
            year: "numeric",
        });

        return history.map((item) => {
            const [year, month] = item.month.split("-").map(Number);
            return {
                value: item.month,
                label: formatter.format(new Date(year, month - 1, 1)),
            };
        });
    }, [history, language]);

    return {
        data: {
            report,
            history,
            trends,
            selectedMonth,
            monthOptions,
            showHistory,
        },
        loading,
        error,
        actions: {
            setSelectedMonth,
            toggleHistory: () => setShowHistory((current) => !current),
            loadHistoryItem: (item) => {
                setReport(item);
                setSelectedMonth(item.month);
                setShowHistory(false);
            },
            generateInApp: () => {
                window.alert(t.reports.generateAlert);
            },
        },
    };
}
