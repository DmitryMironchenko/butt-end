import express from 'express';
// import authRoutes from './auth.route';
// import userRoutes from './user.route';
import templateRoutes from './template.route';

const router = express.Router();

// mount auth routes at /auth
// router.use('/auth', authRoutes);

// mount user routes at /users
// router.use('/users', userRoutes);

router.use('/templates', templateRoutes);

export default router;