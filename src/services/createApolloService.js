import gql from 'graphql-tag'
import { ApolloServer } from '@apollo/server'
import { buildSubgraphSchema } from '@apollo/subgraph'
import { startStandaloneServer } from '@apollo/server/standalone'

const createApolloService = async (port, typeDefs, resolvers) => {
  const service = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs: gql`
        ${typeDefs}
      `,
      resolvers
    }),
    resolvers
  })

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(service, {
    listen: { port }
  })

  console.log(`🚀  Server ready at: ${url}`)
}

export { createApolloService }
