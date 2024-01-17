const { 
  GraphQLObjectType, 
} = require('graphql');

const createStudent = require('./mutations/createStudentMutation');
const deleteStudent = require('./mutations/deleteStudentMutation');
const createGrade = require('./mutations/createGradeMutation');
const deleteGrade = require('./mutations/deleteGradeMutation');
const createGuardian = require('./mutations/createGuardianMutation');
const deleteGuardian = require('./mutations/deleteGuardianMutation');
const login = require('./mutations/login');

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      createStudent: createStudent,
      deleteStudent: deleteStudent,
      createGrade: createGrade,
      deleteGrade: deleteGrade,
      createGuardian: createGuardian,
      deleteGuardian: deleteGuardian,
      login: login,
  }
})

module.exports = mutationType;