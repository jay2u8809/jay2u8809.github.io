---
# slug: /aws/serverless-framework/how-to-set-webpack-multiple-entry
id: how-to-set-webpack-multiple-entry
title: Nest.js Webpack 적용 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  aws,
  lambda,
  serverless,
  serverless framework,
  webpack,
  multiple entry,
]
keywords: [
  devian-lab,
  Jobː談,
  aws,
  lambda,
  serverless,
  serverless framework,
  webpack,
  multiple entry,
]
description: Nest.js 에 Webpack 을 적용하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Nest.js - Webpack 적용 방법
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

## Error : AWS Lambda Size Limit

  AWS Lambda 를 Serverless Framework 로 Deploy 하면 아래와 같은 에러로 실패했다. 

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


## Nest.js Build: Webpack 적용하여 빌드하기

  - Refs: [Nest.js-Webpack Options](https://docs.nestjs.com/cli/monorepo#webpack-options)

### 1) webpack.config.js

  #### entry

    - AWS Lambda 에 Deploy 할 handler 가 있는 파일을 지정한다.
    - 파일의 경로는 프로젝트의 Root 를 기준으로 `절대경로`를 지정

  #### output.filename

    - webpack 으로 bundling 했을 때, **생성할 파일명** 을 지정한다.
    - 설정하지 않으면 `main.js` 로 생성된다.
    - `[name]` 에 entry 객체의 key 가 지정된다.
      + [Qiita: webpackの基本だけどハマりやすいentryの設定と[name]](https://qiita.com/sansaisoba/items/921438a19cbf5a31ec53)
    - _[name].bundle.js_ 처럼 `.` 을 이용하여 지정하지 않는다.
      + AWS Lambda 가 실행될 때 `Runtime.ImportModuleError` 가 발생한다.

  #### 1개의 Entry 설정

    ```javascript
      module.exports = (options, webpack) => {
        return {
          ...options,
          entry: `./src/lambda/handler.ts`,
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

  #### 여러 개의 Entry 설정

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

  #### plugins

    - _LimitChunkCountPlugin_ 
      + 각 AWS Lambda 함수마다 1개의 파일로 만들어주는 plugin
      + 연결된 소스코드가 많고 길 경우, Webpack 은 자동으로 chunk 하여 bundling 한다.
      + 하나의 파일이 아닌 여러 개의 파일로 분할 될 수 있으므로 파일의 갯수를 지정할 경우 사용한다.



### 2) Nest.js Build 

  - `webpack.config.js` 파일을 작성했다면 올바르게 build 가 되는지 확인해보자. Nest.js 의 webpack 옵션을 이용하여 build 한다. Webpack bundling 파일은 dist 디렉토리에서 확인할 수 있다.

    ```shell
      $ nest build --webpack --webpackPath src/app/webpack.config.js
    ```

  - 꽤나 긴 명령어이므로 AWS Lambda 를 Serverless Framework 로 Deploy 할 때, webpack 을 적용해 build 하도록  package.json 을 수정한다.

    ```json
      {
        "scripts": {
          "build": "nest build",
          "deploy:lambda": "nest build --webpack --webpackPath src/lambda/webpack.config.js && sls deploy -c serverless.yaml"
        }
      }
    ```


## Deploy: Serverless Framework

  webpack 을 적용해 bundling 한 파일들이 Deploy 할 때 정확하게 업로드 될 수 있도록 한다.

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

  #### handler

    - webpack 으로 생성된 파일명에 해당하는 handler 함수명을 지정
    - webpack.config.js 의 entry 의 key 에 해당하는 파일

  #### include

    - webpack 으로 생성된 파일명을 지정한다.
      + `[name]-bundle.js`
    - **?-bundle.js**
      + 간혹 webpack 의 `LimitChunkCountPlugin` 를 이용해도 파일이 분할(chunk)되는 경우가 있다.
      + `[name]-bundle.js` 의 경우, 분할된다면 [name] 에 숫자가 붙어 `8-bundle.js` 나 `10-bundle.js` 등의 숫자 파일이 생성된다.
        - [StackOverflow: webpack is producing lots of numbered files](https://stackoverflow.com/questions/43507438/webpack-is-producing-lots-of-numbered-files)
      + 이러한 파일들도 함께 include 해야하기 때문에 글자 수에 맞춰 `?-bundle.js` 또는 `??-bundle.js` 를 지정한다.
      + 소스코드가 길어질 경우에 분할 파일들이 생성될 수 있기에 반드시 해야하는 것은 아니다.




<br /><br /><br /><br /><br />

--- 
- Refs:
  + [Webpack.js.org: Entry Point](https://webpack.js.org/concepts/entry-points/)
  + [Webpack.js.org: LimitChunkCountPlugin](https://webpack.js.org/plugins/limit-chunk-count-plugin)
  + [Webpack.js.org: Output](https://webpack.js.org/configuration/output/)