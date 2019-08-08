import { ApolloServer } from "apollo-server"

import resolvers from "./resolvers"
import typeDefs from "./schemas"

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3030).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
