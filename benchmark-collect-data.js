import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import { fileURLToPath } from 'url'

import { runTests } from './lib/benchmark-test.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const setTimeoutAsync = promisify(setTimeout)

function startCommand(command) {
  const prc = exec(command)

  //noinspection JSUnresolvedFunction
  prc.stdout.setEncoding('utf8')
  prc.stdout.on('data', function (data) {
    var str = data.toString()
    var lines = str.split(/(\r?\n)/g)
    console.log(lines.join(''))
  })

  prc.on('close', function (code) {
    console.log('process exit code ' + code)
  })

  return prc
}

async function runTestOnServer(resultsFolder, path) {
  try {
    console.log('Start server: ', path)
    process.chdir(`src/${path}`)

    let prc1
    let prc2
    if (path.includes('apollo-router')) {
      prc1 = startCommand('npm run start:subgraphs')
      await setTimeoutAsync(2000)
      prc2 = startCommand('npm run start:gateway')
    } else {
      prc1 = startCommand('npm start')
    }
    await setTimeoutAsync(2000)
    console.log('Run test')
    await runTests(resultsFolder, path)
    console.log('Test done')

    prc1.kill('SIGINT')

    if (prc2) {
      prc2.kill('SIGINT')
    }
    process.chdir(`../../`)
    await setTimeoutAsync(3000)
  } catch (e) {
    console.log(e)
  }
}

const serverConfigurationFolders = [
  '00-mercurius-gateway-with-mercurius-services',
  '01-apollo-gateway-with-mercurius-services',
  '02-apollo-gateway-with-mercurius-services-and-supergraph',
  '03-apollo-router-with-mercurius-services',
  '04-apollo-gateway-with-apollo-services',
  '05-mercurius-gateway-with-apollo-services',
  '06-apollo-router-with-apollo-services'
]

async function run() {
  const resultsFolder = path.resolve(__dirname, 'results')

  for (const conf of serverConfigurationFolders) {
    await runTestOnServer(resultsFolder, conf)
  }
}

run()
