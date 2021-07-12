const graphql = require('graphql');

import { author } from './queries';
import TimestampType from '../GraphQLTimestamp';

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author,
    created_at: { type: TimestampType },
    updated_at: { type: TimestampType },
  }),
});
