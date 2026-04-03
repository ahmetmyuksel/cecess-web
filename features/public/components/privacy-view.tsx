"use client";

import Link from "next/link";
import { Footer } from "./footer";
import { PublicNavbar } from "./public-navbar";
import { useLanguage } from "@/features/i18n/hooks/use-language";

interface PrivacyViewProps {
    isLoggedIn: boolean;
}

export function PrivacyView({ isLoggedIn }: PrivacyViewProps) {
    const { t } = useLanguage();
    const { privacy } = t.public;

    // Helper to render text with bold keys (e.g., "Key: Value" -> "<strong>Key:</strong> Value")
    const renderContent = (text: string) => {
        // Simple heuristic: if text starts with "Something:", bold "Something:"
        // Or if it contains a bold marker we define? 
        // For now, let's use the colon heuristic as seen in "Personal Data: "
        const parts = text.split(":");
        if (parts.length > 1 && parts[0].length < 50) { // Limit length to avoid false positives in normal sentences
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
            <PublicNavbar isLoggedIn={isLoggedIn} />

            <main className="flex-1 py-12 pt-24">
                <article className="container mx-auto px-4 max-w-3xl prose prose-slate prose-lg">

                    {/* Header */}
                    <div className="mb-8 border-b border-slate-100 pb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                            {privacy.title}
                        </h1>
                        <p className="text-slate-500 font-medium">
                            {privacy.lastUpdated}
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="mb-12">
                        <p className="lead text-lg text-slate-600 leading-relaxed">
                            {privacy.intro}
                        </p>
                    </div>

                    {/* Dynamic Sections */}
                    <div className="space-y-12">
                        {Object.entries(privacy.sections).map(([key, section]) => (
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
