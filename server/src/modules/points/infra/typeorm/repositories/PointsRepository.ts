import IPointsRepository from '@modules/points/repositories/IPointsRepository';
import { getRepository, Repository } from 'typeorm';
import Point from '../entities/Point';

class PointsRepository implements IPointsRepository {
  private ormRepository: Repository<Point>;

  constructor() {
    this.ormRepository = getRepository(Point);
  }

  public async createPoint({
    address,
    category,
    description,
    latitude,
    longitude,
    price,
    title,
    type,
    user_id,
    pointImages,
  }: ICreatePointDTO) {
    const point = this.ormRepository.create({
      address,
      category,
      description,
      latitude,
      longitude,
      price,
      title,
      type,
      user_id,
      pointImages: pointImages.map(image_url => ({
        image_url,
      })),
    });

    await this.ormRepository.save(point);

    return point;
  }

  public async getAllPoints() {
    const points = await this.ormRepository.find();

    return points;
  }

  public async deletePoint(point_id: string) {
    await this.ormRepository.delete(point_id);
  }
}

export default PointsRepository;
