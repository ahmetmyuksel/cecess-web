export const dynamic = 'force-static';

import { LanguageProvider } from "@/features/i18n/context/language-context";
import { FaqView } from "@/features/public/components/faq-view";

export default function FaqPage() {
  return (
    <LanguageProvider>
      <FaqView />
    </LanguageProvider>
  );
}
