---
# slug: /aws/serverless/how-to-reduce-lambda-usage
id: how-to-reduce-lambda-usage
title: NestJs Webpack 적용 방법
tags: [devian-lab, project, aws, Code storage limit exceeded, deploy, lambda, prune plugin, serverless, serverless framework, 람다버전, 용량부족]
# sidebar_position: 1
---

<!--title -->
# AWS Lambda 의 예전 버전을 삭제해 용량을 확보하자
<!--//title -->

```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-26",
  "updatedAt": "2024-06-26"
}
```

---

## Intro
 현재 우리 팀은 서버리스(Serverless)를 기반으로 서비스를 운영하고 있다. AWS Lambda 나 DynamoDB, AWS ECS Fargate 등 대부분의 인프라 리소스들을 서버리스 구조로 운영하고 있다. 이러한 서버리스 구조의 시스템은 사용 방법에 따라 사용료나 사용량이 엄청나게 늘어날 수 있다. 
 
 몇개월 전에 AWS Lambda 를 Deploy 할 수 없는 상황이 있었다. 이유는 소스코드를 업로드할 용량이 부족한 것이었다. AWS Lambda 는 소스코드를 AWS Lambda 나 S3 에 업로드하여 그 코드를 실행하는 방식인데, AWS Lambda 에 업로드할 공간이 부족해진 것이다. (참고로 AWS Lambda 의 소스코드 업로드 용량은 75GB 이다.)

 원인을 확인해보니 우리의 소스코드 용량이 늘어난 것도 있지만, 그동안 Deploy 를 하면서 과거에 Deploy 한 구버전 데이터가 계속 쌓여있었던 것이 가장 큰 원인이었다. 약 3년간의 코드들이 Deploy 를 할 때마다 새로운 버전으로서 계속 저장되고 있었고, 그것을 지금껏 지운적이 없었다. (개발 환경의 경우 거의 몇 백개의 구버전 데이터들이 있었다.) 


## Contents

### 1) 과거 Deploy 버전을 확인하자
 AWS Cosole 에서 각 Lambda 함수의 버전을 확인할 수 있다. 얼마나 많은 버전이 쌓였는지 확인해보자.

  - ① AWS Console Main
  - ② AWS Lambda
  - ③ 확인할 Function
  - ④ version 탭 선택

### 2) 과거 Deploy 버전을 지우는 방법들
 과거의 AWS Lambda Deploy 버전을 지워보자. 구 버전 데이터를 지우는 방법을 찾아본 결과, **AWS CLI** 를 사용해서 지우는 방법과 **Serverless Framework 의 Plugin** 을 사용해 지우는 방법이 있었다. 이 2가지 방법을 검토해 본 결과 최종적으로 _Serverless Framework Plugin 을 이용한 방법을 적용_하기로 했다.
 
#### 2-1) Serverless Framework 의 Plugin
 Serverless Framework 의 Plugin 을 사용하면 Deploy 할 때마다 정기적으로 구 버전의 데이터를 지울 수 있다. 따라서 좀더 운영이 편리해진다. 한번 설정해두면 그 뒤로는 특별히 신경쓰지 않아도 되기에 AWS CLI 에 비해 장점이 크다고 판단했다.
 
#### 2-2) AWS CLI
 AWS CLI 의 경우 일시적이다. 현재의 부족한 용량을 확보하기 위해 바로 지워야하는 경우에는 유용하나 앞으로 디플로이 할 때마다 다시 새로운 버전이 생기고 또 그 버전들이 쌓이면 정기적으로 지워줘야한다. 별도의 Script 를 작성해서 관리하고 실행하는 등의 수고가 따른다. 따라서 당장 Deploy 가 안되는 상황이었기에 몇 개의 함수를 골라 AWS CLI 로 지우고 Deploy 가 가능한 용량만큼 확보하는 정도로 사용했다. 
 

### 3) Serverless Prune Plugin
 이번에 도입한 Serverless Framework 의 Plugin 은 `Serverless Prune Plugin`　 라는 plugin 이다. Serverless Framework 를 통해 Deploy 를 하게되면 Cloudformation 생성/갱신이나 소스코드 업로드 등 Deploy 작업이 모두 끝나고 마지막에 실행되어 AWS Lambda 의 과거 버전을 삭제한다. 사용방법은 아래와 같다. 
 
- ① serverless prune plugin 설치
  + `npm install --save-dev serverless-prune-plugin`
- ② yaml 파일 수정
  + number: 구버전을 몇개 남길 것인가? 3인 경우 최신 3개만 남기고 구버전의 데이터를 모두 지운다.
  
