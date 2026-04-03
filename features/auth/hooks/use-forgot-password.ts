"use client";

import { useFormState } from "react-dom";
import { forgotPasswordAction } from "../actions/auth-action";
import { ActionResponse } from "@/types";
const initialState: ActionResponse = { success: false };

export const useForgotPassword = () => {
    const [state, action] = useFormState(forgotPasswordAction, initialState);
    return { state, action };
};
