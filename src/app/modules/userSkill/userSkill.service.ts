import { UserSkill } from '@prisma/client';
import prisma from '../../utils/prisma';

const createSkill = async (payload: Partial<UserSkill>, userId: string) => {
    const result = await prisma.userSkill.create(
      {
        data:{
          name:payload.name as string,
          category:payload.category,
          experience:payload.experience,
          proficiency:payload.proficiency,
          userId:userId
        }
      }
    )
    return result
};
const getSingleSkill = async (id: string) => {
  
};
export const skillService  = {
  createSkill,
  getSingleSkill,
};
