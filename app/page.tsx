import { LandingView } from "@/features/public/components/landing-view";
import { createClient } from "@/utils/supabase/server";
import { LanguageProvider } from "@/features/i18n/context/language-context";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

    return (
    <LanguageProvider>
      <LandingView isLoggedIn={!!user} />
    </LanguageProvider>
  );
}
