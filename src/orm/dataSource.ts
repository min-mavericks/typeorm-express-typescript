import { DataSource, EntityManager, EntityTarget, Repository } from 'typeorm';
import config from './config/ormconfig';

let appDataSource: DataSource | null = null;

export const setupDataSource = async (): Promise<void> => {
  try {
    if (!appDataSource) {
      appDataSource = await new DataSource(config);
      await appDataSource.initialize();
      console.log('data source has been initialized');
    }
  } catch (err) {
    console.error(err);
  }
};

export const getEntityManager = (): EntityManager | null => {
  if (appDataSource) {
    return appDataSource.manager;
  }
  return null;
};

export const getRepository = <T>(entity: EntityTarget<T>): Repository<T> | null => {
  const entityManager = appDataSource.manager;

  if (entityManager) {
    return entityManager.getRepository(entity);
  }

  return null;
};
