import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloGateway } from '@apollo/gateway'
import { readFileSync } from 'fs'

export function buildApolloGatewaySuperSchema() {
  const supergraphSdl = readFileSync(
    '../services/supergraph.graphql'
  ).toString()

  // Initialize an ApolloGateway instance and pass it
  // the supergraph schema as a string
  const gateway = new ApolloGateway({
    supergraphSdl
  })

  // Pass the ApolloGateway to the ApolloServer constructor
  const server = new ApolloServer({
    gateway
  })

  return {
    listen: async ({ port }) => {
      // Note the top-level `await`!
      const { url } = await startStandaloneServer(server, { port })
      console.log(`🚀  Server ready at ${url}`)
    }
  }
}
