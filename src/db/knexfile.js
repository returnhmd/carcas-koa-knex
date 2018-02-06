const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
require('dotenv').config({ path: path.join(ROOT, '.env') });

const { DB_CLIENT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(ROOT, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(path.join(ROOT, 'src', 'db', 'seeds')),
    },
  },
};
