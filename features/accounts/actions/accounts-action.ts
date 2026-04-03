"use server";

import { createClient } from "@/utils/supabase/server";

// --- Actions (Read-Only) ---

export async function getAccounts() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return [];

    const { data, error } = await supabase
        .from("accounts")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching accounts:", error);
        return [];
    }

    return data || [];
}
