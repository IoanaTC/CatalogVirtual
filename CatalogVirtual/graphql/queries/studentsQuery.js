const { GraphQLList } = require("graphql");
const studentType = require("../types/studentType");
const models = require("../../models");

module.exports = {
    type: new GraphQLList(studentType),
    resolve: async () => {
        const studentsData = await models.Student.findAll();
        return studentsData;
    },
};