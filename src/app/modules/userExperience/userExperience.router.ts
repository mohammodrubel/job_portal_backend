// userExperience.routes.ts
import { Router } from 'express';
import { userExperienceController } from './userExperience.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();

router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.createExperience,
);
router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.getAllExperience,
);

router.patch(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.updateExperience,
);
router.delete(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userExperienceController.deleteExperience,
);


export const userExperienceRoutes = router;
