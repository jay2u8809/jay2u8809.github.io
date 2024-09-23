---
slug: /programming/nodejs/ts/how-to-use-nullish-coalescing
# id: how-to-use-nullish-coalescing
title: (??) 연산자와 (||) 연산자
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
  논리연산자,
  널병합연산자,
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
  논리연산자,
  널병합연산자,
]
description: js 의 ?? 연산자와 || 연산자를 정리한다.
# sidebar_position: 1
---

<!--title -->
# [TypeScript] && 와 || 연산자
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2023-09-21",
  "updatedAt": "2023-09-21"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2023-09-21
  updatedAt: 2023-09-21
```


---


## Contens

|   | ?? 연산자 | \|\| 연산자 |
|---|---|---|
| 명칭 | 널 병합 연산(Nullish coalescing operator) | 논리 OR 연산자(Logical OR) |
| 내용 | 왼쪽 값이 **null 이나 undefined 인 경우에만** 오른쪽 값을 반환 | 왼쪽 값이 **falsy 인 경우** 오른쪽 값을 반환 |
| 왼쪽 피연산자 조건 | `null`, `undefined` | `null`, `undefined`, `false`, `0`, `''`, `NaN` |
| ex) | null ?? false => false <br /> false ?? 293 => false | null \|\| false => false <br /> false \|\| 293 => 293  | 
 


<br /><br /><br /><br /><br />

--- 
- Refs
  + [MDN - 널 병합 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
  + [MDN - 논리 OR 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR)
  

