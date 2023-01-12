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
  await service.listen({ port })

  return service
}

export { createMercuriusService }
