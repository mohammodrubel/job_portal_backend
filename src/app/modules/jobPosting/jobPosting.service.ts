import { Job } from "@prisma/client"
import prisma from "../../utils/prisma"
import calculatePagination from "../../utils/pagination"
import { jobSearchFields } from "./jobPostingConstant"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary"

const createJobPost = async (file: Express.Multer.File | undefined, data: Job) => {
    if (!file) {
        throw new AppError(httpStatus.CONFLICT, "file is required")
    }
    const uniqueImageName = `company-${Date.now()}`;

    const uploadedImage = await sendImageToCloudinary(
        file.path,
        uniqueImageName
    ) as { secure_url: string };

    const reuslt = await prisma.job.create(
        {
            data: {
                ...data,
                companyLogo: uploadedImage.secure_url
            }
        }
    )
    return reuslt
}
// http://localhost:9000/api/get-all-job?workMode=REMOTE&salaryMin=500&salaryMax=1500&searchTerm=Dhaka Mirpur&jobType=CONTRACT&dateStart=2026-02-20T00:00:00.000Z&dateEnd=2026-02-21T23:59:59.999Z&datePosted=month
 const getAllJobPosts = async (query: any, options: any) => {
  const { searchTerm, ...filter } = query;
  const { limit, page, order, sort } = calculatePagination(options);
  const andCondition: any[] = [];

  // 1️⃣ Search term
  if (searchTerm) {
    const orCondition: any[] = [];
    ["title", "description", "companyName", "location"].forEach((field) => {
      orCondition.push({ [field]: { contains: searchTerm, mode: "insensitive" } });
    });
    andCondition.push({ OR: orCondition });
  }

  // 2️⃣ Filters
  if (filter.salaryMin || filter.salaryMax) {
    andCondition.push({
      AND: [
        { salaryMin: { lte: Number(filter.salaryMax ?? Infinity) } },
        { salaryMax: { gte: Number(filter.salaryMin ?? 0) } },
      ],
    });
  }

  if (filter.workMode) andCondition.push({ workMode: filter.workMode });
  if (filter.jobType) andCondition.push({ jobType: filter.jobType });
  if (filter.status) andCondition.push({ status: filter.status });
  if (filter.location)
    andCondition.push({ location: { contains: filter.location, mode: "insensitive" } });
  if (filter.companyName)
    andCondition.push({ companyName: { contains: filter.companyName, mode: "insensitive" } });
  if (filter.tags) {
    const tagsArray = Array.isArray(filter.tags) ? filter.tags : [filter.tags];
    andCondition.push({ tags: { hasSome: tagsArray } });
  }

  // 3️⃣ Date filters
  // Preset: today/week/month
  if (filter.datePosted) {
    const now = new Date();
    let fromDate: Date | undefined;

    if (filter.datePosted === "today") {
      fromDate = new Date();
      fromDate.setDate(now.getDate() - 1);
    } else if (filter.datePosted === "week") {
      fromDate = new Date();
      fromDate.setDate(now.getDate() - 7);
    } else if (filter.datePosted === "month") {
      fromDate = new Date();
      fromDate.setMonth(now.getMonth() - 1);
    }

    if (fromDate) {
      andCondition.push({ createdAt: { gte: fromDate } });
    }
  }

  // Custom range: dateStart & dateEnd
  if (filter.dateStart && filter.dateEnd) {
    const start = new Date(filter.dateStart);
    const end = new Date(filter.dateEnd);
    andCondition.push({ createdAt: { gte: start, lte: end } });
  }

  // 4️⃣ Build where condition
  const whereCondition = andCondition.length ? { AND: andCondition } : {};

  console.log("Where condition:", JSON.stringify(whereCondition, null, 2));

  // 5️⃣ Fetch data
  const result = await prisma.job.findMany({
    where: whereCondition,
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
    orderBy: options.sort && options.order ? { [sort]: order } : { createdAt: "desc" },
  });

  const total = await prisma.job.count({ where: whereCondition });

  return {
    meta: { page: Number(page), limit: Number(limit), total },
    data: result,
  };
};
const getSingleJobPost = async (id: string) => {
    const reuslt = await prisma.job.findUnique(
        {
            where: {
                id: id
            }
        }
    )
    return reuslt
}
const updateJobPost = async () => { }
const deleteJobPost = async () => { }


export const JobPostService = {
    createJobPost,
    getAllJobPosts,
    getSingleJobPost,
    updateJobPost,
    deleteJobPost
}