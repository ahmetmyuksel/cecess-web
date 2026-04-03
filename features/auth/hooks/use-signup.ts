"use client";

import { useActionState, useEffect } from "react";
import { signupAction } from "../actions/auth-action";
import { ActionResponse } from "@/types";
import { useRouter } from "next/navigation";

const initialState: ActionResponse = { success: false };

export const useSignup = () => {
    const [state, action] = useActionState(signupAction, initialState);
    const router = useRouter();

    useEffect(() => {
        // If success (true), check if there is an error message (e.g. "Check your email")
        // or just redirect
        // Our action returns { success: true, error: "Please check your email..." }
        // We probably shouldn't redirect automatically if we want them to see the message.
        // But if strict redirect is preferred:
        // if (state.success && !state.error) { router.push("/profile/dashboard"); }
    }, [state, router]);

    return { state, action };
};
