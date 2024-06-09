---
# slug: /wiki/serverless-framework/how-to-set-webpack-multiple-entry
id: how-to-set-webpack-multiple-entry
title: NestJs Webpack 적용 방법
tags: [devian-lab, project, serverless framework, aws lambda, webpack, multiple entry, nest.js]
# sidebar_position: 1
---

<!--title -->
# AWS Lambda 다이어트 - Webpack 으로 소스코드의 사이즈를 줄이자
<!--//title -->

```json
{
  "author": "Onigiri.J",
  "createdAt": "2024-05-28",
  "updatedAt": "2024-05-28"
}
```

---


## Intro

> Webpack 을 이용해 AWS Lambda 에 업로드할 Nest.js 소스코드의 용량을 줄이는 방법을 정리한다.

 회사 프로젝트의 소스코드 용량이 점점 늘어나 `AWS Lambda Layer` 를 이용함에도 더 이상 Deploy 가 되지 않는 상황까지 왔다.

여러 번의 개선을 통해 다시 업로드가 되기도 했지만 커져가는 소스코드 용량을 감당하지 못하게 되어 결국 Webpack 을 도입하자고 제안하게 되었고 이번 Node 20 버전 업 작업을 통해 모든 AWS Lambda 에 webpack 을 적용했다.


## Problem

 지금까지는 소스코드의 용량이 늘어날 때에 아래와 같은 방법으로 대응을 했다.

- AWS Lambda Layer 적용
  + serverless framework 의 `serverless-layers` plugin 적용
- 타입스크립트 빌드 대상 조정
  + `tsconfig.build.json` 의 exclude 항목에서 빌드가 필요없는 디렉토리 추가
- AWS Lambda Handler 의 indclude 대상 조정
  + AWS Lambda 의 include 항목에 최소한의 디렉토리를 지정하 

 어떻게든 최소한의 파일만 업로드하도록 수정하였으나 프로젝트가 커지고 소스코드가 늘어나면서 점점 한계에 이르렀다. 

### Error : AWS Lambda Size Limit

 AWS Lambda 를 serverless framework 로 Deploy 하면 이와 같은 에러로 Deploy 에 실패했다. 

```shell
... ○ Created layer package  ${PRJECT_NAME}.serverless/sample-project-dev-nodejs-default.zip (57.4 MB)
... ○ Uploading layer package...
... ○ OK...
ServerlessLayers error:
    Action: Lambda:publishLayerVersion
    Params: {"Content":{"S3Bucket":"sample-project-sls-deploy-bucket","S3Key":"serverless/sample-project/dev/layers/sample-project-dev-nodejs-default.zip"},"LayerName":"sample-project-dev-nodejs-default","Description":"created by serverless-layers plugin","CompatibleRuntimes":["nodejs"],"CompatibleArchitectures":["x86_64","arm64"]}
AWS SDK error:
    Unzipped size must be smaller than 262144000 bytes

⠇ Packaging (245s)
error Command failed with exit code 1.
```



