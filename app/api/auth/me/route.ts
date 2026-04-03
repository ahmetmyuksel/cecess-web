import { createClient } from "@/utils/supabase/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET() {
    try {
        // 1. Verify Authentication using standard server client (Cookies)
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 2. Fetch Profile Data using SERVICE ROLE (Bypass RLS)
        // User requested to "forget RLS issues", so we force read with admin privileges.
        // Ensure SUPABASE_SERVICE_ROLE_KEY exists in .env
        const adminSupabase = createAdminClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // Fallback if missing (will fail RLS if not admin)
        );

        const { data: profile, error: dbError } = await adminSupabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (dbError) {
            console.error("API Profile Fetch Error:", dbError);
            // If row missing, return user metadata as fallback directly in API
            return NextResponse.json({
                source: 'auth_metadata_fallback',
                profile: {
                    id: user.id,
                    email: user.email,
                    first_name: user.user_metadata?.first_name,
                    last_name: user.user_metadata?.last_name,
                    phone: user.user_metadata?.phone, // Phone from metadata
                    gender: user.user_metadata?.gender,
                    subscription_tier: user.user_metadata?.subscription_tier
                }
            });
        }

        return NextResponse.json({
            source: 'database',
            profile
        });

    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
