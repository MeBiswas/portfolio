const graphql = require("graphql");

const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLSchema } = graphql;

const IntroductionType = new GraphQLObjectType({
	name: "Portfolio",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		portfolio: [{ type: GraphQLString }],
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		intro: {
			type: IntroductionType,
			args: { id: { type: GraphQLID } },
      resolve(parent, args) {

      }
		},
	},
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
