import { getRepository } from 'typeorm';

import IPointViewsRepository from '@modules/pointViews/repositories/IPointViewsRepository';
import PointViews from '../entities/PointView';

class PointViewsRepository implements IPointViewsRepository {
  constructor(private ormRepository = getRepository(PointViews)) {}

  public async createView(point_id: string) {
    const view = this.ormRepository.create({
      point_id,
    });

    await this.ormRepository.save(view);

    return view;
  }

  public async getNumberOfViews(point_id: string) {
    const views = await this.ormRepository.find({
      where: { point_id },
    });

    return views.length;
  }
}

export default PointViewsRepository;
