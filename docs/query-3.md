
# QUERY 3

The test is done using `autocannon` with 10 connections a duration of 10 seconds.

## Query

```
query {
  users {
    id
    name
    posts {
      title
      author {
        addresses {
          city
          zip
        }
      }
    }
  }
}
```
  
### Request responses (the higher the better)  
|                                                          | 1xx | 2xx   | 3xx | 4xx | 5xx |
| -------------------------------------------------------- | --- | ----- | --- | --- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 0   | 15660 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 5680  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7341  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 33119 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 3999  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 7419  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 7468  | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 5.94    | 5.94  | 0.99   | 5   | 34  | 5    | 6   | 7     | 8   |
| 01-apollo-gateway-with-mercurius-services                | 17.11   | 17.11 | 3.21   | 14  | 56  | 14   | 17  | 24    | 32  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 13.14   | 13.14 | 1.73   | 11  | 27  | 11   | 12  | 17    | 19  |
| 03-apollo-router-with-mercurius-services                 | 2.82    | 2.82  | 0.83   | 1   | 30  | 2    | 3   | 4     | 5   |
| 04-apollo-gateway-with-apollo-services                   | 24.48   | 24.48 | 3.09   | 21  | 61  | 21   | 24  | 31    | 38  |
| 05-mercurius-gateway-with-apollo-services                | 14.31   | 14.31 | 1.79   | 12  | 36  | 13   | 14  | 19    | 19  |
| 06-apollo-router-with-apollo-services                    | 12.89   | 12.89 | 3.64   | 6   | 49  | 8    | 12  | 21    | 23  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 1566    | 1566    | 39.64  | 1500 | 1630 | 1500 | 1570 | 1630  | 1630 |
| 01-apollo-gateway-with-mercurius-services                | 568     | 568     | 22.2   | 535  | 604  | 535  | 566  | 604   | 604  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 734.1   | 734.1   | 25.78  | 670  | 768  | 670  | 737  | 768   | 768  |
| 03-apollo-router-with-mercurius-services                 | 3011.19 | 3011.19 | 129.66 | 2733 | 3223 | 2733 | 3007 | 3223  | 3223 |
| 04-apollo-gateway-with-apollo-services                   | 399.9   | 399.9   | 18.61  | 354  | 421  | 354  | 400  | 421   | 421  |
| 05-mercurius-gateway-with-apollo-services                | 674.46  | 674.46  | 20.02  | 621  | 700  | 621  | 677  | 700   | 700  |
| 06-apollo-router-with-apollo-services                    | 746.8   | 746.8   | 39.14  | 654  | 807  | 654  | 753  | 807   | 807  |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev   | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1066649.61 | 1066649.61 | 27043.88 | 1021500 | 1110030 | 1021951 | 1070079 | 1111039 | 1111039 |
| 01-apollo-gateway-with-mercurius-services                | 456678.4   | 456678.4   | 17801.19 | 430140  | 485616  | 430335  | 455167  | 485631  | 485631  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 1747251.2  | 1747251.2  | 61373.07 | 1594600 | 1827840 | 1595391 | 1754111 | 1828863 | 1828863 |
| 03-apollo-router-with-mercurius-services                 | 1400040.73 | 1400040.73 | 60087.86 | 1270845 | 1498695 | 1271807 | 1398783 | 1499135 | 1499135 |
| 04-apollo-gateway-with-apollo-services                   | 321510.41  | 321510.41  | 15005.27 | 284616  | 338484  | 284671  | 321791  | 338687  | 338687  |
| 05-mercurius-gateway-with-apollo-services                | 459275.64  | 459275.64  | 13651.99 | 422901  | 476700  | 422911  | 461055  | 476927  | 476927  |
| 06-apollo-router-with-apollo-services                    | 1548902.4  | 1548902.4  | 81169.62 | 1356396 | 1673718 | 1356799 | 1562623 | 1674239 | 1674239 |
    
    