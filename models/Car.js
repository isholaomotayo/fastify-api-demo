const knex = require('../config/connection').knex;

const Bookshelf = require('bookshelf')(knex);

const Car = Bookshelf.Model.extend({
  tableName: 'car',
  hasTimestamps: true
});

module.exports = Bookshelf.model('Car', Car);
