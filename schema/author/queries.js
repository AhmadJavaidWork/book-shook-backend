const graphql = require('graphql');

import knex from '../../knex';
import { BookType } from '../book';
import { AuthorType, AuthorPageType } from './type';

const { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt } = graphql;

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
  type: AuthorPageType,
  args: {
    perPage: { type: new GraphQLNonNull(GraphQLInt) },
    currentPage: { type: new GraphQLNonNull(GraphQLInt) },
    from: { type: GraphQLID },
    to: { type: GraphQLID },
  },
  resolve: (parent, args) => {
    const { perPage, currentPage, from, to } = args;
    return knex('authors').paginate({
      perPage,
      currentPage,
      isLengthAware: true,
    });
  },
};

export const books = {
  type: new GraphQLList(BookType),
  resolve: (parent, args) => {
    return knex('books').where({ authorId: parent.id });
  },
};
