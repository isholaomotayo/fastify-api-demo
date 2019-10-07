const knex = require('../config/connection').knex;

knex.raw('select 1+1 as result').then(function() {
  // there is a valid connection in the pool
  console.log('DB connected');
});
const Bookshelf = require('bookshelf')(knex);

const User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  hidden: ['password']
});

module.exports = Bookshelf.model('User', User);
