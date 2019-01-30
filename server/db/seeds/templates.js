const templates = require('../data/templates');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('templates').del()
    .then(function () {
      // Inserts seed entries
      return knex('templates').insert(templates);
    })
    .then(() => {
      return Array.prototype.slice.call(arguments, 0);
    }, e => {
      console.error('Failed to seed data', e);
    });
};
