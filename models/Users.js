const knex = require('../config/connection').knex;

const Bookshelf = require('bookshelf')(knex);

const User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  hidden: ['password']
});

module.exports = Bookshelf.model('User', User);
