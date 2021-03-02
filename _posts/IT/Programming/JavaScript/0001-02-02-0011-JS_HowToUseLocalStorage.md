---
layout: post
title: Javascript - 웹브라우저의 로컬스토리지 LocalStorage 사용하기
categories: [Programming]
tags: 
- Programming
- LocalStorage
- Javascript
- 로컬스토리지
comments: true
description:
author: J.ian
date:   2020-01-11
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-01-11" />

> 로컬스토리지LocalStorage : WebStorage 중 하나. 쿠키Cookie처럼 웹사이트의 데이터를 클라이언트 쪽에 저장할 수 있는 저장 공간이다.
 
 
#### 1. LocalStorage 의 특징
 
  1) 저장된 데이터의 만료 기간이 없다 <br />
    ・LocalStorage는 별도로 지우는 않는 한 데이터를 영구히 저장함 <br />
   
  2) HTTP 요청에 매번 데이터를 주고 받지 않아도 된다 <br />
    ・웹사이트에서 쿠키를 설정하면 모든 웹 요청에서 쿠키 정보를 포함하여 서버로 전송됨 <br />
    ・Local Storage는 서버 전송은 하지 않아 트래픽이 감소 <br />
   
  3) 도메인 별로 따로 저장된다 <br />
    ・특별한 용량 제한없이 도메인 별로 데이터가 저장됨 <br />
    ・Chrome : 개발자 도구 (F12키)의 Applicaion 탭에서 확인 가능 <br />
   
  4) 스크립트 객체도 저장이 가능하다 <br />
    ・단순한 문자열 외에 스크립트의 객체도 저장이 가능 <br />
   
<br />
   
#### 2. 웹스토리지WebStorage
 
  1) HTML5에 포함된 스펙 <br />
  2) Key/Value 형태로 데이터를 저장하고 조회 <br />
  3) 영구 저장소와 임시 저장소 2가지 종류 <br />
    ・영구 저장소 : Local Storage <br />
    ・임시 저장소 : Session Storage <br />
<br />

#### ※ 쿠키의 종류 <br />
  1) Persistent Cookies : 만료 기간을 가지는 쿠키. 만료 기간을 길게하여 영구한 것처럼 사용 <br />
  2) Session Cookies : 브라우저 종료 후 삭제되는 데이터 <br />
<br /><br />

## Local Storage 사용법
#### 1. 데이터 저장
&nbsp;-&nbsp; **`localStorage.setItem(Key명, Value값);`** <br />
 
```javascript
    
    // Key : loginYn
    // Value : false
    localStorage.setItem('loginYn', 'false');
    
```
<br /> <br />

#### 2-1. 데이터 삭제
&nbsp;-&nbsp; **`localStorage.removeItem(Key명);`** <br />
 
```javascript
    
    // Key : loginYn
    localStorage.removeItem('loginYn');
    
```
<br /> <br />

#### 2-2. 데이터 전체 삭제
&nbsp;-&nbsp; **`localStorage.clear();`** <br />
 
```javascript
    
    localStorage.clear();   // 전체 삭제
    
```
<br /> <br />

#### 3. 데이터 조회
&nbsp;-&nbsp; **`localStorage.getItem(Key명);`** <br />
 
```javascript
    
    // Key : loginYn
    localStorage.getItem('loginYn');
    
```
<br /> <br />


#### ※ 브라우저의 Local Storage 지원여부 확인
&nbsp;-&nbsp; **`('localStorage' in window) && window['localStorage'] !== null`** <br />

```javascript

    if( ('localStorage' in window) && window['localStorage'] !== null ) {

        console.log('Local Storage 지원');
    } else {
        
        console.log('Local Storage 미지원');
    }

```
   