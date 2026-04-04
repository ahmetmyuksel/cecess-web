"use client";

import { ReportsView } from "@/features/reports/components/reports-view";
import { useReports } from "@/features/reports/hooks/use-reports";

export function ReportsScreen() {
    const { data, loading, error, actions } = useReports();

    return (
        <ReportsView
            data={data}
            loading={loading}
            error={error}
            actions={actions}
        />
    );
}
