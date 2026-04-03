export const runtime = 'edge';
import { ReportsView } from "@/features/reports/components/reports-view";
import { createClient } from "@/utils/supabase/server";

export default async function ReportsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    let isPro = false;
    if (user) {
        const { data } = await supabase.from("profiles").select("subscription_tier").eq("id", user.id).single();
        isPro = data?.subscription_tier === "Pro";
    }

    return <ReportsView isPro={isPro} />;
}
