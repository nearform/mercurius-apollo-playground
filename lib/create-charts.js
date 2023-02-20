import path from 'path'
import fsPromises from 'fs/promises'
import { ChartJSNodeCanvas } from 'chartjs-node-canvas'
import { loadData } from './load-data.js'
import fs from 'fs'

const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(75, 102, 255, 0.2)'
]

const borderColor = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(153, 159, 64, 1)'
]

const queryLabels = {
  'query-1.graphql': 'Query 1',
  'query-2.graphql': 'Query 2',
  'query-3.graphql': 'Query 3',
  'query-4.graphql': 'Query 4'
}

const stringLabels = {
  '00-mercurius-gateway-with-mercurius-services': 'Mercurius/Mercurius',
  '01-apollo-gateway-with-mercurius-services': 'A.Gateway/Mercurius',
  '02-apollo-gateway-with-mercurius-services-and-supergraph':
    'A.Gateway/Mercurius/SuperG',
  '03-apollo-router-with-mercurius-services': 'A.Router/Mercurius',
  '04-apollo-gateway-with-apollo-services': 'A.Gateway/Apollo',
  '05-mercurius-gateway-with-apollo-services': 'Mercurius/Apollo',
  '06-apollo-router-with-apollo-services': 'A.Router/Apollo'
}

async function saveChart({
  sources,
  subfield1,
  subfield2,
  title,
  fileName,
  docsFolder
}) {
  const labels = Object.keys(sources).sort((a, b) => (a > b ? 1 : -1))

  const datasets = labels.map((label, index) => ({
    label: stringLabels[label],
    data: Object.values(sources[label]).map(d => d[subfield1][subfield2]),
    borderWidth: 1,
    stack: `Stack ${index}`,
    backgroundColor: backgroundColor[index],
    borderColor: borderColor[index]
  }))

  const configuration = {
    type: 'bar',
    data: {
      labels: Object.values(queryLabels),
      datasets
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title
        }
      },
      responsive: true,
      interaction: {
        intersect: false
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      }
    }
  }

  const width = 800 //px
  const height = 600 //px
  const backgroundColour = 'white' // Uses https://www.w3schools.com/tags/canvas_fillstyle.asp
  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width,
    height,
    backgroundColour
  })

  const buffer = await chartJSNodeCanvas.renderToBuffer(configuration)
  await fsPromises.writeFile(
    path.resolve(docsFolder, fileName),
    buffer,
    'base64'
  )
}

export async function createCharts({
  resultsFolder,
  docsFolder,
  queriesFolder
}) {
  const { sources, queries } = await loadData(resultsFolder)

  await saveChart({
    sources,
    subfield1: 'requests',
    subfield2: 'total',
    title: 'Total Request 30 seconds 10 connection 1 pipeline',
    fileName: 'total-requests.png',
    docsFolder
  })

  await saveChart({
    sources,
    subfield1: 'requests',
    subfield2: 'average',
    title: 'Request/Second average',
    fileName: 'average-request-seconds.png',
    docsFolder
  })

  await saveChart({
    sources,
    subfield1: 'latency',
    subfield2: 'average',
    title: 'Latency/Second average',
    fileName: 'average-latency-seconds.png',
    docsFolder
  })

  let queriesContent = ''
  for(const queryFileName in queryLabels) {
    const queryContent = fs
      .readFileSync(path.resolve(queriesFolder, queryFileName), 'utf-8')
      .trim()

    queriesContent += `
### ${queryLabels[queryFileName]}
\`\`\`
${queryContent}
\`\`\`
`
  }

  const output = `
# Performance charts by query

The following charts groups the different queries used in the test.

 
## Queries

${queriesContent}

## Charts

### Latency Average

![Latency average](average-latency-seconds.png "Latency average")

### Average requests per seconds

![Average requests](average-request-seconds.png "Average requests")

### Total requests

![Total requests](total-requests.png "Total requests")
`

  fs.writeFileSync(path.resolve(docsFolder, 'charts.md'), output)
}
