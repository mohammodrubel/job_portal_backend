import { Education } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

 const createEducation = async (data:Partial<Education>,userId:string)=>{
    const isValiduserId = await prisma.user.findUnique(
        {
            where:{
                id:userId
            }
        }
    )
    if(!isValiduserId){
        throw new AppError(httpStatus.NOT_FOUND,"Invalid users")
    }
    
 }
  const getSingleEducation= async ()=>{}
  const updateEducation= async ()=>{}
  const deleteEducation= async ()=>{}

export const educationService = {
     createEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
}