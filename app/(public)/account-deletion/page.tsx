import { AccountDeletionView } from "@/features/public/components/account-deletion-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Account Deletion",
    description: "Request deletion of your cecess account and all associated data. Follow the steps to permanently remove your account.",
    path: "/account-deletion",
});

export default function AccountDeletionPage() {
    return <AccountDeletionView />;
}
