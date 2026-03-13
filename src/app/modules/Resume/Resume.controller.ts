import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { resumeService } from "./Resume.service";
import sendResponse from "../../utils/sendResponse";

export const uploadResume = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const file = req.file;

  const result = await resumeService.uploadResume(userId!, file);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume uploaded successfully",
    data: result,
  });
});
const getMyResume = catchAsync(async (req, res) => {
  const userId = req?.user?.id;

  const result = await resumeService.getMyResume(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume retrieved successfully",
    data: result,
  });
});

const deleteMyResume = catchAsync(async (req, res) => {
  const userId = req?.user?.id;

  const result = await resumeService.deleteMyResume(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume deleted successfully",
    data: result,
  });
});

export const resumeController = {
  uploadResume,
  getMyResume,
  deleteMyResume,
};