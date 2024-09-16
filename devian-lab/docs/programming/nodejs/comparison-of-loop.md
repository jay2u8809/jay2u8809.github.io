---
slug: /programming/nodejs/comparison-of-loop
# id: comparison-of-loop
title: for of 와 for in 반복문 비교
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
  for loop,
  for of,
  for in,
  반복문,
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
  for loop,
  for of,
  for in,
  반복문,
]
description: js 의 for of 반복문과 for in 반복문을 비교하여 정리한다.
# sidebar_position: 1
---

<!--title -->
# [TypeScript] for of 와 for in 반복문
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2021-10-10",
  "updatedAt": "2021-10-10"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2021-10-10
  updatedAt: 2021-10-10
```


---

> 반복의 주체가 값(for...of)인가, 순서(for...in)인가에 따라 다르게 사용한다.

## for of

  - 타입과 관계없이 배열에 담긴 **값** 을 순서대로 얻을 때 사용한다.

    ```typescript
      const plArr: any = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
      for (const pl of plArr) {
          console.log(`${pl}`);
      }
    ```
    ```text
      [Result]
        Java 
        Kotlin 
        Typescript 
        Javascript
    ```
    ```typescript
      const numArr: any = [1, 3, 5, 7, 9];
      for (const num of numArr) {
          console.log(`${num}`);
      }
    ```
    ```text
      [Result]
        1 
        3 
        5 
        7 
        9
    ```

## for in
  
  - 배열의 **순서(인덱스Index)** 를 얻을 때 사용

    ```typescript
      const plArr: any = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
      for (const idx in plArr) {
          const content: string = plArr[idx];
          console.log(`${content} : ${idx}`);
      }
    ```
    ```text
      [Result]
        Java : 0
        Kotlin : 1
        Typescript : 2
        Javascript : 3
    ```

## forEach

  - callback 함수를 이용한 반복문 처리

    ```typescript
      const plArr: any = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
      // arr === plArr
      plArr.forEach((value, index, arr) => {  // value: 현재 값, index: 순서, arr: 원래의 배열
          console.log(`${value} : ${index}`);
      });
    ```
    ```text
      [Result]
        Java : 0
        Kotlin : 1
        Typescript : 2
        Javascript : 3
    ```


## 그외의 반복문


  ### for
    - 기본적인 for 문을 이용한 반복처리

    ```typescript
      const plArr: any = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
      for (let idx = 0; idx < plArr.length; idx++) {
        const content: string = plArr[idx];
        console.log(`${content} : ${idx}`);
      }
    ```
    ```text
      [Result]
        Java : 0
        Kotlin : 1
        Typescript : 2
        Javascript : 3
    ```

  ### whlie
    - 기본적인 while 문을 이용한 반복처리

  ```typescript
    const plArr: any = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
    let idx: number = 0;
    while(idx < plArr.length) {
      const content: string = plArr[idx];
      console.log(`${content} : ${idx}`);
      idx++;
    }
  ```
  ```text
    [Result]
      Java : 0
      Kotlin : 1
      Typescript : 2
      Javascript : 3
  ```

  ### do whlie
   - 기본적인 do while 문을 이용한 반복처리

  ```typescript
    const plArr: any = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
    let idx: number = 0;
    do {
      const content: string = plArr[idx];
      console.log(`${content} : ${idx}`);
      idx++;
    } while(idx < plArr.length)
  ```
  ```text
    [Result]
      Java : 0
      Kotlin : 1
      Typescript : 2
      Javascript : 3
  ```






<br /><br /><br /><br /><br />

--- 
- Refs
  + [MDN - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  + [MDN - for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
  + [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  + [MDN - Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  + [MDN - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  + [MDN - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
  + [MDN - do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
