---
layout: post
title: HTML - 문법
categories: [Programming]
tags: 
- Programming
- HTML
comments: false
description:
author: J.ian
date:   2019-07-13
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-07-13" />

> 자주 사용하는 HTML 문법을 정리한다.

> ## HTML?<br/>

&nbsp;- HTML : **`웹 브라우저(Web Browser)`**가 해석하기 위한 언어.<br />
&nbsp;- 다양한 **`태그(Tag)`**들로 구성되어 있다.

```html

    <!DOCTYPE html>                         <!-- 해당 웹 페이지가 HTML5임을 선언 -->
        <head>                              <!-- 해당 페이지의 정보(정의)를 포함. -->
            <meta charset="utf-8"/>
            <title>해당 페이지의 제목</title>    <!-- 해당 페이지의 제목 -->
        </head>
        <body>                              <!-- 해당 페이지의 내용 -->
            <!-- 태그(Tag)의 구성 -->
            <태그명 속성="값" 속성="값">
            <시작태그>
            </종료태그>
            <단일태그/>
        </body>
    </html>

```
<br />


> ### 기본적인 HTML 태그(Tag) <br />

```html
    <body>
    
        <!-- 
            HTML의 주석 : 표현이 되지 않음.
        -->
        
        [h 태그] : 제목을 표현할 때 사용. 1이 가장 큰 크기를 의미.
            이미지 등도 감쌀 수 있으며 브라우저에 표현하는 것보다 특정 단락이나 구문의 [제목]이라는 의미가 더 크다.
        <h1> </h1>
        <h2> </h2>
        <h3> </h3>
        <h4> </h4>
        <h5> </h5>
        <h6> </h6>
        
        [p 태그] : 페이지의 한 문단을 의미.
        <p> </p>
        
        [pre 태그] : 작성한 내용 그대로 표현되도록 하는 태그.
        <pre> </pre>
        
        [단일태그]
        <hr /> : 가로로 긴 선을 표현
        <br /> : 개행, 줄을 바꾸는 태그
        
        [특수문자]
        &nbsp; : 띄어쓰기 한 칸.
        
    </body>
```
<br />

> ### **`<a>`** 태그<br />

&nbsp;- HTML에서 가장 중요한 태그(Tag), 링크(HyperLink)를 의미한다.

```html

    <body>
    
        <!-- 
            href : 이동하고자 하는 링크 또는 웹 페이지의 주소를 입력
            target
                _blank : 링크를 클릭 시 새로운 탭이나 창을 열어 이동.
                _self : 링크를 클릭 시 현재 탭이나 창에서 이동.(기본값) 
        -->
        <a href="#" target="_blank"></a>
        <a href="#" target="_self"></a>
    
    </body>

```
<br />

> ### 태그의 속성(Attribute) 소개 <br />

```html

    <head>
        <style>
            .c1 { 
                color : red;
                background-color: black;
            }
            .c2 { 
                font-weight : bold;
                font-style : italic;
            }
        </style>
    </head>
    <body>
    
        <!--
            id : 특정 태그를 지칭하는 속성.(개발자가 주로 사용)
                화면 구성에는 아무런 영향이 없다. 
                <a href="#a1"></a> 으로도 사용 가능
        -->
        <p id="a1"> </p>
        
        <!-- 
            title : 태그에 마우스 포인터를 두면 표시된다.
        -->
        <p title="타이틀"> </p>
        
        <!--
            class : 스타일 시트(CSS) 클래스를 적용하는 속성
                2개의 클래스를 함께 적용할 수 있다.
        -->
        <p class="c1 c2"> style태그의 .c1, .c2의 내용이 적용된다. </p>
        
    </body>

```
<br />

> ### 목록(List) 및 테이블(Table) 태그 <br />

