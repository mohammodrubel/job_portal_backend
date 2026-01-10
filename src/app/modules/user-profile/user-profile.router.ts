import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { userProfileController } from './user-profile.controller';

const router = Router();

router.get('/', auth(Role.ADMIN), userProfileController.getMyProfile);
router.patch(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  userProfileController.updateProfile,
);

export const userRouter = router;
