// education.routes.ts
import { Router } from 'express';
import { educationController } from './education.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { educationValidation } from './education.validation';

const router = Router();


router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  validateRequest(educationValidation.educationValidationSchema), 
  educationController.createEducation,
);


router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  educationController.getEducation, 
);

router.patch(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  validateRequest(educationValidation.educationValidationSchema), 
  educationController.updateEducation,
);

router.delete(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  educationController.deleteEducation);

export const educationRoutes = router;
