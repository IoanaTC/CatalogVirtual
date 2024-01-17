const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean
} = require("graphql");
const deleteGradeResolver = require('../resolvers/deleteGradeResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    gradeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteGradeResolver,
};

// mutation DeleteGrade {
//   deleteGrade(gradeId: "8311")
// 
