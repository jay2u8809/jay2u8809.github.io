---
slug: /tools/wsl/how-to-use-wsl2-on-windows11
# id: how-to-use-wsl2-on-windows11
title: WSL2 설치 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  wsl,
  windows11,
]
keywords: [
  devian-lab,
  Jobː談,
  wsl,
  windows11,
]
description: Windows 11 에서 WSL2 설치하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Windows 11 에서 WSL2 설치하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-09-08",
  "updatedAt": "2024-09-08"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-09-08
  updatedAt: 2024-09-08
```


---


## 1. 준비 작업

  ### 1-1) Windows Store 에서 Windows Terminal 설치

    - 윈도우즈 OS 의 기본 터미널인 Power Shell 로 진행해도 무방하지만 **"Windows Terminal"** 을 설치하여 사용하는 것이 좋다
      + [Microsoft Store - Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?SilentAuth=1&wa=wsignin1.0&hl=ko-kr&gl=KR)

  ### 1-2) 제어판 설정

    - 제어판 -> 프로그램 -> 프로그램 및 기능 -> Windows 기능 켜기/끄기 -> _Linux 용 Windows 하위 시스템 체크_

## 2. WSL 설치

  - Windows Terminal 이나 PowerShell을 **관리자 권한으로 실행**
    + "Windows + s 키"로 Windows Terminal이나 PowerShell을 검색 후 마우스 오른쪽 버튼을 눌러 _"관리자 권한으로 실행"_ 을 선택

  ### 2-1) install

    ```shell
      $ wsl --install
    ```

  ### 2-2) set wsl default version: WSL의 버전을 2 로 설정
  
    ```shell
      $ wsl --set-default-version 2
    ```

  ### 2-3) update kernel

    ```shell
      $ wsl --update
    ```

## 3. 리눅스(우분투) 설치

  ### 3-1) install Ubuntu

    - [Microsoft Store - Ubuntu](https://apps.microsoft.com/detail/9pdxgncfsczv?hl=ko-kr&gl=KR) 에서 설치
    - "Windows + s 키"로 Ubuntu 실행 후, 루트 사용자의 아이디와 패스워드 설정
      + "Installing. this may take few minutes…" 가 나오면 잠시 대기
  
  ### 3-2) WSL 의 기본 리눅스를 우분투로 설정

    - Windows Terminal 실행 후, 현재 WSL에 설치된 리눅스들을 확인 
      + `*` 는 디폴트 리눅스 버전을 의미
      + `VERSION`: WSL 의 버전. (설치된 리눅스의 버전이 아니다)

      ```shell
        $ wsl -l -v

          NAME      STATE           VERSION
          * Ubuntu    Running         2
      ```

    - VERSION 이 _1_ 이라면 아래의 명령어를 실행

      ```shell
        $ $ wsl --set-version Ubuntu 2
      ```



<br /><br /><br /><br /><br />

---
- Refs
  + [[Windows] WSL2로 리눅스 설치 및 기본 사용법](https://www.lainyzine.com/ko/article/how-to-install-wsl2-and-use-linux-on-windows-10/#wsl2%EB%A1%9C-ubuntu-%EB%A6%AC%EB%88%85%EC%8A%A4-%EB%A7%9B%EB%B3%B4%EA%B8%B0)
  + [Windows에서 WSL(Linux 개발 환경) 구축하기](https://tech.cloud.nongshim.co.kr/2023/11/14/windows%EC%97%90%EC%84%9C-wsllinux-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0/)