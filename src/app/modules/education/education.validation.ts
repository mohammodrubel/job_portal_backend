import { z } from "zod";

export const educationValidationSchema = z.object({
    body: z.object({
        institute: z
            .string()
            .min(1, "Institute is required")
            .max(255),

        degree: z
            .string()
            .min(1, "Degree is required")
            .max(255)
            .optional(),

        fieldOfStudy: z
            .string()
            .max(255)
            .optional()
            .nullable(),

        startYear: z
            .string()
            .optional()
            .nullable(),

        endYear: z
            .string()
            .optional()
            .nullable(),

        isCurrent: z.boolean().default(false),

        grade: z
            .string()
            .max(50)
            .optional()
            .nullable(),

        description: z
            .string()
            .max(1000)
            .optional()
            .nullable(),
    })
});

export const educationValidation = {
    educationValidationSchema
}