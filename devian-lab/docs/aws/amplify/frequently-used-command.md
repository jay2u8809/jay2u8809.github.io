---
slug: /aws/amplify/frequently-used-command
# id: frequently-used-command
title: 자주 사용하는 명령어
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  aws,
  amplfiy,
  command,
]
# sidebar_position: 1
---

<!--title -->
# AWS Amplify 명령어
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-23",
  "updatedAt": "2024-08-14"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-06-23
  updatedAt: 2024-08-14
```

---
 
## Amplify Commands

### - Amplify CLI install

  #### npm i @aws-amplify/cli
  
    - `npm install -g @aws-amplify/cli@${VERSION}`: 특정 버전의 amplify CLI 를 설치

  ```shell
    $ npm install -g @aws-amplify/cli@8.5.1

    # 버전 확인
    $ amplify -v
    8.5.1
  ```

### - Amplify Init

  #### amplify init

    - **로컬에 amplify 환경을 구축** 하는 명령어
    - 이미 클라우드(AWS)에 존재하는 환경(기존 환경)을 그대로 사용할 때에도 `amplify init` 을 이용해 기존 환경 정보를 가져온다.

  ```shell
    $ amplify init

    Note: It is recommended to run this command from the root of your app directory
    ? Do you want to use an existing environment? Yes # 기존 환경을 그대로 사용할 것인지?
    ? Choose the environment you would like to use: development # 사용할 환경 선택
    ? Choose your default editor: IntelliJ IDEA # 에디터(툴) 선택
    Using default provider  awscloudformation
    ? Select the authentication method you want to use: AWS profile # AWS Profile 을 사용해서 인증

    ...

    ? Please choose the profile you want to use ${PROFILE_NAME} # 선택한 AWS Profile 명
    Overrides functionality is not implemented for this category
    ✔ Initialized provider successfully.
  ```

### - Amplify Status

  #### amplify status

    - 로컬의 현재 amplify 상태를 확인하는 명령어
    - **현재 작업 중인 환경이 어디인지, 클라우드(AWS)와의 내용 차이가 있는지 확인** 할 수 있다.
    - Operation 이 Update 인 Category 는 클라우드의 내용과 자신의 로컬의 내용에 차이가 있다는 뜻이다. 
      + 최신의 데이터를 받기 위해 `amplify pull` 을 하거나 자신의 변경 내용을 클라우드에 반영하도록 `amplify push` 를 하면 _No Change_ 가 된다.

  ```shell
    > amplify status

        Current Environment: development	# 현재 작업중인 환경

    | Category | Resource name   | Operation | Provider plugin   |
    | -------- | -------------   | --------- | ---------------   |
    | Api      | ${SERVICE_NAME} | Update    | awscloudformation |
    | Hosting  | S3AndCloudFront | No Change | awscloudformation |
    ...


    GraphQL endpoint: XXXX
    ...
    Hosting endpoint: XXXX
    ...

  ```


### - Amplify Env List 

  #### amplify env list

    - Amplify 의 여러 환경 리스트를 확인하는 명령어
    - 생성한 모든 환경들을 확인할 수 있다.
      + `*` 가 붙어있는 환경이 현재 자신이 checkout 하고있는 환경(현재 자신이 작업중인 환경)이다.
 
  ```shell
    $ amplify env list

    | Environments |
    | ------------ |
    | *development  |
    | production   |
    | staging     |
  ```


### - Amplify Env Checkout

  #### amplify env checkout ENV_NAME

    - 작업하려는 환경을 바꾸는 명령어
  
  ```shell
    # staging 환경으로 바꾸기
    $ amplify env checkout staging
  ```

### - Amplify Pull

  #### amplify pull

    - 클라우드(AWS)에 있는 데이터를 로컬에 받기 위한 명령어
    - 로컬의 데이터를 클라우드와 동기화할 때 사용한다.
      + _최신의 클라우드 데이터를 로컬에 받아 동기화한 후 작업하기 위함_
    - **Pre-pull status**: pull 전의 로컬의 status 
    - **Post-pull status**: pull 후, 클라우드 내용을 로컬에 덮어쓰기 한 뒤의 status 
  
  ```shell
    $ amplify pull

    Pre-pull status:

        Current Environment: staging
        
    | Category | Resource name   | Operation | Provider plugin   |
    | -------- | -------------   | --------- | ---------------   |
    | Api      | ${SERVICE_NAME} | Update    | awscloudformation |
    | Hosting  | S3AndCloudFront | No Change | awscloudformation |

    Local changes detected.
    Pulling changes from the cloud will override your local changes.
    ? Are you sure you would like to continue? Yes	# 클라우드와 로컬의 내용이 다르니 클라우드 내용을 pull 해서 로컬에 덮어쓰기 하겠는가? -> Yes 
    Overrides functionality is not implemented for this category
    ✔ Successfully pulled backend environment staging from the cloud.

    Post-pull status:

        Current Environment: staging
        
    | Category | Resource name   | Operation | Provider plugin   |
    | -------- | -------------   | --------- | ---------------   |
    | Api      | ${SERVICE_NAME} | No Change | awscloudformation |
    | Hosting  | S3AndCloudFront | No Change | awscloudformation |
  ```

  
### - Amplify Push

  #### amplify push

    - 변경 된 내용을 클라우드(AWS)에 반영할 때 사용하는 명령어
    - api, auth 등 로컬에서 변경한 amplify 내용을 클라우드 상에 반영하기 위해 사용한다.
    - **기본적으로 amplify status 명령어에 나온 모든 Category 에 대해 push 하기 때문에 주의가 필요하다.**
    - `amplify ${CATEGORY_NAME} push`
      + Category 별로 push 가 가능하다. 
      + 다른 Category 에 변경 사항이 있더라도 해당 Category 에 해당하는 Resource 만 클라우드에 반영된다.

  ```shell
    $ amplify api push

        Current Environment: staging
    
    | Category | Resource name   | Operation | Provider plugin   |
    | -------- | -------------   | --------- | ---------------   |
    | Api      | ${SERVICE_NAME} | Update    | awscloudformation |

    ? Are you sure you want to continue? Yes  # 선택한 Category 에 대한 push 작업을 하겠는가? -> Yes

    ...

    ? Do you want to update code for your updated GraphQL API Yes	# 수정한 GraphQL API 를 클라우드에 반영할 것인가? -> Yes
    ? Do you want to generate GraphQL statements (queries, mutations and subscription) based on your schema types?
    This will overwrite your current graphql queries, mutations and subscriptions Yes	# schema.graphql 파일에 정의한 스키마와 기능(쿼리, 뮤테이션 등)을 생성(덮어쓰기)할 것인가? -> Yes

    ...

    ✨  Done in 291.02s.
  ```
  

### - Amplify Publish

  #### amplify publish

    - html, js, css, image 등의 호스팅 리소스들을 S3 등에 업로드할 때 사용
  
  ```shell
    $ amplify publish
  ```



<br /><br /><br /><br /><br />

--- 
- Refs
  + [Github-Amplify/cli](https://github.com/aws-amplify/amplify-cli#readme)
  + [AWS Amplify フレームワーク 入門メモ](https://qiita.com/rubytomato@github/items/5d9b6e184b615f974f28)
  + [AWS Amplify 備忘録](https://qiita.com/propella/items/38e3906a4573fdfca202#%E6%97%A2%E5%AD%98%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E5%8F%82%E5%8A%A0%E3%81%99%E3%82%8B)

