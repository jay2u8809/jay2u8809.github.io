---
slug: /programming/nodejs/ts/how-to-use-promise-all
# id: how-to-use-promise-all
title: Promise.all() - 병렬 처리 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  promise,
  promise all,
  비동기처리,
]
keywords: [
  devian-lab,
  Jobː談,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  promise,
  promise all,
  비동기처리,
]
description: js 의 Promise.all 함수를 이용해 병렬 처리를 하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# [TypeScript] Promise.all() 로 병렬 처리를 구현해보자
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-12-15",
  "updatedAt": "2022-12-15"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-12-15
  updatedAt: 2022-12-15
```


---


## Promise.all()

  - 여러 개의 Promise 들을 병렬로 동시에 실행하여 처리할 수 있는 함수
  - Promise.all() 은 여러 개의 Promise 들 중 **하나라도 reject 를 반환하거나 에러가 날 경우, 모든 Promise 들을 reject** 시킨다.
    + Promise.all() 함수는 여러 개의 Promise 들이 비동기적으로, 정상적으로 끝났음을 알 수 있는 좋은 방법이다. 
    + Promise.all() 함수가 정상적으로 종료되었다는 것은 모든 Promise 들을 정상적으로 처리했다는 확실한 검증이 될수 있다.
  - 여러 개의 Promise 들을 병렬로 동시에 실행하기 때문에 전체 처리 시간은 그 중 가장 처리 시간이 긴 Promise 와 같다.

    ```mermaid
      sequenceDiagram

        10s ->> 20s: Promise 1
        10s ->> 30s: Promise 2
        10s ->> 40s: Promise 3
        10s ->> 50s: Promise 4
    ```

    + **Promise.all() 의 전체 처리 시간: Promise 4의 처리시간, 50s**


  ### Example Code

    - Promise.all() 함수는 여러 개의 Promise 를 동시에 처리하고자 할 때 사용할 수 있다.

      + Code①

        ```typescript
          // first promise
          const fetchNameList = async (): Promise<string[]> => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const result: any = ['Jack', 'Joe', 'Beck'];
                resolve(result);
              }, 300);
            });
          };

          // second promise
          const fetchFruits = async (): Promise<string[]> => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const result: any = ['Apple', 'Orange', 'Banana'];
                resolve(result);
              }, 200);
            });
          };

          // third promise
          const fetchTechCompanies = async (): Promise<string[]> => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const result: any = ['Apple', 'Google', 'Amazon'];
                resolve(result);
              }, 400);
            });
          };
        ```
    
      + Code②

        ```typescript
          // time start
          console.time('promise all example');

          // promise all
          const result: any[] = await Promise.all([
            fetchNameList(),
            fetchFruits(),
            fetchTechCompanies(),
          ]);
          console.log('%j', result);

          // time end
          console.timeEnd('promise all example');
        ```
    
    - Code②의 Result
      + 전체 실행 시간: 402ms
      + 각 Promise 들의 처리 시간(300ms, 200ms, 400ms) 중 가장 긴 시간인 400ms 와 비슷한 시간이다. 이를 통해 3개의 Promise 가 병렬로 실행되었음을 알 수 있다.
    
      ```text
        [["Jack","Joe","Beck"],["Apple","Orange","Banana"],["Apple","Google","Amazon"]]

        promise all example: 402 ms
      ```
    
      + 아래와 같이 각각의 처리 결과를 각각의 변수에 담을 수도 있다.
          
        ```typescript
          const [names, fruits, companies] = await Promise.all([
            fetchNameList(),
            fetchFruits(),
            fetchTechCompanies(),
          ]);
          
          console.log('%j, %j, %j', names, fruits, companies);
        ```
    
  ### Error 처리

    - Promise.all() 함수는 메개변수로 여러 개의 Promise 들이 배열 형태로 들어가게 되는데, 이 중 **하나라도 reject 가 되거나 에러가 발생할 경우, 모든 Promise 들이 reject** 된다. 

    - Code① 의 `fetchFruits()` 함수를 아래와 같이 reject 되도록 수정한다.
      ```typescript
        const fetchFruits = async (): Promise<string[]> => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const result: any = ['Apple', 'Orange', 'Banana'];
              reject(result); // Reject
            }, 200);
          });
        };
      ```

    - 그리고 Code②를 실행해 보면 아래와 같이 Promise.all() 처리가 실패한다. 따라서 적절한 에러 처리가 필요하다.

      ```text
        Error: thrown: Array [
          "Apple",
          "Orange",
          "Banana",
        ]
      ```

## Promise.all() 을 사용하지 않는다면?

  - 만약 Code② 를 Promise.all() 함수를 사용하지 않고 동기적으로 실행한다면 어떻게 될까?

    + Code③
      
      ```typescript
        // time start
        console.time('promise all example');

        const names: string[] = await fetchNameList();
        const fruits: string[] = await fetchFruits();
        const companies: string[] = await fetchTechCompanies();
        console.log('%j, %j, %j', names, fruits, companies);

        // time end
        console.timeEnd('promise all example');
      ```
    
  - Code③의 Result
    + 전체 실행 시간: 905ms
    + 각 Promise 들의 처리 시간(300ms, 200ms, 400ms)을 모두 더한 값인 900ms 와 비슷하다. 
      - 각각의 처리가 서로 영향을 주지 않는다면 Promise.all() 로 실행하는 것이 훨씬 더 빠른 속도로 처리할 수 있다.
    
    ```text
      ["Jack","Joe","Beck"], ["Apple","Orange","Banana"], ["Apple","Google","Amazon"]

      promise all example: 905 ms
    ```








<br /><br /><br /><br /><br />

--- 
- Refs
  + [MDN - Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

