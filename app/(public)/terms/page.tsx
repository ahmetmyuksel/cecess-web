import { DynamicTermsView } from "@/features/public/components/dynamic-views";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Terms of Service",
    description: "Read the terms and conditions for using cecess. Understand your rights and responsibilities as a user.",
    path: "/terms",
});

export default function TermsPage() {
    return <DynamicTermsView />;
}
