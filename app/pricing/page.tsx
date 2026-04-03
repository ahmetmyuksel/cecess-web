
import { LanguageProvider } from "@/features/i18n/context/language-context";
import { PricingView } from "@/features/public/components/pricing-view";

import { createClient } from "@/utils/supabase/server";

export default async function PricingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <LanguageProvider>
      <PricingView isLoggedIn={!!user} />
    </LanguageProvider>
  );
}
