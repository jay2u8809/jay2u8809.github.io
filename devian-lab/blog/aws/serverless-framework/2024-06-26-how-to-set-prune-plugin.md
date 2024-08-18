---
slug: 2024-06-26-how-to-set-prune-plugin
title: AWS Lambda - Code Storage Limit 해결방법 
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  aws,
  lambda,
  serverless,
  serverless framework,
  code storage limit exceeded,
  prune,
  코드스토리지,
]
---

<!--title -->
# [Jobː談] AWS Lambda Storage Limit Error 해결: Prune Plugin
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

> "Serverless Framework 의 Prune Plugin 으로 AWS Lambda 의 Code Storage Limit 을 해결한다."

## Intro

  AWS 를 이용한 Serverless 아키텍쳐로 서비스를 운영한다면 AWS Lambda 를 반드시 쓰게 된다. AWS Lambda 는 가장 간편하고 저렴하며 활용도가 높은 서비스 중 하나이기에 다양한 처리에 사용할 수 있다. 

  지금 운영 중인 서비스에서는 크게 아래와 같이 3가지 용도로 AWS Lambda 를 사용하고 있다.
  
>  1) 15분 이내의 간단한 배치Batch 처리
>  2) "API Gateway + AWS Lambda" 조합으로 Web Server 로 활용
>  3) Step Function 이나 다른 AWS 리소스의 이벤트 전후처리(Cloudfront Edge Function, S3 이미지 업로드 시 썸네일 생성 등) 같은 트랜잭션의 한 부분으로 활용

  이렇듯 활용도가 높은 AWS Lambda 이기에 넋 놓고 쓰다보면 금방 코드 스토리지가 부족해질 수 있다. 

  - AWS Lambda 의 코드 스토리지는 `75GB`이다. 
    + Refs: [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#compute-and-storage) 

  실제로 최근에 Serverless Framework(_이하 sls_) 로 deploy 하던 중 `Code storage limit exceeded` 에러가 났다. 이번 기회에 AWS Lambda 의 코드 스토리지를 효율적으로 관리할 수 있도록 sls 설정을 하고 그 방법에 대해 정리해 본다. 



## AWS Lambda Code Storage?

  AWS Lambda 는 소스코드를 컨테이너Container를 통해 바로 실행하는 구조이기에 **소스코드 (_직접 코딩한 소스코드 및 의존성 코드_) 를 업로드해둘 스토리지** 가 필요하다. 이 저장 공간을 `코드 스토리지code storage` 라 한다.
  
  AWS Lambda 서비스에서 제공하는 코드 스토리지는 **75GB** 이고 이 스토리지 용량을 모두 사용하면 소스코드를 업로드할 때 아래와 같은 에러가 발생한다. (※ [Monitoring Lambda code storage](https://docs.aws.amazon.com/lambda/latest/operatorguide/code-storage.html))

  ```shell
    Code storage limit exceeded. (Service: Lambda, Status Code: 400, ...)
  ```



## 해결 방법

  sls 로 AWS Lambda 를 Deploy 하던 중 발생한 `Code storage limit exceeded` 에러를 어떻게 해결해야할까? 우리 팀에서 해결한 방법을 차례로 설명해 본다.
    
### 1) 코드 스토리지 용량 확보

  코드 스토리지의 용량이 부족하기 때문에 가장 먼저 한 일은 _스토리지 용량 확보_ 이다. 필요없는 람다 함수Lambda Function 를 찾아 삭제하거나 각 람다 함수의 버전Version을 확인해 오래된 버전이 많이 존재한다면 그 버전들을 삭제하는 작업을 진행했다.

  - 필요없는(사용하지 않는) 람다 함수 삭제
  - 람다 함수의 오래된 버전 삭제

  조사 결과 필요없는 람다 함수는 없었기에 _"람다 함수의 오래된 버전 삭제"_ 만 진행했다. 이 작업은 팀의 시니어 엔지니어분께서 AWS CLI 를 이용해 수동으로 하나하나 삭제해가며 진행했다. 

  ```shell
    $ aws lambda delete-function \
        --function-name ${LAMBDA_FUNCTION_NAME} \
        --qualifier ${LAMBDA_FUNCTION_VERSION}
  ```

  - [AWS CLI - delete-function](https://docs.aws.amazon.com/cli/latest/reference/lambda/delete-function.html)

  그리고 이 작업은 한 번이라도 sls 로 deploy 가 가능해질만큼의 용량을 확보할 때까지 계속되었다.

### ※ Lambda Function Version

  AWS Lambda 의 콘솔에서 아무 함수Function를 선택해보면 `버전Version` 이라는 탭이 있다. 이 **"버전"이 이번 코드 스토리지를 가득 차게 한 원인** 이었다.
  
  _sls 로 새로운 소스코드를 deploy 할 때, AWS Lambda는 버전이라는 형태로 파일을 생성해 코드 스토리지에 저장_ 한다. 특별한 설정이 없다면, sls 로 **deploy 할 때마다 매번 새로운 버전의 파일을 생성하고 저장** 한다. (과거의 버전을 그대로 deploy 해서 Rollback 할 수 있는 기능)
  
  - 5MB 크기의 소스코드를 30번 deploy 했다면 5MB * 30회, 총 150MB를 저장하게 된다.

  지금껏 한 번도 이 버전 파일들을 따로 관리한 적이 없었다. 서비스 초반에 만든 어떤 람다함수는 버전 파일만 300개가 넘었다. 이러한 버전 파일들이 쌓이고 쌓여 75GB 의 코드 스토리지를 가득차게 했다.

### 2) Serverless Framework 설정

  sls 로 AWS Lambda 를 deploy 할 수 있을만큼의 최소한의 코드 스토리지의 용량을 확보했다면, sls 의 플러그인Plugin을 이용해 필요없는 버전 파일을 모두 삭제할 수 있도록 했다. 

  - [Serverless Prune Plugin](https://www.serverless.com/plugins/serverless-prune-plugin)

  이 플러그인은 sls 로 deploy 하고 난 뒤, **설정한 갯수의 버전 파일만 남겨두고 모든 버전 파일들을 삭제** 한다. sls 로 deploy 할 때마다 오래된 버전 파일을 삭제하기 때문에 앞으로는 오래된 버전 파일들이 쌓여 코드 스토리지를 차지하지 않도록 할 수 있다. 지속적으로 관리할 수 있기에 가장 좋은 방법이라 생각한다.

  이 플러그인의 설정 방법은 [Prune Plugin: AWS Lambda Storage Limit Error](../../../docs/aws/serverless-framework/how-to-set-prune-plugin) 에서 확인 할 수 있다.

### 3) Deploy

  시험 삼아 1개의 Sereverless Framework 설정 파일(YAML)에 Serverless Prune Plugin을 설정하고 sls 로 deploy 했다. 예상대로 오래된 버전의 파일들이 모두 삭제되었다. 나머지 Sereverless Framework 설정 파일(YAML)에도 플러그인을 설정하고 모두 deploy 를 해서 오래된 버전 파일들을 삭제했다. 개발환경(Dev)의 람다함수들의 deploy 횟수가 많았었기에 개발환경만 deploy 해도 상당한 양의 코드 스토리지를 확보할 수 있었다.  

  - 75GB -> 22GB

  75GB를 가득채웠던 코드 스토리지 사용 용량이 22GB로 여유로워졌다. 



## Conclusion

  AWS Lambda 를 Deploy 할 때, 버전을 생성하지 않도록 하는 설정이나 방법에 대한 논의도 있었으나 최종적으로는 지금처럼 플러그인을 이용한 방법을 유지하는 것으로 결론이 났다.
  
  이유는 버전을 생성하지 않는 설정이나 방법이 Serverless Framework 를 이용한 방법이 아니라면 따로 문서를 만들어 내용을 관리해야 하기 때문이고 Serverless Framework 를 이용할 수 있는 방법이라도 현재의 플러그인을 이용한 방법과 중복되기 때문이다. 우리 팀은 인프라에 관한 내용은 YAML 파일 자체가 문서로서의 기능을 하기 때문에 최대한 YAML 파일을 통해서만 관리하고 싶어한다.

  다소 당황스러운 상황이었지만, 이번 기회를 통해 AWS Lambda 의 버전과 코드 스토리지에 대한 내용을 공부할 수 있어서 좋은 경험이었다.

  


<br /><br /><br /><br /><br />

--- 
- Refs
  + [【ServerlessFramework】LambdaがCode storage limit exceededになってしまった時の対処法](https://qiita.com/spring_i/items/40cfc99504d26b0834cc)
  + [Lambdaの関数とレイヤーのストレージがデフォルト上限（75GB）に達してしまった時に対応したこと](https://dev.classmethod.jp/articles/lambda-error-storage-limit)
  + [AWS Serverless | Code storage limit exceeded](https://stackoverflow.com/questions/51722526/aws-serverless-code-storage-limit-exceeded)
  + [AWS CLI - Delete Functions](https://docs.aws.amazon.com/cli/latest/reference/lambda/delete-function.html)
  + [[JAWS-UG CLI] Lambda:#8 バージョンの削除](https://qiita.com/tcsh/items/dc4592c2f73e64eb9f10)