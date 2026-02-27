import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { JobPostService } from "./jobPosting.service";

// Create Job Post
export const createJobPost = catchAsync(async (req: Request, res: Response) => {
    const result = await JobPostService.createJobPost(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Created job post successfully",
        data: result,
    });
});

// Get Single Job Post
export const getSingleJobPost = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await JobPostService.getSingleJobPost(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Fetched job post successfully",
        data: result,
    });
});

// Get All Job Posts
export const getAllJobPosts = catchAsync(async (_req: Request, res: Response) => {
    const result = await JobPostService.getAllJobPosts();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Fetched all job posts successfully",
        data: result,
    });
});

// Update Job Post
export const updateJobPost = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await JobPostService.updateJobPost(id, updatedData);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Updated job post successfully",
        data: result,
    });
});

// Delete Job Post
export const deleteJobPost = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await JobPostService.deleteJobPost(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Deleted job post successfully",
        data: result,
    });
});

export const JobPostController = {
    createJobPost,
    getAllJobPosts,
    getSingleJobPost,
    updateJobPost,
    deleteJobPost
}