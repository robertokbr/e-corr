import { Router, Request, Response } from 'express';
import PointViewsRepository from '../../typeorm/repositories/PointViewsRepository';

const viewsRouter = Router();

viewsRouter.post('/', async (request: Request, response: Response) => {
  const { point_id } = request.body;

  const pointViewsRepository = new PointViewsRepository();

  const point = await pointViewsRepository.createView(point_id);

  return response.status(201).json(point);
});

viewsRouter.get('/:point_id', async (request: Request, response: Response) => {
  const { point_id } = request.params;

  const pointViewsRepository = new PointViewsRepository();

  const views = await pointViewsRepository.findViewsByPointId(point_id);

  return response.status(201).json(views);
});

export default viewsRouter;
