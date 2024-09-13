---
slug: /tools/mac/how-to-initialize-intel-silicon-mac
# id: how-to-initialize-intel-silicon-mac
title: 맥북 프로(Intel) 포맷 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  mac,
  macbook pro,
  disk initialize,
  disk format,
  맥 포맷,
  맥 초기화,
]
keywords: [
  devian-lab,
  Jobː談,
  mac,
  macbook pro,
  disk initialize,
  disk format,
  맥 포맷,
  맥 초기화,
]
description:  Mac(Intel) 을 초기화하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Mac] 맥 포맷(초기화)하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-09-04",
  "updatedAt": "2022-09-04"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-09-04
  updatedAt: 2022-09-04
```

---

> 모든 데이터를 지우고 현재 최신의 Mac OS 를 설치하는 방법

> 💡 맥북 프로(2017, Intel) 으로 진행

## 1. 복구 모드로 부팅하기

  - 맥을 초기화하기 위해서는 **복구 모드**로 부팅해야 한다.
  - 재부팅하고 애플 로고가 나올 때, `Cmd + R` 을 계속하여 눌러주어 복구 모드로 부팅한다.


## 2. 데이터 초기화하기

  ### 2-1) 아래의 4개의 메뉴를 선택할 수 있다.
    - _Time Machine 백업으로부터 복원_
    - _macOS 다시 설치_
    - _온라인 도움말 얻기_
    - _디스크 유틸리티_

  ### 2-2) 복구 모드의 4개의 메뉴 중 “디스크 유틸리티” 를 선택

  ### 2-3) 왼쪽 사이드 바의 “내장” 에 있는 “Macintosh HD” 와 “Macintosh HD - 데이터” 를 초기화
    - 왼쪽 사이드바의 아래쪽 **“디스크 이미지”는 절대 지우거나 수정하지 않는다.**
    - 경우에 따라서 **“Macintosh HD - 데이터”** 가 존재하지 않는 경우도 있다.

  ### 2-4) “Macintosh HD” 와 “Macintosh HD - 데이터” 를 각각 선택하여 위쪽의 메뉴 중 “지우기” 를 실행
    - 팝업이 뜨면 아무것도 수정하지 않고(이름: Macintosh HD, 포맷: APFS) 지우기 버튼을 누른다.
    - 2개 모두를 지운다.
    - 왼쪽 위의 닫기 버튼을 눌러 다시 복구 모드로 돌아간다.

## 3. 맥 OS 재설치하기

  - [복구 모드의 4개 메뉴](#2-1-아래의-4개의-메뉴를-선택할-수-있다) 중, “**macOS 다시 설치**”를 선택
  - 설치 마법사에 따라 설치하면 되는데 설치 디스크를 선택하라는 화면이 나올 경우가 있다.
    + “Macintosh HD” 와 “Macintosh HD - 데이터” 중 Macintosh HD를 선택하여 진행




<br /><br /><br /><br /><br />

---
- Refs
    + [Youtube - 맥북 "포맷" & "OS재설치" 하는 방법](https://www.youtube.com/watch?v=CwNmo3EsTZc)
    + [Youtube - MacOS 강좌 11강 맥알못탈출 맥os 재설치 macOS 설치 맥os 다운그레이드](https://www.youtube.com/watch?v=k9AdTuUC3mE)