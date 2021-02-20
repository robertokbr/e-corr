import IPointsRepository from '@modules/points/repositories/IPointsRepository';
import { getRepository, Repository } from 'typeorm';
import Point from '../entities/Point';

class PointsRepository implements IPointsRepository {
  private ormRepository: Repository<Point>;

  constructor() {
    this.ormRepository = getRepository(Point);
  }

  public async createPoint(data: ICreatePointDTO) {
    const point = this.ormRepository.create(data);

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
