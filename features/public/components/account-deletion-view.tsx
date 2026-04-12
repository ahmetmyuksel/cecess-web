"use client";

import { useState } from "react";
import { useLanguage } from "@/features/i18n/hooks/use-language";

export function AccountDeletionView() {
    const { t } = useLanguage();
    const { accountDeletion } = t.public;

    const [username, setUsername] = useState("");
    const [reason, setReason] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;

        setSubmitting(true);

        const subject = encodeURIComponent("Account Deletion Request");
        const body = encodeURIComponent(
            `Account Deletion Request\n\nUsername: ${username.trim()}\nReason: ${reason.trim() || "Not specified"}`
        );
        window.open(`mailto:info@cecess.net?subject=${subject}&body=${body}`, "_self");

        setTimeout(() => {
            setSubmitted(true);
            setSubmitting(false);
        }, 500);
    };

    // Helper to render text with bold keys
    const renderContent = (text: string) => {
        const parts = text.split(":");
        if (parts.length > 1 && parts[0].length < 50 && !text.startsWith("http") && !text.startsWith("info@")) {
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

                                {/* Web Form inside the webForm section */}
                                {key === "webForm" && (
                                    <div className="mt-6">
                                        {submitted ? (
                                            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
                                                {accountDeletion.form.success}
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div>
                                                    <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-1">
                                                        {accountDeletion.form.username} <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        id="username"
                                                        type="text"
                                                        required
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        placeholder={accountDeletion.form.usernamePlaceholder}
                                                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="reason" className="block text-sm font-semibold text-slate-700 mb-1">
                                                        {accountDeletion.form.reason}
                                                    </label>
                                                    <textarea
                                                        id="reason"
                                                        rows={3}
                                                        value={reason}
                                                        onChange={(e) => setReason(e.target.value)}
                                                        placeholder={accountDeletion.form.reasonPlaceholder}
                                                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    disabled={submitting || !username.trim()}
                                                    className="w-full rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                                >
                                                    {submitting ? "..." : accountDeletion.form.submit}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
                        For any further assistance, contact us at info@cecess.net
                    </div>
                </article>
            </main>

        </div>
    );
}
