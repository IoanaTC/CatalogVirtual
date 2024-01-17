const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt 
  } = require("graphql");
  const StudentType = require("../types/studentType");
  const createStudentResolver = require('../resolvers/createStudentResolver');
  
  module.exports = {
    type: StudentType, 
    args: {
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: GraphQLString,
      },
    },
    resolve: createStudentResolver, 
  };
  