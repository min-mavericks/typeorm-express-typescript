import { DataSource } from 'typeorm';

import config from './config/ormconfig';

let appDataSource: DataSource | null = null;

export const getDataSource = async (): Promise<DataSource> => {
  try {
    if (!appDataSource) {
      appDataSource = await new DataSource(config);
      console.log(config);
      await appDataSource.initialize();
      console.log('data source has been initialized');
    }
  } catch (err) {
    console.error(err);
  }
  return appDataSource;
};

export default getDataSource;
