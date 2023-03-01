
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 24750 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 8080  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 7830  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 40906 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 5429  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 9930  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 14488 | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 4.1     | 4.1   | 0.77   | 3   | 33  | 3    | 4   | 5     | 6   |
| 01-apollo-gateway-with-mercurius-services                | 11.88   | 11.88 | 2.02   | 10  | 46  | 10   | 11  | 16    | 18  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 12.28   | 12.28 | 2.25   | 10  | 58  | 11   | 12  | 16    | 18  |
| 03-apollo-router-with-mercurius-services                 | 2.2     | 2.2   | 0.7    | 1   | 27  | 1    | 2   | 4     | 4   |
| 04-apollo-gateway-with-apollo-services                   | 17.93   | 17.93 | 2.74   | 15  | 53  | 15   | 18  | 24    | 28  |
| 05-mercurius-gateway-with-apollo-services                | 9.61    | 9.61  | 1.38   | 8   | 30  | 8    | 9   | 13    | 14  |
| 06-apollo-router-with-apollo-services                    | 7.09    | 7.09  | 1.86   | 3   | 36  | 5    | 7   | 11    | 12  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 2250.28 | 2250.28 | 144.03 | 1821 | 2376 | 1821 | 2283 | 2377  | 2377 |
| 01-apollo-gateway-with-mercurius-services                | 808     | 808     | 45.2   | 699  | 860  | 699  | 810  | 860   | 860  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 783     | 783     | 38.79  | 690  | 830  | 690  | 781  | 830   | 830  |
| 03-apollo-router-with-mercurius-services                 | 3719    | 3719    | 223.71 | 3390 | 4012 | 3391 | 3657 | 4013  | 4013 |
| 04-apollo-gateway-with-apollo-services                   | 542.9   | 542.9   | 14.35  | 509  | 560  | 509  | 540  | 560   | 560  |
| 05-mercurius-gateway-with-apollo-services                | 993     | 993     | 41.42  | 910  | 1059 | 910  | 991  | 1059  | 1059 |
| 06-apollo-router-with-apollo-services                    | 1317.1  | 1317.1  | 40.81  | 1236 | 1383 | 1236 | 1316 | 1383  | 1383 |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev    | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | --------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1529902.55 | 1529902.55 | 97729.59  | 1238280 | 1615680 | 1239039 | 1553407 | 1615871 | 1615871 |
| 01-apollo-gateway-with-mercurius-services                | 648857.6   | 648857.6   | 36242.81  | 561297  | 690580  | 561663  | 650751  | 690687  | 690687  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 628736     | 628736     | 31126.28  | 554070  | 666490  | 554495  | 627199  | 666623  | 666623  |
| 03-apollo-router-with-mercurius-services                 | 2346728.73 | 2346728.73 | 141586.35 | 2139090 | 2531572 | 2140159 | 2308095 | 2533375 | 2533375 |
| 04-apollo-gateway-with-apollo-services                   | 435942.4   | 435942.4   | 11537.17  | 408727  | 449680  | 408831  | 433663  | 449791  | 449791  |
| 05-mercurius-gateway-with-apollo-services                | 675225.6   | 675225.6   | 28202.84  | 618800  | 720120  | 619007  | 674303  | 720383  | 720383  |
| 06-apollo-router-with-apollo-services                    | 831045.82  | 831045.82  | 25733.03  | 779916  | 872673  | 780287  | 830463  | 872959  | 872959  |
    
    