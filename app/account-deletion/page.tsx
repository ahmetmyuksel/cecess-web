export const runtime = 'edge';
import { AccountDeletionView } from "@/features/public/components/account-deletion-view";
import { createClient } from "@/utils/supabase/server";

import { LanguageProvider } from "@/features/i18n/context/language-context";

export default async function AccountDeletionPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <LanguageProvider>
            <AccountDeletionView isLoggedIn={!!user} />
        </LanguageProvider>
    );
}
