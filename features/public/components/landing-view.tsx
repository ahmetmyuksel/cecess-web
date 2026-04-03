"use client";

import Link from "next/link";
import Image from "next/image";
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
import { PublicNavbar } from "./public-navbar";
import { useIntersectionObserver } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { cn } from "@/lib/utils";

interface LandingViewProps {
    isLoggedIn: boolean;
}

export function LandingView({ isLoggedIn }: LandingViewProps) {
    const { t } = useLanguage();
    
    // Animation Refs
    const heroRef = useIntersectionObserver({ threshold: 0.1 });
    const mockupRef = useIntersectionObserver({ threshold: 0.2 });
    const featuresHeaderRef = useIntersectionObserver({ threshold: 0.5 });
    const ctaRef = useIntersectionObserver({ threshold: 0.5 });

    const featureIcons = [
        LayoutDashboard,
        Sparkles,
        Globe,
        FileSpreadsheet,
        LineChart,
        ShieldCheck
    ];

    const featureKeys = [
        "dashboard",
        "ai",
        "currency",
        "import",
        "analytics",
        "security"
    ] as const;

    return (
        <div className="flex min-h-screen flex-col bg-white overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
            {/* Trust Bar */}
            <div className="w-full bg-slate-900 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                    {t.public.landing.trustBar}
                </span>
            </div>

            {/* Navbar */}
            <PublicNavbar isLoggedIn={isLoggedIn} />

            <main className="flex-1">
                {/* Hero Section */}
                <section 
                    ref={heroRef.ref as any}
                    className={cn(
                        "relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden reveal-on-scroll",
                        heroRef.isVisible && "animate-fade-up"
                    )}
                >
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl mb-8 !leading-[1.1]">
                            {t.public.landing.hero.title}
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-500 mb-12 leading-relaxed">
                            {t.public.landing.hero.subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <Link
                                href="/signup"
                                className="group relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center"
                            >
                                {t.public.landing.hero.ctaMain} 
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center"
                            >
                                {t.public.landing.hero.ctaSecondary}
                            </Link>
                        </div>

                        {/* App Market Badges */}
                        <div className="flex justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-10 w-32 relative bg-slate-100 rounded-lg animate-pulse" />
                            <div className="h-10 w-32 relative bg-slate-100 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* Mobile Mockup Section */}
                <section 
                    ref={mockupRef.ref as any}
                    className={cn(
                        "relative pb-24 lg:pb-40 reveal-on-scroll -mt-16 lg:-mt-24",
                        mockupRef.isVisible && "animate-fade-up"
                    )}
                >
                    <div className="container mx-auto px-4">
                        <div className="relative mx-auto max-w-[1200px]">
                            {/* Decorative circular waves (Mobit style) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square max-w-[800px] pointer-events-none -z-10 opacity-40">
                                <div className="absolute inset-0 rounded-full border border-slate-200/50 scale-[0.6]" />
                                <div className="absolute inset-0 rounded-full border border-slate-200/50 scale-[0.8]" />
                                <div className="absolute inset-0 rounded-full border border-slate-200/50 scale-[1.0]" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 blur-3xl opacity-50" />
                            </div>
                            
                            <div className="relative w-full aspect-[16/9] md:aspect-[16/10] overflow-visible">
                                <Image
                                    src="https://framerusercontent.com/images/WqI8uAuW6KKCKrmpIrPldBN5M.png"
                                    alt="cecess App Mockup"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                    unoptimized
                                />
                                {/* Bottom fading mask for seamless integration */}
                                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 lg:py-32 bg-slate-50/50 border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div 
                            ref={featuresHeaderRef.ref as any}
                            className={cn(
                                "text-center mb-20 reveal-on-scroll",
                                featuresHeaderRef.isVisible && "animate-fade-up"
                            )}
                        >
                            <h2 className="text-4xl font-black text-slate-900 mb-6">{t.public.landing.features.title}</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                                {t.public.landing.features.subtitle}
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featureKeys.map((key, index) => {
                                const Icon = featureIcons[index];
                                const feature = t.public.landing.features.items[key];
                                return (
                                    <div 
                                        key={key}
                                        className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 duration-300"
                                    >
                                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 lg:py-40 bg-white overflow-hidden relative">
                    <div className="container mx-auto px-4">
                        <div 
                            ref={ctaRef.ref as any}
                            className={cn(
                                "relative rounded-[3rem] bg-slate-950 p-12 lg:p-24 text-center reveal-on-scroll shadow-2xl overflow-hidden",
                                ctaRef.isVisible && "animate-fade-up"
                            )}
                        >
                            <div className="relative z-10">
                                <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
                                    {t.public.landing.cta.title}
                                </h2>
                                <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
                                    {t.public.landing.cta.subtitle}
                                </p>
                                <Link
                                    href="/signup"
                                    className="inline-flex items-center rounded-full bg-white px-10 py-5 text-lg font-black text-slate-950 hover:bg-slate-100 hover:scale-105 transition-all shadow-xl"
                                >
                                    {t.public.landing.cta.button}
                                </Link>
                            </div>

                            {/* Background mesh effects */}
                            <div className="absolute top-0 left-0 h-full w-full opacity-20 pointer-events-none">
                                <div className="absolute -top-[50%] -left-[20%] h-[400px] w-[400px] rounded-full bg-blue-500 blur-3xl" />
                                <div className="absolute -bottom-[50%] -right-[20%] h-[500px] w-[500px] rounded-full bg-indigo-600 blur-3xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
