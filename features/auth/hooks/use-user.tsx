"use client";

import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState, useCallback, createContext, useContext } from "react";

type Profile = {
    id: string;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    avatar_url: string | null;
    username: string | null;
    subscription_tier?: string;
    dob: string | null;
    phone: string | null;
    gender: string | null;
    currency?: string;
    language?: string;
    notifications?: any; // JSONB
};

type UserContextType = {
    user: User | null;
    profile: Profile | null;
    loading: boolean;
    error: string | null;
    refreshProfile: () => Promise<void>;
};

const UserContext = createContext<UserContextType>({
    user: null,
    profile: null,
    loading: true,
    error: null,
    refreshProfile: async () => { },
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [supabase] = useState(() => createClient());

    const fetchProfile = useCallback(async (userId: string) => {
        try {
            setError(null);
            const { data, error: fetchError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", userId)
                .single();

            if (fetchError) {
                console.warn("useUser: Profile fetch failed", fetchError.message);

                // Fallback to metadata if profile doesn't exist in 'profiles' table yet
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {

                    setProfile({
                        id: user.id,
                        first_name: user.user_metadata.first_name || null,
                        last_name: user.user_metadata.last_name || null,
                        email: user.email || null,
                        avatar_url: user.user_metadata.avatar_url || null,
                        username: user.user_metadata.username || null,
                        subscription_tier: 'Free',
                        dob: user.user_metadata.dob || null,
                        phone: user.user_metadata.phone || null,
                        gender: user.user_metadata.gender || null
                    });
                } else {
                    setError(fetchError.message);
                }
            } else {

                setProfile(data);
            }
        } catch (err) {
            console.error("Error in fetchProfile:", err);
            setError("Unexpected error fetching profile");
            // Fallback: If profile fetch fails, try to use user metadata or just proceed
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, [supabase]);

    const refreshProfile = useCallback(async () => {
        if (user) {
            // Do not set global loading(true) here as it causes the whole app to show a spinner.
            // Just fetch in the background.
            await fetchProfile(user.id);
        }
    }, [user, fetchProfile]);

    useEffect(() => {
        let mounted = true;

        // 1. Get Session Immediately & Subscribe
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (!mounted) return;

            try {
                setUser(session?.user ?? null);

                if (session?.user) {
                    // Only fetch if we don't have a profile or it's a new session type
                    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'INITIAL_SESSION') {
                        await fetchProfile(session.user.id);
                    }
                } else {
                    // console.warn("[useUser] No user in session. Clearing profile.");
                    setProfile(null);
                    setLoading(false); // No user, so we are done loading
                }
            } catch (err) {
                console.error("useUser: Error in auth change", err);
                setError("Auth state change error");
                setLoading(false);
            }
        });

        // 2. Fetch initial session explicitly
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            if (error) {
                console.error("[useUser] getSession Error:", error);
            }
            if (mounted) {
                if (session) {
                    setUser(session.user);
                    fetchProfile(session.user.id);
                } else {
                    // console.warn("[useUser] No initial session found.");
                    setLoading(false); // No session, stop loading
                }
            }
        });

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, [supabase, fetchProfile]);

    // Safety Timeout: Force loading to false after 8s to prevent stuck screens
    useEffect(() => {
        const timer = setTimeout(() => {
            if (loading) {
                console.warn("useUser: Force stopping loading state after timeout.");
                setLoading(false);
            }
        }, 8000);
        return () => clearTimeout(timer);
    }, [loading]);

    const value = { user, profile, loading, error, refreshProfile };

    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
