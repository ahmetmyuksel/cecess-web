export const runtime = 'edge';

import { TermsView } from "@/features/public/components/terms-view";
import { createClient } from "@/utils/supabase/server";

import { LanguageProvider } from "@/features/i18n/context/language-context";

export default async function TermsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <LanguageProvider>
            <TermsView isLoggedIn={!!user} />
        </LanguageProvider>
    );
}
