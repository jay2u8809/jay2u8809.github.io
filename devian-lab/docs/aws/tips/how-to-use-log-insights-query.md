---
slug: /aws/tips/how-to-use-log-insights-query
# id: how-to-use-log-insights-query
title: CloudWatch - Log Insights 쿼리
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
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
description: CloudWatch - Log Insights 쿼리 사용 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# AWS Cloudwatch - Log Insights 검색 쿼리
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

## Log Insights Query

### Filter 

  #### 단순 Keyword 검색

    ```text
      filter @message like /${SEARCH_KEYWORD}/
        | sort @timestamp desc
    ```

    ```text
      filter @message like /Android/
        | sort @timestamp desc
    ```

  #### url path 등 특수 문자가 포함된 Keyword

    - ex) `api/v1/display/`

      ```text
      filter @message like /api\/v1\/display\//
        | sort @timestamp desc
      ```

  #### Keyword 가 있는 로그의 특정 필드값 만 검색

    - ex) `TransactionConflict` 로그가 있는 RequestId

      ```text
      fields @requestId 
      | filter @message like /TransactionConflict/
      | sort @timestamp desc
      ````

    - ex) `TransactionConflict` 로그가 있는 timestamp, logStream 

      ```text
      fields @timestamp, @message, @logStream, @log 
      | filter @message like /TransactionConflict/
      | sort @timestamp desc
      ```

      - 정규식 사용

        ```text
        fields @timestamp, @message, @logStream, @log 
        | filter @message like /TransactionConflict(?!.*(dup|Exception)).*$/
        | sort @timestamp desc
        ```

### Stats

  #### RequestId 별로 로그 갯수 집계

    ```text
    stats count(*) by @requestId
    ```

    - 결과: `@requestId Count(*) 2323 5`

    ```text
    FILTER response.code like /0001/
    | stats count(*) by response.code
    ```


### Fields

  #### 기본적인 Field 들

    | Field | Desc | Example |
    | --- | --- | --- |
    | @ingestionTime | - | 1729743338706 | 
    | @log | cloudwatch log group 명 | 유저아이디:/aws/lambda/서비스명 |
    | @logStream | 로그스트림명 | - |
    | @message | 로그 내용 | - |
    | @requestId | 리퀘이스트 아이디 | - |
    | @timestamp | - | 1729743329689 | 

  #### 그 외

    - 이 외에 `JSON.stringify({name: 'dev.ian', region: 'asia'})` 로 출력한 로그의 경우 name, region 등의 이름으로도 검색이 가능하다.

    ```text
    FILTER region like /asia/
    ```

<br /><br /><br /><br /><br />

--- 
- Refs
  + [Analyzing log data with CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
  + [CloudWatch Logs Insights query syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)
  + [CloudWatch Logs Insightsでログを調査する前に読む記事](https://dev.classmethod.jp/articles/how-to-cloudwatch-logs-insights/)
  + [Understanding AWS CloudWatch Pricing: A Comprehensive Guide](https://blog.awsfundamentals.com/understanding-aws-cloudwatch-pricing-a-comprehensive-guide)
  + [“Breaking the Barrier: Resolving the 10K Log Insights Limit in CloudWatch and Consolidating Records into a CSV”](https://medium.com/@aishwaryaicerastogi/breaking-the-barrier-resolving-the-10k-log-insights-limit-in-cloudwatch-and-consolidating-records-92b206006e8)
  + [AWS初心者がCloudWatch Logs Insightsを使ってみた](https://qiita.com/suuu/items/8387df88f134348f22c7)
  + [CloudWatch Logs Insights 集計クエリ入門](https://qiita.com/enerick/items/89adf05d076a533a89b4)