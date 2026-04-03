"use client";

import Link from "next/link";
import Image from "next/image";
import { useLogin } from "../hooks/use-login";
import { SubmitButton } from "./submit-button"; // I'll create this helper for loading state

export function LoginView() {
    const { state, action } = useLogin();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900">
            <div className="pointer-events-none absolute inset-y-0 left-[-120px] w-[340px] bg-gradient-to-b from-blue-100/70 via-white to-transparent blur-3xl" />
            <div className="pointer-events-none absolute inset-y-0 right-[-140px] w-[360px] bg-gradient-to-b from-emerald-100/50 via-blue-50 to-transparent blur-3xl" />

            <div className="absolute left-6 top-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                    ← Back home
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
                    <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
                    <p className="text-sm text-slate-600">Log in to your account to continue.</p>
                </div>

                <div className="w-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    <form className="space-y-4" action={action}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-800">Email or Username</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                type="text"
                                placeholder="you@example.com"
                                name="email"
                                required
                                suppressHydrationWarning
                                defaultValue={(state as any).data?.email || ""}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-800">Password</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                type="password"
                                placeholder="••••••••"
                                name="password"
                                required
                                suppressHydrationWarning
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm text-slate-700">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200" />
                                <span>Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700">
                                Forgot Password?
                            </Link>
                        </div>

                        {state.error && <p className="text-sm font-medium text-rose-600">{state.error}</p>}

                        <SubmitButton />
                    </form>
                </div>

                <p className="text-sm text-slate-700">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
                        Sign up
                    </Link>
                </p>
            </div >
        </div >
    );
}
