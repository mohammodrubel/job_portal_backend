// skill.routes.ts
import { Router } from 'express';

import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { skillController } from './userSkill.controller';

const router = Router();

router.post('/', auth(Role.ADMIN,Role.MODERATOR,Role.RECRUITER,Role.USER), skillController.createSkill);


router
  .route('/')
  .get(auth(Role.ADMIN,Role.MODERATOR,Role.RECRUITER,Role.USER), skillController.getSingleSkill)


export const skillRoutes = router;
