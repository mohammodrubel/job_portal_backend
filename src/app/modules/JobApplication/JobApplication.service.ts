import { JobApplication } from "@prisma/client"
import prisma from "../../utils/prisma"

const applyJob = async (userId:string,payload:JobApplication) => {
    const result = await prisma.jobApplication.create(
        {
            data:{
                ...payload,
                userId:userId
            } 
        }
    )
    return result
}
const getAllApply = async () => { 

}
const getSingleJob = async () => { }
const deleteJob = async () => { }

export const JobApplicationService = {
    applyJob,
    getAllApply,
    getSingleJob,
    deleteJob
}