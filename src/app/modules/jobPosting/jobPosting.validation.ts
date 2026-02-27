import { z } from "zod";

// Enums based on your model (replace with actual values)
export const JobTypeEnum = z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE"]);
export const WorkModeEnum = z.enum(["ONSITE", "REMOTE", "HYBRID"]);
export const ExperienceLevelEnum = z.enum(["ENTRY", "JUNIOR", "MID_SENIOR", "LEAD", "SENIOR"]);
export const JobUrgencyEnum = z.enum(["URGENT", "NORMAL"]);
export const JobStatusEnum = z.enum(["PENDING", "APPROVED", "CLOSED", "REJECTED"]);

export const JobZodSchema = z.object({
    body: z.object({
        companyId: z.string().uuid({ message: "Invalid company ID" }),
        title: z.string().min(3, { message: "Title must be at least 3 characters" }),
        description: z.string().min(10, { message: "Description must be at least 10 characters" }),
        requirements: z.string().optional(),
        benefits: z.string().optional(),
        location: z.string().optional(),
        country: z.string().optional(),
        city: z.string().optional(),
        jobType: JobTypeEnum,
        workMode: WorkModeEnum,
        experienceLevel: ExperienceLevelEnum,
        urgency: JobUrgencyEnum.optional(), // default NORMAL handled in DB
        salaryMin: z.number().int().optional(),
        salaryMax: z.number().int().optional(),
        salaryCurrency: z.string().optional(), // default "USD" handled in DB
        salaryPeriod: z.string().optional(),   // default "YEAR"
        vacancies: z.number().int().optional(), // default 1
        education: z.string().optional(),
        industry: z.string().optional(),
        category: z.string().optional(),
        isVisaSponsored: z.boolean().optional(),
        isRelocation: z.boolean().optional(),
        remoteAllowed: z.boolean().optional(),
        remoteCountries: z.array(z.string()).optional(),
        status: JobStatusEnum.optional(), // default PENDING
        postedById: z.string().uuid().optional(),
        approvedById: z.string().uuid().optional(),
        approvedAt: z.date().optional(),
        closedAt: z.date().optional(),
        deadline: z.string(),
        publishedAt: z.date().optional(),
    })
});

