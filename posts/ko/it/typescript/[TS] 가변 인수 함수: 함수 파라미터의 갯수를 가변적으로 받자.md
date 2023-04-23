![typescript](../../../../assets/images/common/logo/ts-lettermark-blue.png 'typescript')

<br />

# [TS] 가변 인수 함수: 함수 파라미터의 갯수를 가변적으로 받자

- Created: 2023-Jan-23
- Owners: Ian Jung

<br />

# 가변 인수 함수란?
> 함수를 호출할 때, **전달하는 매개 변수의 갯수를 제한하지 않는 함수**를 말한다.

- 전개 연산자 `(…)` 을 사용해서 선언할 수 있다.
- Sample Code
  + **여러 개의 배열**을 받아 합쳐 하나의 배열로 만드는 함수
    ```tsx
      const merge = (...arr: readonly string[][]): string[] => {
        let result : string[] = [];
        for (let idx=0; idx < arr.length; idx++) {
            const array: string[] = arr[idx];
            result = [...result, ...array];
        }
        return result;
      };

      // 매개 변수 2개
      const array1: string[] = merge(['Hello', 'World'], ['hello', 'world']);
      // result : ['Hello', 'World', 'hello', 'world']

      // 매개 변수 3개
      const array2: string[] = merge(['java', 'script'], ['type', 'script'], ['react', 'vuejs', 'angular']);
      // result : ['java', 'script', 'type', 'script', 'react', 'vuejs', 'angular']
    ```

  + **Generic** 타입으로 선언한 함수
    ```tsx
      const merge = <T>(...arr: readonly T[][]): T[] => {
        let result : T[] = [];
        for (let idx=0; idx < arr.length; idx++) {
          const array: T[] = arr[idx];
          result = [...result, ...array];
        }
        return result;
      };
    ```