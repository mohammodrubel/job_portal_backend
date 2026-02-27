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
  
  const uniqueImageName = `company-${Date.now()}`;

  const uploadedImage = await sendImageToCloudinary(
    file.path,
    uniqueImageName
  ) as { secure_url: string };

 
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
        position: data.position ?? "HR",
        isPrimary: true,
      },
    });

    return company;
  });

  return result;
};
  const getAllCompanies= async ()=>{
    const result = await prisma.company.findMany(
      {
        where:{}
      }
    )
    return result
  }
  const getSingleCompany= async (id:string)=>{
    const result = await prisma.company.findUnique(
      {
        where:{
          id:id
        }
      }
    )
    return result
  }
  const updateCompany= async (id:string,data:Partial<Company>)=>{
    const reuslt = await prisma.company.update(
      {
        where:{
          id:id 
        },
        data:data
      }
    )
    return reuslt
  }
  const deleteCompany= async (id:string)=>{
    const result = await prisma.company.delete(
      {
        where:{
          id:id 
        }
      }
    )
    return result
  }

export const companyService = {
  createCompany,
  getAllCompanies,
  getSingleCompany,
  updateCompany,
  deleteCompany,
};
