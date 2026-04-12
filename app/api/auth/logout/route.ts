import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout error:", error.message);
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
