const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

export const PaginationType = new GraphQLObjectType({
  name: 'Pagination',
  fields: () => ({
    total: { type: GraphQLInt },
    lastPage: { type: GraphQLInt },
    perPage: { type: GraphQLInt },
    currentPage: { type: GraphQLInt },
    from: { type: GraphQLInt },
    to: { type: GraphQLInt },
  }),
});
