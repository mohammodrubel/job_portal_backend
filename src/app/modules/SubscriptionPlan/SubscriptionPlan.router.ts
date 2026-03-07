import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { subscriptionPlanController } from './SubscriptionPlan.controller';


const router = Router();


router.post(
    '/',
    auth(Role.RECRUITER, Role.USER),
    subscriptionPlanController.createSubscriptionPlan,
);

router.get(
    '/',
    subscriptionPlanController.getAllSubscriptionPlan,
);
router
    .route('/:id')
    .get(
        subscriptionPlanController.getSingleSubscriptionPlan,
    )
    .patch(
        auth(Role.ADMIN),
        subscriptionPlanController.updateSubscriptionPlan,
    )
    .delete(
        auth(Role.ADMIN),
        subscriptionPlanController.deleteSubscriptionPlan,
    );

export const subscriptionPlanRouter = router;
