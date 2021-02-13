import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';
import { Router } from 'express';
import PointsRepository from '../../typeorm/repositories/PointsRepository';

const pointsRouter = Router();

pointsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const createPointData = request.body as ICreatePointDTO;

  const pointsRepository = new PointsRepository();

  const point = await pointsRepository.create(createPointData);

  return response.status(201).json(point);
});

export default pointsRouter;

pointsRouter.get('/', async (request, response) => {
  const pointsRepository = new PointsRepository();

  const points = await pointsRepository.getAllPoints();

  return response.json(points);
});
