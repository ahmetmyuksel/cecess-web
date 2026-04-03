"use client";

import { useLanguage } from "@/features/i18n/hooks/use-language";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { TIERS, PLAN_FEATURES, TIER_FEATURES, SubscriptionTier } from "../types/subscription-types";
import { useUser } from "@/features/auth/hooks/use-user";
import { cn } from "@/lib/utils";
import { ReadonlyStatus } from "@/components/ui/readonly-status";

interface SubscriptionViewProps {
    initialProfile?: any;
}

export function SubscriptionView({ initialProfile }: SubscriptionViewProps) {
    const { t } = useLanguage();
    const { profile: clientProfile, refreshProfile } = useUser();

    // Use client profile if updated, otherwise initial
    const effectiveProfile = clientProfile || initialProfile;

    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
    // Get real tier from profile, default to Free
    const currentTier: SubscriptionTier = (effectiveProfile?.subscription_tier as SubscriptionTier) || "Free";

    const TIER_LEVELS = { "Free": 0, "Premium": 1, "Pro": 2 };
    const currentLevel = TIER_LEVELS[currentTier];

    return (
        <main className="flex-1 overflow-auto px-8 py-6">
            <header className="mb-8 text-center flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-slate-900">{t.subscriptionPage.title}</h1>
                    <ReadonlyStatus />
                </div>
                <p className="text-slate-600">{t.subscriptionPage.subtitle}</p>
            </header>

            <div className="flex justify-center mb-8">
                <div className="bg-slate-100 p-1 rounded-lg inline-flex items-center">
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={cn(
                            "px-4 py-2 text-sm font-medium rounded-md transition-all",
                            billingCycle === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                        )}
                    >
                        {t.subscriptionPage.monthly}
                    </button>
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={cn(
                            "px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1",
                            billingCycle === "yearly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                        )}
                    >
                        {t.subscriptionPage.yearly}
                        <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full ml-1 font-bold">
                            {t.subscriptionPage.savePercent}
                        </span>
                    </button>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                {TIERS.map((tier) => {
                    const price = billingCycle === "monthly" ? tier.price.monthly : tier.price.yearly;

                    // 1. Check if user holds this Tier (regardless of interval)
                    const isTierMatch = currentTier === tier.id;

                    // 2. Interval matching removed — subscriptions are managed via mobile app only

                    // "isCurrent" for styling purposes (Active Card)
                    // We want to highlight the card if it is the user's tier, even if viewing wrong interval.
                    const isCurrent = isTierMatch;

                    const tierLevel = TIER_LEVELS[tier.id];
                    const isDowngrade = tierLevel < currentLevel;

                    return (
                        <div
                            key={tier.id}
                            className={cn(
                                "relative rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-md flex flex-col",
                                isCurrent ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-200",
                                tier.popular && !isCurrent ? "border-slate-300 shadow-md" : ""
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-900">
                                    {t.subscriptionPage.plans.title.replace("{tier}", tier.id)}
                                </h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-extrabold text-slate-900">€{price}</span>
                                    <span className="ml-1 text-slate-500">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-500">
                                    {t.subscriptionPage.plans.descriptions[tier.id.toLowerCase() as keyof typeof t.subscriptionPage.plans.descriptions]}
                                </p>
                                {/* Subscription management is mobile-only */}
                                {isTierMatch && tier.id !== 'Free' && (
                                    <p className="mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">
                                        {t.subscriptionPage.plans.title.replace("{tier}", tier.id)}
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {PLAN_FEATURES.map((featureKey) => {
                                    const included = TIER_FEATURES[tier.id][featureKey];
                                    return (
                                        <li key={featureKey} className="flex items-start gap-3">
                                            <div className={cn(
                                                "rounded-full p-0.5 mt-0.5",
                                                included ? "text-blue-600" : "text-slate-300"
                                            )}>
                                                {included ? <Check className="h-4 w-4" /> : <span className="block h-4 w-4 text-center leading-4 text-xs">✕</span>}
                                            </div>
                                            <span className={cn("text-sm", included ? "text-slate-700" : "text-slate-400")}>
                                                {t.subscriptionPage.features[featureKey as keyof typeof t.subscriptionPage.features]}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <button
                                disabled
                                className={cn(
                                    "w-full rounded-lg py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 mt-auto",
                                    isTierMatch
                                        ? "bg-blue-50 text-blue-600 border border-blue-100"
                                        : "bg-slate-50 border border-slate-200 text-slate-400"
                                )}
                            >
                                {isTierMatch
                                    ? t.subscriptionPage.actions.activePlan
                                    : t.subscriptionPage.actions.upgradeInApp
                                }
                            </button>
                        </div>
                    );
                })}
            </div>


        </main>
    );
}
