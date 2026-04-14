import { PricingView } from "@/features/public/components/pricing-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Pricing",
    description: "Choose the right cecess plan for you. Free and premium options for personal finance tracking, AI categorization, and more.",
    path: "/pricing",
});

export default function PricingPage() {
    return (
        <PricingView />
    );
}
