import { notes } from '../data/index.js';

const notesResolver = {
  Query: {
    notes: () => notes,
    note: (_root, args) => {
      return notes.find((note) => note.id === args.id);
    },
  },
};

export const resolvers = [notesResolver];
