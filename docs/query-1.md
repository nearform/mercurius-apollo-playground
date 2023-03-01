
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 27209 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 7869  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7730  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 50862 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 5359  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 10114 | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 15912 | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 3.47    | 3.47  | 1.52   | 2   | 72  | 3    | 3   | 6     | 8   |
| 01-apollo-gateway-with-mercurius-services                | 12.23   | 12.23 | 4.15   | 9   | 112 | 10   | 12  | 20    | 23  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 12.44   | 12.44 | 5.02   | 9   | 141 | 10   | 12  | 21    | 23  |
| 03-apollo-router-with-mercurius-services                 | 1.66    | 1.66  | 1.25   | 1   | 82  | 1    | 2   | 3     | 4   |
| 04-apollo-gateway-with-apollo-services                   | 18.15   | 18.15 | 4.79   | 14  | 103 | 14   | 17  | 28    | 32  |
| 05-mercurius-gateway-with-apollo-services                | 9.42    | 9.42  | 2.96   | 7   | 93  | 7    | 9   | 15    | 18  |
| 06-apollo-router-with-apollo-services                    | 6.4     | 6.4   | 3.09   | 3   | 108 | 4    | 6   | 12    | 14  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 2474    | 2474    | 335.17 | 1442 | 2702 | 1442 | 2547 | 2703  | 2703 |
| 01-apollo-gateway-with-mercurius-services                | 786.9   | 786.9   | 124.25 | 466  | 919  | 466  | 822  | 919   | 919  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 773     | 773     | 128.59 | 440  | 892  | 440  | 820  | 892   | 892  |
| 03-apollo-router-with-mercurius-services                 | 4624.64 | 4624.64 | 485.84 | 3275 | 5213 | 3275 | 4659 | 5215  | 5215 |
| 04-apollo-gateway-with-apollo-services                   | 535.9   | 535.9   | 74.11  | 351  | 608  | 351  | 556  | 608   | 608  |
| 05-mercurius-gateway-with-apollo-services                | 1011.4  | 1011.4  | 142.98 | 629  | 1126 | 629  | 1030 | 1126  | 1126 |
| 06-apollo-router-with-apollo-services                    | 1446.55 | 1446.55 | 223.21 | 839  | 1621 | 839  | 1538 | 1621  | 1621 |

### Throughput (the higher the better)
|                                                          | average   | mean      | stddev   | min    | max    | 2.5%   | 50%    | 97.5%  | 99%    |
| -------------------------------------------------------- | --------- | --------- | -------- | ------ | ------ | ------ | ------ | ------ | ------ |
| 00-mercurius-gateway-with-mercurius-services             | 583808    | 583808    | 79062.66 | 340312 | 637672 | 340479 | 601599 | 637951 | 637951 |
| 01-apollo-gateway-with-mercurius-services                | 281702.41 | 281702.41 | 44476.06 | 166828 | 329002 | 166911 | 294399 | 329215 | 329215 |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 276716.8  | 276716.8  | 46043.86 | 157520 | 319336 | 157567 | 293631 | 319487 | 319487 |
| 03-apollo-router-with-mercurius-services                 | 864605.1  | 864605.1  | 90754.16 | 612425 | 974831 | 612863 | 871423 | 974847 | 974847 |
| 04-apollo-gateway-with-apollo-services                   | 191862.4  | 191862.4  | 26530.97 | 125658 | 217664 | 125695 | 199167 | 217727 | 217727 |
| 05-mercurius-gateway-with-apollo-services                | 238720    | 238720    | 33769.69 | 148444 | 265736 | 148479 | 243199 | 265983 | 265983 |
| 06-apollo-router-with-apollo-services                    | 270533.82 | 270533.82 | 41770.73 | 156893 | 303127 | 156927 | 287743 | 303359 | 303359 |
    
    