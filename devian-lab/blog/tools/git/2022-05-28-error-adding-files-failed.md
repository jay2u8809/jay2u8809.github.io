---
slug: 2022-05-28-error-adding-files-failed
title: Git - [Error] adding files failed
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  git,
  error,
  trouble shooting,
  adding files failed,
  does not have a commit checked out,
]
keywords: [
  devian-lab,
  Jobː談,
  git,
  error,
  trouble shooting,
  adding files failed,
  does not have a commit checked out,
]
description: Git 의 adding files failed 에러를 알아보고 해결해 본다.
---

<!--title -->
# [Git] Error: does not have a commit checked out 
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

## Intro

  여러 개의 프로젝트를 하나의 Git Repository 에서 관리하고 있었다. 새롭게 Nest.js 프로젝트를 명령어(nest cli)를 통해 생성했고 생성한 프로젝트를 Git 에 Commit 하려고 하니 add 가 되지 않았다.  

  ```markdown
    GitRepository
        ├── A Project
        ├── B Project
        ├── C Project
        ├── D Project
        └── E Project (new project)
  ```

## Error

  - Git Error 의 메시지는 아래와 같았다.

    ```shell
      error: '${PROJECT_NAME}/' does not have a commit checked out
      fatal: adding files failed
    ```

## 원인 분석

  에러 메시지를 바탕으로 구글링 해본 결과 아래의 경우가 원인인 듯 했다. 

    > `.git` 디렉토리가 중복으로 존재하는 경우

  한 개의 Git Repository 에는 하나의 `.git` 디렉토리만 있어야한다. 그런데 이번에 새롭게 추가한 Nest.js 프로젝트는 명령어(nest cli)로 생성할 경우 자동으로 Nest.js 프로젝트 내부에 `.git` 디렉토리를 생성한다. 이것이 에러의 원인이었다. 

  Git Repository 의 구조를 정리하면 아래와 같다.

    - Project Structure

      ```markdown
        GitRepository
            ├── A Project
            ├── B Project
            ├── C Project
            ├── D Project
            ├── E Project (new project)
            │     ├── .git  # 자동으로 생성된 디렉토리
            │     └── .gitignore
            ├── .git
            └── .gitignore
      ```

## 해결

  해결 방법은 간단하다. 
   
  - **자동으로 생성된  `.git` 디렉토리를 삭제** 한다.

    ```shell
      $ rm -rf .git .gitignore
    ```