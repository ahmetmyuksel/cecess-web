export const runtime = 'edge';
import { CategoriesView } from "@/features/categories/components/categories-view";
import { createClient } from "@/utils/supabase/server";

export default async function CategoriesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return <div>Unauthorized</div>;
  }

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: true });

  // Map to UI model if needed (DB columns: name, type, color -> UI: icon)
  const formattedCategories = categories?.map(c => ({
    id: c.id,
    name: c.name,
    type: c.type as "Income" | "Expense",
    icon: c.color
  })) || [];

  return <CategoriesView initialCategories={formattedCategories} />;
}
