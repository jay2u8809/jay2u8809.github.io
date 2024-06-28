---
# slug: /nodejs/how-to-convert-map-to-array
id: how-to-convert-map-to-array
title: Map -> Array 변환하기
tags: [devian-lab, wiki, nodejs, js, javascript, ts, typescript, map, array, convert]
# sidebar_position: 1
---

<!--title -->
# [JS] Map -> Array 변환하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-28",
  "updatedAt": "2024-05-28"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-28
  updatedAt: 2024-05-28
```

---

## Intro
 Map 과 Array 는 코딩하는데 있어서 가장 많이 사용되는 데이터 타입(자료구조)들이다. Map 을 Array 로 변경하거나 반대로 Array 를 Map 으로 변경해야하는 경우 꽤 있는데, Javascript 는 데이터 타입을 변환할 수 있는 방법들이 많아 할 때마다 방법들이 헷갈리곤 했다. 이번 기회에 잘 정리해 두고 활용하려고 한다.  


## Contents

### - Array.from()
```typescript
  let map: Map<string, string> = new Map<string, string>()
    .set('apple', 'ios')
    .set('google', 'android')
    .set('ms', 'windows');

  const arr = Array.from(map, ([name, os]) => ({name, os}));
  
  console.log(arr);
```

```typescript
  let map: Map<string, string> = new Map<string, string>()
    .set('apple', 'ios')
    .set('google', 'android')
    .set('ms', 'windows');

  const arr = Array.from(map, ([key, value]) => ({name: key, os: value}));
  
  console.log(arr);
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


```typescript
  let map: Map<string, string> = new Map<string, string>()
    .set('apple', 'ios')
    .set('google', 'android')
    .set('ms', 'windows');

  const arr = Array.from(map, ([key, value]) => ({[key]: value}));
  
  console.log(arr);
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


### - [...]
```typescript
  let map: Map<string, string> = new Map<string, string>()
    .set('apple', 'ios')
    .set('google', 'android')
    .set('ms', 'windows');

  const arr = [...map].map(([name, os]) => ({name, os}));
  
  console.log(arr);
```

```typescript
  let map: Map<string, string> = new Map<string, string>()
    .set('apple', 'ios')
    .set('google', 'android')
    .set('ms', 'windows');

  const arr = [...map].map(([key, value]) => ({name: key, os: value}));
  
  console.log(arr);
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

```typescript
  let map: Map<string, string> = new Map<string, string>()
    .set('apple', 'ios')
    .set('google', 'android')
    .set('ms', 'windows');

  const arr = [...map].map(([key, value]) => ({[key]: value}));
  
  console.log(arr);
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


<br /><br /><br /><br /><br />

--- 
- Refs:
  + [StackOverflow-How to convert Map to array of object?](https://stackoverflow.com/questions/56795743/how-to-convert-map-to-array-of-object)


