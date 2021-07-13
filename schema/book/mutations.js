const graphql = require('graphql');

import knex from '../../knex';
import { BookType } from './type';

const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

export const addBook = {
  type: BookType,
  args: {
    authorId: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    picture: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const book = {
      authorId: args.authorId,
      name: args.name,
      genre: args.genre,
      picture: args.picture,
    };
    const newBook = await knex('books')
      .insert(book)
      .returning('*')
      .then((book) => book[0]);
    return newBook;
  },
};
