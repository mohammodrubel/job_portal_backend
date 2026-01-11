import { Education, Prisma } from '@prisma/client';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';


const createEducation = async (
  payload: Education,
  userId: string,
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found'); 
  }

  // Create education
  const result = await prisma.education.create({
    data: {
      ...payload,
      userId: user.id,
      fieldOfStudy: payload.fieldOfStudy || '', 
    },
  });

  return result;
 
};

const getSingleEducation = async (id: string) => {
  const result = await prisma.education.findMany({
    where: { userId:id },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education not found');
  }

  return result;
};



const updateEducation = async (userId: string, payload: Partial<Education>) => {
  console.log(payload)
  const existingEducation = await prisma.education.findFirst({
    where: {
      id: payload.id,
    },
  });

  if (!existingEducation) {
    throw new Error('Education record not found or does not belong to user');
  }

  const result = await prisma.education.update({
    where: {
      id: payload.id,
    },
    data: {
      degree: payload.degree,
      description: payload.description,
      fieldOfStudy: payload.fieldOfStudy,
      endYear: payload.endYear,
      grade: payload.grade,
      institute: payload.institute,
      isCurrent: payload.isCurrent,
      startYear: payload.startYear,
      updatedAt: new Date(),
    },
  });

  return result;
};
const deleteEducation = async (educationId:string, userId:string) => {
  // First check if education exists and belongs to user
  const result = await prisma.education.delete({
    where: {
      userId,
      id:educationId
    },
  });

  return result;
};

export const educationService = {
  createEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
