import { AccountsView } from "@/features/accounts/components/accounts-view";
import { getAccounts } from "@/features/accounts/actions/accounts-action";

export default async function AccountsPage() {
  const accounts = await getAccounts();

  return <AccountsView initialAccounts={accounts} />;
}
