import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';
import PointsRepository from '../../typeorm/repositories/PointsRepository';
import PointsController from '../controllers/PointsController';

const pointsRouter = Router();
const upload = multer(uploadConfig);

const pointsController = new PointsController();

pointsRouter.post(
  '/',
  ensureAuthenticated,
  upload.array('pictures', 6),
  pointsController.create,
);

export default pointsRouter;

pointsRouter.get('/', pointsController.index);
