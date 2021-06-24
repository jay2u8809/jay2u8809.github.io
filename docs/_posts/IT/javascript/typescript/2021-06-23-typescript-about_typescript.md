---
layout: post
title: "[TypeScript] TypeScript에 대해서"
categories: [Typescript]
tags:
  - programming
  - typescript
author: J.ian
last_modified_at: 2021-06-23
---

> `타입스크립트Typescript`에 대해 알아보겠습니다.

## 자바스크립트Javascript의 종류
- 자바스크립트는 3종류가 존재합니다.
1) `ES5(ECMAScript5)` : 웹 브라우저에서 동작하는 표준 자바스크립트           
2) `ESNext` : ECMAScript 2015(ES6) ~ ECMAScript 2019 자바스크립트             
3) `TypeScript` : ESNext에 타입Type 기능을 추가한 자바스크립트           
- ES5 < ESNext < TypeScript : 타입스크립트는 ES5, ESNext 의 모든 문법을 포함합니다.           

#### ‣트랜스파일Transpile
- 트랜스파일 : 특정 프로그래밍 언어로 작성된 소스 코드를 다른 프로그래밍 언어 소스 코드로 변환하는 것
- 트랜스파일러 : 트랜스파일 시키는 프로그램 (※ `소스 코드 -> 바이너리 파일` 하는 컴파일러Compiler와 구분)
- ESNext 자바스크립트 소스 코드는 바벨Babel 이라는 트랜스파일러Transpiler 를 통해 ES5 자바스크립트 소스 코도로 변환됩니다. 바벨과 유사하게 타입스크립트의 소스 코드는 TSC(TypeScript Compiler)라는 트랜스파일러를 통해 ES5 자바스크립트 소스 코드로 변환됩니다.

## 개발 환경 만들기
- IDE : MS사의 비주얼 스튜디오 코드(Visual Studio Code, 무료) 나 JetBrain사의 웹스톰(Web Storm, 유료)
- Node.js : 타입스크립트는 Node.js에서 작동하기 때문에 Node.js의 설치가 필요합니다.
- TSC(TypeScript Compiler) : 타입스크립트 소스 코드를 자바스크립트 소스 코드로 변환하기 위한 트랜스파일러가 필요합니다. IDE의 터미널에서 아래의 명령어로 설치할 수 있습니다.
```shell
    # 타입스크립트 패키지 설치
    $ npm i -g typescript

    # tsc 버전 확인
    $ tsc --version
```

## 타입스크립트의 컴파일과 실행 
- hello_world.ts 파일을 생성하여 아래의 코드를 입력합니다.
```javascript
    console.log(`Hello World`);
```
- IDE의 터미널에서 hello_world.ts 파일이 있는 곳으로 이동하여 아래의 명령어를 실행합니다.
```shell
    $ tsc hello_world.ts
```
- hello_world.js 라는 자바스크립트 파일이 생성되는 것을 확인 할 수 있습니다. (트랜스파일)
- 이 자바스크립트 파일을 Node.js로 실행하면 소스 코드가 실행되는 것을 확인 할 수 있습니다.
```shell
    $ node hello_world.js
    > Hello World
```
- 순서 : Typescript 소스 코드 → Javascript 소스 코드로 변환 → 실행
- `tsc`는 트랜스파일만 실행할 뿐 소스 코드를 실행하지는 않는데, 트랜스파일 및 실행까지 한 번에 하려면 `ts-node`라는 프로그램을 설치하여 사용하면 가능합니다.
```shell
    # ts-node 설치
    $ npm i -g ts-node
    
    # ts-node version 확인
    $ ts-node -v
    > v8.5.0

    # ts-node 실행 : 트랜스파일 및 실행을 한 번에 한다.
    $ ts-node hello_world.ts
    > Hello World
```
## 주요 문법

### Destructuring Assignment
- 객체와 배열에 적용할 수 있습니다.
- 함수의 선언이나 변수의 초기화를 쉽게 할 수 있습니다.
```typescript
    let person = {  name: "John", age: 27   };
    let {name, age} = person;       // name = "John", age = 27 가 할당된다

    let arr = [1, 2, 3, 4];
    let [first, ...rest] = arr;     // first = 1, rest = [2, 3, 4]

    let num1 = 1, num2 = 4;
    [num1, num2] = [num2, num1];    // num1 = 4, num2 = 1    
```

### Arrow Functions
- `=>` 기호를 이용하여 `function 키워드` 대신 함수를 선언하고 사용할 수 있습니다.
- 보다 간단하게 함수를 만들수 있습니다.
```typescript
    // 일반적인 함수의 선언 방법
    function add_calc1(num1, num2) {
        return num1 + num2;
    }

    // 화살표 함수를 사용한 함수의 선언 방법
    const add_calc2 = (num1, num2) => num1 + num2;
```

