import ICreatePointTagDTO from '../dtos/ICreatePointTagDTO';
import PointTag from '../infra/typeorm/entities/PointTag';
import Tag from '../infra/typeorm/entities/Tag';

export default interface ITagsRepository {
  createPointTag(data: ICreatePointTagDTO): Promise<PointTag>;
  createTag(tag_name: string): Promise<Tag>;
  findTagsByNames(tag_names: string[]): Promise<Tag[]>;
}
