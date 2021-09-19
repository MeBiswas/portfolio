const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const WorkExpType = new GraphQLObjectType({
	name: "work_exp",
	fields: () => ({
		company: { type: GraphQLString },
		experience: { type: GraphQLString },
		designation: { type: GraphQLString },
		description: { type: GraphQLString },
	}),
});

const EducationType = new GraphQLObjectType({
	name: "education",
	fields: () => ({
		course: { type: GraphQLString },
		duration: { type: GraphQLString },
		Institution: { type: GraphQLString },
		description: { type: GraphQLString },
	}),
});

const ResumeType = new GraphQLObjectType({
	name: "Resume",
	fields: () => ({
		title: { type: GraphQLString },
		work_exp: { type: WorkExpType },
		education: { type: EducationType },
	}),
});

module.exports = ResumeType;
