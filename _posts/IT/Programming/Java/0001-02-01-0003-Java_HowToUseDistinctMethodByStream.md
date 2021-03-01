---
layout: post
title: Java - List의 중복을 제거하는 방법 (Stream의 Distinct 사용)
categories: [Programming]
tags: 
- Programming
- Java
- Stream
- Distict
comments: false
description:
author: J.ian
date:   2020-05-10
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-05-10" />

> JAVA(자바) **`Stream의 Distict를 이용`** 하여 List의 중복값을 가진 인스턴스를 제거한다.

### 1. 기본 자료형의 클래스들(Integer, BigDecimal 등) 및 String 객체의 중복값 제거
&nbsp;&nbsp; 기본 자료형의 클래스들(Integer, BigDecimal 등)과 String 객체의 경우 Distinct를 이용하여 간단히 제거할수 있다.    
 
```java

    // List 생성
    List<String> strList = new ArrayList<>();
    strList.add("mac");
    strList.add("windows");
    strList.add("ubuntu");
    strList.add("mac");
    
    // 중복된 값인 "mac"을 제거
    strList.stream()
            .distinct()
            .forEach(f -> System.out.println(f));
    
    // [Result] 
        mac
        windows
        ubuntu
```
       
      

### 2. 커스텀 클래스의 중복값 제거
&nbsp;&nbsp; 커스텀 클래스의 경우, Object클래스로부터 상속받은 **`hashCode메소드와 equals메소드를 오버라이드Override`** 하여 Distinct를 사용해야한다.      
&nbsp;&nbsp; ※ ***Distinct메소드는 실제적으로 hashCode메소드와 eqauls메소드를 이용하여 중복을 제거한다.***      

```java

    // 커스텀 클래스
    public class Student {

        private String name;
        private String className;
        private String telNum;

        // Getter Setter 생략

        // 중복 비교할 필드의 hashCode를 반환하도록 오버라이드
        @Override
        public int hashCode() {

            return this.className.hashCode();
        }

        // 중복 비교할 필드값을 비교하도록 오버라이드
        @Override
        public boolean equals(Object obj) {
            
            return this.className.equals(((Student) obj).className);
        }
    }
}
    
```
       
      

