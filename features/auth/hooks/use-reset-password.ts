"use client";

import { useFormState } from "react-dom";
import { updatePasswordAction } from "../actions/auth-action";
import { ActionResponse } from "@/types";
const initialState: ActionResponse = { success: false };

export const useResetPassword = () => {
    const [state, action] = useFormState(updatePasswordAction, initialState);
    return { state, action };
};
