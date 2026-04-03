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
import { useIntersectionObserver } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { cn } from "@/lib/utils";

interface LandingViewProps {
    // isLoggedIn removed for static support
}

export function LandingView({ }: LandingViewProps) {
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
                        
                        {/* App Market Badges */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <a 
                                href="https://apps.apple.com/app/cecess/id6740698114"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-14 w-44 relative bg-black rounded-xl flex items-center px-4 gap-3 text-white border border-slate-800 hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1"
                            >
                                <svg className="h-7 w-7" viewBox="0 0 384 512" fill="currentColor">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.8-42.3 0-81.8 24.4-103.2 61.9-43.2 75.3-11.1 185.9 31 246.6 20.6 29.8 45.2 63.3 77.3 63.3 31.1 0 42.7-19.3 80.5-19.3 37.8 0 48.2 19.3 81 19.3 32.8 0 55.4-30.1 76-60 24.3-35.2 34.3-69.3 34.6-70.9-.8-.3-67.2-25.9-67.4-103.5zm-33.1-155.1c32.3-39.7 24.5-85.3 22.8-93.5-27.1 2.3-59.5 20.1-78.5 42.4-18 20.9-33.5 63-28.9 94.5 30.6 3 59.8-13.4 84.6-43.4z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 leading-none">Download on the</div>
                                    <div className="text-[17px] font-bold leading-tight">App Store</div>
                                </div>
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.ahmetmyuksel.cecess"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-14 w-44 relative bg-black rounded-xl flex items-center px-4 gap-3 text-white border border-slate-800 hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1"
                            >
                                <svg className="h-7 w-7" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 leading-none">GET IT ON</div>
                                    <div className="text-[17px] font-bold leading-tight">Google Play</div>
                                </div>
                            </a>
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
                                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                                    <a 
                                        href="https://apps.apple.com/app/cecess/id6740698114"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group h-14 w-44 relative bg-black rounded-xl flex items-center px-4 gap-3 text-white border border-slate-800 hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1"
                                    >
                                        <svg className="h-7 w-7" viewBox="0 0 384 512" fill="currentColor">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.8-42.3 0-81.8 24.4-103.2 61.9-43.2 75.3-11.1 185.9 31 246.6 20.6 29.8 45.2 63.3 77.3 63.3 31.1 0 42.7-19.3 80.5-19.3 37.8 0 48.2 19.3 81 19.3 32.8 0 55.4-30.1 76-60 24.3-35.2 34.3-69.3 34.6-70.9-.8-.3-67.2-25.9-67.4-103.5zm-33.1-155.1c32.3-39.7 24.5-85.3 22.8-93.5-27.1 2.3-59.5 20.1-78.5 42.4-18 20.9-33.5 63-28.9 94.5 30.6 3 59.8-13.4 84.6-43.4z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[10px] font-medium opacity-80 leading-none">Download on the</div>
                                            <div className="text-[17px] font-bold leading-tight">App Store</div>
                                        </div>
                                    </a>
                                    <a 
                                        href="https://play.google.com/store/apps/details?id=com.ahmetmyuksel.cecess"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group h-14 w-44 relative bg-black rounded-xl flex items-center px-4 gap-3 text-white border border-slate-800 hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1"
                                    >
                                        <svg className="h-7 w-7" viewBox="0 0 512 512" fill="currentColor">
                                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[10px] font-medium opacity-80 leading-none">GET IT ON</div>
                                            <div className="text-[17px] font-bold leading-tight">Google Play</div>
                                        </div>
                                    </a>
                                </div>
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

        </div>
    );
}
