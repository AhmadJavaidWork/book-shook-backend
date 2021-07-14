const graphql = require('graphql');

import { author } from './queries';
import TimestampType from '../GraphQLTimestamp';
import { PaginationType } from '../commonTypes';

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;

export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    picture: { type: GraphQLString },
    description: { type: GraphQLString },
    author,
    created_at: { type: TimestampType },
    updated_at: { type: TimestampType },
  }),
});

export const BookPageType = new GraphQLObjectType({
  name: 'BookPage',
  fields: {
    data: { type: new GraphQLList(BookType) },
    pagination: { type: PaginationType },
  },
});
