//initialize environment variables
require('dotenv').config();

// Require external modules
mongoose = require('mongoose');

// Connect to mongoDB
exports.mongoose = mongoose
  .connect('mongodb://localhost/mycargarage', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err));
//create a database connection using knex.js library
//Destructure environment variables form process.env for DB connection
const { DB_NAME, DB_PORT, DB_HOST, DB_USER } = process.env;

exports.knex = require('knex')({
  client: 'pg',
  connection: `postgres://${DB_USER}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  searchPath: ['knex', 'public'],
  debug: true
});
