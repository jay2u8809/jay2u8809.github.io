---
slug: /programming/nodejs/jest/how-to-do-unit-test-on-jest
# id: how-to-do-unit-test-on-jest
title: Unit Test 방법
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
]
keywords: [
  devian-lab,
  Jobː談,
  nodejs,
  javascript,
  typescript, 
  jest,
  unit test,
]
description: Jest 를 이용해 테스트를 하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# [Jest] Unit Test 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-08-18",
  "updatedAt": "2024-08-18"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-08-18
  updatedAt: 2024-08-18
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
          throw new NoUserException('no exist id');
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

## Check Error

  - 에러가 알맞는 Error Object (_NoUserException_) 인지, 알맞는 Message (`no exist id`) 인지 체크 

### toThrowError

  - _비동기처리 Code_ 를 테스트할 때는 Test 의 결과도 Promise 이다. 
    + `await` 와 `rejects` or `resolves` 를 이용해 코드를 작성한다.

  - Test code 1

    ```typescript
      it('error: no exist id', async () =>{
        // given
        const id = 'test_id';
        const testFunc = async () => {
          await fetchUser(id);
        };
        // when & then
        await expect(() => testFunc()).rejects.toThrowError(new NoUserException('no exist id'));
      }, 999_999_999);
    ```

  - Test code 2 (Test code 1 과 동일한 내용)

    ```typescript
      it('error: no exist id', async () =>{
        // given
        const id = 'test_id';
        // when & then
        await expect(fetchUser(id)).rejects.toThrowError(new NoUserException('no exist id'));
      }, 999_999_999);
    ```



## Object 비교
  
  - 객체Object의 모든 키Key와 값Value이 예상한 값과 동일한지 비교한다.

### toStrictEqual

  - Test Code

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
  + [Mastering Unit Testing With NestJS](https://dev.to/ehsaantech/mastering-unit-testing-with-nestjs-37g9)
  + [【Jest入門】Errorの評価しよう~toThrow関数~](https://qiita.com/YSasago/items/b5aae0c35a629f834752)
  + [[Jest] throw Matcherで例外処理のテストを実装してみた](https://dev.classmethod.jp/articles/testing-exception-handling-with-jest/)
  + [How can I test for object keys and values equality using Jest?](https://stackoverflow.com/questions/47754777/how-can-i-test-for-object-keys-and-values-equality-using-jest)