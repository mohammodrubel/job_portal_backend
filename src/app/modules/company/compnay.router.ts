// company.routes.ts
import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { companyController } from './compnay.controller';

const router = Router();

router.post('/', auth(Role.ADMIN), companyController.createCompany);
router.get('/', auth(Role.ADMIN), companyController.getAllCompanies);

router
  .route('/:id')
  .get(auth(Role.ADMIN), companyController.getSingleCompany)
  .patch(auth(Role.ADMIN), companyController.updateCompany)
  .delete(auth(Role.ADMIN), companyController.deleteCompany);

export const companyRoutes = router;
