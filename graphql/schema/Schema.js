import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql/type';

import { Template as TemplateMongo } from '../../server';

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
export function getProjection (fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = true;
    return projections;
  }, {});
}

var templateType = new GraphQLObjectType({
  name: 'template',
  description: 'template item',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'The id of the template.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the template',
    },
    /*sections: {
      type: GraphQLList,
      description: 'The sections data',
    },*/
  })
});

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      template: {
        type: new GraphQLList(templateType),
        args: {
          id: {
            name: 'id',
            type: GraphQLInt,
          }
        },
        resolve: (root, {id}, source, fieldASTs) => {
          var projections = getProjection(fieldASTs);
          var foundTemplates = new Promise((resolve, reject) => {
            TemplateMongo.find(id ? { _id: id } : {}, projections,(err, templates) => {
              err ? reject(err) : resolve(templates);
            });
          });

          return foundTemplates;
        },
      }
    }
  })

});

export default schema;
