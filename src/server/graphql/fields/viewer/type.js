import {GraphQLObjectType, GraphQLString} from 'graphql';
import ListField from './fields/list';

export default new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    list: ListField
  })
})
