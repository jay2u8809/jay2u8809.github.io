---
slug: /programming/nodejs/how-to-use-variable-arguments-func
# id: how-to-use-variable-arguments-func
title: 가변 인수 함수
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nodejs,
  variable arguments,
  function,
  가변인자,
  복수 파라미터,
]
keywords: [
  devian-lab,
  Jobː談,
  nodejs,
  variable arguments,
  function,
  가변인자,
  복수 파라미터,
]
description: js 에서 가변 인자를 받는 함수를 사용하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# 가변 인수 함수: 함수 파라미터의 갯수를 가변적으로 받자
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2023-01-23",
  "updatedAt": "2023-01-23"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2023-01-23
  updatedAt: 2023-01-23
```


---

## 가변 인수 함수

  - 함수를 호출할 때, **전달하는 매개 변수의 갯수를 제한하지 않는 함수**를 의미

  아래의 _Code①_ 을 보면 merge 함수를 호출할 때, 매개 변수의 갯수가 달라도 실행되는 것을 확인 할 수 있다.

  - Code①

    ```typescript
      // 여러 개의 배열을 받아 합쳐 하나의 배열로 만드는 함수
      const merge = (...arr: readonly string[][]): string[] => {
        let result : string[] = [];
        for (let idx = 0; idx < arr.length; idx++) {
            const array: string[] = arr[idx];
            result = [...result, ...array];
        }
        return result;
      };

      // 매개 변수 2개
      const array1: string[] = merge(['Hello', 'World'], ['hello', 'world']);
      // ["Hello", "World", "hello", "world"]

      // 매개 변수 3개
      const array2: string[] = merge(['java', 'script'], ['type', 'script'], ['react', 'vuejs', 'angular']);
      // ["java", "script", "type", "script", "react", "vuejs", "angular"]
    ```

  ### 가변 인수 함수 선언 방법

    - 전개 연산자 (`…`) 을 사용해서 선언할 수 있다.

    - Code②
      + Generic 타입으로 함수 선언

      ```typescript
        const merge = <T>(...arr: readonly T[][]): T[] => {
          let result : T[] = [];
          for (let idx = 0; idx < arr.length; idx++) {
            const array: T[] = arr[idx];
            result = [...result, ...array];
          }
          return result;
        };
      ```






<br /><br /><br /><br /><br />

--- 
- Refs