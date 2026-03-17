---
slug: /tools/wsl/how-to-use-vscode
# id: how-to-use-vscode
title: WSL에서 VS Code 사용방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  wsl,
  vscode,
]
keywords: [
  devian-lab,
  Jobː談,
  wsl,
  vscode,
]
description: WSL 에서 VS Code 를 열어 사용하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# WSL 에서 VS Code 사용하기
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

## Install VS Code

  - VS Code 다운로드 후 설치
    + [Download Visual Studio Code](https://code.visualstudio.com/download)
    + [WSL Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 설치
      - VS Code 에서 WSL 에 접근하기 위해서는 플러그인 설치가 필요

## VS Code 실행

  - "Windows + s 키"로 ubuntu 를 검색해서 ubuntu 를 실행 후, vs code 를 실행할 경로로 이동한 뒤 `code .` 명령어 실행

    + move working directory

      ```shell
        $ cd ~/Documents
      ```

    + exec vs code
    
      ```shell  
        $ code .
      ```






<br /><br /><br /><br /><br />

---
- Refs
  + [Linux용 Windows 하위 시스템에서 Visual Studio Code 사용 시작](https://learn.microsoft.com/ko-kr/windows/wsl/tutorials/wsl-vscode)
  + [Visual Studio CodeのインストールとUbuntu on WSL2への接続](https://qiita.com/hiropon1839/items/0f48d85733ad0c85b3b1#vs-code%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%A9%E3%83%BC%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89)