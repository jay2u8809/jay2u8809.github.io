---
layout: post
title: TypeScript - 타입스크립트의 개발 환경을 만들자
categories: [Programming]
tags: 
- Programming
- Typescript
- TypeScript
comments: false
description:
author: J.ian
date:   2021-01-11
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2021-01-11" />

> 타입스크립트TypeScript 를 설치하고 실행시켜본다.     

> ### 타입스크립트TypeScript의 설치와 실행

___


&nbsp;
평소 자바스크립트JavaScript를 사용하면서 변수나 메소드의 파라미터 등에 자료형DataType이 지정되어 있지 않은 점이 항상 불편했었다.       
&nbsp;
자바나 C언어의 경우 컴파일Compile 시에 잘못된 자료형에 대해 미리 잡아주는 과정이 있었기 때문에 잘못된 자료형을 사용하는 에러는 없었고    
&nbsp;
혹시나 실행중Runtime에 잘못된 자료형이 대입되는 경우에는 에러가 발생하여 금방 코드를 수정할 수 있었다.     
&nbsp;
하지만 자바스크립트의 경우 자료형 지정이 없어, 실행중에 잘못된 자료형이 들어가도 아무 에러가 발생하지 않고 잘 실행된다.     
&nbsp;
이 점 때문에 디버깅Debugging도 어렵고 결국 자료형을 체크하는 어떤 과정을 넣어주어야만 했기에 상당히 불편했었다.     
&nbsp;
그런 이유로 자바스크립트를 항상 만지고 싶지 않았었는데, 우연히 유튜브 강의를 찾다가 타입스크립트TypeSript에 관한 강의를 알게 되었고      
&nbsp;
내가 불편해하고 싫어 했던 점을 완변히 보완한 자바스크립트라는 사실 알게 되었다.     
&nbsp;
그래서 혹시나 나중에 쓰게 될 기회가 있을 때를 대비해 해당 유튜브 강의를 간단히 정리해 본다.     
&nbsp;&nbsp;

