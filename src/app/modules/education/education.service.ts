import { Education } from '@prisma/client';
import httpStatus from 'http-status';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';

const createEducation = async (userId: string, data: Partial<Education>) => {
  // Ensure required fields have fallbacks if needed
  const result = await prisma.education.create({
    data: {
      degree: data.degree || '',
      userId: userId,
      institute: data.institute || '',
      fieldOfStudy: data.fieldOfStudy || '',
      startYear: data.startYear!,
      endYear: data.endYear!,
      isCurrent: data.isCurrent || false,
      grade: data.grade || '',
      description: data.description || '',
    },
  });
  return result;
};

const getEducation = async (userId: string) => {
    console.log(userId,"userid")
  return prisma.education.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
};

const updateEducation = async (educationId: string, data: Partial<Education>) => {
  const existing = await prisma.education.findUnique({
    where: { id: educationId },
  });
  if (!existing) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education record not found');
  }
  const result = await prisma.education.update({
    where: { id: educationId },
    data,
  });
  return result;
};

const deleteEducation = async (educationId: string) => {
  const existing = await prisma.education.findUnique({
    where: { id: educationId },
  });
  if (!existing) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education record not found');
  }
  const result = await prisma.education.delete({
    where: { id: educationId },
  });
  return result;
};

export const educationService = {
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
};