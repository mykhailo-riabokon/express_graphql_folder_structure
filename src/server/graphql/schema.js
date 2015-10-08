import {
  graphql,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';
import Viewer from './fields/viewer';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
      viewer: Viewer
    })
  })
});

export default schema;

// just for test
//let query = `
//query Test {
//  viewer {
//    list {
//      name
//    }
//  }
//}
//`;
//
//graphql(schema, query).then(result => {
//  console.log(JSON.stringify(result, null, 4));
//});
