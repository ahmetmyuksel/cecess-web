import { LoginView } from "@/features/auth/components/login-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Login",
    description: "Sign in to your cecess account to manage your finances, track expenses, and view your financial dashboard.",
    path: "/login",
    noIndex: true,
});

export default function LoginPage() {
    return <LoginView />;
}
