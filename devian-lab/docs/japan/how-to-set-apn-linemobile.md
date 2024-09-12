---
slug: /japan/how-to-set-apn-linemobile
# id: how-to-set-apn-linemobile
title: 라인 모바일 APN 설정 방법
authors: [jian]
tags: [
  wiki, 
  japan, 
  Japː談,
  apn, 
  line mobile, 
  라인모바일,
  일본 통신사,
  일본 휴대폰,
]
keywords: [
  devian-lab,
  japan, 
  Japː談,
  apn, 
  line mobile, 
  라인모바일,
  일본 통신사,
  일본 휴대폰,
]
description: 일본 라인 모바일의 APN 을 설정하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# 일본 라인 모바일 APN 설정 방법: 아이폰, 아이패드
<!--//title -->

<!-- 
```json
{
  "author": "Onigiri.J",
  "createdAt": "2022-08-14",
  "updatedAt": "2022-08-14"
}
``` 
-->

```yaml
  author: Onigiri.J
  createdAt: 2022-08-14
  updatedAt: 2022-08-14
```

---

## APN 설정 방법

  ### 1. APN 파일 다운로드
    - 아래의 링크를 클릭하면 자동으로 다운로드 된다.
      + https://mobile.line.me/apn/line.mobileconfig
      + 미리 다운로드 받아두는 것은 안되는 듯하다.
    
  ### 2. APN 파일 설치
    - 설정 앱의 `[일반] -> [VPN 및 기기 관리]` 메뉴 선택
    - 구성 프로파일 리스트에 **라인 모바일** 을 선택하여 설치
      + 비밀번호를 묻는다면 스마트폰 기기의 비밀번호를 입력

  ### 3. 인터넷 확인
    - 와이파이를 끄고 모바일 인터넷(3G or LTE)으로 인터넷이 되는지 확인



## 주의

  ### 한국 통신사의 유심을 이용했을 때
    - ❗한국 통신사의 유심을 사용해야 할 때는 반드시 설치한 **라인 모바일 APN 프로파일을 삭제** 해야만 한다.
    - 삭제 방법
      + 1) 유심 교체 전, 설정 앱의 `[일반] → [VPN 및 기기 관리]` 메뉴 선택
      + 2) “라인 모바일” 프로파일을 선택하여 삭제
      + 3)유심 교체 
        - 유심을 먼저 교체하였다면 프로파일 삭제 후 스마트폰을 재부팅한다.




<br /><br /><br /><br /><br />

---
- Refs
  + [[라인모바일 아이폰/아이패드] APN 설정방법 + [초대코드]](https://m.blog.naver.com/skybluetokyo/221794787840)