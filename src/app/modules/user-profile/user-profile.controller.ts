import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import prisma from "../../utils/prisma";
import sendResponse from "../../utils/sendResponse";

const updateProfile = catchAsync(async(req,res)=>{
    const result = ""
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"profile updated successfully",
        data:result
    })
})
const getMyProfile = catchAsync(async (req, res) => {
  const result = '';
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'profile updated successfully',
    data: result,
  });
});


export const userProfileController = {
    updateProfile,
    getMyProfile
}