
const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean
} = require("graphql");
const deleteGuardianResolver = require('../resolvers/deleteGuardianResolver');

const deleteGuardianMutation = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteGuardianResolver,
};
