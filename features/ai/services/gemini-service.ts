import "server-only";
import { CategorizeInput } from "../schemas/ai-schema";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";



export const categorizeTransaction = async (input: CategorizeInput): Promise<string> => {
    // Re-using batch logic for single item to keep it DRY, or keeping it separate. 
    // For simplicity, let's keep single separate for now.
    if (!GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured");
    }

    const prompt = `
    You are a financial assistant. 
    Analyze the following transaction description and map it to EXACTLY one of the provided categories.
    
    Transaction Description: "${input.description}"
    
    Available Categories:
    ${input.categories.map(c => `- ${c}`).join("\n")}
    
    Rules:
    1. Return ONLY the category name. No explanations, no extra text.
    2. If it's unclear, choose the "Uncategorized" or "General" category if available, otherwise choose the best fit.
    3. The output must perfectly match one of the provided category names.
  `;

    const body = {
        contents: [{
            parts: [{ text: prompt }]
        }]
    };

    try {
        const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            throw new Error("No response from Gemini");
        }

        return text.trim();

    } catch (error) {
        console.error("AI Categorization Error:", error);
        throw error;
    }
};

export const categorizeBatch = async (descriptions: string[], categories: string[]): Promise<string[]> => {
    if (!GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured");
    }

    // Gemini 1.5 Flash has a large context window, so we can send many at once.
    // However, for structured output, JSON mode is best.

    const prompt = `
    You are an expert financial assistant.
    I will provide a list of transaction descriptions. 
    For EACH description, map it to a category.

    Available Categories:
    ${categories.join(", ")}
    
    Transactions:
    ${descriptions.map((d, i) => `${i + 1}. ${d}`).join("\n")}
    
    Output Format:
    Return a raw JSON array of strings, where each string is the category for the corresponding transaction.
    Example: ["Food", "Transport", "Utilities"]
    
    Rules for Categorization:
    1. **ACCURACY IS PARAMOUNT.** Analyze the merchant name (e.g., "Shell", "Starbucks", "Netflix") and the sector.
    2. **LANGUAGE AGNOSTIC:** Transactions may be in English, Turkish, German, etc. Translate/Understand the context regardless of language.
    3. **PRIORITY 1 - EXISTING CATEGORIES:** If an "Available Category" is a *strong and accurate* fit, use it.
       - Example: "Migros" -> "Grocery" (If "Grocery" exists).
       - Example: "Uber" -> "Transport" (If "Transport" exists).
    
    4. **PRIORITY 2 - NEW SUGGESTION:** If user's available categories are NOT a good fit, you MUST suggest a standard, English category name.
       - Example: Transaction is "Spotify". Available are ["Food", "Rent"]. Do NOT use "Rent". Suggest "Subscriptions" or "Entertainment".
       - Example: Transaction is "TEIAS Elektrik". Available are ["Shopping"]. Do NOT use "Shopping". Suggest "Utilities" or "Bills".

    5. **NAMING CONVENTION:** 
       - Suggestions must be generic (e.g., "Health", "Pets", "Education"). 
       - Do NOT create merchant-specific categories like "Shell" or "Walmart".
       - Use Title Case.

    6. Return ONLY the JSON array. Length must match input.
  `;

    const body = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        generationConfig: {
            response_mime_type: "application/json"
        }
    };

    try {
        const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini Batch API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            throw new Error("No response from Gemini");
        }

        // Parse the JSON array
        const result = JSON.parse(text);
        if (!Array.isArray(result)) {
            throw new Error("AI did not return an array");
        }

        return result;

    } catch (error) {
        console.error("AI Batch Error:", error);
        // Fallback: return "Uncategorized" for all if failed, or rethrow
        throw error;
    }
};
