const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const StudentType = require("./studentType");

const GuardianType = new GraphQLObjectType({
    name: "Guardian",
    description: "guardian",
    fields: () => ({
        id: { type: GraphQLID },
        parent1: { type: GraphQLString },
        parent2: { type: GraphQLString },
        students: {
            type: StudentType,
            resolve: (guardian) => guardian.getStudent(),
        },
    }),
});

module.exports = GuardianType;

