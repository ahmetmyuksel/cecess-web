"use client";

import { usePathname } from "next/navigation";
import { PublicNavbar } from "@/features/public/components/public-navbar";
import { Footer } from "@/features/public/components/footer";

export function PublicNavWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Define routes where we DON'T want the public navbar/footer
    const isProfileRoute = pathname?.startsWith('/profile');
    // We also might want to hide it on auth pages (login/signup) if specified, 
    // but usually they have the public navbar.
    
    if (isProfileRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <PublicNavbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </>
    );
}
