import {
  graphql,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';
import * as queries from './queries';
import * as mutations from './mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root query',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name: 'Root mutation',
    fields: mutations
  })
});

export default schema;
