import { z } from "zod";

export const categorizeSchema = z.object({
    description: z.string().min(1, "Description is required"),
    categories: z.array(z.string()).min(1, "At least one category is required"),
});

export type CategorizeInput = z.infer<typeof categorizeSchema>;
