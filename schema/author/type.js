const graphql = require('graphql');

import { books } from './queries';
import TimestampType from '../GraphQLTimestamp';

const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = graphql;

export const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    picture: { type: GraphQLString },
    books,
    created_at: { type: TimestampType },
    updated_at: { type: TimestampType },
  }),
});
