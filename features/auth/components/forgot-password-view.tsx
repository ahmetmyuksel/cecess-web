"use client";

import Link from "next/link";
import Image from "next/image";
import { useForgotPassword } from "../hooks/use-forgot-password";
import { SubmitButton } from "./submit-button";

export function ForgotPasswordView() {
    const { state, action } = useForgotPassword();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900">
            <div className="pointer-events-none absolute inset-y-0 left-[-120px] w-[340px] bg-gradient-to-b from-blue-100/70 via-white to-transparent blur-3xl" />
            <div className="pointer-events-none absolute inset-y-0 right-[-140px] w-[360px] bg-gradient-to-b from-emerald-100/50 via-blue-50 to-transparent blur-3xl" />

            <div className="absolute left-6 top-6">
                <Link
                    href="/login"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                    ← Back to Login
                </Link>
            </div>

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
                    <h1 className="text-2xl font-semibold text-slate-900">Reset Password</h1>
                    <p className="text-sm text-slate-600">Enter your email and we'll send you a link to reset your password.</p>
                </div>

                <div className="w-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    {state.success ? (
                        <div className="text-center space-y-4">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-slate-900">Check your email</h3>
                            <p className="text-sm text-slate-600">
                                We have sent a password reset link to your email address.
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-4" action={action}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-800">Email Address</label>
                                <input
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    type="email"
                                    placeholder="you@example.com"
                                    name="email"
                                    required
                                />
                            </div>

                            {state.error && <p className="text-sm font-medium text-rose-600">{state.error}</p>}

                            <SubmitButton />
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
