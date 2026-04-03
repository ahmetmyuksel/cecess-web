"use client";

import { useLanguage } from "@/features/i18n/hooks/use-language";

export function ReadonlyStatus({ className = "" }: { className?: string }) {
    const { t } = useLanguage();

    return (
        <div className={`rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 flex items-center gap-2 shadow-sm ${className}`}>
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800">
                {t.dashboard.status.readonly}
            </span>
        </div>
    );
}
