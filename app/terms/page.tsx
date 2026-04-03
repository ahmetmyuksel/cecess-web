export const runtime = 'edge';

import { createClient } from "@/utils/supabase/server";
import { LanguageProvider } from "@/features/i18n/context/language-context";
import { DynamicTermsView } from "@/features/public/components/dynamic-views";

export default async function TermsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <LanguageProvider>
            <DynamicTermsView isLoggedIn={!!user} />
        </LanguageProvider>
    );
}
