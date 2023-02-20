import path from 'path'
import fs from 'fs'

export async function loadData(resultsFolder) {
  const serviceConfigurations = fs.readdirSync(resultsFolder)

  let queries

  const sources = {}

  serviceConfigurations.forEach(serviceConfiguration => {
    sources[serviceConfiguration] = {}
    const queryTestResults = fs.readdirSync(
      path.resolve(resultsFolder, serviceConfiguration)
    )
    queries = queryTestResults

    queryTestResults.forEach(queryTestResult => {
      sources[serviceConfiguration][queryTestResult] = JSON.parse(
        fs.readFileSync(
          path.resolve(resultsFolder, serviceConfiguration, queryTestResult),
          'utf-8'
        )
      )
    })
  })

  return { sources, queries }
}
