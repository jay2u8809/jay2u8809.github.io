---
slug: 2026-01-12-how-to-install-font
title: ZorinOS - 리눅스에서 새로운 폰트를 추가하려면?
authors: [onejay]
tags: [
  dev-posts,
  linux,
  ubuntu,
  debian,
  zorinos,
  font,
]
keywords: [
  linux,
  zorinos,
  font,
  d2coding,
  글꼴,
]
description: 리눅스(ZorinOS) 에서 D2Coding font 를 설치하는 방법을 설명한다.
---

<!--title -->
# [ZorinOS] 리눅스에서 폰트를 추가하려면?
<!--//title -->

<!-- 
```json
{
  "author": "Dev.OneJay",
  "createdAt": "2026-01-12",
  "updatedAt": "2026-01-12"
}
``` 
-->

```yaml
  author: Dev.OneJay
  createdAt: 2026-01-12
  updatedAt: 2026-01-12
```

---

> 리눅스(ZorinOS) 에서 D2Coding font 를 설치한다.

<!-- truncate -->

---

```json
{
  "sys-info": {
    "os": "zorinos-18-core",
    "based-on":  "ubuntu-24.04-lts"
  }
}
```

## Summary

1) [D2Coding 폰트 파일 다운로드](https://github.com/naver/d2codingfont)

3) 폰트 설치
  - ```shell
    sudo cp -r  ~/Downloads/D2Coding-Ver1.3.2-20180524 /usr/share/fonts
    ```

4) 폰트 캐시 업데이트
  - ```shell
    sudo fc-cache -fv
    ```

5) VsCode 의 Editor: Font Famliy 의 가장 앞에 폰트 추가
  - ```text
    'D2Coding-Ver1.3.2-20180524', 'Droid Sans Mono', monospace
    ```

---

## Contents

### 1) D2Coding 글꼴 다운
- [D2Coding 폰트 파일 다운로드](https://github.com/naver/d2codingfont)

- 글꼴 파일을 다운로드해 압축을 푼다.
  - `*.ttf`, `*.ttc`, `*.otf` 등의 파일들이 있는 것을 확인

### 2) 글꼴 관리 디렉토리
- 리눅스는 글꼴을 크게 2 곳에서 관리할 수 있는데 특수한 글꼴이 아니고서야 특정 유저가 아닌 시스템 전체에 적용하여 사용할 수 있도록 한다.

- **시스템 전체 적용하는 글꼴**: `/usr/share/fonts`

- **특정 유저에게만 적용하는 글꼴**: `/home/${USER_NAME}/.local/share/fonts`
  - 디렉토리가 없다면 직접 생성해야한다. _sudo mkdir -p ~/.local/share/fonts_
  - `/home/${USER_NAME}/.fonts` 에 글꼴을 파일을 복사하여 사용하는 방법은 레거시로서 사용가능하나 추천하지 않는다.

### 3) 글꼴 설치
- 글꼴 설치는 간단하다. 다운받은 글꼴 파일(_*.ttf, *.ttc_)들을 **"글꼴 관리 디렉토리"** 로 이동(복사)해주면 된다.

- 만약 _Downloads_ 디렉토리에 글꼴 파일을 받아 압축을 풀었다면 아래와 같이 명령어를 실행한다.

  - ```shell
    sudo cp -r  ~/Downloads/D2Coding-Ver1.3.2-20180524 /usr/share/fonts
    ```

- _/usr/share/fonts_ 디렉토리 내에 _D2Coding-Ver1.3.2-20180524_ 디렉토리가 통째로 복사된 것을 확인할 수 있다.

  - ```shell
    ls -laF /usr/share/fonts/D2Coding-Ver1.3.2-20180524
    ```

### 4) 글꼴 캐시 업데이트
- 글꼴을 설치(추가) 했다면 **시스템의 글꼴 캐시를 업데이트** 해야한다. 아래의 명령어를 실행하여 캐시를 업데이트 한다.
  - ```shell
    sudo fc-cache -fv
    ```
- 컴퓨터에는 수많은 글꼴 파일이 있는데, 프로그램(VS Code, 리브레오피스 등)을 켤 때마다 수천 개의 파일을 일일이 뒤져서 이름을 확인하면 속도가 매우 느려진다. 
- 그래서 리눅스는 글꼴들의 이름, 스타일(굵기), 저장 위치를 미리 정리해둔 _캐시(Cache) 데이터베이스_ 를 가지고 있다. 
- _/usr/share/fonts_ 디렉토리에 _글꼴 파일들을 복사만 하는 것으로는 리눅스 시스템이 실시간으로 새로운 글꼴을 감지하지 못하기 때문에_ 아래의 명령어를 이용해 새롭게 캐시 데이터베이스를 최신화하는 과정이 필요하다.


### 5) VsCode 에 적용
- D2Coding 글꼴을 추가하였다. 이제 vscode 에서 사용해보자
  - A. `Ctrl(cmd) + ,` 로 설정 파일 열기
  - B. font 검색(Editor: Font Family)
  - C. 기존 글꼴의 가장 앞에 D2Coding 글꼴 추가하기
    - ex) `'D2Coding-Ver1.3.2-20180524', 'Droid Sans Mono', monospace` 
    - 만약 설치된 글꼴 이름에 공백이 있다면 반드시 작은따옴표(')로 감싸야 한다.

---
- Refs
  + [Linux에서 폰트를 설치하는 방법](https://linuxpia.tistory.com/378)
