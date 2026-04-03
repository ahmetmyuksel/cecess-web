"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface CategorizeRequest {
    descriptions: string[];
    currentCategories: string[];
}

interface AIResponse {
    matches: {
        description: string;
        category: string;
        isNew: boolean;
        icon?: string;
        confidence: number;
    }[];
}

export async function categorizeTransactionsAction({ descriptions, currentCategories }: CategorizeRequest): Promise<{ success: boolean; data?: AIResponse; error?: string }> {
    try {
        if (!process.env.GEMINI_API_KEY) {
            return { success: false, error: "API Key not configured" };
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

        const prompt = `
        You are a financial assistant. I will provide a list of transaction descriptions and a list of existing categories.
        
        Task:
        1. Analyze each transaction description.
        2. Assign the most appropriate category from the "Existing Categories" list.
        3. If NO existing category fits well, suggest a NEW, concise, standard category name (e.g., "Dining", "Groceries", "Transport", "Subscriptions").
        4. For NEW categories, also suggest a relevant Emoji Icon (e.g., 🍔 for Dining).
        5. Return a JSON object with a "matches" array.

        Existing Categories:
        ${JSON.stringify(currentCategories)}

        Transactions to Categorize:
        ${JSON.stringify(descriptions)}

        Output Format (JSON Only):
        {
            "matches": [
                { 
                    "description": "Transaction Name", 
                    "category": "Assigned Category", 
                    "isNew": true/false, 
                    "icon": "🍔", // Only required if isNew is true
                    "confidence": 0.9 
                }
            ]
        }
        `;

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        });

        const response = result.response;
        const text = response.text();

        if (!text) throw new Error("Empty response from AI");

        const parsed = JSON.parse(text) as AIResponse;
        return { success: true, data: parsed };

    } catch (error) {
        console.error("AI Categorization Error:", error);
        return { success: false, error: (error as Error).message || "Failed to categorize transactions" };
    }
}
