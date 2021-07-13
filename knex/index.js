import knex from 'knex';
const { attachPaginate } = require('knex-paginate');
import config from './knexConfig';

const environmentConfig = config[process.env.NODE_ENV];
const connection = knex(environmentConfig);

attachPaginate();
module.exports = connection;
