const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require("graphql");
const StudentType = require("../types/studentType");
const createStudentResolver = require('../resolvers/createStudentResolver');

module.exports = {
  type: StudentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
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
