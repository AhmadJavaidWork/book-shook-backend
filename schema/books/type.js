const graphql = require('graphql');

import { author } from './queries';

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author,
  }),
});
