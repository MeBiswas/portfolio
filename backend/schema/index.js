const graphql = require("graphql");
// GQL Schemas
const AboutType = require("./about.schema");
const IntroductionType = require("./introduction.schema");
// Mongo Models
const Intro_model = require("../models/intro");
const About_model = require("../models/about");

const {
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "Get_Portfolio",
  fields: {
    intro: {
      type: IntroductionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Intro_model.findById(args.id);
      },
    },
    about: {
      type: AboutType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return About_model.findById(args.id);
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
        specialization: { type: new GraphQLNonNull(GraphQLString) },
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
      },
      resolve(parent, args) {
        let about = new About_model({
          title: args.title,
        });
        return about.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
