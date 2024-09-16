---
slug: /programming/nodejs/how-to-use-operator-logical-and-or
# id: how-to-use-operator-logical-and-or
title: Logical AND(&&) 와 Logical OR(||) 연산자
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
  operator,
  연산자,
  and 연산자,
  or 연산자,
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
  operator,
  연산자,
  and 연산자,
  or 연산자,
]
description: js 의 and 연산자와 or 연산자를 정리한다.
# sidebar_position: 1
---

<!--title -->
# [TypeScript] && 와 || 연산자
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2021-10-13",
  "updatedAt": "2021-10-13"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2021-10-13
  updatedAt: 2021-10-13
```


---

> &&와 || 연산자는 두 피연산자 중 하나의 __값__ 을 반환한다.

  | L-Operand | True       | False       |
  | :---:    | :---:      | :---:      |
  | &&       | R-Operand 값 | L-Operand 값 |
  | \|\|     | L-Operand 값 | R-Operand 값 |

  (※ _L-Operand: 왼쪽 피연산자, R-Operand: 오른쪽 피연산자_)

  - && 는 True를 기준으로 오른쪽 피연산자의 값을 반환
  - || 는 False를 기준으로 오른쪽 피연산자의 값을 반환


## Logical AND(&&) 연산자

  - 왼쪽의 피연산자(L-Operand)가 True(참)인 경우, 오른쪽 피연산자(R-Operand) 값을 반환한다.

    ```typescript
      const val: string = `VALUE TEST`;
      const isExist: boolean = true;
      console.log(`${isExist && val}`);
    ```
    ```text
      [Result]
        VALUE TEST
    ```

  - 왼쪽의 피연산자(L-Operand)가 False(거짓)인 경우, 왼쪽 피연산자 값을 반환한다.

    ```typescript
      const val: string = `VALUE TEST`;
      const isExist: boolean = false;
      console.log(`${isExist && val}`);
    ```
    ```text
      [Result]
        false
    ```


## Logical OR(||) 연산자

  - 왼쪽의 피연산자(L-Operand)가 True 인 경우, 왼쪽 피연산자 값을 반환

    ```typescript
      const val: string = `VALUE TEST`;
      const isExist: boolean = true;
      console.log(`${isExist || val}`);
    ```
    ```text
      [Result]
        true
    ```

  - 왼쪽의 피연산자(L-Operand)가 False 인 경우, 오른쪽 피연산자(R-Operand) 값을 반환한다.

    ```typescript
      const val: string = `VALUE TEST`;
      const isExist: boolean = false;
      console.log(`${isExist || val}`);
    ```
    ```text
      [Result]
        VALUE TEST
    ```


## False에 해당하는 데이터

  - 숫자(number): `0`

    ```typescript
      const zeroNum: number = 0;
      console.log(`Zero Number - Boolean: ${zeroNum ? 'TRUE' : 'FALSE'}`);

      const pNum: number = 1;
      console.log(`Number - Boolean: ${pNum ? 'TRUE' : 'FALSE'}`);

      const minuNum: number = 1;
      console.log(`Minus Number - Boolean: ${minuNum ? 'TRUE' : 'FALSE'}`);
    ```

    ```text
      [Result]
        Zero Number - Boolean: FALSE
        Number - Boolean: TRUE
        Minus Number - Boolean: TRUE
    ```

  - 문자열(string): `빈 문자열(길이가 0인 문자열)`

    ```typescript
      const emptyStr: string = '';
      console.log(`Empty String - length: ${emptyStr.length}, Boolean: ${emptyStr ? 'TRUE' : 'FALSE'}`);
      
      const str: string = 'Not Empty';
      console.log(`Not Empty String - length: ${str.length}, Boolean: ${str ? 'TRUE' : 'FALSE'}`);
    ```
    ```text
      [Result]
        Empty String - length: 0, Boolean: FALSE
        Not Empty String - length: 9, Boolean: TRUE
    ```

  - 객체(object): `null, undefined`

    ```typescript
      const nullObj: any = null;
      console.log(`Null Object - Boolean: ${nullObj ? 'TRUE' : 'FALSE'}`);
      
      const undefinedObj: any = undefined;
      console.log(`Undefined Object - Boolean: ${undefinedObj ? 'TRUE' : 'FALSE'}`);

      const emptyObj: any = {};
      console.log(`Empty Object - length: ${emptyObj.length}, Boolean: ${emptyObj ? 'TRUE' : 'FALSE'}`);
    ```
    ```text
      [Result]
        Null Object - Boolean: FALSE
        Undefined Object - Boolean: FALSE
        Empty Object - length: undefined, Boolean: TRUE
    ```





<br /><br /><br /><br /><br />

--- 
- Refs
  + [MDN - Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
  + [MDN - Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
  + [MDN - Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)