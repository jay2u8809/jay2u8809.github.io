---
slug: /tools/git/github-ssh-key
# id: github-ssh-key
title: SSH Key 생성 및 Github 등록 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  git,
  ssh key,
  github,
]
keywords: [
  devian-lab,
  Jobː談,
  git,
  ssh key,
  github,
]
description: Github 를 사용하기 위해 SSH 를 생성하고 등록하는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# SSH Key 생성해서 Github에 등록하기
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-09-09",
  "updatedAt": "2024-09-09"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-09-09
  updatedAt: 2024-09-09
```

---

## 1. SSH Key 생성

  ### 1-1) SSH 가 존재하는지 확인하기

    ```shell
      $ cat ~/.ssh/id_rsa.pub
    ```

    - SSH Key 가 존재하지 않을 경우

    ```shell
      cat: /Users/${유저명}/.ssh/id_rsa.pub: No such file or directory
    ```

  ### 1-2) SSH Key 생성하기

    ```shell
      $ ssh-keygen

      Generating public/private rsa key pair.
      Enter file in which to save the key (/Users/${유저명}/.ssh/id_rsa): 엔터입력 (SSH-key 생성 위치를 확인한다.)
      Created directory '/Users/${유저명}/.ssh'.
      Enter passphrase (empty for no passphrase): 엔터 or 사용할 비밀번호 입력
      Enter same passphrase again: 엔터 or 사용할 비밀번호 입력
      Your identification has been saved in /Users/${유저명}/.ssh/id_rsa
      Your public key has been saved in /Users/${유저명}/.ssh/id_rsa.pub
      ...
      ...
      The key's randomart image is:
      +---[RSA 3072]----+
      ...
      ...
      ...
      +----[SHA256]-----+
    ```

  - 생성된 SSH Key 확인 

    ```shell
      $ cat ~/.ssh/id_rsa.pub
      
      ssh-rsa ABCD12345EFGH6789...
    ```

    + 또는 아래의 명령어로 `id_rsa`, `id_rsa.pub` 파일을 확인할 수 있다면 생성 완료이다.

      ```shell
        $ cd ~/.ssh/
        $ ls -laF
        
        id_rsa     id_rsa.pub
      ```


## 2. Github 설정

  ### 2-1) “id_rsa.pub” 파일의 내용 복사하기

  - 아래의 명령어로 출력된  `id_rsa.pub` 파일의 내용을 복사한다.
    + *ssh-rsa ~* 전부를 복사
      
      ```shell
        $ cat ~/.ssh/id_rsa.pub
        
        ssh-rsa ABCD12345EFGH6789...
      ```
      

  ### 2-2) Github 설정 페이지 이동

  - 로그인 후, **[Setting]** 페이지로 이동
  - 왼쪽의 메뉴에서 **[SSH and GPG keys]** 를 선택
  - **[New SSH Key]** 버튼을 선택
  - 알맞은 내용을 입력
      - **Title**: 어떤 내용을 입력해도 상관없으나 해당 PC 임을 알 수 있도록 입력
      - **Key type**:  기본 그대로 둔다. (*Authentication Key*)
      - **Key**: 복사한  `id_rsa.pub` 파일의 내용을 붙여넣는다.
  - **[Add SSH key]** 버튼을 눌러 저장




<br /><br /><br /><br /><br />

---
- Refs
