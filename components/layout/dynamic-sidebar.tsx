"use client";

import dynamic from "next/dynamic";

export const DynamicSidebar = dynamic(() => import("@/components/sidebar").then(mod => mod.Sidebar), { 
    ssr: false,
    loading: () => <div className="hidden md:block w-64 h-screen border-r bg-card border-slate-200" />
});
