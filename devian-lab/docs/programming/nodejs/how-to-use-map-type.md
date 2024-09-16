---
slug: /programming/nodejs/how-to-use-map-type
# id: how-to-use-map-type
title: Map 타입 사용방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  data structure,
  map data,
  자료구조,
]
keywords: [
  devian-lab,
  Jobː談,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  data structure,
  map data,
  자료구조,
]
description: js 의 map 타입의 자료구조를 사용하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# [TypeScript] for of 와 for in 반복문
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2021-10-10",
  "updatedAt": "2021-10-10"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2021-10-10
  updatedAt: 2021-10-10
```


---

## Map 이란?

  - Key를 이용하여 Value(데이터)를 저장하는 방식의 자료구조
    + `KEY: VALUE`
    + Key는 중복될 수 없고 Key가 중복될 경우, 가장 최근(마지막) Value가 저장(덮어쓰기)된다.
    + Map의 interface

      ```typescript
        interface Map<K, V> {
          clear(): void;
          delete(key: K): boolean;
          forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
          get(key: K): V | undefined;
          has(key: K): boolean;
          set(key: K, value: V): this;
          readonly size: number;
        }
      ```


### Map 선언, 생성

  - `new Map<keyType, valueType>()`

    + Type 선언하지 않을 경우

      ```typescript
        const map = new Map();
      ```
    
    + Type 선언할 경우

      ```typescript
        const mapWithType = new Map<string, any[]>();
      ```

### 데이터 저장
  - `set(key, value)` 메소드를 이용해 Key와 Value를 저장
    + Key가 중복될 경우, 가장 최근(마지막) Value가 저장(덮어쓰기)되기 때문에 특정 Key의 Value를 **업데이트 할 때도 사용** 된다.
    + Java의 `put()` 메소드와 동일한 기능

    ```typescript
      const map = new Map<string, string[]>();
      map.set('keyOne', ['value1', 'value2']);
      map.set('keyTwo', ['value1', 'value2', 'value3']);
      map.set('keyThree', ['value1', 'value2', 'valu3', 'value4']);

      // Update
      map.set('keyTwo', ['value1']);
    ```

### 데이터의 삭제
  - `delete(key)` 메소드를 이용해 Value를 삭제
    + 반환값: 데이터가 존재해서 삭제에 성공한다면 true, 데이터가 존재하지 않을 경우 false 를 반환
    + Java의 `remove()` 메소드와 동일한 기능

    ```typescript
      console.log(`DELETE(KEY IS EXIST): ${map.delete('keyTwo')}`);
      console.log(`DELETE(KEY IS NOT EXIST): ${map.delete('keyFour')}`);
    ```
    ```text
      [Result]
        DELETE: true
        DELETE: false
    ```

  - `clear()` 메소드를 이용해 모든 데이터를 삭제할 수 있다.
    + Java의 `clear()` 메소드와 동일한 기능

    ```typescript
      map.clear();
    ```

### 데이터의 조회
  - `get(key)` 메소드를 이용해 Value를 가져온다.
    + 데이터가 존재하지 않는다면 undefined 를 반환
    + Java의 `get()` 메소드와 동일한 기능

    ```typescript
      console.log(`GET(KEY IS EXIST): ${map.get('keyOne')}`);
      console.log(`GET(KEY IS NOT EXIST): ${map.get('keyFour')}`);
    ```
    ```text
      [Result]
        GET: value1,value2
        GET: undefined
    ```

### 데이터의 존재 여부 확인
  - `has(key)` 메소드를 이용해 Value가 있는지 확인
    + Java의 `containsKey()` 메소드와 동일한 기능(containsValue() 기능은 없다)

    ```typescript
      console.log(`KEY IS EXIST: ${map.has('keyOne')}`);
      console.log(`KEY IS NOT EXIST: ${map.has('keyFour')}`);
    ```
    ```text
      [Result]
        true
        false
    ```

### Key 또는 Value 값 구하기
  - Key 또는 Value를 리스트 형태로 구할 수 있다.
    + `keys()`, `values()` 메소드를 이용해서 Key, Value 값을 리스트 형태로 얻을 수 있다.

  #### keys()

    ```typescript
      const mapKeys = map.keys();
      for (const key of mapKeys) {
        console.log(`KEY: ${key}`);
      }
    ```
    ```text
      [Result]
        KEY: keyOne
        KEY: keyTwo
        KEY: keyThree
    ```

  #### values()

    ```typescript
      const mapValues = map.values();
      for (const value of mapValues) {
        console.log(`VALUES: ${value}`);
      }
    ```
    ```text
      [Result]
        VALUES: value1,value2
        VALUES: value1,value2,value3
        VALUES: value1,value2,valu3,value4
    ```


### 반복문(Loop)

  - Example Data

    ```typescript
      const map = new Map<string, string[]>();
      map.set('keyOne', ['value1', 'value2']);
      map.set('keyTwo', ['value1', 'value2', 'value3']);
      map.set('keyThree', ['value1', 'value2', 'valu3', 'value4']);
    ```

  #### for ... of

    - map 

      ```typescript
        for (const [key, values] of map) {
          console.log(`KEY: ${key}, VALUE: ${values}`);
        }
      ```
    
    - map 의 entries()

      ```typescript
        const mapEntries = map.entries()
        for (const item of mapEntries) {
          console.log(`KEY: ${item[0]}, VALUE: ${item[1]}`);
        }

        for (const [key, values] of mapEntries) {
          console.log(`KEY: ${key}, VALUE: ${values}`);
        }
      ```

    - Array 로 변환 후 

      ```typescript
        const mapArrays = Array.from(map);

        for (const item of mapArrays) {
          console.log(`KEY: ${item[0]}, VALUE: ${item[1]}`);
        }

        for (const [key, values] of mapArrays) {
          console.log(`KEY: ${key}, VALUE: ${values}`);
        }
      ```

    - 결과

      ```text
        [Result]
          KEY: keyOne,   VALUE: value1,value2
          KEY: keyTwo,   VALUE: value1,value2,value3
          KEY: keyThree, VALUE: value1,value2,valu3,value4
      ```

  #### forEach

    - 매개변수: `value, key , Object(원본 Map 데이터)`
      + key와 value의 위치에 주의한다.

    ```typescript
      map.forEach((values, key, obj) => {
        console.log(`KEY: ${key}, VALUE: ${values}`);
      });
    ```
    ```text
      [Result]
        KEY: keyOne,   VALUE: value1,value2
        KEY: keyTwo,   VALUE: value1,value2,value3
        KEY: keyThree, VALUE: value1,value2,valu3,value4
    ```





<br /><br /><br /><br /><br />

--- 
- Refs


