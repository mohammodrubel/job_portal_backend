import { UserExperience } from '@prisma/client';
import prisma from '../../utils/prisma';
 
const createUserExperience = async (
  payload: Partial<UserExperience>,
  userId: string,
) => {
  const result = await prisma.userExperience.create(
    {
      data: {
        company: payload.company as string,
        role: payload?.role || "",
        startDate: payload.startDate as Date,
        description: payload.description,
        endDate: payload.endDate,
        industry: payload.industry,
        isCurrent: payload.isCurrent,
        location: payload.location,
        userId: userId
      }
    }
  )
  return result
};
const getAllUserExperiences = async (id: string) => {
  const reuslt = await prisma.userExperience.findMany(
    {
      where: {
        userId: id
      }
    }
  )
  return reuslt
};
const getSingleUserExperience = async (id: string) => {
  const reuslt = await prisma.userExperience.findUnique(
    {
      where: {
        id: id
      }
    }
  )
  return reuslt
};
const updateUserExperience = async (payload: Partial<UserExperience>, experienceId: string) => {
  const result = await prisma.userExperience.update({
    where: {
      id: experienceId,
    },
    data: payload,
  });
  return result
};
const deleteUserExperience = async (id: string, userId: string) => {
  const reuslt = await prisma.userExperience.delete(
    {
      where: {
        userId: userId,
        id: id
      }
    }
  )
  return reuslt
};

export const userExperienceService = {
  createUserExperience,
  getAllUserExperiences,
  getSingleUserExperience,
  updateUserExperience,
  deleteUserExperience,
};
