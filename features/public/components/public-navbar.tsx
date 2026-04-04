"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { Switch } from "@/components/ui/switch";
import { useUser } from "@/features/auth/hooks/use-user";
import { Menu, X } from "lucide-react";
import bannerImage from "@/assets/images/banner.png";

interface PublicNavbarProps {
    // isLoggedIn removed as it now uses client-side hook
}

export function PublicNavbar({ }: PublicNavbarProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();
    const { user } = useUser();
    const isLoggedIn = !!user;

    const navLinks = [
        { name: t.public.nav.home, href: "/", match: "exact" },
        { name: t.public.nav.pricing, href: "/pricing" },
        { name: t.public.nav.faq, href: "/faq" },
    ];

    const isActive = (href: string, match?: string) => {
        if (match === "hash") return false;
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="relative h-10 w-28 sm:w-40 block">
                            <Image
                                src={bannerImage}
                                alt="cecess Logo"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 140px, 160px"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <nav className="flex items-center justify-center font-bold">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "transition-colors w-28 xl:w-32 text-center text-base",
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

                    {/* Right Side Tools */}
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        {/* Desktop Language Switcher */}
                        <div className="hidden sm:flex items-center gap-2 px-2 border-r border-slate-100 mr-2">
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
                                className="rounded-full bg-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow"
                            >
                                {t.public.nav.profile}
                            </Link>
                        ) : (
                            pathname !== "/login" ? (
                                <Link
                                    href="/login"
                                    className="rounded-full bg-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow whitespace-nowrap"
                                >
                                    {t.public.nav.login}
                                </Link>
                            ) : null
                        )}

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] lg:hidden animate-in fade-in duration-300"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div 
                className={cn(
                    "fixed inset-y-0 right-0 z-[100] w-full max-w-[280px] bg-white lg:hidden transition-all duration-300 ease-in-out transform flex flex-col shadow-2xl",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-end px-6 h-20 bg-white flex-shrink-0">
                    <button 
                        className="p-2 -mr-2 text-slate-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X className="h-8 w-8" />
                    </button>
                </div>
                <nav className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto bg-white" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-black py-2",
                                    isActive(link.href, link.match)
                                        ? "text-blue-600"
                                        : "text-slate-900"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="mt-auto border-t border-slate-100 pt-8 pb-12 bg-white">
                        <div className="flex items-center justify-between px-2 mb-8">
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.settings.preferences.language}</span>
                            <div className="flex items-center gap-3">
                                <span className={cn("text-xs font-bold uppercase transition-colors", language === 'tr' ? "text-blue-600" : "text-slate-400")}>TR</span>
                                <Switch 
                                    checked={language === 'en'}
                                    onCheckedChange={(checked) => setLanguage(checked ? 'en' : 'tr')}
                                />
                                <span className={cn("text-xs font-bold uppercase transition-colors", language === 'en' ? "text-blue-600" : "text-slate-400")}>EN</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <a 
                                href="https://apps.apple.com/app/cecess/id6740698114"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-900 text-white flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold w-full shadow-lg"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.8-42.3 0-81.8 24.4-103.2 61.9-43.2 75.3-11.1 185.9 31 246.6 20.6 29.8 45.2 63.3 77.3 63.3 31.1 0 42.7-19.3 80.5-19.3 37.8 0 48.2 19.3 81 19.3 32.8 0 55.4-30.1 76-60 24.3-35.2 34.3-69.3 34.6-70.9-.8-.3-67.2-25.9-67.4-103.5zm-33.1-155.1c32.3-39.7 24.5-85.3 22.8-93.5-27.1 2.3-59.5 20.1-78.5 42.4-18 20.9-33.5 63-28.9 94.5 30.6 3 59.8-13.4 84.6-43.4z" /></svg>
                                App Store
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.ahmetmyuksel.cecess"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-slate-950 border border-slate-200 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold w-full shadow-sm"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                Google Play
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
