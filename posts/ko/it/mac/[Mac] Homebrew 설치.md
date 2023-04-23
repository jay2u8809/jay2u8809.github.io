![homebrew](https://upload.wikimedia.org/wikipedia/commons/3/34/Homebrew_logo.png 'homebrew')

<br />

# [Mac] Homebrew 설치

- Created: 2022-Sep-04
- Owners: Ian Jung

<br />

# Homebrew?
> Homebrew는 Mac OS용 패키지 관리 프로그램이다. (여기서 패키지란 맥에 설치하여 사용하는 프로그램들을 말한다. 주로 개발 환경을 구성할 때 사용하는 프로그램들이지만 크롬같은 일반적인 프로그램들도 설치할 수 있다.)

- 터미널을 이용해 Mac OS용 패키지들을 검색하고 설치하고 업데이트나 삭제까지 할 수 있는 프로그램을 말한다.
- 앱스토어나 구글플레이와 같은 역할을 하는 프로그램이다.
- 앱스토어나 공식 홈페이지에서 다운로드 받아 설치하는 경우에는 삭제했을 때도 일부 파일들이 남아 계속 디스크 공간을 차지할 수 있지만, Homebrew를 사용할 경우에는 말끔히 삭제가된다. 이 외에 업데이트와 같은 유지 관리 기능도 강력하기에 Homebrew 사용한다.


# 설치
## 1. 아래의 Homebrew 공식사이트에서 설치 명령어를 복사한다.
- [Homebrew 공식 사이트](https://brew.sh/)  
    ```shell
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```


## 2. 터미널(Terminal)을 열어 복사한 명령어를 실행한다.
### 2-1.  Root 유저의 권한이 필요하므로 맥의 비밀번호를 입력한다.
```shell
    % /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
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
        
### 2-2. `Xcode Command Line Tools` 가 없을 경우 아래와 같이 함께 설치된다는 메시지가 뜬다.
```shell
    ==> The Xcode Command Line Tools will be installed.Press RETURN/ENTER to continue or any other key to abort:
```
        
- Reture/Enter 키를 누르면 `Xcode Command Line Tools`가 다운로드, 설치된다.
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
        
### 2-3. 이어서 Hombrew가 설치된다.
```shell
    ==>  Downloading and installing Homebrew...
    
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
        
### 2-4. 정상적으로 설치가 되었다. Homebrew 가 제대로 설치되었는지 버전을 확인해본다.  
```shell
    % brew -v
    Homebrew 3.5.10
    Homebrew/homebrew-core (git revision 312343323; last commit 2022-08-11)
```
        
## 3. 이제 Homebrew 를 통해 편리하게 패키지들을 관리할 수 있다.

## 4. (추가) Homebrew는 주로 터미널을 이용하는 패키지 즉, CLI 기반의 패키지들을 설치하여 사용하는 편이나 만약 크롬브라우저처럼 GUI 기반의 패키지들을 Homebrew를 통해 설치하고 싶을 때는 `cask`라는 패키지를 먼저 설치해야 한다.

### 4-1. cask 패키지 설치
```shell
    % brew install cask
    
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
        
### 4-2. cask 패키지가 제대로 설치되었는지 확인한다.(cask가 있는 것을 확인할 수 있다.) 
```shell
    % brew list
    ==> Formulae
    bdw-gc		emacs		guile		libnghttp2	m4		pkg-config
    ca-certificates	gettext		jansson		libtasn1	nettle		readline
    cask		gmp		libevent	libtool		openssl@1.1	unbound
    coreutils	gnutls		libidn2		libunistring	p11-kit
```

<br /><br /><br />      

---

- Ref
    - [https://whitepaek.tistory.com/3](https://whitepaek.tistory.com/3)