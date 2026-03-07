import { Subscription, SubscriptionPlan } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const createSubscriptionPlan = async (payload: SubscriptionPlan) => {
    const result = await prisma.subscriptionPlan.create(
        {
            data: {
                ...payload,
            }
        }
    )
    return result
}
const getAllSubscriptionPlan = async () => {
    const result = await prisma.subscriptionPlan.findMany(
        {
            where: {}
        }
    )
    return result
}
const getSingleSubscriptionPlan = async (id: string) => {
    const isValidSubscription = await prisma.subscriptionPlan.findUnique(
        {
            where: {
                id: id
            }
        }
    )
    if (!isValidSubscription) {
        throw new AppError(httpStatus.CONFLICT, "invalid subscription")
    }
    const rueslt = await prisma.subscriptionPlan.findUnique(
        {
            where: {
                id: id,
                status: "ACTIVE"
            }
        }
    )
    return rueslt
}
const updateSubscriptionPlan = async (
  id: string,
  payload: Partial<SubscriptionPlan>
) => {
  const isValidSubscription = await prisma.subscriptionPlan.findUnique({
    where: {
      id: id,
    },
  });

  if (!isValidSubscription) {
    throw new AppError(httpStatus.CONFLICT, "Invalid subscription plan");
  }

  const result = await prisma.subscriptionPlan.update({
    where: {
      id: id,
    },
    data: payload,
  });

  return result;
};
const deleteSubscriptionPlan = async (id: string) => {
    const reuslt = await prisma.subscriptionPlan.delete(
        {
            where: {
                id: id
            }
        }
    )
    return reuslt
}




export const subscriptionPlanService = {
    createSubscriptionPlan,
    getAllSubscriptionPlan,
    getSingleSubscriptionPlan,
    updateSubscriptionPlan,
    deleteSubscriptionPlan
}