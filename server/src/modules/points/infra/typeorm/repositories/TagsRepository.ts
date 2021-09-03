import { getRepository, In, Repository } from 'typeorm';
import ICreatePointTagDTO from '@modules/points/dtos/ICreatePointTagDTO';
import ITagsRepository from '@modules/points/repositories/ITagsRepository';
import PointTag from '../entities/PointTag';
import Tag from '../entities/Tag';

export default class TagsRepository implements ITagsRepository {
  private pointTagsOrmRepository: Repository<PointTag>;

  private tagsOrmRepository: Repository<Tag>;

  constructor() {
    this.pointTagsOrmRepository = getRepository(PointTag);

    this.tagsOrmRepository = getRepository(Tag);
  }

  public async createPointTag(data: ICreatePointTagDTO): Promise<PointTag> {
    const pointTag = this.pointTagsOrmRepository.create(data);

    await this.pointTagsOrmRepository.save(pointTag);

    return pointTag;
  }

  public async createTag(tag_name: string): Promise<Tag> {
    const tag = this.tagsOrmRepository.create({
      name: tag_name,
    });

    await this.tagsOrmRepository.save(tag);

    return tag;
  }

  public async findTagsByNames(tag_names: string[]): Promise<Tag[]> {
    return this.tagsOrmRepository.find({
      where: {
        name: In(tag_names),
      },
    });
  }
}
