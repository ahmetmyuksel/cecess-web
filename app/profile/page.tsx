export const runtime = 'edge';
import { redirect } from "next/navigation";

export default function ProfilePage() {
    redirect("/profile/dashboard");
}
