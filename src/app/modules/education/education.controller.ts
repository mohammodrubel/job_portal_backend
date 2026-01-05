import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Create Education
const createEducation = catchAsync(async (req, res) => {
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Education created successfully',
    data: result,
  });
});

// Get All Educations
const getAllEducations = catchAsync(async (req, res) => {
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Educations retrieved successfully',
    data: result,
  });
});

// Get Single Education by ID
const getSingleEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education retrieved successfully',
    data: result,
  });
});

// Update Education
const updateEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education updated successfully',
    data: result,
  });
});

// Delete Education
const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education deleted successfully',
    data: result,
  });
});

// Export all controllers
export const educationController = {
  createEducation,
  getAllEducations,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
