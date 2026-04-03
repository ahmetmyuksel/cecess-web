import { z } from "zod";

export const transactionSchema = z.object({
    description: z.string().min(1, "Transaction name is required"),
    amount: z.number({ message: "Amount must be a number" }), // Mandatory, number only
    date: z.string().min(1, "Date is required"), // Mandatory
    category_id: z.string().optional().nullable(),
    currency: z.string().optional(),
});

export type TransactionInput = z.infer<typeof transactionSchema>;
