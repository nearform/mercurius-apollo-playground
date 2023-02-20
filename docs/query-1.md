
# QUERY 1

The test is done using `autocannon` with 10 connections a duration of 10 seconds.

## Query

```
query {
  me {
    posts {
      title
    }
  }
}
```
  
### Request responses (the higher the better)  
|                                                          | 1xx | 2xx   | 3xx | 4xx | 5xx |
| -------------------------------------------------------- | --- | ----- | --- | --- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 0   | 24710 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 7581  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7359  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 53139 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 5411  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 11325 | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 15721 | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 3.48    | 3.48  | 1.54   | 3   | 64  | 3    | 3   | 6     | 8   |
| 01-apollo-gateway-with-mercurius-services                | 12.69   | 12.69 | 4.48   | 9   | 116 | 10   | 12  | 19    | 22  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 13.08   | 13.08 | 5.43   | 10  | 156 | 10   | 13  | 19    | 25  |
| 03-apollo-router-with-mercurius-services                 | 1.51    | 1.51  | 1.34   | 1   | 91  | 1    | 1   | 3     | 4   |
| 04-apollo-gateway-with-apollo-services                   | 17.99   | 17.99 | 4.67   | 14  | 99  | 14   | 17  | 29    | 34  |
| 05-mercurius-gateway-with-apollo-services                | 9.23    | 9.23  | 2.84   | 7   | 91  | 7    | 8   | 15    | 17  |
| 06-apollo-router-with-apollo-services                    | 6.49    | 6.49  | 3.04   | 3   | 103 | 4    | 6   | 12    | 14  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 2471.7  | 2471.7  | 342.72 | 1480 | 2706 | 1480 | 2599 | 2707  | 2707 |
| 01-apollo-gateway-with-mercurius-services                | 758.1   | 758.1   | 104.41 | 491  | 860  | 491  | 789  | 860   | 860  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 735.9   | 735.9   | 109.78 | 459  | 859  | 459  | 742  | 859   | 859  |
| 03-apollo-router-with-mercurius-services                 | 4830.82 | 4830.82 | 520.46 | 3514 | 5514 | 3515 | 4979 | 5515  | 5515 |
| 04-apollo-gateway-with-apollo-services                   | 541.1   | 541.1   | 77.52  | 351  | 618  | 351  | 549  | 618   | 618  |
| 05-mercurius-gateway-with-apollo-services                | 1029.55 | 1029.55 | 148.04 | 627  | 1144 | 627  | 1104 | 1144  | 1144 |
| 06-apollo-router-with-apollo-services                    | 1429.19 | 1429.19 | 212.88 | 860  | 1628 | 860  | 1517 | 1628  | 1628 |

### Throughput (the higher the better)
|                                                          | average   | mean      | stddev   | min    | max     | 2.5%   | 50%    | 97.5%   | 99%     |
| -------------------------------------------------------- | --------- | --------- | -------- | ------ | ------- | ------ | ------ | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 583155.2  | 583155.2  | 80833.25 | 349280 | 638616  | 349439 | 613375 | 638975  | 638975  |
| 01-apollo-gateway-with-mercurius-services                | 271417.6  | 271417.6  | 37372.23 | 175778 | 307880  | 175871 | 282623 | 307967  | 307967  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 263462.41 | 263462.41 | 39326.27 | 164322 | 307522  | 164351 | 265727 | 307711  | 307711  |
| 03-apollo-router-with-mercurius-services                 | 903284.37 | 903284.37 | 97339.78 | 657118 | 1031118 | 657407 | 930815 | 1031167 | 1031167 |
| 04-apollo-gateway-with-apollo-services                   | 193718.4  | 193718.4  | 27749.6  | 125658 | 221244  | 125695 | 196607 | 221311  | 221311  |
| 05-mercurius-gateway-with-apollo-services                | 242978.91 | 242978.91 | 34918.99 | 147972 | 269984  | 148095 | 260607 | 270079  | 270079  |
| 06-apollo-router-with-apollo-services                    | 267287.28 | 267287.28 | 39817.96 | 160820 | 304436  | 160895 | 283903 | 304639  | 304639  |
    
    