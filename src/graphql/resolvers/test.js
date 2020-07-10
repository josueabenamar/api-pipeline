export const resolvers = {
  Query: {
    Test: async (_, __, { dataSources }) => {
      return dataSources.testAPI.testService()
    }
  },

  Mutation: {}
}
