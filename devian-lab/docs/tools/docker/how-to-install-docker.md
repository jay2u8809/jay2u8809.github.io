---
slug: /tools/docker/how-to-install-docker
# id: how-to-install-docker
title: Docker(Podman) 설치방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  docker,
  podman,
  docker install,
]
keywords: [
  devian-lab,
  Jobː談,
  docker,
  podman,
  docker install,
]
description: Docker 와 Podman 을 설치하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Docker(Podman) 설치하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-09-08",
  "updatedAt": "2024-09-08"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-09-08
  updatedAt: 2024-09-08
```


---

## Ubuntu 에서 Docker 설치 및 삭제

  ### Install Docker

    ```shell
      $ sudo apt update
      $ sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    ```

    - Hello world

    ```shell
      $ sudo docker run hello-world
      ...
      Hello from Docker!
      ...
    ```

  ### Remove Docker

    ```shell
      $ sudo apt remove docker docker-engine docker.io containerd runc
    ```


## Install Podman

> Podman: Redhat 에서 개발한 Container Tool

```text
  Docker Desktop 이 유료화가 되었을 뿐 Docker 자체가 유료화가 되었다는 뜻은 아니다 
  DockerEngine Community Edition(CE) 과 Docker CLI 는 무료이기에 CLI 환경에서 사용한다면 무료로 사용 가능하다.
```

  
## Ubuntu 에서 Podman 설치 
  - `podman-docker`: podman 명령어를 docker 로 사용 할 수 있는 패키지

  ```shell
    $ sudo apt update
    $ sudo apt install -y podman
    
    # optional
    $ sudo apt install podman-docker
  ```

  - docker 의 명령어를 그대로 사용할수 있다.
    + Podman

      ```shell
        $ podman ps

        CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
      ```

    + Docker

      ```shell
          $ docker ps
          
          Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg.
          CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
      ```

      - docker 명령어를 쓰는 경우 `Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg.` 란 메시지가 나온다. 아래의 명령어로 파일을 생성해서 해결한다.

        ```shell
          $ sudo touch /etc/containers/nodocker

          $ docker ps
          
          CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
        ```


## Error

  ### Docker Image 를 Pull 할 수 없다
    - Dockerfile 을 작성해서 build 를 하거나 `podman pull <DOCKER_IMGAE_NAME>` 명령어를 사용할 때 아래와 같은 에러가 발생할 때가 있다.

      ```shell
        Error: error creating build container: short-name "eclipse-temurin:17" did not resolve to an alias and no unqualified-search registries are defined in "/etc/containers/registries.conf"
      ```

      + _short-name_ : docker image 의 별칭(alias). `docker pull ubuntu` 는 `docker pull docker.io/library/ubuntu` 의 short-name 이다.

    - Docker 레지스트리에서 이미지 파일을 찾을 수 없는 것이 원인이므로 아래의 명령어를 실행해 해결한다.

      ```shell
        $ echo "unqualified-search-registries = [\"docker.io\"]" | sudo tee -a /etc/containers/registries.conf
      ```





<br /><br /><br /><br /><br />

---
- Refs
	+ https://podman.io/docs/installation
	+ [ubuntuでpodmanを使うための設定など](https://zokibayashi.hatenablog.com/entry/2022/10/02/225120)
	+ [How to Install and Use Podman on Ubuntu 22.04 & 20.04](https://tecadmin.net/how-to-install-and-use-podman-on-ubuntu-22-04/)
	+ [How to Install Docker on Ubuntu: A Step-By-Step Guide](https://www.simplilearn.com/tutorials/docker-tutorial/how-to-install-docker-on-ubuntu)
	+ [Container image short names in Podman](https://www.redhat.com/sysadmin/container-image-short-names)
	+ [Docker レジストリ の理解](https://docs.docker.jp/registry/introduction.html)
	+ [Podman 기본명령어 튜토리얼](https://qiita.com/leechungkyu/items/50c3d96a69239a7e4f7f)
  + [윈도우 WSL에서 Docker 설치하는 방법](https://www.lainyzine.com/ko/article/how-to-install-docker-on-wsl/)
  + [Docker Desktopのインストール、Dockerfile作成、コンテナビルドと修正](https://qiita.com/hiropon1839/items/2af467975fb31bbb2819)
