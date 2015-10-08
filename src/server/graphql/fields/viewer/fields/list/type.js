import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from 'graphql';

let listType = new GraphQLObjectType({
  name: 'ListType',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  })
});

export default new GraphQLList(listType);
