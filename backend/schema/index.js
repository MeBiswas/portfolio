const graphql = require("graphql");
// DB Models
const Intro_model = require("../models/intro");
const About_model = require("../models/about");
const Skills_model = require("../models/skills");
const Profile_model = require("../models/profile");
// GQL Schemas
const IntroductionType = require("./introduction.schema");
const { AboutType, SkillsType, ProfileType } = require("./about.schema");

const {
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType,
} = graphql;

const RootQuery = new GraphQLObjectType({
	name: "Get_Portfolio",
	fields: {
		intro: {
			type: new GraphQLList(IntroductionType),
			resolve(parent, args) {
				return Intro_model.find({});
			},
		},
		about: {
			type: new GraphQLList(AboutType),
			resolve(parent, args) {
				return About_model.find({});
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutate_Portfolio",
	fields: {
		addIntro: {
			type: IntroductionType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				specialization: {
					type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
				},
			},
			resolve(parent, args) {
				let intro = new Intro_model({
					name: args.name,
					specialization: args.specialization,
				});
				return intro.save();
			},
		},
		addAbout: {
			type: AboutType,
			args: {
				title: { type: new GraphQLNonNull(GraphQLString) },
				profileTitle: { type: new GraphQLNonNull(GraphQLString) },
				skillsTitle: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let about = new About_model({
					title: args.title,
					profileTitle: args.profileTitle,
					skillsTitle: args.skillsTitle,
				});
				return about.save();
			},
		},
		addProfile: {
			type: ProfileType,
			args: {
				dob: { type: new GraphQLNonNull(GraphQLString) },
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				website: { type: new GraphQLNonNull(GraphQLString) },
				job: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
			},
			resolve(parent, args) {
				let profile = new Profile_model({
					dob: args.dob,
					job: args.job,
					name: args.name,
					email: args.email,
					website: args.website,
				});
				return profile.save();
			},
		},
		addSkills: {
			type: SkillsType,
			args: {
				skill: { type: new GraphQLNonNull(GraphQLString)},
				proficiency: {type: new GraphQLNonNull(GraphQLInt)},
			},
			resolve(parent, args) {
				let skills = new Skills_model({
					skill: args.skill,
					proficiency: args.proficiency,
				});
				return skills.save();
			}
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