```html

    <body>
    
        <!--
            <ol></ol> : ordered list(순서가 정해져 있다.)
        -->
        <ol>
            <li> </li>
            <li> </li>
        </ol>
        
        <!--
            <ul></ul> : unordered list(순서가 없다.)
        -->
        <ul>
            <li> </li>
            <li> </li>
        </ul>
        
        <!--
            ★<dl></dl>
            개인 취향에 따라 사용 가능
        -->
        <dl>
            <dt></dt>
            <dd></dd>
        </dl>
        
        <!--
            <table></table>
        -->
        <table>
            <tr>                <!-- 행(row) -->
                <td> </td>      <!-- 열(column) -->
            </tr>
            <tr rowspan="2">            <!-- rowspan : 행 합치기 -->
                <td colspan="2"></td>   <!-- colspan : 열 합치기 -->
            </tr>
        </table>
        
    </body>

```
<br />

> ### 데이터(Data) 전송 : **`form`** 태그 <br />

```html

    <body>
    
        <!--
            action : 데이터를 전송할 경로
            method : 데이터를 전송할 방법 (GET / POST)
            name : 서버에서 식별할 수 있는 속성. 한 페이지에서 하나의 값만 가진다.
                radio, select, checkbox 등은 name값을 동일하게 하여 선택된 value를 서버로 전송.
        -->
        <form action="" method="get">
        
            <input type="text" name="userId" value="" />
            <input type="password" name="userPw" value="" />
            
            <input type="radio" name="gender" value="male" />
            <input type="radio" name="gender" value="female" />
            
            <input type="checkbox" name="hobby" value="Reading" checked="checked" / >
            <input type="checkbox" name="hobby" value="Game" / >
            <input type="checkbox" name="hobby" value="Walking" / >
            
            <textarea name="desc" rows="5" />
            
            <select multiple="multiple">
                <option selected="selected" name="address" value="Tokyo"></option>
                <option name="address" value="Seoul"></option>
                <option name="address" value="NewYork"></option>
            </select>
             
            <input type="submit" />
            <input type="button" />
            <input type="reset" />
                                      
        </form>
        
    </body>

```
<br />

> ### 레이아웃(Layout) 태그 <br />

```html

    <body>
    
        <!--
            블록타입과 인라인타입
                BlockType : 태그가 세로로 엔터를 누른 것 같은 형태.
                InlinType : 태그가 가로로 스페이스바를 누른 것 같은 형태.
        -->
        
        <div>
            대표적인 블록 타입 태그. 이 외에 p태그, li 태그 등이 있다.
        </div>
        
        <span>
            대표적인 인라인 타입 태그. 이 외에 img 태그 등이 있다.
        </span>
        
    </body>

```
<br />

> ### 시멘틱 태그 (Semantic Tag) <br />

```html

    <body>
    
        <!--
            시멘틱 태그 : 검색 엔진의 검색 능력을 향상시키기 위한 태그.
                해당 페이지의 주제 등을 포함하여 검색 엔진에 노출 시킨다.
        -->
        
        <header></header>           <!-- 페이지의 헤드 -->
        <nav></nav>                 <!-- 페이지의 네비게이션 -->
        <section>                   <!-- 페이지의 내용 -->
            <article></article>     <!-- 페이지 내용의 구문 -->
            <aside></aside>         <!-- 페이지 내용의 부가 정보 -->
        </section>
        <footer></footer>           <!-- 페이지의 하단 -->
        
    </body>

```
<br />

> ### 문자열 꾸미기 <br />

```html

    <body>
        
        <del>취소선</del>
        <ins>밑줄</ins>
        <sup>윗 첨자</sup>
        <sub>아랫 첨자</sub>
        <strong>강하게 표시, bold와 동일하게 표현한다</strong>
        <abbr>약어</abbr>
        <blockquote>인용</blockquote>
        <q>짧은 인용</q>
        
        <code>프로그램 코드</code>
        <khd>키보드 문자열</khd>
        <var>코드 태그 안에서 변수를 작성할떄 사용</var>
        <samp>프로그램 코드의 출력문</samp>
        
        <address>주소</address>
        
        <div>HTML 문서 내의 영역을 만들 때 사용, 다음 태그는 밑으로 내려간다.</div>
        <span>문자열 내부의 영역을 만들 때 사용, 다음 태그는 밑으로 내려가지 않음.</span>
        
    </body>

```
