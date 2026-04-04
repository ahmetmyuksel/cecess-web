"use client";

import { createClient } from "@/utils/supabase/client";

export async function signOutUser(): Promise<void> {
    const supabase = createClient();
    const [serverResponse, clientResult] = await Promise.allSettled([
        fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include",
        }),
        supabase.auth.signOut(),
    ]);

    if (serverResponse.status === "rejected") {
        throw serverResponse.reason;
    }

    if (!serverResponse.value.ok) {
        const payload = await serverResponse.value.json().catch(() => null);
        throw new Error(payload?.error || "Logout request failed");
    }

    if (clientResult.status === "fulfilled" && clientResult.value.error) {
        throw clientResult.value.error;
    }
}
