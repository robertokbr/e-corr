import PointCategory from '../infra/typeorm/entities/PointCategory';

export default interface ICategoriesRepository {
  findCategoryById(category_id: number): Promise<PointCategory | undefined>;
}
