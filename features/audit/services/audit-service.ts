import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export async function logAudit(
    { userId, action, metadata, email, resourceType, resourceId, oldValues, newValues, status = 'success', error }: {
        userId?: string;
        action: string;
        metadata?: Record<string, any>;
        email?: string; // Optional context if user_id is unknown (e.g. failed login)
        resourceType?: string;
        resourceId?: string;
        oldValues?: Record<string, any>;
        newValues?: Record<string, any>;
        status?: 'success' | 'failure';
        error?: string;
    }
) {
    try {
        const supabase = await createClient();
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || "unknown";
        const userAgent = headersList.get("user-agent") || "unknown";
        const referer = headersList.get("referer") || "";

        // If userId is missing but we have email (e.g. failed login), we might want to try to find the user
        // But for security/performance, we might just log the attempt with null user_id and email in metadata.

        const finalMetadata = {
            ...metadata,
            email: email || metadata?.email, // Ensure email is captured for context
        };

        // We use a separate admin client or just the current client?
        // If the current client is anonymous (failed login), it might not have permission to insert if RLS requires auth.uid() = user_id.
        // The reset_db.sql says: create policy "Users can insert audit logs" ... with check ( auth.uid() = user_id );
        // This implies enabling RLS prevents anon inserts.
        // We probably need a Service Role client here for reliable logging of ALL events (including auth failures).

        // However, 'createClient' usually uses cookie auth.
        // Let's rely on the fact that for "Failed Login", we are anonymous.
        // We need to bypass RLS for audit logs or have a generic "insert-only" policy for anon?
        // Better: Use Admin Client for Audit Logs to ensure they are always written.

        const supabaseAdmin = (await import("@supabase/supabase-js")).createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        await supabaseAdmin.from("audit_logs").insert({
            user_id: userId || null, // Can be null for failed attempts
            action,
            resource_type: resourceType,
            resource_id: resourceId,
            old_values: oldValues,
            new_values: newValues,
            metadata: finalMetadata,
            ip_address: ip,
            user_agent: userAgent,
            path: referer, // Best approximation for "path" in server action context
            status,
            error_message: error
        });

    } catch (error) {
        console.error("Failed to write audit log:", error);
        // Don't throw, we don't want to break the user flow just because logging failed.
    }
}
