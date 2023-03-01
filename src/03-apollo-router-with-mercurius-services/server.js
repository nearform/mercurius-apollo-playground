import { createMercuriusService } from '../services/index.js'
import { userSubgraph } from '../services/userSubgraph.js'
import { postSubgraph } from '../services/postSubgraph.js'

async function start() {
  await createMercuriusService(4001, userSubgraph.schema, userSubgraph.resolvers)
  await createMercuriusService(4002, postSubgraph.schema, postSubgraph.resolvers)
}

start()
