---
slug: /tools/how-to-adopt-oh-my-zsh
# id: how-to-adopt-oh-my-zsh
title: oh-my-zsh 세팅 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  shell,
  zsh,
  oh-my-zsh,
]
keywords: [
  devian-lab,
  Jobː談,
  shell,
  zsh,
  oh-my-zsh,
]
description: oh-my-zsh 세팅 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Shell] Mac에서 oh-my-zsh 세팅하기
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

## 1. Oh-My-Zsh 설치
    
  - Command

    ```shell
      sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    ```
    
  - 명령어를 실행하면 아래와 같이 금방 oh-my-zsh 이 설치된다.
    
    ```shell
      $ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
      
      Cloning Oh My Zsh...
      ...
      
      Looking for an existing zsh config...
      Using the Oh My Zsh template file and adding it to ~/.zshrc.
      
              __                                     __   
        ____  / /_     ____ ___  __  __   ____  _____/ /_  
      / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \ 
      / /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / / 
      \____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/  
                              /____/                       ....is now installed!
      
      Before you scream Oh My Zsh! look over the `.zshrc` file to select plugins, themes, and options.
      
      • Follow us on Twitter: https://twitter.com/ohmyzsh
      • Join our Discord community: https://discord.gg/ohmyzsh
      • Get stickers, t-shirts, coffee mugs and more: https://shop.planetargon.com/collections/oh-my-zsh
      
      ➜  ~
    ```
    

## 2. Oh-My-Zsh의 테마 변경

  ### 2-1) 홈 디렉토리의 .zshrc 파일을 연다

    - 테마를 변경하기 위해서는 `.zshrc` 파일에서 테마를 지정해야 한다.
    
      ```shell
        ➜ ~ vim ~/.zshrc
      ```
    
  ### 2-2) 파일 편집 
  
    - 편집모드(i) 로 변경하여 테마 설정 항목(**ZSH_THEME**)의 내용을 변경한다. (`esc → 콜론(:) → wq → 엔터`)
      + _robbyrussell_ -> _agnoster_ 

        ```shell
          ZSH_THEME="agnoster" 
        ```
    
      + vim이 어려운 경우, 아래의 명령어로 텍스트 에디터를 열어 수정하고 저장
    
        ```shell
          ➜  ~ open ~/.zshrc
        ```
    
    - **.zshrc** 파일의 수정은 바로 적용되지 않으므로 새 터미널을 열거나 아래의 명령어를 통해 바로 적용되도록 한다.
      
      ```shell
      ➜  ~ source ~/.zshrc
      ```
    

## Error

  ### 테마를 변경하고 글자가 깨지는 현상

    - _터미널 환경설정(`Cmd + ,`) → 프로파일 → 텍스트 → 서체_ 에서 폰트를 변경하면 해결 할 수 있다.
      + 폰트 변경 후 터미널을 재시작해 적용
    - [네이버 D2Coding 폰트](https://github.com/naver/d2codingfont/releases)

  ### 이전의 .zshrc 내용이 사라졌다!

    - oh-my-zsh 을 설치하면 `.zshrc` 파일의 내용이 리셋된다.
      + 맥을 설치하고 바로 oh-my-zsh을 설치하여 세팅하는 경우라면 문제가 없다. 
    - oh-my-zsh 을 설치하기 **이전의 .zshrc 파일의 내용들은 백업** 이 되어있다.
      + 홈 디렉터리의 `.zshrc.pre-oh-my-zsh.` 라는 파일이 **.zshrc 의 백업 파일**이다.
        
      ```shell
        $ cat ~/.zshrc.pre-oh-my-zsh.
      ```
    

<br /><br /><br /><br /><br />

---
- Refs
  + [Macbook M1 에서 터미널 세팅 (brew, zsh, iterm, oh-my-zsh)](https://iot624.tistory.com/160)