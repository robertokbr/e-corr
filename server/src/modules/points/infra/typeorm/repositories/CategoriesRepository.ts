import ICategoriesRepository from '@modules/points/repositories/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import PointCategory from '../entities/PointCategory';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<PointCategory>;

  constructor() {
    this.ormRepository = getRepository(PointCategory);
  }

  public async findCategoryById(
    category_id: number,
  ): Promise<PointCategory | undefined> {
    return this.ormRepository.findOne(category_id);
  }
}

export default CategoriesRepository;
