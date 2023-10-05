import { User } from 'orm/entities/users/User';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: DataSourceOptions = {
  type: 'postgres',
  name: 'default',
  host: 'localhost',
  port: 5432,
  username: 'minhtet',
  password: '',
  database: 'mock',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ['src/orm/migrations/**/*.ts'],
  subscribers: ['src/orm/subscriber/**/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
};

export = config;
