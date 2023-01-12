import Fastify from 'fastify'
import mercurius from 'mercurius'

export function buildMercuriusGateway() {
  const gateway = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  gateway.register(mercurius, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        {
          name: 'user',
          url: 'http://localhost:4001/graphql'
        },
        {
          name: 'post',
          url: 'http://localhost:4002/graphql'
        }
      ]
    }
  })

  return {
    listen: async ({ port }) => {
      await gateway.listen({ port })
      console.log(
        `🚀 Graphql gateway ready at http://localhost:${port}/graphql`
      )
    }
  }

  return gateway
}
