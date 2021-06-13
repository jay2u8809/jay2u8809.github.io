---
layout: post
title: "[NodeJs] package.json 란?"
categories: [NodeJs]
tags:
  - programming
  - nodejs
  - npm
  - package.json
author: J.ian
last_modified_at: 2021-06-13
---

> `package.json`은 프로젝트의 메타 데이터를 저장하는 파일이다.

모든 npm 패키지는 package.json 파일을 *프로젝트 루트* 에 포함하고 있습니다.

이 **package.json** 은 어떤 파일이고 왜 사용하는 것일까요?

npm은 프로젝트에 필요한 다양한 모듈Module을 관리하기 위한 프로그램입니다.

프로젝트 별로 사용하는 모듈들이 다르기 때문에 어딘가에 지금까지 설치해서 사용하고 있는 모듈들의 정보들을 기록해 둘 필요가 있습니다.

예를 들어 A 프로젝트에서는 Module1, Module2, Module3, Module4를 사용하고 있고 B 프로젝트에서는 Module2, Module3을 사용하고 있다고 하겠습니다.

A 프로젝트의 루트에 존재하는 package.json에는 Module1, Module2, Module3, Module4 이 기록되어 있고, B 프로젝트의 루트에 존재하는 package.json에는 Module2, Module3 이 기록되어 있습니다.

npm은 각 프로젝트의 package.json을 확인하여 필요한 모듈들을 다운로드, 설치합니다. 

package.json을 통해 항상 동일한 개발 환경 및 운영 환경을 만들 수 있는 것입니다.

이러한 모듈에 관한 정보 뿐만 아니라 프로젝트에 대한 다양한 메타 데이터를 저장해 둔 파일이 **package.json** 입니다.

<br />

---

<br />

## package.json 의 생성
 - 아래의 명령어를 통해 package.json 파일을 생성합니다.
```shell
    $ npm init
```

## 모듈 설치
 - `--save` 옵션을 사용하면 install 한 모듈의 정보가 package.json 에 등록됩니다.
 - **node_modules** 폴더가 생성되고 install 한 모듈들이 저장됩니다.
 - **node_modules** 폴더가 삭제되어도 package.json 파일이 있다면 `npm install` 명령어로 복원할 수 있습니다.
```shell
    $ npm install --save ejs          // npm install ejs --save
    $ npm install --save ejs@2        // install the latest version of 2
    $ npm install --save ejs@2.3      // install the latest version of 2.3
    $ npm install --save ejs@2.4.1    // install version 2.4.1 
```

## 모듈 삭제
```shell
    $ npm uninstall --save ejs        // npm uninstall ejs --save
```

<br />

---

<br />

## package.json 
```json
{
  "name": "프로젝트명",
  "version": "1.0.0",
  "description": "프로젝트 설명",
  "keywords": [],
  "main": "index.js",
  "config": {
    "port": "3080"
  },
  "scripts": {
    "start": "echo \"Start: Project Start \" && exit 0",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npm build",
    "clean": "rm -rf node_modules",
    "reinstall": "npm run clean && npm install",
    "rebuild": "npm run clean && npm install && npm run build"
  },
  "author": "작성자",
  "license": "저작권",
  "type": "module",
  "dependencies": {
    "body-parser": "^1.19.0",
    "connect-multiparty": "^2.2.0",
    "cookie-parser": "~1.4.4",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "body-parser": "^1.19.0",
    "connect-multiparty": "^2.2.0",
    "cookie-parser": "~1.4.4",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "morgan": "~1.9.1"
  }
}
```

### name 과 version
```json
    "name": "프로젝트명",
    "version": "1.0.0",
```
 - 필수 항목들각 패키지의 고유성을 판별
 - name 은 214자 미만, 점(.) 또는 밑줄(_)로 시작 불가, 대문자를 포함할 수 없습니다.
 - name 은 url의 일부분이자 커맨드 라인의 인수이고 폴더명입니다.

### description 과 keyowrd
```json
    "description": "프로젝트 설명",
    "keywords": [],
```
 - npm search 로 검색된 리스트에 표시되는 항목으로서 사용자들이 패키지를 찾고 사용하는데 도움이 됩니다.

### main
```json
    "main": "index.js",
```
 - 프로그램의 시작이 되는 모듈의 ID입니다.
 - foo라는 패키지가 있다면 이 패키지를 설치한되 require('foo');를 실행했을때 main으로 지정한 모듈의 exports 객체가 반환됩니다.

### config
```json
    "config": {
        "port": "3080"
    },
```
 - 패키지 스크립트에서 사용할 수 있는 설정 정보입니다.
 - "start" 스크립트를 실행할 때 npm_package_config_port를 참조합니다.

### dependencies
```json
    "dependencies": {
        "body-parser": "^1.19.0",
        "connect-multiparty": "^2.2.0",
        "cookie-parser": "~1.4.4",
        "express": "^4.17.1",
        "express-session": "^1.17.2",
        "morgan": "~1.9.1"
    },
```
 - 프로젝트의 의존성 정보입니다.
 - tarball 이나 git Url로도 지정이 가능합니다.
 - 테스트 관련 모듈이나 트랜스 파일러 관련 모듈, 개발 단계에서만 필요한 모듈들은 제거하도록 합니다.      
 (※ devDependencies에 설치)
 - version 지정 방식
   *  [ * ]        : 최신 버전 설치
   *  [ > 1.0.0]   : 1.0.0 보다 높은 버전 설치
   *  [ >= 1.0.0]  : 1.0.0 보다 높거나 같은 버전 설치
   *  [ < 1.0.0]   : 1.0.0 보다 낮은 버전 설치
   *  [ <= 1.0.0]  : 1.0.0 보다 낮거나 같은 버전 설치
   *  [ = 1.0.0]   : 1.0.0 버전 설치
   *  [ ^1.0.0]    : 1.0.0 버전과 호환이 되는 버전 설치 (1.0.0 이상 2.0.0 미만에서 최신 버전)
   *  [ ~1.0.0]    : 1.0.0 버전과 근사한 버전 설치

### devDependencies
```json
    "devDependencies": {
        "body-parser": "^1.19.0",
        "connect-multiparty": "^2.2.0",
        "cookie-parser": "~1.4.4",
        "express": "^4.17.1",
        "express-session": "^1.17.2",
        "morgan": "~1.9.1"
    },
```
 - 패키지 테스트 및 개발 단계에서만 필요한 모듈들을 지정합니다.

