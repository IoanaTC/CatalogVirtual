const { GraphQLString } = require("graphql");
const studentType = require("../types/studentType");
const models = require("../../models");

module.exports = {
    type: studentType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async (_, { email }) => {
        if (!email) {
            return null;
        }

        const studentData = await models.Student.findOne({
            where: { email },
        });

        return studentData;
    },
};

