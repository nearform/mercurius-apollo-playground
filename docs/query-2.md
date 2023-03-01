
# QUERY 2

The test is done using `autocannon` with 10 connections a duration of 10 seconds.

## Query

```
query {
  users {
    id
    name
    addresses {
      id
      street
      city
      zip
    }
    posts {
      title
    }
  }
}
```
  
### Request responses (the higher the better)  
|                                                          | 1xx | 2xx   | 3xx | 4xx | 5xx |
| -------------------------------------------------------- | --- | ----- | --- | --- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 0   | 24855 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 8300  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7938  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 41994 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 5538  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 10006 | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 13367 | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 4.06    | 4.06  | 0.66   | 3   | 25  | 3    | 4   | 5     | 6   |
| 01-apollo-gateway-with-mercurius-services                | 11.52   | 11.52 | 2.01   | 10  | 41  | 10   | 11  | 15    | 17  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 12.13   | 12.13 | 1.82   | 10  | 38  | 10   | 11  | 16    | 17  |
| 03-apollo-router-with-mercurius-services                 | 2.14    | 2.14  | 0.65   | 1   | 24  | 1    | 2   | 3     | 4   |
| 04-apollo-gateway-with-apollo-services                   | 17.55   | 17.55 | 2.99   | 15  | 56  | 15   | 17  | 24    | 32  |
| 05-mercurius-gateway-with-apollo-services                | 9.53    | 9.53  | 1.4    | 8   | 30  | 8    | 9   | 13    | 13  |
| 06-apollo-router-with-apollo-services                    | 6.97    | 6.97  | 1.83   | 3   | 31  | 4    | 7   | 11    | 12  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 2260    | 2260    | 114.28 | 1936 | 2390 | 1936 | 2283 | 2391  | 2391 |
| 01-apollo-gateway-with-mercurius-services                | 830     | 830     | 47.54  | 690  | 850  | 690  | 850  | 850   | 850  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 793.8   | 793.8   | 29.08  | 721  | 824  | 721  | 799  | 824   | 824  |
| 03-apollo-router-with-mercurius-services                 | 3818.28 | 3818.28 | 176.98 | 3441 | 4089 | 3441 | 3853 | 4089  | 4089 |
| 04-apollo-gateway-with-apollo-services                   | 553.8   | 553.8   | 27.25  | 490  | 582  | 490  | 560  | 582   | 582  |
| 05-mercurius-gateway-with-apollo-services                | 1000.6  | 1000.6  | 51.72  | 860  | 1052 | 860  | 1010 | 1052  | 1052 |
| 06-apollo-router-with-apollo-services                    | 1336.7  | 1336.7  | 50.22  | 1282 | 1426 | 1282 | 1305 | 1426  | 1426 |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev    | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | --------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1536698.19 | 1536698.19 | 77801.73  | 1316480 | 1625200 | 1316863 | 1553407 | 1626111 | 1626111 |
| 01-apollo-gateway-with-mercurius-services                | 666675.2   | 666675.2   | 38179.69  | 554070  | 682550  | 554495  | 683007  | 683007  | 683007  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 637440     | 637440     | 23365.67  | 578963  | 661672  | 579071  | 642047  | 662015  | 662015  |
| 03-apollo-router-with-mercurius-services                 | 2409099.64 | 2409099.64 | 111569.68 | 2171271 | 2580159 | 2172927 | 2430975 | 2580479 | 2580479 |
| 04-apollo-gateway-with-apollo-services                   | 444672     | 444672     | 21915.83  | 393470  | 467346  | 393471  | 449791  | 467455  | 467455  |
| 05-mercurius-gateway-with-apollo-services                | 680396.8   | 680396.8   | 35110.07  | 584800  | 715360  | 585215  | 687103  | 715775  | 715775  |
| 06-apollo-router-with-apollo-services                    | 843417.6   | 843417.6   | 31728.15  | 808942  | 899806  | 808959  | 823807  | 900095  | 900095  |
    
    