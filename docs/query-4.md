
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
| 00-mercurius-gateway-with-mercurius-services             | 0   | 14742 | 0   | 0   | 0   |
| 01-apollo-gateway-with-mercurius-services                | 0   | 5821  | 0   | 0   | 0   |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 0   | 5747  | 0   | 0   | 0   |
| 03-apollo-router-with-mercurius-services                 | 0   | 27136 | 0   | 0   | 0   |
| 04-apollo-gateway-with-apollo-services                   | 0   | 3700  | 0   | 0   | 0   |
| 05-mercurius-gateway-with-apollo-services                | 0   | 6590  | 0   | 0   | 0   |
| 06-apollo-router-with-apollo-services                    | 0   | 9657  | 0   | 0   | 0   |

### Latency (the lower the better)
|                                                          | average | mean  | stddev | min | max | 2.5% | 50% | 97.5% | 99% |
| -------------------------------------------------------- | ------- | ----- | ------ | --- | --- | ---- | --- | ----- | --- |
| 00-mercurius-gateway-with-mercurius-services             | 6.3     | 6.3   | 0.73   | 6   | 20  | 6    | 6   | 8     | 8   |
| 01-apollo-gateway-with-mercurius-services                | 16.66   | 16.66 | 2.43   | 14  | 38  | 15   | 16  | 22    | 24  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 16.88   | 16.88 | 2.25   | 14  | 42  | 15   | 16  | 21    | 22  |
| 03-apollo-router-with-mercurius-services                 | 3.55    | 3.55  | 0.87   | 2   | 17  | 3    | 3   | 6     | 6   |
| 04-apollo-gateway-with-apollo-services                   | 26.49   | 26.49 | 4.82   | 22  | 50  | 22   | 25  | 40    | 44  |
| 05-mercurius-gateway-with-apollo-services                | 14.68   | 14.68 | 1.64   | 13  | 30  | 13   | 14  | 18    | 20  |
| 06-apollo-router-with-apollo-services                    | 10.89   | 10.89 | 2.58   | 6   | 28  | 7    | 11  | 16    | 18  |

### Requests (the higher the better)
|                                                          | average | mean    | stddev | min  | max  | 2.5% | 50%  | 97.5% | 99%  |
| -------------------------------------------------------- | ------- | ------- | ------ | ---- | ---- | ---- | ---- | ----- | ---- |
| 00-mercurius-gateway-with-mercurius-services             | 1474.2  | 1474.2  | 26.42  | 1441 | 1523 | 1441 | 1460 | 1523  | 1523 |
| 01-apollo-gateway-with-mercurius-services                | 582.1   | 582.1   | 18.02  | 541  | 610  | 541  | 589  | 610   | 610  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 574.71  | 574.71  | 19.91  | 530  | 598  | 530  | 580  | 598   | 598  |
| 03-apollo-router-with-mercurius-services                 | 2467.19 | 2467.19 | 103.83 | 2289 | 2597 | 2289 | 2501 | 2597  | 2597 |
| 04-apollo-gateway-with-apollo-services                   | 370     | 370     | 30.32  | 290  | 397  | 290  | 380  | 397   | 397  |
| 05-mercurius-gateway-with-apollo-services                | 659     | 659     | 15.78  | 640  | 680  | 640  | 660  | 680   | 680  |
| 06-apollo-router-with-apollo-services                    | 877.91  | 877.91  | 21.15  | 846  | 905  | 846  | 875  | 905   | 905  |

### Throughput (the higher the better)
|                                                          | average    | mean       | stddev   | min     | max     | 2.5%    | 50%     | 97.5%   | 99%     |
| -------------------------------------------------------- | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 00-mercurius-gateway-with-mercurius-services             | 1450598.4  | 1450598.4  | 26020.29 | 1417944 | 1498632 | 1418239 | 1436671 | 1499135 | 1499135 |
| 01-apollo-gateway-with-mercurius-services                | 644300.81  | 644300.81  | 19942.32 | 598887  | 675270  | 599039  | 652287  | 675327  | 675327  |
| 02-apollo-gateway-with-mercurius-services-and-supergraph | 636262.4   | 636262.4   | 22053.84 | 586710  | 661986  | 586751  | 642559  | 662015  | 662015  |
| 03-apollo-router-with-mercurius-services                 | 2306513.46 | 2306513.46 | 96890.07 | 2140215 | 2428195 | 2142207 | 2338815 | 2428927 | 2428927 |
| 04-apollo-gateway-with-apollo-services                   | 409600     | 409600     | 33526.48 | 321030  | 439479  | 321279  | 420863  | 439551  | 439551  |
| 05-mercurius-gateway-with-apollo-services                | 648499.2   | 648499.2   | 15350.53 | 629760  | 669120  | 630271  | 649727  | 669183  | 669183  |
| 06-apollo-router-with-apollo-services                    | 820759.28  | 820759.28  | 19775.96 | 791010  | 846175  | 791039  | 818175  | 846335  | 846335  |
    
    