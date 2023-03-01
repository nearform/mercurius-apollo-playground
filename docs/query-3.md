
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 15256 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 5810  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 5920  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 24639 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 4000  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 6940  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 9112  | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 6.13    | 6.13  | 1.19   | 5   | 45  | 5    | 6   | 8     | 9   |
| 01-apollo-gateway-with-mercurius-services                | 16.72   | 16.72 | 2.62   | 14  | 51  | 15   | 16  | 22    | 28  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 16.4    | 16.4  | 2.55   | 14  | 45  | 14   | 16  | 21    | 29  |
| 03-apollo-router-with-mercurius-services                 | 3.56    | 3.56  | 1.09   | 2   | 40  | 2    | 3   | 5     | 6   |
| 04-apollo-gateway-with-apollo-services                   | 24.46   | 24.46 | 2.99   | 21  | 63  | 21   | 24  | 31    | 36  |
| 05-mercurius-gateway-with-apollo-services                | 13.92   | 13.92 | 1.71   | 12  | 31  | 12   | 13  | 18    | 19  |
| 06-apollo-router-with-apollo-services                    | 10.47   | 10.47 | 2.53   | 6   | 35  | 7    | 10  | 16    | 17  |

### Requests (the higher the better)
|                                                          | average | mean   | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------ | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 1525.6  | 1525.6 | 54.13  | 1422 | 1599 | 1422 | 1528 | 1599  | 1599 |
| 01-apollo-gateway-with-mercurius-services                | 581     | 581    | 20.33  | 549  | 620  | 549  | 580  | 620   | 620  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 592     | 592    | 28.92  | 520  | 631  | 520  | 590  | 631   | 631  |
| 03-apollo-router-with-mercurius-services                 | 2464.2  | 2464.2 | 90.27  | 2285 | 2635 | 2285 | 2463 | 2635  | 2635 |
| 04-apollo-gateway-with-apollo-services                   | 400     | 400    | 12.24  | 379  | 418  | 379  | 400  | 418   | 418  |
| 05-mercurius-gateway-with-apollo-services                | 694     | 694    | 24.66  | 641  | 730  | 641  | 697  | 730   | 730  |
| 06-apollo-router-with-apollo-services                    | 911.2   | 911.2  | 23.55  | 881  | 947  | 881  | 899  | 947   | 947  |

### Throughput (the higher the better)
|                                                          | average   | mean      | stddev   | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | --------- | --------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1038924.8 | 1038924.8 | 36870.06 | 968382  | 1088919 | 968703  | 1040895 | 1089535 | 1089535 |
| 01-apollo-gateway-with-mercurius-services                | 467148.8  | 467148.8  | 16356    | 441396  | 498480  | 441599  | 466431  | 498687  | 498687  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 475929.6  | 475929.6  | 23224.78 | 418080  | 507324  | 418303  | 474367  | 507391  | 507391  |
| 03-apollo-router-with-mercurius-services                 | 1557299.2 | 1557299.2 | 57085.69 | 1444120 | 1665320 | 1444863 | 1557503 | 1666047 | 1666047 |
| 04-apollo-gateway-with-apollo-services                   | 321612.8  | 321612.8  | 9801.7   | 304716  | 336072  | 304895  | 321791  | 336127  | 336127  |
| 05-mercurius-gateway-with-apollo-services                | 472627.2  | 472627.2  | 16769.1  | 436521  | 497130  | 436735  | 474879  | 497151  | 497151  |
| 06-apollo-router-with-apollo-services                    | 575846.4  | 575846.4  | 14844.12 | 556792  | 598504  | 557055  | 568319  | 598527  | 598527  |
    
    