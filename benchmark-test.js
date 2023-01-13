'use strict'

import autocannon from 'autocannon'

async function loadTest() {
  const instance = autocannon(
    {
      url: 'http://127.0.0.1:4000/graphql',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: '{"query":"query { me { posts { title } } }"}',
      debug: true
    },
    console.log
  )

  // this is used to kill the instance on CTRL-C
  process.once('SIGINT', () => {
    instance.stop()
  })

  // just render results
  autocannon.track(instance, { renderProgressBar: true })
}

loadTest()
