import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import dotenv from "dotenv";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const { MONGO_URL } = process.env;
const PORT = process.env.PORT || 5000;

async function startServer () {
  if (MONGO_URL) {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true
    });

    const server = new ApolloServer({ typeDefs, resolvers });
    server.setGraphQLPath("/graphql");

    const { url } = await server.listen(PORT);
    console.log(`Server running at: ${url}`);
  } else {
    throw new Error("Missing Mongo connection string!");
  }
}

startServer();
