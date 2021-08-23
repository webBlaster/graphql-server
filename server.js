const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");

// schema
const schema = buildSchema(`type Query {
message:String
}`);

//Root resolver
const root = {
  message: () => "Hello World!",
};

//Create express server and a GraphQl endpoint
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5000, () =>
  console.log("Express GraphQl Server Running on localhost:5000/graphql")
);
