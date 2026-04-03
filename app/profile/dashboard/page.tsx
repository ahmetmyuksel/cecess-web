export const runtime = 'edge';
import { DashboardView } from "@/features/profile/components/dashboard-view";
import { createClient } from "@/utils/supabase/server";
import { getTransactions } from "@/features/transactions/services/transaction-service";
import { format } from "date-fns";
import { formatCurrency } from "@/utils/currency-converter";

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ period?: string; from?: string; to?: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return <div>Unauthorized</div>;
  }

  // Calculate Date Range based on SearchParams
  const now = new Date();
  let startDate: Date | undefined;
  let endDate: Date | undefined;

  const { period: rawPeriod, from, to } = await searchParams;
  const period = rawPeriod || "this_month"; // Default to this month if nothing

  if (period === "this_month") {
    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  } else if (period === "last_30_days") {
    startDate = new Date();
    startDate.setDate(now.getDate() - 30);
    endDate = now;
  } else if (period === "this_year") {
    startDate = new Date(now.getFullYear(), 0, 1);
    endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
  } else if (period === "custom" && from && to) {
    startDate = new Date(from);
    endDate = new Date(to);
    // Ensure end date includes the full day
    endDate.setHours(23, 59, 59, 999);
  }

  // Fetch Transactions with Date Filter (No limit, so we see all for the period)
  const rawTransactions = await getTransactions({
    startDate,
    endDate,
    // limit: 1000 // Safety cap?
  });

  // Fetch Categories
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: true });

  // Format Transactions for UI
  const formattedTransactions = rawTransactions.map((t: any) => {
    const val = Number(t.amount);
    const isPositive = val >= 0;
    const formatted = formatCurrency(Math.abs(val), t.currency || "USD");
    const formattedAmount = (isPositive ? "+" : "-") + formatted.replace("-", ""); // Ensure consistent display format
    const catName = t.categories?.name || "Uncategorized";

    return {
      id: t.id,
      name: t.description || "Unknown",
      category: catName,
      date: format(new Date(t.date), "MMM d, yyyy"),
      amount: formattedAmount,
      positive: isPositive,
      currency: t.currency || "USD"
    };
  });

  // Format Categories for UI
  const formattedCategories = categories?.map(c => ({
    id: c.id,
    name: c.name,
    type: c.type as "Income" | "Expense",
    icon: c.color
  })) || [];

  // Extract user metadata for initial display
  const initialUser = {
    first_name: user.user_metadata.first_name,
    email: user.email
  };

  return <DashboardView
    initialTransactions={formattedTransactions}
    initialCategories={formattedCategories}
    user={initialUser}
  />;
}
