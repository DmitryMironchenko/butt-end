// This file is required for CLI to work.
// We already have knex configuration initialized in ./server/config/database.js file.

const config = require('./server/config/database');

module.exports = config;
