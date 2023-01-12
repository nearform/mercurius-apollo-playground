import { buildApolloGateway } from '../buildApolloGateway.js'
import { createMercuriusService } from '../services/index.js'
import { service1 } from '../services/service1.js'
import { service2 } from '../services/service2.js'

async function start() {
  await createMercuriusService(4001, service1.schema, service1.resolvers)
  await createMercuriusService(4002, service2.schema, service2.resolvers)

  const gateway = buildApolloGateway()
  await gateway.listen({ port: 4000 })
}

start()
