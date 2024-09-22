---
slug: /programming/nodejs/tips/how-to-convert-json-to-csv
# id: how-to-convert-json-to-csv
title: JSON → CSV 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  library,
  json-2-csv,
]
keywords: [
  devian-lab,
  Jobː談,
  javascript,
  typescript,
  js,
  ts,
  자바스크립트,
  타입스크립트,
  library,
  json-2-csv,
]
description: json-2-csv 라이브러리를 이용해 간단히 csv 파일을 만드는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# JSON → CSV: json-2-csv 사용법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-12-16",
  "updatedAt": "2022-12-16"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-12-16
  updatedAt: 2022-12-16
```


---


<aside>
💡 이 포스트는 `json-2-csv: ^3.14.4` 기준으로 작성하였습니다.

</aside>

# 시작하기 전에

다른 부서로부터 데이터를 뽑아달라는 의뢰가 종종있다. 예를 들어 최근 1년간 사용 이력이 없는 회원들의 수를 구한다던가 작년 7월의 가입자 수 등 간단한 내용들도 있고, 올해 8월 이벤트에 참가한 회원들의 지역별, 나이대별, 성별 등의 특정한 데이터를 원한다던가 하는 까다로운 의뢰들도 있다. 

좋은 툴이나 솔루션을 쓰고 있는 회사라면 대부분은 개발자들에게 의뢰하지 않고 솔루션으로 해결할 수도 있지만, 이런 툴이나 솔루션을 쓰지 않는 회사들의 개발자들은 데이터를 뽑아달라는 의뢰를 상당히 많이 받는다.

나는 데이터베이스나 Aws S3 등의 데이터 스토리지로부터 뽑은 데이터들은 주로 **CSV 파일**로 만들어서 전해주는 편인데, 이번 포스트에서는 추출한 데이터를 간단하게 CSV 파일로 만들어주는 라이브러리에 대해 알아보고자 한다. 그동안은 JSON 파일들을 하나하나 CSV 형식으로 변환하는 작업이 꼭 필요했었는데, 이 라이브러리를 통해 아주 간단히 할 수 있게 되었다.

# JSON → CSV

## 지금까지의 방법

NoSQL 데이터베이스를 통해 데이터를 추출할 경우 대부분은 JSON 형태일 것이다. 이 대량의 JSON 파일들을 CSV 파일로 변환하기 위해서 지금까지 아래와 같은 작업을 해왔다.

```tsx
// data
const items: object[] = [
	{
		name: 'John',
		age: 27,
	}, 
	{
		name: 'Jack',
		age: 63,
	}, 
	{
		name: 'Dan',
		age: 35,
	}
];

// 1. Member array -> string array
const csvLines: string[] = items.map((item: object) => `${item.name},${item.age}`);

// 2. string array -> string
const csvLine: string = csvLines.join('\n');

// 3. generate cvs file
fs.writeFileSync('파일경로/파일명.csv', csvLine);
```

1. 각 데이터를 콤마(,)로 구분하여 문자열(string)로 변환하기
    
    ```tsx
    // 1. Member array -> string array
    const csvLines: string[] = items.map((item: Member) => `${item.name},${item.age}`);
    ```
    
2. 변환된 문자열 배열을 개행문자(\n)로 연결하여 1개의 문자열로 만들기
    
    ```tsx
    // 2. string array -> string
    const csvLine: string = csvLines.join('\n');
    ```
    
3. csv 파일로 생성하기
    
    ```tsx
    // 3. generate cvs file
    fs.writeFileSync('파일경로/파일명.csv', csvLine);
    ```
    

상당히 귀찮은 작업이다. 특히나 JSON 데이터의 깊이(depth) 가 깊어진다면 변환 처리가 더더욱 까다로워진다.  매번하는 반복적인 작업이었지만 할 때마다 수정해야하는 사항이 나타났기에 좋은 라이브러리가 없을까 찾아보던 중 `json-2-csv` 라는 라이브러리를 알게 되었다.

## json-2-csv 을 이용한 방법

<aside>
💡 이 라이브러리의 사용 방법은 공식 사이트 ([json-2-csv](https://mrodrig.github.io/json-2-csv/))에 자세하게 나와있다.

</aside>

이 라이브러리를 사용하게 되면 위의 1. 과 2. 과정을 한 번에 간단히 처리할 수 있다. 또, 다양한 옵션들을 통해 빈 값들의 처리나 헤더 처리 등 귀찮은 작업들을 간단하게 할 수 있는 장점이 있다. 

위의 코드를 **json-2-csv** 를 이용해 바꿔보자.

```tsx
// import json-2-csv 
import { json2csvAsync } from 'json-2-csv';

// data
const items: object[] = [
  {
    name: 'John',
    age: 27,
  },
  {
    name: 'Jack',
    age: 63,
  },
  {
    name: 'Dan',
    age: 35,
  },
];

