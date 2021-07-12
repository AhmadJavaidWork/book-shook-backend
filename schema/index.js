const graphql = require('graphql');

import knex from '../knex';

// Queries
import { book, books } from './book/queries';
import { author, authors } from './author/queries';

// Mutations
import { addAuthor } from './author/mutations';

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
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor,
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
