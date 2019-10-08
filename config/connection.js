//initialize environment variables
require('dotenv').config();

// Require external modules
mongoose = require('mongoose');

//create a database connection suing knex.js library
exports.knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public']
}); 

// Connect to DB
exports.mongoose = mongoose
  .connect('mongodb://localhost/mycargarage', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err));
