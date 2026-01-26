import { Prisma, UserExperience } from '@prisma/client';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
 export interface CreateUserExperienceInput {
   company: string;
   role: string;
   startDate: string | Date;
   endDate?: string | Date;
   isCurrent?: boolean;
   location?: string;
   industry?: string;
   description?: string;
 }
const createUserExperience = async (
  userId: string,
  payload: CreateUserExperienceInput,
) => {
  const userExist = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  const result = await prisma.userExperience.create({
    data: {
      userId,
      company: payload.company,
      role: payload.role,
      startDate: new Date(payload.startDate),
      endDate: payload.endDate ? new Date(payload.endDate) : null,
      isCurrent: payload.isCurrent ?? false,
      location: payload.location,
      industry: payload.industry,
      description: payload.description,
    },
  });

  return result;
};
const getAllUserExperiences = async (id: string) => {
  const reuslt = await prisma.userExperience.findMany({
    where: {
      userId: id,
    },
  });
  return reuslt;
};
const updateUserExperience = async (userId:string,params:string,payload:Partial<UserExperience>) => {
  const isExistExperience = await await prisma.userExperience.findFirst(
    {
        where:{
          id:params,
        }
    }
  )
  if(!isExistExperience){
    throw new AppError(httpStatus.NOT_FOUND,"experience not found")
  }

  const reuslt = await prisma.userExperience.update(
    {
      where:{
        id:params,
        userId:userId 
      },
      data:payload
    }
  )
  return reuslt
};
const deleteUserExperience = async (experienceId: string, userId: string) => {
  const reuslt = await prisma.userExperience.delete({
    where: {
      userId: userId,
      id: experienceId,
    },
  });
  return reuslt;
};

export const userExperienceService = {
  createUserExperience,
  getAllUserExperiences,
  updateUserExperience,
  deleteUserExperience,
};
