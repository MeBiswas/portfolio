const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema/index");
const { graphqlHTTP } = require("express-graphql");

const app = express();

// Cross-Origin Connection Handler
app.use(cors());

// Mongoose Driver
const uri =
  "mongodb+srv://abhi:neversharesecrets@cluster0.b9yog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

// Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Listening to Server
app.listen(4000, () => {
  console.log("Server up and running");
});
