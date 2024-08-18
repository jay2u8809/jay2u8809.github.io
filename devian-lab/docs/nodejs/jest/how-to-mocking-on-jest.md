---
# slug: /wiki/nodejs/jest/how-to-mocking-on-jest
id: how-to-mocking-on-jest
title: Mocking 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  nodejs,
  javascript,
  typescript, 
  jest,
  unit test, 
  mocking, 
  mock,
]
# sidebar_position: 1
---

<!--title -->
# [Jest] Mocking 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-05-27",
  "updatedAt": "2024-08-17"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-05-27
  updatedAt: 2024-08-17
```

---

## Test Target

  - Nest.js Application Code
  - **Test Target Method**: `fetchUser`, `getUser`

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


## Mocking private method 

  - Target Method: `UserSerivce.getUser`

  #### - jest.spyOn 메소드를 이용한 Mocking 방법

    - `jest.spyOn` 함수: Mocking 용 함수나 값을 만들어주는 메소드.
    - private 메소드가 있는 **class 를 any 타입으로 형 변환** 하여 mocking 메소드를 만들어준다.
    - mocking 한 메소드가 호출되었는지 확인하기 위해 `toHaveBeenCalled` or `toHaveBeenCalledTimes` 메소드를 활용한다.

      ```typescript
        describe('UserServiceSpec', () => {
          let user: UserService;

          beforeEach(async () => {
            const module: TestingModule = await Test.createTestingModule({
              providers: [UserService],
              imports: [UserModule],
            }).compile();

            user = module.get<UserService>(UserService);
          });

          it('mocking private method', async () =>{
            // given
            const id = 'test_id';
            const getUser = jest
              .spyOn(user as any, 'getUser')  // user 클래스의 getUser 를 mocking
              .mockImplementation(async () => {
                return {id: 'mock-user'};
              });
            // when & then
            expect(getUSer).toHaveBeenCalled();
            expect(getUSer).toHaveBeenCalledTimes(1);
          }, 999_999_999);
        });
      ```



## Mocking class

  - Mocking 하려는 메소드가 있는 class 를 상속해 Mocking 용 class 를 만드는 형태로도 Mocking 이 가능하다.
    + UserService 의 fetchUser 메소드나 생성자 등을 **오버라이딩** 하는 형태로 Mocking 한다.


  #### - overrideProvider 메소드를 이용한 Mocking 방법

    - Mocking 한 class 를 jest 에서 사용하기 위해서는 Mocking 한 class 가 있는 module 에서 오버라이드Override 해야한다.

      ```typescript
        // fetchUser 메소드를 Mocking 하기 위해 UserService class 를 상속해 새로운 class 를 만든다.
        class MockUserService extends UserService {
          async fetchUser(id: string): Promise<User> {
            if (!id) {
              throw new Error('no exist id');
            }
            // mocking code
            return {
              id: 'mock-user-id',
            };
          }
        }

        describe('UserServiceSpec', () => {
          let user: UserService;

          beforeEach(async () => {
            const module: TestingModule = await Test.createTestingModule({
              providers: [MockUserService], // provider 로서 Mocking 용 class 를 지정
              imports: [UserModule],
            })
            .overrideProvider(UserService)  // UserService class 를 override 
            .useClass(MockUserService)      // override 할 class 지정(MockUserService class)
            .compile();

            user = module.get<UserService>(UserService);
          });

          it('should be defined', () => {
            expect(user).toBeDefined();
          })
        });
      ```





<br /><br /><br /><br /><br />

--- 
- Refs:
  + [NestJS 10 | Unit Test - JEST](https://velog.io/@hkja0111/NestJS-10-Unit-Test-JEST)
  + [Testing private method using spyOn and Jest](https://stackoverflow.com/questions/62171602/testing-private-method-using-spyon-and-jest)