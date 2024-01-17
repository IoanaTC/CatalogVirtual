const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean
} = require("graphql");
const deleteGuardianResolver = require('../resolvers/deleteGuardianResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteGuardianResolver,
};