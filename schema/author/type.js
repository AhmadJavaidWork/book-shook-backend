const graphql = require('graphql');

import { books } from './queries';

const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = graphql;

export const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books,
  }),
});
