"use client";

import Link from "next/link";
import { Footer } from "./footer";
import { PublicNavbar } from "./public-navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqViewProps {
    isLoggedIn: boolean;
}

export function FaqView({ isLoggedIn }: FaqViewProps) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <PublicNavbar isLoggedIn={isLoggedIn} />

            <main className="flex-1 py-16 bg-slate-50 pt-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h1>
                        <p className="text-slate-600">
                            Everything you need to know about cecess.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                        <Accordion type="single" collapsible className="w-full">

                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    How does the AI feature work?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    Our advanced algorithms analyze your transaction patterns to provide smart categorization without compromising privacy. This helps you organize your finances automatically, saving you hours of manual sorting.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    Is there a trial period?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    We do not offer a time-limited trial because our Free Plan is designed to be used forever! You can access almost all features—including manual transaction adding, multi-currency support, and reports—completely free. The only exception is the automated AI support, which is a Premium feature.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    Can I connect my bank account directly?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    Due to current banking regulations, we do not support direct live bank connections at this time. However, you can easily <strong>import CSV or Excel files</strong> from your bank to generate detailed reports and track your spending accurately.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    Can I delete my account permanently?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    Yes. You have full control over your data. You can permanently delete your account and all associated data from the <strong>Settings</strong> page at any time. We respect your privacy and right to be forgotten.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    How is my data secured?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    We use industry-standard encryption and Row Level Security (RLS) via Supabase to ensure that your financial data is only accessible by you. We do not sell your personal data to advertisers.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>

                    <div className="mt-12 text-center text-sm text-slate-500">
                        Still have questions? Check your profile settings for support options or read our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
