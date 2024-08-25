---
# slug: /programming/nodejs/how-to-convert-data-type
id: how-to-convert-data-type
title: Data Type 변경 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nodejs,
  data type,
  convert,
]
# sidebar_position: 1
---

<!--title -->
# 데이터 타입 변경하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-28",
  "updatedAt": "2024-08-25"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-28
  updatedAt: 2024-08-25
```


---


## - Map -> Array
  
  - example data

    ```typescript
      // map
      const map: Map<string, string> = new Map<string, string>()
        .set('apple', 'ios')
        .set('google', 'android')
        .set('ms', 'windows');
    ```

### Array.from()

  - example code

    ```typescript
      const arr = Array.from(map, ([name, os]) => ({name, os}));
    ```

  - custom(Key 이름 지정)

    ```typescript
      const arr = Array.from(map, ([key, value]) => ({name: key, os: value}));
    ```

    ```text
      [{
        "name": "apple",
        "os": "ios"
      }, {
        "name": "google",
        "os": "android"
      }, {
        "name": "ms",
        "os": "windows"
      }] 
    ```

  - custom

    ```typescript
      const arr = Array.from(map, ([key, value]) => ({[key]: value}));
    ```

    ```text
      [{
        "apple": "ios"
      }, {
        "google": "android"
      }, {
        "ms": "windows"
      }] 
    ```


### [...]

  - `Array.from()` 과 동일하게 사용 가능

    ```typescript
      const arr = [...map].map(([name, os]) => ({name, os}));
    ```

    ```typescript
      const arr = [...map].map(([key, value]) => ({name: key, os: value}));
    ```

    ```typescript
      const arr = [...map].map(([key, value]) => ({[key]: value}));
    ```

<br /><br />

---

## - Set -> Array

  - example data

    ```typescript
      // set
      const companies: Set<string> = new Set<string>()
        .add('apple')
        .add('google')
        .add('ms');
    ```

### Array.from()

  ```typescript
    const arr = Array.from(companies);
  ```

  ```text
    ["apple", "google", "ms"] 
  ```

### [...]

  ```typescript
    const arr = [...companies];
  ```

  ```text
    ["apple", "google", "ms"] 
  ```


<br /><br />

---

## - Array -> Map

  - example data

    ```typescript
      // array
      const arr = ['apple', 'google', 'ms'];
    ```

  - code
    + `new Map<K,V>([[key1, value1], [key2, value2], ... , [keyN, valueN]])`

    ```typescript
      const map = new Map<string, number>(
        arr.map((item, idx) => [item, idx])
      );
    ```

    ```text
      Map (3) {"apple" => 0, "google" => 1, "ms" => 2} 
    ```

## - Array -> Set

  - example data

    ```typescript
      // array
      const arr = ['apple', 'google', 'ms'];
    ```

  - code
    + `new Set<T>([item1, item2, ... , itemN])`
    ```typescript
      const companies = new Set<string>(arr);
    ```

    ```text
      Set (3) {"apple", "google", "ms"} 
    ```













<br /><br /><br /><br /><br />

--- 
- Refs:
  + [StackOverflow-How to convert Map to array of object?](https://stackoverflow.com/questions/56795743/how-to-convert-map-to-array-of-object)


