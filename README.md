# GraphQL federation: Mercurius + Apollo

Playground repro to explore Apollo and Mercurius integration.

Examples taken from [The GraphQL workshop](https://github.com/nearform/the-graphql-workshop).

## Requirements

- Node LTS

## Setup

- `npm ci`

## Available setups

Each setup exposes:

- 2 sub graphs servers at: `http://localhost:4001/graphql` and `http://localhost:4002/graphql`
- 1 federated server at: `http://localhost:4000`

### 00 - Mercurius gateway + Mercurius sub graphs [👉 📂](./src/00-mercurius-gateway-with-mercurius-services)

All infra managed by Mercurius.

### 01 - Apollo gateway + Mercurius sub graphs with runtime introspection [👉 📂](./src/01-apollo-gateway-with-mercurius-services)

Sub graphs running on Mercurius federated by Apollo Gateway with [runtime introspection](https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup#composing-subgraphs-with-introspectandcompose) (no static supergraph needed).

### 02 - Apollo gateway + Mercurius sub graphs with supergraph [👉 📂](./src/02-apollo-gateway-with-mercurius-services-and-supergraph)

Federate Mercurius sub graphs with Apollo gateway using a [pre-generated supergraph](https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup#composing-the-supergraph-schema).

The supergraph is created with [`@apollo/rover`](https://www.apollographql.com/docs/rover/) by:

- Running locally mercurius sub graphs (`01-apollo-gateway-with-mercurius-services`)
- Run `@apollo/rover` against them (`rover` if configured with `src/services/rover-config.yaml`) with `npm run generate:supergraph`

https://www.apollographql.com/docs/federation/building-supergraphs/supported-subgraphs/#javascript--typescript

### 03 - Apollo router + Mercurius sub graphs [👉 📂](./src/03-apollo-router-with-mercurius-services)

Federate Mercurius sub graphs with [Apollo router](https://www.apollographql.com/docs/router/) using a pre-generated supergraph.

Mercurius seems to [be officially supported](https://www.apollographql.com/docs/federation/building-supergraphs/supported-subgraphs/#javascript--typescript).

Apollo route is currently installed installed locally brutally (`npm run install:apollo-router`): we might consider dokerize it :)

### 04 - Apollo gateway with Apollo sub graphs [👉 📂](./src/04-apollo-gateway-with-apollo-services)

All infra managed by Apollo (just for the sake of completeness)

### 05 - Mercurius gateway with Apollo sub graphs [👉 📂](./src/05-mercurius-gateway-with-apollo-services)

Federate Apollo sub graphs with a Mercurius gateway.

## Extra info

Debug GQL request:

```
curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/ \
  --data '{"query":"query { me { posts { title } } }"}'
```
