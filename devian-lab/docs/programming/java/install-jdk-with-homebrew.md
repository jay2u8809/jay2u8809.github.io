---
slug: /programming/java/install-jdk-with-homebrew
# id: install-jdk-with-homebrew
title: JDK 설치 방법 - HomeBrew
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  java,
  jdk,
  homebrew,
]
keywords: [
  devian-lab,
  Jobː談,
  java,
  jdk,
  homebrew,
]
description: HoemBrew 를 이용해 Java JDK 를 설치하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Java] HomeBrew 로 JDK 설치하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-09-11",
  "updatedAt": "2023-01-01"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-09-11
  updatedAt: 2023-01-01
```

---

## 1. 설치 가능한 JDK 검색

  - Homebrew 를 통해 설치가 가능한 JDK 를 검색

  ```shell
  $ brew search jdk
  
    ==> Formulae
    openjdk          openjdk@11       openjdk@17       openjdk@8        jd               mdk              cdk
  ```


## 2. JDK 설치

  > 최신 LTS 버전인 17 을 설치

  ### 2-1) JDK 설치
    
    - 버전을 지정하여 설치할 경우
    
      ```shell
        $ brew install openjdk@17
      ```

    - 버전을 지정하지 않고 가장 최신 버전을 설치할 경우

      ```shell
        $ brew install openjdk
      ```

    - Command

      ```shell
        $ brew install openjdk@17

        ==> Downloading https://ghcr.io/v2/homebrew/core/openjdk/17/manifests/17.0.4.1
        ######################################################################## 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/openjdk/17/blobs/sha256:7850d052807931b14395f0ba01938be6718518c76c11fb5
        ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:7850d052807931b14395f0ba01938be6718
        ######################################################################## 100.0%
        ==> Pouring openjdk@17--17.0.4.1.monterey.bottle.tar.gz
        ==> Caveats
        For the system Java wrappers to find this JDK, symlink it with
          sudo ln -sfn /usr/local/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk

        openjdk@17 is keg-only, which means it was not symlinked into /usr/local,
        because this is an alternate version of another formula.

        If you need to have openjdk@17 first in your PATH, run:
          echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc

        For compilers to find openjdk@17 you may need to set:
          export CPPFLAGS="-I/usr/local/opt/openjdk@17/include"

        ==> Summary
        🍺  /usr/local/Cellar/openjdk@17/17.0.4.1: 639 files, 305.5MB
        ==> Running `brew cleanup openjdk@17`...
        Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
        Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).

      ```
    
  ### 2-2) 심볼릭 링크 설정

    - 버전을 지정하여 설치할 경우
    
      ```shell
        $ sudo ln -sfn $(brew --prefix)/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
      ```

    - 버전을 지정하지 않고 가장 최신 버전을 설치할 경우
    
      ```shell
        $ sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
      ```

    - Command

      ```shell
        $ sudo ln -sfn $(brew --prefix)/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
        Password: 비밀번호 입력
      ```
    
  ### 2-3) 자바 버전 확인
    
    ```shell
      $ java --version
    ```

    - Command

      ```shell
        $ java --version

        openjdk 17.0.4.1 2022-08-12
        OpenJDK Runtime Environment Homebrew (build 17.0.4.1+0)
        OpenJDK 64-Bit Server VM Homebrew (build 17.0.4.1+0, mixed mode, sharing)
      ```


## 3. JAVA_HOME 설정

  - `.zshrc` 를 열어 아래의 설정값을 추가한다.
    + 버전을 지정하여 설치할 경우
      - `JAVA_HOME=$(/usr/libexec/java_home -v17)`
    + 버전을 지정하지 않고 가장 최신 버전을 설치할 경우
      - `JAVA_HOME=$(/usr/libexec/java_home)`

  - Commands

    + ① _.zshrc_ 파일 열기

      ```shell
        $ vim ~/.zshrc
      ```

    + ② _.zshrc_ 파일 편집

      ```shell
        === VIM START ===
        ...
        ### JAVA_HOME ###
        JAVA_HOME=$(/usr/libexec/java_home -v17)

        :wq
        === VIM END ===
      ```

    + ③ 변경 내용 적용

      ```shell
        $ source ~/.zshrc
      ```
    + ④ 설정한 환경변수 내용 확인

      ```shell
        $ echo $JAVA_HOME
        
        /usr/local/Cellar/openjdk@17/17.0.4.1/libexec/openjdk.jdk/Contents/Home
      ```





<br /><br /><br /><br /><br />

--- 
- Refs
    - [macOS で Java を使う方法 ver. 2022](https://engineering.mobalab.net/2022/06/06/how-to-install-java-on-macos-in-2022/)

