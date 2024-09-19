---
slug: 2022-05-27-error-android-device-exception
title: ReactNative - [Error] Android - DeviceException
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  react native,
  android,
  error,
  trouble shooting,
  android build failed,
  installDebug,
  DeviceException,
  JAVA_HOME,
]
keywords: [
  devian-lab,
  Jobː談,
  react native,
  android,
  error,
  trouble shooting,
  android build failed,
  installDebug,
  DeviceException,
  JAVA_HOME,
]
description: React Native 에서 발생한 Android 빌드 에러를 해결해 본다.
---

<!--title -->
# [ReactNative] Android Build Failed
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-05-27",
  "updatedAt": "2022-05-27"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-05-27
  updatedAt: 2022-05-27
```

---

## Intro

  React Native 를 이용해 Android 빌드 중 아래의 에러로 빌드에 실패했다.

    ```text
      Execution failed for task ':app:installDebug'.
      > com.android.builder.testing.api.DeviceException: No connected devices!
    ```

## Error

  - 빌드 실패 에러는 아래와 같다.
  
    ```shell
      $ npx react-native run-android

      info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
      Jetifier found 936 file(s) to forward-jetify. Using 4 workers...
      info JS server already running.
      info Launching emulator...
      error Failed to launch emulator. Reason: Could not start emulator within 30 seconds..
      warn Please launch an emulator manually or connect a device. Otherwise app may fail to launch.
      info Installing the app...

      > Configure project :app
      Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.

      > Task :app:installDebug FAILED
      37 actionable tasks: 2 executed, 35 up-to-date

      FAILURE: Build failed with an exception.

      * What went wrong:
      Execution failed for task ':app:installDebug'.
      > com.android.builder.testing.api.DeviceException: No connected devices!

      * Try:
      > Run with --stacktrace option to get the stack trace.
      > Run with --info or --debug option to get more log output.
      > Run with --scan to get full insights.

      * Get more help at https://help.gradle.org

      BUILD FAILED in 9s

      error Failed to install the app. Make sure you have an Android emulator running or a device connected.
      Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081

      FAILURE: Build failed with an exception.

      * What went wrong:
      Execution failed for task ':app:installDebug'.
      > com.android.builder.testing.api.DeviceException: No connected devices!

      * Try:
      > Run with --stacktrace option to get the stack trace.
      > Run with --info or --debug option to get more log output.
      > Run with --scan to get full insights.

      * Get more help at https://help.gradle.org

      BUILD FAILED in 9s

          at makeError (/${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli-platform-android/node_modules/execa/index.js:174:9)
          at /${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli-platform-android/node_modules/execa/index.js:278:16
          at processTicksAndRejections (node:internal/process/task_queues:96:5)
          at async runOnAllDevices (/${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli-platform-android/build/commands/runAndroid/runOnAllDevices.js:109:5)
          at async Command.handleAction (/${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli/build/index.js:192:9)
      info Run CLI with --verbose flag for more details.
    ```

## 원인 분석

  > JAVA_HOME 환경변수가 설정되어 있지 않았기 때문에 jdk 를 찾을 수 없다

  이 에러 메시지를 구글링 해보니 JAVA_HOME 환경변수가 설정되어 있지 않았기 때문에 jdk 를 찾을 수 없을 때 나타나는 에러라고 한다.

  ### JAVA_HOME
    
    - Java 프로그래밍이나 jvm 프로그램들을 실행하기 위해서는 **JAVA_HOME** 변수 를 시스템(OS)에 등록해야 한다. 
      + 등록하지 않을 경우, 매번 시스템(OS)의 jdk 경로를 지정해줘야 한다. 

    - **JAVA_HOME** 변수는 일종의 전역 변수(_Global Variable_) 이다. 
      + 시스템(OS)의 전역 변수로서 **JAVA_HOME** 이라는 전역 변수를 시스템(OS)에 등록하면 시스템(OS) 어디서든 java 를 실행하고 사용할 수 있다.

    - Andriod Studio 나 IntelliJ, Tomcat 등의 java 를 이용하는 프로그램들이 Build, BootRun, Emulator 등을 실행 할 때, 별도로 jdk 의 경로를 지정해주지 않아도 시스템(OS)의 **JAVA_HOME** 이라는 변수를 불러와 사용한다.
      + JDK 경로는 **JAVA_HOME** 에 저장되어 있다는 약속
      + 이 약속된 변수 **JAVA_HOME** 이 없었기에 빌드에 실패했다. 따라서 이 변수를 지정해주어야 한다.


## 해결

  ### JAVA_HOME 환경변수 설정

  - ① Home 으로 이동

    ```shell
      $ cd ~
    ```

  - ② JAVA_HOME 환경변수가 없을 경우 가장 아래쪽에 추가

    ```shell
      $ echo export JAVA_HOME= /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home >> .zshrc
    ```

  - ③ zshrc 적용

    ```shell
      $ source .zshrc
    ```

  - ④ JAVA_HOME 확인

    ```shell
      $ echo $JAVA_HOME

      /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
    ```

### Android Build

  에러가 해결되었는지 확인을 위해 다시 한 번 ios 를 빌드해 본다.

  - 프로젝트 디렉토리로 이동하여 실행

    ```shell
      $ npx react-native run-android
      info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
      Jetifier found 936 file(s) to forward-jetify. Using 4 workers...
      info JS server already running.
      info Installing the app...

      > Configure project :app
      Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.

      > Task :app:installDebug
      Installing APK 'app-debug.apk' on 'Nexus_6_API_30(AVD) - 11' for app:debug
      Installed on 1 device.

      BUILD SUCCESSFUL in 11s
      37 actionable tasks: 2 executed, 35 up-to-date
      info Connecting to the development server...
      8081
      info Starting the app on "emulator-5554"...
      Starting: Intent { cmp=com.${APP_NAME}/.MainActivity }
    ```
  
  빌드가 성공적으로 끝나고 Android 시뮬레이터가 실행되었다. 정상적으로 리액트 기본 앱이 실행되는 것을 확인 할 수 있다.
  





<br /><br /><br /><br /><br />

---
- Refs
  + [공식 사이트의 튜토리얼](https://reactnative.dev/docs/environment-setup)