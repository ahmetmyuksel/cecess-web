export const dynamic = 'force-static';

import { LanguageProvider } from "@/features/i18n/context/language-context";
import { PrivacyView } from "@/features/public/components/privacy-view";

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyView />
    </LanguageProvider>
  );
}
