---
# slug: /programming/react/how-to-use-map
id: how-to-use-map
title: 컴포넌트를 리스트로 표시하기 
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  react,
  map,
  리액트,
  리스트,
]
keywords: [
  devian-lab,
  Jobː談,
  react,
  map,
  리액트,
  리스트,
]
description: Array 를 이용해서 React 컴포넌트를 동적으로 표시하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# React 컴포넌트를 리스트로 표시하는 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-08-29",
  "updatedAt": "2024-08-29"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-08-29
  updatedAt: 2024-08-29
```


---


## List 의 map 함수로 컴포넌트 표시하기

  - 최상위 tag 의 `key` 를 중복되지 않는 값으로 설정해주어야 한다.
    + ```typescript
        return (
          {
            list.map((item, index) => {
              return (
                <div key={`${index}`}>
                  <span>{item}</span>
                </div>
              );
            });
          }
        );
      ```

  - 전체 코드

    ```typescript

      const prepare = async () => {
        return new Promise<string[]>((resolve, reject) => {
          setTimeout(() => {
            resolve(['Apple', 'MS', 'Google']);
          }, 300);
        });
      };

      export default function index() {
        const [result, setResult] = React.useState<string[]>([]);
        const [loading, setLoading] = React.useState<boolean>(true);
        const [error, setError] = React.useState<boolean>(false);

        useEffect(() => {
          prepare()
            .then(result => {
              setResult(result);
              setLoading(false);
            }).catch(err => {
              console.error('fail-prepare', err);
              setError(true);
            });
        }, []);

        return (
          error
            ? <div><h1>Error!!!</h1></div>
            :
            loading
              ? <div><h1>Lodaing...</h1></div>
              : {
                  result.map((item, index) => {
                    return (
                      <div key={`${index}`}>
                        <span>{item}</span>
                      </div>
                    );
                  });
                }
        );
      }

    ```