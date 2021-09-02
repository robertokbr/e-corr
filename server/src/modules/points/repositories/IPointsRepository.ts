import Point from '../infra/typeorm/entities/Point';

export default interface IPointsRepository {
  createPoint(data: ICreatePointDTO): Promise<Point>;
  findPoints(): Promise<Point[]>;
  deletePoint(point_id: string): Promise<void>;
}
