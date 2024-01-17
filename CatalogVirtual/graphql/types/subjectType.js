const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const CommonType = require("./commonType");

const SubjectType = new GraphQLObjectType({
    name: "Subject",
    interfaces: [CommonType],
    description: "Subject",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        grades: {
            type: new GraphQLList(CommonType),
            resolve: (subject) => subject.getGrades(),
        },
    }),
});

module.exports = SubjectType;