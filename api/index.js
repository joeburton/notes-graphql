import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typedefs/index.js';
import resolvers from './resolvers/index.js';

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const httpServer = createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 3000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);

  return { server, app };
}

startServer();

export const config = {
  api: {
    bodyParser: false,
  },
};
