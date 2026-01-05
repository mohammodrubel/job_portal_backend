// education.routes.ts
import { Router } from 'express';
import { educationController } from './education.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();

router.post('/', auth(Role.ADMIN), educationController.createEducation);
router.get('/', auth(Role.ADMIN), educationController.getAllEducations);

router
  .route('/:id')
  .get(auth(Role.ADMIN), educationController.getSingleEducation)
  .patch(auth(Role.ADMIN), educationController.updateEducation)
  .delete(auth(Role.ADMIN), educationController.deleteEducation);

export const educationRoutes = router;
