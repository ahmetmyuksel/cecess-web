"use client";

import { Bell } from "lucide-react";
import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-4">
                {/* Empty left side */}
            </div>

            <div className="flex items-center gap-4">
                <button className="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="h-5 w-5" />
                </button>
                {/* Home button removed */}
            </div>
        </header>
    );
}
