import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormOption = (nodeEnv?: string): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '@second11',
    database: 'test_db',
    entities: ['dist/entities/*.entity{.ts,.js}'],
    synchronize: nodeEnv === 'local' ? true : false,
    logging: nodeEnv === 'local' ? true : false
  };
};
