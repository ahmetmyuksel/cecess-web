import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = request.nextUrl;
        const startDate = searchParams.get("startDate");
        const endDate = searchParams.get("endDate");

        let query = supabase
            .from("transactions")
            .select(`
                id,
                description,
                amount,
                date,
                merchant,
                currency,
                category_id,
                categories (
                    name
                )
            `)
            .eq("user_id", user.id)
            .order("date", { ascending: false });

        if (startDate) {
            query = query.gte("date", startDate);
        }

        if (endDate) {
            query = query.lte("date", endDate);
        }

        const { data, error } = await query;

        if (error) {
            console.error("Error fetching transactions:", error);
            return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
        }

        return NextResponse.json(data || []);
    } catch (error) {
        console.error("API /transactions error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
