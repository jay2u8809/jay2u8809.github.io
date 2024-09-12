---
slug: /programming/nodejs/how-to-install-nodenv
# id: how-to-install-nodenv
title: 여러 버전의 node.js 관리하기
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nodejs,
  nodenv,
  node version,
  homebrew,
]
keywords: [
  devian-lab,
  Jobː談,
  nodejs,
  nodenv,
  node version,
  homebrew,
]
description: Nodenv를 설치하여 여러 버전의 Node.js 를 관리하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Nodenv 로 여러 버전의 node.js 관리하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-05-22",
  "updatedAt": "2022-01-01"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-05-22
  updatedAt: 2022-01-01
```


---

> Nodenv 는 Mac과 Linux 에서만 사용 가능하다.

## 1. Install Nodenv

  
  ### 1-1) install

    ```shell
      $ brew install nodenv
    ```    

  ### 1-2) check version
  
    ```shell
      $ nodenv -v
      
        nodenv 1.4.0
    ```

  ### 1-3) Nodenv 를 사용하기 위해 시스템 환경 변수에 등록

    ```shell
      $ vim .zshrc
    ```

    - `.zshrc` 파일

      ```
        ...
        ...

        ### Nodenv Setting ###
        export PATH="$HOME/.nodenv/bin:$PATH"
        eval "$(nodenv init -)"
      ```

  

## 2. Install Node.js
  
  ### 2-1) Nodenv 로 설치 가능한 Node.js 버전 확인

    어떤 버전의 node.js 를 설치할 수 있는지 확인. 대부분의 node.js 버전을 지원하지만 지원하지 않는 버전이 있을수 있으므로 확인이 필요하다.

      - 설치할 수 있는 모든 node.js 버전 확인

        ```shell
          $ nodenv install -l

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
    
      - 특정 버전만 확인 

        ```shell
          $ nodenv install -l | grep 16.15.0

            16.15.0
        ```

        + 16 버전만 확인
            
          ```shell
            $ nodenv install --list | grep -e "^16"

              16.0.0
              16.1.0
              ...
              16.20.1
              16.20.2
          ```

  ### 2-2) install Node

    ```shell
      $ nodenv install 16.15.0

      Downloading node-v16.15.0-darwin-x64.tar.gz...
      -> https://nodejs.org/dist/v16.15.0/node-v16.15.0-darwin-x64.tar.gz
      Installing node-v16.15.0-darwin-x64...
      Installed node-v16.15.0-darwin-x64 to /Users/${유저명}/.nodenv/versions/16.15.0
    ```

  ### 2-3) Node.js 버전 확인

    - node version
      
      ```shell
        $ node -v

        v16.15.0
      ```

    - 아래와 같이 버전 정보가 나오지 않는다면 터미널을 새로 열거나 `source ~/.zshrc` 를 실행하고 다시 버전을 확인한다.

      ```shell

        $ node -v

        nodenv: node: command not found
        The `node' command exists in these Node versions:
          16.15.0
      ```

      + shell 환경변수 적용하는 명령어
       
        ```shell
          $ source ~/.zshrc
        ```




## 3. 그 외의 Nodenv 명령어들

  ### 3-1) 현재 설치된 node.js 들의 버전 확인

  - check installed node list

    ```shell
      $ nodenv versions

        16.15.0
        14.7.0
    ```

  ### 3-2) Default node version 설정

    - 여러 버전의 node 가 설치되어 있다면 주력으로 사용하는 기본 버전을 설정할 수 있다.
    
      ```shell
        $ nodenv global 16.15.0
      ```

      ```shell
        $ node -v

          v16.15.0
      ```

  ### 3-3) 각 프로젝트 별 node version 설정

    - 여러 버전의 node 중 해당 프로젝트의 node 버전을 따로 설정할 수 있다.
    - 사용하는 node 의 버전이 Default 버전과 다를 경우 설정
    - 해당 프로젝트의 디렉터리로 이동한 후 아래의 명령어를 실행

      ```shell
        $ nodenv local 14.7.0
      ```

  ### 3-4) Nodenv 최신화

    - Nodenv 에서 지원하지 않는 Node 버전있다면 Nodenv 자체를 업데이트 해본다.
      + Brew 를 통해 최신으로 업데이트

    ```shell
      $ brew upgrade nodenv node-build
    ```

  
## 4. Uninstall Node.js & Npm

  ### Homebrew 로 설치한 node.js 를 Uninstall

    - uninstall npm

      ```shell
        $ sudo npm uninstall npm -g
      ```

    - unintall node.js

      ```shell
        $ brew uninstall node
      ```

  ### 설치 파일로 설치한 node 를 Uninstall

    - [Node 공식 사이트](https://nodejs.org/en/download/)에서 설치 파일(`*.dmg`, `*.pkg` 등) 을 다운 받아 설치한 경우, 설치되어있는 각 디렉토리의 파일들을 찾아 하나하나 지워야 한다.

      + uninstall npm

        ```shell
          $ sudo npm uninstall npm -g
        ```
      + remove node files
      
        ```shell
          $ lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \
            > | while read i; do
            pipe while> sudo rm /usr/local/{i}
            pipe while> done

          rm: /usr/local/{i}: No such file or directory
          rm: /usr/local/{i}: No such file or directory
          rm: /usr/local/{i}: No such file or directory
          ...
          rm: /usr/local/{i}: No such file or directory
          rm: /usr/local/{i}: No such file or directory

        ```

        ```shell
          $ sudo rm -rf /usr/local/lib/node \
            > /usr/local/lib/node_modules \
            > /var/db/receipts/org.nodejs.*
        ```

        ```shell
          $ which node
            /usr/local/bin/node

          $ rm -rf /usr/local/bin/node

          $ which node
            node not found

          $ which npm
            npm not found
        ```





<br /><br /><br /><br /><br />

---
- Refs
  + [Nodenv Github](https://github.com/nodenv/nodenv#readme)
  + [【nodenv】インストールできるバージョンの最新化](https://qiita.com/jozuo-dev/items/223430e554c1f5f20320)