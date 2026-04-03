"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/features/i18n/context/language-context";
import { Switch } from "@/components/ui/switch";


interface PricingViewProps {
    // isLoggedIn removed for static support
}

export function PricingView({ }: PricingViewProps) {
    const { t } = useLanguage();
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const navLinks = [
        { label: t.public.nav.home, href: "/" },
        { label: t.public.nav.pricing, href: "/pricing" },
        { label: t.public.nav.privacy, href: "/privacy" },
        { label: t.public.nav.faq, href: "/faq" },
    ];

    const plans = [
        {
            name: t.public.pricing.plans.free.name,
            description: t.public.pricing.plans.free.desc,
            priceMonthly: "€0",
            priceAnnual: "€0",
            cta: t.public.pricing.plans.free.cta,
            popular: false,
            accent: "from-slate-100 to-slate-50",
            features: [
                "1 bank account connection",
                "50 transactions limit",
                "Basic expense categorization",
                "Standard reports",
                "Community support",
            ],
        },
        {
            name: t.public.pricing.plans.premium.name,
            description: t.public.pricing.plans.premium.desc,
            priceMonthly: "€4.99",
            priceAnnual: "€49.90",
            cta: t.public.pricing.plans.premium.cta,
            popular: true,
            accent: "from-blue-600 to-blue-700",
            features: [
                "Up to 5 bank connections",
                "Unlimited transactions",
                "Start with 500 AI credits",
                "AI-supported categorization",
                "Multi-currency support",
                "Data export (CSV, Excel)",
            ],
        },
        {
            name: t.public.pricing.plans.pro.name,
            description: t.public.pricing.plans.pro.desc,
            priceMonthly: "€12.99",
            priceAnnual: "€129.90",
            cta: t.public.pricing.plans.pro.cta,
            popular: false,
            accent: "from-slate-100 to-slate-50",
            features: [
                "Unlimited bank connections",
                "Unlimited transactions",
                "Start with 1000 AI credits",
                "Priority email support",
                "Advanced AI Analytics",
                "Dedicated account manager",
            ],
        },
    ];

    const billingOptions = [
        { id: "monthly", label: t.public.pricing.monthly },
        { id: "annual", label: t.public.pricing.annual },
    ];

    const comparisons = [
        { feature: "Bank Connections", values: ["1", "Up to 5", "Unlimited"] },
        { feature: "AI-supported Categorization", values: ["no", "yes", "yes"] },
        { feature: "Budgeting Tools", values: ["no", "yes", "yes"] },
        { feature: "Advanced AI Analytics", values: ["Basic", "Basic", "Advanced"] },
        { feature: "Data Export", values: ["no", "yes", "yes"] },
        { feature: "Multi-user Access", values: ["no", "no", "yes"] },
        { feature: "Support", values: ["Community", "Priority Email", "24/7 Priority"] },
    ];

    const faqs = [
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept all major credit cards, including Visa, Mastercard, and American Express. All payments are processed securely via Stripe.",
        },
        {
            question: "Can I change my plan later?",
            answer: "Yes. Upgrade or downgrade at any time, and changes will be reflected on your next billing cycle.",
        },
        {
            question: "What happens at the end of my 14-day trial?",
            answer:
                "You can continue on the plan you selected and will be billed when the trial ends. You can cancel anytime during the trial.",
        },
        {
            question: "Is there a discount for annual billing?",
            answer: "Annual billing offers up to 20% savings compared to paying month-to-month.",
        },
    ];

    const Check = () => (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            ✓
        </span>
    );

    const X = () => (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            ×
        </span>
    );

    const renderStatus = (value: string) => {
        if (value === "yes") return <Check />;
        if (value === "no") return <X />;
        return <span className="text-xs font-semibold text-slate-600">{value}</span>;
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900">
            <div className="pointer-events-none absolute inset-x-[-200px] top-[-140px] h-[320px] bg-gradient-to-r from-blue-50 via-white to-blue-100 blur-3xl" />
            <div className="pointer-events-none absolute left-[-120px] top-28 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="pointer-events-none absolute right-[-120px] top-48 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />


            <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20">
                <section className="space-y-6 text-center">
                    <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                        {t.public.pricing.title}
                    </h1>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        {t.public.pricing.subtitle}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
                            {t.public.pricing.monthly}
                        </span>
                        <Switch
                            checked={billingCycle === "annual"}
                            onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                        />
                        <span className={`text-sm font-semibold ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
                            {t.public.pricing.annual}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            {t.public.pricing.discount}
                        </span>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => {
                        const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual;
                        return (
                            <div
                                key={plan.name}
                                className={`relative rounded-3xl border bg-white/90 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] ${plan.popular ? "border-blue-400 shadow-[0_28px_80px_rgba(37,99,235,0.18)]" : "border-slate-200"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute inset-x-10 -top-3 flex justify-center">
                                        <span className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="space-y-2 pb-4">
                                    <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                                    <p className="text-sm text-slate-600">{plan.description}</p>
                                </div>
                                <div className="flex items-baseline gap-2 pb-4">
                                    <span className="text-4xl font-bold text-slate-900">{price}</span>
                                    <span className="text-sm text-slate-500">/ {billingCycle === 'monthly' ? t.public.pricing.monthly.toLowerCase() : t.public.pricing.annual.toLowerCase()}</span>
                                </div>
                                <div className="space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-700">
                                    <div className="text-base font-semibold text-slate-900">What&apos;s included:</div>
                                    <ul className="space-y-3">
                                        {plan.features.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <Check />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </section>

                <section className="space-y-4 rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-slate-900">{t.public.pricing.compare}</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            A detailed breakdown of what each plan offers to help you make the best choice for your financial journey.
                        </p>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm">
                        <table className="w-full min-w-[800px] border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="p-4 text-left text-sm font-semibold text-slate-900 w-1/3">Features</th>
                                    <th className="p-4 text-center text-sm font-semibold text-slate-900 w-1/6">{t.public.pricing.plans.free.name}</th>
                                    <th className="p-4 text-center text-sm font-semibold text-blue-600 w-1/6">{t.public.pricing.plans.premium.name}</th>
                                    <th className="p-4 text-center text-sm font-semibold text-slate-900 w-1/6">{t.public.pricing.plans.pro.name}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {comparisons.map((row) => (
                                    <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 text-sm font-medium text-slate-700">{row.feature}</td>
                                        <td className="p-4 text-center">{renderStatus(row.values[0])}</td>
                                        <td className="p-4 text-center">{renderStatus(row.values[1])}</td>
                                        <td className="p-4 text-center">{renderStatus(row.values[2])}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t.public.faq.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">
                            {t.public.faq.subtitle}
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <div
                                key={item.question}
                                className={`flex items-start justify-between gap-4 rounded-2xl border bg-white/90 p-5 text-left shadow-sm ${index === 0 ? "border-blue-200 shadow-[0_16px_40px_rgba(37,99,235,0.12)]" : "border-slate-100"
                                    }`}
                            >
                                <div className="space-y-2">
                                    <div className="text-base font-semibold text-slate-900">{item.question}</div>
                                    <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
                                </div>
                                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600">
                                    +
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

        </div>
    );
}
