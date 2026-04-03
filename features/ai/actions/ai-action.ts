"use server";

import { ActionResponse } from "@/types";
import { categorizeSchema } from "../schemas/ai-schema";
import { categorizeTransaction, categorizeBatch } from "../services/gemini-service";

export async function categorizeTransactionAction(
    prevState: ActionResponse<string>,
    formData: FormData
): Promise<ActionResponse<string>> {

    // Extract data manually since we might be calling this programmatically or via form
    // If called via form, we expect specific fields. 
    // However, this action might be better suited as a direct function call for the prototype, 
    // but let's stick to the form pattern or standard action pattern.

    // For the prototype text form:
    const description = formData.get("description") as string;
    // Categories will be hardcoded or passed as a JSON string for the prototype form
    const categoriesRaw = formData.get("categories") as string;

    let categories: string[] = [];
    try {
        categories = JSON.parse(categoriesRaw);
    } catch {
        return { success: false, error: "Invalid categories format" };
    }

    const validated = categorizeSchema.safeParse({ description, categories });

    if (!validated.success) {
        return {
            success: false,
            fieldErrors: validated.error.flatten().fieldErrors,
        };
    }

    try {
        const result = await categorizeTransaction(validated.data);
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}

export async function categorizeBatchAction(
    descriptions: string[],
    categories: string[]
): Promise<ActionResponse<string[]>> {
    try {
        // Basic validation
        if (!descriptions.length) return { success: false, error: "No descriptions provided" };
        if (!categories.length) return { success: false, error: "No categories provided" };

        // Limit batch size if needed (Gemini Flash is generous, but let's be safe)
        const MAX_BATCH = 200;
        if (descriptions.length > MAX_BATCH) {
            // In a real app, we would chunk this. For prototype, just warn/slice.
            descriptions = descriptions.slice(0, MAX_BATCH);
        }

        const results = await categorizeBatch(descriptions, categories);
        return { success: true, data: results };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}
