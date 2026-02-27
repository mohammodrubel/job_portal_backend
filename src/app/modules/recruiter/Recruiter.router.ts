import { Role } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { RecruiterController } from "./Recruiter.controller";

const router = Router();



router.get(
  '/company',
  auth(Role.RECRUITER, Role.USER),
  RecruiterController.getAllRecruiter, 
);

export const RecruiterRouter = router;