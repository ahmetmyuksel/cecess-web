"use client";

import Link from "next/link";
import { Footer } from "./footer";
import { PublicNavbar } from "./public-navbar";
import { useLanguage } from "@/features/i18n/hooks/use-language";

interface TermsViewProps {
    // isLoggedIn removed for static support
}

export function TermsView({ }: TermsViewProps) {
    const { t } = useLanguage();
    const { terms } = t.public;

    // Helper to render text with bold keys
    const renderContent = (text: string) => {
        const parts = text.split(":");
        if (parts.length > 1 && parts[0].length < 50) {
            return (
                <span>
                    <strong className="text-slate-900 font-semibold">{parts[0]}:</strong>
                    {parts.slice(1).join(":")}
                </span>
            );
        }
        return text;
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <PublicNavbar />

            <main className="flex-1 py-12 pt-24">
                <article className="container mx-auto px-4 max-w-3xl prose prose-slate prose-lg">

                    {/* Header */}
                    <div className="mb-8 border-b border-slate-100 pb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                            {terms.title}
                        </h1>
                        <p className="text-slate-500 font-medium">
                            {terms.lastUpdated}
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="mb-12">
                        <p className="lead text-lg text-slate-600 leading-relaxed">
                            {terms.intro}
                        </p>
                    </div>

                    {/* Dynamic Sections */}
                    <div className="space-y-12">
                        {Object.entries(terms.sections).map(([key, section]) => (
                            <section key={key} className="scroll-mt-24" id={key}>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    {section.title}
                                </h2>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    {section.body.map((paragraph, index) => (
                                        <p key={index} className="text-base">
                                            {renderContent(paragraph)}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-12 pt-8 border-t border-slate-100 italic text-slate-500 text-sm">
                        This document is protected by copyright laws. unauthorized distribution is prohibited.
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
