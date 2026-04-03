import "server-only";

import { createClient } from "@/utils/supabase/server";

export type TransactionDTO = {
    id: string;
    description: string;
    amount: number;
    date: string;
    merchant: string | null;
    currency: string | null;
    category_id: string | null;
    categories: {
        name: string;
    } | null;
};

export async function getTransactions(options?: {
    limit?: number;
    startDate?: Date;
    endDate?: Date;
}): Promise<TransactionDTO[]> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return [];

    let query = supabase
        .from("transactions")
        .select(`
            id,
            description, 
            amount,
            date,
            merchant,
            currency,
            category_id,
            categories (
                name
            )
        `)
        .eq("user_id", user.id)
        .order("date", { ascending: false });

    if (options?.startDate) {
        query = query.gte("date", options.startDate.toISOString());
    }

    if (options?.endDate) {
        query = query.lte("date", options.endDate.toISOString());
    }

    if (options?.limit) {
        query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) {
        console.error("Error fetching transactions:", error);
        return [];
    }

    // Cast Supabase response to DTO
    // Note: Supabase types might need better handling in a real strict app, 
    // but here we ensure the shape matches our interface.
    return (data as unknown as TransactionDTO[]) || [];
}
