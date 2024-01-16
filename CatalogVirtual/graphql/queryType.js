const {
    GraphQLObjectType,
} = require('graphql');

const studentsQuery = require('./queries/studentsQuery');
const teachersQuery = require('./queries/teachersQuery');
const subjectsQuery = require('./queries/subjectsQuery');
const teacherswithsubjectsQuery = require('./queries/teacherswithsubjectsQuery');


const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        student: studentsQuery,
        teachers: teachersQuery,
        subjects: subjectsQuery,
        teacherswithsubjects: teacherswithsubjectsQuery,
        // studentGuardian: studentGuardianQuery,
        // teacherSubject: teacherSubjectQuery,
        // grade: gradeQuery,
    }
});

module.exports = queryType;
