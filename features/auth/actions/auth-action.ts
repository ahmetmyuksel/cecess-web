"use server";

import { z } from "zod";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { loginSchema } from "../schemas/auth-schema";
import { ActionResponse } from "@/types";

import { logAudit } from "@/features/audit/services/audit-service";

export async function loginAction(
    prevState: ActionResponse,
    formData: FormData
): Promise<ActionResponse<any>> {
    const validatedFields = loginSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            success: false,
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const email = validatedFields.data.email;
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: validatedFields.data.password,
    });

    if (error) {
        await logAudit({
            action: "LOGIN_FAILED",
            resourceType: "auth",
            email: email,
            status: "failure",
            error: error.message,
            metadata: { error: error.message }
        });

        return {
            success: false,
            error: error.message,
            data: { email }
        };
    }

    if (user) {
        await logAudit({
            userId: user.id,
            action: "LOGIN_SUCCESS",
            resourceType: "auth",
            resourceId: user.id,
            email: email,
            status: "success",
            metadata: { method: "password" }
        });
    }

    revalidatePath("/", "layout");
    redirect("/profile/dashboard");
}

export async function logoutAction() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        await logAudit({
            userId: user.id,
            action: "LOGOUT",
            email: user.email,
        });
    }

    await supabase.auth.signOut();
    revalidatePath("/", "layout");
    redirect("/");
}

export async function forgotPasswordAction(
    prevState: ActionResponse,
    formData: FormData
): Promise<ActionResponse> {
    const validatedFields = z.object({ email: z.string().email() }).safeParse({
        email: formData.get("email"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const supabase = await createClient();
    const headersList = await (await import('next/headers')).headers();
    const origin = headersList.get('origin') || '';

    // Construct callback URL so user is logged in and redirected to reset-password page
    const redirectTo = `${origin}/auth/callback?next=/reset-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(validatedFields.data.email, {
        redirectTo,
    });

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, error: "Check your email for the password reset link." };
}

export async function updatePasswordAction(
    prevState: ActionResponse,
    formData: FormData
): Promise<ActionResponse> {
    // 1. Validate fields
    const schema = z.object({
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

    const validatedFields = schema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            success: false,
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.updateUser({
        password: validatedFields.data.password,
    });

    if (error) {
        return { success: false, error: error.message };
    }

    redirect("/profile/dashboard");
}