## Solution
### Nest.js Build: Webpack 적용하여 빌드하기

 결국에는 Webpack 을 이용해 소스코드의 사이즈를 줄여보기로 헀고, 다양한 Webpack 툴들이 있었지만 Nest.js 에서 공식적으로 지원하는 방식을 사용하기로 했다.

 [Nest.js 의 공식 문서](https://docs.nestjs.com/cli/monorepo#webpack-options) 를 보면 `webpack.config.js` 파일이 필요하다. 이 파일부터 만들어보자.


### 1) webpack.config.js

 여러 개의 AWS Lambda 함수를 Deploy 할 때는 각 Handler 마다 Webpack Bundling (Webpack의 결과물) 파일이 필요하다.
  
 예를 들어 아래의 3개 AWS Lambda 를 Deploy 한다고 가정하자.
 
  - convertImage: 이미지를 변환하는 Lambda
  - backup: 이미지를 백업하는 Lambda
  - statisticUser: 유저정보의 통계를 내는 Lambda
  
 이 경우, 각 Lambda Handler 별로 Webpack bundling 을 한 파일들이 필요하다. 소스코드의 내용이 중복되더라도 각 handler 마다 webpack 이 적용된 파일들이 있어야한다는 뜻이다.


```javascript
module.exports = (options, webpack) => {
  return {
    ...options,
    entry: {
      convertImage: './src/lambda/convert-image.ts',
      backupS3: './src/lambda/backup-s3.ts',
      statisticsUsers: './src/statistics/statistics-users.ts',
    },
    externals: [],
    output: {
      ...options.output,
      clean: true,
      libraryTarget: 'commonjs2'
      filename: '[name]-bundle.js',
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

- entry
  + AWS Lambda 에 Deploy 할 handler 가 있는 파일을 지정한다.
  + 파일의 경로는 프로젝트의 Root 를 기준으로 `절대경로`를 지정
  
- output.filename
  + webpack 으로 bundling 했을 때, 생성할 파일명을 지정한다.
  + `[name]` 에 entry 객체의 key 가 지정된다.
    - [Qiita: webpackの基本だけどハマりやすいentryの設定と[name]](https://qiita.com/sansaisoba/items/921438a19cbf5a31ec53)
  + _[name].bundle.js_ 처럼 `.` 을 이용하여 지정하지 않는다.
    - AWS Lambda 가 실행될 때 `Runtime.ImportModuleError` 가 발생한다.

- plugins
  + _LimitChunkCountPlugin_ 
    - 각 AWS Lambda 함수마다 1개의 파일로 만들어주는 plugin
    - 연결된 소스코드가 많고 길 경우, Webpack 은 자동으로 chunk 하여 bundling 한다.
    - 하나의 파일이 아닌 여러 개의 파일로 분할 될 수 있으므로 파일의 갯수를 지정할 경우 사용한다.


### 2) Nest.js Build 

 webpack.config.js 파일을 작성했다면 올바르게 build 가 되는지 확인해보자. nest.js 의 webpack 옵션을 이용하여 build 한다. (Webpack bundling 파일은 dist 디렉토리에서 확인할 수 있다.)

- ex) `nest build --webpack --webpackPath ${webpack.config.js path}`

```shell
$ nest build --webpack --webpackPath src/app/webpack.config.js
```

 꽤나 긴 명령어이므로 AWS Lambda 를 Serverless Framework 로 Deploy 할 때, webpack 을 적용해 build 하도록  package.json 을 수정한다.
 
```json
{
  "name": "example-project",
  "version": "0.0.1",
  "scripts": {
    "build": "nest build",
    "deploy:lambda": "nest build --webpack --webpackPath src/lambda/webpack.config.js && sls deploy -c serverless.yaml"
  }
}
```


### 3) Deploy: Serverless Framework

 webpack 을 적용해 bundling 한 파일들이 Deploy 할 때 정확하게 업로드 될 수 있도록 Serverless Framework 의 `yaml` 파일의 수정도 필요하다. 

```yaml
...
functions: 
  handleConvertImage:
    handler: dist/convertImage-bundle.handler
    package:
      individually: true
      include:
        - dist/convertImage-bundle.js
        - dist/?-bundule.js
        - dist/??-bundule.js
      exclude:
        - '**'
    timeout: 900
    memorySize: 1024
    events:
      - sns: XXXXXXXXX

  handleBackupS3:
    handler: dist/backupS3-bundle.backupUserHandler
      package:
        individually: true
        include:
          - dist/backupS3-bundle.js
          - dist/?-bundule.js
          - dist/??-bundule.js
        exclude:
          - '**'
      timeout: 900
      memorySize: 1024
      events:
        - schedule: cron(10 18 L * ? *)
  
  handleStatisticsUsers:
    handler: dist/statisticsUsers-bundle.handler
      package:
        individually: true
        include:
          - dist/statisticsUsers-bundle.js
          - dist/?-bundule.js
          - dist/??-bundule.js
        exclude:
          - '**'
      timeout: 900
      memorySize: 4096
      events:
        - schedule: cron(30 22 * * ? *)
```

- handler
  + webpack 으로 생성된 파일명에 해당하는 handler 함수명을 지정
  + webpack.config.js 의 entry 의 key 에 해당하는 파일

- include
  + webpack 으로 생성된 파일명을 지정한다.
    - `[name]-bundle.js`
  + **?-bundle.js**
    - 간혹 webpack 의 `LimitChunkCountPlugin` 를 이용해도 파일이 분할(chunk)되는 경우가 있다.
    - `[name]-bundle.js` 의 경우, 분할된다면 [name] 에 숫자가 붙어 `8-bundle.js` 나 `10-bundle.js` 등의 숫자 파일이 생성된다.
      + [StackOverflow: webpack is producing lots of numbered files](https://stackoverflow.com/questions/43507438/webpack-is-producing-lots-of-numbered-files)
    - 이러한 파일들도 함께 include 해야하기 때문에 글자 수에 맞춰 `?-bundle.js` 또는 `??-bundle.js` 를 지정한다.
    - 소스코드가 길어질 경우에 분할 파일들이 생성될 수 있기에 반드시 해야하는 것은 아니다.


## Conclusion

 - AWS Lambda 에 업로드할 파일의 사이즈가 1/10 이 되었다.
 - Serverless Framework 로 Deploy 할 때, 반드시 build 를 하게되었다.
 - build 시간이 꽤나 길어지게 되었다.

 AWS Lambda 의 사이즈 제한 문제로 인한 Deploy 실패를 해결해 보았다. Webpack 을 적용함으로써 AWS Lambda 에 업로드하는 소스코드의 양이 엄청나게 줄어들게 되었다. (약 65MB -> 약 5MB)

 이를 통해 AWS Lambda 의 전체 소스코드 용량(75GB)에도 여유가 생기게 할 수 있었고, 동작확인 결과 Webpack 적용 전의 코드와 동일하게 동작함을 확인할 수 있었다.

  또한, 가끔 코드를 수정한 뒤, build 를 하지 않고 deploy 했던 경우가 있었는데, 수정 내용이 전혀 반영되지 않아 당황했던 적이 있다. webpack 처리를 위해 반드시 build 를 해야하기에 그런 실수를 할 일이 없어졌다.

 다만 아쉬운 점은 이를 통해 build 시간이 꽤나 길어졌다는 것이다. webpack 을 적용하는 시간이 걸리면서 약 30초 이상, 경우에 따라서는 약 3분 이상 build 시간이 늘어났다. build 시간은 단축 할 수 있는 다른 툴들도 알아봐야할 필요가 생겼다. 


<br /><br /><br /><br /><br />

--- 
- Refs:
  + [Webpack.js.org: Entry Point](https://webpack.js.org/concepts/entry-points/)
  + [Webpack.js.org: LimitChunkCountPlugin](https://webpack.js.org/plugins/limit-chunk-count-plugin)
  + [Webpack.js.org: Output](https://webpack.js.org/configuration/output/)