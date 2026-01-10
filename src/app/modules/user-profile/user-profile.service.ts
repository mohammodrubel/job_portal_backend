import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import prisma from '../../utils/prisma';
import { UserProfile } from '@prisma/client';

const updateSingleUser = async (id: string, payload: Partial<UserProfile>) => {
  // 1. Check if user exists
  const isValidUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isValidUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // 2. Check if user profile exists before updating
  const existingProfile = await prisma.userProfile.findUnique({
    where: {
      userId: id,
    },
  });

  if (!existingProfile) {
    // Option 1: Create profile if it doesn't exist
    const result = await prisma.userProfile.create({
      data: {
        userId: id, // Required field
        ...payload,
      },
    });
    return result;
  }

  // 3. Update existing profile
  const result = await prisma.userProfile.update({
    where: {
      userId: id, // Correct - using userId which is @unique
    },
    data: payload,
  });

  return result; // Fixed typo: "reuslt" -> "result"
};

const getSingleUsers = async (id: string) => {
  const response =  await prisma.userProfile.findUnique({
    where: {
      userId:id
    },
  });
  return response
};

export const UserProfileService = {
  updateSingleUser,
  getSingleUsers,
};
