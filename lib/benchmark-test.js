'use strict'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import autocannon from 'autocannon'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const duration = 10
const connections = 10

async function loadTest(query, resultsFolder, serverLabel) {
  return new Promise((resolve) => {
    const queryFile = fs.readFileSync(
      path.resolve(__dirname, '..', 'queries', `${query}.graphql`),
      'utf-8'
    )

    const queryString = JSON.stringify({ query: queryFile })

    const instance = autocannon(
      {
        url: 'http://127.0.0.1:4000/graphql',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: queryString,
        debug: false,
        connections, //default
        pipelining: 1, // default
        duration // default
      },
      (err, result) => {
        if (resultsFolder) {
          fs.mkdirSync(path.resolve(resultsFolder, serverLabel), {
            recursive: true
          })
          fs.writeFileSync(
            path.resolve(
              resultsFolder,
              serverLabel,
              `${query}-c${connections}-t${duration}.json`
            ),
            JSON.stringify(result, null, 2)
          )
        }
        resolve()
      }
    )

    // this is used to kill the instance on CTRL-C
    process.once('SIGINT', () => {
      instance.stop()
      throw new Error('Forced stop')
    })

    // just render results
    autocannon.track(instance, { renderProgressBar: true })
  })
}

export async function runTests(resultsFolder, serverLabel) {
  await loadTest('query-1', resultsFolder, serverLabel)
  await loadTest('query-2', resultsFolder, serverLabel)
  await loadTest('query-3', resultsFolder, serverLabel)
  await loadTest('query-4', resultsFolder, serverLabel)
}
