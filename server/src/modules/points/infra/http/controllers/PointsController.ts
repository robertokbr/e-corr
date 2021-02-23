import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePointService from '@modules/points/services/CreatePointService';
import PointsRepository from '../../typeorm/repositories/PointsRepository';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      pictures,
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

    // const files = request.files as Express.Multer.File[];

    // const pictures = files.map(file => file.filename);

    const createPointService = container.resolve(CreatePointService);

    const point = await createPointService.execute({
      pictures,
      address,
      user_id,
      type,
      title,
      price,
      longitude,
      latitude,
      description,
      category,
    });

    return response.status(201).json(point);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const url = process.env.APP_URL;

    const pointsRepository = new PointsRepository();

    const points = await pointsRepository.getAllPoints();

    const serializedPoints = points.map(point => {
      const images = point.pictures.split('&');

      // @ts-ignore
      delete point.user.password;

      return {
        ...point,
        images,
      };
    });

    return response.json(serializedPoints);
  }
}

export default PointsController;
