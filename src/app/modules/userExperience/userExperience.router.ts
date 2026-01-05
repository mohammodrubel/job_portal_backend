// userExperience.routes.ts
import { Router } from 'express';
import { userExperienceController } from './userExperience.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();

router.post(
  '/',
  auth(Role.RECRUITER),
  userExperienceController.createUserExperience,
);
router.get(
  '/',
  auth(Role.RECRUITER),
  userExperienceController.getAllUserExperiences,
);

router
  .route('/:id')

export const userExperienceRoutes = router;
