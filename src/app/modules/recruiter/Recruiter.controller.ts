import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { RecruiterService } from "./Recruiter.service"

const getAllRecruiter = catchAsync(async(req,res)=>{
    const reuslt = await RecruiterService.getAllRecruiter(req?.user?.id)
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get Recruiter Compnay",
        data:reuslt
    })
})
export const RecruiterController = {
    getAllRecruiter
}