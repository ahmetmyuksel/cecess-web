"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Sparkles,
    Globe,
    FileSpreadsheet,
    LineChart,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import { Footer } from "./footer";
import { FeatureCard } from "./feature-card";
import { PublicNavbar } from "./public-navbar";

interface LandingViewProps {
    isLoggedIn: boolean;
}

export function LandingView({ isLoggedIn }: LandingViewProps) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Navbar */}
            <PublicNavbar isLoggedIn={isLoggedIn} />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                            Master Your Money with <br className="hidden sm:block" />
                            <span className="text-blue-600">AI-Powered Insights</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8 leading-relaxed">
                            Track income, expenses, and net worth in one beautiful dashboard.
                            Smart categorization, multi-currency support, and privacy-first design.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Link
                                href="/signup"
                                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:scale-105 transition-all"
                            >
                                Start for Free <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to grow</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Powerful features to help you understand your financial health at a glance.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <FeatureCard
                                icon={LayoutDashboard}
                                title="Smart Dashboard"
                                description="Get a bird's eye view of your finances with intuitive charts and real-time updates."
                            />
                            <FeatureCard
                                icon={Sparkles}
                                title="AI Categorization"
                                description="Automatically tag and organize your transactions using our advanced private AI models."
                            />
                            <FeatureCard
                                icon={Globe}
                                title="Multi-Currency"
                                description="Track accounts in USD, EUR, TRY, and more. Global net worth calculated instantly."
                            />
                            <FeatureCard
                                icon={FileSpreadsheet}
                                title="Smart Import"
                                description="Import CSV or Excel files from any bank. No unstable direct bank connections required."
                            />
                            <FeatureCard
                                icon={LineChart}
                                title="Advanced Analytics"
                                description="Deep dive into spending habits, trends, and future projections with Pro reports."
                            />
                            <FeatureCard
                                icon={ShieldCheck}
                                title="Private & Secure"
                                description="Your data is yours. Export anytime. We meet strict privacy standards."
                            />
                        </div>
                    </div>
                </section>

                {/* CTA / Pricing Teaser */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="rounded-3xl bg-slate-900 p-8 md:p-16 text-center text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control?</h2>
                                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                                    Join thousands of users organizing their financial life with cecess.
                                    Start with our Forever Free plan.
                                </p>
                                <Link
                                    href="/signup"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-slate-900 hover:bg-blue-50 transition-colors"
                                >
                                    Get Started Now
                                </Link>
                            </div>

                            {/* Decorative background elements */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-3xl opacity-30" />
                                <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500 blur-3xl opacity-30" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
