const graphql = require('graphql');

import { books } from './queries';
import TimestampType from '../GraphQLTimestamp';
import { PaginationType } from '../commonTypes';

const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLList } =
  graphql;

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

export const AuthorPageType = new GraphQLObjectType({
  name: 'AuthorPage',
  fields: {
    data: { type: new GraphQLList(AuthorType) },
    pagination: { type: PaginationType },
  },
});
