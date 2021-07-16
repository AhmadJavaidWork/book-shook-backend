const graphql = require('graphql');
import { sign } from '../../services/jwt';
import { genHash } from '../../services/bcrypt';

import knex from '../../knex';
import { UserType } from './type';

const { GraphQLString, GraphQLNonNull } = graphql;

export const register = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = {
      name: args.name,
      email: args.email,
      password: args.password,
      role: args.role,
    };
    user.password = await genHash(user.password);
    const newUser = await knex('users')
      .insert(user)
      .returning('*')
      .then((user) => user[0]);
    return newUser;
  },
};
