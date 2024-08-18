---
slug: /tools/docker/frequently-used-command
# id: frequently-used-docker-command
title: 자주 사용하는 명령어
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  docker,
  command,
]
# sidebar_position: 1
---

<!--title -->
# Docker 명령어
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-08-18",
  "updatedAt": "2024-08-18"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-08-18
  updatedAt: 2024-08-18
```

---

## Docker Commands

  - include Podman commands

### Build

  - Docker

    ```shell
      $ docker build -f Dockerfile -t devian/spring-boot-docker-test:0.0.1 .
    ```

  - Podman

    ```shell
      $ podman build -f Dockerfile -t devian/spring-boot-docker-test:0.0.1 .
    ```

### Run

  - Docker

    ```shell
      $ docker run -p 8080:80 devian/spring-boot-docker-test:0.0.1
    ```

### Stop

  - Docker

    ```shell
      $ docker stop $(docker ps -q)
    ```



## List Container and Image
### List Container (Process)

  - Docker

    ```shell
      $ docker ps
      $ docker ps -a

      $ docker container
      $ docker container -a
    ```

  - Podman

    ```shell
      $ podman ps
      $ podman ps -a

      $ podman container
      $ podman container -a
    ```

### List Image

  - Docker

    ```shell
      $ docker image ls
      $ docker image ls -a
    ```



## Remove Container and Image
<!-- ## Prune -->
### Remove Container (Process)

  - Docker

    ```shell
      $ docker rm ${CONTAINER_ID}
      $ docker rm $(docker ps -q -a)  # remove all container
    ```

  - Podman

    ```shell
      $ podman rm ${CONTAINER_ID}
      $ podman rm -f ${CONTAINER_ID} # force option
    ```

### Remove Image

  - Docker

    ```shell
      $ docker rmi ${IMAGE_ID}
      $ docker rmi $(docker images -q)  # remove all images
    ```

  - Podman

    ```shell
      $ podman rmi ${IMAGE_ID}
      $ podman rmi -f ${IMAGE_ID} # force option
    ```




<br /><br /><br /><br /><br />

---
- Refs
  + [Docker - Commands](https://docs.docker.com/reference/cli/docker/)
  + [Podman - Commands](https://docs.podman.io/en/latest/Commands.html)