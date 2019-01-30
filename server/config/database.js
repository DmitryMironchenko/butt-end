require('dotenv').config();

console.log('DB_CLIENT', process.env);

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8'
  },
  migrations: {
    tableName: 'migrations',
    directory: process.cwd() + '/server/db/migrations',
  },
  seeds: {
    directory: process.cwd() + '/server/db/seeds',
  },
  debug: true,
};
