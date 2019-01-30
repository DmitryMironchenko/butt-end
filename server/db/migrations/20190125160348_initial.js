
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('templates', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('title');
    table.text('template');
  }),
]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('templates');
};
