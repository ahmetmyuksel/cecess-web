export const dynamic = 'force-static';
import { LandingView } from "@/features/public/components/landing-view";
import { LanguageProvider } from "@/features/i18n/context/language-context";

export default function Home() {
    return (
    <LanguageProvider>
      <LandingView />
    </LanguageProvider>
  );
}
