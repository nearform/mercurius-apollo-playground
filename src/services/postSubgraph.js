import { getPostsByUserId, getPosts } from './dataServices.js'

const postSubgraph = {
  schema: `
  extend type Query {
    posts: [Post]
  }
  
  type Post @key(fields: "id") {
    id: ID!
    title: String
    content: String
    author: User
  }

  type User @key(fields: "id") @extends {
    id: ID! @external
    name: String @external
    posts: [Post]
  }
`,
  resolvers: {
    Query: {
      posts: (parent, args, context) => {
        // Get the posts from a service
        return getPosts()
      }
    },
    Post: {
      author: post => {
        return {
          __typename: 'User',
          id: post.authorId
        }
      }
    },
    User: {
      posts: user => {
        return getPostsByUserId(user.id)
      }
    }
  }
}

export { postSubgraph }
