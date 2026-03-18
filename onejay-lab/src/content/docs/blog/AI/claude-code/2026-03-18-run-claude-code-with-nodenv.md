---
title: nodenv 환경에서 Node 버전 상관없이 Claude Code 실행하기
date: 2026-03-18
excerpt: nodenv + npm 으로 설치한 claude code 를 node 버전 상관없이 어느 프로젝트에서나 실행할 수 있는 방법을 설명한다.
authors:
  - onejay
tags:
  - AI
  - claude code
  - nodenv
  - node
  - npm
---

> "nodenv + npm 으로 설치한 claude code 를 node 버전 상관없이 어느 프로젝트에서나 실행할 수 있는 방법을 설명한다."

<!-- truncate -->

## 내용

Claude Code 를 설치하는 방법은 여러가지가 있다. curl 로 shell script 를 실행하거나 맥이라면 homebrew 를 사용하거나 node.js 를 사용하는 유저라면 npm 을 이용하는 방법도 있다.

(이 글을 쓰는 시점에 공식사이트를 들어가보면 더 이상 npm 을 이용한 설치는 지원하지 않는 듯하다. [`Deprecated npm installation`](https://code.claude.com/docs/en/setup#deprecated-npm-installation))

나는 node.js 가 익숙한 개발자라 npm 을 이용해 설치했었다. 

- https://www.npmjs.com/package/@anthropic-ai/claude-code

특히 각 프로젝트마다 node.js 의 버전이 달라서 nodenv 를 이용해 프로젝트별로 node 의 버전을 다르게 사용하고 있었다. 그래서 claude code 를 nodenv 의 global 로 설정한 node 버전에 설치를 했다.

이 경우 `.node-version` 파일이 없는 디렉토리나 프로젝트에서는 global 버전의 node 에서 잘 실행할 수 있는데 global 버전이 아닌 프로젝트(각 `.node-version` 파일에 지정한 버전)에서는 아래와 같은 에러로 실행이 되지 않았다.

```shell
$ claude
nodenv: version `22.21.1' is not installed 
```

global 버전이 24.12.0 인데 프로젝트의 버전이 22.21.1 라서 실행이 되지 않는 것이다. 

이런 경우 3가지 정도의 방법이 있다. 

1. IDE 의 플러그인을 사용
2. .node-version 을 임시로 global 버전과 같은 버전으로 변경
3. `NODENV_VERSION=글로벌버전 claude` 으로 실행

### 1. IDE 의 플러그인을 사용

- Visual Studio Code(vscode) 나 WebStorm 등의 IDE 는 Claude Code 플러그인을 지원한다. 이 플러그인들은 node 버전과 관계없이 Claude Code 를 사용할 수 있다.

### 2. .node-version 을 global 버전과 같은 버전으로 변경

- Claude Code 를 실행하고자 하는 프로젝트의 `.node-version` 의 버전을 nodenv 의 global 버전으로 변경해 준다.(임시로)

nodenv 는 `.node-version` 파일이 있는 경우, 그 버전을 참조하여 node 를 실행한다. 따라서 임시로 node 버전을 변경해주면 Claude Code 를 실행할 수 있다.

### 3. `NODENV_VERSION=글로벌버전 claude` 으로 실행

- nodenv 의 환경변수인 `NODENV_VERSION`에 버전을 지정하여 claude 를 실행하면 바로 사용할 수 있다. 

```shell
NODENV_VERSION=24.12.0 claude
```

NODENV_VERSION 환경변수는 특정 node 의 버전을 지정할 수 있는 변수이다. 이 환경변수에 global 버전을 지정하고 claude 를 실행하면 어디에서 실행해도 동일한 node 버전으로 사용가능하다.

귀찮다면 alias 를 이용해 간략하게 설정도 가능하다.


### 결론

`nodenv + npm` 으로 설치한 claude code 는 여러 버전의 node 가 설치된 pc 에서는 사용하기 까다롭다(귀찮다). 

이러한 이유로 Claude Code 측에서도 더 이상 npm 을 이용한 설치는 지원하지 않기로 한 듯하다. Claude Code 를 설치한 PC 에서 언제든지 동일하게 실행할 수 있어야 하는데 node 버전에 따라 실행할 수 없는 케이스도 생기고, 특히나 요즘은 코딩 뿐만 아니라 일반적인 PC 사용에서도 claude code 를 활용하는 경우가 많은데 node 를 따로 설치해야 하는 것은 번거롭기만 하다.

위의 3가지 방식으로 사용하다가 조만간 다른 방식으로 다시 설치해야할 듯하다.

Claude Code 에서 제공하는 마이그레이션 방식은 다음과 같다.

```shell
# Install the native binary
curl -fsSL https://claude.ai/install.sh | bash

# Remove the old npm installation
npm uninstall -g @anthropic-ai/claude-code
```


---
- Refs
  + https://www.npmjs.com/package/@anthropic-ai/claude-code
  + https://code.claude.com/docs/en/setup#deprecated-npm-installation
  + https://code.claude.com/docs/en/setup#migrate-from-npm-to-native
