"use client";

import Link from "next/link";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { useIntersectionObserver } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqView() {
    const { t } = useLanguage();
    const { faq } = t.public;

    const headerRef = useIntersectionObserver({ threshold: 0.1 });
    const accordionRef = useIntersectionObserver({ threshold: 0.05 });
    const footerRef = useIntersectionObserver({ threshold: 0.3 });

    const items = Object.values(faq.items);

    return (
        <div className="flex min-h-screen flex-col bg-white">

            <main className="flex-1 py-16 bg-slate-50 pt-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div
                        ref={headerRef.ref as any}
                        className={cn(
                            "text-center mb-12 reveal-on-scroll",
                            headerRef.isVisible && "animate-fade-up"
                        )}
                    >
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{faq.title}</h1>
                        <p className="text-slate-600">
                            {faq.subtitle}
                        </p>
                    </div>

                    <div
                        ref={accordionRef.ref as any}
                        className={cn(
                            "bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 reveal-on-scroll stagger-2",
                            accordionRef.isVisible && "animate-fade-up"
                        )}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {items.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold text-slate-900">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div
                        ref={footerRef.ref as any}
                        className={cn(
                            "mt-12 text-center text-sm text-slate-500 reveal-on-scroll stagger-3",
                            footerRef.isVisible && "animate-fade-up"
                        )}
                    >
                        Still have questions? Check your profile settings for support options or read our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                    </div>
                </div>
            </main>

        </div>
    );
}
