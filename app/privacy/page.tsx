
import { LanguageProvider } from "@/features/i18n/context/language-context";
import { PrivacyView } from "@/features/public/components/privacy-view";

import { createClient } from "@/utils/supabase/server";

export default async function PrivacyPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <LanguageProvider>
      <PrivacyView isLoggedIn={!!user} />
    </LanguageProvider>
  );
}
