---
layout: post
title: Javascript - JQuery 기초
categories: [Programming]
tags: 
- Programming
- Javascript
- JQuery
comments: false
description:
author: J.ian
date:   2019-07-13
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-07-13" />

> ### JQuery? <br />
&nbsp;- 자바스크립트 전반을 지원하는 오픈소스 프레임워크
&nbsp;- JQuery Mobile : 가장 많은 스마트 디바이스 지원 범위를 가지는 프레임워크 

### JQuery 사용 준비
&nbsp;- **`jquery.js`** 파일을 준비
```html
    <!-- https://jquery.com/download/ 에서 다운로드 -->
    <!-- https://jquerymobile.com/download/  -->

    <!-- 순서가 중요 -->
    <link rel="stylesheet" href="jquery.mobile.css" />
    <script src="jquery.js"></script>
    <script src="jquery.mobile.js"></script>
    <script>
        코드 작성
    </script>
```
<br />

### JQuery Event Handler
&nbsp;- **`ready()`**  함수
```html

    <script>
        $(document).ready(function(){

            $('#header').addClass("header");
            $('#content').addClass("content");
            $('#footer').addClass("footer");
        });
    </script>

    <body>
        <div id="header"></div>
        <div id="content"></div>
        <div id="footer"></div>
    </body>

```
<br />

```text

    ・ on() : 현재 선택된 요소에 대해 하나 이상의 이벤트와 이벤트 핸들러 함수를 연결하는 메소드
        예)
            $('p').on('click', function(){
                alert($(this).text());      // this : p tag
            });

            $('body').on('click', 'p', function(){
                alert($(this).text());      // p tag에서 이벤트 발생
            });

            function eventFoo(event) {
                alert(event.date.foo);
            }: 
            $('p').on('click', {foo:'bar'}, eventFoo);

            $('form').on('submit', false);

            $('form').on('submit', function(event){
                event.prevent.Defalt();
            });

            $('form').on('submit', function(event){
                event.stopPropagation());
            });


    ・ one() : on()과 동일하지만 메소드지만 한번만 실행된다.

    ・ off() : 현재 선택된 요소에 대해 하나 이상의 이벤트와 이벤트 핸들러 함수이 연결을 제거하는 메소드

```
<br />

| Event | Event Handler Property | 발생 시점 | 
|:---|:---:|:---|
| 문서 로딩 | ready | 해당 DOM 로딩이 완료되었을 때 |
| 마우스 | click | 마우스로 클릭할 때 (자바스크립트 이벤트) |
| 마우스 | dbclikc | 마우스로 더블 클릭할 때 (자바스크립트 이벤트) |
| 마우스 | focusin | 요소가 포커스를 얻을 때 |
| 마우스 | focusout | 요소가 포커스를 잃을 때 (자바스크립트 이벤트) |
| 마우스 | hover | mouseenter 와 mouseleave를 하나로 묶음 |
| 마우스 | mouseenter | 요소 안으로 마우스가 들어왔을 때 (자식 노드에서는 이벤트 감지 안함) | 
| 마우스 | mouseleave | 요소로부터 마우스가 벗어날 때 (자식 노드에서는 이벤트 감지 안함) |
| 마우스 | mousedown | 마우스 버튼 눌렀을 때 (자바스크립트 이벤트) |
| 마우스 | mouseup | 마우스 버튼을 놓았을 때 (자바스크립트 이벤트) |
| 마우스 | mousemove | 마우스의 포이터를 이동하였을 때 (자바스크립트 이벤트) |
| 마우스 | mouseout | 요소로부터 마우스가 벗어날 때 (자바스크립트 이벤트) |
| 마우스 | mouseover | 요소 안으로 마우스 포인터가 들어왔을 때 (자바스크립트 이벤트) |
| 키보드 | keypress | 키를 눌렀을 때 (자바스크립트 이벤트) |
| 키보드 | keydown | 키를 누르고 있을 때 (자바스크립트 이벤트) |
| 키보드 | keyup | 키를 떼었을 때 (자바스크립트 이벤트) |
| 키보드 | focusin | 요소가 포커스를 얻을 때 |
| 키보드 | focusout | 요소가 포커스를 잃을 때 (자바스크립트 이벤트) |
| 폼 | focus | 요소가 포커스를 얻을 때 (자바스크립트 이벤트) |
| 폼 | blur | 요소가 포커스를 잃을 때 (자바스크립트 이벤트) |
| 폼 | change | 요소의 값이 변경되었을 때 (자바스크립트 이벤트) |
| 폼 | select | 사용자가 텍스트를 선택했을 때 (자바스크립트 이벤트) |
| 폼 | submit | 폼의 내용을 전송할 때 (자바스크립트 이벤트) |
| 웹브라우저 | resize | 요소의 사이즈가 변경되었을 때 (자바스크립트 이벤트) |
| 웹브라우저 | scroll | 스크롤 할 때 (자바스크립트 이벤트) |

