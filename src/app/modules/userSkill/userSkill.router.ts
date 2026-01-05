// skill.routes.ts
import { Router } from 'express';

import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { skillController } from './userSkill.controller';

const router = Router();

router.post('/', auth(Role.ADMIN), skillController.createSkill);


router
  .route('/:id')
  .get(auth(Role.ADMIN), skillController.getSingleSkill)


export const skillRoutes = router;
