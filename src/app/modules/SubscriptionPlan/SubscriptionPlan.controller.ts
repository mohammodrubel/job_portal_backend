import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { subscriptionPlanService } from "./SubscriptionPlan.service";

const createSubscriptionPlan = catchAsync(async (req, res) => {
  const result = await subscriptionPlanService.createSubscriptionPlan(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Subscription plan created successfully",
    data: result,
  });
});

const getAllSubscriptionPlan = catchAsync(async (req, res) => {
  const result = await subscriptionPlanService.getAllSubscriptionPlan();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Subscriptions retrieved successfully",
    data: result,
  });
});

const getSingleSubscriptionPlan = catchAsync(async (req, res) => {
  const result = await subscriptionPlanService.getSingleSubscriptionPlan(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Subscription retrieved successfully",
    data: result,
  });
});

const updateSubscriptionPlan = catchAsync(async (req, res) => {
  const result = await subscriptionPlanService.updateSubscriptionPlan(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Subscription updated successfully",
    data: result,
  });
});

const deleteSubscriptionPlan = catchAsync(async (req, res) => {
  const result = await subscriptionPlanService.deleteSubscriptionPlan(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Subscription deleted successfully",
    data: result,
  });
});

export const subscriptionPlanController = {
  createSubscriptionPlan,
  getAllSubscriptionPlan,
  getSingleSubscriptionPlan,
  updateSubscriptionPlan,
  deleteSubscriptionPlan,
};