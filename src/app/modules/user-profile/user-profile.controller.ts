import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import prisma from "../../utils/prisma";
import sendResponse from "../../utils/sendResponse";
import { UserProfileService } from "../user/user.service";

const updateProfile = catchAsync(async(req,res)=>{
    const result = await UserProfileService.updateSingleUser(req?.params?.id,req.body)
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"profile updated successfully",
        data:result
    })
})
const getSingleUsers = catchAsync(async (req, res) => {
  const result = await UserProfileService.getSingleUsers(req.params.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'profile updated successfully',
    data: result,
  });
});


export const userProfileController = {
  updateProfile,
  getSingleUsers,
};