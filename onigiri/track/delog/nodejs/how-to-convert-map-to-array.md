---
# slug: /wiki/nodejs/javascript/how-to-convert-map-to-array
id: how-to-convert-map-to-array
title: Map -> Array 변환하기
tags: [de.log, wiki, nodejs, js, javascript, ts, typescript, map, array, convert]
# sidebar_position: 1
---

<!--title -->
# [JS] Map -> Array 변환하기
<!--//title -->

## Array.from()
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


## [...]
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


