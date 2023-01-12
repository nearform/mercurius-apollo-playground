# GraphQL federation: Mercurius + Apollo

Playground repro to explore Apollo and Mercurius integration.

Examples taken from [The GraphQL workshop](https://github.com/nearform/the-graphql-workshop).

## Requirements

- Node LTS

## Setup

- `npm ci`

## Available setups

### 00 - Mercurius gateway + Mercurius sub graphs [👉 📂](./src/00-mercurius-gateway-with-mercurius-services)

All infra managed by Mercurius.

### 01 - Apollo gateway + Mercurius sub graphs with runtime introspection [👉 📂](./src/01-apollo-gateway-with-mercurius-services)

Sub graphs running on Mercurius federated by Apollo Gateway with [runtime introspection](https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup#composing-subgraphs-with-introspectandcompose) (no static supergraph needed).

### 02 - Apollo gateway + Mercurius sub graphs with supergraph [👉 📂](./src/02-apollo-gateway-with-mercurius-services-and-supergraph)

Federate Mercurius sub graphs with Apollo gateway using a [pre-generated supergraph](https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup#composing-the-supergraph-schema).

The supergraph is created with [`@apollo/rover`](https://www.apollographql.com/docs/rover/) by:

- Running locally mercurius sub graphs (`01-apollo-gateway-with-mercurius-services`)
- Run `@apollo/rover` against them (`rover` if configured with `src/services/rover-config.yaml`) with `npm run generate:supergraph`
