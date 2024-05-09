---
# slug: /wiki/serverless-framework/how-to-set-webpack-multiple-entry
id: how-to-set-webpack-multiple-entry
title: Webpack 적용하기 - Multiple EntryPoint
tags: [de.log, wiki, serverless framework, aws lambda, serverless, sls, webpack, multi entry, multiple entry, nest.js]
# sidebar_position: 1
---


<!--title -->
# Webpack 적용하기: Multiple Entry
<!--//title -->

> Nest.js 로 개발, Serverless Framework 로 AWS Lambda 를 Deploy 합니다.

```yaml
System:
  Versions:
    NodeJs: v16.20.2
    NestJs: v8.2.8
    ServerlessFramework: v3.36.0
    Typescript: v4.3.5
```
 
## Nest.js Build: Webpack
- nest.js 의 webpack 옵션을 이용하여 build 한다. 
  + `nest build --webpack --webpackPath ${webpack.config.js path}`
- package.json
  + AWS Lambda 를 Serverless Framework 를 이용해 Deploy 할 때, webpack 을 적용해 build 하도록 명령어를 만든다. 
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

## webpack.config.js
- entry
  + key 값으로 Serverless framework 로 Deploy 할 AWS Lambda 함수를 지정
  + 파일의 경로는 프로젝트의 Root 를 기준으로 `절대경로`를 지정
- output.filename
  + webpack 으로 bundling 했을 때, 생성된 파일명
  + `[name]` 에 entry 객체의 key 가 지정된다.
    - [Qiita: webpackの基本だけどハマりやすいentryの設定と[name]](https://qiita.com/sansaisoba/items/921438a19cbf5a31ec53)
  + _[name].bundle.js_ 처럼 `.` 을 이용하여 지정하지 않는다.
    - AWS Lambda 가 실행될 때 `Runtime.ImportModuleError` 가 발생한다.
- plugins
  + _LimitChunkCountPlugin_ 
    - 각 AWS Lambda 함수마다 1개의 파일로 만들어주는 plugin
    - 연결된 소스코드가 많고 길 경우, Webpack 은 자동으로 chunk 하여 bundling 한다.
    - 하나의 파일이 아닌 여러 개의 파일로 분할 될 수 있으므로 파일의 갯수를 지정할 경우 사용한다.

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

## Serverless Framework: YAML
- handler
  + webpack 으로 생성된 파일명에 해당하는 handler 함수명을 지정
- include
  + webpack 으로 생성된 파일명을 지정(`[name]-bundle.js`)
  + **?-bundle.js**
    - 간혹 webpack 의 `LimitChunkCountPlugin` 를 이용해도 파일이 분할(chunk)되는 경우가 있다.
    - `[name]-bundle.js` 의 경우, 분할된다면 [name] 에 숫자가 붙어 `8-bundle.js` 나 `10-bundle.js` 등의 숫자 파일이 생성된다.
      + [StackOverflow: webpack is producing lots of numbered files](https://stackoverflow.com/questions/43507438/webpack-is-producing-lots-of-numbered-files)
    - 이러한 파일들도 함께 include 해야하기 때문에 글자 수에 맞춰 `?-bundle.js` 또는 `??-bundle.js` 를 지정한다.
    - 소스코드가 길어질 경우에 분할 파일들이 생성될 수 있기에 반드시 해야하는 것은 아니다.
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


<br /><br /><br /><br /><br />

--- 
- Refs:
  + [Webpack.js.org: Entry Point](https://webpack.js.org/concepts/entry-points/)
  + [Webpack.js.org: LimitChunkCountPlugin](https://webpack.js.org/plugins/limit-chunk-count-plugin)
  + [Webpack.js.org: Output](https://webpack.js.org/configuration/output/)