"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { Switch } from "@/components/ui/switch";
import { useUser } from "@/features/auth/hooks/use-user";

interface PublicNavbarProps {
    // isLoggedIn removed as it now uses client-side hook
}

export function PublicNavbar({ }: PublicNavbarProps) {
    const pathname = usePathname();
    const { t, language, setLanguage } = useLanguage();
    const { user } = useUser();
    const isLoggedIn = !!user;

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
                <div className="w-[300px] flex-shrink-0">
                    <Link href="/" className="relative h-10 w-32 block">
                        <Image
                            src="/cecess-logo.png"
                            alt="cecess Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 128px, 128px"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center justify-center flex-1">
                    <nav className="flex items-center justify-center font-bold">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "transition-colors w-32 text-center text-base",
                                    isActive(link.href, link.match)
                                        ? "text-blue-600"
                                        : "text-slate-600 hover:text-blue-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4 w-[300px] justify-end flex-shrink-0">
                    <div className="flex items-center gap-2 px-2 border-r border-slate-100 mr-2">
                        <span className={cn("text-[10px] font-bold uppercase transition-colors", language === 'tr' ? "text-blue-600" : "text-slate-400")}>TR</span>
                        <Switch 
                            checked={language === 'en'}
                            onCheckedChange={(checked) => setLanguage(checked ? 'en' : 'tr')}
                        />
                        <span className={cn("text-[10px] font-bold uppercase transition-colors", language === 'en' ? "text-blue-600" : "text-slate-400")}>EN</span>
                    </div>
                    {isLoggedIn ? (
                        <Link
                            href="/profile/dashboard"
                            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow"
                        >
                            {t.public.nav.profile}
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 whitespace-nowrap"
                            >
                                {t.public.nav.login}
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow whitespace-nowrap"
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
