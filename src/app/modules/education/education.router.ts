// education.routes.ts
import { Router } from 'express';
import { educationController } from './education.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();

// POST: Create education for the authenticated user
router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  // validateRequest(educationValidation.createEducation), // Optional validation
  educationController.createEducation,
);

// GET: Get education for the authenticated user
// This returns education data for the logged-in user
router.get(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  educationController.getSingleEducation, // Consider renaming from getSingleEducation
);

// PATCH: Update education for the authenticated user
// Updates the logged-in user's education
router.patch(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  // validateRequest(educationValidation.updateEducation), // Optional validation
  educationController.updateEducation,
);

router.delete('/:id',auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),educationController.deleteEducation);

export const educationRoutes = router;
