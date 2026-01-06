import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { skillService } from './userSkill.service';

// Create Skill
const createSkill = catchAsync(async (req, res) => {
  const result = skillService.createSkill(req.body,req?.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill created successfully',
    data: result,
  });
});

// Get Single Skill by ID
const getSingleSkill = catchAsync(async (req, res) => {
  const result = skillService.getSingleSkill(req.user?.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

const updateSingleSkill = catchAsync(async(req,res)=>{
  const result = skillService.updateSingleSkill(req.body, req.user?.id)
   sendResponse(res, {
     success: true,
     statusCode: httpStatus.OK,
     message: 'Skill retrieved successfully',
     data: result,
   });
})

const deleteUserSkill = catchAsync(async(req,res)=>{
  const reuslt = skillService.deleteUserSkill(req.body,req.user?.id)
   sendResponse(res, {
     success: true,
     statusCode: httpStatus.OK,
     message: 'Skill retrieved successfully',
     data: reuslt,
   });
})


// Export all skill controllers
export const skillController = {
  createSkill,
  getSingleSkill,
  updateSingleSkill,
  deleteUserSkill,
};
