import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userExperienceService } from './userExperience.service';

// Create User Experience
const createUserExperience = catchAsync(async (req, res) => {
  const userId = req.user?.id;  
  const result = userExperienceService.createUserExperience(req.body, userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User experience created successfully',
    data: result,
  });
});

// Get All User Experiences
const getSingleUserInfo = catchAsync(async (req, res) => {
  const userId = req.user?.id;  
  const result = userExperienceService.getSingleUserInfo(userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experience retrieved successfully',
    data: result,
  });
});


// Export all user experience controllers
export const userExperienceController = {
  createUserExperience,
  getAllUserExperiences: getSingleUserInfo,

};
