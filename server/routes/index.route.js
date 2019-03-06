import express from 'express';
// import authRoutes from './auth.route';
// import userRoutes from './user.route';
import templateRoutes from './template.route';
import lyftRoutes from './lyft.route';
import twitterRoutes from './twitter.route';

const router = express.Router();

// mount auth routes at /auth
// router.use('/auth', authRoutes);

// mount user routes at /users
// router.use('/users', userRoutes);

router.use('/templates', templateRoutes);
router.use('/lyft', lyftRoutes);
router.use('/twitter', twitterRoutes);

export default router;