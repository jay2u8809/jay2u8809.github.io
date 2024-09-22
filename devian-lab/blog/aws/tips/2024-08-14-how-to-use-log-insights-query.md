---
slug: 2024-08-14-how-to-use-log-insights-query
title: AWS Cloudwatch - 로그를 간편하게 검색하는 방법
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  aws,
  cloudwatch,
  log,
  loginsight,
]
keywords: [
  devian-lab,
  Jobː談,
  aws,
  cloudwatch,
  log,
  loginsight,
]
description: AWS Cloudwatch 의 로그를 Log Insights 를 이용해 간편하게 검색해 본다.
---

<!--title -->
# [Jobː談] Log Insights 로 CloudWatch Log 검색하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-21",
  "updatedAt": "2024-08-14"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-21
  updatedAt: 2024-08-14
```

---

> "AWS Cloudatch 의 Log Insights 를 이용해 Cloudwatch 의 Log 를 검색한다."

<!-- truncate -->

## Intro

  어플리케이션의 장애가 발생하거나 에러가 발생했을 때 또는 사용자User로부터의 문의를 받았을 때, 가장 먼저해야 할 일은? 당연히 로그Log를 찾아보는 일이다. 
 
현재 운영 중인 서비스는 기본적으로 AWS 서비스(`API Gateway + AWS Lambda + DynamoDB`)를 이용한 Serverless 아키텍쳐 기반이다. 로그는 **CloudWatch + S3**를 이용해 저장하고 있다. 

CloudWatch 는 실행한 AWS Lambda 의 인스턴스를 기준으로 로그를 기록하기 때문에 원하는 로그를 정확하게 검색하기가 어렵다. 때문에 `Log Insight` 라는 서비스를 이용하면, Query 를 이용해 간단하게 CloudWatch 로그를 검색할 수 있다.

  이번 포스트에서는 CloudWatch 의 로그를 쉽게 검색하기 위한 **Log Insight 의 사용 방법** 을 정리한다.



## CloudWatch 의 로그 구조

  CloudWatch 는 로그를 로그 그룹(Log Group)과 로그 스트림(`Log Stream`)이라는 단위로 작성하고 저장한다. **로그 그룹은 로그 스트림의 모음이며 로그스트림에 실제 로그가 기록** 된다.
  
  - [로그 그룹 및 로그 스트림 작업](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html)

  Serverless Framwork 를 예를 들어 아래의 yaml 을 보면, exmple-service 에 해당하는 로그 그룹이 생성되고, exampleLambdaIndex, exampleLambdaStatistics 라는 Lambda 들(혹은 API Gateway 나 다른 리소스)이 실행될 때마다 각각의 로그 스트림을 만들어 로그를 저장한다.

  ```yaml
    service: example-service  # Log Group Name: example-service-dev, example-service-prod, ...

    provider:
      name: aws
      region: ap-northeast-2

    functions: 
      exampleLambdaIndex: # Log Stream
        handler: path
        ...
      exampleLambdaStatistics:  # Log Stream
        handler: path
  ```



## Log Insight 를 사용해야하는 이유

  문제는 이 로그 스트림을 이용해 원하는 로그를 확인하기 어렵다는 것이다. 

  AWS Lambda 의 경우, 로그 스트림은 lambda 가 실행된 인스턴스를 기준으로 생성된다. 1개의 lambda 인스턴스당 1개의 로그 스트림이 생성된다.

  1) lambda 가 실행되면서 1개의 로그 스트림을 만들고 로그를 작성한다.

  2) 1)의 처리가 끝나기 전에 또다시 리퀘스트가 있다면 다른 lambda 가 실행되고 별도의 로그 스트림을 만들어 로그를 작성한다.

  3) 1)의 처리가 끝난 뒤, lambda 인스턴스가 사라지기 전에 또 다른 리퀘스트가 있다면 1)의 lambda 인스턴스를 재실행하여 그 처리를 시작한다.(warm start)
  
  4) 3)의 경우, 1)의 lambda 인스터스를 그대로 사용하기에 새로운 로그 스트림을 만들지 않고 1)의 로그 스트림에 이어서 로그를 작성한다.

  5) 완전히 1)의 lambda 인스턴스가 종료된다면, 더이상 1)의 로그 스트림에는 로그가 작성되지 않는다.  

  ```mermaid
  sequenceDiagram

      participant t1 as Time1
      participant t2 as Time2
      participant t3 as Time3
      participant t4 as Time4
      participant t5 as Time5
      
      Note over t1, t5: Log Stream: Lambda Function1

      t1 ->> t3: Lambda Function1

      t2 ->> t4: Lambda Function2

      t3 ->> t5: Lambda Function1
      
      Note over t2, t4: Log Stream: Lambda Function2
      
  ```

  이러한 흐름이기에 같은 시간 동안 실행(_병렬처리_)된 AWS Lambda 가 1000개라면 1000개의 로그 스트림이 있다고 볼 수 있다. 각각의 로그 스트림은 시간 순서대로 로그를 작성하지만 병렬처리로 동시에 작성된 로그 스트림이 많다면 이를 하나하나 찾아보는건 불가능에 가깝다.

  이렇게 AWS Lambda 의 병렬처리로 생성된 수많은 **로그들을 쿼리Query로 간편하게 검색할 수 있는 서비스가 Log Insight** 이다.



## Log Insights Query

  Log Insights 는 AWS CloudWatch 콘솔에서 사용할 수 있다. 찾고자 하는 로그의 로그 그룹과 시간을 지정한 뒤, 아래와 같은 쿼리를 이용하면 로그를 손쉽게 검색할 수 있다.

  좀더 자세한 내용은 [AWS Cloudwatch - Log Insights 검색 쿼리](/docs/aws/tips/how-to-use-log-insights-query)에서 확인할 수 있다.

  ```text
    filter @message like /${SEARCH_KEYWORD}/
      | sort @timestamp desc
  ```



## 주의점

  Log Insights 는 AWS가 제공하는 서비스이다. 따라서 검색 용량에 따른 비용이 발생한다.

  - [Understanding AWS CloudWatch Pricing: A Comprehensive Guide](https://blog.awsfundamentals.com/understanding-aws-cloudwatch-pricing-a-comprehensive-guide)

  또한 검색할 수 있는 데이터의 양도 최대 10,000개의 제한이 있다.

  - [“Breaking the Barrier: Resolving the 10K Log Insights Limit in CloudWatch and Consolidating Records into a CSV”](https://medium.com/@aishwaryaicerastogi/breaking-the-barrier-resolving-the-10k-log-insights-limit-in-cloudwatch-and-consolidating-records-92b206006e8)

