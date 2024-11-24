---
slug: 2022-09-07-how-to-use-filter-func
title: Typescript - filter 함수의 사용법 
authors: [devian]
tags: [
  devian-lab, 
  dev-posts,
  JavaScript,
  TypeScript,
  filter 함수,
]
keywords: [
  devian-lab,
  Jobː談,
  javascript,
  typescript,
  js,
  ts,
  filter,
  자바스크립트,
  타입스크립트,
  필터함수,
]
description: 자바스크립트의 Filter 함수에 대해 알아본다.
---

<!--title -->
# [Jobː談] AWS Lambda Storage Limit Error 해결: Prune Plugin
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-09-07",
  "updatedAt": "2023-01-01"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-09-07
  updatedAt: 2023-01-01
```

---

> "자바스크립트에서 자주 사용하는 함수 중 filter 함수의 사용법을 정리해 본다."

<!-- truncate -->

## Intro

  어느 프로그래밍 언어든 기본 함수나 문법의 정확한 사용법을 알고 사용하는 것이 중요하다. 자바를 사용하던 회사에서 타입스크립트를 사용하는 회사로 이직한 뒤, 개발은 하고 있지만 자주 사용하는 함수나 프로그래밍 문법에 대한 정확한 이해와 사용법을 모른채 블로그의 사용 예나 다른 동료의 코드를 보고 비슷한게 만들었던 적이 많았다.

  그로 인해, 자주 사용하는 함수나 문법임에도 다른 개발자의 코드를 확인해보고 개발하는 경우가 많아졌다. 처리 방식이나 결과가 예상한 것처럼 되는지 정확하게 알지를 못하니 “혹시 이런 경우에는? 또 다른 경우에는?” 과 같은 의문이 계속 생겨나고 이를 확인하기 위해, 테스트하는 시간이 늘어났다. 그 결과 시간이 지날수록 오히려 개발시간이 더 늘어났다.

  평소 find 와 map, filter 등의 기본 함수를 자주 사용하고는 있었지만, 정확히 어떤 처리를 하고 어떤 용도로 사용하는지를 잘 모른채 사용해왔다. 이번 기회에 조금 깊게 공부하고 정리해두려 한다.

## Filter 함수

  - **조건에 맞는 데이터들만 걸러내어 _새로운 List_ 로 만든다.**
    + ① 새로운 리스트 생성(빈 리스트, [])
    + ② 새로운 리스트에 추가할 조건이 True 인 경우에만 리스트에 추가
    + ③ 생성된 리스트 반환
  - 조건에 맞는 값이 없다면 빈 List 를 반환한다.
  - 조건 검색을 위해 **배열의 모든 값을 확인** 한다. (find 함수와의 차이점)

  아래의 코드(_Code①_)는 문자열의 길이가 6 미만인 데이터만을 필터링하여 새로운 리스트를 만들어내는 코드이다.

  출력된 로그를 확인해 보면, 원래의 데이터인 list 변수는 변함없이 그대로이다. 조건에 맞는 데이터들로 새롭게 리스트를 만들었다.

  - Code①
    ```tsx
      const list: string[] = ['apple', 'banana', 'kiwi'];

      // 문자열의 길이가 6 미만인 데이터만 골라 새로운 리스트를 만든다.
      const filtered: string[] = list.filter((item: string) => item.length < 6);

      console.log('original', list);
      // [LOG]: "original",  ["apple", "banana", "kiwi"] 
      console.log('filtered', filtered);
      // [LOG]: "filtered",  ["apple", "kiwi"]
    ```

  filter 함수는 조건에 맞는(콜백 함수의 결과값, True or False) “**원래의 데이터를 새로운 리스트에 추가**” 하는 것이기 때문에 **기존 데이터 자체를 변경 할 수는 없다**.

  예를 들어 [apple, banana, kiwi] 라는 기존의 데이터를 이용해 새로운 리스트를 만들 때는 문자열의 순서를 뒤집거나 ([’elppa’, ‘ananab’, ‘iwik’]) 첫 번째 문자만 대문자로 만들거나 ([’Apple’, ’Banana’, ’Kiwi’])  등의 기존의 데이터에 없던 데이터가 새로운 리스트에 생성되지는 않는다는 것이다.(이러한 처리는 map 함수를 이용한다.) 
  
  [’apple’, ‘kiwi’] 나 [](길이가 0인 리스트), [’banana’] 등의 기존의 데이터만이 새로운 리스트에 추가될 수 있다.


  ### - 코드 블럭(`{}`) 을 사용할 때는 Return 값이 필요하다

    아래의 코드(_Code②_)는 _Code①_ 에 없던 코드블럭(`{}`) 이 있다. 그리고 예상과 달리 빈 리스트를 만들어낸다. 

    - Code②

      ```tsx
        const list: string[] = ['apple', 'banana', 'kiwi'];
        const filtered: string[] = list.filter((item: string) => {
            item.length < 6;
        });

        console.log('filtered', filtered);
        // [LOG]: "filtered",  []
      ```

    코드블럭은 보통 복수의 코드 라인을 처리 할 때 사용한다. 
    
    `(item: string) => item.length < 6` 는 filter 함수의 콜백Callback 함수이므로 반드시 결과 즉, 반환값(Return) 이 필요하다. (list 변수의 길이만큼의 콜백 함수가 실행되는 것)

    filter 함수가 콜백함수의 _True/False_ 의 결과값을 받아 리스트를 만들기 때문에, _Code②_ 처럼 아무런 결과를 반환하지 않고 끝내버리면 콜백 함수의 결과는 undefined 가 된다. 따라서 filter 함수는 False 로 판단하여 리스트를에 데이터를 추가하지 않는다.

    따라서 아래의 _Code③_ 처럼 바꾸면 _Code①_ 와 같은 결과가 나온다. 

    - Code③

      ```tsx
        const list: string[] = ['apple', 'banana', 'kiwi'];
        const filtered: string[] = list.filter((item: string) => {
            return item.length < 6;
        });

        console.log('filtered', filtered);
        // [LOG]: "filtered",  ["apple", "kiwi"]
      ```


  ### - 빈 리스트(`[]`)에 filter 함수를 사용한다면?

    그렇다면 원래의 데이터가 빈 리스트(`[]`, 길이가 0인 리스트) 인 경우에 filter 함수를 사용한다면 어떻게 될까?

    당연하게도 콜백함수가 True/False 를 체크할 데이터가 없기 때문에 filter 함수는 그대로 **빈 리스트(`[]`)** 를 만들어 낸다. 

    아래의 _Code④_ 를 보면 데이터가 없기 때문에 콜백함수가 실행조차 되지 않았다.(`console.log('item', item)` 의 출력 결과가 없다.) 

    원래 데이터의 갯수만큼 콜백함수가 실행되는데 데이터의 갯수가 0 이기 때문에 콜백함수의 실행도 0 번이 된다.

    - Code④

      ```tsx
        const list: string[] = [];
        const filtered: string[] = list.filter((item: string) => {
            console.log('item', item);
            return item.length < 6
        });

        console.log('filtered', filtered);
        // [LOG]: "filtered",  []
      ```









<br /><br /><br /><br /><br />

--- 
- Refs
  + [MDN - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
