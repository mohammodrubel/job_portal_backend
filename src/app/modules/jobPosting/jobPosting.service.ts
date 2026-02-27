import { Job } from "@prisma/client"
import prisma from "../../utils/prisma"

    const createJobPost = async (data:Job)=>{
        const reuslt = await prisma.job.create(
            {
                data:data 
            }
        )
        return reuslt 
    }
    const getAllJobPosts= async ()=>{}
    const getSingleJobPost= async ()=>{}
    const updateJobPost= async ()=>{}
    const deleteJobPost= async ()=>{}


export const JobPostService = {
    createJobPost,
    getAllJobPosts,
    getSingleJobPost,
    updateJobPost,
    deleteJobPost
}