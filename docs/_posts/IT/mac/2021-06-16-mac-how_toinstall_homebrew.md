---
layout: post
title: "[Mac] M1 맥북에서 Homebrew 설치하기"
categories: [Mac]
tags:
  - mac
  - homebrew
  - m1
  - applesilicon
author: J.ian
last_modified_at: 2021-06-22
---

> `M1(Apple Silicon)` 맥북에서 Homebrew를 설치하고 설정하는 법

## Homebrew 인스톨
- [Homebrew Official](https://brew.sh/)
- 터미널을 열어 아래의 명령어를 입력합니다
- xcode 등 관련 어플리케이션들이 함께 설치됩니다.
```shell
    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## [M1(Apple Silicon)] 맥북의 경우
- M1 맥북의 경우 `Brew 설치 경로` 가 Intel 맥북과 다릅니다.
- Intel 맥북의 경우 `/user/local` 아래에 설치되지만 M1 맥북의 경우 `/opt/homebrew/` 아래에 설치되기 때문에 경로를 별도로 추가해주는 편이 좋습니다.
```shell
    $ echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/유저명/.zprofile
    $ eval $(/opt/homebrew/bin/brew shellenv)
```

- 설치한 *Homebrew의 버전* 을 확인합니다.
```shell
    $ which brew
    /opt/homebrew/bin/brew

    $ brew --version
    Homebrew 3.1.12-56-g7eb3c08
    Homebrew/homebrew-core (git revision 1c170c8e6c; last commit 2021-06-16)
```

## Homebrew 경로 설정 명령어에 대해서
```shell
    $ echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/유저명/.zprofile
```
 - **eval $(/opt/homebrew/bin/brew shellenv)** 을 **/Users/유저명/.zprofile** 파일로 리다이렉트 시킵니다. `>>` 을 사용하면 해당 파일의 가장 아래에 내용을 추가시키고, 파일이 없을 경우에는 새로 생성하도록 합니다. 
 - `.zprofile` 의 가장 아래에 "eval $(/opt/homebrew/bin/brew shellenv)" 을 추가하고 .zprofile 파일이 없을 경우 생성시켜 내용을 추가합니다. 이 파일을 Z 쉘이 실행될 때 처음 실행되는 스크립트 중 하나로서 Bash 쉘의 경우 `~/.bash_profile`, 그 외 다른 쉘의 경우 `~/.profile` 파일에 넣어줍니다.

```shell
    $ eval $(/opt/homebrew/bin/brew shellenv)
```
- 위의 내용과 같은 명령어입니다만 목적이 `현재 쉘에 적용시키겠다`는 것입니다.
```shell
    $ env | grep HOMEBREW
    HOMEBREW_PREFIX=/opt/homebrew
    HOMEBREW_CELLAR=/opt/homebrew/Cellar
    HOMEBREW_REPOSITORY=/opt/homebrew
```
 - 바로 위의 `eval ~` 명령어를 실행한 뒤, `env` 를 확인해보면 **HOMEBREW**가 `키Key`인 항목들이 추가되어 있는것을 확인할 수 있습니다. 이제부터 `Z쉘`을 실행할 때 자동으로 변수가 쉘에 추가되어 `brew` 명령어를 사용할 수 있습니다.

## ※ brew 버전을 확인할 때 Git 정보가 나오지 않을 경우
```shell
    $ brew --version
    Homebrew 3.1.12-56-g7eb3c08
    Homebrew/homebrew-core (no Git repository)
```
- `no Git repository` 이 표시되는 경우 `brew update` 나 `brew install 패키지명` 명령어가 실행되지 않습니다. 업데이트하고 설치하기 위한 패키지들이 있는 저장소 정보가 없기 때문인데요.
- `homebrew/core` 패키지를 지우고 다시 설치해야만 합니다.
- 참고：https://github.com/Homebrew/brew/issues/10368
```shell
    $ rm -fr $(brew --repo homebrew/core)  # because you can't `brew untap homebrew/core`
    $ brew tap homebrew/core
```
- `brew doctor` 명령어를 이용하면 현재 Brew의 상태를 파악하고 수정할 수 있습니다.