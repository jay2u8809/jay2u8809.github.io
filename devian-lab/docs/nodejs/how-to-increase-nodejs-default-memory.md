---
# slug: /wiki/nodejs/how-to-increase-nodejs-default-memory-ja
id: how-to-increase-nodejs-default-memory-ja
title: NodeJs 메모리 사이즈 늘리기
tags: [devian-lab, nodejs, memory]
# sidebar_position: 1
---

<!--title -->
# NodeJs 메모리 사이즈를 늘리는 방법
<!--//title -->

```json
{
  "author": "Onigiri.J",
  "createdAt": "2024-05-29",
  "updatedAt": "2024-05-29"
}
```

---

## Intro

> Node.js 의 heap memory 를 늘리는 방법을 정리한다.

 종종 기획팀이나 다른 부서에서 데이터 분석을 위한 데이터 집계 의뢰가 온다. 필요한 데이터를 DB 에서 뽑아 정리해 넘기는 단순한 작업이다. 

 DB 가 DynamoDB 이기 때문에 SQL 보다는 로컬 환경에서 javascript 코드를 작성해서 실행하는 방식으로 집계를 한다.

  - 1) DynamoDB Query API 실행
    + 필요한 데이터를 Table 로부터 가져온다
  - 2) 데이터 가공
    + 계산이 필요한 데이터나 조건에 따라 처리해야할 데이터를 적절히 가공한다
  - 3) csv 파일 생성
    + 타 부서에 필요한 형식으로 맞춰 csv 파일을 만든다

꽤나 단순한 프로세스이지만 데이터가 많아지면서 1)Query API 를 실행하는 시간이 길어지고 2)데이터 가공을 할때 메모리 부족으로 코드가 종료되는 경우가 많아졌다. 종종 데이터를 가져오다가도 종료되는 경우가 많다.

그럴 때마다 nodejs 의 heap memory 를 늘려 다시 실행하게 되는데 그 방법을 정리하려고 한다.



## Solution

### 1) 일시적으로 NodeJs 의 heap memory size 를 지정하는 방법

 데이터 집계를 해야할 때처럼 평소보다 많은 양의 메모리가 필요한 경우 일시적으로 변경할 수 있다. 

- 4GB (1024 * 4) 지정

```shell
$ export NODE_OPTIONS=--max_old_space_size=4096
```

- 8GB (1024 * 8) 지정

```shell
$ export NODE_OPTIONS=--max_old_space_size=8192
```


### 2) Javascript 실행할 때 heap memory size 를 지정하는 방법

 node 를 실행할 때, 옵션을 주어 메모리 사이즈를 지정할 수 있다.

- Example
  + ```node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js```

- Sample Code
```shell
$ node --max_old_space_size=4096 sample-script.js
```

### 3) package.json 을 수정하는 방법

 2)의 명령어를 `package.json` 에 지정해 두면 간단하게 실행할 수 있다.

- Example
  + ``` "start": "node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js" ```

- Sample Code
```json
{
  // other package.json stuff
  "scripts": {
    "start": "node --max_old_space_size=4096 sample-script.js"
  }
}
```

- run
```shell
$ npm run start
```


<br /><br /><br /><br /><br />

---
- Refs
  + [how to increase nodejs default memory?](https://stackoverflow.com/questions/34356012/how-to-increase-nodejs-default-memory)