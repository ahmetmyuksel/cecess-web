"use client";

import Link from "next/link";
import Image from "next/image";
import { useLogin } from "../hooks/use-login";
import { SubmitButton } from "./submit-button";
import { useLanguage } from "@/features/i18n/hooks/use-language";
import { createClient } from "@/utils/supabase/client";

export function LoginView() {
    const { state, action } = useLogin();
    const { t } = useLanguage();
    const supabase = createClient();

    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900 pt-16 sm:pt-0">
            <div className="pointer-events-none absolute inset-y-0 left-[-120px] w-[340px] bg-gradient-to-b from-blue-100/70 via-white to-transparent blur-3xl opacity-60" />
            <div className="pointer-events-none absolute inset-y-0 right-[-140px] w-[360px] bg-gradient-to-b from-emerald-100/50 via-blue-50 to-transparent blur-3xl opacity-60" />

            <div className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-6 px-4 sm:px-6">
                <div className="flex flex-col items-center gap-4 hidden sm:flex">
                    <div className="relative h-14 w-48">
                        <Image
                            src="/cecess-logo.png"
                            alt="cecess Logo"
                            fill
                            className="object-contain"
                            sizes="192px"
                            priority
                        />
                    </div>
                </div>

                <div className="text-center space-y-2 mt-4 sm:mt-0">
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t.auth.login.title}</h1>
                    <p className="text-sm sm:text-base text-slate-500 font-medium">{t.auth.login.subtitle}</p>
                </div>

                <div className="w-full rounded-[2rem] sm:rounded-3xl border border-slate-200 bg-white/90 p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] space-y-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-[0.98]"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.01.67-2.28 1.05-3.71 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        {t.public.nav.googleLogin}
                    </button>

                    <div className="relative flex items-center gap-4">
                        <div className="h-px flex-1 bg-slate-200" />
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.auth.login.divider}</span>
                        <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    <form className="space-y-4" action={action}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-800">{t.auth.login.emailLabel}</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                type="email"
                                placeholder={t.auth.login.emailPlaceholder}
                                name="email"
                                required
                                suppressHydrationWarning
                                defaultValue={(state as any).data?.email || ""}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-800">{t.auth.login.passwordLabel}</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                type="password"
                                placeholder={t.auth.login.passwordPlaceholder}
                                name="password"
                                required
                                suppressHydrationWarning
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm text-slate-700">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200" />
                                <span>{t.auth.login.rememberMe}</span>
                            </label>
                            <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium">
                                {t.auth.login.forgotPassword}
                            </Link>
                        </div>

                        {state.error && <p className="text-sm font-medium text-rose-600">{state.error}</p>}

                        <SubmitButton idleLabel={t.auth.login.submit} pendingLabel={t.auth.login.submitting} />
                    </form>
                </div>
            </div >
        </div >
    );
}
