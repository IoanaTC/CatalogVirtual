const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const GuardianType = require("./guardianType");
const GradeType = require("./gradeType");

const StudentType = new GraphQLObjectType({
    name: "Student",
    description: "Student",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        guardian: {
            type: GuardianType,
            resolve: (student) => student.getGuardian(),
        },
        grades: {
            type: new GraphQLList(GradeType),
            resolve: (student) => student.getGrades(),
        },
    }),
});

module.exports = StudentType;

