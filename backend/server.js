const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const app = express();
// Middleware
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: false
	})
);

app.listen(4000, () => {
	console.log("Server up and running");
});