#### 1. VisualStudioCode 설치;
&nbsp; 
타입스크립트를 사용하기 위한 에디터나 통합개발환경IDE을 먼저 선정한다.             
&nbsp;
가장 많이 사용한 IDE로는 Jetbrain사의 WebStorm이나 Microsoft사의 VisualStudioCode가 있다.      
&nbsp;
간단하면서 강력한 기능을 가진 Microsoft사의 [VisualStudioCode를 설치](https://code.visualstudio.com/Download) 하도록 한다.     
<br /><br />


#### 2. NodeJs 설치
&nbsp;
타입스크립트를 설치하기 전 NodeJs를 먼저 설치해야한다.      
&nbsp;
타입스크립트를 설치하기 위해 **`npm`** 을 사용해야 하는데 npm은 **`Node Package Manaager`** 이다.           
&nbsp;
말 그대로 Node 환경에서 자바스크립트를 실행하기 위한 다양한 패키지를 관리할 수 있는 프로그램이다.     
&nbsp;
이 npm을 사용해서 타입스크립트를 설치하기 때문에 반드시 타입스크립트를 설치하기 전 [NodeJs를 설치](https://nodejs.org/ko/download/)해야만 한다.      
&nbsp;
LTS버전/최신버전 2가지 버전이 있는데 어떤 버전을 설치해도 무관하다.      
<br /><br />


#### 3. 타입스크립트 설치
&nbsp;
타입스크립를 설치하기 위해 타입스크립트 [공식사이트](https://www.typescriptlang.org/)에 접속하면      
&nbsp;
"Try in your browser" 와 "Install locally" 라는 2가지 버튼을 볼 수 있다.     
&nbsp;&nbsp;
Try in your browser : 본인의 PC에 설치하지 않고 브라우저 상에서 바로 타입스크립트 코딩을 해 볼수 있는 Playground 공간     
&nbsp;&nbsp;
[Install locally](https://www.typescriptlang.org/#installation) : 본인의 PC에 설치하기 위한 npm 명령어를 소개     
<br />

##### npm 으로 타입스크립트 설치 (Install locally)
&nbsp;&nbsp;
npm을 사용하기 위해서는 터미널 공간이 필요하다.     
&nbsp;&nbsp;
VisualStudioCode를 실행시키고 상단 메뉴의 [Termianl] - [New Terminal] 을 클릭하여 아래쪽에 커맨드창을 연다.     
&nbsp;&nbsp;
타입스크립트 공식 사이트에서 소개하는 아래의 npm 명령어를 복사하여 커맨드창에서 실행시킨다.      
&nbsp;&nbsp;
※ MacOs 또는 리눅스Linux를 사용하는 분들은 명령어 앞에 sudo를 붙여 실행해야만 정상적으로 설치된다.     

```bash
    윈도우즈   : npm install -g typescript
    Mac, Linux : sudo npm install -g typescript
```
<br />
&nbsp;&nbsp;
설치가 완료되었는지 확인하기 위해 아래의 명령어들 중 1개를 입력해 확인해 본다.     
&nbsp;&nbsp;
Version 0.0.0 형태로 출력되면 정상적으로 설치가 된 것이다.     

```bash
    tsc -version
    tsc -v
    tsc --version
    tsc --v

    // tsc : type script compiler의 약자이다 
```
&nbsp;
타입스크립트의 개발 환경 구성이 완료되었다.      
<br /><br />


#### 4. 타입스크립트란?
&nbsp;
타입스크립트는 자바스크립트의 슈퍼셋Superset 으로서 Microsoft에서 개발, 유지하는 프로그래밍 언어이다.     
&nbsp;
그렇기 때문에 자바스크립트의 기능을 모두 포함하고 있어 자바스크립트 개발에 익순한 분들이라면 금방 배울 수 있을 듯 하다.     
&nbsp;
언어 이름에서도 나타나듯 "자료형Type"을 강조하는 자바스크립트라고 생각하면 될 듯하다.      
&nbsp;
객체 선언이나 변수 선언, 함수 선언에 있어 자바나 C언어처럼 자료형Type을 엄격하게 지정하도록 하고 있다.     
&nbsp;
자바스크립트의 장점이자 단점인 느슨한 타입을 허용하지 않는 자바스크립트라니 상당히 재미있는 언어라고 생각한다.      
&nbsp;
타입스크립트는 **`프로그래밍 언어이면서 동시에 컴파일러Compiler`** 인데, 이를 확인하기 위해 타입스크립트의 버전을 확인하는 명령어를 보자.      
&nbsp;
```bash
    tsc -version
```
&nbsp;
**`tsc`** 라는 명령어가 **`Type Script Compiler`** 의 약자라고 했다.      
&nbsp;
타입스크립트는 이 tsc 라는 컴파일러를 이용해 **`*.ts`** 라는 타입스크립트 파일을  **`*.js`** 라는 자바스크립트 파일로 변환한다.     
&nbsp;
**`*.ts`** 라는 확장자는 타입스크립트의 확장자인데 이 확장자는 브라우저Browser가 읽어 들일수 없다.      
&nbsp;
따라서 브라우저가 읽어 들일 수 있는 **`*.js`** 라는 자바스크립트 파일로 변환을 해주어야 하는데 이 때 이 과정을 **`tsc`** 라는 타입스크립트 컴파일러가 하게 된다.     

&nbsp;
※표준 언어에 기능을 추가하는 것을 슈퍼셋(Superset)이리고 한다. 반대로 표준언어의 기능을 축소한 것을 서브셋(Subset)이라고 한다.
<br /><br />



#### 5. Hello World
&nbsp;
타입스크립트의 개발 환경 설정과 타입스크립트에 대한 간단한 설명을 끝냈으니 "Hello World"를 만나보자.       
<br />&nbsp;
1) 원하는 폴더를 생성하여 확장자 **`*.ts`** 파일을 생성한다.     
<center><img src="/resources/images/Programming/TypeScript/0001-02-03-0001_001.png"></center>
<br />
<br />&nbsp;
2) 아래와 같이 "Hello World"를 출력하는 메소드를 작성한다.       

```typescript
    
    function hello_typescript(str: string) {
        return str;
    }

    console.log(hello_typescript("Hello World"));
```
<br/>
&nbsp;
3) 비주얼스튜디오코드에서 본인이 작업하고 있는 ts 파일이 있는 폴더에 마우스 오른쪽 버튼을 클릭하면 **`Open in integrated Terminal`**이라는 메뉴가 있다. 클릭한다.(위의 이미지의 "TypeScript" 폴더)         
<br />&nbsp;
4) 새로운 터미널이 나오면서 "pwd" 명령어를 입력한다. 현재 작업 중인 ts 파일이 있는 위치임을 확인한다.      
<br />&nbsp;
5) **`ts`** 파일을 **`js`** 파일로 컴파일해보자. 아래의 명령어 중 1개만 터미널창에 입력하여 실행한다.     

```bash
    # tsc 파일명.ts : 1번만 컴파일. ts파일을 수정해도 js파일에 반영하기 위해 다시 tsc 명령어를 실행해야만 한다.
    tsc hello_world.ts

    # tsc -w 파일명.ts : 자동 컴파일 옵션. ts파일의 수정사항을 자동으로 js파일에 반영 (watch)
    tsc -w hello_world.ts
```
<br />
&nbsp;
*.js 파일이 생성된 것을 확인할 수 있다.     

<center><img src="/resources/images/Programming/TypeScript/0001-02-03-0001_002.png"></center>
<br />

<br />&nbsp;
6) 다시 터미널에서 아래의 명령어를 입력하여 실행하자      
```bash
    # node 파일명.js
    node hello_world.js
```
"Hello World" 가 출력되는 것을 확인할 수 있다.

<br /><br />

#### 타입스크립트 파일에서 에러가 발생하고 있을 때
<center><img src="/resources/images/Programming/TypeScript/0001-02-03-0001_003.png"></center>

<br />&nbsp;
&nbsp;
위와 같은 에러가 발생한다면 아래의 명령어를 터미널에 입력해 실행한다.      
```bash
    tsc --init
```
<br />
&nbsp;
"message TS6071: Successfully created a tsconfig.json file." 라는 메시지가 출력되면서 **`tsconfig.json`** 파일이 새로 생성된다.     
&nbsp;
그리고 다시 타입스크립트 파일을 확인해보면 에러가 사라진 것을 확인 할 수 있다. (비주얼스튜디오코드의 버그라고 한다.)      