// 1. json -> csv line
const csvLine: string = await json2csvAsync(items);

// 2. generate cvs file
fs.writeFileSync('파일경로/파일명.csv', csvLine);
```

1. JSON 객체를 CSV 데이터로 변환하기
    
    ```tsx
    // 1. json -> csv line
    const csvLine: string = await json2csvAsync(items);
    ```
    
    map() 메소드나 join() 메소드 등을 사용하지 않고 바로 한 줄로 처리할 수 있다. 
    

`json2csvAsync()` 메소드를 좀더 자세히 알아보자. 이 함수의 정의는 아래와 같다.

파라미터로서 기본형(number, boolean 등)이나 문자열의 리스트가 아닌 object 리스트(`data: object[]`)가 필수, 옵션 파라미터(`options?: IFullOptions`)가 선택적이고 return 타입은 string 타입이다.

```tsx
export function json2csvAsync(data: object[], options?: IFullOptions): Promise<string>;
```

*주의할 점은 `json2csvAsync()` 의 파라미터로는 반드시 **객체의 리스트**가 들어가야 한다는 점이다. 문자열 리스트나 기본형(number, boolean 등) 리스트는 에러가 발생한다.*

이 옵션 파라미터가 중요한데, 이 옵션을 통해서 상당히 많은 기능을 간단하게 구현할 수 있다.

- `emptyFieldValue` : 빈 값의 기본값 설정
    - JSON 객체의 모든 필드에 데이터가 존재하는 것은 아니다.  아래의 예시처럼 모든 데이터가 name, age 는 필수적으로 가지지만 height 와 weight 는 가질수도 가지지 않을 수도 있다.
    
    ```tsx
    // data
    const items: object[] = [
      {
        name: 'John',
        age: 27,
        height: 182,
        weight: 83,
      },
      {
        name: 'Jack',
        age: 63,
        weight: 83,
      },
      {
        name: 'Dan',
        age: 35,
      },
    ];
    ```
    
    - 이러한 빈 값(Empty Field)에 대해 csv 파일로 만들때 기본값(Default value)을 설정하는 옵션이 `emptyFieldValue` 이다. 빈 문자열(’’) 이나 숫자 0 과 같은 기본값을 설정할 수 있다.
    
    ```tsx
    // 빈 값이 있다면 빈 문자열('') 을 넣는다.
    const csvLine: string = await json2csvAsync(items, {emptyFieldValue: ''});
    ```
    

- `expandArrayObjects`: 배열 값에 있는 객체를 어떻게 표현할 것인가 하는 설정이다. 기본값은 false 이다.
    
    ```tsx
    // data
    const items: object[] = [
      {
        name: 'John',
        age: 27,
        height: 182,
        weight: 83,
      },
      {
        name: 'Jack',
        age: 63,
        weight: 83,
      },
      {
        name: 'Dan',
        age: 35,
        hobby: [
    			{
    				game: [ 
    					'LOL',
              'OverWatch'
    				]
    			}, 
          {
    				sport: [
    					'soccer',
    					'running'
    				]
    			}
    		]
      },
    ];
    ```
    
    - 위의 데이터를 `expandArrayObjects: false` 로 csv 파일을 생성해 보자.
    
    ```tsx
    const csvLine: string = await json2csvAsync(items, {
      emptyFieldValue: '',
      expandArrayObjects: false,
    });
    ```
    
    ```
    name,age,height,weight,hobby
    John,27,182,83,
    Jack,63,,83,
    Dan,35,,,"[{""game"":[""LOL"",""OverWatch""]},{""sport"":[""soccer"",""running""]}]"
    ```
    
    결과를 보면 hobby 에 해당하는 데이터들은 JSON.stringfy() 를 한 결과와 같다. 데이터를 그대로 문자열로 변경시킨 것이다.
    
    - 아래는 `expandArrayObjects: true` 인 경우이다.
    
    ```tsx
    const csvLine: string = await json2csvAsync(items, {
      emptyFieldValue: '',
      expandArrayObjects: true,
    });
    ```
    
    ```
    name,age,height,weight,hobby.game,hobby.sport
    John,27,182,83,,
    Jack,63,,83,,
    Dan,35,,,"[""LOL"",""OverWatch""]","[""soccer"",""running""]"
    ```
    
    이 경우에는 hobby 데이터 내의 객체들도 각각 하나의 필드로서 구분하여 출력해주고 있다. 
    
- `prependHeader` : csv 파일의 헤더(header) 를 표시할 것이가 하는 설정이다. 기본적으로 true 이기에 JSON 객체의 필드명이 헤더명이 된다.
- `sortHeader`: 헤더를 정렬하여 만들때 사용한다. 기본적으로 false 이기 때문에 정렬을 하지 않는다.



<br /><br /><br /><br /><br />

--- 
- Refs