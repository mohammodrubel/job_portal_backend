// userExperience.routes.ts
import { Router } from 'express';
import { userExperienceController } from './userExperience.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();

router.post(
  '/',
  auth(Role.ADMIN),
  userExperienceController.createUserExperience,
);
router.get(
  '/',
  auth(Role.ADMIN),
  userExperienceController.getAllUserExperiences,
);

router
  .route('/:id')
  .get(auth(Role.ADMIN), userExperienceController.getSingleUserExperience)
  .patch(auth(Role.ADMIN), userExperienceController.updateUserExperience)
  .delete(auth(Role.ADMIN), userExperienceController.deleteUserExperience);

export const userExperienceRoutes = router;
