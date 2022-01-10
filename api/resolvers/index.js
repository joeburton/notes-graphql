import { notes } from '../data/index.js';

const resolvers = {
  Query: {
    notes: () => notes,
    note: (_root, args) => {
      return notes.find((note) => note.id === args.id);
    },
  },
};

export default resolvers;
