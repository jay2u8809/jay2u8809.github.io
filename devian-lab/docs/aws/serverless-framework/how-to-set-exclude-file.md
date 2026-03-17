---
# slug: /aws/serverless-framework/how-to-set-exclude-file
id: how-to-set-exclude-file
title: 필요한 파일만 Packaging 하는 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  aws,
  lambda,
  serverless,
  serverless framework,
  package exclude,
]
keywords: [
  devian-lab,
  Jobː談,
  aws,
  lambda,
  serverless,
  serverless framework,
  package exclude,
]
description: AWS Lambda 에서 필요한 파일만 Packaging 하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# 필요한 파일만 Packaging 하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-08-14",
  "updatedAt": "2024-08-14"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-08-14
  updatedAt: 2024-08-14
```

---

## Packaging 대상 선택

  - Serverless Framework(이하 `sls`) 로 AWS Lambda 를 deploy 할 때에는 **packaging** 이라는 과정이 필요 
    + AWS Lambda Code Storage 나 S3 에 업로드할 소스코드를 압축하는 과정
    + 필요없는 소스코드 제외 or 필요한 소스코드만 포함 등의 설정이 가능 
  - 기본적으로 프로젝트의 Root 에 있는 **모든 파일이 대상**
    + 필요없는 스크립트 파일 or 이미지 등이 있는 디렉토리는 제외하는 것이 효율적

## 선택 방법

  sls 의 `package.patterns` 항목에서 선택할 수 있다.

  - 특정 디렉토리 포함
    
    ```yaml
      package:
        patterns:
          - 'node_modules/**'  # node_modules 아래의 모든 파일 packaging
    ```

  - 특정 디렉토리 제외
    
    ```yaml
      package:
        patterns:
          - '!node_modules/**'  # node_modules 아래의 모든 파일 packaging 에서 제외
    ```

### 특정한 파일 또는 디렉토리만 지정

  특정 디렉토리 모두가 아니라 1개의 파일 또는 1개의 디렉토리만 지정하고 싶을 때가 있다면 아래와 같이 지정한다.

  - `dist` 디렉토리의 아래의 파일, 폴더만 지정
    + 상위 디렉토리의 파일, 폴더를 제외하는 선언을 한 후, 지정 선언한다.

    ```yaml
      package:
        patterns:
          - '!**'  # 모든 파일 packaging에서 제외
          - 'dist/**'
    ```
  



<br /><br /><br /><br /><br />

---
- Refs
  + [Serverless Framework - Packaging](https://www.serverless.com/framework/docs/providers/aws/guide/packaging)