const graphql = require('graphql');

import knex from '../../knex';
import { AuthorType } from '../author';
import { BookType, BookPageType } from './type';

const { GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;

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
  type: BookPageType,
  args: {
    perPage: { type: new GraphQLNonNull(GraphQLInt) },
    currentPage: { type: new GraphQLNonNull(GraphQLInt) },
    from: { type: GraphQLID },
    to: { type: GraphQLID },
  },
  resolve: (parent, args) => {
    const { perPage, currentPage, from, to } = args;
    return knex('books').paginate({
      perPage,
      currentPage,
      isLengthAware: true,
    });
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
