const {
    GraphQLObjectType,
} = require('graphql');

const studentQuery = require('./queries/studentQuery');
const studentGuardianQuery = require('./queries/studentGuardianQuery');
const teacherSubjectQuery = require('./queries/teacherSubjectQuery');
const gradeQuery = require('./queries/gradeQuery');


const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        student: studentQuery,
        studentGuardian: studentGuardianQuery,
        teacherSubject: teacherSubjectQuery,
        grade: gradeQuery,
    }
});

module.exports = queryType;
