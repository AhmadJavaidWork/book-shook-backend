const graphql = require('graphql');

import knex from '../knex';

// Queries
import { book, books } from './book/queries';
import { author, authors } from './author/queries';
import { user, users } from './user/queries';

// Mutations
import { addAuthor } from './author/mutations';
import { addBook } from './book/mutations';
import { register } from './user/mutations';

// Types
import { AuthorType } from './author';
import { BookType } from './book';

const { GraphQLObjectType, GraphQLSchema } = graphql;

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book,
    books,
    author,
    authors,
    user,
    users,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor,
    addBook,
    register,
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
