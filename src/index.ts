import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import mongoose from "mongoose";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

dotenv.config();

const { MONGO_CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5000;

async function startServer () {
  if (MONGO_CONNECTION_STRING) {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true
    });

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen(PORT).then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  } else {
    throw new Error("Missing Mongo connection string!");
  }
}

startServer();
