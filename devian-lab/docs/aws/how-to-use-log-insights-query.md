---
# slug: /wiki/aws/cloudwatch/how-to-use-log-insights-query
id: how-to-use-log-insights-query
title: Log Insights 로 CloudWatch 검색하기
tags: [devian-lab, wiki, aws, cloudwatch, log, log insights]
# sidebar_position: 1
---

<!--title -->
# Log Insights 로 CloudWatch Log 검색하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-21",
  "updatedAt": "2024-05-21"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-21
  updatedAt: 2024-05-21
```

---

## Log Insights Query

### Keyword 검색
- Example
```text
filter @message like /${SEARCH_KEYWORD}/
  | sort @timestamp desc
```

- `Android` 검색
```text
filter @message like /Android/
  | sort @timestamp desc
```

### Url Path 등 특수 문자가 포함된 Keyword 검색
- Example
  + `api/v1/display/`
```text
filter @message like /api\/v1\/display\//
  | sort @timestamp desc
```


<br /><br /><br /><br /><br />

--- 
- Refs:
  + [Analyzing log data with CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)


