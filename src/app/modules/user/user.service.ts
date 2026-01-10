import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import prisma from '../../utils/prisma';
import { UserProfile } from '@prisma/client';


const updateSingleUser = async (id: string, payload:Partial<UserProfile>) => {
  const isValidUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!isValidUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid users');
  }
  const reuslt = await prisma.userProfile.update({
    where: {
      id,
    },
    data: payload,
  });
  return reuslt
};

const getSingleUsers = async (id: string) => {
  await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

export const UserProfileService = {
  updateSingleUser,
  getSingleUsers,
};
