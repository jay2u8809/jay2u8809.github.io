---
layout: post
title: Javascript - Event Handler
categories: [Programming]
tags: 
- Programming
- Javascript
comments: false
description:
author: J.ian
date:   2019-07-13
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-07-13" />

> Client JavaScript에서 사용되는 Event Handler 정리

### 이벤트 핸들러 등록과 load 이벤트<br />

```text

    ・ HTML 문서가 파싱되고 외부 컨텐츠 로딩이 완료되면 웹 브라우저에서는 load 이벤트가 발생하는데, 이 때 load 이벤트의 이벤트 핸들러로 등록된 함수가 실행된다.

    ・ load 이벤트 핸들러 함수를 자바스크립트 프로그램의 진입접으로 활용해 HTML요소에 대한 이벤트 핸들러 등록을 하는 초기화 작업을 수행할 수 있다.

    ・ 크로스 브라우징에서 호환성 문제가 있다.

```

```html

    <script>

        // 1.
        function 이벤트핸들러함수() {
            이벤트 발생 시 수행할 코드
        }

        window.onload = function() {
            var htmlElement = document.getElementById('태그id명');

            htmlElement.이벤트핸들러프로퍼티명 = function() {
                이벤트 발생시 수행할 코드
            }
        };

        // 2.
        function initEvent() {
            var btnAdd = document.getElementById('btnAdd');

            btnAdd.onclick = 수행할 다른 함수;
        }

        window.onload = initEvent();

    </script>

```
<br/>

### Event와 Event Handler <br />

| Event | Event Handler Property | 발생 시점 | 대상 요소 | 
|:---|:---:|:---|:---|
| abort | onabort | 이미지 로딩이 중단 되었을 때 | img |
| load | onload | 문서, 이미지 로딩이 완료되었을 때 | body, img |
| unload | onunload | 다른 페이지로 이동할 때 | body |
| click | onclick | 마우스로 클릭할 때 |  |
| dbclick | ondbclick | 마우스로 더블 클릭할 때 |  |
| mousedown | onmousedown | 마우스 버튼 눌렀을 때 |  |
| mouseup | onmouseup | 마우스 버튼 놓았을 때 |  |
| mousemove | onmousemove | 마우스 포인터를 이동하였을 때 |  |
| mouseout | onmouseout | 요소로부터 마우스가 벗어날 때 |  |
| mouseover | onmouseover | 요소 안으로 마우스 포인터가 들어왔을 때 |  |
| contextmenu | oncontextmenu | 컨텍스트 메뉴가 표시되기 전 | body | 
| keypress | onkeypress | 키를 눌렀을 때 | form요소, body |
| keydown | onkeydown | 키를 누르고 있을 때 | form요소, body |
| keyup | onkeyup | 키를 떼었을 때 | form요소, body |
| change | onchange | 요소의 내용이 변경되었을 때 | input(text), select, textarea |
| reset | onreset | reset 버튼이 눌렸을 때 | form |
| submit | onsubmit | submit 버튼이 눌렸을 때, Form 내용을 전송하지 않으려면 fasle 반환 | form |
| blur | onblur | 요소가 포커스를 잃었을 때 | button, input, label, select, textarea, body |
| focus | onfocus | 요소가 포커스를 얻었을 때 | button, input, label, select, textarea, body |
| resize | onresize | 요소의 사이즈가 변경되었을 때 | body |
| scroll | onscroll | 스크롤 할 때 | body | 

<br />
