---
slug: /tools/mac/how-to-install-homebrew
# id: how-to-install-homebrew
title: Homebrew 설치 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  mac,
  homebrew,
  install homebrew,
  cask,
]
keywords: [
  devian-lab,
  Jobː談,
  mac,
  homebrew,
  install homebrew,
  cask,
]
description: 맥에서 Homebrew 를 설치하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Mac] Homebrew 설치 방법
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

## Homebrew?

  - Mac OS용 패키지 관리 프로그램
    + 패키지: 맥에 설치하여 사용하는 프로그램들을 의미. 주로 개발 환경을 구성할 때 사용하는 프로그램들이지만 크롬 브라우저 같은 일반적인 프로그램들도 설치할 수 있다.
    + 앱스토어나 구글플레이, npm 등과 같은 역할을 하는 프로그램이다.
  - Termianl 을 이용해 패키지들을 검색, 설치, 업데이트, 삭제 할 수 있는 프로그램
  - 앱스토어나 공식 홈페이지에서 다운로드 받아 설치하는 경우에는 삭제했을 때도 일부 파일들이 남아 계속 디스크 공간을 차지할 수 있다. 하지만 Homebrew를 사용할 경우에는 말끔히 삭제가된다. 이 외에 업데이트와 같은 유지 관리 기능도 강력하기에 Homebrew 를 사용한다.


## Install

  ### 1. Homebrew 공식사이트의 Install Command 복사
    
    - [Homebrew 공식 사이트](https://brew.sh/)
    
      ```shell
        $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      ```
    
  ### 2. Terminal 로 복사한 Install Command 를 실행
    
    #### 2-1) Root 유저의 권한이 필요, 맥의 비밀번호를 입력
        
      ```shell
        $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
          
          ==> Checking for `sudo` access (which may request your password)...
          Password:
          ==> This script will install:
          /usr/local/bin/brew
          /usr/local/share/doc/homebrew
          /usr/local/share/man/man1/brew.1
          /usr/local/share/zsh/site-functions/_brew
          /usr/local/etc/bash_completion.d/brew
          /usr/local/Homebrew
          ==> The following new directories will be created:
          /usr/local/bin
          /usr/local/etc
          /usr/local/include
          /usr/local/lib
          /usr/local/sbin
          /usr/local/share
          /usr/local/var
        
          ...
      
      ```
        
    #### 2-2) `Xcode Command Line Tools` 가 없을 경우
      
      - 아래의 메시지가 나오면 Reture/Enter 키를 눌러 `Xcode Command Line Tools`를 다운로드, 설치한다.

      ```shell
        ==> The Xcode Command Line Tools will be installed.Press RETURN/ENTER to continue or any other key to abort:
      ```
      
      ```shell
        ...
        
        ==> Searching online for the Command Line Tools
        ==> /usr/bin/sudo /usr/bin/touch /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
        ==> Installing Command Line Tools for Xcode-13.4
        ==> /usr/bin/sudo /usr/sbin/softwareupdate -i Command\ Line\ Tools\ for\ Xcode-13.4
        Software Update Tool
        
        Finding available software
        
        Downloading Command Line Tools for Xcode
        Installing Command Line Tools for Xcode
        Done with Command Line Tools for Xcode
        Done.
        ==> /usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools
        Password:
        ==> /usr/bin/sudo /bin/rm -f /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
      ```
        
    #### 2-3) Hombrew 설치

      - 이어서 Hombrew가 설치된다.
        
      ```shell
        ==> Downloading and installing Homebrew...
        
        ...
        
        ==> Installation successful!
        
        ==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
        Read the analytics documentation (and how to opt-out) here:
          https://docs.brew.sh/Analytics
        No analytics data has been sent yet (nor will any be during this install run).
        
        ==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
          https://github.com/Homebrew/brew#donations
        
        ==> Next steps:
        - Run brew help to get started
        - Further documentation:
            https://docs.brew.sh
      ```
        
    #### 2-4) 설치 완료, Homebrew 의 버전을 확인
        
      ```shell
        $ brew -v

          Homebrew 3.5.10
          Homebrew/homebrew-core (git revision 312343323; last commit 2022-08-11)
      ```


  ### 3. (Optional) Install Homebrew Cask
  
    - Cask: Homebrew 를 이용해 크롬브라우저와 같은 GUI 기반의 패키지들을 설치, 관리할 수 있도록 하는 툴
    
    #### 3-1) cask 패키지 설치
        
      ```shell
        $ brew install cask

        ...
        
        ==> Installing cask
        ==> Pouring cask--0.8.8.all.bottle.tar.gz
        ==> Caveats
        Emacs Lisp files have been installed to:
          /usr/local/share/emacs/site-lisp/cask
        ==> Summary
        🍺  /usr/local/Cellar/cask/0.8.8: 13 files, 152.0KB
        ==> Running `brew cleanup cask`...
        Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
        Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
        ==> Caveats
        ==> cask
        Emacs Lisp files have been installed to:
          /usr/local/share/emacs/site-lisp/cask
      ```
        
    #### 3-2) 설치 확인
        
      ```shell
        $ brew list 

        ==> Formulae
        bdw-gc		emacs		guile		libnghttp2	m4		pkg-config
        ca-certificates	gettext		jansson		libtasn1	nettle		readline
        cask		gmp		libevent	libtool		openssl@1.1	unbound
        coreutils	gnutls		libidn2		libunistring	p11-kit
      ```





<br /><br /><br /><br /><br />

---
- Refs
    + [Homebrew(홈브류) 설치 및 사용법, MacOS에서 프로그램을 쉽게 다운로드 및 삭제할 수 있는 패키지 관리자](https://whitepaek.tistory.com/3)
