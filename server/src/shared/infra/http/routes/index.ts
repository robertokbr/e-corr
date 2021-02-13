import { Router } from 'express';

import pointsRoutes from '@modules/points/infra/http/routes/point.routes';

const routes = Router();

routes.use(pointsRoutes);

export default routes;
