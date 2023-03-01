import Fastify from 'fastify'
import mercuriusGateway from '@mercuriusjs/gateway'

export function buildMercuriusGateway() {
  const gateway = Fastify({
    logger: {
      level: 'fatal',
      transport: {
        target: 'pino-pretty'
      },
      disableRequestLogging: true
    }
  })

  gateway.register(mercuriusGateway, {
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
