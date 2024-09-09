---
slug: 2024-08-14-how-to-change-git-remote-repo-url
title: Git - Remote Repository URL 을 바꿔보자
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  git,
  remote repository,
]
keywords: [
  devian-lab,
  Jobː談,
  git,
  remote repository,
]
description: Git 의 Remote Repository URL 을 변경해 본다.
---

<!--title -->
# Remote repository URL 변경 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-20",
  "updatedAt": "2024-08-18"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-06-20
  updatedAt: 2024-08-18
```

---

## Intro

  회사의 Gitlab 플랜을 변경하면서 사내 Gitlab 의 URL 도 함께 변경했다. 회사 자체적으로 운영하던 Git 서버를 다른 대행 업체를 통해 맡기는 형태로 운영 방식을 바꾸게 되면서 URL 로 함께 바뀌게 되었다. Git 의 URL 이 바뀌면서 그동안 사용하던 Git Repository 의 URL 도 모두 바뀌게 된 것이다.

  이번 글에서는 Git Remote Repository 의 URL 이 변경되었거나 다른 이유로 변경해야할 때 Local 에서 설정하는 방법에 대해 정리한다.


## Git remote repository URL 확인

  가장 먼저 할 작업은 현재 설정되어 있는 상태를 확인하는 것이다. 각 프로젝트의 Git repository 의 Remote URL 이 무엇인지 확인한다.
 
  - `git remote -v`
    + **fetch** 하고 **push** 할때 어떤 url 로 하는지 확인 할 수 있다.

  ```shell
    $ git remote -v

    origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)
    origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)
  ```

    - `origin`
      + repository url의 별칭(alias)
      + reposiory url 이 길기 때문에 사용하는 별칭으로 기본적으로 origin 을 사용한다.
    
    - `git@gitlab.com:projects/sample1/ABCDE-service.git`
      + repository 의 ssh url 

  비슷한 명령어로 `git config --get remote.origin.url` 가 있다. fetch, push 를 나눠서 보여주지 않고 단순히 현재 로컬 git config 에서 설정되어 있는 remote url 을 보여준다.



## URL 변경

### Set-Url

  현재의 Repository remote url 을 확인했다면 새로운 URL 로 변경한다. (_sample1 -> sample2_)

  URL 변경은 **remote set-url** 이라는 명령어를 이용해서 할 수 있다.

  - `git remote set-url ${REPOSITORY_ALIAS} ${REPOSITORY_NEW_URL}`
    + url 을 변경할 repository 의 별칭과 새로운 URL 을 지정한다.
  
  - origin 이라는 별칭의 repository 의 URL 을 `git@gitlab.com:projects/sample2/ABCDE-service.git` 로 지정한 뒤, 확인한다.

  ```shell
    # URL 변경
    $ git remote set-url origin git@gitlab.com:projects/sample2/ABCDE-service.git

    # URL 확인
    $ git remote -v
    origin  git@gitlab.com:projects/sample2/ABCDE-service.git (fetch)
    origin  git@gitlab.com:projects/sample2/ABCDE-service.git (push)
  ```

### Rename

  **remote rename** 이라는 명령어로도 remote repository url 을 변경할 수 있다. 
 
  #### 1) 현재 repository 의 별칭을 다른 별칭으로 변경 _(origin -> old_origin)_
  
    - `git remote rename ${CURRENT_ALIAS} ${NEW_ALIAS}`

  #### 2) 기존 별칭으로 새로운 URL 의 repositroy 를 추가

    -  `git remote add origin ${REPOSITORY_NEW_URL}`
  
  #### 3) repository 확인

    - `git remote -v`

  #### 4) 1) 에서 변경한 별칭의 repository (old_origin) 삭제 

    - `git remote rm ${NEW_ALIAS}`

  #### - example code

    ```shell
      # 1) 
      $ git remote rename origin old_origin

      # 2) 
      $ git remote add origin git@gitlab.com:projects/sample2/ABCDE-service.git

      # 3) 
      $ git remote -v
      old_origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)
      old_origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)
      origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)
      origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)

      # 4) 
      $ git remote rm old_origin
    ```

  #### - error: No such remote
    
    `rename` 명령어로 repository 별칭(alias)을 바꾸는게 아니라 URL 을 변경했을 때, 아래와 같은 에러가 나올 수 있다. 

    ```shell
      # URL 변경: sample1 -> sample2
      $ git remote rename git@gitlab.com:projects/sample1/ABCDE-service.git git@gitlab.com:projects/sample1/ABCDE-service.git

      fatal: No such remote: 'git@gitlab.com:projects/sample1/ABCDE-service.git' # 이전 url(sample1) 을 찾을 수 없다.
    ```
    
    `git remote rename ${OLD_URL} ${NEW_URL}` 에서 OLD_URL 이 존재하지 않는 경우, 이러한 에러가 나온다.
 
    _Git 서버_ 상에서 기존의 remote repository url 을 새로운 url 로 바꾼 뒤라면, 기존 url 은 이미 사라졌기에 존재하지 않는다. 따라서 이러한 경우에는 `remote set-url` 명령어를 사용하거나 rename 명령어로 repository 의 별칭을 변경하는 방법으로 해야한다.
 
    




<br /><br /><br /><br /><br />

--- 
- Refs
  + [Official Github Docs-원격 리포지토리 관리](https://docs.github.com/ko/get-started/getting-started-with-git/managing-remote-repositories)
  + [【Git&GitHub】リモートの変更・削除（git remote renameコマンド）](https://phoeducation.work/entry/20210827/1630018680)
  + [gitのremote urlを変更する(レポジトリ移行時)](https://qiita.com/minoringo/items/917e325892733e0d606e)
  + [원격 저장소의 origin은 어떤 것을 의미할까](https://m.blog.naver.com/rinjyu/222180087428)


