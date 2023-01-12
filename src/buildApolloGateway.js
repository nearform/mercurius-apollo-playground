import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway'

export function buildApolloGateway() {
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'user', url: 'http://localhost:4001/graphql' },
        { name: 'post', url: 'http://localhost:4002/graphql' }
      ]
    })
  })

  // Pass the ApolloGateway to the ApolloServer constructor
  const server = new ApolloServer({
    gateway
  })

  return {
    listen: async ({ port }) => {
      // Note the top-level `await`!
      const { url } = await startStandaloneServer(server, { port })
      console.log(`🚀 Graphql gateway ready at ${url}`)
    }
  }
}
