"use server";

import { createClient } from "@/utils/supabase/server";
import { ActionResponse } from "@/types";
import { createClient as createAdminClient } from "@supabase/supabase-js";

// Profile editing removed — managed via mobile app only.
// Account deletion retained for Google Play compliance requirement.

export async function deleteAccountAction(reason?: string): Promise<ActionResponse> {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) return { success: false, error: "Unauthorized" };

    try {
        const adminSupabase = createAdminClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        // 1. Archive to deleted_users
        const { error: archiveError } = await adminSupabase
            .from('deleted_users')
            .insert({
                user_id: user.id,
                email: user.email,
                reason: reason || 'User requested deletion'
            });

        if (archiveError) throw new Error("Failed to archive user: " + archiveError.message);

        // 2. Manually delete audit_logs because it doesn't have ON DELETE CASCADE
        const { error: auditError } = await adminSupabase
            .from('audit_logs')
            .delete()
            .eq('user_id', user.id);

        if (auditError) throw new Error("Failed to clean audit logs: " + auditError.message);

        // 3. Delete Auth User (Triggers CASCADE for profiles, accounts, transactions, etc.)
        const { error: deleteError } = await adminSupabase.auth.admin.deleteUser(user.id);

        if (deleteError) throw new Error("Failed to delete user: " + deleteError.message);

        return { success: true };
    } catch (e) {
        return { success: false, error: (e as Error).message };
    }
}
