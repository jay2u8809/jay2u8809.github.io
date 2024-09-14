---
slug: /docs/aws/tips/how-to-use-log-insights-query
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




<br /><br /><br /><br /><br />

--- 
- Refs
  + [Analyzing log data with CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
  + [CloudWatch Logs Insights query syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)
  + [CloudWatch Logs Insightsでログを調査する前に読む記事](https://dev.classmethod.jp/articles/how-to-cloudwatch-logs-insights/)
  + [Understanding AWS CloudWatch Pricing: A Comprehensive Guide](https://blog.awsfundamentals.com/understanding-aws-cloudwatch-pricing-a-comprehensive-guide)
  + [“Breaking the Barrier: Resolving the 10K Log Insights Limit in CloudWatch and Consolidating Records into a CSV”](https://medium.com/@aishwaryaicerastogi/breaking-the-barrier-resolving-the-10k-log-insights-limit-in-cloudwatch-and-consolidating-records-92b206006e8)