const {
    GraphQLNonNull,
    GraphQLString
} = require("graphql");
const GuardianType = require("../types/GuardianType");
const createGuardianResolver = require('../resolvers/createGuardianResolver');

module.exports = {
    type: GuardianType,
    args: {
        name1: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name2: {
            type: new GraphQLNonNull(GraphQLString),
        },
        cityOfBirth: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: createGuardianResolver,
};