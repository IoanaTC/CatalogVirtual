const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const GradeType = require("./gradeType");

const SubjectType = new GraphQLObjectType({
    name: "Subject",
    description: "Subject",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        grades: {
            type: new GraphQLList(GradeType),
            resolve: (subject) => subject.getGrades(),
        },
    }),
});

module.exports = SubjectType;

