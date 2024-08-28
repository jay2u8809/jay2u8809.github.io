---
# slug: /programming/react/how-to-use-if-else
id: how-to-use-if-else
title: 조건문 사용 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  react,
  리액트,
  조건문,
]
# sidebar_position: 1
---

<!--title -->
# React 컴포넌트에서 조건문 사용 방법
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

## 조건에 따라 다른 컴포넌트 표시하기

  - 삼항연산자를 이용
    + _조건식 ? true 인 경우 : false 인 경우_
    + ```typescript
        return (
          error
            ? <div><h1>에러 표시</h1></div>
            :
            loading
              ? <div><h1>로딩 표시</h1></div>
              : <div><h1>데이터 표시</h1></div>
        );
      ```

  - 전체 코드

    ```typescript

      const prepare = async () => {
        return new Promise<string>((resolve, reject) => {
          setTimeout(() => {
            resolve('OK');
          }, 300);
        });
      };

      export default function index() {
        const [result, setResult] = React.useState<string>(null);
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
              : <div><h1>{result}</h1></div>
        );
      }

    ```