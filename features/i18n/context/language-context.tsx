"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Dictionary, Language } from "../types";
import { en } from "../locales/en";
import { tr } from "../locales/tr";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, forcedLanguage }: { children: ReactNode; forcedLanguage?: Language }) {
    const [language, setLanguage] = useState<Language>("en");
    const [isLoaded, setIsLoaded] = useState(false);

    // Initial Load
    useEffect(() => {
        if (forcedLanguage) {
            setLanguage(forcedLanguage);
            setIsLoaded(true);
            return;
        }

        const storedLang = localStorage.getItem("cecess-language");
        if (storedLang === "tr" || storedLang === "en") {
            setLanguage(storedLang);
        }
        setIsLoaded(true);
    }, [forcedLanguage]);

    // Persistence
    useEffect(() => {
        if (isLoaded && !forcedLanguage) {
            localStorage.setItem("cecess-language", language);
        }
    }, [language, isLoaded, forcedLanguage]);

    const finalLanguage = forcedLanguage || language;
    const t = finalLanguage === "tr" ? tr : en;

    if (!isLoaded && !forcedLanguage) {
        return null; // Or a loading spinner
    }

    return (
        <LanguageContext.Provider value={{ language: finalLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
