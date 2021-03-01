---
layout: post
title: Java - Map 데이터 타입 
categories: [Programming]
tags: 
- Programming
- Java
- Map
- DataType
comments: true
description:
author: J.ian
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-09-08" />

> JAVA(자바) **`Map`** 인스턴스에 대해 알아본다.

 자바에서 Map은 **`Interface`**로서 존재(Map<K, V>)하며, HashMap<K, V>이나 LinkedHashMap<K, V>, TreeMap<K, V> 등의 클래스에서 구현하여 사용한다.      
TreeMap<K, V>은 트리 자료구조를 기반으로 구현되어 있으며, 정렬 상태를 유지하는 특징이 있다.      

### 1. Map<K, V> 인스턴스의 생성
&nbsp;-&nbsp; Map<K, V>은 인터페이스이므로 메소드가 구현된 다른 클래스를 이용하여 인스턴스를 생성한다.      
&nbsp;&nbsp; ① **HashMap** : put()메소드를 이용해 데이터가 추가될 때, hash를 이용하여 저장한다.      
&nbsp;&nbsp; &nbsp;&nbsp;  hash에서 어떤 값을 리턴할지 알수 없기에 `순서를 보장할 수 없다.`      
&nbsp;&nbsp; ② **LinkedHashMap** : 데이터를 `추가한 순서`대로 저장된다.      
&nbsp;&nbsp; ③ **TreeMap** : Key를 기준으로 `오름차순 정렬`되어 저장된다. (숫자 > 영어 대문자 > 영어 소문자 순서)      
```java

    // HashMap
    Map<String, String> hashMapEx = new HashMap<>();

    // LinkedHashMap
    Map<String, String> linkedHashMapEx = new LinkedHashMap<>();
    
    // TreeMap
    Map<String, String> treeMapEx = new TreeMap<>();
    
```

       
      

### 2. Map<K, V>의 주요 메소드들
&nbsp;-&nbsp; Map<K, V> 인터페이스의 주요 메소드(추가, 조회, 제거 등)      
```java

    @SpringBootTest
    class ApplicationTest {
    
    	private enum MobileOs {
    		iOS,
    		Android,
    		Tizen,
    		WindowsMobile
    	}
    	
    	@Test
    	void mapTest() {
    
    		// HashMap
    		Map<String, MobileOs> hashMapEx = new HashMap<>();
    
    		// 1. 데이터 추가
    		hashMapEx.put("Apple", MobileOs.iOS);
    		hashMapEx.put("Google", MobileOs.Android);
    		hashMapEx.put("Intel", MobileOs.Tizen);
    		// Map에 중복된 key를 추가할 경우
    		hashMapEx.put("Apple", MobileOs.WindowsMobile);
    
    		System.out.println(" put : " + hashMapEx);
    		// [Result] : {Google=Android, Apple=Windows}
    
    		// 2. 데이터 조회
    		MobileOs value1 = hashMapEx.get("Google");
    		System.out.println(" get : " + value1);
    		// [Result] : Android
    
    		// Map에 존재하지 않은 key를 조회할 경우
    		MobileOs value2 = hashMapEx.get("MS");
    		System.out.println(" get : " + value2);
    		// [Result] : null
    
    		// 3. 데이터 삭제
    		MobileOs value3 = hashMapEx.remove("Google");
    		System.out.println(" remove : " + value3);
    		// [Result] : Android
    
    		// Map에 존재하지 않은 key를 삭제할 경우
    		MobileOs value4 = hashMapEx.remove("MS");
    		System.out.println(" remove : " + value4);
    		// [Result] : null
    
    		// Map에 데이터가 존재하는지 여부 확인
    		boolean isEmpty = hashMapEx.isEmpty();
    		System.out.println(" isEmpty : " + isEmpty);
    		// [Result] : false
    
    		// Map에 존재하는 데이터(Key)의 수
    		int size = hashMapEx.size();
    		System.out.println(" size : " + size);
    		// [Result] : 2
    
    		// Map의 key와 value를 함께 호출한다. 많은 양의 데이터를 필요로 한다면 keySet()보다 효율이 좋다.
    		Set<Map.Entry<String, MobileOs>> entrySet = hashMapEx.entrySet();
    		System.out.println(" entrySet : " + entrySet);
    		// [Result] : [Apple=WindowsMobile, Intel=Tizen]
    
    		// Map에 해당하는 key의 데이터가 존재하는지 여부
    		boolean isContainsKey = hashMapEx.containsKey("Apple");
    		System.out.println(" containsKey : " + isContainsKey);
    		// [Result] : true
    
    		// Map에 해당하는 key의 데이터가 존재하는지 여부(존재하지 않는 key의 경우)
    		isContainsKey = hashMapEx.containsKey("MS");
    		System.out.println(" containsKey : " + isContainsKey);
    		// [Result] : false
    
    		// Map의 모든 key의 모음, Array나 Stream으로 사용가능하다 
    		Set<String> keySet = hashMapEx.keySet();
    		System.out.println(" keySet : " + keySet);
    		// [Result] : [Apple, Intel]
    
    		// Map의 모든 value의 모음, Array나 Stream으로 사용가능하다 
    		Collection<MobileOs> values = hashMapEx.values();
    		System.out.println(" values : " + values);
    		// [Result] : [WindowsMobile, Tizen]
    	}
    }

```
       
      

### 3. 기타
&nbsp;①&nbsp; Iterator<E> 인터페이스를 이용한 반복문      
&nbsp;②&nbsp; stream을 이용한 value 구하기      
```java

    // ① 반복문 
    for (Iterator<String> itr = keySet.iterator(); itr.hasNext(); ) {
        String next = itr.next();
        System.out.println("[Key]:" + next + " [Value]:" +  hashMapEx.get(next));
    }

    System.out.println("======================================");

    Iterator<Map.Entry<String, MobileOs>> entries = hashMapEx.entrySet().iterator();
    while(entries.hasNext()){
        Map.Entry<String, MobileOs> entry = entries.next();
        System.out.println("[Key]:" + entry.getKey() + " [Value]:" +  entry.getValue());
    }

    System.out.println("======================================");

    Iterator<String> keys = hashMapEx.keySet().iterator();
    while(keys.hasNext()){
        String key = keys.next();
        System.out.println("[Key]:" + key + " [Value]:" +  hashMapEx.get(key));
    }
    
    
    // ② Stream
    String firstKey1 = hashMapEx.keySet()
            .stream()
            .findFirst()
            .get();
    System.out.println(firstKey1);
    // [Result] : Apple
    
    String firstKey2 = hashMapEx.entrySet()
            .stream()
            .findFirst()
            .get()
            .getKey();
    System.out.println(firstKey2);
    // [Result] : Apple
    
```
       
      

