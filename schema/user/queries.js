const graphql = require('graphql');

import knex from '../../knex';
import { UserType, UserPageType } from './type';

const { GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;

export const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => {
    return knex('users')
      .where({ id: args.id })
      .then((user) => user[0]);
  },
};

export const users = {
  type: UserPageType,
  args: {
    perPage: { type: new GraphQLNonNull(GraphQLInt) },
    currentPage: { type: new GraphQLNonNull(GraphQLInt) },
    from: { type: GraphQLID },
    to: { type: GraphQLID },
  },
  resolve: (parent, args) => {
    const { perPage, currentPage, from, to } = args;
    return knex('users').paginate({
      perPage,
      currentPage,
      isLengthAware: true,
    });
  },
};
