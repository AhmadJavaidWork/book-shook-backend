const graphql = require('graphql');

import TimestampType from '../GraphQLTimestamp';
import { PaginationType } from '../commonTypes';

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    created_at: { type: TimestampType },
    updated_at: { type: TimestampType },
  }),
});

export const UserPageType = new GraphQLObjectType({
  name: 'UserPage',
  fields: {
    data: { type: new GraphQLList(UserType) },
    pagination: { type: PaginationType },
  },
});
