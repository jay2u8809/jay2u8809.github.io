---
layout: post
title: Windows10 - 잠금화면(로그인화면) 사진 저장하기
categories: [HowToUse]
tags: 
- HowToUse
- Windows
- Wallpaper
comments: false
description:
author: J.ian
---
<input type="hidden" id="categoryName" value="HowToUse" />
<input type="hidden" id="postedDate" value="2019-12-30" />

> Windows10의 잠금화면(로그인화면)의 사진 저장하는 방법을 알아본다.

> ### Windows10의 잠금화면(로그인화면) 사진 저장하기

___


#### - 잠금화면(로그인화면) 사진이 저장된 폴더로 이동하기
<br />

&nbsp; 
```
    %LocalAppData%\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets
```      
<br />

&nbsp;&nbsp; 
위의 경로를 탐색기 주소창에 그대로 붙여 넣어준다.       
&nbsp;&nbsp; 
위의 경로로 이동하면 확장자가 없는 많은 파일들이 존재하는데, 이 파일들이 지금까지 저장된 잠금화면의 사진들이다.      

![windowsLoginImage](/resources/images/HowToUse/Windows/windowsLoginImagePath.PNG "windowsLoginImagePath")      
<br />

&nbsp;&nbsp; 
이 파일들의 확장자를 jpg또는 png로 변경해주면 바로 사진을 볼 수 있다.      

<br /> <br /> 


#### ※ 한번에 확장자를 변경하는 방법

&nbsp;&nbsp; 
①위의 파일들을 **다른 임의의 폴더로 복사** 한다.      
&nbsp;&nbsp; 
②복사한 폴더에서 **`File - 명령 프롬프트 열기 - 관리자 권한으로 열기`** 를 클릭한다.     
&nbsp;&nbsp; 
③실행된 명령 프롬프트 화면에서 **`ren * *.jpg  `**를 입력한다.     
&nbsp;&nbsp; 
④모든 파일들이 jpg확장자로 변경된다.      


<br /><br />

___