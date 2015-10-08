# An example of folders structure for Express + GraphQL

```
|-- structure
    |-- .gitignore
    |-- package.json
    |-- ...
    |-- src
        |-- ...
        |-- server
            |-- index.js
            |-- ...
            |-- graphql
                |-- schema.js
                |-- fields
                |   |-- ...
                |   |-- viewer
                |       |-- index.js
                |       |-- resolve.js
                |       |-- type.js
                |       |-- fields
                |           |-- ...
                |           |-- list
                |               |-- index.js
                |               |-- type.js
                |-- mutations
                    |-- ...
```

### The main idea is to split fields to separate folders, where:
```
// fields/fieldName/index.js
...

export default {
  type,
  resolve
}
```

```
// fields/fieldName/type.js
...
import NestedField from './fields/nestedField/index.js';

export default new GraphQLObjectType({
  name: 'MyType',
  fields: () => ({
    nestedField: NestedField 
  })
});
```

```
// fields/fieldName/resolve.js
...
export default function () {
  // resolve
}
```

### An example of code in folders you can reach in this repository. 

