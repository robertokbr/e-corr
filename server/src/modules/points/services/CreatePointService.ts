import { injectable, inject } from 'tsyringe';
import Point from '../infra/typeorm/entities/Point';

import IPointsRepository from '../repositories/IPointsRepository';

interface Request extends Omit<ICreatePointDTO, 'pictures'> {
  pictures: string[];
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
    user_id,
    address,
    category,
    description,
    latitude,
    longitude,
    pictures,
    price,
    title,
    type,
  }: Request): Promise<Point> {
    const serializedPictures = pictures.join('&');

    await Promise.all(
      pictures.map(async picture => {
        this.storageProvider.saveFile(picture);
      }),
    );

    const point = await this.pointsRepository.createPoint({
      pictures: serializedPictures,
      address,
      category,
      description,
      latitude,
      longitude,
      price,
      title,
      type,
      user_id,
    });

    return point;
  }
}

export default CreatePointService;
