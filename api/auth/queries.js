import knex from '../../knex';

const unique = (email) => {
  return knex('users')
    .where({ email })
    .then((user) => user[0]);
};

const register = (user) => {
  return knex('users')
    .insert(user)
    .returning('*')
    .then((user) => user[0]);
};

export default {
  unique,
  register,
};
