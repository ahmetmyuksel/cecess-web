import { LandingView } from "@/features/public/components/landing-view";
import { createPageMetadata } from "@/lib/seo";
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/json-ld";

export const metadata = createPageMetadata({
    title: "Smart Personal Finance Tracker",
    description: "Track your assets, categorize transactions with AI, and manage your finances from a single dashboard. Available on Android and Web.",
    path: "/",
});

export default function Home() {
    return (
        <>
            <OrganizationJsonLd />
            <SoftwareApplicationJsonLd />
            <LandingView />
        </>
    );
}
