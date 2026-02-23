import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { educationService } from './education.service'; // corrected import path

// Create Education
const createEducation = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const result = await educationService.createEducation(userId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Education created successfully',
    data: result,
  });
});

// Get all Education records for the logged-in user
const getEducation = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const result = await educationService.getEducation(userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education records retrieved successfully',
    data: result,
  });
});

// Update Education by ID
const updateEducation = catchAsync(async (req, res) => {
  const educationId = req.params.id;
  const result = await educationService.updateEducation(educationId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education updated successfully',
    data: result,
  });
});

// Delete Education by ID
const deleteEducation = catchAsync(async (req, res) => {
  const educationId = req.params.id;
  const result = await educationService.deleteEducation(educationId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const educationController = {
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
};