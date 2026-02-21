import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { educationService } from './education.service';

// Create Education
const createEducation = catchAsync(async (req, res) => {
  console.log(req.body,'controller')
  const result = await educationService.createEducation(req.body,req?.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Education created successfully',
    data: result,
  });
});


// Get Single Education by ID
const getSingleEducation = catchAsync(async (req, res) => {
  const result = await educationService.getSingleEducation(req?.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education retrieved successfully',
    data: result,
  });
});

// Update Education
const updateEducation = catchAsync(async (req, res) => {
  const result = await educationService.updateEducation(req?.user?.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Education updated successfully',
    data: result,
  });
});

// Delete Education
const deleteEducation = catchAsync(async (req, res) => {
  const educationId = req.params?.id;
  const userId = req.user?.id 
  const result = educationService.deleteEducation(educationId,userId)
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
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
