---
slug: /programming/nodejs/how-to-increase-nodejs-default-memory
# id: how-to-increase-nodejs-default-memory
title: Heap 메모리 사이즈 설정 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nodejs,
  heap memory,
  memory,
]
keywords: [
  devian-lab,
  Jobː談,
  nodejs,
  heap memory,
  memory,
]
description: Node.js 의 Heap Memory 를 설정하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Heap 메모리의 사이즈를 설정하는 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-29",
  "updatedAt": "2024-08-20"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-29
  updatedAt: 2024-08-20
```


---

## 일시적으로 메모리 사이즈를 설정

  - 일시적으로 메모리가 많이 필요한 작업을 할 경우 변경할 수 있다.
    + 쉘Shell을 종료하면 변경 내용은 사라진다.

  #### Example
  
    - 4GB (1024 * 4) 지정

      ```shell
        $ export NODE_OPTIONS=--max_old_space_size=4096
      ```

    - 8GB (1024 * 8) 지정

      ```shell
        $ export NODE_OPTIONS=--max_old_space_size=8192
      ```


## 메모리 사이즈를 지정해서 Node.js 를 실행

  - node.js 를 실행할 때, 옵션을 주어 메모리 사이즈를 지정할 수 있다.

  #### Example
   
    - ```node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js```

    - Sample Code

      ```shell
        $ node --max_old_space_size=4096 sample-script.js
      ```

## package.json 에서 설정

  node.js 를 실행하는 명령어를 `package.json` 에 설정해 두면 간단하게 메모리 사이즈를 지정해서 실행할 수 있다.

  #### Example
    
    - ``` "start": "node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js" ```

    - Sample Code

      ```json
        {
          // other package.json stuff
          "scripts": {
            "start": "node --max_old_space_size=4096 sample-script.js"
          }
        }
      ```

    - run

      ```shell
        $ npm run start
      ```


<br /><br /><br /><br /><br />

---
- Refs
  + [how to increase nodejs default memory?](https://stackoverflow.com/questions/34356012/how-to-increase-nodejs-default-memory)