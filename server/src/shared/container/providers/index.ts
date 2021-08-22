import { container } from 'tsyringe';
import StorageProvider from './StorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  StorageProvider,
);
