import { Router } from 'express';

import pointsRoutes from '@modules/points/infra/http/routes/point.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import viewsRouter from '@modules/pointViews/infra/http/routes/views.routes';

const routes = Router();

routes.use('/views', viewsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/points', pointsRoutes);
routes.use('/users', usersRouter);

export default routes;
