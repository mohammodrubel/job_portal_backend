import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { JobApplicationService } from "./JobApplication.service";

const applyJob = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const result = await JobApplicationService.applyJob(userId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Apply job successfully",
    data: result,
  });
});

const getAllApply = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const result = await JobApplicationService.getAllApply(userId, req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Applications retrieved successfully",
    data: result,
  });
});

const getSingleJob = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const result = await JobApplicationService.getAllApply(userId, id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Application retrieved successfully",
    data: result,
  });
});

const deleteJob = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const result = await JobApplicationService.deleteJob(userId, id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Application deleted successfully",
    data: result,
  });
});

export const JobApplicationController = {
  applyJob,
  getAllApply,
  getSingleJob,
  deleteJob,
};