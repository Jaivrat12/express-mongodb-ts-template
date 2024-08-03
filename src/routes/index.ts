import { Router } from 'express';
import userRoutes from './user.route.js';

const apiRoutes = Router();
apiRoutes.use('/users', userRoutes);

export default apiRoutes;
