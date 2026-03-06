// education.routes.ts
import { NextFunction, Request, Response, Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { JobApplicationController } from './JobApplication.controller';

const router = Router();


router.post(
  '/',
  auth(Role.USER),
  JobApplicationController.applyJob
);

router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobApplicationController.getAllApply, 
);
router.get(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobApplicationController.getSingleJob, 
);

// router.patch(
//   '/:id',
//   auth(Role.USER),
//   JobApplicationController.,
// );

router.delete(
  '/:id',
  auth(Role.MODERATOR, Role.USER,Role.ADMIN),
  JobApplicationController.deleteJob);

export const jobApplicationRouter = router;
