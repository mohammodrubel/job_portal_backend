import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { userRouter } from '../modules/user/user.router';
import { skillRoutes } from '../modules/userSkill/userSkill.router';
import { userProfileRouter } from '../modules/user-profile/user-profile.router';
import { educationRoutes } from '../modules/education/education.router';
import { userExperienceRoutes } from '../modules/userExperience/userExperience.router';
import { companyRoutes } from '../modules/company/compnay.router';
import { jobPostingRoutes } from '../modules/jobPosting/jobPosting.router';
import { RecruiterRouter } from '../modules/recruiter/Recruiter.router';

const router = express.Router();

type Route = {
  path: string;
  route: express.Router;
};

const routes: Route[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/user-skill',
    route: skillRoutes,
  },
  {
    path: '/user-profile',
    route: userProfileRouter,
  },
  {
    path: '/education',
    route: educationRoutes,
  },
  {
    path: '/experience',
    route: userExperienceRoutes,
  },
  {
    path: '/company',
    route: companyRoutes,
  },
  {
    path: '/job-posting',
    route: jobPostingRoutes,
  },
  {
    path: '/recruiter',
    route: RecruiterRouter,
  },
];
routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
