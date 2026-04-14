import { DynamicPrivacyView } from "@/features/public/components/dynamic-views";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Privacy Policy",
    description: "Learn how cecess collects, uses, and protects your personal and financial data. Your privacy is our priority.",
    path: "/privacy",
});

export default function PrivacyPage() {
    return <DynamicPrivacyView />;
}
