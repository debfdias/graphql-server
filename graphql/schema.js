import { gql } from "apollo-server-express";

export default {
  resolvers: {
    Query: {
      hello: () => "world",
    },
  },
};
