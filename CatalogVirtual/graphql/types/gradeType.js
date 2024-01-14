const { GraphQLObjectType, GraphQLID, GraphQLInt } = require("graphql");
const StudentType = require("./studentType");
const SubjectType = require("./subjectType");

const GradeType = new GraphQLObjectType({
    name: "Grade",
    description: "grade",
    fields: () => ({
        id: { type: GraphQLID },
        score: { type: GraphQLInt },
        student: {
            type: StudentType,
            resolve: (grade) => grade.getStudent(),
        },
        subject: {
            type: SubjectType,
            resolve: (grade) => grade.getSubject(),
        },
    }),
});

module.exports = GradeType;

