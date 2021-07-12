const graphql = require('graphql');

import knex from '../../knex';
import { AuthorType } from './type';

const { GraphQLInt, GraphQLString, GraphQLNonNull } = graphql;

export const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent, args) {
    const author = {
      name: args.name,
      age: args.age,
    };
    const newAuthor = await knex('authors')
      .insert(author)
      .returning('*')
      .then((author) => author[0]);
    return newAuthor;
  },
};
