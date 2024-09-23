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

## 1. 사전 설정

  ### 1-1) Android
    
    #### ① Java 설치
    #### ② Android Studio 설치
      - Android Studio 실행 → Configure → sdk manager
        + Appearance&Behavior → System Settings → Android SDK
    #### ③ Android SDK 시스템 환경 변수 설정 
      - `.zshrc 파일` 에 아래의 내용을 추가
        + Android SDK Location 의 경로를 확인 하여 설정
        
          ```shell
            # Android
            export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
            export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
            export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
          ```
        
    #### ④ JAVA_HOME 시스템 환경 변수 설정
      - `.zshrc 파일` 에 아래의 내용을 추가

        ```shell
          # JAVA
          export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
        ```
        
  #### 1-2) iOS
    - xCode 설치
  
  #### 1-3) Etc
    
    #### ① Homebrew 설치
        
      ```shell
        $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      ```
        
    #### ② Node 설치 
      - _참고: [여러 버전의 node.js 관리하기](/docs/programming/nodejs/tips/how-to-install-nodenv)_

      - nodenv 설치
        
        ```shell
          $ brew install nodenv
        ```
            
      - nodenv 시스템 환경 변수 설정
        + `.zshrc 파일` 에 아래의 코드를 추가
        
          ```shell
            # Nodenv
            export PATH="$HOME/.nodenv/bin:$PATH"
            eval "$(nodenv init -)"
          ```
            
      - 확인
            
        ```shell
          $ curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
          
          Checking for `nodenv' in PATH: /usr/local/bin/nodenv
          Checking for nodenv shims in PATH: OK
          Checking `nodenv install' support: /usr/local/bin/nodenv-install (node-build 4.9.43)
          Counting installed Node versions: 1 versions
          Auditing installed plugins: OK
        ```
            
      - node 설치
            
        ```shell
          $ nodenv install 16.15.0
        ```
            
      - 기본 사용 node 버전 지정 
            
        ```shell
            $ nodenv global 16.15.0
        ```
            

## 2. 공통 프로그램 설치

  ### 2-1) Watchman
    - installation

      ```shell
        $ brew install watchman
      ```

    - version
      
      ```shell
        $ watchman -v
          2022.05.16.00
      ```
    
  ### 2-2) Cocoapods
    - installation
      
      ```shell
        $ sudo gem install cocoapods
      ```

    - version
      
      ```shell
        $ pod --version
      ```

    - etc: m1 mac

      ```shell
        $ sudo arch -x86_64 gem install ffi
        $ arch -x86_64 pod install
      ```
    

## 3. React Native 프로젝트 생성

  - 아래의 명령어를 이용해 React Native 프로젝트를 생성한다.
    
    ```typescript
      npx react-native init ${APP_NAME} --template react-native-template-typescript
    ```

    ```shell
      # Typescript 를 사용하여 생성하는 명령어
      $ npx react-native init ${APP_NAME} --template react-native-template-typescript

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

    + CocoaPods가 제대로 설치되지 않아 에러가 났다. 로그에 나온대로 아래의 명령어를 실행하여 해결한다.
      - _참고: [ReactNative - [Error] iOS - Could not get the simulator list from Xcode](/blog/2022-05-28-error-ios-could-not-get-simulator-list-from-xcode)_

      ```shell
        $ cd ./${APP_NAME}/ios && pod install
      ```


## 4. Android & iOS App 실행

  #### Android
    - 아래의 명령어를 실행하여 앱이 빌드되고 실행이 되는지 확인한다.

      ```shell
        $ npm run android
      ```

  #### iOS
    - 아래의 명령어를 실행하여 앱이 빌드되고 실행이 되는지 확인한다.

      ```shell
        # ios 디렉토리로 이동
        $ cd ios

        # update cocoapods repository
        $ pod repo update  # 또는 pod install --repo-update

        # install cocoapods dependencies (Podfile.lock 파일 생성)
        $ pod install
      ```

      ```shell
        $ npm run ios
      ```


## 그 외

  ### npm 대신 yarn 을 사용할 경우
    - 프로젝트 별로 npm 을 사용할지 yarn 을 사용할지 결정할 수 있다.
    - 프로젝트의 루트Root 위치에서 아래의 명령어를 실행한다.

      + install yarn
     
        ```shell
          $ npm install -g yarn
        ```

      + Android, iOS 앱의 실행
        - Simulator(AndroidStudio, xCode)가 실행되며 앱이 실행된다.
        
        ```shell
          # run Android
          $ yarn android

          # run ios
          $ yarn ios
        ```

    





<br /><br /><br /><br /><br />

---
- Refs
  + [React Tutorial](https://reactnative.dev/docs/environment-setup)