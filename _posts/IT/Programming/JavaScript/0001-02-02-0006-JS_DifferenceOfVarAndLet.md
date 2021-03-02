---
layout: post
title: Javascript - var 와 let의 차이
categories: [Programming]
tags: 
- Programming
- Javascript
- hoisting
comments: false
description:
author: J.ian
date:   2020-08-09
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-08-09" />

> 자바스크립트에서 var 와 let의 차이에 대해 알아본다.

### let
&nbsp;&nbsp; **`let`** 은 ES6에서 추가된 변수를 선언하는 키워드이다.
```javascript
    
    // 다른 프로그래밍 언어와 동일하게 블록스코프BlockScope가 적용된다.
    let globalVariable = 'Global Variable';
    {
        let variable = 'Jay';
        console.log(`value : ${variable}`);
        // [Result] value : Jay

        variable = 'hello';
        console.log(`value : ${variable}, ${typeof variable}`);
        // [Result] value : hello, string
        console.log(`value : ${globalVariable}, ${typeof globalVariable}`);
        // [Result] value : Global Variable, string
    }

    console.log(`value : ${variable}, ${typeof variable}`);
    // Uncaught ReferenceError: variable is not defined(variable이라는 변수는 위의 블록에서만 존재한다.)
    
    console.log(`value : ${globalVariable}, ${typeof globalVariable}`);
    // [Result] value : Global Variable, string
``` 

### var
&nbsp;&nbsp; **`var`** 는 **hosisting** 에 의해 변수 선언의 위치와 상관없이 선언을 가장 위로 올려버린다. <br />
&nbsp;&nbsp; 변수를 선언하지 않았음에도 hoisting에 의해 전역변수처럼 되어 어떤 에러도 발생시키지 않고 실행이된다.
```javascript

    {
        console.log(`value : ${variable}, ${typeof variable}`);
        // [Result] value : undefined, undefined
        variable = 4;
        var variable;
    }
    console.log(`value : ${variable}, ${typeof variable}`;
    // [Result] value : 4, number
```
