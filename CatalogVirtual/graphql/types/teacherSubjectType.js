const { GraphQLObjectType, GraphQLID, GraphQLInt } = require("graphql");
const SubjectType = require("./subjectType");

const TeacherSubjectType = new GraphQLObjectType({
    name: "TeacherSubject",
    description: "TeacherSubject",
    fields: () => ({
        id: { type: GraphQLID },
        years: { type: GraphQLInt },
        subject: {
            type: SubjectType,
            resolve: (teacherSubject) => teacherSubject.getSubject(),
        },
    }),
});

module.exports = TeacherSubjectType;

