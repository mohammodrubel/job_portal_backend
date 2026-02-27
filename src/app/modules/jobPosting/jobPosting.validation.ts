import { z } from "zod";

// Enums (match your Prisma enums exactly)
export const JobTypeEnum = z.enum([
  "FULL_TIME",
  "PART_TIME",
  "CONTRACT",
  "INTERNSHIP",
  "FREELANCE",
]);

export const WorkModeEnum = z.enum([
  "ONSITE",
  "REMOTE",
  "HYBRID",
]);

export const JobStatusEnum = z.enum([
  "PENDING",
  "APPROVED",
  "CLOSED",
  "REJECTED",
]);

export const JobZodSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, { message: "Title must be at least 3 characters" }),

    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters" }),

    jobType: JobTypeEnum,

    workMode: WorkModeEnum,

    salaryMin: z
      .number({ invalid_type_error: "Salary min must be a number" })
      .int()
      .nonnegative()
      .optional(),

    salaryMax: z
      .number({ invalid_type_error: "Salary max must be a number" })
      .int()
      .nonnegative()
      .optional(),

    status: JobStatusEnum.optional(),

    postedById: z.string().uuid().optional(),
    approvedAt: z.string().datetime().optional(),
    closedAt: z.string().datetime().optional(),
    deadline: z.string().datetime({ message: "Deadline must be a valid ISO date string" }),
    publishedAt: z.string().datetime().optional(),

    // New fields added from your updated schema
    tags: z.array(z.string()).min(1, { message: "At least one tag is required" }), // required array
    companyName: z.string().min(1, { message: "Company name is required" }),
    location: z.string().min(1, { message: "Location is required" }),
  })
});