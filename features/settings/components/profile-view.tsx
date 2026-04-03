"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/features/auth/hooks/use-user";
import { createClient } from "@/utils/supabase/client";
import { PhoneInput } from "@/components/ui/phone-input";
import { DatePicker } from "@/components/ui/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

export function ProfileView() {
    const { user, profile, loading } = useUser();
    const supabase = createClient();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        dob: "",
        language: "en",
        currency: "USD",
        notifications: {
            budgetAlerts: true,
            weeklySummary: true,
            productUpdates: false
        }
    });

    // Read-only display values
    const [displayData, setDisplayData] = useState({
        // fullName removed, now editable in formData
        gender: "",
        subscription: "",
        avatarUrl: ""
    });

    // Local API state for verification
    const [apiData, setApiData] = useState<any>(null);

    // Fetch from our new API route on mount
    useEffect(() => {
        const fetchFromApi = async () => {
            try {
                const res = await fetch('/api/auth/me');
                const json = await res.json();
                setApiData(json);
            } catch (e) {
                // error handling silent or UI
            }
        };
        fetchFromApi();
    }, []);

    useEffect(() => {
        // Priority: API Data -> Global Profile -> User Metadata
        // If API returned a profile (either from DB or metadata fallback), use it.
        const effectiveProfile = apiData?.profile || profile;

        if (effectiveProfile) {
            setFormData({
                first_name: effectiveProfile.first_name || "",
                last_name: effectiveProfile.last_name || "",
                email: effectiveProfile.email || user?.email || "",
                phone: effectiveProfile.phone || effectiveProfile.phone || "", // API might return just phone
                dob: effectiveProfile.dob || "",
                language: effectiveProfile.language || "en",
                currency: effectiveProfile.currency || "USD",
                notifications: effectiveProfile.notifications || {
                    budgetAlerts: true,
                    weeklySummary: true,
                    productUpdates: false
                }
            });
            setDisplayData({
                gender: effectiveProfile.gender || "-",
                subscription: effectiveProfile.subscription_tier || "Free",
                avatarUrl: effectiveProfile.avatar_url || ""
            });
        } else if (user) {
            // Fallback
            const meta = user.user_metadata || {};
            setFormData({
                first_name: meta.first_name || "",
                last_name: meta.last_name || "",
                email: user.email || "",
                phone: meta.phone || "",
                dob: meta.dob || "",
                language: "en",
                currency: "USD",
                notifications: {
                    budgetAlerts: true,
                    weeklySummary: true,
                    productUpdates: false
                }
            });
            setDisplayData({
                gender: meta.gender || "-",
                subscription: "Free", // Fallback default
                avatarUrl: meta.avatar_url || ""
            });
        }
    }, [profile, apiData, user, loading]);



    return (
        <div className="w-full max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        Profile
                    </h2>
                    <p className="text-sm text-slate-500">Manage your profile information.</p>
                </div>
            </div>

            <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                {/* Avatar Section */}
                <div className="flex flex-col items-center justify-center pb-6 border-b border-slate-100">
                    <div className="relative group">
                        <Avatar className="h-28 w-28 border-4 border-white shadow-lg ring-1 ring-slate-100">
                            <AvatarImage src={displayData.avatarUrl} className="object-cover" />
                            <AvatarFallback className="text-2xl bg-slate-50 text-slate-400 font-medium">
                                {formData.first_name?.charAt(0) || user?.email?.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                {/* Personal Information Group */}
                <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-4">Personal Information</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">First Name</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={formData.first_name}
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Last Name</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={formData.last_name}
                                placeholder="Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Gender</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={displayData.gender}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={formData.dob ? new Date(formData.dob).toLocaleDateString() : ""}
                                placeholder="DD/MM/YYYY"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-px bg-slate-100 my-2" />

                {/* Contact Information Group */}
                <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-4">Contact Information</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <div className="flex gap-2">
                                <input
                                    disabled
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                    value={formData.email}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={formData.phone}
                            />
                        </div>
                    </div>
                </div>

                <div className="h-px bg-slate-100 my-2" />

                {/* Preferences Group */}
                <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-4">Preferences</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Language</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={formData.language === 'tr' ? 'Türkçe' : 'English'}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Currency</label>
                            <input
                                disabled
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                                value={formData.currency}
                            />
                        </div>
                    </div>
                </div>

                <div className="h-px bg-slate-100 my-2" />

                {/* Notifications Group */}
                <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-4">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 bg-slate-50">
                            <div className="space-y-0.5">
                                <label className="text-sm font-medium text-slate-500">Budget Alerts</label>
                                <p className="text-xs text-slate-400">Get notified when you exceed your budget limits.</p>
                            </div>
                            <Switch checked={formData.notifications.budgetAlerts} disabled />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 bg-slate-50">
                            <div className="space-y-0.5">
                                <label className="text-sm font-medium text-slate-500">Weekly Summary</label>
                                <p className="text-xs text-slate-400">Receive a weekly digest of your spending habits.</p>
                            </div>
                            <Switch checked={formData.notifications.weeklySummary} disabled />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 bg-slate-50">
                            <div className="space-y-0.5">
                                <label className="text-sm font-medium text-slate-500">Product Updates</label>
                                <p className="text-xs text-slate-400">Stay informed about new features and improvements.</p>
                            </div>
                            <Switch checked={formData.notifications.productUpdates} disabled />
                        </div>
                    </div>
                </div>

                {/* Note about App Usage */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 mt-6">
                    <h3 className="text-lg font-medium text-slate-700">Account Management</h3>
                    <p className="mt-1 text-sm text-slate-600">
                        To manage your account, update your profile, change your password, or delete your account, please use the Cecess mobile application.
                    </p>
                </div>
            </div>
        </div>
    );
}
