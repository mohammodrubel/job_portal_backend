import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import { sendImageToCloudinary } from "../../utils/uploadPDFMiddleware";

export const uploadResume = async (
  userId: string,
  file: Express.Multer.File | undefined
) => {
  if (!file) {
    throw new AppError(httpStatus.CONFLICT, "PDF file is required");
  }

  const fileName = file.originalname.replace(".pdf", "");
  const uploadedUrl = await sendImageToCloudinary(file.path, fileName);

  const result = await prisma.resume.upsert({
    where: { userId },
    update: { resume: uploadedUrl },
    create: { userId, resume: uploadedUrl },
  });

  return result;
};
const getMyResume = async (id:string) => {
    const result = await prisma.resume.findUnique(
        {
            where:{
                userId:id 
            },
            include:{
                user:true
            }
        }
    )
    if(!result){
        throw new AppError(httpStatus.OK,"No Resume Found")
    }
    return result
}
const deleteMyResume = async (id:string) => {
    const reuslt = await prisma.resume.delete(
        {
            where:{
                id:id 
            }
        }
    )
    return reuslt
}


export const resumeService = {
    uploadResume,
    getMyResume,
    deleteMyResume
}