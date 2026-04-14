import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { data, error } = await supabase
            .from("accounts")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching accounts:", error);
            return NextResponse.json({ error: "Failed to fetch accounts" }, { status: 500 });
        }

        return NextResponse.json(data || []);
    } catch (error) {
        console.error("API /accounts error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
