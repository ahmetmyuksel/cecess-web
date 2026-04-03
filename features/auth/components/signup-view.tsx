"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupInput } from "../schemas/auth-schema";
import { signupAction, resendVerificationAction } from "../actions/auth-action";
import { useTransition, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Loader2, Mail, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { PhoneInput } from "@/components/ui/phone-input";
import { DatePicker } from "@/components/ui/date-picker";
import { Modal } from "@/components/ui/modal";
import { useLanguage } from "@/features/i18n/hooks/use-language";

export function SignupView() {
    const { t } = useLanguage();
    const [isPending, startTransition] = useTransition();
    const [successState, setSuccessState] = useState<{ email: string } | null>(null);
    const [resendStatus, setResendStatus] = useState<{ success?: boolean; message?: string } | null>(null);
    const [resendTimer, setResendTimer] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const form = useForm<SignupInput>({
        resolver: zodResolver(signupSchema) as any,
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            currency: "EUR",
            gender: undefined,
            phone: "",
            dob: undefined, // Initialize dob
        } as any,
    });

    const watchedPassword = form.watch("password");

    const passwordRequirements = [
        { regex: /.{8,}/, label: "At least 8 characters" },
        { regex: /[A-Z]/, label: "One uppercase letter" },
        { regex: /[a-z]/, label: "One lowercase letter" },
        { regex: /[0-9]/, label: "One number" },
        { regex: /[^A-Za-z0-9]/, label: "One special character" },
    ];

    const isRequirementMet = (regex: RegExp) => regex.test(watchedPassword || "");

    const onSubmit = (values: SignupInput) => {
        startTransition(async () => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (key === 'dob' && value instanceof Date) {
                    formData.append(key, value.toISOString());
                } else if (value !== undefined && value !== null) {
                    formData.append(key, value as string);
                }
            });

            const result = await signupAction({ success: false }, formData);

            if (result.success && result.data?.email) {
                setSuccessState({ email: result.data.email });
            } else if (!result.success && result.error) {
                form.setError("root", { message: result.error });
            } else if (!result.success && result.fieldErrors) {
                Object.entries(result.fieldErrors).forEach(([field, errors]) => {
                    form.setError(field as any, { message: errors[0] });
                });
            }
        });
    };

    const handleResend = () => {
        if (!successState?.email) return;

        startTransition(async () => {
            const result = await resendVerificationAction(successState.email);
            setResendStatus({ success: result.success, message: result.error || "Email sent!" });

            setResendTimer(60);
            const interval = setInterval(() => {
                setResendTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        });
    };

    // Helper to render content (copied from PrivacyView/TermsView)
    const renderContent = (text: string) => {
        const parts = text.split(":");
        if (parts.length > 1 && parts[0].length < 50) {
            return (
                <span>
                    <strong className="text-slate-900 font-semibold">{parts[0]}:</strong>
                    {parts.slice(1).join(":")}
                </span>
            );
        }
        return text;
    };

    if (successState) {
        return (
            <div className="flex bg-slate-50 min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-md shadow-lg border-slate-200">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                            <Mail className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-slate-900">Check your email</CardTitle>
                        <CardDescription>
                            We&apos;ve sent a verification link to <span className="font-semibold text-slate-900">{successState.email}</span>.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-4 text-center">
                        <p className="text-sm text-slate-600">
                            Click the link in the email to activate your account and start your journey.
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <Button
                                variant="outline"
                                onClick={handleResend}
                                disabled={resendTimer > 0 || isPending}
                                className="w-full"
                            >
                                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                {resendTimer > 0 ? `Resend email in ${resendTimer}s` : "Resend Verification Email"}
                            </Button>
                            {resendStatus && (
                                <p className={cn("text-xs min-h-[1.5em]", resendStatus.success ? "text-green-600" : "text-rose-600")}>
                                    {resendStatus.message}
                                </p>
                            )}
                        </div>

                        <Link href="/login" className="block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline mt-4">
                            Back to Login
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="mb-8 relative h-12 w-48">
                <Image
                    src="/cecess-logo.png"
                    alt="cecess Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <Card className="w-full max-w-2xl shadow-xl border-slate-200">
                <CardHeader className="text-center space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">Create your account</CardTitle>
                    <CardDescription>
                        Join thousands of users tracking their financial freedom.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Michael" {...field} />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Scott" {...field} />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Gender & DOB */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Gender <span className="text-slate-400 text-xs font-normal">(Optional)</span></FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select gender" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Male">Male</SelectItem>
                                                    <SelectItem value="Female">Female</SelectItem>
                                                    <SelectItem value="Non-binary">Non-binary</SelectItem>
                                                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className="mb-0.5">Date of Birth</FormLabel>
                                            <FormControl>
                                                <DatePicker
                                                    date={field.value ? format(field.value, "yyyy-MM-dd") : ""}
                                                    setDate={(d) => {
                                                        if (d) {
                                                            // Create date at noon to avoid timezone issues when converting back and forth
                                                            const date = new Date(d);
                                                            // Ensure we keep the local date by setting hours
                                                            date.setHours(12, 0, 0, 0);
                                                            field.onChange(date);
                                                        } else {
                                                            field.onChange(undefined);
                                                        }
                                                    }}
                                                    placeholder="Pick a date"
                                                    className="w-full pl-3 text-left font-normal"
                                                    maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
                                                    startYear={1900}
                                                    endYear={new Date().getFullYear() - 18}
                                                />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Contact Info */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. michael@dundermifflin.com" {...field} />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone <span className="text-slate-400 text-xs font-normal">(Optional)</span></FormLabel>
                                            <FormControl>
                                                <PhoneInput
                                                    placeholder="e.g. +1 555 000 0000"
                                                    defaultCountry="US"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Preference */}
                            <FormField
                                control={form.control}
                                name="currency"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Preferred Currency</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="EUR">Euro (€)</SelectItem>
                                                <SelectItem value="USD">US Dollar ($)</SelectItem>
                                                <SelectItem value="GBP">British Pound (£)</SelectItem>
                                                <SelectItem value="TRY">Turkish Lira (₺)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="min-h-[20px]" />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="••••••••"
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                        onClick={() => setShowPassword((prev) => !prev)}
                                                        tabIndex={-1}
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="h-4 w-4 text-slate-500" />
                                                        ) : (
                                                            <Eye className="h-4 w-4 text-slate-500" />
                                                        )}
                                                        <span className="sr-only">Toggle password visibility</span>
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            {/* Custom Password Strength Indicator */}
                                            <div className="space-y-1 mt-2">
                                                {passwordRequirements.map((req, index) => {
                                                    const met = isRequirementMet(req.regex);
                                                    return (
                                                        <div key={index} className="flex items-center gap-2 text-xs transition-colors duration-200">
                                                            <div className={cn("h-1.5 w-1.5 rounded-full shrink-0", met ? "bg-green-500" : "bg-slate-300")} />
                                                            <span className={cn(met ? "text-green-600 font-medium" : "text-slate-500")}>
                                                                {req.label}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        placeholder="••••••••"
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                        tabIndex={-1}
                                                    >
                                                        {showConfirmPassword ? (
                                                            <EyeOff className="h-4 w-4 text-slate-500" />
                                                        ) : (
                                                            <Eye className="h-4 w-4 text-slate-500" />
                                                        )}
                                                        <span className="sr-only">Toggle password visibility</span>
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="min-h-[20px]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Terms */}
                            <div className="flex items-start space-x-2 pt-2">
                                <Checkbox id="terms" required className="mt-0.5" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                                    >
                                        I agree to the{" "}
                                        <button
                                            type="button"
                                            onClick={() => setShowPrivacy(true)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Privacy Policy
                                        </button>{" "}
                                        and{" "}
                                        <button
                                            type="button"
                                            onClick={() => setShowTerms(true)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Terms of Service
                                        </button>.
                                    </label>
                                </div>
                            </div>

                            {form.formState.errors.root && (
                                <p className="text-sm font-medium text-rose-600 text-center">{form.formState.errors.root.message}</p>
                            )}

                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isPending}>
                                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                Create Account
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <p className="mt-8 text-sm text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                    Log in
                </Link>
            </p>

            {/* Modals */}
            <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title={t.public.privacy.title}>
                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t.public.privacy.intro}</p>
                    <div className="space-y-6">
                        {Object.entries(t.public.privacy.sections).map(([key, section]) => (
                            <section key={key} id={key}>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{section.title}</h3>
                                <div className="space-y-2 text-slate-600 leading-relaxed text-sm">
                                    {section.body.map((paragraph, index) => (
                                        <p key={index}>{renderContent(paragraph)}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </Modal>

            <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title={t.public.terms.title}>
                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t.public.terms.intro}</p>
                    <div className="space-y-6">
                        {Object.entries(t.public.terms.sections).map(([key, section]) => (
                            <section key={key} id={key}>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{section.title}</h3>
                                <div className="space-y-2 text-slate-600 leading-relaxed text-sm">
                                    {section.body.map((paragraph, index) => (
                                        <p key={index}>{renderContent(paragraph)}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
