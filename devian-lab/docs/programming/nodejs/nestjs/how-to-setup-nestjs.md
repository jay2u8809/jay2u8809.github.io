---
slug: /programming/nodejs/nestjs/how-to-setup-nestjs
# id: how-to-setup-nestjs
title: 개발 환경 설정
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nest.js,
  개발환경구축,
]
keywords: [
  devian-lab,
  Jobː談,
  nest.js,
  개발환경구축,
]
description: Nest.js 로 어플리케이션을 개발할 환경을 구축하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Nest.js] 개발 환경 설정(Mac)
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-12-15",
  "updatedAt": "2022-12-15"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-12-15
  updatedAt: 2022-12-15
```


---


## 1. Nest.js 

  ### 1-1) Nest.js 설치

    - Install nest.js

      ```shell
        $ npm i -g @nestjs/cli
      ```
    - version
    
      ```shell
        $ nest -v
          8.2.6
      ```

  ### 1-2) Nest.js 프로젝트 생성

    - 아래의 명령어를 실행하면 testApp 이란 디렉토리에 Nest.js 프로젝트가 생성된다.
    
      ```shell
        $ nest new testApp
      ```

    - 실행 결과
    
      ```shell
        $ nest new ${PROJECT_NAME}
        ⚡  We will scaffold your app in a few seconds..

        CREATE ${PROJECT_NAME}/.eslintrc.js (665 bytes)
        CREATE ${PROJECT_NAME}/.prettierrc (51 bytes)
        CREATE ${PROJECT_NAME}/README.md (3340 bytes)
        CREATE ${PROJECT_NAME}/nest-cli.json (118 bytes)
        CREATE ${PROJECT_NAME}/package.json (2005 bytes)
        CREATE ${PROJECT_NAME}/tsconfig.build.json (97 bytes)
        CREATE ${PROJECT_NAME}/tsconfig.json (546 bytes)
        CREATE ${PROJECT_NAME}/src/app.controller.spec.ts (617 bytes)
        CREATE ${PROJECT_NAME}/src/app.controller.ts (274 bytes)
        CREATE ${PROJECT_NAME}/src/app.module.ts (249 bytes)
        CREATE ${PROJECT_NAME}/src/app.service.ts (142 bytes)
        CREATE ${PROJECT_NAME}/src/main.ts (208 bytes)
        CREATE ${PROJECT_NAME}/test/app.e2e-spec.ts (630 bytes)
        CREATE ${PROJECT_NAME}/test/jest-e2e.json (183 bytes)

        # 자신이 사용하는 패키지 관리 프로그램(npm, yarn, ... etc)을 선택
        ? Which package manager would you ❤️  to use? npm
        ✔ Installation in progress... ☕

        🚀  Successfully created project ${PROJECT_NAME}
        👉  Get started with the following commands:

        $ cd ${PROJECT_NAME}
        $ npm run start

                                                
                                  Thanks for installing Nest 🙏
                        Please consider donating to our open collective
                                to help us maintain this package.
                                                
                                                
                      🍷  Donate: https://opencollective.com/nest
      ```

  ### 1-3) Nest.js 프로젝트 앱 실행
    - 프로젝트 디렉토리로 이동하여 run
      + `localhost:3000` 으로 접속하면 **Hello World!** 가 웹페이지에 나온다

      ```shell
        # move project directory
        $ cd ${PROJECT_NAME}

        # run project app
        $ npm run start

        > ${PROJECT_NAME}@0.0.1 start
        > nest start

        [Nest] 12705  - 2022. 05. 28. 오후 9:11:55     LOG [NestFactory] Starting Nest application...
        [Nest] 12705  - 2022. 05. 28. 오후 9:11:55     LOG [InstanceLoader] AppModule dependencies initialized +162ms
        [Nest] 12705  - 2022. 05. 28. 오후 9:11:55     LOG [RoutesResolver] AppController {/}: +5ms
        [Nest] 12705  - 2022. 05. 28. 오후 9:11:55     LOG [RouterExplorer] Mapped {/, GET} route +4ms
        [Nest] 12705  - 2022. 05. 28. 오후 9:11:55     LOG [NestApplication] Nest application successfully started +3ms
      ```

## 2. PostgreSQL

  > Docker 를 이용해 PostreSQL 을 사용하도록 설정

  - 참고: [Docker(Podman) 설치하기]('http://localhost:3000/docs/tools/docker/how-to-install-docker')

  ### 2-1) Docker-Compose 파일 작성

  - 프로젝트의 Root 위치에 `docker-compose.yaml` 파일을 생성하여 아래의 내용을 작성

    ```yaml
      version: '3'
      services:
        db:
          image: postgres:14
          ports:
            - '5433:5432'
          restart: always
          environment:
            POSTGRES_USER: DB_유저명
            POSTGRES_PASSWORD: DB_비밀번호
            POSTGRES_DB: DB이름
          container_name: postgres-db
          volumes:
            - ./docker/pgdata:/var/lib/postgresql/data
      volumes:
        pgdata:
    ```

  ### 2-2) Docker  Build

    - Docker Desktop 를 실행한 뒤, 아래의 명령어를 실행한다.
      + yaml에 정의된 컨테이너 빌드 및 실행

        ```shell
          $ docker-compose up --build
        ```

      + 참고: 그 외의 실행 옵션

      ```shell
        # Docker 로그를 보면서 실행
        $ docker-compose up
        
        # 백그라운드에서 실행
        $ docker-compose up -d
      ```

    #### 동작 확인
      - Docker Desktop 의 [Containers/Apps] 메뉴에서 yaml 파일의 container_name 이 실행되는 지 확인
      - 프로젝트의  Root 위치에 _docker/pgdata_ 라는 디렉토리가 생성되었는지 확인
        + `.gitignore` 파일에 등록
      - DB에 접속이 되는지 확인
        + DBeaver 등의 DB Client 를 사용하는 경우
          - **Database**: `services.db.POSTGRES_DB` 의 값
          - **Username**: `services.db.POSTGRES_USER` 의 값
          - **Password**: `services.db.POSTGRES_PASSWORD` 의 값
          - **Port**: 5433. (`services.db.ports` 값)
    
    #### 종료
      - Docker Desktop: [Containers/Apps] 메뉴에서 정지
      - Terminal:  `ctrl + c` or `docker stop ${CONTANINER_NAME}`
        
        ```shell
          # 현재 실행 중인 Container 확인
          $ docker ps
          
          CONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS         PORTS                    NAMES
          3fd4fds3fs31   postgres:14   "docker-entrypoint…"   About an hour ago   Up 9 seconds   0.0.0.0:5433->5432/tcp   postgres-db
          
          # Container Name 으로 종료
          $ docker stop postgres-db
          
          # Container Id 로 종료할 경우
          $ docker stop 3fd4fds3fs31
        ```
        

## 3. NoSQL

  > Docker 를 이용해 DynamoDB or Redis 를 로컬에서 실행할 수 있도록 한다.

  ### Dynamodb-local

    - AWS에서 제공하는 Dynamodb의 로컬 버전 Docker Container
      + [Docker Hub: amazon/dynamodb-local](https://hub.docker.com/r/amazon/dynamodb-local)
      + [AWS 공식 문서: Dynamodb-local docker](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
    
    #### docker-compose.yaml 파일 수정
      - services 에 `dynamodb-local` 을 추가

      ```yaml
        version: '3'
        services:
          db:
            image: postgres:14
            ...
            (중략)
            ...
          dynamodb-local:
            command: "-jar DynamoDBLocal.jar -sharedDb -dbPath ./data"
            image: "amazon/dynamodb-local:latest"
            container_name: dynamodb-local
            ports:
              - "8000:8000"
            volumes:
              - "./docker/dynamodb:/home/dynamodblocal/data"
            working_dir: /home/dynamodblocal
      ```

      - Docker Container 를 실행

        ```shell
          $ docker-compose up -d

          Starting dynamodb-local    ... done
          Creating postgres-db       ... done
        ```

    #### 동작 확인
      - 프로젝트 Root 위치에 docker/dynamodb 디렉토리가 생성되었는지 확인
      - 아래의 명령어를 실행하여 결과가 출력되는지 확인
          
          ```shell
            # dynamodb table 리스트 확인
            $ aws dynamodb list-tables --endpoint-url http://localhost:8000
          ```

          + 정상 연결 된 경우

            ```text
              {
                  "TableNames": []
              }
            ```
          
          + 연결되지 않은 경우 

            ```text
              Could not connect to the endpoint URL: "http://localhost:8000/"
            ```
        

  ### Dynamodb-admin
    - AWS Dynamodb-local 을 데이터를 GUI 로 사용할 수 있는 어플리케이션
      + [Docker Hub: aaronshaf/dynamodb-admin](https://hub.docker.com/r/aaronshaf/dynamodb-admin)
    
    #### docker-compose.yaml 파일 수정
      - services 에 `dynamodb-local-admin` 을 추가
        + Access key id, Secret access key, region 등은 더미값을 넣거나 삭제

      ```yaml
        version: '3'
        services:
          db:
            image: postgres:14
            ...
            (중략)
            ...
          dynamodb-local:
            command: "-jar DynamoDBLocal.jar -sharedDb -dbPath ./data"
            image: "amazon/dynamodb-local:latest"
            ...
            (중략)
            ...
          dynamodb-local-admin:
            image: 'aaronshaf/dynamodb-admin:latest'
            container_name: 'dynamodb-local-admin'
            ports:
              - '8001:8001'
            environment:
              DYNAMO_ENDPOINT: dynamodb-local:8000
              AWS_ACCESS_KEY_ID: 'DUMMYIDEXAMPLE'
              AWS_SECRET_ACCESS_KEY: 'DUMMYEXAMPLEKEY'
              REGION: 'eu-west-1'
            depends_on:
              - dynamodb-local
      ```

      - Docker Container 를 실행

        ```shell
          $ docker-compose up -d

          Starting dynamodb-local                 ... done
          Starting postgres-db                    ... done
          Creating dynamodb-local-admin           ... done
        ```

    #### 동작 확인
      - 웹브라우저 주소창에 `localhost:8001` 을 입력
          - Tables 정보를 확인할 수 있는 화면이 나오는지 확인