const graphql = require('graphql');

import { author, authors } from './authors';
import { book, books } from './books';

const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book,
    author,
    books,
    authors,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
