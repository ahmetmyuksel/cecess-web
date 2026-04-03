
import { LanguageProvider } from "@/features/i18n/context/language-context";
import { FaqView } from "@/features/public/components/faq-view";

import { createClient } from "@/utils/supabase/server";

export default async function FaqPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <LanguageProvider>
      <FaqView isLoggedIn={!!user} />
    </LanguageProvider>
  );
}
