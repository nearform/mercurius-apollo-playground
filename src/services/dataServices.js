const users = {
  u1: {
    id: 'u1',
    name: 'John',
    addresses: ['a1', 'a4']
  },
  u2: {
    id: 'u2',
    name: 'Jane',
    addresses: ['a2']
  },
  u3: {
    id: 'u3',
    name: 'Jack',
    addresses: ['a3']
  }
}

const addresses = {
  a1: {
    id: 'a1',
    street: 'First Ave',
    zip: '12345',
    city: 'New york'
  },
  a2: {
    id: 'a2',
    street: 'Second Ave',
    zip: '12345',
    city: 'New york'
  },
  a3: {
    id: 'a3',
    street: 'Third Ave',
    zip: '12345',
    city: 'New york'
  },
  a4: {
    id: 'a4',
    street: 'Forth Ave',
    zip: '12345',
    city: 'New york'
  }
}

const posts = {
  p1: {
    id: 'p1',
    title: 'Post 1',
    content: 'Content 1',
    authorId: 'u1'
  },
  p2: {
    id: 'p2',
    title: 'Post 2',
    content: 'Content 2',
    authorId: 'u2'
  },
  p3: {
    id: 'p3',
    title: 'Post 3',
    content: 'Content 3',
    authorId: 'u1'
  },
  p4: {
    id: 'p4',
    title: 'Post 4',
    content: 'Content 4',
    authorId: 'u2'
  }
}

function getLoggedUser() {
  return users.u1
}

function getUsers() {
  return Object.values(users)
}

function getUserById(userId) {
  return users[userId]
}

function getAddresses(user) {
  return user.addresses.map(a => addresses[a])
}

function getAddressById(addressId) {
  return addresses[addressId]
}

function getPostsByUserId(userId) {
  return Object.values(posts).filter(p => p.authorId === userId)
}

function getPosts() {
  return Object.values(posts)
}

export {
  getUserById,
  getLoggedUser,
  getUsers,
  getAddresses,
  getAddressById,
  getPostsByUserId,
  getPosts
}
