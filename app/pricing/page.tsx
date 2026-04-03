export const dynamic = 'force-static';

import { LanguageProvider } from "@/features/i18n/context/language-context";
import { PricingView } from "@/features/public/components/pricing-view";

export default function PricingPage() {
  return (
    <LanguageProvider>
      <PricingView />
    </LanguageProvider>
  );
}
