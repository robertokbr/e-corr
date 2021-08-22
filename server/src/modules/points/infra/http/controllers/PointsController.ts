import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePointService from '@modules/points/services/CreatePointService';
import PointsRepository from '../../typeorm/repositories/PointsRepository';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      address,
      user_id,
      type,
      title,
      price,
      longitude,
      latitude,
      description,
      category,
    } = request.body;

    const files = request.files as Express.Multer.File[];

    const images = files.map(file => file.filename);

    const createPointService = container.resolve(CreatePointService);

    const point = await createPointService.execute({
      description,
      longitude,
      latitude,
      category,
      user_id,
      address,
      images,
      title,
      price,
      type,
    });

    return response.status(201).json(point);
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const pointsRepository = new PointsRepository();

    const points = await pointsRepository.getAllPoints();

    return response.json(points);
  }
}

export default PointsController;
