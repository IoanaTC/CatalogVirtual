const { GraphQLNonNull, GraphQLInt } = require("graphql");
const teacherType = require("../types/teacherType");
const models = require("../../models");

module.exports = {
    type: teacherType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve: async (_, { id }) => {
        const teacherData = await models.Teacher.findOne({
            where: { id },
        });

        return teacherData;
    },
};