```yaml
service: example-service

plugins:
  - serverless-prune-plugin

... 

custom:
  prune:
    automatic: true
    number: 3

```

 설정 자체는 간단하다. `includeLayers` 항목을 추가하면 layer 의 구버전도 삭제가 가능하다고 하는데 사용해보지 않았다. 또, 이번에는 사용해보지 않았지만 sls 명령어를 이용해 dry run 도 가능하고 바로 실행도 가능하다고 한다. 공식 페이지에 자세한 설명이 있다. (※ Refs: [Serverless Prune Plugin](https://www.serverless.com/plugins/serverless-prune-plugin))

 Plugin 을 추가하고 AWS Lambbda 를 Serverless Framework 로 Deploy 하니 아래와 같은 로그가 나왔다. 
 
 ```shell
 ✔ Pruning of functions complete
 ```
 
 AWS Lambda console 에서 버전 이력을 확인해보니 3개만 남고 모두 지워진 것을 확인할 수 있었다. AWS Lambda Dashboard 의 Code storage 에서도 사용 용량이 줄어든 것을 확인할 수 있었다. 


## etc
### 구버전 Deploy 데이터는 지워도 될까?
 AWS Lambda 는 Deploy 한 소스코드를 1개의 버전으로 저장하여 관리한다. 소스코드의 용량이 커서 S3 에 업로드할 때에도 버전이 만들어지고, Layer 도 내용에 변경이 있다면 별도의 Layer 버전이 만들어져 관리된다. 젠킨스(Jenkins)같은 다른 Deploy 툴을 사용할 때도 이전 버전의 파일들을 저장해두어 롤백하기 쉽게 하곤 한다.
 
 문제는 현재 우리 팀의 운영 정책 상, AWS Lambda 의 과거 Deploy 버전이 그다지 쓸모가 없다는 것이다. 우리 팀은 Severless Framework 를 이용해 AWS Lambda 를 Deploy　한다. 만약 Deploy 이후 문제가 생겨서 다시 되돌려야할 때는 다음과 같이 진행한다.
 
  - 1) 직전에 Deploy 한 Git Tag 검색
  - 2) 해당 Commit 을 다시 Deploy

AWS Lambda 에 저장된 이전 버전을 이용해 롤백하기보다는 직전에 Deploy 한 Git 의 해당 commit 을 다시 Deploy 하는 형태이다. AWS Lambda 의 구버전을 이용해 되돌린다는 개념보다 과거의 소스코드를 재배포한다는 개념이다. 
 
 따라서 우리 팀과 같이 AWS Lambda 의 구버전 데이터를 활용하지 않는다면 얼마든지 지워도 상관없을 듯하다. (그대로 혹시나 AWS Console 에서 바로 과거 버전으로 되돌릴 수도 있기에 우리 팀도 최소 3개의 버전은 남겨 놓고 삭제했다.)

### AWS Lambda 의 업로드 용량이 부족하다면 어떤 에러가 발생할까?
 아래의 에러는 이번에 Serverless Framework 로 Deploy 하면서 발생한 에러의 일부이다. `Code storage limit exceeded` 라는 에러가 발생했다.

```shell
Code storage limit exceeded. (Service: Lambda, Status Code: 400, ...)
```

### AWS Lambda 의 전체 업로드 용량을 확인하는 방법
  AWS Lambda 의 1개 함수가 아닌 업로드 할 수 있는 전체 소스코드의 용량은 `75GB` 이다. (※ Refs: [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#compute-and-storage))

  - _AWS Console Main-> AWS Lambda -> Dashboard 의 Code storage_
    + Refs: [Monitoring Lambda code storage](https://docs.aws.amazon.com/lambda/latest/operatorguide/code-storage.html)

### AWS Lambda 함수의 Version 에 대해
- Serverless Framework 로 AWS Lambda 를 Deploy 하면, Deploy 한 코드를 `하나의 버전`으로 저장하여 관리한다.
  + 소스코드의 내용을 변경하지 않는다면 저장하지 않는다.
- 소스코드를 수정하여 10번 Deploy 했다면 10개의 버전을 저장하고, 가장 최근에 Deploy 한 코드가 최신 버전이 된다.
- 약 5mb 의 소스코드를 10번 deploy 한 100개의 function 이 있다면, 약 5GB (5mb X 10 X 100) 가 AWS Lambda 에 저장된다.
  + 버전으로 관리하는 예전 코드도 75GB 내에 모두 저장된다.


## Conclusion
 `Serverless Prune Plugin` 을 도입하고 AWS Lambda 의 전체 업로드 용량을 빠르게 확보할 수 있었다. 운영 중인 전체 함수에 prune plugin 을 적용한 뒤 사용 용량을 확인해 보았다.


  - 75GB -> 22GB
  

 구버전의 데이터를 지우는 것으로 약 70%의 여유 공간을 확보 할 수 있었고, Deploy 를 하면서 구버전을 지우고 있기에 운영 리소스도 크지 않았다. 이전처럼 Deploy 하는 것만으로도 더이상 용량 부족 문제가 일어나지 않도록 할 수 있었다.
 
(근본적으로 AWS Lambda Deploy 를 할 때 버전이 생기지 않도록 하는 설정은 없는가에 대해서는 찾아보지 않았지만 혹시나 만약을 위한 방편으로 지금처럼 새로운 버전을 만들고 오래된 버전을 지우는 형태로 운영하기로 했다.)

<br /><br /><br /><br /><br />

--- 
- Refs
	+ [Npm - serverless-prune-plugin](https://www.npmjs.com/package/serverless-prune-plugin)
	+ [Lambdaの関数とレイヤーのストレージがデフォルト上限（75GB）に達してしまった時に対応したこと](https://dev.classmethod.jp/articles/lambda-error-storage-limit)
	+ [Serverless Pruning What is it? When and How to use it?](https://medium.com/@pjoshi_96874/serverless-pruning-what-is-it-when-and-how-to-use-it-1ac79dcb927a)
	+ [AWS CLI - Delete Functions](https://docs.aws.amazon.com/cli/latest/reference/lambda/delete-function.html)
	+ [【ServerlessFramework】LambdaがCode storage limit exceededになってしまった時の対処法](https://qiita.com/spring_i/items/40cfc99504d26b0834cc)
	+ [AWS Serverless | Code storage limit exceeded](https://stackoverflow.com/questions/51722526/aws-serverless-code-storage-limit-exceeded)