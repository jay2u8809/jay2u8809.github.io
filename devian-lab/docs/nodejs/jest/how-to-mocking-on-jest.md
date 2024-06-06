---
# slug: /wiki/nodejs/jest/how-to-mocking-on-jest
id: how-to-mocking-on-jest
title: Mocking 방법
tags: [devian-lab, wiki, nodejs, js, javascript, ts, typescript, test, jest, mocking, mock]
# sidebar_position: 1
---

<!--title -->
# [Jest] 다양한 Mocking 방법
<!--//title -->

> Jest 로 할 수 있는 다양한 Mocking 방법들
```json
{
  "author": "Onigiri.J",
  "createdAt": "2024-05-27",
  "updatedAt": "2024-05-28"
}
```

## Remark
- Nest.js 프로젝트
- Jest 로 Test 하려는 Method 들은 아래의 UserService 에 있다.

```typescript
export class UserService {
  async fetchUser(id: string): Promise<User> {
    // check parameter
    if (!id) {
      throw new Error('no exist id');
    }
    // return
    return this.getUSer(id);
  }

  // === private ===
  private async getUser(id: string): Promise<User> {
    const user: User = await db.get(id);
    if (!user) {
      return null;
    }
    return user;
  }
}
```


## 알맞는 Error 를 던지는가?
- Remark 의 `UserSerivce.fetchUser` 메소드는 파라미터인 id 가 없다면 에러를 던진다.
- fetchUser 메소드가 알맞는 에러를 던지는지 테스트한다.

### toThrowError
- Test code 를 작성할 때, _비동기처리인 경우_ Test 의 결과가 Promise 이기 때문에 `await` 와 `rejects` or `resolves` 를 이용해 작성해야 한다.

```typescript
  it('error: no exist id', async () =>{
    // given
    const id = 'test_id';
    const testFunc = async () => {
      await fetchUser(id);
    };
    // when & then
    await expect(() => testFunc()).rejects.toThrowError(new Error('no exist id'));
  }, 999_999_999);
```
or 
```typescript
  it('error: no exist id', async () =>{
    // given
    const id = 'test_id';
    // when & then
    await expect(fetchUser(id)).rejects.toThrowError(new Error('no exist id'));
  }, 999_999_999);
```


## Private function mocking
- Remark 의 `UserSerivce.getUser` 메소드는 _private_ 이다.
- 경우에 따라서는 Class 의 private 메소드가 아직 구현되지 않았거나 다른 이유들로 인해서 Mocking 이 필요한 경우가 있다.

### spyOn
- `jest.spyOn` 함수는 Mocking 용 함수나 값을 만들어준다.
- private 메소드가 있는 class 를 _any 타입으로 형 변환_ 하여 mocking 메소드를 만들어준다.
-  `toHaveBeenCalled` 나 `toHaveBeenCalledTimes` 를 이용해 mocking 한 메소드가 제대로 호출되었는지 확인할 수 있다. 

```typescript
  describe('UserServiceSpec', () => {
    let user: UserService;
    let order: OrderService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [UserService, OrderService],
        imports: [UserModule],
      }).compile();

      user = module.get<UserService>(UserService);
      order = module.get<OrderService>(OrderService);
    });

    it('should be defined', () => {
      expect(user).toBeDefined();
      expect(order).toBeDefined();
    });

    it('mocking private method', async () =>{
      // given
      const id = 'test_id';
      const getUser = jest
        .spyOn(user as any, 'getUser')
        .mockImplementation(async () => {
          return {id: 'mock-user'};
        });
      // when & then
      expect(getUSer).toHaveBeenCalled();
      expect(getUSer).toHaveBeenCalledTimes(1);
    }, 999_999_999);
  });

  
```

## Class Mocking
- Remark 의 `UserService` class 를 상속받아 Class 를 Mocking 할수도 있다.
- UserService 의 메소드나 생성자등을 오버라이딩하는 형태로 Mocking 한다.


### overrideProvider
- Mocking 한 Class 를 Jest 에서 사용하기 위해서는 Mocking 한 Class 가 있는 Module 에서 오버라이드를 해야한다.
- 오버라이드하려는 Class 를 대신해 Mocking 한 Class 를 지정해주면 Jest 에서 Mocking 한 Class 를 사용할 수 있다.

```typescript
  class MockUserService extends UserService {
    async fetchUser(id: string): Promise<User> {
      if (!id) {
        throw new Error('no exist id');
      }

      return {
        id: 'mock-user-id',
      };
    }
  }

  describe('UserServiceSpec', () => {
    let user: UserService;
    let order: OrderService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [MockUserService, OrderService],
        imports: [UserModule],
      })
      .overrideProvider(UserService)
      .useClass(MockUserService)
      .compile();

      user = module.get<UserService>(UserService);
      order = module.get<OrderService>(OrderService);
    });

    it('should be defined', () => {
      expect(user).toBeDefined();
      expect(order).toBeDefined();
    })
  });
```

## Object 비교
- 객체의 모든 키와 값이 예상한 값과 동일한지 비교할 수 있다.

### toStrictEqual
```typescript
  it('Object: equal', async () =>{
    // given
    const id = 'test_id';
    // when
    const user = await fetchUser(id);
    // then
    await expect(user).toStrictEqual({id: 'strict-user-id'});
  }, 999_999_999);
```


<br /><br /><br /><br /><br />

--- 
- Refs:
  + [【Jest入門】Errorの評価しよう~toThrow関数~](https://qiita.com/YSasago/items/b5aae0c35a629f834752)
  + [NestJS 10 | Unit Test - JEST](https://velog.io/@hkja0111/NestJS-10-Unit-Test-JEST)
  + [Testing private method using spyOn and Jest](https://stackoverflow.com/questions/62171602/testing-private-method-using-spyon-and-jest)
  + [[Jest] throw Matcherで例外処理のテストを実装してみた](https://dev.classmethod.jp/articles/testing-exception-handling-with-jest/)
  + [https://stackoverflow.com/questions/47754777/how-can-i-test-for-object-keys-and-values-equality-using-jest](https://stackoverflow.com/questions/47754777/how-can-i-test-for-object-keys-and-values-equality-using-jest)
  + [Mastering Unit Testing With NestJS](https://dev.to/ehsaantech/mastering-unit-testing-with-nestjs-37g9)

