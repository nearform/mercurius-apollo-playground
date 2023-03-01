import {
  getLoggedUser,
  getUsers,
  getAddressById,
  getAddresses,
  getUserById
} from './dataServices.js'

const userSubgraph = {
  schema: `
  extend type Query {
    me: User
    users: [User]
  }
  
  type User @key(fields: "id") {
    id: ID!
    name: String!
    addresses: [Address]
  }
  
  type Address {
    id: ID!
    street: String
    city: String
    zip: String
  }
  `,

  resolvers: {
    Query: {
      me: (parent, params, context) => {
        return getLoggedUser(context.auth)
      },
      users: () => {
        return getUsers()
      }
    },
    User: {
      // The subgraph service should implement a resolver to expose the entities data
      // https://www.apollographql.com/docs/apollo-server/using-federation/api/apollo-subgraph/#__resolvereference
      __resolveReference: user => {
        return getUserById(user.id)
      },
      addresses: user => {
        return getAddresses(user)
      }
    },
    Address: {
      // The subgraph service should implement a resolver to expose the entities data
      // https://www.apollographql.com/docs/apollo-server/using-federation/api/apollo-subgraph/#__resolvereference
      __resolveReference: address => {
        return getAddressById(address.id)
      }
    }
  }
}

export { userSubgraph }
