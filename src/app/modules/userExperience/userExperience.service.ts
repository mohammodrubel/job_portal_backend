import { UserExperience } from '@prisma/client';
import prisma from '../../utils/prisma';

const createUserExperience = async (
  payload: Partial<UserExperience>,
  userId: string,
) => {
  await prisma.userExperience.update({
    where: { userId },
    data: payload,
  });
};
const getSingleUserInfo = async (id:string) => {
  const reuslt = await prisma.userExperience.findUnique({
    where: {
      userId: id,
    },
  });
  return reuslt;
};

export const userExperienceService = {
  createUserExperience,
  getSingleUserInfo,
};
