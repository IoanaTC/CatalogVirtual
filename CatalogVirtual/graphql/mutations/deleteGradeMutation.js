const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean
  } = require("graphql");
  const deleteGradeResolver = require('../resolvers/deleteGradeResolver');
  
  module.exports = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID), 
      },
    },
    resolve: deleteGradeResolver,
  };
  