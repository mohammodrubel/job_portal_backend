import { Router } from 'express';
import multer from 'multer'; // Missing import added
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { resumeController } from './Resume.controller';
import { upload } from '../../utils/uploadPDFMiddleware';

const router = Router();


router.post(
  '/',
  auth(Role.RECRUITER, Role.USER),
  upload.single('file'),
  resumeController.uploadResume
);

router.get(
  '/',
  auth(Role.RECRUITER, Role.USER),
  resumeController.getMyResume
);

router.delete(
  '/:id',
  auth(Role.RECRUITER, Role.USER),
  resumeController.deleteMyResume
);

export const resumeRouter = router;