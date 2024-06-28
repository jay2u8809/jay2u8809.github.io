---
# slug: /etc/git/how-to-change-git-remote-repo-url.md
id: how-to-change-git-remote-repo-url.md
title: Git Remote Repository URL 변경 방법
tags: [devian-lab, project, git]
# sidebar_position: 1
---

<!--title -->
# Git remote repository URL 변경하려면?
<!--//title -->

```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-20",
  "updatedAt": "2024-06-23"
}
```

---

## Intro
 회사의 gitlab 플랜을 변경하게 되면서 URL 도 함께 변경했다. 플랜 변경과 URL 변경은 관계가 없지만, 그동안 우리 팀의 repository 가 다른 팀의 repository 내에 있었다. 플랜 변경을 하면서 이번 기회에 Repository 구조도 바꾸게 되어 URL 까지 함께 바뀌게 되었다.

 그러다보니 각자의 로컬에 있는 여러 프로젝트들의 Repository remote URL 을 모두 바꿔야만 했다. 간단하지만 처음 해보는 작업이라 정리해두려 한다.


## Contents

### 1) Git remote repository URL 확인
 가장 먼저 할 작업은 현재 설정되어 있는 상태를 확인하는 것이다. 각 프로젝트의 Git repository 의 Remote URL 이 무엇인지 확인한다.
 
- `git remote -v`
  + fetch 하고 push 할때 어떤 url 로 하는지 확인 할 수 있다.

```shell
$ git remote -v
origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)
origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)
```

- origin
  + repository url의 별칭(alias)
  + reposiory url 이 길기 때문에 사용하는 별칭으로 기본적으로 origin 을 사용한다.
  
- git@gitlab.com:projects/sample1/ABCDE-service.git
  + repository 의 ssh url 


 비슷한 명령어로 `git config --get remote.origin.url` 가 있다. fetch, push 를 나눠서 보여주지 않고 단순히 현재 로컬 git config 에서 설정되어 있는 remote url 을 보여준다.



### 2) Set-Url
 현재의 Repository remote url 을 확인했다면 새로 바뀐 URL 로 변경한다. (sample1 -> sample2)

- `git remote set-url ${REPOSITORY_ALIAS} ${REPOSITORY_NEW_URL}`
  + url 을 변경할 repository 의 별칭과 새로운 URL 을 지정한다.
- origin 이라는 별칭의 repository 의 URL 을 git@gitlab.com:projects/sample2/ABCDE-service.git 로 지정한 뒤, 확인한다.

```shell
# URL 변경
$ git remote set-url origin git@gitlab.com:projects/sample2/ABCDE-service.git

# URL 확인
$ git remote -v
origin  git@gitlab.com:projects/sample2/ABCDE-service.git (fetch)
origin  git@gitlab.com:projects/sample2/ABCDE-service.git (push)
```

### etc: Rename
 set url 명령어로 URL 을 직접 바꾸는 방법 이외에 rename 이라는 명령어로 remote repository url 을 변경하는 방법도 있다. 다만 변경, 추가, 삭제 등의 과정이 늘어나 번거롭다.
 
- 1) 현재 repository 의 별칭을 다른 별칭으로 변경 _(origin -> old_origin)_
  + `git remote rename ${CURRENT_ALIAS} ${NEW_ALIAS}`
- 2) 기존 별칭으로 새로운 URL 의 repositroy 를 추가
  + `git remote add origin ${REPOSITORY_NEW_URL}`
- 3) repository 확인
  + `git remote -v`
- 4) 1) 에서 변경한 별칭의 repository (old_origin) 삭제 
  + `git remote rm ${NEW_ALIAS}`

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

#### error: No such remote
 `rename` 명령어로 repository 별칭(alias)이 아닌 URL 을 변경할 때, 아래와 같은 에러가 뜰 때가 있다. `git remote rename ${OLD_URL} ${NEW_URL}` 에서 OLD_URL 이 이미 없어진 경우 이러한 에러가 나올 수 있다. 
 
 이미 새로운 URL 로 Repository 이행이 끝난뒤에 진행했기에 이 에러가 나왔다. 이전 URL 은 더이상 존재하지 않는 URL 이다. 따라서 `set-url` 명령어를 사용하거나 etc 의 방법을 사용하여 완료했다.
 
```shell
# URL 변경: sample1 -> sample2
$ git remote rename git@gitlab.com:projects/sample1/ABCDE-service.git git@gitlab.com:projects/sample1/ABCDE-service.git
fatal: No such remote: 'git@gitlab.com:projects/sample1/ABCDE-service.git' # 이전 url 을 찾을 수 없다.
```

<br /><br /><br /><br /><br />

--- 
- Refs
  + [Official Github Docs-원격 리포지토리 관리](https://docs.github.com/ko/get-started/getting-started-with-git/managing-remote-repositories)
  + [【Git&GitHub】リモートの変更・削除（git remote renameコマンド）](https://phoeducation.work/entry/20210827/1630018680)
  + [gitのremote urlを変更する(レポジトリ移行時)](https://qiita.com/minoringo/items/917e325892733e0d606e)
  + [원격 저장소의 origin은 어떤 것을 의미할까](https://m.blog.naver.com/rinjyu/222180087428)


