const typeDefNotes = `
  extend type Query {
    notes: [Note]
    note(id: String): Note
  }

  type Note {
    id: String
    title: String
    note: String
  }
`;

const typeDef = `
  type Query
`;

export const typeDefs = [typeDef, typeDefNotes];
