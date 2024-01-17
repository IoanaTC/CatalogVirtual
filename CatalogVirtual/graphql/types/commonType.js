const { GraphQLInterfaceType, GraphQLID } = require("graphql");

const CommonType = new GraphQLInterfaceType({
  name: "Common",
  fields: {
    id: { type: GraphQLID },
  },
  resolveType(value) {
    if (value.score) {
      return require("./gradeType")(); 
    }
    if (value.name) {
      return require("./subjectType")(); 
    }
    throw new Error(`Unrecognized type: ${JSON.stringify(value)}`);
  },
});

module.exports = CommonType;