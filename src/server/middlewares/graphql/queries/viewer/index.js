// describe viewer query
import list from './queries/list';

export default {
  type: new GraphQlObjectType({
    name: 'Viewer',
    fields: () => ({
      list
    })
  }),
  resolve() {}
}
