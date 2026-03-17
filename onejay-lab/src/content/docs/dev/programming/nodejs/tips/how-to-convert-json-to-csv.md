---
title: JSON → CSV 방법
description: json-2-csv 라이브러리를 이용해 간단히 csv 파일을 만드는 방법을 정리한다.
# sidebar_position: 1
---

<!--title -->
# JSON → CSV: json-2-csv 사용법
<!--//title -->

<!-- 
```json
{
  "author": "Onejay",
  "createdAt": "2022-12-16",
  "updatedAt": "2022-12-16"
}
``` 
-->

```yaml
  author: Onejay
  createdAt: 2022-12-16
  updatedAt: 2022-12-16
```


---


> 💡 이 포스트는 `json-2-csv: ^3.14.4` 기준으로 작성하였습니다.


## json-2-csv

  - 이 라이브러리를 이용해 보다 간단하게 JSON 데이터를 CSV 로 변경할 수 있다.

    ```typescript
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

  ### 1) json2csvAsync

  ```typescript
    export function json2csvAsync(data: object[], options?: IFullOptions): Promise<string>;
  ```
  
  `json2csvAsync` 함수는 2개의 매개변수가 필요하다. 주의할 점은 `json2csvAsync()` 의 파라미터에 반드시 **객체의 리스트**가 들어가야 한다는 점이다. 기본형(number, string 등) 리스트는 에러가 발생한다.


  ### 2) options

  #### - `emptyFieldValue` : 빈 값(undefined 또는 null)의 기본값 설정
    - csv 로 변경할 JSON 데이터(아래의 _height_, _weight_)가 `undefined 또는 null` 인 경우, csv 파일에 넣을 값을 지정할 수 있다.

    - SampleCode 
  
      ```typescript
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

        // 빈 값이 있다면 하이픈('-') 을 넣는다.
        const csvLine: string = await json2csvAsync(items, {emptyFieldValue: '-'});
      ```
    
    - 결과

      ```csv
        name,age,height,weight,hobby
        John,27,182,83
        Jack,63,-,83
        Dan,35,-,-
      ```
  

  #### - `expandArrayObjects`: 배열 데이터의 표시 방법 설정. (`default: false`)
  
    - SampleCode 

      ```typescript
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

        const csvLine: string = await json2csvAsync(items, {
          emptyFieldValue: '-',
          expandArrayObjects: false,
        });
      ```
  
    - 결과
      + 배열 데이터(hobby)들은 JSON.stringfy() 를 한 값이 csv 파일로 생성된다. 

      ```csv
        name,age,height,weight,hobby
        John,27,182,83,
        Jack,63,-,83,
        Dan,35,-,-,"[{""game"":[""LOL"",""OverWatch""]},{""sport"":[""soccer"",""running""]}]"
      ```
  
    - 옵션을 `expandArrayObjects: true` 로 변경한 결과는 아래와 같다.
  
      ```typescript
      const csvLine: string = await json2csvAsync(items, {
        emptyFieldValue: '-',
        expandArrayObjects: true,
      });
      ```
  
      ```csv
        name,age,height,weight,hobby.game,hobby.sport
        John,27,182,83,-,
        Jack,63,-,83,-,
        Dan,35,-,-,"[""LOL"",""OverWatch""]","[""soccer"",""running""]"
      ```
  
  #### - `prependHeader` : csv 파일의 헤더(header) 표시 여부 설정. (`default: true`)

  #### - `sortHeader`: 헤더 정렬 설정. (`default: false`)




## Pure JS(?)

  - Sample Code

    ```typescript
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

  #### 1) 각 데이터를 콤마(,)로 구분하여 문자열(string)로 변환하기
    
  ```typescript
    // 1. Member array -> string array
    const csvLines: string[] = items.map((item: Member) => `${item.name},${item.age}`);
  ```
    
  #### 2) 변환된 문자열 배열을 개행문자(`\n`)로 연결하여 1개의 문자열로 만들기
    
  ```typescript
    // 2. string array -> string
    const csvLine: string = csvLines.join('\n');
  ```
    
  #### 3) csv 파일 생성
    
  ```typescript
    // 3. generate cvs file
    fs.writeFileSync('파일경로/파일명.csv', csvLine);
  ```






<br /><br /><br /><br /><br />

--- 
- Refs
  + [json-2-csv](https://mrodrig.github.io/json-2-csv/)
