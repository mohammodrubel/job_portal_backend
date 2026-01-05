import { Education, Prisma } from '@prisma/client';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';


const createEducation = async (
  payload: Education,
  userId: string,
) => {
  // Validate user exists
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

const getAllEducations = async (userId: string) => {
  const result = await prisma.education.findMany({
    where: { userId },
  });
  return result;
};

const getSingleEducation = async (id: string) => {
  const result = await prisma.education.findUnique({
    where: { id },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education not found');
  }

  return result;
};



const updateEducation = async (
  payload: Partial<Education>,
  id: string,
  userId: string,
) => {
  // First check if education exists and belongs to user
  const existingEducation = await prisma.education.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!existingEducation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Education not found or access denied',
    );
  }

  // Update education
  const result = await prisma.education.update({
    where: { id },
    data: payload,
  });

  return result;
};

const deleteEducation = async (id: string, userId: string) => {
  // First check if education exists and belongs to user
  const existingEducation = await prisma.education.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!existingEducation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Education not found or access denied',
    );
  }

  // Delete education
  const result = await prisma.education.delete({
    where: { id },
  });

  return result;
};

export const educationService = {
  createEducation,
  getAllEducations,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
