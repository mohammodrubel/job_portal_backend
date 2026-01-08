import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { skillController } from './userSkill.controller';

const router = Router();


router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  skillController.createSkill,
);

router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  skillController.getSingleSkill,
);
router
  .route('/:id')
  .get(
    auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
    skillController.getSingleSkill,
  )
  .patch(
    auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
    skillController.updateSingleSkill,
  )
  .delete(
    auth(Role.ADMIN, Role.MODERATOR, Role.USER, Role.RECRUITER),
    skillController.deleteUserSkill,
  );

export const skillRoutes = router;
