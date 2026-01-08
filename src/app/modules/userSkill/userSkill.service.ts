import { UserSkill } from '@prisma/client';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

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
  const isValidSkill = await prisma.userSkill.findUnique(
    {
      where:{
        id:id 
      }
    }
  )
  if(!isValidSkill){
    throw new AppError(httpStatus.NOT_FOUND,'Skill Not Found')
  }

  const result = await prisma.userSkill.update(
    {
      where:{
        id:id, 
        userId:isValidSkill.userId
      },
      data:payload
    }
  )
  return result
}

const deleteUserSkill = async (skillId:string, userId:string) => {
  // console.log({skillId,userId})
  const reuslt = await prisma.userSkill.delete({
    where: {
     id:skillId,
     userId:userId
    },
  });
  return reuslt;
};
export const skillService = {
  createSkill,
  getSingleSkill,
  updateSingleSkill,
  deleteUserSkill,
};
