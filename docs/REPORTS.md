# Benchmarks

### Create a new report
1. Collect the benchmark data with `npm run collect-data`
2. Generate the report with  `npm run create-report`

The report is created in the `docs` folder and is available from the links below

The test is done using 4 queries with different level of complexity 
The GQL resolvers do not use any external resource (eg. a database).

The results should not be considered as an absolute value. 
The test as mentioned is done on a mocked system without the typical production environment, eg database access and cache layers.

* [Query 1](query-1.md)
* [Query 2](query-2.md)
* [Query 3](query-3.md)
* [Query 4](query-4.md)
* [Charts](charts.md)

### Env info

The benchmarks are run on a MacBook with the following specs:

* Model Name:	MacBook Pro
* Processor Name:	6-Core Intel Core i7
* Processor Speed:	2,6 GHz
* Number of Processors:	1
* Total Number of Cores:	6
* L2 Cache (per Core):	256 KB
* L3 Cache:	9 MB
* Hyper-Threading Technology:	Enabled
* Memory:	32 GB
