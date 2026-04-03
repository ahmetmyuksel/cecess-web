export const runtime = 'edge';

import { LanguageProvider } from "@/features/i18n/context/language-context";
import { createClient } from "@/utils/supabase/server";
import { DynamicFaqView } from "@/features/public/components/dynamic-views";

export default async function FaqPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <LanguageProvider>
      <DynamicFaqView isLoggedIn={!!user} />
    </LanguageProvider>
  );
}
