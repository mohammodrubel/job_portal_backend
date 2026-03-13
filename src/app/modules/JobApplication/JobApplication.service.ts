import { JobApplication } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const applyJob = async (userId: string, payload: JobApplication) => {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const application = await tx.jobApplication.create({
        data: {
          jobId: payload.jobId,
          userId,
          resumeId: payload.resumeId,
          coverLetter: payload.coverLetter,
        },
      });

      await tx.job.update({
        where: {
          id: payload.jobId,
        },
        data: {
          applicationsCount: {
            increment: 1,
          },
        },
      });

      return application;
    });

    return result;
  } catch (error) {
    throw new AppError(httpStatus.CONFLICT, "You already applied for this job");
  }
};
const getAllApply = async () => {

}
const getSingleJob = async () => { }
const deleteJob = async () => { }

export const JobApplicationService = {
    applyJob,
    getAllApply,
    getSingleJob,
    deleteJob
}