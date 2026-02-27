import { z } from "zod";

export const companySchema = z.object({
    body: z.object({
        name: z
            .string()
            .min(2, "Company name must be at least 2 characters")
            .max(100, "Company name is too long"),

        website: z
            .string()
            .url("Please enter a valid website URL")
            .optional()
            .or(z.literal("")),

        size: z
            .string()
            .min(1, "Company size is required"),

        industry: z
            .string()
            .min(2, "Industry is required"),

        description: z
            .string()
            .min(10, "Description must be at least 10 characters")
            .max(1000, "Description is too long"),

        foundedYear: z
            .string(),

        headquarters: z
            .string()
            .min(2, "Headquarters location is required"),

        position: z
            .string()
            .min(2, "Position is required"),
    })
});