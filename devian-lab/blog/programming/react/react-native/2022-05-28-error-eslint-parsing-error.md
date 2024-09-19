---
slug: 2022-05-28-error-eslint-parsing-error
title: ReactNative - [Error] ES Lint - Parsing error
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  react native,
  ios,
  error,
  trouble shooting,
  ios build failed,
  could not get the simulator list from xcode,
  could not find podfile,
]
keywords: [
  devian-lab,
  Jobː談,
  react native,
  ios,
  error,
  trouble shooting,
  ios build failed,
  could not get the simulator list from xcode,
  could not find podfile,
]
description: React Native 에서 ES Lint 의 Parsing error 를 해결해 본다.
---

<!--title -->
# [React Native] ES Lint - Parsing error
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-05-28",
  "updatedAt": "2022-05-28"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-05-28
  updatedAt: 2022-05-28
```

---

## Intro

  React Native 프로젝트에서 ES Lint 설정을 한 뒤, `.eslintrc.js` 파일을 조금 수정했다.

  Typescript 를 사용하고 있기에 parserOptions 에 project 항목을 추가하여 `tsconfig.json` 파일을 참조하도록 했다.

    - `.eslintrc.js`

      ```json
        ... 

        'parserOptions': {
          'ecmaFeatures': {
            'jsx': true
          },
          'ecmaVersion': 12,
          'project': './tsconfig.json',
        },

        ...
        
      ```

  그리고 기본값으로 설정되어 있는 `package.json` 파일의 lint를 실행했다.

    -  `package.json`

      ```json
        "scripts": {
          ...
          "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
          ...
        },
      ```

    - 실행

      ```shell
        $ npm run lint

        /${PROJECT_PATH}/${APP_NAME}/.eslintrc.js
          0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
        The file does not match your project config: .eslintrc.js.
        The file must be included in at least one of the projects provided

        /${PROJECT_PATH}/${APP_NAME}/babel.config.js
          0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
        The file does not match your project config: babel.config.js.
        The file must be included in at least one of the projects provided

        /${PROJECT_PATH}/${APP_NAME}/metro.config.js
          0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
        The file does not match your project config: metro.config.js.
        The file must be included in at least one of the projects provided
      ```



## 원인 분석

  Error 로그를 읽어보니 `.eslintrc.js`, `babel.config.js`, `metro.config.js` 3개의 설정 파일들이 `.eslintrc.js` 파일에 방금 추가한 project 속성의 설정과 맞지 않는다고 한다. 

  Typescript 를 적용하면서 project 속성에 tsconfig.json 을 설정했는데 이게 문제였다. 

## 해결

  > `.eslinltrc.js` 의 적용 대상에서 3개의 파일을 제외

  이 에러에 대해 구글링해보니 의외로 해결 방법은 간단했다. `.eslinltrc.js` 의  적용되는 대상에서 이 3개의 파일들을 제외하면 된다. 

  es lint 처리는 기본적으로 전체 프로젝트의 코드들을 대상으로 처리하기에 3개의 설정 파일(js)도 포함 된다. 하지만 이 3개의 설정 파일들은 es lint 처리를 할 필요가 없다. (직접적으로 코딩하는 파일이 아니므로)

  더욱이 Typescript 로 코딩하기 때문에 ts, tsx 파일들만 lint 처리를 하면 된다. 

  ### 특정 파일 형식(*.ts, *.tsx) 만 ES Lint 체크 대상에 넣기

    - `package.json`
      + *.js, *.jsx 파일을 대상에서 제외: `eslint . --ext .ts,.tsx`

      ```json
        "scripts": {
          ...
          "lint": "eslint . --ext .ts,.tsx",
          ...
        },
      ```

  ### 특정 디렉토리만 ES Lint 체크 대상에 넣기

  - `package.json`
    + src 디렉토리만 대상으로 하기: `eslint . --ext .ts,.tsx src/`

    ```json
      "scripts": {
        ...
        "lint": "eslint . --ext .ts,.tsx src/",
        ...
      },
    ```




<br /><br /><br /><br /><br />

---
- Refs
  + [React Native에서 ESLint, Prettier를 프로처럼 사용하기](https://dev-yakuza.posstree.com/ko/react-native/eslint-prettier-husky-lint-staged/)