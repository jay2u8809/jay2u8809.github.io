---
layout: post
title: "[TypeScript] Loop"
categories: [TypeScript]
tags:
  - programming
  - typescript
author: J.ian
last_modified_at: 2021-06-21
---

> TypeScript의 2가지 `반복문(Loop)` 을 사용하는 방법

## for ... of
- 타입과 관계없이 배열에 담긴 `값`을 차례를 얻을 때 사용합니다. 
```typescript
    const plArr = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
    for (let pl of plArr)
        console.log(`${pl}`);

    // Result : Java Kotlin Typescript Javascript

    const numArr = [1, 3, 5, 7, 9];
    for (let num of numArr)
        console.log(`${num}`);

    // Result : 1 3 5 7 9
```


## for ... in
- 배열의 인덱스Index를 순차적으로 얻을 때 사용합니다.
```typescript
    const plArr = ['Java', 'Kotlin', 'Typescript', 'Javascript'];
    for (let idx in plArr) {
        const content = plArr[idx];
        console.log(`${content} : ${idx}`);
    }

    // Result
    //  Java : 0
    //  Kotlin : 1
    //  Typescript : 2
    //  Javascript : 3
```