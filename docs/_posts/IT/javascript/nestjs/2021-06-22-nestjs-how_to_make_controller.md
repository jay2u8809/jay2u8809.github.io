---
layout: post
title: "[NodeJs] Nest.Js의 컨트롤러"
categories: [NodeJs]
tags:
  - programming
  - nodejs
  - nestjs
  - controller
author: J.ian
last_modified_at: 2021-06-22
---

> Nest.js의 `컨트롤러Controller`에 대해 알아봅시다.

## 컨트롤로Controller 란?
- 사용자User의 요청Request이 진입하는 지점(`End Point`)입니다.
- 요청Request에 따라 어떤 처리를 할지 결정합니다. (※ 결정만 할 뿐 **실제 처리는 서비스Service 레이어에서 담당**한다)
- 사용자User에게 응답Response(View 또는 처리된 데이터) 합니다.

---

## 컨트롤러를 만드는 방법
> RestApi의 기본 메소드인 `Get`, `Post`, `Delete`, `Put`, `Patch`를 구현하는 방법을 알아보겠습니다.
데코레이터Decorators를 이용하여 간단하게 만들 수 있습니다.

### 컨트롤러의 생성
- 컨트롤러는 `nest` 명령어를 통해 만들 수 있습니다.
- ex) `nest g co member` or `nest generate controller member`
```shell
    $ nest g co 컨트롤러명  # $ 또는 nest generate controller 컨트롤러명
```
위의 명령어를 이용하면 Module파일의 임포트Import, 데코레이터의 선언 등이 모두 자동으로 이뤄집니다.
- 생성된 컨트롤러 파일을 보시면 `@Controller()` 라는 데코레이터가 존재합니다. `()괄호 안에 URI의 경로`를 선언할 수 있습니다. 
```typescript
    @Controller()
    export class MemberContorller {
        ... 
        생략
        ...
    }

    @Controller('members')
    export class MemberContorller {
        ... 
        생략
        ...
    }
```
- `XX.module.ts` 파일의 @Module 데코레이터 controllers 항목에도 반영되는 것을 확인할 수 있습니다.
- 예를 들어 MemberModule(member.module.ts)이 있다면 아래와 같습니다.
```typescript
    import {    Module  } from '@nestjs/common';
    import {    MemberController    } from '/members/member.controller';

    @Module({
        imports: [],
        controllers: [MemberController],
        providers: [],
    })
    export class MemberModule  {}
```


### Get 메소드
- **`@Get()`** 데코레이터를 사용하여 Get 메소드를 구현할 수 있습니다.
- Spring의 @GetMapping(value="") 과 같은 기능입니다.
- `()괄호에 api 경로 및 리소스ID를 선언`할 수 있습니다.
```typescript
    @Controller('members')
    export class MemberContorller {
        ...
    
        /**
         * @desc
         * Path : ~/members/
         */
        @Get()
        getAllMemberList: Member[] {
            console.log(`Get ALL Member List`);
            const result: Member[] = [];
            return result;
        }

        /**
         * @desc @Query('key') : QueryString의 파라미터 데이터를 받을 수 있습니다.
         * Spring의 @RequestParam(value="keyword", require=false, defaultValue="") String searchKeyword
         * 주의 : @Get('ABC')가 @Get(':id')보다 반드시 위에 선언되어야 합니다.
         * 'ABC' 를 id로 인식할 수 있기 때문입니다.
         * Path : ~/members/search?keyword={검색어}
         */
        @Get('search')
        searchMember(@Query('keyword') searchKeyword: string): Member {
            console.log(`Get Search Function Result, KEYWORD : ${searchKeyword}`);
            const result: Member = {};
            return result;
        }

        /**
         * @desc @Param('key') : Rest 통신의 URI 리소스 식별 데이터를 가져올 수 있습니다.
         * Spring의 @PathVariable("id") int memberSn
         * @Get('/:id') 로도 사용 가능합니다.
         * Path : ~/members/{id}
         */
        @Get(':id')
        getMember(@Param('id') memberSn: number): Member {
            console.log(`Get One Member Result, MEMBER SERIAL NUMBER : ${memberSn}`);
            const result: Member = {};
            return result;
        }

        ...
    }
```

### Post 메소드
- **`@Post()`** 데코레이터를 사용하여 Post 메소드를 구현할 수 있습니다.
- Spring의 @PostMapping(value="") 과 같은 기능입니다.
```typescript
    @Controller('members')
    export class MemberContorller {
        ...

        /**
         * @desc @Body() : Post로 넘어온 데이터
         * Spring의 @RequestBody Member memberInfo
         * Path : ~/members/register/
         */
        @Post('register')
        registerMember(@Body() memberInfo) {
            console.log(`REGISTER MEMBER INFO ${memberInfo}`);
            return memberInfo;
        }

        ...
    }
```

### Delete 메소드
- **`@Delete()`** 데코레이터를 사용하여 Delete 메소드를 구현할 수 있습니다.
- Spring의 @DeleteMapping(value="") 과 같은 기능입니다.
```typescript
    @Controller('members')
    export class MemberContorller {
        ...

        /**
         * @desc 
         */
        @Delete(':id')
        removeMember(@Param('id') memberSn: number): boolean {
            console.log(`REMOVE MEMBER INFO ${memberSn}`);
            return true;
        }

        ...
    }
```

### Put 메소드
- **`@Put()`** 데코레이터를 사용하여 Put 메소드를 구현할 수 있습니다.
- Spring의 @PutMapping(value="") 과 같은 기능입니다.
```typescript
    @Controller('members')
    export class MemberContorller {
        ...

        /**
         * @desc 
         */
        @Put(':id')
        updateMember(@Param('id') memberSn: number, @Body() memberInfo): Member {
            console.log(`UPDATE MEMBER INFO ${memberSn}, ${memberInfo}`);
            const updatedMember: Member = {};
            return updatedMember;
        }

        ...
    }
```

### Patch 메소드
- **`@Patch()`** 데코레이터를 사용하여 Patch 메소드를 구현할 수 있습니다.
- Spring의 @PatchMapping(value="") 과 같은 기능입니다.
```typescript
    @Controller('members')
    export class MemberContorller {
        ...

        /**
         * @desc 
         */
        @Patch(':id')
        patchMember(@Param('id') memberSn: number, @Body() memberInfo:): Member {
            console.log(`PATCH MEMBER INFO ${memberSn}, ${memberInfo}`);
            const patchedMember: Member = {};
            return patchedMember;
        }

        ...
    }
```