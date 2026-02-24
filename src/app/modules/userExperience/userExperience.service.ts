import { Education, UserExperience } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const createExperience = async (userId: string,data: Partial<UserExperience>) => {
    // console.log(data,"service")
    if (!data.company || !data.role || !data.startDate) {
        throw new AppError(httpStatus.BAD_REQUEST, "company, role, startDate required")
    }
    const result = await prisma.userExperience.create({
        data: {
            company: data?.company!,
            role: data?.role!,
            startDate: data?.startDate!,
            endDate: data?.endDate!,
            isCurrent: data?.isCurrent || false,
            location: data?.location,
            description: data?.description,
            industry: data?.industry,
            userId: userId
        }
    })
    return result
}
const getAllExperience = async (id: string) => {
    const result = await prisma.userExperience.findMany(
        {
            where: {
                userId: id
            }
        }
    )
    return result
}
const updateExperience = async (id:string, data: Partial<UserExperience>) => {
    const isValidUserExperience = await prisma.userExperience.findUnique(
        {
            where: {
                id: id
            }
        }
    )
    if (!isValidUserExperience) {
        throw new AppError(httpStatus.OK, "invalid user experience id")
    }
    const result = await prisma.userExperience.update(
        {
            where: {
                id: id
            },
            data: data
        }
    )
    return result
}
const deleteExperience = async (id: string) => {
    const isValidUserExperience = await prisma.userExperience.findUnique(
        {
            where: {
                id: id
            }
        }
    )
    if (!isValidUserExperience) {
        throw new AppError(httpStatus.OK, "invalid user experience id")
    }
    const reuslt = await prisma.userExperience.delete(
        {
            where: {
                id: id
            }
        }
    )
    return reuslt
}

export const UserExperienceService = {
    createExperience,
    getAllExperience,
    updateExperience,
    deleteExperience
}


