import { Router } from 'express';

import pointsRoutes from '@modules/points/infra/http/routes/point.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/points', pointsRoutes);
routes.use('/users', usersRouter);

export default routes;
