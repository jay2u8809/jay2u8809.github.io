---
title: 누구보다 빠르게 최신의 Git 을 설치하려면?
description: Linux Mint 에서 최신 Git 을 설치할 수 있는 방법을 정리한다.
---

<!--title -->
# [Git] Error: does not have a commit checked out 
<!--//title -->

<!-- 
```json
{
	"author": "OneJay",
    "createdAt": "2025-11-30",
  	"updatedAt": "2025-12-03",
    "env": {
      "os": "LinuxMint 22 Cinnamon (Ubuntu 24.04 LTS)"
    }
}
```
-->

```yaml
  author: Dev.OneJay
  createdAt: 2025-11-30
  updatedAt: 2025-12-03
```

---

> Linux Mint 에서 최신 Git 을 설치할 수 있는 방법을 정리한다.



## Summary
- 1) Git PPA 추가
  + `sudo add-apt-repository ppa:git-core/ppa -y`
- 2) Repository 최신화
  + `apt update && apt upgrade`
- 3) Git Install
  + `apt install git`

---

## Contents
### 1) 최신 Git 을 사용하기 위한 PPA 추가
#### 1-1) PPA 란?

> PPA(Personal Package Archive) 는 “개인 패키지 저장소(개인 Repository)” 를 의미한다. 리눅스 공식 Repository 에 없는 프로그램 또는 더 최신 버전을 설치/업데이트하기 위해 쓰는 별도의 Repository 이다.

- 아래의 이유로 PPA 를 사용한다.

  + 1) 아직 공식 Repository 에는 없는 최신 버전 프로그램을 빨리 쓰고 싶을 때
  + 2) 배포판에서 지원하지 않는 서드파티(Third-Party) 프로그램을 apt install 로 설치하고 싶을 때

- PPA를 추가하면 `/etc/apt/sources.list.d/` 아래에 해당 `.list 파일` 이 생기고 그 PPA 서버 주소가 등록된다.
  + 이후 apt update 명령어를 통해 해당 PPA 서버에서 패키지 목록을 받아와, 공식 Repository 와 함께 하나의 목록처럼 패키지를 관리한다.
- PPA 를 사용할 때의 주의점
  + 공식 Repository 가 아니기에 신뢰할 수 있는 PPA 인지 반드시 확인해야 한다.
  + PPA 에서 가져온 패키지가 공식 Repository 의 패키지보다 버전이 더 높은 경우, 충돌을 일으키거나 배포판 업그레이드 시에 문제가 될 수도 있다.
    - 문제가 생기면 해당 PPA 를 제거하고, 문제 패키지를 공식 버전으로 되돌리는 작업이 필요할 수도 있다.


#### 1-2) Git PPA 추가하기

- ① 아래의 명령어를 실행해 git ppa 를 추가한다.

```shell
sudo add-apt-repository ppa:git-core/ppa -y
```

- ② 아래의 명령어로 Repository(Package 저장소)들의 데이터를 최신화한다.

```shell
apt update && apt upgrade
```

이때, 로그를 보면 방금 추가한 _git-core_ ppa 로부터도 최신 패키지 데이터를 받아오는 것을 확인할 수 있다.

```shell
... 생략 ...

받기:10 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu noble InRelease [24.3 kB]                    
... 생략 ...

받기:11 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu noble/main amd64 Packages [3,760 B]
... 생략 ...
```

