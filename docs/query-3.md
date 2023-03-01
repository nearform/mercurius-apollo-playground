
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 16230 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 5904  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 5941  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 28392 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 4002  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 7000  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 9319  | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 5.58    | 5.58  | 0.98   | 5   | 29  | 5    | 5   | 7     | 8   |
| 01-apollo-gateway-with-mercurius-services                | 16.42   | 16.42 | 2.45   | 14  | 49  | 14   | 16  | 22    | 24  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 16.33   | 16.33 | 2.39   | 14  | 45  | 14   | 16  | 21    | 23  |
| 03-apollo-router-with-mercurius-services                 | 3.38    | 3.38  | 0.97   | 2   | 38  | 2    | 3   | 5     | 6   |
| 04-apollo-gateway-with-apollo-services                   | 24.47   | 24.47 | 3.22   | 21  | 62  | 21   | 24  | 32    | 37  |
| 05-mercurius-gateway-with-apollo-services                | 13.81   | 13.81 | 1.55   | 12  | 29  | 12   | 13  | 17    | 18  |
| 06-apollo-router-with-apollo-services                    | 10.23   | 10.23 | 2.52   | 5   | 44  | 7    | 10  | 15    | 17  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 1623    | 1623    | 50.81  | 1500 | 1679 | 1500 | 1640 | 1679  | 1679 |
| 01-apollo-gateway-with-mercurius-services                | 590.4   | 590.4   | 12.98  | 560  | 605  | 560  | 590  | 605   | 605  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 594.1   | 594.1   | 23.86  | 550  | 630  | 550  | 595  | 630   | 630  |
| 03-apollo-router-with-mercurius-services                 | 2581.55 | 2581.55 | 144.04 | 2306 | 2745 | 2307 | 2595 | 2745  | 2745 |
| 04-apollo-gateway-with-apollo-services                   | 400.2   | 400.2   | 6.71   | 389  | 411  | 389  | 400  | 411   | 411  |
| 05-mercurius-gateway-with-apollo-services                | 700     | 700     | 14.72  | 670  | 729  | 670  | 700  | 729   | 729  |
| 06-apollo-router-with-apollo-services                    | 931.9   | 931.9   | 26.15  | 873  | 977  | 873  | 936  | 977   | 977  |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev   | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1105228.8  | 1105228.8  | 34484.27 | 1021500 | 1143399 | 1021951 | 1117183 | 1143807 | 1143807 |
| 01-apollo-gateway-with-mercurius-services                | 474675.2   | 474675.2   | 10484.79 | 450240  | 486420  | 450303  | 474367  | 486655  | 486655  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 477644.8   | 477644.8   | 19164.83 | 442200  | 506520  | 442367  | 478463  | 506623  | 506623  |
| 03-apollo-router-with-mercurius-services                 | 1631278.55 | 1631278.55 | 91362.56 | 1457392 | 1734840 | 1458175 | 1640447 | 1735679 | 1735679 |
| 04-apollo-gateway-with-apollo-services                   | 321766.41  | 321766.41  | 5392.07  | 312756  | 330444  | 312831  | 321791  | 330495  | 330495  |
| 05-mercurius-gateway-with-apollo-services                | 476697.6   | 476697.6   | 10018.87 | 456270  | 496449  | 456447  | 476927  | 496639  | 496639  |
| 06-apollo-router-with-apollo-services                    | 588902.4   | 588902.4   | 16462.3  | 551736  | 617464  | 551935  | 591871  | 617471  | 617471  |
    
    