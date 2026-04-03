export const dynamic = 'force-static';

import { TermsView } from "@/features/public/components/terms-view";
import { LanguageProvider } from "@/features/i18n/context/language-context";

export default function TermsPage() {
    return (
        <LanguageProvider>
            <TermsView />
        </LanguageProvider>
    );
}
