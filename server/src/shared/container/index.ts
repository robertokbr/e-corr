import { container } from 'tsyringe';

import './providers';
import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IPointsRepository from '@modules/points/repositories/IPointsRepository';
import PointsRepository from '@modules/points/infra/typeorm/repositories/PointsRepository';
import ICategoriesRepository from '@modules/points/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/points/infra/typeorm/repositories/CategoriesRepository';
import IPointViewsRepository from '@modules/points/repositories/IPointViewsRepository';
import PointViewsRepository from '@modules/points/infra/typeorm/repositories/PointViewsRepository';
import ITagsRepository from '@modules/points/repositories/ITagsRepository';
import TagsRepository from '@modules/points/infra/typeorm/repositories/TagsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPointsRepository>(
  'PointsRepository',
  PointsRepository,
);

container.registerSingleton<IPointViewsRepository>(
  'PointViewsRepository',
  PointViewsRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);
