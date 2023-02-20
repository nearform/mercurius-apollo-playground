import Fastify from "fastify";
import mercurius from "mercurius";

const createMercuriusService = async (port, schema, resolvers) => {
  const service = Fastify({
    logger: {
      level: 'fatal',
      disableRequestLogging: true
    }
  });

  service.register(mercurius, {
    schema,
    resolvers,
    federationMetadata: true,
    jit: 1
  });
  const sss = await service.listen({ port });

  console.log(`🚀 Subgraph ready at: http://localhost:${port}/graphql`);

  return service;
};

export { createMercuriusService };
