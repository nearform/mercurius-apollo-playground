
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 15530 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 5930  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 5790  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 28053 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 3939  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 6650  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 9791  | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 5.99    | 5.99  | 0.79   | 5   | 19  | 5    | 6   | 8     | 8   |
| 01-apollo-gateway-with-mercurius-services                | 16.35   | 16.35 | 2.45   | 14  | 61  | 14   | 16  | 20    | 22  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 16.74   | 16.74 | 2.25   | 14  | 41  | 15   | 16  | 22    | 23  |
| 03-apollo-router-with-mercurius-services                 | 3.41    | 3.41  | 0.73   | 2   | 16  | 2    | 3   | 5     | 6   |
| 04-apollo-gateway-with-apollo-services                   | 24.88   | 24.88 | 2.96   | 21  | 58  | 22   | 25  | 31    | 39  |
| 05-mercurius-gateway-with-apollo-services                | 14.52   | 14.52 | 1.62   | 13  | 26  | 13   | 14  | 18    | 20  |
| 06-apollo-router-with-apollo-services                    | 10.73   | 10.73 | 2.62   | 5   | 30  | 7    | 10  | 16    | 17  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 1553    | 1553    | 32.94  | 1507 | 1597 | 1507 | 1550 | 1597  | 1597 |
| 01-apollo-gateway-with-mercurius-services                | 593     | 593     | 19.15  | 564  | 620  | 564  | 590  | 620   | 620  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 579     | 579     | 21.29  | 550  | 610  | 550  | 575  | 610   | 610  |
| 03-apollo-router-with-mercurius-services                 | 2550.82 | 2550.82 | 95.04  | 2410 | 2689 | 2411 | 2561 | 2689  | 2689 |
| 04-apollo-gateway-with-apollo-services                   | 393.9   | 393.9   | 9.03   | 380  | 410  | 380  | 390  | 410   | 410  |
| 05-mercurius-gateway-with-apollo-services                | 665     | 665     | 12.24  | 640  | 682  | 640  | 668  | 682   | 682  |
| 06-apollo-router-with-apollo-services                    | 890.1   | 890.1   | 18.59  | 861  | 929  | 861  | 889  | 929   | 929  |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev   | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1528217.6  | 1528217.6  | 32188.32 | 1482888 | 1571448 | 1483775 | 1525759 | 1571839 | 1571839 |
| 01-apollo-gateway-with-mercurius-services                | 656486.4   | 656486.4   | 21155.02 | 624348  | 686340  | 624639  | 653311  | 686591  | 686591  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 640972.81  | 640972.81  | 23435.07 | 608850  | 675270  | 609279  | 636927  | 675327  | 675327  |
| 03-apollo-router-with-mercurius-services                 | 2384709.82 | 2384709.82 | 88693.71 | 2253350 | 2514215 | 2254847 | 2396159 | 2514943 | 2514943 |
| 04-apollo-gateway-with-apollo-services                   | 436070.4   | 436070.4   | 9982.33  | 420660  | 453870  | 420863  | 431871  | 453887  | 453887  |
| 05-mercurius-gateway-with-apollo-services                | 654336     | 654336     | 11918.17 | 629760  | 671088  | 630271  | 657407  | 671231  | 671231  |
| 06-apollo-router-with-apollo-services                    | 832302.55  | 832302.55  | 17352.41 | 805035  | 868615  | 805375  | 831487  | 868863  | 868863  |
    
    