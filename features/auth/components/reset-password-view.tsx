"use client";

import Image from "next/image";
import { useResetPassword } from "../hooks/use-reset-password";
import { SubmitButton } from "./submit-button";
import { useLanguage } from "@/features/i18n/hooks/use-language";

export function ResetPasswordView() {
    const { state, action } = useResetPassword();
    const { t } = useLanguage();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900">
            <div className="pointer-events-none absolute inset-y-0 left-[-120px] w-[340px] bg-gradient-to-b from-blue-100/70 via-white to-transparent blur-3xl" />
            <div className="pointer-events-none absolute inset-y-0 right-[-140px] w-[360px] bg-gradient-to-b from-emerald-100/50 via-blue-50 to-transparent blur-3xl" />

            <div className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-6 px-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative h-14 w-48">
                        <Image
                            src="/cecess-logo.png"
                            alt="cecess Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 192px, 192px"
                            priority
                        />
                    </div>
                </div>

                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold text-slate-900">{t.auth.resetPassword.title}</h1>
                    <p className="text-sm text-slate-600">{t.auth.resetPassword.subtitle}</p>
                </div>

                <div className="w-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    <form className="space-y-4" action={action}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-800">{t.auth.resetPassword.passwordLabel}</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                type="password"
                                placeholder={t.auth.resetPassword.passwordPlaceholder}
                                name="password"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-800">{t.auth.resetPassword.confirmPasswordLabel}</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                type="password"
                                placeholder={t.auth.resetPassword.confirmPasswordPlaceholder}
                                name="confirmPassword"
                                required
                            />
                        </div>

                        {state.fieldErrors?.confirmPassword && (
                            <p className="text-sm font-medium text-rose-600">{state.fieldErrors.confirmPassword}</p>
                        )}
                        {state.error && <p className="text-sm font-medium text-rose-600">{state.error}</p>}

                        <SubmitButton
                            idleLabel={t.auth.resetPassword.submit}
                            pendingLabel={t.auth.resetPassword.submitting}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
