
# QUERY 4

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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 16338 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 5541  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7090  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 32687 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 3909  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 6549  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 7604  | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 6.31    | 6.31  | 0.76   | 5   | 17  | 6    | 6   | 8     | 9   |
| 01-apollo-gateway-with-mercurius-services                | 17.51   | 17.51 | 2.78   | 15  | 56  | 15   | 17  | 23    | 29  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 13.57   | 13.57 | 1.83   | 12  | 29  | 12   | 13  | 17    | 18  |
| 03-apollo-router-with-mercurius-services                 | 2.86    | 2.86  | 0.67   | 1   | 15  | 2    | 3   | 4     | 4   |
| 04-apollo-gateway-with-apollo-services                   | 25.07   | 25.07 | 2.89   | 21  | 58  | 22   | 24  | 30    | 35  |
| 05-mercurius-gateway-with-apollo-services                | 14.74   | 14.74 | 1.81   | 13  | 39  | 13   | 14  | 19    | 20  |
| 06-apollo-router-with-apollo-services                    | 12.65   | 12.65 | 3.18   | 7   | 34  | 8    | 12  | 20    | 22  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 1485.28 | 1485.28 | 52.61  | 1365 | 1550 | 1365 | 1498 | 1550  | 1550 |
| 01-apollo-gateway-with-mercurius-services                | 554.1   | 554.1   | 12.02  | 531  | 570  | 531  | 552  | 570   | 570  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 709     | 709     | 16.8   | 683  | 745  | 683  | 706  | 745   | 745  |
| 03-apollo-router-with-mercurius-services                 | 2971.91 | 2971.91 | 56.23  | 2889 | 3064 | 2889 | 2967 | 3065  | 3065 |
| 04-apollo-gateway-with-apollo-services                   | 390.9   | 390.9   | 20.27  | 339  | 416  | 339  | 391  | 416   | 416  |
| 05-mercurius-gateway-with-apollo-services                | 654.9   | 654.9   | 30.93  | 570  | 689  | 570  | 659  | 689   | 689  |
| 06-apollo-router-with-apollo-services                    | 760.4   | 760.4   | 28.98  | 711  | 815  | 711  | 761  | 815   | 815  |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev   | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1461480.73 | 1461480.73 | 51681.98 | 1343160 | 1525200 | 1343487 | 1474559 | 1525759 | 1525759 |
| 01-apollo-gateway-with-mercurius-services                | 613376     | 613376     | 13237.46 | 587817  | 630990  | 588287  | 611327  | 631295  | 631295  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 1902182.4  | 1902182.4  | 44856.46 | 1832489 | 1998835 | 1832959 | 1894399 | 1998847 | 1998847 |
| 03-apollo-router-with-mercurius-services                 | 2282123.64 | 2282123.64 | 43249.52 | 2218752 | 2353152 | 2220031 | 2279423 | 2355199 | 2355199 |
| 04-apollo-gateway-with-apollo-services                   | 432716.8   | 432716.8   | 22446.64 | 375273  | 460512  | 375295  | 432895  | 460543  | 460543  |
| 05-mercurius-gateway-with-apollo-services                | 644454.4   | 644454.4   | 30417.11 | 560880  | 677976  | 561151  | 648703  | 678399  | 678399  |
| 06-apollo-router-with-apollo-services                    | 1807462.4  | 1807462.4  | 68674    | 1690047 | 1937255 | 1690623 | 1809407 | 1937407 | 1937407 |
    
    