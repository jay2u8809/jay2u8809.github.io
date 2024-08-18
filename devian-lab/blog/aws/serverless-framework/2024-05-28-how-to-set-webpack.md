---
slug: 2024-05-28-how-to-set-webpack
title: AWS Lambda - Webpack 으로 Upload Size Limit 해결하기
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
  webpack,
  multiple entry,
]
---

<!--title -->
# [Jobː談] AWS Lambda Unzipped size must be smaller than 262144000 bytes Error: Webpack
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-28",
  "updatedAt": "2024-08-16"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-28
  updatedAt: 2024-08-16
```

---

> "Webpack 을 적용하여 AWS Lambda 에 업로드할 소스코드의 사이즈를 줄여본다"

## Intro

  ```shell
    Unzipped size must be smaller than 262144000 bytes
  ```

  최근에 Serverless Framework(이하 `sls`)로 AWS Lambda 를 Deploy 하면서 나온 에러 메세지다. AWS Lambda 에 업로드할 소스코드의 용량이 (압축하지 않았을 경우에) 약 250MB 보다 적어야 한다는 것이다.

  현재 우리 팀의 서비스는 AWS Lambda 와 ECS Fargate 에 Nest.js 프로젝트를 올려 운영하고 있다. ECS Fargate 는 특별히 소스코드 용량 제한이 없지만 AWS Lambda 는 여러가지 용량 제한이 있다. 

  - [Lambda quotas - Function configuration, deployment, and execution](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#function-configuration-deployment-and-execution)
    + AWS Lambda 에 직접 올릴수 없는 용량이 큰 파일을 S3에 업로드하게 되는데 **50MB(압축했을 경우)** 또는 **250MB(압축하지 않았을 경우)** 이하여야한다. 

  이번 포스트에서는 Webpack 을 이용해 Nest.js 프로젝트의 소스코드 사이즈를 줄이는 방법에 대해 정리해본다.



## 소스코드의 용량이 늘어난 이유

  서비스가 성장하면서 추가한 기능만큼 소스코드도 늘어났지만, 가장 큰 원인은 업로드할 파일에 필요없는 내용이 많은 것이었다. 

  우리 팀의 프로젝트 구조를 간략히 설명하자면 1개의 Nest.js 프로젝트 내에서 여러가지 마이크로 서비스들을 각각 deploy 하는 방식으로 MSA를 구현하고 있다. 각 마이크로 서비스마다 각각의 Nest.js Application 과 Module 을 통해 필요한 기능들만 import 해서 사용하고 있지만, 의존성Dependencies(`node_modules`)은 공통이다. 

  ```yaml
    functions: 
      exampleLambdaIndex:
        handler: ${PATH}.handler
        package:
            patterns: 
                - '!**'
                - dist/** # js transfer result
                - node_modules/** # all of dependencies
            individually: true
  ```

  가령 A, B, C 라는 의존성이 있을 때, "회원 서비스"에서는 A, C 만 사용하더라도 회원 서비스를 deploy 할 때에는 node_modules 디렉토리에 있는 모든 의존성(A, B, C)을 업로드하는 것이다. 이렇다보니 서비스 초창기에는 별 문제 없었지만, 서비스가 성장하고 소스코드와 의존성이 늘어나면서 이제 더이상은 업로드할 수 없는 상황까지 오게 되었다.

  Lambda Layer를 사용해 공통 의존성들을 따로 관리하고 있음에도 이러한 문제가 발생해 막막했다.



## Webpack 을 사용하는 이유

  웹팩Webpack은 필요없는(사용하지 않는) 코드를 없앨수 있다. 각 마이크로 서비스에 실제 사용되는 소스코드와 의존성만을 이용해 결과물을 만들어 낸다. 그렇기 때문에 필요없는 코드들을 없앨 수 있고 실제 기능에 필요한 코드만을 업로드할 수 있도록 한다.

  위에서 예를 든 "회원 서비스"에서 사용하지 않는 B 의존성을 제거할 수 있다. 필요없는 의존성을 제거할 수 있기에 소스코드의 용량을 획기적으로 줄일수 있을 것이라 생각했다.



## Nest.js Webpack

  다양한 웹팩 툴들이 있었지만 Nest.js 의 웹팩 옵션을 사용해 빌드하는 방식을 선택했다. 웹팩을 적용할 때 가장 중요한 조건 중 하나가 Nest.js 와의 호환성이었는데, Nest.js 에서 웹팩을 지원하고 있다면 그 방법이 최선이라고 생각했다.  

  - [Nest.js-Webpack Options](https://docs.nestjs.com/cli/monorepo#webpack-options)
  - [Webpack Configuration](https://webpack.js.org/configuration/)

  `package.json` 파일에 웹팩을 적용해 빌드하도록 설정하고, 웹팩 설정을 위해 `webpack.config.js` 파일을 만들었다. 좀 더 자세한 내용은 [Nest.js Webpack 적용 방법](../../../docs/aws/serverless-framework/how-to-set-webpack-multiple-entry)에서 확인할 수 있다.

  - package.json
    ```json
      "scripts": {
        "build": "nest build --webpack --webpackPath ${PATH}/webpack.config.js"
      }
    ```

  - webpack.config.js
    ```javascript
      module.exports = (options, webpack) => {
        return {
          ...options,
          entry: `./src/${NESTJS_APP_PATH}`,
          externals: [],
          output: {
            ...options.output,
            clean: true,
            libraryTarget: 'commonjs2'
          },
          plugins: [
            ...options.plugins,
            new webpack.optimize.LimitChunkCountPlugin({
              maxChunks: 1,
            }),
          ],
        }
      };
    ```

### main.js
  웹팩을 적용해 Nest.js 를 빌드하면 `dist` 디렉토리에 **main.js** 파일이 생성된다. 이 파일은 _웹팩이 적용된 빌드 결과 파일_ 이다. 파일을 확인해보면 의존성을 포함한 관련 소스코드가 1개의 파일로 만들어져 있다. 

  - main.js 라는 이름은 변경할 수 있으며 기본값이 main.js 이다.


## Serverless Framework YAML

  Nest.js 프로젝트에 웹팩을 적용했다면 웹팩이 적용된 파일을 deploy 할 수있도록 해야한다. package.json 와 sls YAML 파일을 아래와 같이 수정한다.

  - package.json
    ```json
      "scripts": {
        "deploy:example": "nest build --webpack --webpackPath ${PATH}/webpack.config.js && sls deploy -c ./${YAML_PATH}/serverless.yaml"
      }
    ```

  - YAML
    + main.js 파일을 그대로 업로드 하는 방식이기에 더 이상 Lambda Layer 를 사용하지 않는다.
    ```yaml
      functions: 
      exampleLambdaIndex:
        handler: dist/main.handler  # main.js 의 handler 함수
        package:
          patterns: 
            - '!**'
            - dist/main.js # webpack result
          individually: true
    ```


  웹팩 적용을 끝내고 deploy 해보면 문제 없이 소스코드가 업로드되는 것을 확인할 수 있다.
    ```shell
      $ npm run deploy:example
    ```



## Conclusion

  - 250MB -> 15MB

  웹팩을 적용함으로서 deploy 할 때 업로드할 소스코드의 양을 대폭 줄일 수 있었다. 기존의 방식은 프로젝트의 소스코드(`dist`)와 의존성(`node_module`)을 모두 업로드하는 방식이었기에 250MB가 넘어가는 용량이었지만 웹팩을 통해 약 15MB 정도의 main.js 만 업로드하는 방식으로 바꾸었다. 이를 통해 S3 의 저장용량도 줄일 수 있었다. (AWS Lambda 의 소스코드는 일정 용량 이상인 경우 S3 에 업로드 된다.)

  - Build 필수

  sls 는 deploy 할 때, `patterns` 에 지정한 파일들을 그대로 패키징해 업로드한다. 빌드여부는 중요하지 않다. 그래서 가끔 코드를 수정한 뒤, build 를 하지 않고 deploy 했던 경우가 있었다. 그러면 수정 내용이 전혀 반영되지 않는다. webpack 처리를 위해 반드시 build 를 해야하기에 build 가 되지 않은 코드가 deploy 하는 일이 없어졌다.
 
  - Build 시간 증가

  아쉬운 점은 이를 통해 build 시간이 꽤나 길어졌다는 것이다. webpack 을 적용하는 시간이 걸리면서 약 30초 이상, 경우에 따라서는 약 3분 이상 build 시간이 늘어났다. build 시간은 단축 할 수 있는 다른 툴들도 알아봐야할 필요가 생겼다. 