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
  .get(auth(Role.RECRUITER), userExperienceController.getSingleUserExperience)
  .patch(auth(Role.RECRUITER), userExperienceController.updateUserExperience)
  .delete(auth(Role.RECRUITER), userExperienceController.deleteUserExperience);

export const userExperienceRoutes = router;
