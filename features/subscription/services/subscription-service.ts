import { createClient } from "@/utils/supabase/server";
import { SubscriptionTier } from "@/features/subscription/types/subscription-types";

export const getSubscriptionTier = async (): Promise<SubscriptionTier> => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) throw new Error("Unauthorized");

    const { data, error } = await supabase
        .from('profiles')
        .select('subscription_tier')
        .eq('id', user.id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return (data?.subscription_tier as SubscriptionTier) || "Free";
};
