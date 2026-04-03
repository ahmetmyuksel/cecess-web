export const runtime = 'edge';
import { AccountsView } from "@/features/accounts/components/accounts-view";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getAccounts } from "@/features/accounts/actions/accounts-action";

export default async function AccountsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const accounts = await getAccounts();

  return <AccountsView initialAccounts={accounts} />;
}
