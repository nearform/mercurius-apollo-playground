
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 24649 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 7389  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7588  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 51378 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 5993  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 10160 | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 14082 | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 3.5     | 3.5   | 1.58   | 2   | 68  | 3    | 3   | 6     | 9   |
| 01-apollo-gateway-with-mercurius-services                | 13.04   | 13.04 | 4.24   | 10  | 108 | 10   | 12  | 21    | 23  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 12.67   | 12.67 | 5.05   | 10  | 141 | 10   | 12  | 19    | 22  |
| 03-apollo-router-with-mercurius-services                 | 1.63    | 1.63  | 1.33   | 1   | 91  | 1    | 2   | 3     | 3   |
| 04-apollo-gateway-with-apollo-services                   | 17.84   | 17.84 | 4.62   | 14  | 97  | 14   | 17  | 27    | 30  |
| 05-mercurius-gateway-with-apollo-services                | 9.37    | 9.37  | 2.92   | 7   | 81  | 7    | 8   | 15    | 17  |
| 06-apollo-router-with-apollo-services                    | 6.6     | 6.6   | 3.11   | 3   | 102 | 4    | 6   | 12    | 15  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 2465.5  | 2465.5  | 381.9  | 1382 | 2738 | 1382 | 2609 | 2739  | 2739 |
| 01-apollo-gateway-with-mercurius-services                | 738.9   | 738.9   | 104.89 | 468  | 831  | 468  | 770  | 831   | 831  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 758.8   | 758.8   | 117.35 | 468  | 871  | 468  | 798  | 871   | 871  |
| 03-apollo-router-with-mercurius-services                 | 4671.73 | 4671.73 | 435.96 | 3564 | 5248 | 3565 | 4739 | 5251  | 5251 |
| 04-apollo-gateway-with-apollo-services                   | 544.82  | 544.82  | 74.99  | 360  | 634  | 360  | 569  | 634   | 634  |
| 05-mercurius-gateway-with-apollo-services                | 1016    | 1016    | 143.57 | 660  | 1153 | 660  | 1061 | 1153  | 1153 |
| 06-apollo-router-with-apollo-services                    | 1408.2  | 1408.2  | 218.96 | 856  | 1604 | 856  | 1486 | 1604  | 1604 |

### Throughput (the higher the better)
|                                                          | average   | mean      | stddev   | min    | max    | 2.5%   | 50%    | 97.5%  | 99%    |
| -------------------------------------------------------- | --------- | --------- | -------- | ------ | ------ | ------ | ------ | ------ | ------ |
| 00-mercurius-gateway-with-mercurius-services             | 581772.81 | 581772.81 | 90049.88 | 326152 | 646168 | 326399 | 615935 | 646655 | 646655 |
| 01-apollo-gateway-with-mercurius-services                | 264505.6  | 264505.6  | 37572.79 | 167544 | 297498 | 167551 | 275711 | 297727 | 297727 |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 271641.6  | 271641.6  | 42025.27 | 167544 | 311818 | 167551 | 285695 | 312063 | 312063 |
| 03-apollo-router-with-mercurius-services                 | 873402.19 | 873402.19 | 81517.35 | 666468 | 981376 | 666623 | 886271 | 981503 | 981503 |
| 04-apollo-gateway-with-apollo-services                   | 195045.82 | 195045.82 | 26847.5  | 128880 | 226972 | 128895 | 203775 | 227071 | 227071 |
| 05-mercurius-gateway-with-apollo-services                | 239769.6  | 239769.6  | 33901.39 | 155760 | 272108 | 155775 | 250495 | 272127 | 272127 |
| 06-apollo-router-with-apollo-services                    | 263340.8  | 263340.8  | 40949.71 | 160072 | 299948 | 160127 | 278015 | 300031 | 300031 |
    
    