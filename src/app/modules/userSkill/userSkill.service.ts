import { UserSkill } from '@prisma/client';
import prisma from '../../utils/prisma';

const createSkill = async (payload: Partial<UserSkill>, userId: string) => {
  const result = await prisma.userSkill.update({
    where: {
      userId,
    },
    data: payload,
  });

  return result;
};
const getSingleSkill = async (id: string) => {
  const result = await prisma.userSkill.findUnique({
    where: {
      userId: id,
    },
  });
  return result;
};
export const skillService  = {
  createSkill,
  getSingleSkill,
};
