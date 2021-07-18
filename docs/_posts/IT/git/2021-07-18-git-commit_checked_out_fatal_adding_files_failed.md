---
layout: post
title: "[Git] does not have a commit checked out fatal: adding files failed"
categories: [Git]
tags:
  - programming
  - git
  - trouble
  - error
author: J.ian
last_modified_at: 2021-07-18
---

> `<FILE_NAME>`does not have a commit checked out fatal: adding files failed 에러

## 에러 상황
 커맨드를 통해 새로운 프로젝트를 만들고 깃에 커밋하려고 할 때 에러가 발생했습니다.     
깃 클라이언트로는 Fork라는 프로그램을 사용하고 있는데 생성된 새로운 프로젝트의 모든 파일들이 add가 되지 않는 상태가 되어 있었습니다.          
새롭게 만든 프로젝트의 내용들이 `Unstaged` 에 제대로 표시되지 않고 Stage를 하려고 하니 아래의 에러가 메시지가 뜨면서 Stage가 되지 않습니다.      
```text
  <FILE_NAME> does not have a commit checked out fatal: adding files failed
```

## 프로젝트 구조
 1. code-samples라는 루트Root 폴더 아래에 `.gitignore` 파일이 존재           
 2. code-samples 폴더에 아래에는 3개의 폴더가 존재하고 있고 그 중 하나의 폴더 아래에 새로운 프로젝트를 생성        

## 에러의 원인
 구글링하여 찾아본 결과 해당 에러의 원인은 **`.git`폴더의 중복** 이었습니다.       
 새롭게 만든 프로젝트는 NestJs 프로젝트였는데 nest 명령어를 통해 만들면서 자동으로 .git 폴더가 생성된 것이 에러의 원인이었습니다.      
 code-samples라는 루트 폴더에 .git 폴더와 .gitignore 파일이 존재한 상태에서 하위 폴더에 새롭게 .git 폴더와 .gitignore 가 존재하기 때문에         
깃 add가 되지 않았습니다.         

## 에러 해결
 새롭게 만든 프로젝트에 **자동 생성된 .git 폴더와 .gitignore 파일을 삭제**하여 중복을 없애고 나니 바로 해결되었습니다.


---

<br />
