import Fastify from 'fastify'
import mercurius from 'mercurius'

const createMercuriusService = async (port, schema, resolvers) => {
  const service = Fastify()

  service.register(mercurius, {
    schema,
    resolvers,
    federationMetadata: true,
    graphiql: true,
    jit: 1
  })
  const sss = await service.listen({ port })

  console.log(`🚀 Subgraph ready at: http://localhost:${port}/graphiql`)

  return service
}

export { createMercuriusService }
