const knex = require('knex');

const knexfile = require('../knexfile');

const db = require('../usersRM/model')

module.exports = knex(knexfile.development);