"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:translate-y-[-1px] hover:shadow-blue-300/80 ${pending ? "opacity-70 cursor-not-allowed" : ""
                }`}
        >
            {pending ? "Logging in..." : "Log in"}
        </button>
    );
}
