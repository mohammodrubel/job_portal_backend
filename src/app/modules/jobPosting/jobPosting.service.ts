import { Job } from "@prisma/client"
import prisma from "../../utils/prisma"
import calculatePagination from "../../utils/pagination"
import { jobSearchFields } from "./jobPostingConstant"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary"

const createJobPost = async (file: Express.Multer.File | undefined,data: Job) => {
    if(!file){
        throw new AppError(httpStatus.CONFLICT,"file is required")
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
                companyLogo:uploadedImage.secure_url
            }
        }
    )
    return reuslt
}
const getAllJobPosts = async (query: any, options: any) => {
    const { searchTerm, ...filter } = query;
    const { limit, page, order, skip, sort } = calculatePagination(options);
    const andCondition: any[] = [];

    if (searchTerm) {
        andCondition.push({
            OR: jobSearchFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }

    if (filter.salaryMin || filter.salaryMax) {
        const priceCondition: any = {};

        if (filter.salaryMin) {
            priceCondition.gte = Number(filter.salaryMin);
        }
        if (filter.salaryMax) {
            priceCondition.lte = Number(filter.salaryMax);
        }
        andCondition.push({
            price: priceCondition,
        });
    }

    const whereCondition = andCondition.length ? { AND: andCondition } : {};


    const result = await prisma.job.findMany({
        where: whereCondition,
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
        orderBy:
            options.sort && options.order
                ? {
                    [sort]: order,
                }
                : { createdAt: 'desc' },
    });


    const total = await prisma.job.count({
        where: whereCondition,
    });

    return {
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
        },
        data: result,
    };


}
const getSingleJobPost = async () => { }
const updateJobPost = async () => { }
const deleteJobPost = async () => { }


export const JobPostService = {
    createJobPost,
    getAllJobPosts,
    getSingleJobPost,
    updateJobPost,
    deleteJobPost
}