require('dotenv').config();

module.exports = {
  client: process.env.RDS_ENGINE,
  connection: {
    host: process.env.RDS_HOSTNAME || '127.0.0.1',
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
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
