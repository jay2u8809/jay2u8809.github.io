![oh-my-zsh](https://ohmyz.sh/img/OMZLogo_BnW.png 'oh-my-zsh')

<br />

# [Mac] oh-my-zsh 세팅하기

- Created: 2022-June-03
- Owners: Ian Jung

<br />

> 누군가는 터미널이 예뻐봤자라는 말을 하겠지만 개발자들만의 터미널 “갬성”이 존재한다. 맥에서 터미널을 쓸 때, 조금더 깔끔하고 예쁘게 쓰기 위해 **Oh-My-Zsh** 을 설치해서 세팅해보자. 특히 맥의 기본 쉘이 zsh이 되었기에 더 간단하게 세팅할 수 있게 되었다.

<br /><br />

# Oh-My-Zsh 설치
- 터미널을 열어 아래의 명령어를 실행한다.
    ```shell
        sh -c "$(curl -fsSL [https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh](https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh))"
    ```

- 명령어를 실행하면 아래와 같이 금방 oh-my-zsh 이 설치된다.
    ```shell
        % sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
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

- 하지만 그 “갬성”이 아니다. 쉘의 입력 부분이 이런 느낌이 아니다. Default 테마를 변경해보자.
    ```shell
        ➜  ~ pwd
        /User/jay
    ```

<br /><br />

# Oh-My-Zsh의 테마를 변경하자
- 테마를 변경하기 위해서는 `.zshrc` 파일에서 테마를 지정해줘야 한다. 홈 디렉토리에서 .zshrc 파일을 수정하자.

## 1. 홈 디렉토리의 **.zshrc** 파일을 연다
```shell
    ➜  ~ vim ~/.zshrc
```

## 2. 편집모드(i) 로 변경하여 테마 설정 항목(**ZSH_THEME**)의 내용을 변경한 뒤, “esc → 콜론(:) → wq → 엔터” 순으로 입력한다.
- 수정 전
    ```shell
        ZSH_THEME="robbyrussell"
    ```

- 수정 후
    ```shell
        ZSH_THEME="agnoster"
    ```

- ※ vim이 어려운 경우, 아래의 명령어로 텍스트 에디터를 열어 수정하고 저장한다.
    ```shell
        ➜  ~ open ~/.zshrc
    ```

## 3. .zshrc 파일의 수정은 바로 적용되지 않으므로 새 터미널을 열거나 아래의 명령어를 통해 바로 적용되도록 한다.
```shell
    ➜  ~ source ~/.zshrc
```

<br />

### ※ 테마를 변경하고 글자가 깨지는 현상이 일어난다.
- 글자가 깨지는 경우에는 “터미널 환경설정(`Cmd + ,`) → 프로파일 → 텍스트 → 서체" 에서 폰트를 변경하면 해결 할 수 있다.
    + 폰트 변경 후 터미널을 재시작하면 적용된다.
    + [네이버 D2Coding 폰트](https://github.com/naver/d2codingfont/releases)를 추천한다.
        - D2Coding-Ver1.3.2-20180524.zip 를 받아 설치했다.

### ※ 이전의 .zshrc 내용이 사라졌다!
- 맥을 설치하고 바로 oh-my-zsh을 설치하여 세팅하는 경우라면 문제가 없다. 하지만 기존에 여러가지 설정을 **.zshrc** 파일에 해 두신 분들은 oh-my-zsh 을 설치하고 모든 설정들이 사라져 당황했을 것이다.
- oh-my-zsh 을 설치하기 **이전의 .zshrc 파일의 내용들은 백업**이 되어있다.
    + 홈 디렉터리에서 `ls -laF` 명령어를 실행하면 **.zshrc.pre-oh-my-zsh.** 라는 파일이 있는데 이 파일이 이전 .**zshrc 의 백업 파일**이다.
        ```shell
            # 이전의 .zshrc 파일의 백업 파일 보기
            % cat ~/.zshrc.pre-oh-my-zsh.
        ```

<br /><br /><br />

---
- Refs
    - [https://iot624.tistory.com/160](https://iot624.tistory.com/160)