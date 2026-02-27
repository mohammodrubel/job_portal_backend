// education.routes.ts
import { NextFunction, Request, Response, Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { JobPostController } from './jobPosting.controller';
import validateRequest from '../../middlewares/validateRequest';
import { JobZodSchema } from './jobPosting.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = Router();


router.post(
  '/',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  upload.single("file"),
  (req, res, next) => {
    if (req.body.data) {
      try {
        req.body = JSON.parse(req.body.data); // Parse the JSON string
      } catch (error) {
        return res.status(400).json({ message: "Invalid JSON data" });
      }
    }
    next();
  },
  JobPostController.createJobPost
);

router.get(
  '/',
  // auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobPostController.getAllJobPosts, 
);
router.get(
  '/:id',
  JobPostController.getSingleJobPost, 
);

router.patch(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobPostController.updateJobPost,
);

router.delete(
  '/:id',
  auth(Role.ADMIN, Role.MODERATOR, Role.RECRUITER, Role.USER),
  JobPostController.deleteJobPost);

export const jobPostingRoutes = router;
