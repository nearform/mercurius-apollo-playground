import { createApolloService } from "../services/index.js";
import { userSubgraph } from '../services/userSubgraph.js'
import { postSubgraph } from '../services/postSubgraph.js'

async function start() {
  await createApolloService(4001, userSubgraph.schema, userSubgraph.resolvers)
  await createApolloService(4002, postSubgraph.schema, postSubgraph.resolvers)
}

start()
