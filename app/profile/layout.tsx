import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ProtectedLayout } from "@/components/protected-layout";

import { createClient } from "@/utils/supabase/server";

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    let profile = null;
    if (user) {
        const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        profile = data;
    }

    return (
        <ProtectedLayout>
            <div className="flex min-h-screen bg-background text-foreground font-sans antialiased">
                <Sidebar initialProfile={profile} />
                <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out">
                    <Header />
                    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </ProtectedLayout>
    );
}
