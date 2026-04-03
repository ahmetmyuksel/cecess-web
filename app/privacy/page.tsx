export const runtime = 'edge';

import { LanguageProvider } from "@/features/i18n/context/language-context";
import { createClient } from "@/utils/supabase/server";
import { DynamicPrivacyView } from "@/features/public/components/dynamic-views";

export default async function PrivacyPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <LanguageProvider>
      <DynamicPrivacyView isLoggedIn={!!user} />
    </LanguageProvider>
  );
}
