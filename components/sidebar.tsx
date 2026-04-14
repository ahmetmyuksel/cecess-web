"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Image from "next/image";
import {
    LayoutDashboard,
    CreditCard,
    Wallet,
    LogOut,
    Menu,
    FolderOpen,
    Sparkles,
    Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import bannerImage from "@/assets/images/banner.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { useUser } from "@/features/auth/hooks/use-user";

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { user, profile, loading, error, signOut, signOutLoading } = useUser();
    const { t } = useLanguage();

    const effectiveProfile = profile;
    const isLoading = loading && !effectiveProfile;

    const navigation = [
        { name: t.sidebar.dashboard, href: "/profile/dashboard", icon: LayoutDashboard },
        { name: t.sidebar.transactions, href: "/profile/transactions", icon: CreditCard },
        { name: t.sidebar.accounts, href: "/profile/accounts", icon: Wallet },
        { name: t.sidebar.categories, href: "/profile/categories", icon: FolderOpen },
        { name: t.sidebar.reports, href: "/profile/reports", icon: Sparkles },
    ];

    const username = effectiveProfile?.first_name
        ? (effectiveProfile.last_name ? `${effectiveProfile.first_name} ${effectiveProfile.last_name}` : effectiveProfile.first_name)
        : (effectiveProfile?.username || (effectiveProfile?.email ? effectiveProfile.email.split("@")[0] : (user?.email?.split("@")[0] || "")));

    const avatarUrl = effectiveProfile?.avatar_url || "";
    const tier = effectiveProfile?.subscription_tier || "Free";
    const tierLabel = t.subscriptionPage.plans.title.replace("{tier}", tier);

    const closeSidebar = useCallback(() => setIsOpen(false), []);

    const handleSignOut = async () => {
        await signOut();
        closeSidebar();
        router.replace("/");
    };

    const navItems = (
        <nav className="space-y-1 px-3 pt-4">
            {navigation.map((item) => {
                const isActive = pathname.startsWith(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        prefetch={true}
                        onClick={closeSidebar}
                        className={cn(
                            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                            isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                    >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span>{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );

    const footerContent = (
        <div className="px-4 pb-4">
            <div className="mb-3 flex items-center gap-3 px-2">
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

                <div className="min-w-0 flex-1">
                    {isLoading ? (
                        <>
                            <div className="mb-1 h-4 w-24 animate-pulse rounded bg-slate-200" />
                            <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />
                        </>
                    ) : (
                        <>
                            <span className="block truncate text-sm font-semibold text-foreground">{username}</span>
                            <span className="block truncate text-xs text-muted-foreground">{tierLabel}</span>
                            {error && <span className="text-[10px] text-red-500" title={error}>! Error loading profile</span>}
                        </>
                    )}
                </div>

                <Link
                    href="/profile/settings"
                    prefetch={true}
                    onClick={closeSidebar}
                    className="p-2 text-slate-400 transition-colors hover:text-slate-600"
                    aria-label={t.settings.profile.title}
                >
                    <Settings className="h-4 w-4" />
                </Link>
            </div>

            <button
                type="button"
                onClick={handleSignOut}
                disabled={signOutLoading}
                className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
            >
                <LogOut className="h-4 w-4 shrink-0" />
                <span>{t.sidebar.signOut}</span>
            </button>
        </div>
    );

    return (
        <>
            <button
                type="button"
                className="fixed left-4 top-4 z-[80] rounded-md border bg-background p-2 md:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle sidebar"
            >
                <Menu className="h-6 w-6" />
            </button>

            <aside className="sticky top-0 hidden h-screen w-64 border-r bg-card md:flex md:flex-col">
                <div className="flex h-16 items-center justify-center border-b px-6">
                    <Link href="/" className="relative h-10 w-32">
                        <Image
                            src={bannerImage}
                            alt="cecess"
                            fill
                            sizes="128px"
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto">
                    {navItems}
                </div>

                <div className="mt-auto border-t pt-4">
                    {footerContent}
                </div>
            </aside>

            <div className={cn("fixed inset-0 z-[70] md:hidden", isOpen ? "pointer-events-auto" : "pointer-events-none")}>
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={closeSidebar}
                    className={cn(
                        "absolute inset-0 bg-black/50 transition-opacity",
                        isOpen ? "opacity-100" : "opacity-0"
                    )}
                />

                <aside
                    className={cn(
                        "absolute bottom-0 left-0 top-0 flex h-[100svh] max-h-[100svh] w-[calc(100vw-56px)] max-w-64 flex-col border-r bg-card shadow-xl transition-transform duration-200 ease-in-out",
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <div className="flex h-16 items-center justify-center border-b px-6">
                        <Link href="/" className="relative h-10 w-32" onClick={closeSidebar}>
                            <Image
                                src={bannerImage}
                                alt="cecess"
                                fill
                                sizes="128px"
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto">
                        {navItems}
                    </div>

                    <div className="mt-auto pt-4">
                        {footerContent}
                    </div>
                </aside>
            </div>
        </>
    );
}
