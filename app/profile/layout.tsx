"use client";

import { ProtectedLayout } from "@/components/protected-layout";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedLayout>
            <div className="flex min-h-screen bg-background text-foreground font-sans antialiased">
                <Sidebar />
                <div className="flex-1 flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </ProtectedLayout>
    );
}
