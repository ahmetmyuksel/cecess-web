export const dynamic = 'force-static';
import { AccountDeletionView } from "@/features/public/components/account-deletion-view";
import { LanguageProvider } from "@/features/i18n/context/language-context";

export default function AccountDeletionPage() {
    return (
        <LanguageProvider>
            <AccountDeletionView />
        </LanguageProvider>
    );
}
