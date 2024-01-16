const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const SubjectType = require("./subjectType");

const TeacherType = new GraphQLObjectType({
    name: "Teacher",
    description: "Teacher",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        subjects: {
            type: new GraphQLList(SubjectType),
            resolve: (teacher) => teacher.getSubjects(),
        },
    }),
});

module.exports = TeacherType;

