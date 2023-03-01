import path from 'path'
import fs from 'fs'
import { markdownTable } from 'markdown-table'
import { loadData } from './load-data.js'

const sources = {}

const headings = [
  '',
  'average',
  'mean',
  'stddev',
  'min',
  'max',
  '2.5%',
  '50%',
  '97.5%',
  '99%'
]

function requestStatusStats(sources, query) {
  //

  const rows = Object.entries(sources).map(([key, value]) => [
    key,
    value[query]['1xx'],
    value[query]['2xx'],
    value[query]['3xx'],
    value[query]['4xx'],
    value[query]['5xx']
  ])

  const successRateTable = markdownTable([
    ['', '1xx', '2xx', '3xx', '4xx', '5xx'],
    ...rows
  ])

  return successRateTable.toString()
}

function getMarkdownTable(sources, query, attribute) {
  const rows = Object.entries(sources).map(([key, value]) => [
    key,
    value[query][attribute]['average'],
    value[query][attribute]['mean'],
    value[query][attribute]['stddev'],
    value[query][attribute]['min'],
    value[query][attribute]['max'],
    value[query][attribute]['p2_5'],
    value[query][attribute]['p50'],
    value[query][attribute]['p97_5'],
    value[query][attribute]['p99']
  ])

  return markdownTable([headings, ...rows]).toString()
}

function latencyStats(sources, query) {
  const markdownTable = getMarkdownTable(sources, query, 'latency')
  return markdownTable.toString()
}

function requestStats(sources, query) {
  const markdownTable = getMarkdownTable(sources, query, 'requests')
  return markdownTable.toString()
}

function throughputStats(sources, query) {
  const markdownTable = getMarkdownTable(sources, query, 'throughput')
  return markdownTable.toString()
}

async function createQueryReport({
  sources,
  query,
  docsFolder,
  queriesFolder
}) {

  const queryFile = query.split('-').slice(0,2).join('-')
  const queryTitle = query.split('-').slice(0,2).join(' ').toUpperCase().trim()

  const connections =query.split('-')[2].substring(1)
  const duration =query.split('-')[3].split('.')[0].substring(1)

  const queryContent = fs.readFileSync(
    path.resolve(queriesFolder, `${queryFile}.graphql`),
    'utf-8'
  ).trim()

  const output = `
# ${queryTitle}

The test is done using \`autocannon\` with ${connections} connections a duration of ${duration} seconds.

## Query

\`\`\`
${queryContent}
\`\`\`
  
### Request responses (the higher the better)  
${requestStatusStats(sources, query)}

### Latency (the lower the better)
${latencyStats(sources, query)}

### Requests (the higher the better)
${requestStats(sources, query)}

### Throughput (the higher the better)
${throughputStats(sources, query)}
    
    `

  fs.writeFileSync(path.resolve(docsFolder, `${queryFile}.md`), output)
}

export async function createReports({
  resultsFolder,
  docsFolder,
  queriesFolder
}) {
  const { sources, queries } = await loadData(resultsFolder)

  for (const query of queries) {
    await createQueryReport({ sources, query, docsFolder, queriesFolder })
  }
}
