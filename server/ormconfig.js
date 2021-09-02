module.exports =
  process.env.ENVIRONMENT === 'dev'
    ? {
        type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'ecorr',
        database: 'ecorr',
        entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
        migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
        cli: {
          migrationsDir: './src/shared/infra/typeorm/migrations',
        },
        seeds: ['./src/shared/infra/typeorm/seeds/*.ts'],
      }
    : {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: 5432,
        username: 'postgres',
        password: 'ecorr',
        database: 'ecorr',
        entities: ['./dist/modules/**/infra/typeorm/entities/*.js'],
        migrations: ['./dist/shared/infra/typeorm/migrations/*.js'],
        cli: {
          migrationsDir: './dist/shared/infra/typeorm/migrations',
        },
        seeds: ['./dist/shared/infra/typeorm/seeds/*.js'],
      };
