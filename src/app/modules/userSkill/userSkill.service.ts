import { UserSkill } from '@prisma/client';
import prisma from '../../utils/prisma';

const createSkill = async (payload: UserSkill, userId: string) => {
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
  const result = await prisma.userSkill.findMany(
    {
      where:{
        userId:id 
      }
    }
  )
  return result 
};

const  updateSingleSkill = async(payload: Partial<UserSkill>,id:string)=>{
  const reuslt = await prisma.userSkill.update(
    {
      where:{
        userId:id 
      },
      data:payload
    }
  )
}

const deleteUserSkill = async (payload: Partial<UserSkill>, id: string) => {
  const reuslt = await prisma.userSkill.delete({
    where: {
      userId: id,
      id:payload.id
    },
  });
  return reuslt
};
export const skillService = {
  createSkill,
  getSingleSkill,
  updateSingleSkill,
  deleteUserSkill,
};
