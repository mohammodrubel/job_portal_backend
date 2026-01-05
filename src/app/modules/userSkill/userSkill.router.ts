// skill.routes.ts
import { Router } from 'express';

import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { skillController } from './userSkill.controller';

const router = Router();

router.post('/', auth(Role.ADMIN), skillController.createSkill);
router.get('/', auth(Role.ADMIN), skillController.getAllSkills);

router
  .route('/:id')
  .get(auth(Role.ADMIN), skillController.getSingleSkill)
  .patch(auth(Role.ADMIN), skillController.updateSkill)
  .delete(auth(Role.ADMIN), skillController.deleteSkill);

export const skillRoutes = router;
