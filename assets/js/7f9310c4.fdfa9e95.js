"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[882],{28604:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=i(74848),r=i(28453);const a={slug:"2022-05-27-error-android-device-exception",title:"ReactNative - [Error] Android - DeviceException",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","blog","react native","android","error","trouble shooting","android build failed","installDebug","DeviceException","JAVA_HOME"],keywords:["devian-lab","Job\u02d0\u8ac7","react native","android","error","trouble shooting","android build failed","installDebug","DeviceException","JAVA_HOME"],description:"React Native \uc5d0\uc11c \ubc1c\uc0dd\ud55c Android \ube4c\ub4dc \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."},t="[ReactNative] Android Build Failed",o={permalink:"/blog/2022-05-27-error-android-device-exception",source:"@site/blog/programming/react/react-native/2022-05-27-error-android-device-exception.md",title:"ReactNative - [Error] Android - DeviceException",description:"React Native \uc5d0\uc11c \ubc1c\uc0dd\ud55c Android \ube4c\ub4dc \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4.",date:"2022-05-27T00:00:00.000Z",tags:[{inline:!0,label:"devian-lab",permalink:"/blog/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/blog/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/blog/tags/job\u02d0\u8ac7"},{inline:!0,label:"blog",permalink:"/blog/tags/blog"},{inline:!0,label:"react native",permalink:"/blog/tags/react-native"},{inline:!0,label:"android",permalink:"/blog/tags/android"},{inline:!0,label:"error",permalink:"/blog/tags/error"},{inline:!0,label:"trouble shooting",permalink:"/blog/tags/trouble-shooting"},{inline:!0,label:"android build failed",permalink:"/blog/tags/android-build-failed"},{inline:!0,label:"installDebug",permalink:"/blog/tags/install-debug"},{inline:!0,label:"DeviceException",permalink:"/blog/tags/device-exception"},{inline:!0,label:"JAVA_HOME",permalink:"/blog/tags/java-home"}],hasTruncateMarker:!0,authors:[{name:"Dev.ian",title:"Software Engineer",url:"https://github.com/jay2u8809",imageURL:"/img/onigiri_icon.jpg",key:"devian",page:null}],frontMatter:{slug:"2022-05-27-error-android-device-exception",title:"ReactNative - [Error] Android - DeviceException",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","blog","react native","android","error","trouble shooting","android build failed","installDebug","DeviceException","JAVA_HOME"],keywords:["devian-lab","Job\u02d0\u8ac7","react native","android","error","trouble shooting","android build failed","installDebug","DeviceException","JAVA_HOME"],description:"React Native \uc5d0\uc11c \ubc1c\uc0dd\ud55c Android \ube4c\ub4dc \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."},unlisted:!1,prevItem:{title:"ReactNative - [Error] iOS - Could not get the simulator list from Xcode",permalink:"/blog/2022-05-28-error-ios-could-not-get-simulator-list-from-xcode"}},d={authorsImageUrls:[void 0]},s=[{value:"Intro",id:"intro",level:2},{value:"Error",id:"error",level:2},{value:"\uc6d0\uc778 \ubd84\uc11d",id:"\uc6d0\uc778-\ubd84\uc11d",level:2},{value:"JAVA_HOME",id:"java_home",level:3},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2},{value:"JAVA_HOME \ud658\uacbd\ubcc0\uc218 \uc124\uc815",id:"java_home-\ud658\uacbd\ubcc0\uc218-\uc124\uc815",level:3},{value:"Android Build",id:"android-build",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2022-05-27\n  updatedAt: 2022-05-27\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"ReactNative \uc758 \uc548\ub4dc\ub85c\uc774\ub4dc \ube4c\ub4dc \uc5d0\ub7ec(DeviceException)\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,l.jsx)(n.p,{children:"React Native \ub97c \uc774\uc6a9\ud574 Android \ube4c\ub4dc \uc911 \uc544\ub798\uc758 \uc5d0\ub7ec\ub85c \ube4c\ub4dc\uc5d0 \uc2e4\ud328\ud588\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"  Execution failed for task ':app:installDebug'.\n  > com.android.builder.testing.api.DeviceException: No connected devices!\n"})}),"\n",(0,l.jsx)(n.h2,{id:"error",children:"Error"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ube4c\ub4dc \uc2e4\ud328 \uc5d0\ub7ec\ub294 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ npx react-native run-android\n\n  info Running jetifier to migrate libraries to AndroidX. You can disable it using \"--no-jetifier\" flag.\n  Jetifier found 936 file(s) to forward-jetify. Using 4 workers...\n  info JS server already running.\n  info Launching emulator...\n  error Failed to launch emulator. Reason: Could not start emulator within 30 seconds..\n  warn Please launch an emulator manually or connect a device. Otherwise app may fail to launch.\n  info Installing the app...\n\n  > Configure project :app\n  Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.\n\n  > Task :app:installDebug FAILED\n  37 actionable tasks: 2 executed, 35 up-to-date\n\n  FAILURE: Build failed with an exception.\n\n  * What went wrong:\n  Execution failed for task ':app:installDebug'.\n  > com.android.builder.testing.api.DeviceException: No connected devices!\n\n  * Try:\n  > Run with --stacktrace option to get the stack trace.\n  > Run with --info or --debug option to get more log output.\n  > Run with --scan to get full insights.\n\n  * Get more help at https://help.gradle.org\n\n  BUILD FAILED in 9s\n\n  error Failed to install the app. Make sure you have an Android emulator running or a device connected.\n  Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081\n\n  FAILURE: Build failed with an exception.\n\n  * What went wrong:\n  Execution failed for task ':app:installDebug'.\n  > com.android.builder.testing.api.DeviceException: No connected devices!\n\n  * Try:\n  > Run with --stacktrace option to get the stack trace.\n  > Run with --info or --debug option to get more log output.\n  > Run with --scan to get full insights.\n\n  * Get more help at https://help.gradle.org\n\n  BUILD FAILED in 9s\n\n      at makeError (/${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli-platform-android/node_modules/execa/index.js:174:9)\n      at /${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli-platform-android/node_modules/execa/index.js:278:16\n      at processTicksAndRejections (node:internal/process/task_queues:96:5)\n      at async runOnAllDevices (/${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli-platform-android/build/commands/runAndroid/runOnAllDevices.js:109:5)\n      at async Command.handleAction (/${PROJECT_PATH}/${APP_NAME}/node_modules/@react-native-community/cli/build/index.js:192:9)\n  info Run CLI with --verbose flag for more details.\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\uc6d0\uc778-\ubd84\uc11d",children:"\uc6d0\uc778 \ubd84\uc11d"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"JAVA_HOME \ud658\uacbd\ubcc0\uc218\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 jdk \ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc774 \uc5d0\ub7ec \uba54\uc2dc\uc9c0\ub97c \uad6c\uae00\ub9c1 \ud574\ubcf4\ub2c8 JAVA_HOME \ud658\uacbd\ubcc0\uc218\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 jdk \ub97c \ucc3e\uc744 \uc218 \uc5c6\uc744 \ub54c \ub098\ud0c0\ub098\ub294 \uc5d0\ub7ec\ub77c\uace0 \ud55c\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"java_home",children:"JAVA_HOME"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Java \ud504\ub85c\uadf8\ub798\ubc0d\uc774\ub098 jvm \ud504\ub85c\uadf8\ub7a8\ub4e4\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,l.jsx)(n.strong,{children:"JAVA_HOME"})," \ubcc0\uc218 \ub97c \uc2dc\uc2a4\ud15c(OS)\uc5d0 \ub4f1\ub85d\ud574\uc57c \ud55c\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ub4f1\ub85d\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, \ub9e4\ubc88 \uc2dc\uc2a4\ud15c(OS)\uc758 jdk \uacbd\ub85c\ub97c \uc9c0\uc815\ud574\uc918\uc57c \ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"JAVA_HOME"})," \ubcc0\uc218\ub294 \uc77c\uc885\uc758 \uc804\uc5ed \ubcc0\uc218(",(0,l.jsx)(n.em,{children:"Global Variable"}),") \uc774\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\uc2dc\uc2a4\ud15c(OS)\uc758 \uc804\uc5ed \ubcc0\uc218\ub85c\uc11c ",(0,l.jsx)(n.strong,{children:"JAVA_HOME"})," \uc774\ub77c\ub294 \uc804\uc5ed \ubcc0\uc218\ub97c \uc2dc\uc2a4\ud15c(OS)\uc5d0 \ub4f1\ub85d\ud558\uba74 \uc2dc\uc2a4\ud15c(OS) \uc5b4\ub514\uc11c\ub4e0 java \ub97c \uc2e4\ud589\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Andriod Studio \ub098 IntelliJ, Tomcat \ub4f1\uc758 java \ub97c \uc774\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\ub4e4\uc774 Build, BootRun, Emulator \ub4f1\uc744 \uc2e4\ud589 \ud560 \ub54c, \ubcc4\ub3c4\ub85c jdk \uc758 \uacbd\ub85c\ub97c \uc9c0\uc815\ud574\uc8fc\uc9c0 \uc54a\uc544\ub3c4 \uc2dc\uc2a4\ud15c(OS)\uc758 ",(0,l.jsx)(n.strong,{children:"JAVA_HOME"})," \uc774\ub77c\ub294 \ubcc0\uc218\ub97c \ubd88\ub7ec\uc640 \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["JDK \uacbd\ub85c\ub294 ",(0,l.jsx)(n.strong,{children:"JAVA_HOME"})," \uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub2e4\ub294 \uc57d\uc18d"]}),"\n",(0,l.jsxs)(n.li,{children:["\uc774 \uc57d\uc18d\ub41c \ubcc0\uc218 ",(0,l.jsx)(n.strong,{children:"JAVA_HOME"})," \uc774 \uc5c6\uc5c8\uae30\uc5d0 \ube4c\ub4dc\uc5d0 \uc2e4\ud328\ud588\ub2e4. \ub530\ub77c\uc11c \uc774 \ubcc0\uc218\ub97c \uc9c0\uc815\ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\ud574\uacb0",children:"\ud574\uacb0"}),"\n",(0,l.jsx)(n.h3,{id:"java_home-\ud658\uacbd\ubcc0\uc218-\uc124\uc815",children:"JAVA_HOME \ud658\uacbd\ubcc0\uc218 \uc124\uc815"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u2460 Home \uc73c\ub85c \uc774\ub3d9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ cd ~\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u2461 JAVA_HOME \ud658\uacbd\ubcc0\uc218\uac00 \uc5c6\uc744 \uacbd\uc6b0 \uac00\uc7a5 \uc544\ub798\ucabd\uc5d0 \ucd94\uac00"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ echo export JAVA_HOME= /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home >> .zshrc\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u2462 zshrc \uc801\uc6a9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ source .zshrc\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u2463 JAVA_HOME \ud655\uc778"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ echo $JAVA_HOME\n\n  /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"android-build",children:"Android Build"}),"\n",(0,l.jsx)(n.p,{children:"\uc5d0\ub7ec\uac00 \ud574\uacb0\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\uc744 \uc704\ud574 \ub2e4\uc2dc \ud55c \ubc88 ios \ub97c \ube4c\ub4dc\ud574 \ubcf8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub85c \uc774\ub3d9\ud558\uc5ec \uc2e4\ud589"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ npx react-native run-android\n  info Running jetifier to migrate libraries to AndroidX. You can disable it using \"--no-jetifier\" flag.\n  Jetifier found 936 file(s) to forward-jetify. Using 4 workers...\n  info JS server already running.\n  info Installing the app...\n\n  > Configure project :app\n  Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.\n\n  > Task :app:installDebug\n  Installing APK 'app-debug.apk' on 'Nexus_6_API_30(AVD) - 11' for app:debug\n  Installed on 1 device.\n\n  BUILD SUCCESSFUL in 11s\n  37 actionable tasks: 2 executed, 35 up-to-date\n  info Connecting to the development server...\n  8081\n  info Starting the app on \"emulator-5554\"...\n  Starting: Intent { cmp=com.${APP_NAME}/.MainActivity }\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\ube4c\ub4dc\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ub05d\ub098\uace0 Android \uc2dc\ubbac\ub808\uc774\ud130\uac00 \uc2e4\ud589\ub418\uc5c8\ub2e4. \uc815\uc0c1\uc801\uc73c\ub85c \ub9ac\uc561\ud2b8 \uae30\ubcf8 \uc571\uc774 \uc2e4\ud589\ub418\ub294 \uac83\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Refs","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://reactnative.dev/docs/environment-setup",children:"\uacf5\uc2dd \uc0ac\uc774\ud2b8\uc758 \ud29c\ud1a0\ub9ac\uc5bc"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var l=i(96540);const r={},a=l.createContext(r);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);