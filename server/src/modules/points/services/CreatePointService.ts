import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Point from '../infra/typeorm/entities/Point';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

import IPointsRepository from '../repositories/IPointsRepository';
import ITagsRepository from '../repositories/ITagsRepository';

interface Request {
  category_id: number;
  description: string;
  longitude: string;
  latitude: string;
  user_id: string;
  address: string;
  images: string[];
  title: string;
  price: string;
  tags: string[];
}

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,

    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({
    category_id,
    description,
    longitude,
    latitude,
    address,
    user_id,
    images,
    price,
    title,
    tags,
  }: Request): Promise<Point> {
    const pointImages = await Promise.all(
      images.map(image => this.storageProvider.saveFile(image)),
    );

    const category = await this.categoriesRepository.findCategoryById(
      category_id,
    );

    if (!category) {
      throw new AppError('You must provide a valid category');
    }

    const tag_names = tags.map(tag => tag.toLowerCase());

    tag_names.push(...title.toLowerCase().split(' '));

    const existent_tags = await this.tagsRepository.findTagsByNames(tag_names);

    const existent_tag_names = existent_tags.map(tag => tag.name);

    const non_existent_tag_names = tag_names.filter(
      tag_name => !existent_tag_names.includes(tag_name),
    );

    const new_tags = await Promise.all(
      non_existent_tag_names.map(tag_name =>
        this.tagsRepository.createTag(tag_name),
      ),
    );

    const point = await this.pointsRepository.createPoint({
      category_id,
      description,
      pointImages,
      longitude,
      latitude,
      address,
      user_id,
      price,
      title,
      tag_ids: [
        ...existent_tags.map(({ id }) => id),
        ...new_tags.map(({ id }) => id),
      ],
    });

    return point;
  }
}

export default CreatePointService;
