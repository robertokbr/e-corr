import { injectable, inject } from 'tsyringe';
import Point from '../infra/typeorm/entities/Point';

import IPointsRepository from '../repositories/IPointsRepository';

interface Request extends Omit<ICreatePointDTO, 'pointImages'> {
  images: string[];
}

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    description,
    longitude,
    category,
    latitude,
    address,
    user_id,
    images,
    price,
    title,
    type,
  }: Request): Promise<Point> {
    const pointImages = await Promise.all(
      images.map(image => this.storageProvider.saveFile(image)),
    );

    const point = await this.pointsRepository.createPoint({
      description,
      pointImages,
      longitude,
      category,
      latitude,
      address,
      user_id,
      price,
      title,
      type,
    });

    return point;
  }
}

export default CreatePointService;
