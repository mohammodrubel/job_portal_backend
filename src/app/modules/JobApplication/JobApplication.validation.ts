import z from "zod";

export const createJobApplicationSchema = z.object({
    body: z.object({
        jobId: z.string().uuid("Invalid jobId"),
        resumeId: z.string().uuid("Invalid resumeId").optional().nullable(),
        coverLetter: z
            .string()
            .min(100)
            .max(5000, "Cover letter must be under 5000 characters")
            .optional()
            .nullable(),
    })
});