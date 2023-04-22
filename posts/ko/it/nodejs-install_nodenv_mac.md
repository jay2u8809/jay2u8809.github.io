# [Node.js] Install Nodenv (Mac)

- Created: 2022-May-22
- Owners: Ian Jung

<br />

> 💡 설치 파일(*.dmg, *.pkg 등)로 설치했던 node.js 를 삭제하고 `nodenv` 를 이용해 새롭게 설치하려고 한다. 그 후, **nodenv 를 이용해서 프로젝트 별로 다른 node 를 사용**하기 위해 복수의 node 버전을 설치한다.

<br />

# 0. Uninstall Node & Npm
> 설치 파일(*.dmg, *.pkg 등)로 설치한 node.js 가 있다면 먼저 지우도록 하자.

## 0-1) Homebrew 로 설치한 node 를 Uninstall 하는 방법
- 먼저 **homebrew 를 이용해 node 를 설치한 경우**는 아래의 명령어를 통해 삭제할 수 있다.

```shell
    # uninstall npm
    % sudo npm uninstall npm -g

    # unintall node.js
    % brew uninstall node
```

## 0-2) 설치 파일로 설치한 node 를 Uninstall 하는 방법
- 하지만  [Node 공식 사이트](https://nodejs.org/en/download/)에서 설치 파일(*.dmg, *.pkg 등) 을 다운 받아 설치한 경우에는 설치되어있는 각 디렉토리의 파일들을 찾아 하나하나 지워줘야 한다.

```shell
    # uninstall npm
    % sudo npm uninstall npm -g

    # remove node files
    % lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \
    > | while read i; do
    pipe while> sudo rm /usr/local/{i}
    pipe while> done
    rm: /usr/local/{i}: No such file or directory
    rm: /usr/local/{i}: No such file or directory
    rm: /usr/local/{i}: No such file or directory
    ...
    rm: /usr/local/{i}: No such file or directory
    rm: /usr/local/{i}: No such file or directory

    # remove node files
    % sudo rm -rf /usr/local/lib/node \
    > /usr/local/lib/node_modules \
    > /var/db/receipts/org.nodejs.*

    % which node
    /usr/local/bin/node

    # remove node files
    % rm -rf /usr/local/bin/node

    % which node
    node not found

    % which npm
    npm not found
```

# 1. nodenv 를 이용하여 node 를 설치하자
> nodenv 는 다양한 버전의 node 를 설치하여 사용할 수 있도록 해주는 툴Tool 이다. 

- nodenv 를 사용하면 Default 버전의 node 를 지정해두고 **각 프로젝트 별로 다른 node 버전을 설정**할 수 있다.

## 1-1) Install Nodenv

```shell
    # install nodenv
    % brew install nodenv

    # check version
    % nodenv -v
    nodenv 1.4.0
```

- Nodenv 를 사용하기 위해 시스템 환경 변수에 등록한다.
```shell
    # 시스템 환경 변수를 등록한다.
    % vim .zshrc
```

- `.zshrc` 파일
```shell
    ...
    ...
    ### Nodenv Setting ###
    export PATH="$HOME/.nodenv/bin:$PATH"
    eval "$(nodenv init -)"
```

## 1-2) Install Node.js
> Nodenv 를 이용하여 nodejs 를 설치해보자.

### 1-2-1) Nodenv 로 설치 가능한 Node.js 버전 확인하기
- 먼저 어떤 버전을 설치할 수 있는지 확인해본다. 대부분의 node.js 버전을 지원하지만 혹시나 지원하지 않는 버전의 node 가 있을수 있으므로 확인한다.
  + *16.15.0* 버전을 설치하려고 하는데 설치가 가능한지 확인해본다.

```shell
    # list all available versions
    % nodenv install -l
    0.1.14
    0.1.15
    0.1.16
    ...
    16.14.2
    16.15.0
    16.15.1
    ...
    iojs-3.3.1
    nightly
    node-dev
    rc
    v8-canary
```

### 1-2-2) Node 설치
- 설치 가능한 버전에 *16.15.0* 이 존재한다. 이제 nodenv 를 이용해 node 16.15.0 을 설치해보자.

```shell
    # install node (ver 16.15.0)
    % nodenv install 16.15.0
    Downloading node-v16.15.0-darwin-x64.tar.gz...
    -> https://nodejs.org/dist/v16.15.0/node-v16.15.0-darwin-x64.tar.gz
    Installing node-v16.15.0-darwin-x64...
    Installed node-v16.15.0-darwin-x64 to /Users/${유저명}/.nodenv/versions/16.15.0
```

- 설치가 완료되었다. 설치한 node 의 버전을 확인해보자. 버전 정보가 잘 나온다면 정상적으로 설치된 것이다.
  + (만약 `node -v` 명령어를 통해 버전 정보가 나오지 않는다면 터미널을 새로 열거나 `source ~/.zshrc` ****를 실행하고 다시 버전을 확인해본다.)

```shell
    # check node version
    (% source ~/.zshrc)
    % node -v
    nodenv: node: command not found

    The `node' command exists in these Node versions:
    16.15.0
```

### 1-2-3) 그 외의 Nodenv 명령어들
> nodenv 를 통해 node 설치는 끝났다. 다른 버전을 설치하고 싶다면 위의 내용을 똑같이 따라하면 된다. 이제부터는 그 외의 nodenv 의 명령어를 알아본다.

#### ① 현재 설치된 node 들의 버전 확인
```shell
    # check installed node list
    % nodenv versions
        16.15.0
        14.7.0
```
    
#### ② Default node version 설정하기
- 여러 버전의 node 가 설치되어 있다면 주력으로 사용하는 기본 버전을 설정할 수 있다.
- Default 버전을 설정하고 node 의 버전을 확인해보자.
```shell
    # setting global node version (Default Version)
    % nodenv global 16.15.0
    % node -v
    v16.15.0
```
    
#### ③ 각 프로젝트 별 node version 설정하기
- 여러 버전의 node 중 해당 프로젝트의 node 버전을 따로 설정할 수 있다.
- 사용하는 node 의 버전이 Default 버전과 다를 경우 설정한다.
- 해당 프로젝트의 디렉터리로 이동한 후 아래의 명령어를 실행한다.

```shell
    # setting local node version: after move current directory
    % nodenv local 14.7.0
```
    
#### ④ Nodenv 최신화하기
- Nodenv 에서 지원하지 않는 Node 버전있다면 Nodenv 자체를 업데이트 해본다.
- Brew 를 통해 최신으로 업데이트 한다.

```shell
    % brew upgrade nodenv node-build
```

<br /><br /><br />

---
- Refs
    - [Nodenv Github](https://github.com/nodenv/nodenv#readme)