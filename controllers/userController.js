const boom = require('boom');
const Users = require('../models/Users');
const knex = require('../config/connection');

// Get all users
exports.listUsers = async (req, reply) => {
  try {
    const users = await Users.fetchAll();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};
