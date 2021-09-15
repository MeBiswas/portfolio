const graphql = require("graphql");

const { GraphQLString, GraphQLObjectType } = graphql;

const AboutType = new GraphQLObjectType({
  name: "About",
  fields: () => ({
    title: { type: GraphQLString },
  }),
});

module.exports = AboutType;
