---
layout: post
title: Thymeleaf - 타임리프 변수 사용법
categories: [Programming]
tags: 
- Thymeleaf
comments: false
description:
author: J.ian
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-04-20" />

> 타임리프Thymeleaf에서 변수를 사용하는 방법에 대한 정리

### 타임리프Thymeleaf 선언
&nbsp;-&nbsp; 타임리프Thymeleaf를 사용하기 위해서는 HTML 문서에 타임리프Thymeleaf에 대한 정의를 해야한다.         
   **`xmlns:th="http://www.thymeleaf.org"`** 선언          
  ```html
      <!DOCTYPE html>
      <!-- 타임리프Thymeleaf 선언 -->
      <html xmlns:th="http://www.thymeleaf.org" th:lang="en">
        <head>
          ...
        </head>
        <body>
          ...
        </body>
      </html>
  ```
<br />

### HTML 속성명
&nbsp;-&nbsp; **`th:`**를 붙여 속성에 대한 제어가 가능하다.
   **`${변수명}`**으로 사용한다.
    ```html
       <!-- 
         예) Controller로부터 model에 담겨져 온 "form"이라는 변수(Object)가 있다. 
         --> 
      
       <input type="check"
           <!--form이 null인 경우 클래스명을 normal로 한다 --> 
           th:class    = "${form eq null ? 'normal' : 'special'}"  
           <!-- 회원번호를 ID 설정 -->
           th:id       = "${form.memberSn}"  
           <!-- 메일 수신여부 -->
           th:name     = "${form.receiveYn}" 
           <!-- 메일 수신인 경우 체크함. -->
           th:checked  = "${form eq null ? false : form.receiveYn}" 
           <!-- 비회원은 선택할수 없도록한다. -->
           th:disabled = "${form.memberSn == null}"  
           <!-- 메일 수신인 경우 'Y'를 설정 -->
           th:value    = "${form.receiveYn ? 'Y' : 'N'}" 
       /> 
        <label th:for="${form.memberSn}"></label>
       
       <!-- span 태그에 회원 이름이 표시 -->     
       <span th:text="${form.memberName}"></span> 
       <span>[[${form.memberName}]]</span>
       
       <!-- HTML 문서 표시 -->
       <div> [(${form.customProfile})] </div>  <!-- html로 작성한 custom profile을 표시 -->  
        
       <!-- src 및 href의 경우 @를 이용한다. -->
       <a th:href = "@{/}"></a>
       <link th:href   = "@{/css/CSS파일명.css}" rel="stylesheet" >
       <script th:src  = "@{/js/JS파일명.js}"></script>
       <img th:src     = "@{${member.profileImg[0]}}"
            th:onerror = " 'this.src=\'' + ${변수명} + 'replace.png\';' ">
       
    ``` 
<br />

### 조건문
&nbsp;-&nbsp; **`th:if`**, **`th:unless`**를 사용하여 조건에 따라 HTML Tag를 표시한다.
 
 ```html
    <!-- 
      예) Controller로부터 model에 담겨져 온 "isMemberList"라는 변수(Boolean)가 있다. (회원 목록)
      -->
      
      <!-- isMemberList == true -->
      <ul th:if="${isMemberList}">
          <li>
              회원 정보 표시
          </li>
      </ul>
      <!-- isMemberList == false, th:if="${!isMemberList}", th:if="${not isMemberList}"도 가능 -->
      <ul th:unless="${isMemberList}">
          ...
      </ul>
      
      
      <!-- 
        예) Controller로부터 model에 담겨져 온 "member"라는 변수(Object)가 있다. (회원 정보)
        -->
      
      <!-- 회원 레벨(NORMAL, SILVER, GOLD, DIAMOND, PLATINUM) 표시 -->
      <div th:switch="${member.level}">
          <span th:case="SILVER" >[[${member.level}]]</span>
          <span th:case="GOLD" >[[${member.level}]]</span>
          <span th:case="DIAMOND" >[[${member.level}]]</span>
          <span th:case="PLATINUM" >[[${member.level}]]</span>
          <span th:case="*" >[[${member.level}]]</span>   <!-- default -->
      </div>
      
 ```
<br /> 
 
### 반복문
&nbsp;-&nbsp; **`th:each`**를 사용하여 HTML tag를 반복한다.
 
 ```html
    <!-- 
      예) Controller로부터 model에 담겨져 온 "memberList"라는 변수(List)가 있다. (회원 목록)
      --> 
      
      <!-- th:if="${not #lists.isEmpty(memberList)}" -->
      <ul th:if="${#lists.size(memberList) > 0}"> 
      
          <!-- member는 memberList의 구성 객체, iter 순서정보를 가지고 있는 "객체"이다 -->
          <li th:each="member, iter : ${memberList}" th:id="${member.memberSn}" th:value="${member.memberSn}">
              <div th:id=" 'idx' + ${iter.index + 1} ">
                  <span th:text = "${member.memberName}"></span>
                  <img  th:src  = "@{${member.profileImg[0]}}">
                  <span>[[${iter.index}+1]]</span>
              </div>
              <div th:text="${ iter.last ? '마지막입니다.' : '' }"></div>
          </li>
      </ul>

 ```
<br />

### 날짜 형식 변경 메소드
&nbsp;-&nbsp; **`#dates.format(날짜변수, '날짜 형식')`** 
 
 ```html
    <!-- 2020.01.01 형태로 표현하고 싶은 경우 -->
    <span th:text="${#dates.format(member.registerDt, 'yyyy.MM.dd')}"></span>
```
<br />

### 기타 메소드
&nbsp;-&nbsp; **`#numbers.sequence(시작 숫자, 마지막 숫자, 차이)`** ('차이'는 생략할 수 있다.)
 
 ```html
    <!-- 0부터 20까지 2씩 증가 -->
    <span th:each="num, iter : ${#numbers.sequence(0,20,2)}">
      <!-- num : 0, iter : 0 -->
      <!-- num : 2, iter : 1 -->
      <!-- num : 4, iter : 2 -->
                ...
      <!-- num : 16, iter : 17 -->
      <!-- num : 18, iter : 18 -->
      <!-- num : 20, iter : 19 -->
    </span>
    
```
&nbsp;-&nbsp; **`#arrays.contains(대상배열, 포함하고 있는지 확인할 객체)`** : 결과값 Boolean
 
```html
    <!-- memberList에 memberSn문자열을 포함하고 있는지 확인 -->
    <div th:if="${#arrays.contains(memberList, #strings.toString(memberSn))}"></div>
```
<br />

참고 : [Thymeleaf Docs](https://www.thymeleaf.org/apidocs/thymeleaf/3.0.6.RELEASE/index.html)