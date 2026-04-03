"use client";

import { Footer } from "./footer";
import { PublicNavbar } from "./public-navbar";
import { useLanguage } from "@/features/i18n/hooks/use-language";

interface AccountDeletionViewProps {
    // isLoggedIn removed for static support
}

export function AccountDeletionView({ }: AccountDeletionViewProps) {
    const { t } = useLanguage();
    // Assuming we added accountDeletion to public dictionary
    const { accountDeletion } = t.public;

    // Helper to render text with bold keys
    const renderContent = (text: string) => {
        const parts = text.split(":");
        if (parts.length > 1 && parts[0].length < 50 && !text.startsWith("http") && !text.startsWith("support@")) {
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
        <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-100">
            <PublicNavbar />

            <main className="flex-1 py-12 pt-32 pb-24">
                <article className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate prose-lg">

                    {/* Header */}
                    <div className="mb-8 border-b border-slate-100 pb-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-6 border border-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                            {accountDeletion.title}
                        </h1>
                        <p className="text-slate-500 font-medium">
                            {accountDeletion.lastUpdated}
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="mb-10 text-center">
                        <p className="lead text-lg text-slate-600 leading-relaxed mb-0">
                            {accountDeletion.intro}
                        </p>
                    </div>

                    {/* Dynamic Sections */}
                    <div className="space-y-10">
                        {Object.entries(accountDeletion.sections).map(([key, section]) => (
                            <section key={key} className="scroll-mt-32 p-6 rounded-xl bg-slate-50/50 border border-slate-100" id={key}>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    {section.title}
                                </h2>
                                <div className="space-y-3 text-slate-600 leading-relaxed">
                                    {section.body.map((paragraph, index) => (
                                        <p key={index} className="text-base m-0">
                                            {renderContent(paragraph)}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
                        For any further assistance, do not hesitate to contact our support team.
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
