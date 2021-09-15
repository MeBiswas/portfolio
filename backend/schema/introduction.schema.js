const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const Introduction = new GraphQLObjectType({
  name: "Intro",
  fields: () => ({
    name: { type: GraphQLString },
    specialization: { type: GraphQLString },
  }),
});

module.exports = Introduction;
