---
slug: 2022-05-28-error-ios-could-not-get-simulator-list-from-xcode
title: ReactNative - [Error] iOS - Could not get the simulator list from Xcode
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  react native,
  ios,
  error,
  trouble shooting,
  ios build failed,
  could not get the simulator list from xcode,
  could not find podfile,
]
keywords: [
  devian-lab,
  Jobː談,
  react native,
  ios,
  error,
  trouble shooting,
  ios build failed,
  could not get the simulator list from xcode,
  could not find podfile,
]
description: React Native 에서 발생한 xcode, podfile 관련 에러를 알아보고 해결해 본다.
---

<!--title -->
# [ReactNative] Error: iOs Build Failed
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-05-28",
  "updatedAt": "2022-05-28"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-05-28
  updatedAt: 2022-05-28
```

---

> ReactNative 의 iOS 빌드 에러(xcode, podfile)를 해결해 본다.

<!-- truncate -->

## Intro

  React Native 를 이용해 iOS 빌드 중 아래의 2가지 에러로 빌드에 실패했다. 2가지 에러에 대한 원인을 찾아보고 해결해 보기로 했다.

    ```text
      error Could not find "Podfile.lock"

      error Could not get the simulator list from Xcode.
    ```

<!--   
  - Android 빌드에 이어 iOS 빌드를 진행하기 위해 새롭게 **Xcode** 를 설치했다. 그 동안은 [**Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html)** 만 사용하고 있었는데, 이번에 모바일 앱 개발에 앞서 시뮬레이션을 사용하기 위해 설치했다. ****
 -->


## Error

  - 빌드 실패 에러는 아래와 같다.

    ```shell
      $ npm run ios

      error Could not find "Podfile.lock" at /${PROJECT_PATH}/ios/Podfile.lock. Did you run "pod install" in iOS directory?
      info Found Xcode project "${APP_NAME}.xcodeproj"
      xcrun: error: unable to find utility "simctl", not a developer tool or in PATH
      error Could not get the simulator list from Xcode. Please open Xcode and try running project directly from there to resolve the remaining issues. Run CLI with --verbose flag for more details.
      Error: Command failed: xcrun simctl list --json devices
      xcrun: error: unable to find utility "simctl", not a developer tool or in PATH
    ```

## 원인 분석

  ### 1) Could not find "Podfile.lock"

    > _CocoaPod이 처음부터 잘못 설치된 것이 원인인듯 하다._

    Pod 에 관한 에러는 이번이 처음이 아니었다. 처음 React Native 프로젝트 생성 당시에도 아래와 같은 에러가 발생하며 Pod 이 제대로 설치되지 않았다는 것을 알고 있었다. 

      ```text
        error Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template.
      ```

    다만 그 때는 에러 로그에 나온 방법대로 `cd ./${APP_NAME}/ios && pod install` 명령어를 통해 임시적으로 해결(묵인)하고 넘겼었다.

      + React Native 프로젝트 생성 당시의 에러

        ```shell
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

          $ cd ./${APP_NAME}/ios && pod install
        ```

  ### 2) Could not get the simulator list from Xcode.

    > Xcode Command Line Tools 의 설치 경로가 잘못되었다.

    - [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) 
      + Mac에서 개발 환경을 구축하기 위해서는 필수인 Tool 이다. Git부터 Xcode Command Line Tools가 없으면 사용이 불가능하다.
      + _Xcode IDE_ 에 포함되어 있기 때문에 Xcode IDE 를 사용한다면 별도의 설치가 필요없다. 
        - 다만, 앱 개발을 하는 경우가 아니라면 무겁고 용량도 많이 차지하는 Xcode IDE 보다는 가벼운 Xcode Command Line Tools 만 설치해도 된다.  

    기존에 이미 설치되어 있었던 Xcode Command Line Tools 를 지우지 않고 Xcode IDE 를 설치했기 때문에, Xcode IDE 의 Xcode Command Line Tools 설치 경로와 기존의 설치 경로가 다르게 되면서 시뮬레이터의 실행에 실패한듯 하다. 

    - Xcode Command Line Tools 설치 경로 확인
      
      ```shell
        $ xcode-select -print-path

        /Library/Developer/CommandLineTools
      ```

    - Xcode IDE 설치 경로

      ```text
        /Applications/Xcode.app/Contents/Developer
      ```
      

## 해결

  ### 1) Could not find "Podfile.lock"

    > CocoaPods 재설치

    에러 로그에 나와있듯이 (`Did you run "pod install" in iOS directory?`) **ios 디렉토리로 이동**하여 **CocoaPods 를 다시 설치** 해본다.

      - ios 디렉토리로 이동 

        ```shell
          $ cd ios
        ```
        
      - Install cocoapods

        ```shell
          $ pod install

          ...

          [Codegen] Generating ./build/generated/ios/React-Codegen.podspec.json
          Analyzing dependencies
          Fetching podspec for `DoubleConversion` from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`
          [Codegen] Found FBReactNativeSpec
          Fetching podspec for `RCT-Folly` from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`
          Fetching podspec for `boost` from `../node_modules/react-native/third-party-podspecs/boost.podspec`
          Fetching podspec for `glog` from `../node_modules/react-native/third-party-podspecs/glog.podspec`

          ...

          [!] CocoaPods could not find compatible versions for pod "FlipperKit":
            In Podfile:
              FlipperKit (= 0.125.0)

          None of your spec sources contain a spec satisfying the dependency: `FlipperKit (= 0.125.0)`.

          You have either:
          * out-of-date source repos which you can update with `pod repo update` or with `pod install --repo-update`.
          * mistyped the name or version.
          * not added the source repo that hosts the Podspec to your Podfile.
        ```

      다시 에러가 발생했다. 로그를 보아하니 **레포지토리의 업데이트가 필요**한 듯하다.

        ```text
          pod repo update or pod install --repo-update
        ```

      레포지토리를 업데이트하고 다시 설치한다.

        + Update Pod Repository

          ```shell
            $ pod repo update

            ...
            ...
            Updating spec repo `trunk`
          ```

        + Install cocoapods

          ```shell
            $ pod install

            ...
            
            [Codegen] Generating ./build/generated/ios/React-Codegen.podspec.json
            Analyzing dependencies
            Fetching podspec for `DoubleConversion` from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`
            [Codegen] Found FBReactNativeSpec
            Fetching podspec for `RCT-Folly` from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`
            Fetching podspec for `boost` from `../node_modules/react-native/third-party-podspecs/boost.podspec`
            Fetching podspec for `glog` from `../node_modules/react-native/third-party-podspecs/glog.podspec`
            Downloading dependencies
            Installing CocoaAsyncSocket (7.6.5)
            Installing DoubleConversion (1.1.6)

            ...

            Installing glog (0.3.5)
            Installing libevent (2.1.12)
            Generating Pods project
            /${PROJECT_NAME}/${APP_NAME}/ios/Pods/Target Support Files/Pods-${APP_NAME}/Pods-${APP_NAME}.release.xcconfig
            /${PROJECT_NAME}/${APP_NAME}/ios/Pods/Target Support Files/Pods-${APP_NAME}/Pods-${APP_NAME}.debug.xcconfig
            /${PROJECT_NAME}/${APP_NAME}/ios/Pods/Target Support Files/Pods-${APP_NAME}-${APP_NAME}Tests/Pods-${APP_NAME}-${APP_NAME}Tests.release.xcconfig
            /${PROJECT_NAME}/${APP_NAME}/ios/Pods/Target Support Files/Pods-${APP_NAME}-${APP_NAME}Tests/Pods-${APP_NAME}-${APP_NAME}Tests.debug.xcconfig
            React-Core
            Integrating client project

            [!] Please close any current Xcode sessions and use `${APP_NAME}.xcworkspace` for this project from now on.
            Pod installation complete! There are 55 dependencies from the Podfile and 46 total pods installed.
          ```

      이번에는 성공했다. 일단 첫 번째 에러는 해결된 듯 하다.



  ### 2) Could not get the simulator list from Xcode.

    > Xcode Command Line Tools 의 설치 경로 변경

    이 에러는 좀더 간단하다. 터미널에서 몇 개의 명령어만 실행하면 금방 해결할 수 있었다.

    - ① Home 으로 이동

      ```shell
        $ cd ~
      ```

    - ② Xcode Command Line Tools 설치 경로 확인

      ```shell
        $ xcode-select -print-path
        /Library/Developer/CommandLineTools
      ```

    - ③ Xcode IDE 설치 경로 확인: finder 등으로 확인한다.
      + (내 로컬의 경우) /Applications/Xcode.app/Contents/Developer

    - ④ Xcode Command Line Tools 설치 경로를 Xcode IDE 의 설치 경로로 변경

      ```shell
        $ sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
        Password: 비밀번호 입력
      ```

    - ⑤ Xcode Command Line Tools 설치 경로 확인

      ```shell
        $ xcode-select -print-path
        /Applications/Xcode.app/Contents/Developer
      ```


## iOS Build

  2가지 에러가 해결되었는지 확인을 위해 다시 한 번 ios 를 빌드해 본다.

  - 프로젝트 디렉토리로 이동하여 실행

    ```shell
      $ npm run ios
      
      > ${APP_NAME}@0.0.1 ios
      > react-native run-ios

      info Found Xcode workspace "${APP_NAME}.xcworkspace"
      info Building (using "xcodebuild -workspace ${APP_NAME}.xcworkspace -configuration Debug -scheme ${APP_NAME} -destination ...")
      success Successfully built the app

      ...

      success Successfully launched the app on the simulator
    ```

  빌드가 성공적으로 끝나고 Xcode 시뮬레이터가 실행되었다. 정상적으로 리액트 기본 앱이 실행되는 것을 확인 할 수 있다.


<br /><br /><br /><br /><br />

---
- Refs
  + [공식 사이트의 튜토리얼](https://reactnative.dev/docs/environment-setup)