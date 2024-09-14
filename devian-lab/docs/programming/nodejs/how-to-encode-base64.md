---
slug: /programming/nodejs/how-to-encode-base64
# id: how-to-encode-base64
title: Base64 인코딩하는 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nodejs,
  base64,
  encoding,
  decoding,
  buffer,
]
keywords: [
  devian-lab,
  Jobː談,
  nodejs,
  base64,
  encoding,
  decoding,
  buffer,
]
description: Node.js 에서 Base64 인코딩하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Node.js 에서 Base64 인코딩하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2023-01-12",
  "updatedAt": "2023-01-14"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2023-01-12
  updatedAt: 2023-01-14
```


---

## Base64 인코딩?

  > Binary Data (이진데이터) 를 64(2^6)개의 ASCII 문자로 변환하여 Text 로 변환시키는 인코딩 방식

  - 이미지나 오디오 파일과 같은 이진데이터를 전송하기 위해 문자열로 변환시킬 때 주로 사용
    + 이진데이터를 
  - **암호화 과정이 없기 때문에 디코딩을 하면 원래의 데이터를 금방 알 수 있다**
    + 따라서 비밀번호와 같은 **민감한 데이터에는 사용해선 안 된다.**


## Node.js 에서 Base64 인코딩하기

  - Buffer 모듈을 사용해 Encode/Decode 한다.
    + js 에서 제공하는 `btoa(’${변환데이터}’)` 함수(Encoding)와 `atob(’${변환데이터}’)` 함수(Decoding)를 이용하여 Base64 인코딩을 할 수 있으나 웹브라우저에서만 사용가능하다. 

  ### Base64 Encoding
    - _Buffer.from('`${Encoding 할 문자열}`', 'utf8').toString('base64')_

      ```typescript
        const encoded = Buffer.from('username:password', 'utf8').toString('base64');
      ```

 
  ### Base64 Decoding
    - _Buffer.from('`${Decoding 할 문자열}`', 'base64').toString('utf8')_

      ```typescript
        const plain = Buffer.from('dXNlcm5hbWU6cGFzc3dvcmQ=', 'base64').toString('utf8') 
      ```





<br /><br /><br /><br /><br />

---
- Refs
  + [Base64 인코딩이란? 정확하게 이해하기](https://codingpractices.tistory.com/entry/Base64-%EC%9D%B8%EC%BD%94%EB%94%A9%EC%9D%B4%EB%9E%80-%EC%A0%95%ED%99%95%ED%95%98%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
  + [온라인 Base64 인코더](https://www.convertstring.com/ko/EncodeDecode/Base64Encode)