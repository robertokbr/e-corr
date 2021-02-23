import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';
import PointsController from '../controllers/PointsController';

const pointsRouter = Router();
const upload = multer(uploadConfig);

const pointsController = new PointsController();

pointsRouter.post('/', ensureAuthenticated, pointsController.create);

pointsRouter.get('/', pointsController.index);

export default pointsRouter;
