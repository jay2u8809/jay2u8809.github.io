---
# slug: /aws/serverless-framework/how-to-set-prune-plugin
id: how-to-set-prune-plugin
title: Prune Plugin
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  aws,
  lambda,
  serverless,
  serverless framework,
  code storage limit exceeded,
  prune,
  코드스토리지,
]
keywords: [
  devian-lab,
  Jobː談,
  aws,
  lambda,
  serverless,
  serverless framework,
  code storage limit exceeded,
  prune,
  코드스토리지,
]
description: Serverless Framwork 의 플러그인(prune)을 이용해 AWS Lambda 의 예전 버전을 삭제하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# Prune Plugin: AWS Lambda Storage Limit Error
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-26",
  "updatedAt": "2024-08-14"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-06-26
  updatedAt: 2024-08-14
```

---

## Storage Limit Error

  - Refs: [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#compute-and-storage)

  ```shell
    Code storage limit exceeded. (Service: Lambda, Status Code: 400, ...)
  ```

## Serverless Framework

### Plugin: Serverless Prune Plugin 

  - Refs: [Serverless Prune Plugin](https://www.serverless.com/plugins/serverless-prune-plugin)

  #### 1) Install plugin

    - sls 로 deploy 할 때만 사용하므로 dev dependency 로 충분하다

      ```shell
        npm install --save-dev serverless-prune-plugin
      ```


  #### 2) YAML

    - YAML 설정을 통해 Deploy 를 할 때마다 동일한 처리를 할 수 있다.

      ```yaml
        service: example-service

        plugins:
          - serverless-prune-plugin

        custom:
          prune:
            automatic: true
            number: 3
            # includeLayers: true
      ```

      + `number`
        - 3인 경우 방금 deploy 한 버전 포함 최신 3개만 남기고 모두 지운다.

      + `includeLayers`
        - AWS Lambda Layer 의 이전 버전도 삭제할 것인가?

    - Deploy 
      + 플러그인을 설정한 뒤 sls 로 deploy 하면 아래와 같은 메시지가 나온다.

        ```shell
          ✔ Pruning of functions complete
        ```


  #### 3) Command

    - sls command 를 이용한다면 수동으로도 삭제 할 수 있다.

      ```shell
      
        $ sls prune -n 3 -c serverless.yaml
      ```




<br /><br /><br /><br /><br />

--- 
- Refs
	+ [Npm - serverless-prune-plugin](https://www.npmjs.com/package/serverless-prune-plugin)
	+ [Serverless Pruning What is it? When and How to use it?](https://medium.com/@pjoshi_96874/serverless-pruning-what-is-it-when-and-how-to-use-it-1ac79dcb927a)
