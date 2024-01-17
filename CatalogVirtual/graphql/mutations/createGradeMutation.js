const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
  } = require("graphql");
  const GradeType = require('../types/gradeType');
  const createGradeResolver = require('../resolvers/createGradeResolver');
  
  module.exports = {
    type: GradeType, 
    args: {
      studentId: {
        type: new GraphQLNonNull(GraphQLID),
      },
      subjectId: {
        type: new GraphQLNonNull(GraphQLID),
      },
      score: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve: createGradeResolver, 
  };
  