---
slug: /programming/nodejs/react/react-native/how-to-setup-react-native
# id: how-to-setup-react-native
title: 개발 환경 설정(Mac)
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  react,
  react native,
  개발환경구축,
]
keywords: [
  devian-lab,
  Jobː談,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  react,
  react native,
  개발환경구축,
]
description: React Native 로 어플리케이션을 개발할 환경을 구축하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# [React Native] 개발 환경 설정(Mac)
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-12-15",
  "updatedAt": "2022-12-15"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-12-15
  updatedAt: 2022-12-15
```


---


> 공식 [React Tutorial](https://reactnative.dev/docs/environment-setup) 을 참고하였습니다.
> 

# 0. 사전 준비

1. Android
    1. Java 설치
    2. Android Studio 설치
    3. Android SDK 시스템 환경 변수 설정 (`.zshrc 파일`)
        1. Android Studio 실행 → Configure → sdk manager
        2. Appearance&Behavior → System Settings → Android SDK
        3. Android SDK Location 의 경로를 확인 하여 설정
        
        ```bash
        # Android
        export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
        ```
        
    4. JAVA_HOME 시스템 환경 변수 설정 (`.zshrc 파일`)
        
        ```bash
        # JAVA
        export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
        ```
        
2. iOS
    1. xCode 설치
3. Etc
    1. homebrew 설치
        
        ```bash
        **$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"**
        ```
        
    2. node 설치
        1. nodenv 설치
            
            ```bash
            **% brew install nodenv**
            ```
            
        2. nodenv 시스템 환경 변수 설정 (`.zshrc 파일`)
            
            ```bash
            # Nodenv
            export PATH="$HOME/.nodenv/bin:$PATH"
            eval "$(nodenv init -)"
            ```
            
        3. 확인
            
            ```bash
            **% curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash**
            Checking for `nodenv' in PATH: /usr/local/bin/nodenv
            Checking for nodenv shims in PATH: OK
            Checking `nodenv install' support: /usr/local/bin/nodenv-install (node-build 4.9.43)
            Counting installed Node versions: 1 versions
            Auditing installed plugins: OK
            ```
            
        4. node 설치
            
            ```bash
            **% nodenv install 16.15.0**
            ```
            
        5. 기본 사용 node 버전 지정 
            
            ```bash
            **% nodenv global 16.15.0**
            ```
            

# 1.   공통 프로그램 설치

1. Watchman
    
    ```bash
    **% brew install watchman
    % watchman -v**
    2022.05.16.00
    ```
    
2. Cocoapods
    
    ```bash
    **% sudo gem install cocoapods
    % pod --version**
    
    # m1 mac
    **% sudo arch -x86_64 gem install ffi
    % arch -x86_64 pod install**
    ```
    

# 2. React Native 프로젝트 생성

- Typescript 를 사용하여 생성하도록 한다.
    - 사용하지 않을 경우: `npx react-native init ${APP_NAME}`

```bash
# Typescript 를 사용하여 생성하는 명령어
**% npx react-native init** ${APP_NAME} **--template react-native-template-typescript**

...

✔ Downloading template
✔ Copying template
✔ Processing template
✖ Installing CocoaPods dependencies (this may take a few minutes)
✖ Installing CocoaPods dependencies (this may take a few minutes)
error Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template.
Please try again manually: "cd ./${APP_NAME}/ios && pod install".
CocoaPods documentation: https://cocoapods.org/
```

- 발생한 에러는 CocoaPods가 제대로 설치되지 않아 발생한 에러이다. 로그에 나온대로 아래의 명령어를 실행한다.

```bash
**% cd ./${APP_NAME}/ios && pod install**
```

# 3. Android App 실행

- Android App 을 실행하여 빌드, 실행이 되는지 확인한다.

```bash
**% npm run android**
```

# 4. iOS App 실행

- iOS App 을 실행하여 빌드, 실행이 되는지 확인한다.

```bash
# ios 디렉토리로 이동
% **cd ios**

# update cocoapods repository
**% pod repo update**  # 또는 **%** pod install --repo-update

# install cocoapods dependencies (Podfile.lock 파일 생성)
**% pod install**
```

```bash
**% npm run ios**
```

# 99. 그 외

### 1) npm 대신 yarn 을 사용할 경우

- 프로젝트 별로 npm 을 사용할지 yarn 을 사용할지 결정할 수 있다.
- 프로젝트의 루트Root 위치에서 아래의 명령어를 실행한다.

```bash
# install yarn
**% npm install -g yarn**
```

- yarn 을 사용할 경우의 Android, iOS의 실행 방법

```bash
# run Android
**% yarn android**

# run ios
**% yarn ios**
```

- Simulator(AndroidStudio, xCode)가 실행되며 앱이 실행된다.
