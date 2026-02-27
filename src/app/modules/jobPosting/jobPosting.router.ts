// education.routes.ts
import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { JobPostController } from './jobPosting.controller';
import validateRequest from '../../middlewares/validateRequest';
import { JobZodSchema } from './jobPosting.validation';

const router = Router();


router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  validateRequest(JobZodSchema),
  JobPostController.createJobPost,
);


router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobPostController.getAllJobPosts, 
);

router.patch(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobPostController.updateJobPost,
);

router.delete(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobPostController.deleteJobPost);

export const jobPostingRoutes = router;
