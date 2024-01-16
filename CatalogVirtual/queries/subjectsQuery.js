const { GraphQLList } = require("graphql");
const subjectType = require("../types/subjectType");
const models = require("../../models");

module.exports = {
    type: new GraphQLList(subjectType),
    resolve: async () => {
        const subjectsData = await models.Subject.findAll();
        return subjectsData;
    },
};