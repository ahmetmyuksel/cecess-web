"use client";

import dynamic from "next/dynamic";

export const DynamicHeader = dynamic(() => import("@/components/header").then(mod => mod.Header), { 
    ssr: false,
    loading: () => <div className="h-16 w-full border-b bg-background/95 animate-pulse" />
});
