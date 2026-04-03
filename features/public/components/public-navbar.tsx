"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/features/i18n/hooks/use-language";

interface PublicNavbarProps {
    isLoggedIn?: boolean;
}

export function PublicNavbar({ isLoggedIn }: PublicNavbarProps) {
    const pathname = usePathname();
    const { t, language, setLanguage } = useLanguage();

    const navLinks = [
        { name: t.public.nav.home, href: "/", match: "exact" },
        { name: t.public.nav.pricing, href: "/pricing" },
        { name: t.public.nav.faq, href: "/faq" },
    ];

    const isActive = (href: string, match?: string) => {
        if (match === "hash") return false; // Hard to track hash in server/client mismatch without hydration issues
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="relative h-10 w-32">
                    <Image
                        src="/cecess-logo.png"
                        alt="cecess Logo"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 128px, 128px"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors",
                                isActive(link.href, link.match)
                                    ? "text-blue-600 font-bold"
                                    : "text-slate-600 hover:text-blue-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <Link
                            href="/profile/dashboard"
                            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow"
                        >
                            {t.public.nav.profile}
                        </Link>
                    ) : (
                        <>
                            <button
                                onClick={() => setLanguage(language === "en" ? "tr" : "en")}
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 uppercase px-2"
                            >
                                {language}
                            </button>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-slate-600 hover:text-slate-900"
                            >
                                {t.public.nav.login}
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow"
                            >
                                {t.public.nav.signup}
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