<br />


### JQuery Selector <br />

```html

    <!--
        [기본 셀렉터]
            * : 모든 요소 선택
            #id : id값을 가진 요소 선택
            .class : class 속성을 가진 요소 선택
            element : 요소를 선택
            selector1, selector2 : 복수의 셀럭터 중 일치하는 것 선택
    -->

    <script>

        $('*')                      // 모든 노드
        $('h3')                     // h3 html tag      
        $('.content')               // content라는 class
        $('#message')               // message라는 id
        $('div, .header, #menu')    // div태그들, header라는 노드들, id가 menut인 노드들

    </script>

```
```html

    <!--
        [계층 셀렉터]
            ancestor descendant : ancestor 요소의 모든 자손 요소 descendant를 선택
            parent > child : parent 요소의 자식 요소를 선택
            perv + next : perv 요소 다음의 형제 요소 next를 선택.
            perv ~ siblings : perv 요소 다음의 형제 요소들 siblings를 선택

        ★ 자식 : 바로 다음 요소 / 자손 : 아래의 모든 요소
    -->

    <script>

        $('div#lectures li')           // div중에 id가 lectures인 노드의 자손 중 li 태그
        $('div>p')                     // div의 자식 p 태그    
        $('#first + li')               // id가 first인 태그의 다음 형제
        $('#second ~ li')              // id가 second인 요소의 다음 형제들

    </script>
    
```
```html

    <!--
        [속성 셀렉터]
            [attr] : attr 속성을 가지는 요소 선택
            [attr=value] : attr 속성값이 value인 요소 선택
            [attr!=value] : attr 속성값이 value가 아닌 요소 선택
            [attr^=value] : attr 속성값이 value로 시작하는 요소 선택
            [attr$=value] : attr 속성값이 value로 끝나는 요소 선택
            [attr*=value] : attr 속성값이 value를 포함하는 요소 선택
            [selector1][selector2][selector3] : 셀럭터에 일치하는 속성을 가지고 있는 요소를 선택

    -->

    <script>

        $("div#lectures li[href='lec03']")      // id가 lectures인 div태그의 자손 요소 li 중 href속성이 lec03인 요소 선택
        $('div#reference li[href^="http://"]')  // id가 reference인 div태그의 자손 요소 li 중 href속성이 http://로 시작하는 요소 선택    
        $('[src][alt]')                         // src와 alt 속성이 있는 요소 선택

    </script>
    
```
```html

    <!--
        [필터 셀렉터]
            :animated -> show, hide, slideUp, slideDown 등의 명령으로 현재 애니메이션 중인 요소 선택
            :first -> 첫번째 요소 선택
            :last -> 마지막 요소 선택
            :not(selector) -> selector에 의해 선택된 요소들 이외의 것을 선택
            :even -> 짝수번째 요소 선택
            :odd -> 홀수 요소 선택

    -->
```
<br />

