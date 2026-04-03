"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    CreditCard,
    Wallet,
    LogOut,
    Menu,
    FolderOpen,
    Zap,
    Sparkles,
    Settings,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { logoutAction } from "@/features/auth/actions/auth-action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/features/i18n/hooks/use-language";



import { useUser } from "@/features/auth/hooks/use-user";

export function Sidebar({ initialProfile }: { initialProfile?: any }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { user, profile, loading, error } = useUser();
    const { t } = useLanguage();

    // Use server profile if client profile is not yet loaded, or fallback to client one
    // Actually, useUser should ideally hydrate from this, but for simple display:
    const effectiveProfile = profile || initialProfile;

    // Override loading state if we have initialProfile (SSR)
    const isLoading = loading && !effectiveProfile;

    // Note: 'user' might be null initially on client even if SSR fetched user.
    // So we rely on effectiveProfile for data display.

    const navigation = [
        { name: t.sidebar.dashboard, href: "/profile/dashboard", icon: LayoutDashboard },
        { name: t.sidebar.transactions, href: "/profile/transactions", icon: CreditCard },
        { name: t.sidebar.accounts, href: "/profile/accounts", icon: Wallet },
        { name: t.sidebar.categories, href: "/profile/categories", icon: FolderOpen },
        { name: t.sidebar.reports, href: "/profile/reports", icon: Sparkles },
        { name: t.sidebar.subscription, href: "/profile/subscription", icon: Zap },
    ];

    // Default fallback values
    // Strict loading: If loading, username is ignored by UI. If loaded and no profile, use email or "Unknown".
    // We removed "Guest User" string fallback as requested.
    const username = effectiveProfile?.first_name
        ? (effectiveProfile.last_name ? `${effectiveProfile.first_name} ${effectiveProfile.last_name}` : effectiveProfile.first_name)
        : (effectiveProfile?.username || (effectiveProfile?.email ? effectiveProfile.email.split('@')[0] : (user?.email?.split('@')[0] || "")));

    const email = effectiveProfile?.email || "";
    // If avatar_url is a relative path or full URL, use it. If null, empty string which triggers fallback.
    const avatarUrl = effectiveProfile?.avatar_url || "";

    const tier = effectiveProfile?.subscription_tier || "Free";
    const tierLabel = t.subscriptionPage.plans.title.replace("{tier}", tier);

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-background border"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu className="h-6 w-6" />
            </button>

            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:sticky md:top-0 md:h-screen",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    <div className="flex h-16 items-center justify-center border-b px-6">
                        <Link href="/" className="relative h-12 w-40">
                            <Image
                                src="/cecess-logo.png"
                                alt="cecess"
                                fill
                                sizes="(max-width: 768px) 160px, 160px"
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto py-4">
                        <nav className="space-y-1 px-3">
                            {navigation.map((item) => {
                                const isActive = pathname.startsWith(item.href);
                                return (
                                    <Link
                                        key={item.href} // Key should be href as name changes with language
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                            isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        )}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="border-t p-4">
                        <div className="mb-3 flex items-center gap-3 px-3">
                            <Avatar className="h-10 w-10 border border-slate-200">
                                <AvatarImage src={avatarUrl} alt={username} />
                                <AvatarFallback>
                                    {isLoading ? (
                                        <div className="h-full w-full animate-pulse bg-slate-200" />
                                    ) : (
                                        username.charAt(0).toUpperCase()
                                    )}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col overflow-hidden">
                                {isLoading ? (
                                    <>
                                        <div className="h-4 w-24 animate-pulse rounded bg-slate-200 mb-1" />
                                        <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />
                                    </>
                                ) : (
                                    <>
                                        <span className="truncate text-sm font-semibold text-foreground">
                                            {username}
                                        </span>
                                        <span className="truncate text-xs text-muted-foreground">{tierLabel}</span>
                                        {error && <span className="text-[10px] text-red-500 truncate" title={error}>! Error loading profile</span>}
                                    </>
                                )}
                            </div>
                            <Link href="/profile/settings" className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <Settings className="h-4 w-4" />
                            </Link>
                        </div>
                        <form action={logoutAction}>
                            <button
                                type="submit"
                                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                            >
                                <LogOut className="h-4 w-4" />
                                {t.sidebar.signOut}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
