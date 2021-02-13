import Point from '../infra/typeorm/entities/Point';

export default interface IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point>;
  getAllPoints(): Promise<Point[]>;
}
