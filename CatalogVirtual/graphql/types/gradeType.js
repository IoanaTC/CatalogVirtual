const { GraphQLObjectType, GraphQLID, GraphQLInt } = require("graphql");
const StudentType = require("./studentType");
const CommonType = require("./commonType");

const GradeType = new GraphQLObjectType({
    name: "Grade",
    interfaces: [CommonType],
    description: "grade",
    fields: () => ({
        id: { type: GraphQLID },
        score: { type: GraphQLInt },
        student: {
            type: StudentType,
            resolve: (grade) => grade.getStudent(),
        },
        subject: {
            type: CommonType,
            resolve: (grade) => grade.getSubject(),
        },
    }),
});

module.exports = GradeType;