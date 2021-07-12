const graphql = require('graphql');

import knex from '../../knex';
import { BookType } from './type';

const { GraphQLString, GraphQLID } = graphql;

export const addBook = {
  type: BookType,
  args: {
    authorId: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const book = {
      authorId: args.authorId,
      name: args.name,
      genre: args.genre,
    };
    const newBook = await knex('books')
      .insert(book)
      .returning('*')
      .then((book) => book[0]);
    return newBook;
  },
};
