---
layout: post
title: Java - Java8 Enum 클래스를 사용하는 방법
categories: [Programming]
tags: 
- Programming
- Java
- Enum
comments: false
description:
author: J.ian
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-12-05" />

> JAVA(자바) Enum 클래스를 사용하는 방법을 정리해 본다.

&nbsp;&nbsp;
 자바5에서 추가된 데이터 타입으로 

> ### JAVA(자바) Enum 사용법

___


#### 1. String → Enum 변환
&nbsp;- Enum의 **`valueOf(String str)`** 메소드를 이용. (Static Method)     
&nbsp;&nbsp; ※ **`valueOf(Class<T> class, String str)`** : 파라미터로 받은 class에서 String을 찾아 enum에서 가져온다.     
&nbsp;&nbsp;&nbsp;&nbsp;**`valueOf(String str)`** 메소드는 내부적으로 자기 자신의 class를 가져오는 것.             
```java

    // Enum Class
    public enum Weekend {

        SUNDAY,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY
    }
    
    String weekendStr = "saturday";         // 문자열 값   
    Weekend weekendEnum = Weekend.SUNDAY;   // 임의의 값 SUNDAY로 초기화
    
    // Weekend.SATURDAY가 대입된다.
    weekendEnum = Weekend.valueOf(weekendStr.toUpperCase()); 
    
```
       
      

### Enum → String변환
&nbsp;- Enum의 **`name()`** 메소드를 이용.
```java

    // Enum Class
    public enum Weekend {

        SUNDAY,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY
    }
    
    String weekendStr = null;               // 문자열 값   
    Weekend weekendEnum = Weekend.SUNDAY;   // 임의의 값 SUNDAY로 초기화
    
    weekendStr = weekendEnum.name();        // "SUNDAY"가 저장.
    
```
     
     

### Enum의 반복문
&nbsp;- Enum의 **`values()`** 메소드를 이용. (Static Method)
```java

    // Enum Class
    public enum Weekend {

        SUNDAY,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY
    }
    
    // Weekend의 값이 차례로 반복된다.
    for(Weekend weekend : Weekend.values()) {

        System.out.println(weekend.name());
    }
    
```
     
     

### Enum의 순서구하기
&nbsp;- Enum의 **`ordinal()`** 메소드를 이용.
```java

    // Enum Class
    public enum Weekend {

        SUNDAY,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY
    }
    
    for(Weekend weekend : Weekend.values()) {
        
        System.out.println(weekend.ordinal());          // SUNDAY : 0 ~ SATURDAY : 6
    }
    
```
     
     
