---
slug: /programming/shell-script/how-to-check-shell
# id: how-to-check-shell
title: Shell 종류 확인 및 기본 Shell 변경 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  shell,
]
keywords: [
  devian-lab,
  Jobː談,
  shell,
]
description: Shell 의 종류를 확인하고 기본 쉘을 변경하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Shell] 현재 사용 중인 쉘(Shell)을 확인해 보자
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

## Shell?

  - 유닉스Unix 기반 운영체제의 명령어 해석 프로그램
  - User가 컴퓨터에 원하는 내용을 명령어로 전달했을 때 명령어를 해석하여 컴퓨터에 전달하고 컴퓨터의 처리 결과를 해석하여 사용자에게 출력하는 역할을 한다.
    + _User -> Shell -> 컴퓨터 -> Shell -> User_
  - 웹브라우저가 HTML, CSS, JS 를 해석해 사용자가 볼 수 있도록 하는 것과 비슷하다.
    + | Shell | Web Browser |
      | --- | --- |
      | `mkdir sample`|`www.google.com`|
      | sample 디렉토리를 생성하도록 컴퓨터에 요청 | 구글 홈페이지를 요청 |


## 현재 사용중인 Shell 확인하기

  ### 1) 운영체제의 환경변수를 이용한 방법들

    - **echo $SHELL**
        
      ```shell
        $ echo $SHELL

        SHELL=/bin/zsh
      ```
        
    - **echo $0**
        
      ```shell
        $ echo $0
      
        -zsh
      ```
        
    - **env | grep SHELL**
        
      ```shell
        $ env | grep SHELL
        
        /bin/zsh
      ```

  ### 2) PID(Process ID)를 이용한 방법들
    - **ps -p $$**
        
      ```shell
        $ ps -p $$
        
        PID TTY           TIME CMD
        11085 ttys000    0:00.05 -zsh
      ```
        
    - **ps -cp $$**
        
      ```shell
        $ ps -cp $$

        PID TTY           TIME CMD
        11085 ttys000    0:00.05 -zsh
      ```

## 사용할 수 있는 Shell 확인 방법

  > 현재 사용 중인 Shell 이외에 다른 Shell 을 사용할 수 있는지 확인하는 방법

  - **cat /etc/shells**
    + etc 디레토리의 shells 라는 파일에는 해당 운영체제에서 사용할 수 있는 Shell 들의 설치 경로가 저장되어 있다.
    + bash, csh 등등 사용할 수 있는 다양한 쉘들의 설치 경로가 출력된다.
    
    ```shell
      $ cat /etc/shells
      
      # List of acceptable shells for chpass(1).
      # Ftpd will not allow users to connect who are not using
      # one of these shells.
      
      /bin/bash
      /bin/csh
      /bin/dash
      /bin/ksh
      /bin/sh
      /bin/tcsh
      /bin/zsh
    ```

  ### Shell 의 종류

    #### 1) sh (Bourne Shell)
      - 최초의 쉘. 대부분의 리눅에서 기본적으로 설치되어 있어 사용할 수 있다.
        + 설치 경로: `[/bin/sh]`

    #### 2) bash (Bourne-Again Shell)
      - 가장 일반적으로 사용되는 쉘. 리눅스의 기본 쉘이며 ShellScript의 대부분은 Bash를 기반으로 되어있다고 해도 무방하다.
        + 설치 경로 : `[/bin/bash]`

    #### 3) zsh (Z Shell)
      - 수 많은 쉘들의 기능을 가지고 있는 확장현 Bourne Shell 이다.
        + 설치 경로 : `[/bin/zsh]`

    #### 4) csh (C Shell)
      - 유닉스의 기본 쉘. 이름처럼 C 언어를 기반으로 만든 쉘이기에 C 언어의 문법과 유사하다. 강력한 프로그래밍 기능을 가지고 있다.
        + 설치 경로 : `[/bin/csh]`

    #### 5) ksh (Korn Shell) 
      + 설치 경로 : `[/bin/ksh]`

    #### 6) tcsh (Tee See Shell) 
      + 설치 경로 : `[/bin/tcsh]`

## Default Shell 변경 방법

  - **`chsh -s ${SHELL_PATH}`**
    + 위에서 확인했던 쉘 설치 경로를 `${SHELL_PATH}` 위치에 넣어 실행한다.
    + Bash Shell 로 변경
    
      ```shell
        $ chsh -s /bin/bash
        Password: 비밀번호 입력
      ```

  - 기본 쉘이 변경되었는지 확인하기
    + 터미널을 새롭게 시작하여 확인한다.

    ```shell
      $ echo $SHELL
      
      /bin/bash
    ```

  ### 특정 유저의 Default Shell 만 변경하고 싶다면?

    - `chsh -s ${SHELL_PATH} ${USER_NAME}`
      + onigiri 유저의 zsh 로 바꾸기

      ```shell
        $ chsh -s /bin/zsh onigiri
      ```






<br /><br /><br /><br /><br />

--- 
- Refs
  + [Unix / Linux 운영체제의 Shell, POSIX](https://www.leafcats.com/185)
  + [현재 실행중인 쉘(Shell) 정보를 알 수 있는 방법](https://soft.plusblog.co.kr/27)
  + [4.1: 기본 쉘 변경하기](https://nochoco-lee.tistory.com/350)