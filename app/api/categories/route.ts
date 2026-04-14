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
            .from("categories")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: true });

        if (error) {
            console.error("Error fetching categories:", error);
            return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
        }

        // Map to UI model
        const categories = (data || []).map(c => ({
            id: c.id,
            name: c.name,
            type: c.type,
            icon: c.color
        }));

        return NextResponse.json(categories);
    } catch (error) {
        console.error("API /categories error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
