const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");

const StudentType = new GraphQLObjectType({
    name: "Student",
    description: "Student",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        guardian: {
            type: require("./guardianType"), 
            resolve: (student) => student.getGuardian(),
        },
        grades: {
            type: new GraphQLList(require("./gradeType")), 
            resolve: (student) => student.getGrades(),
        },
    }),
});

module.exports = StudentType;