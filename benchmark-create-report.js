import path from 'path'
import { fileURLToPath } from 'url'

import { createReports } from './lib/create-reports.js'
import { createCharts } from './lib/create-charts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function run() {
  const resultsFolder = path.resolve(__dirname, 'results')
  const docsFolder = path.resolve(__dirname, 'docs')
  const queriesFolder = path.resolve(__dirname, 'queries')

  await createReports({ resultsFolder, docsFolder, queriesFolder })
  await createCharts({ resultsFolder, docsFolder, queriesFolder })
}

run()
