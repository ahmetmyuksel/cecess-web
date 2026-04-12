import { createClient } from "@/utils/supabase/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Require service role key — never fall back to anon key
        const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!serviceRoleKey) {
            console.error("SUPABASE_SERVICE_ROLE_KEY is not configured");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const adminSupabase = createAdminClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            serviceRoleKey
        );

        const { data: profile, error: dbError } = await adminSupabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (dbError) {
            console.error("API Profile Fetch Error:", dbError.message);
            return NextResponse.json({
                source: 'auth_metadata_fallback',
                profile: {
                    id: user.id,
                    email: user.email,
                    first_name: user.user_metadata?.first_name ?? null,
                    last_name: user.user_metadata?.last_name ?? null,
                    phone: user.user_metadata?.phone ?? null,
                    gender: user.user_metadata?.gender ?? null,
                    subscription_tier: user.user_metadata?.subscription_tier ?? "Free"
                }
            });
        }

        return NextResponse.json({
            source: 'database',
            profile
        });

    } catch (error) {
        console.error("API /auth/me error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
