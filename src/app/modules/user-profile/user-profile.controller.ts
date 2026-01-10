import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserProfileService } from "./user-profile.service";

const updateProfile = catchAsync(async(req,res)=>{
    const result = await UserProfileService.updateSingleUser(req?.user?.id,req.body)
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"profile updated successfully",
        data:result
    })
})
const getSingleUsers = catchAsync(async (req, res) => {
  console.log(req?.user?.id)
  const result = await UserProfileService.getSingleUsers(req.user.id)
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