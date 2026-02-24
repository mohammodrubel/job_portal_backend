import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserExperienceService } from './userExperience.service';

// Create User Experience
const createExperience = catchAsync(async (req, res) => {
  const result = await UserExperienceService.createExperience(
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
const getAllExperience = catchAsync(async (req, res) => {
  const reuslt = await UserExperienceService.getAllExperience(req?.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experiences retrieved successfully',
    data: reuslt,
  });
});


// Update User Experience
const updateExperience = catchAsync(async (req, res) => {
  const params = req?.params?.id
  const result = UserExperienceService.updateExperience(params, req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experience updated successfully',
    data: result,
  });
});

// Delete User Experience
const deleteExperience = catchAsync(async (req, res) => {
  const experienceId = req.params.id;
  const result = await UserExperienceService.deleteExperience(experienceId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User experience deleted successfully',
    data: result,
  });
});

// Export all user experience controllers
export const userExperienceController = {
  createExperience,
  getAllExperience,
  updateExperience,
  deleteExperience
};
