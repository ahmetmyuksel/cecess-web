export const runtime = 'edge';
import { SubscriptionView } from "@/features/subscription/components/subscription-view";
import { createClient } from "@/utils/supabase/server";

export default async function SubscriptionPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return <div>Unauthorized</div>;
    }

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();

    return <SubscriptionView initialProfile={profile} />;
}
