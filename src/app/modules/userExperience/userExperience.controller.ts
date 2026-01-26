import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userExperienceService } from './userExperience.service';

// Create User Experience
const createUserExperience = catchAsync(async (req, res) => {
  const result = await userExperienceService.createUserExperience(
    req.user?.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User experience created successfully',
    data: result,
  });
});

// Get All User Experiences
const getAllUserExperiences = catchAsync(async (req, res) => {
    const reuslt = await userExperienceService.getAllUserExperiences(req?.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experiences retrieved successfully',
    data: reuslt,
  });
});

// Get Single User Experience by ID
const getSingleUserExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experience retrieved successfully',
    data: result,
  });
});

// Update User Experience
const updateUserExperience = catchAsync(async (req, res) => {
  const userId = req?.user?.id 
  const params =  req?.params?.id 
  const result = userExperienceService.updateUserExperience(userId,params,req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experience updated successfully',
    data: result,
  });
});

// Delete User Experience
const deleteUserExperience = catchAsync(async (req, res) => {
  const experienceId = req.params.id;
  const result = await userExperienceService.deleteUserExperience(experienceId,req?.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experience deleted successfully',
    data: result,
  });
});

// Export all user experience controllers
export const userExperienceController = {
  createUserExperience,
  getAllUserExperiences,
  getSingleUserExperience,
  updateUserExperience,
  deleteUserExperience,
};
