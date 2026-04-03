import { TransactionsView } from "@/features/transactions/components/transactions-view";
import { createClient } from "@/utils/supabase/server";
import { getTransactions } from "@/features/transactions/services/transaction-service";
import { format } from "date-fns";
import { formatCurrency } from "@/utils/currency-converter";
import { redirect } from "next/navigation";

export default async function TransactionsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch data server-side
  const rawTransactions = await getTransactions();

  // Format dates and currency server-side or pass raw to client?
  // UseRaw format is safer for Client Hydration if dates are strings (ISO). 
  // Let's mimic what client meant to do: map to UI model.

  // Need to get categories too for "allCategories" prop in View?
  // View hook calls useCategories internally, but initialCategories can be passed to it.
  // We should pass categories too for consistency.

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: true });

  const formattedCategories = categories?.map(c => ({
    id: c.id,
    name: c.name,
    type: c.type,
    icon: c.color
  })) || [];

  const formattedTransactions = rawTransactions.map((t: any) => {
    const val = Number(t.amount);
    const isPositive = val >= 0;
    let formatted = formatCurrency(Math.abs(val), t.currency || "USD");
    const formattedAmount = (isPositive ? "+" : "-") + formatted.replace("-", "");
    const catName = t.categories?.name || "Uncategorized";

    return {
      id: t.id,
      name: t.description || t.merchant || "Unknown",
      category: catName,
      date: format(new Date(t.date), "MMM d, yyyy"), // Be careful with timezone hydration mismatch
      amount: formattedAmount,
      positive: isPositive,
      currency: t.currency || "USD"
    };
  });

  return (
    <TransactionsView
      initialTransactions={formattedTransactions}
      initialCategories={formattedCategories}
    />
  );
}
