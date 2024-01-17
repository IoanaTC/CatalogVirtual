const { GraphQLList } = require("graphql");
const teacherType = require("../types/teacherType");
const models = require("../../models");

module.exports = {
    type: new GraphQLList(teacherType),
    resolve: async () => {
        const teachersData = await models.Teacher.findAll({
            include: models.Subject
        });
        return teachersData;
    },
};