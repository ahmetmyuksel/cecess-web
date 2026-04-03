"use client";

import { useActionState, useEffect } from "react";
import { ActionResponse } from "@/types";
import { loginAction } from "../actions/auth-action";
import { useRouter } from "next/navigation";

const initialState: ActionResponse = { success: false };

export const useLogin = () => {
    const [state, action] = useActionState(loginAction, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push("/profile/dashboard");
        }
    }, [state, router]);

    return { state, action };
};
