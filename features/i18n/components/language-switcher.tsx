"use client";

import { useLanguage } from "../context/language-context";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            <button
                onClick={() => setLanguage("en")}
                className={`transition-colors ${language === "en" ? "text-slate-900 font-bold" : "text-slate-400 hover:text-slate-600"}`}
            >
                EN
            </button>
            <span className="text-slate-300">|</span>
            <button
                onClick={() => setLanguage("tr")}
                className={`transition-colors ${language === "tr" ? "text-slate-900 font-bold" : "text-slate-400 hover:text-slate-600"}`}
            >
                TR
            </button>
        </div>
    );
}
