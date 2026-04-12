import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

const ALLOWED_NEXT_PATHS = [
    "/profile/dashboard",
    "/profile/transactions",
    "/profile/accounts",
    "/profile/categories",
    "/profile/reports",
    "/profile/settings",
    "/profile",
    "/reset-password",
    "/",
];

function sanitizeNextParam(next: string | null): string {
    if (!next) return "/";
    // Block protocol-relative URLs (//evil.com), absolute URLs, and non-path chars
    if (!next.startsWith("/") || next.startsWith("//") || next.includes("\\")) return "/";
    // Strip query params and hash for validation
    const pathname = next.split("?")[0].split("#")[0];
    if (!ALLOWED_NEXT_PATHS.includes(pathname)) return "/";
    return next;
}

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = sanitizeNextParam(searchParams.get("next"));

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            const forwardedHost = request.headers.get("x-forwarded-host");
            const isLocalEnv = process.env.NODE_ENV === "development";

            // Validate forwarded host against allowed hosts
            const allowedHosts = process.env.ALLOWED_HOSTS?.split(",") ?? [];
            const useForwardedHost = !isLocalEnv && forwardedHost && allowedHosts.includes(forwardedHost);

            if (useForwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`);
            }
            return NextResponse.redirect(`${origin}${next}`);
        }
    }

    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
