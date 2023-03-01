import Fastify from "fastify";
import mercurius from "@mercuriusjs/federation";

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
    jit: 1
  });

  await service.listen({ port });

  console.log(`🚀 Subgraph ready at: http://localhost:${port}/graphql`);

  return service;
};

export { createMercuriusService };
