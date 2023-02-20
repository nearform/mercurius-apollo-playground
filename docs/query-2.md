
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 26154 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 7806  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 8184  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 42895 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 5694  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 9688  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 13450 | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 3.65    | 3.65  | 0.84   | 3   | 24  | 3    | 4   | 5     | 6   |
| 01-apollo-gateway-with-mercurius-services                | 12.29   | 12.29 | 2.24   | 10  | 40  | 10   | 12  | 17    | 19  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 11.71   | 11.71 | 1.94   | 10  | 39  | 10   | 11  | 15    | 17  |
| 03-apollo-router-with-mercurius-services                 | 2.09    | 2.09  | 0.64   | 1   | 26  | 1    | 2   | 3     | 4   |
| 04-apollo-gateway-with-apollo-services                   | 17.03   | 17.03 | 2.29   | 15  | 45  | 15   | 17  | 22    | 26  |
| 05-mercurius-gateway-with-apollo-services                | 9.88    | 9.88  | 1.55   | 8   | 38  | 8    | 9   | 13    | 15  |
| 06-apollo-router-with-apollo-services                    | 6.92    | 6.92  | 1.84   | 3   | 35  | 4    | 7   | 11    | 12  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 2378.28 | 2378.28 | 159.32 | 1921 | 2531 | 1921 | 2419 | 2531  | 2531 |
| 01-apollo-gateway-with-mercurius-services                | 780.6   | 780.6   | 39.36  | 685  | 840  | 685  | 789  | 840   | 840  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 818.4   | 818.4   | 42.82  | 711  | 870  | 711  | 824  | 870   | 870  |
| 03-apollo-router-with-mercurius-services                 | 3900.55 | 3900.55 | 204.05 | 3654 | 4261 | 3655 | 3885 | 4263  | 4263 |
| 04-apollo-gateway-with-apollo-services                   | 569.4   | 569.4   | 22.65  | 510  | 602  | 510  | 572  | 602   | 602  |
| 05-mercurius-gateway-with-apollo-services                | 968.8   | 968.8   | 49.51  | 869  | 1021 | 869  | 979  | 1021  | 1021 |
| 06-apollo-router-with-apollo-services                    | 1345    | 1345    | 41.95  | 1249 | 1400 | 1249 | 1349 | 1400  | 1400 |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev    | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | --------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1616756.37 | 1616756.37 | 108265.49 | 1306280 | 1721080 | 1306623 | 1645567 | 1721343 | 1721343 |
| 01-apollo-gateway-with-mercurius-services                | 626790.4   | 626790.4   | 31569.32  | 550055  | 674520  | 550399  | 633855  | 674815  | 674815  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 657203.2   | 657203.2   | 34363.14  | 570933  | 698610  | 571391  | 662015  | 698879  | 698879  |
| 03-apollo-router-with-mercurius-services                 | 2460299.64 | 2460299.64 | 128524.54 | 2305674 | 2688691 | 2306047 | 2451455 | 2689023 | 2689023 |
| 04-apollo-gateway-with-apollo-services                   | 457267.2   | 457267.2   | 18218.52  | 409530  | 483406  | 409599  | 459519  | 483583  | 483583  |
| 05-mercurius-gateway-with-apollo-services                | 658892.81  | 658892.81  | 33700.5   | 590920  | 694280  | 591359  | 666111  | 694783  | 694783  |
| 06-apollo-router-with-apollo-services                    | 848691.2   | 848691.2   | 26491.19  | 788119  | 883400  | 788479  | 851455  | 883711  | 883711  |
    
    