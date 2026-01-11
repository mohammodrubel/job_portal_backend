import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { userRouter } from '../modules/user/user.router';
import { skillRoutes } from '../modules/userSkill/userSkill.router';
import { userProfileRouter } from '../modules/user-profile/user-profile.router';
import { educationRoutes } from '../modules/education/education.router';
import { userExperienceRoutes } from '../modules/userExperience/userExperience.router';

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
];
routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
