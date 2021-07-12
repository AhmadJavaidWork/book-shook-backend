const graphql = require('graphql');

import knex from '../../knex';
import { BookType } from '../book';
import { AuthorType } from './type';

const { GraphQLID, GraphQLList } = graphql;

export const author = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => {
    return knex('authors')
      .where({ id: args.id })
      .then((author) => author[0]);
  },
};

export const authors = {
  type: new GraphQLList(AuthorType),
  resolve: (parent, args) => {
    return knex('authors');
  },
};

export const books = {
  type: new GraphQLList(BookType),
  resolve: (parent, args) => {
    return knex('books').where({ authorId: parent.id });
  },
};
