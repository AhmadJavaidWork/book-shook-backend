const graphql = require('graphql');

import knex from '../../knex';
import { AuthorType } from '../author';
import { BookType } from './type';

const { GraphQLID, GraphQLList } = graphql;

export const book = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => {
    return knex('books')
      .where({ id: args.id })
      .then((book) => book[0]);
  },
};

export const books = {
  type: new GraphQLList(BookType),
  resolve: (parent, args) => {
    return knex('books');
  },
};

export const author = {
  type: AuthorType,
  resolve: (parent, args) => {
    return knex('authors')
      .where({ id: parent.authorId })
      .then((author) => author[0]);
  },
};
