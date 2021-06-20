---
layout: post
title: "[NodeJs] Nest.Js를 시작해보자"
categories: [NodeJs]
tags:
  - programming
  - nodejs
  - nestjs
author: J.ian
last_modified_at: 2021-06-20
---

> `구조`를 가지고 있는 Node.js 프레임워크 `Nest.js`를 시작해보자

## Nest.js란?
- Node.js의 여러 프레임워크 중 하나로서 Express 기반의 프레임워크이다.
- 자바의 스프링Spring 프레임워크나 루비의 레일즈Rails, 파이썬의 쟝고Django와 같이 `구조(Frame)`를 가지고 있는 것이 특징이다.

## 구조를 가진 프레임워크?
- Node.js는 자바스크립트로 백엔드를 만들수 있는 기술이지만 스프링이나 레일즈처럼 구조화 된 프레임워크는 아니다.     
예를 들어 MVC 패턴에 맞춰 모델, 뷰, 컨트롤러를 구성할 때 스프링의 경우 스프링의 규칙(Bean의 생성과 설정, 어노테이션의 선언 등)을 따르기만 금방 웹 어플리케이션을 만들 수 있다. 특정 어노테이션을 사용하면 금방 컨트롤러와 서비스, 엔티티 등을 생성하여 사용 할 수 있다.      
Node.js의 경우 그러한 규칙이 없기 때문에 개발자들이 프로젝트에 따라 자유롭게 규칙을 만들어 컨트롤러와 서비스 등을 만들어야만 한다. 그리고 이것은 엄청난 장점이자 단점이 될 수 있다. 소규모 프로젝트의 경우 간단한 규칙과 구조로 금방 어플리케이션을 생성하고 배포할 수 있는 장점이 되지만, 대규모 프로젝트의 경우 만들어야할 규칙과 구조가 복잡해지기 때문에 오히려 프로젝트에 부담으로 될 수 있다.
- Node.js로 대규모 프로젝트를 진행하기 위해서 `구조(Frame)`가 있는 프레임워크로 **`Nest.js`** 가 나오게 되었다.

## Nest.js 시작하기
### 1) Nest.js 설치하기
- Node.js는 설치되어있다는 전제로 Nest.js를 설치하고 시작해본다.
- Nest.js를 사용하기 위해 `nestjs/cli` 를 설치한다.
```shell
    $ npm i -g install @nestjs/cli
```
※ `nest` 를 입력하면 nest.js 관련 명령어를 확인할 수 있다.
```shell
    $ nest
```

### 2) Nest.js 프로젝트 생성하기
- Nest.js를 사용할 프로젝트를 생성한다.
- npm / yarn 중 하나를 선택하라는 메시지가 뜨면 일단 `npm`을 선택한다.
```shell
    $ nest new 프로젝트명
```
- 프로젝트가 생성되면 기본적으로 `main.ts`, `app.controller.ts`, `app.module.ts`, `app.service.ts` 4개의 파일이 생성되어있다.

### 3) main.ts
- 어플리케이션을 시작시키는 파일로서 파일명을 변경시지 않도록 한다. (Entry File)
- `app.module.ts`을 이용해 컨트롤러, 서비스 등의 리소스들을 실행할 수 있도록 한다.
```typescript
    
    import {    NestFactory }   from '@nestjs/core';
    import {    AppModule }   from './app.module';

    async function bootstrap() {
        // 서버 생성
        const app = await NestFactory.create(AppModule);
        // 서버 실행(포트: 3000)
        await app.listen(3000)
    }
    bootstrap();
```

### 4) app.module.ts
- `@Module()`이라는 decorators를 이용한다.
- 루트Root 모듈로서 어플이케이션에 필요한 리소스들(컨트롤러, 서비스 등)을 명시하고 있다.
```typescript

    import {    Module }   from '@nestjs/common';
    import {    AppController }   from './app.controller';
    import {    AppService }   from './app.service';

    @Module({
        imports: [],
        controllers: [AppController],
        providers: [AppService], 
    })
    export class AppModule{
 
    }
```

### 5) app.service.ts
- 비즈니스 로직을 작성하는 부분
- Controller에서의 요청을 실제 실행하는 부분이다.
```typescript

    import {    
        Injectalbe  
    } from '@nestjs/common';
    import {
        Member
    } from './entities/member.entity';

    @Injectable()
    export class MembersService {

        private members: Member[] = [];

        getAllMembers(): Member[] {
            return this.members;
        }

        getMember(memberSn: number): Member {
            this.members.find(member => member.memberSn === memberSn);
        }
        
        registerMember(savedMember: Member): void {
            this.members.push({
                memberSn: ++this.members.length,
                ... savedMember,
            });
        }
    }
```

### 6) app.controller.ts
- `@Controller()`라는 decorators를 이용한다.
- `EndPoint` 로서 Request를 받아 서비스를 호출하고 Response 해주는 역할을 한다.


---

<br />


