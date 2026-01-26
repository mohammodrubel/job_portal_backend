// userExperience.routes.ts
import { Router } from 'express';
import { userExperienceController } from './userExperience.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();

router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.createUserExperience,
);
router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.getAllUserExperiences,
);

router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.getSingleUserExperience,
);

router.patch(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.updateUserExperience,
);
router.delete(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.deleteUserExperience,
);
export const userExperienceRoutes = router;
