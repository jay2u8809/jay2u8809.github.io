---
title: Typescript - 순수함수란?
description: js 의 순수 함수에 대해 알아본다.
---

<!--title -->
# 순수함수(Pure Function)란?
<!--//title -->

<!-- 
```json
{
  "author": "Onejay",
  "createdAt": "2023-01-21",
  "updatedAt": "2023-01-23"
}
``` 
-->

```yaml
  author: Onejay
  createdAt: 2023-01-21
  updatedAt: 2023-01-23
```

---

> JS 의 순수 함수에 대해 알아본다.


## 순수 함수(Pure Function)란?

  > 💡 부수 효과 (Side-Effect) 가 없는 함수를 의미

  - 부수 효과란 “_함수가 가진 목적 이외에 다른 효과가 나타나는 것_” 을 의미한다. 그리고 이러한 부수 효과가 있는 함수는 “**불순 함수(Impure function)**” 이라 한다.


  ### 순수 함수의 조건은?

  - 순수 함수는 아래의 조건을 만족해야 한다.

    + 함수에 입출력 관련 코드가 없어야 한다.
    + 함수에서 매개 변수 값을 변경시키지 않아야 한다.
      - 매개 변수는 const 나 readonly 형태로만 사용
    + 함수의 결과를 바로 return 한다.
    + 함수 외부의 변수(전역 변수나 정적 변수 등)를 사용하지 않아야 한다.
    + 함수가 예외(Exception)를 발생시키지 않는다.
    + 함수가 콜백(Callback) 함수로 구현되었거나, 콜백 함수를 사용한 코드가 없어야 한다.
    + 함수에 Promise 와 같은 비동기 방식으로 동작하는 코드가 없어야 한다.

  ### 순수 함수와 불순 함수의 예

  #### - 순수 함수    
  - Code①

    ```typescript
      function add(num1: number, num2: nubmer): number {
        return num1 + num2;
      }
    ```
  
  #### - 불순 함수 1
  - Code②: 매개 변수 값을 변경한다. (push 함수는 새로운 배열을 만들지 않고 원래의 배열을 수정)

    ```typescript
      function addArray(arr: number[]): void {
        arr.push(10);
      }
    ```
  
  #### - 불순 함수 2
  - Code③: 함수 외부의 변수를 사용한다.

    ```typescript
      const value = 10;
      function add(num: number): number {
        return num + value;
      }
    ```
    

  ### Readonly 키워드

  함수의 매개 변수에 readonly 키워드를 사용하면 함수 내부에서 매개 변수의 값을 수정하지 못하도록 막을 수 있다.

  위의 _Code②_ 의 매개 변수에 readonly 키워드를 사용해보자. push 메소드를 사용하지 못하도록 에러가 나타나는 것을 확인 할 수 있다.

  - Code④

      ```typescript
      function addArray(arr: readonly number[]): void {
        arr.push(10);  // error 가 나타난다.
      }
    ```

  인터페이스나 클래스 내의 변수들, 함수의 매개 변수 등은 let 이나 const 키워드 없이 선언하지만 이 때, readonly 키워드를 사용하여 const 와 같은 효과를 낼 수 있다.







<br /><br /><br /><br /><br />

--- 
- Refs