- ③ 추가한 PPA 확인

  + 아래의 명령어를 통해 추가한 PPA 를 확인할 수 있다.
  
    - ```shell
      ls -laF /etc/apt/sources.list.d/
      ```
      
      + **git-core-ppa-noble.list** 가 있다면 정상적으로 추가된 것이다.
      
  + GUI 로 확인하고 싶다면, 우분투나 리눅스민트에서 _"소프트웨어 소스"_ 라는 프로그램을 실행해보자. 아래와 같이 PPA 에 git-core 가 추가된 것을 확인할 수 있다. (ZorinOS 는 _"소프트웨어 업데이트"_ 에서 확인 가능)

    - ![linux mint software source ppa](https://velog.velcdn.com/images/jay2u8809/post/865b73a7-d1be-498c-8865-07f1657632d6/image.png)


#### 1-3) PPA 를 잘못 추가했다면? - PPA 삭제 

- 혹시나 잘못된 PPA 를 추가했을 경우, 아래의 명령어를 통해 PPA 를 삭제할 수 있다.
  + _ppa_name/ppa_ 에 git-core/ppa 와 같이 ppa 명을 넣어준다.

```shell
sudo apt-add-repository --remove ppa:ppa_name/ppa
```

- _"소프트웨어 소스"_ 에서도 삭제가 가능하다.


### 2) Install Git

PPA 를 추가했으니 최신 Git 을 설치할 수 있다. 

#### 2-1) Git 이 이미 설치되어 있는지 확인하려면?

이미 Git 이 설치되어 있는지, 설치되어 있다면 어떤 버전이 설치되어 있는지는 아래의 명령어를 통해 확인할 수 있다.

```shell
git --version
```
 
Git 이 설치되어 있지 않다면 아래와 같이 Git 이 없으니 설치할 수 있는 명령어를 알려주는 메시지가 나온다.

```shell
명령어 'git' 을(를) 찾을 수 없습니다. 그러나 다음을 통해 설치할 수 있습니다:
sudo apt install git
```

#### 2-2) Git 설치하기

이제 아래의 명령어를 실행해 Git 을 설치하자

```shell
sudo apt install git
```

중간에 설치를 계속하겠냐는 질문이 나오면 y 를 입력하고 진행한다.

```shell
... 생략 ...

0개 업그레이드, 3개 새로 설치, 0개 제거 및 0개 업그레이드 안 함.
9,477 k바이트 아카이브를 받아야 합니다.
이 작업 후 38.3 M바이트의 디스크 공간을 더 사용하게 됩니다.
계속 하시겠습니까? [Y/n] y

... 생략 ...

```

이때, 로그를 보면 방금 전에 추가한 _git-core_ ppa 로부터 git 을 다운로드 받는 것을 확인할 수 있다.

```shell
... 생략 ...

받기:2 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu noble/main amd64 git-man all 1:2.52.0-0ppa1~ubuntu24.04.1 [2,303 kB]
받기:3 https://ppa.launchpadcontent.net/git-core/ppa/ubuntu noble/main amd64 git amd64 1:2.52.0-0ppa1~ubuntu24.04.1 [7,148 kB]
내려받기 9,477 k바이트, 소요시간 39초 (243 k바이트/초)  

... 생략 ...
```

#### 2-3) 확인하기

설치가 완료되면 다시 한번 `git --version` 명령어를 실행해 버전이 제대로 나오는지 확인한다.

```shell
$ git --version
git version 2.52.0
```

지금 설치한 Git 의 버전은 `2.52.0` 이다. 과연 이 버전이 최신 버전일까 확인해보자. (2025.11.30 기준) 

- [Git](https://git-scm.com/install/source) 사이트에서 확인한 버전은 2.52.0 이 현재 가장 최신 버전이었다.

  + ![git-scm latest version](https://velog.velcdn.com/images/jay2u8809/post/98deae61-fcc1-495a-8078-c2d7a2f28b81/image.png)

- Github 의 [git Repository](https://github.com/git/git/tags) 에서도 릴리즈 태그를 확인해보니 역시나 2.52.0 이 최신 버전임을 확인 할 수 있었다.

  + ![git repo tags](https://velog.velcdn.com/images/jay2u8809/post/db7c067d-5e4f-41a5-a75f-2337551dccb0/image.png)

---

## Conclusion

Linux Mint 에서 최신 Git 을 설치하는 방법을 정리해보았다. 

사실 Git 은 PPA 를 추가해서 설치할 필요까지는 없다. PPA 를 추가하지 않고 리눅스 기본 Repository 에 있는 Git 패키지를 설치하는 것이 오히려 더 안전한 방법이라고 생각한다. Git 이 아닌 정말 최신 버전의 프로그램이나 사용하는 리눅스 배포판에서 제공하지 않는 프로그램을 설치해야할 때 사용하면 좋을 듯하다.

다만 이번 기회를 통해 리눅스의 패키지 Repository 에 대해 알아보고 싶었다. 간혹 apt 를 통해 패키지를 설치할 때 ppa 를 추가하는 경우가 있었는데 그때마다 ppa 가 무엇인지, 왜 ppa 라는 것을 추가하는 것인지, 기본 Repository 와는 어떤 차이가 있는지 궁금했다. 그동안 찾아보지 않고 그냥 블로그나 공식 매뉴얼, AI 가 시키는대로 했지만 이번 기회를 통해 조금이나마 알아보고 싶었다. (Mac 은 Brew 에서 모든 것이 가능했던 것 같다.)

마지막으로 PPA 를 추가하기 전에 설치한 Git 버전과 PPA 추가 후에 설치한 버전의 차이가 있는지 확인했다면 더 좋았을 것이라는 아쉬움이 남는다.

---
- Refs
  + [git-scm - Install](https://git-scm.com/install/linux)
  + [[리눅스] Ubuntu 진짜 최신 버전 Git 설치하기 - PPA](https://imlookingformyjob.tistory.com/entry/%EB%A6%AC%EB%88%85%EC%8A%A4-Ubuntu-%EC%A7%84%EC%A7%9C-%EC%B5%9C%EC%8B%A0-%EB%B2%84%EC%A0%84-Git-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-PPA)
  + [Linux-Console.net - Ubuntu Linux에서 PPA를 제거하거나 삭제하는 방법](https://ko.linux-console.net/?p=19560)