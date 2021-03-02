---
layout: post
title: Javascript - Async와 Defer
categories: [Programming]
tags: 
- Programming
- Javascript
- Async
- Defer
comments: false
description:
author: J.ian
date:   2020-08-10
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-08-10" />

> 자바스크립트 파일을 삽입 할 때 Async와 Defer를 사용하는 이유와 그 차이를 알아본다.

### 자바스크립트 파일을 삽입하는 위치
##### 1) head 태그 내에 삽입하는 경우
```html
    <head>
        <script src="sample.js"></script>
    </head>
```
&nbsp;-&nbsp; 웹 페이지가 처리되는 과정<br />
  ① HTML파일 읽기(Parsing HTML)<br />
  ② JS파일 다운로드(Fetching) - HTML 읽기 중지<br />
  ③ JS파일 실행(Executing)    - HTML 읽기 중지<br />
  ④ HTML파일 읽기(Parsing HTML)<br />
  &nbsp;&nbsp;&nbsp;&nbsp; ※JS파일의 크기에 따라 속도가 저하될 가능성이 있다.<br />
<br />

##### 2) body 태그 내에 삽입하는 경우 : footer태그 내 또는 body태그 가장 밑에 위치
```html
    <body>
        <script src="sample.js"></script>
    </body>
```
&nbsp;-&nbsp; 웹 페이지가 처리되는 과정<br />
  ① HTML파일 읽기(Parsing HTML)<br />
  ② JS파일 다운로드(Fetching)<br />
  ③ JS파일 실행(Executing)<br />
  &nbsp;&nbsp;&nbsp;&nbsp;※JS파일이 반드시 먼저 실행되어야 하는 경우 페이지가 깨질 가능성이 있다.<br />
<br />

### Async
&nbsp;-&nbsp; HTML을 읽으면서 병렬적으로 JS파일이 (병렬적으로)다운로드 되지만 실행될 때는 HTML 읽기(Parsing)가 멈춘다.
 ```html
    <head>
        <script async src="sample1.js"></script>
        <script async src="sample2.js"></script>
        <script async src="sample3.js"></script>
    </head>
 ```
&nbsp;-&nbsp; 웹 페이지가 처리되는 과정<br />
  ① HTML파일 읽기(Parsing HTML)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;sample1.js파일 다운로드(Fetching)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;sample2.js파일 다운로드(Fetching)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;sample3.js파일 다운로드(Fetching)<br />
  ② sample2.js파일 실행(Executing) - HTML 읽기 중지<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sample2.js파일 실행 후에도 나머지 파일들이 다운로드 중일 경우 HTML파일 읽기(Parsing HTML) 처리<br />
  ③ 순차적으로 다운로드 완료된 JS파일을 실행하고 그 동안에는 HTML 읽기 중지된다.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;※JS파일을 병렬로 다운로드하고 그 동안 HTML은 읽히고 있다.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;※선언한 JS파일 순서가 아닌 다운로드가 끝난 순서로 JS파일이 실행되고 실행되는 동안에는 HTML 읽기가 중지된다.<br />
<br />

### Defer
&nbsp;-&nbsp; HTML 읽기(Parsing)를 하면서 병렬적으로 JS파일들이 (병렬적으로)다운로드 되고 HTML이 모두 읽히고 난 뒤 JS파일이 실행된다.
 ```html
    <head>
        <script defer src="sample1.js"></script>
        <script defer src="sample2.js"></script>
        <script defer src="sample3.js"></script>
    </head>
 ```
&nbsp;-&nbsp; 웹 페이지가 처리되는 과정<br />
  ① HTML파일 읽기(Parsing HTML)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;sample1.js파일 다운로드(Fetching)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;sample2.js파일 다운로드(Fetching)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;sample3.js파일 다운로드(Fetching)<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JS파일이 모두 다운로드 되었어도 HTML 읽기가 끝날 때까지 실행되지 않는다.<br />
  ② HTML 읽기 완료<br />
  ③ 선언한 순서대로 JS파일들이 실행된다.(sample1.js sample2.js sample3.js)<br />

