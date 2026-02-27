import { Company } from "@prisma/client"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary"
import prisma from "../../utils/prisma";


const createCompany = async (
  file: Express.Multer.File | undefined,
  data: any,
  userId: string
) => {
  if (!file) {
    throw new AppError(httpStatus.BAD_REQUEST, "Company logo is required");
  }

  // 🔎 Check if user already primary recruiter somewhere
  const existingRecruiter = await prisma.recruiter.findFirst({
    where: {
      userId,
      isPrimary: true,
    },
  });

//   if (existingRecruiter) {
//     throw new AppError(
//       httpStatus.CONFLICT,
//       "User already owns a company"
//     );
//   }

  // 1️⃣ Upload image
  const uniqueImageName = `company-${Date.now()}`;

  const uploadedImage = await sendImageToCloudinary(
    file.path,
    uniqueImageName
  ) as { secure_url: string };

  // 2️⃣ Transaction
  const result = await prisma.$transaction(async (tx) => {
    const company = await tx.company.create({
      data: {
        name: data.name,
        description: data.description,
        foundedYear: data.foundedYear
          ? Number(data.foundedYear)
          : undefined,
        headquarters: data.headquarters,
        industry: data.industry,
        size: data.size,
        website: data.website,
        logoUrl: uploadedImage.secure_url,
      },
    });

    await tx.recruiter.create({
      data: {
        companyId: company.id,
        userId,
        position: data.position ?? "Owner",
        isPrimary: true,
      },
    });

    return company;
  });

  return result;
};
  const getAllCompanies= async ()=>{}
  const getSingleCompany= async ()=>{}
  const updateCompany= async ()=>{}
  const deleteCompany= async ()=>{}

export const companyService = {
  createCompany,
  getAllCompanies,
  getSingleCompany,
  updateCompany,
  deleteCompany,
};
