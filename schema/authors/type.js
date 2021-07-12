const graphql = require('graphql');

import { books } from './queries';

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books,
  }),
});

export { AuthorType };
