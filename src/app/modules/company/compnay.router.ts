// company.routes.ts
import { NextFunction, Request, Response, Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { companyController } from './compnay.controller';
import { upload } from '../../utils/sendImageToCloudinary';

const router = Router();

router.post(
  '/',
  auth(Role.ADMIN, Role.RECRUITER),
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.body.data) {
      try {
        req.body = JSON.parse(req.body.data);
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: "Invalid JSON format in data field",
        });
      }
    }
    next();
  },
  companyController.createCompany
);
router.get('/', auth(Role.ADMIN), companyController.getAllCompanies);

router
  .route('/:id')
  .get(auth(Role.ADMIN), companyController.getSingleCompany)
  .patch(auth(Role.ADMIN), companyController.updateCompany)
  .delete(auth(Role.ADMIN), companyController.deleteCompany);

export const companyRoutes = router;
