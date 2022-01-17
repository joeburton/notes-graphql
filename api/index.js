import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typedefs/index.js';
import resolvers from './resolvers/index.js';

const app = express();

app.use(cors());
app.use(express.json());

const httpServer = createServer(app);

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

// Export the http server so that Vercel can start it:
export default httpServer;
