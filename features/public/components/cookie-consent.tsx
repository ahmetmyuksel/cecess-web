"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLanguage } from "@/features/i18n/context/language-context";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();
    const { cookieConsent } = t.public;

    useEffect(() => {
        // Check if cookie exists
        const consent = Cookies.get("cookie_consent");
        if (consent === undefined) {
            // Delay slightly to prevent flash
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookie_consent", "true", { expires: 365 }); // 1 year
        setIsVisible(false);
    };

    const handleReject = () => {
        Cookies.set("cookie_consent", "false", { expires: 365 });
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="mx-auto max-w-4xl rounded-2xl bg-slate-900/95 p-6 shadow-2xl backdrop-blur-md border border-slate-800 ring-1 ring-white/10">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-sm text-slate-300 md:text-base text-center md:text-left">
                        {cookieConsent.text}
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={handleReject}
                            className="rounded-lg border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            {cookieConsent.reject}
                        </button>
                        <button
                            onClick={handleAccept}
                            className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-emerald-500/30 transition-all active:scale-95"
                        >
                            {cookieConsent.accept}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
