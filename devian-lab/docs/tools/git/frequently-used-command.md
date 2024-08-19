---
slug: /tools/git/frequently-used-command
# id: frequently-used-git-command
title: 자주 사용하는 명령어
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  git,
  command,
]
# sidebar_position: 1
---

<!--title -->
# Git 명령어
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-08-18",
  "updatedAt": "2024-08-19"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-08-18
  updatedAt: 2024-08-19
```

---

## Status

### Git Status

  - 현재 상태Status를 확인
    + Branch Name 
    + Remote Repo 의 상태(Fetch or Pull 해야할 내용이 있는지)
    + 현재 작업 중인 파일들의 상태 (stage 상태인지)

  ```shell
    $ git status

    On branch feature/example
    Your branch is ahead of 'origin/feature/example' by 1 commit.
  ```

### Git Log

  - Git 이력 확인
    + `git log -1` command 로 직전 커밋의 정보(작업자, 커밋일시, 커밋내용, Revision 등)를 확인할 수 있다.

  ```shell
    $ git log -1

    commit 14c65656386493c2108355a6d7345259bcf3f55d (HEAD -> feature/example)
    Author: dev.ian <abcd1234@email.com>
    Date:   Sun Aug 11 15:54:53 2024 +0900

      add new wiki
  ```

## Push

### Git Push

  - Commit 한 내용을 Remote Repo 에 upload
    + `-f` 옵션을 이용해 force upload 가능
    + `git push ${REMOTE_NAME} ${BRANCH_NAME}`

  ```shell
    $ git push -f origin feature/example
  ```

## Clone

  ```shell
    $ git clone ${SSH_URL}
  ```

## Branch

### List 

  - To see local branches

    ```shell
      $ git branch

      * feature/example
        main
    ```

  - To see all local and remote branches

    ```shell
      $ git branch -a

      * feature/example
        main
        remotes/origin/HEAD -> origin/main
        remotes/origin/feature/example
        remotes/origin/main
    ```

  - To see remote branches

    ```shell
      $ git branch -r

      remotes/origin/HEAD -> origin/main
      remotes/origin/feature/example
      remotes/origin/main
    ```

### Create

  - create a new branch

    ```shell
      $ git branch ${NEW_BRANCH_NAME}
    ```

  - create a new branch and swtich to a branch 

    ```shell
      $ git checkout -b ${NEW_BRANCH_NAME}
    ``` 

### Switch

  - switch to a branch in your local repo

    ```shell
      $ git checkout ${BRANCH_NAME}
    ```

### Delete

  - To delete a remote branch

    ```shell
      $ git push origin --delete ${BRANCH_NAME}
    ```

  - To delete a local branch

    ```shell
      $ git branch -d ${BRANCH_NAME}
      $ git branch -D ${BRANCH_NAME}
    ```


## Remote Repo

### Confirm Remote Repo

  - `origin`: alias of remote repo
  - `git@gitlab.com ~ .git`: remote repo url

  ```shell
    $ git remote -v
    
    origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)
    origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)
  ```

  ```shell
    $ git config --get remote.origin.url

    git@gitlab.com:projects/sample1/ABCDE-service.git
  ```

### Change Remote Repo URL

  - `git@gitlab.com:projects/`**sample1**`/ABCDE-service.git` -> `git@gitlab.com:projects/`**sample2**`/ABCDE-service.git`
  
  ```shell
    $ git remote set-url origin git@gitlab.com:projects/sample2/ABCDE-service.git
  ```


<br /><br /><br /><br /><br />

---
- Refs
  + [Git](https://git-scm.com/docs)
  + [Atlassian](https://www.atlassian.com/git/glossary#commands)
  + [Git Branches: List, Create, Switch to, Merge, Push, & Delete](https://www.nobledesktop.com/learn/git/git-branches)