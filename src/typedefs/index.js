import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Note {
    id: String
    title: String
    note: String
  }

  type Query {
    notes: [Note]
    note(id: String): Note
  }
`;

export default typeDefs;
