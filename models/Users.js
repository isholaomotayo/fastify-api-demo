const knex = require('../index');
const bookshelf = require('bookshelf')(knex);

// Defining models
const User = bookshelf.model('User', {
  tableName: 'users'
});
