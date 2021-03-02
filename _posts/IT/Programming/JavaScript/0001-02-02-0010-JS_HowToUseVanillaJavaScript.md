---
layout: post
title: Javascript - 순수 자바스크립트(바닐라Vanilla 자바스크립트)
categories: [Programming]
tags: 
- Programming
- VanillaJs
- Javascript
- 바닐라자바스크립트
comments: false
description:
author: J.ian
date:   2020-01-12
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-01-12" />

> 바닐라Vanilla JS : JQuery와 같은 자바스크립트 라이브러리나 프레임워크를 사용하지 않은 그대로의 자바스크립트Javascript를 의미.

### 1. DOM 선택
 1) ID로 선택 ( JQuery : $('#ID명'); ) <br />
&nbsp;-&nbsp; **`document.getElementById('ID명');`** <br />
&nbsp;-&nbsp; **`document.querySelector('#ID명');`** <br />
 
```javascript

    <div id='info'>
        Personal Info
    </div>

    /**
     * JQuery의 경우
     */
    let infoJquery = $('#info');

    /**
     * Vanilla JS의 경우
     */
    // 가장 많이 사용한 방법
    let infoVanilla1 = document.getElementById('info');
    // Jquery와 비슷한 방식으로 ID를 사용가능
    let infovanilla2 = document.querySelector('#info');
    
```
<br />

 2) Class명으로 선택 ( JQuery : $('.Class명'); ) <br />
&nbsp;-&nbsp; **`document.getElementsByClassName('Class명');`** <br />
&nbsp;-&nbsp; **`document.querySelectorAll('.Class명');`** <br />
&nbsp;-&nbsp; **`document.querySelector('.Class명');`** <br />
 
```javascript

    <div id='info' class='container'>
        Personal Info
    </div>

    /**
     * JQuery의 경우
     */
    let containerJquery = $('.container');

    /**
     * Vanilla JS의 경우
     */
    // Elements : container라는 클래스명을 가진 모든 DOM를 유사 배열 형태로 반환
    let containerVanilla1 = document.getElementsByClassName('container');
    // container라는 class를 가진 모든 DOM을 유사 배열 형태로 반환
    let containerVanilla2 = document.querySelectorAll('.container');
    // container라는 class를 가진 모든 DOM 중 첫 번째 DOM을 반환
    let containerVanilla3 = document.querySelector('.container'); 
    
```
<br />

 3) Tag명으로 선택 ( JQuery : $('.Tag명'); ) <br />
&nbsp;-&nbsp; **`document.getElementsByTagName('Tag명');`** <br />
&nbsp;-&nbsp; **`document.querySelectorAll('Tag명');`** <br />
&nbsp;-&nbsp; **`document.querySelector('Tag명');`** <br />
 
```javascript    

    <div id='info' class='container'>
        Personal Info
    </div>

    /**
     * JQuery의 경우
     */
    let containerJquery = $('div');

    /**
     * Vanilla JS의 경우
     */
    // Elements : div 태그 모든 DOM를 유사 배열 형태로 반환
    let containerVanilla1 = document.getElementsByTagName('div');
    // div 태그 모든 DOM을 유사 배열 형태로 반환
    let containerVanilla2 = document.querySelectorAll('div');
    // div 태그 모든 DOM 중 첫 번째 DOM을 반환
    let containerVanilla3 = document.querySelector('div');

```
<br />

#### 추가
```html

    <div id='info' class='container'>
      <p>Personal Info</p>
      <span class="container2">Info</span>  
    </div>
    
    // div 아래의 p 태그 선택
    document.querySelectorAll('div.container > p');
    // id가 info인 태그 아래의 container2 클래스명을 가진 태그
    document.querySelector('#info > .container2');

```
 <br /><br />

### 2. 내용 및 속성 변경하기
 1) 내용 변경 ( JQuery : html(); ) <br />
&nbsp;-&nbsp; **`document.querySelector('선택자').innerHTML = '변경 내용';`** <br />
 
```javascript
    
    <div id='info' class='container' >
        Personal Info
    </div>
        
    /**
     * JQuery의 경우
     */
    $('#info').html('Private Info');
    
    /**
     * Vanilla JS의 경우
     */
    document.querySeletor('#info').innerHTML = 'Private Info';
    
```
<br />

 2) 속성 변경 ( JQuery : attr('속성명', '속성값'); ) <br />
&nbsp;-&nbsp; **`document.querySelector('선택자').setAttribute('변경할 속성명', '속성값');`** <br />
 
```javascript    
    
    <div id='info' class='container'>
        Personal Info
    </div>
        
    /**
     * JQuery의 경우
     */
    // name 속성 추가 및 대입
    $('#info').attr('name', 'infoNameValue');
    
    /**
     * Vanilla JS의 경우
     */
    // name 속성을 추가하고 'infoNameValue' 값을 대입
    document.querySelector('#info').setAttribute('name', 'infoNameValue');
    
```
<br />

 3) Class명 변경 ( JQuery : attr('class', 'Class명'); ) <br />
&nbsp;-&nbsp; **`document.querySelector('선택자').className = '클래스명';`** <br />
 
```javascript 

    <div id='info' class='container'>
        Personal Info
    </div>
    
    /**
     * JQuery의 경우
     */
    // class 명 변경(container -> container2)
    $('#info').attr('class', 'container2');
    
    /**
     * Vanilla JS의 경우
     */
    // class 명 변경(container -> container2)
    document.querySelector.className = 'container2'; 
    
```
<br /><br />

### 3. startsWith() override
&nbsp;-&nbsp; startsWith() 메소드를 오버라이드 하는 방법 <br />
 
 ```javascript

    // 아래의 코드를 선언한 후 startsWith()를 사용
    /**
     * Override startsWith method
     */
    if (!String.prototype.startsWith) {

        String.prototype.startsWith = function(searchString, position){
            
          position = position || 0;
          return this.substr(position, searchString.length) === searchString;
      };
    }
    
```
<br /><br />
