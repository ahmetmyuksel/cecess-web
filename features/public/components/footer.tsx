"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/features/i18n/hooks/use-language";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block text-2xl font-bold text-white mb-4">
                            cecess
                        </Link>
                        <p className="text-slate-400 text-sm mb-4">
                            {t.public.footer.tagline}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.public.footer.product}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/pricing" className="hover:text-white transition-colors">{t.public.nav.pricing}</Link></li>
                            <li><Link href="/login" className="hover:text-white transition-colors">{t.public.nav.login}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.public.footer.company}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/faq" className="hover:text-white transition-colors">{t.public.nav.faq}</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">{t.public.nav.privacy}</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/account-deletion" className="hover:text-white transition-colors">Account Deletion</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2026 cecess. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">{t.public.nav.privacy}</Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
