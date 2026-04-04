"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/features/i18n/context/language-context";
import { Switch } from "@/components/ui/switch";
import { pricingComparisonRows, pricingPlanContent } from "@/features/public/domain/pricing-content";

interface PricingViewProps {
    // isLoggedIn removed for static support
}

export function PricingView({ }: PricingViewProps) {
    const { t } = useLanguage();
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const plans = [
        {
            key: "free" as const,
            name: t.public.pricing.plans.free.name,
            description: "For getting started with your first 100 transactions.",
            priceMonthly: "EUR 0",
            priceAnnual: "EUR 0",
            cta: t.public.pricing.plans.free.cta,
            popular: false,
        },
        {
            key: "premium" as const,
            name: t.public.pricing.plans.premium.name,
            description: "For users who want unlimited tracking and budgeting controls.",
            priceMonthly: "EUR 4.99",
            priceAnnual: "EUR 49.90",
            cta: t.public.pricing.plans.premium.cta,
            popular: true,
        },
        {
            key: "pro" as const,
            name: t.public.pricing.plans.pro.name,
            description: "For advanced forecasting, AI analysis, and export workflows.",
            priceMonthly: "EUR 12.99",
            priceAnnual: "EUR 129.90",
            cta: t.public.pricing.plans.pro.cta,
            popular: false,
        },
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
            +
        </span>
    );

    const X = () => (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            -
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

            <main className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-16 px-4 sm:px-6 pb-24 pt-20">
                <section className="space-y-4 sm:space-y-6 text-center">
                    <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                        {t.public.pricing.title}
                    </h1>
                    <p className="mx-auto max-w-3xl text-sm sm:text-lg leading-relaxed text-slate-600">
                        {t.public.pricing.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        <span className={`text-xs sm:text-sm font-semibold ${billingCycle === "monthly" ? "text-slate-900" : "text-slate-500"}`}>
                            {t.public.pricing.monthly}
                        </span>
                        <Switch
                            checked={billingCycle === "annual"}
                            onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                        />
                        <span className={`text-xs sm:text-sm font-semibold ${billingCycle === "annual" ? "text-slate-900" : "text-slate-500"}`}>
                            {t.public.pricing.annual}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-blue-700">
                            {t.public.pricing.discount}
                        </span>
                    </div>
                </section>

                <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => {
                        const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual;
                        const features = pricingPlanContent.find((item) => item.key === plan.key)?.features ?? [];

                        return (
                            <div
                                key={plan.name}
                                className={`relative rounded-[2.5rem] sm:rounded-3xl border bg-white/90 p-6 sm:p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-xl ${
                                    plan.popular ? "border-blue-400 shadow-[0_28px_80px_rgba(37,99,235,0.18)]" : "border-slate-200"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute inset-x-10 -top-3.5 flex justify-center">
                                        <span className="rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="space-y-2 pb-6">
                                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                                </div>
                                <div className="flex items-baseline gap-2 pb-8">
                                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{price}</span>
                                    <span className="text-sm font-medium text-slate-400">
                                        / {billingCycle === "monthly" ? t.public.pricing.monthly.toLowerCase() : t.public.pricing.annual.toLowerCase()}
                                    </span>
                                </div>
                                <Link
                                    href="/register"
                                    className={cn(
                                        "flex w-full items-center justify-center rounded-2xl py-4 text-sm font-bold transition-all shadow-sm mb-8",
                                        plan.popular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" : "bg-slate-900 text-white hover:bg-slate-800"
                                    )}
                                >
                                    {plan.cta}
                                </Link>
                                <div className="space-y-4 pt-2">
                                    <div className="text-sm font-bold text-slate-900 uppercase tracking-widest text-[10px]">What&apos;s included:</div>
                                    <ul className="space-y-3.5">
                                        {features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                                    <Check />
                                                </div>
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </section>

                <section className="space-y-6 rounded-[2.5rem] border border-slate-200 bg-white/50 p-4 sm:p-8 lg:p-12 shadow-sm backdrop-blur-sm">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.public.pricing.compare}</h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
                            A direct breakdown of what is included at each tier.
                        </p>
                    </div>
                    <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-[2rem] border border-slate-100 bg-white p-2 shadow-inner">
                        <table className="w-full min-w-[700px] border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-5 text-left text-xs font-bold uppercase tracking-widest text-slate-400 w-1/3">Features</th>
                                    <th className="p-5 text-center text-sm font-bold text-slate-900 w-1/6">{t.public.pricing.plans.free.name}</th>
                                    <th className="p-5 text-center text-sm font-bold text-blue-600 w-1/6">{t.public.pricing.plans.premium.name}</th>
                                    <th className="p-5 text-center text-sm font-bold text-slate-900 w-1/6">{t.public.pricing.plans.pro.name}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {pricingComparisonRows.map((row) => (
                                    <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-5 text-sm font-semibold text-slate-700">{row.feature}</td>
                                        <td className="p-5 text-center">{renderStatus(row.values[0])}</td>
                                        <td className="p-5 text-center">{renderStatus(row.values[1])}</td>
                                        <td className="p-5 text-center">{renderStatus(row.values[2])}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="space-y-8 sm:space-y-12 py-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-black text-slate-900">{t.public.faq.title}</h3>
                        <p className="mt-3 text-sm sm:text-base text-slate-500">
                            {t.public.faq.subtitle}
                        </p>
                    </div>
                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {faqs.map((item, index) => (
                            <div
                                key={item.question}
                                className={cn(
                                    "group rounded-[2rem] border bg-white p-6 sm:p-8 text-left transition-all duration-300 hover:shadow-lg",
                                    index === 0 ? "border-blue-100 shadow-blue-50/50" : "border-slate-100 hover:border-slate-200"
                                )}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-3">
                                        <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.question}</div>
                                        <p className="text-sm sm:text-base leading-relaxed text-slate-500">{item.answer}</p>
                                    </div>
                                    <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-100 text-slate-400 group-hover:border-blue-100 group-hover:text-blue-600 transition-all">
                                        <span className="text-xl font-light">+</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
