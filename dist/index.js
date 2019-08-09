"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _apolloserver = require('apollo-server');
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _resolvers = require('./resolvers'); var _resolvers2 = _interopRequireDefault(_resolvers);
var _schemas = require('./schemas'); var _schemas2 = _interopRequireDefault(_schemas);

const { MONGO_CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5000;

async function startServer () {
  if (MONGO_CONNECTION_STRING) {
    await _mongoose2.default.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true
    });

    const server = new (0, _apolloserver.ApolloServer)({ typeDefs: _schemas2.default, resolvers: _resolvers2.default });

    server.listen(PORT).then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  } else {
    throw new Error("Missing Mongo connection string!");
  }
}

try {
  startServer();
} catch (err) {
  console.log(err);
}
