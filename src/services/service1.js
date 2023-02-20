import { users, addresses } from './data.js'

const service1 = {
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
      me: () => {
        return users.u1
      },
      users: () => {
        return Object.values(users)
      }
    },
    User: {
      __resolveReference: user => {
        return users[user.id]
      },
      addresses: (user) =>
        user.addresses.map(a => addresses[a])

    },
    Address: {
      __resolveReference: address => {
        return addresses[address.id]
      }
    }
  }
}

export { service1 }
