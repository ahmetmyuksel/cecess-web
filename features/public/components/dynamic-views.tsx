"use client";

import dynamic from "next/dynamic";

export const DynamicFaqView = dynamic(() => import("@/features/public/components/faq-view").then(mod => mod.FaqView), { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-white animate-pulse" />
});

export const DynamicTermsView = dynamic(() => import("@/features/public/components/terms-view").then(mod => mod.TermsView), { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-white animate-pulse" />
});

export const DynamicPrivacyView = dynamic(() => import("@/features/public/components/privacy-view").then(mod => mod.PrivacyView), { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-white animate-pulse" />
});
