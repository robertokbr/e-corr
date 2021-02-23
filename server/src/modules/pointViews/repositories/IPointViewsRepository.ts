import PointViews from '../infra/typeorm/entities/PointView';

interface IPointViewsRepository {
  createView(point_id: string): Promise<PointViews>;
  getNumberOfViews(point_id: string): Promise<number>;
}

export default IPointViewsRepository;
