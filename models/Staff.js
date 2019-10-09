// External Dependancies
const knex = require('../config/connection').knex;

const Bookshelf = require('bookshelf')(knex);

const Staff = Bookshelf.Model.extend({
  tableName: 'staff',
  hasTimestamps: true
});

module.exports = Bookshelf.model('Staff', Staff);
