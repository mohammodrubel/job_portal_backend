import prisma from "../../utils/prisma"

const getAllRecruiter = async (id:string)=>{
    const reuslt = await prisma.recruiter.findMany(
        {
            where:{
                userId:id
            },
            include:{
                company:true
            }
        }
    )
    return reuslt
}
export const RecruiterService = {
    getAllRecruiter
}

