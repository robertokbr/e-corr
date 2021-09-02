import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePointService from '@modules/points/services/CreatePointService';
import PointsRepository from '../../typeorm/repositories/PointsRepository';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      tags,
      title,
      price,
      address,
      user_id,
      latitude,
      longitude,
      description,
      category_id,
    } = request.body;

    const files = request.files as Express.Multer.File[];

    const images = files.map(file => file.filename);

    const createPointService = container.resolve(CreatePointService);

    const point = await createPointService.execute({
      category_id,
      description,
      longitude,
      latitude,
      user_id,
      address,
      images,
      title,
      price,
      tags,
    });

    return response.status(201).json(point);
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const pointsRepository = new PointsRepository();

    const points = await pointsRepository.findPoints();

    return response.json(points);
  }
}

export default PointsController;
