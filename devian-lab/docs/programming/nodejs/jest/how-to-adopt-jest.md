---
# slug: /wiki/nodejs/jest/how-to-adopt-jest
id: how-to-adopt-jest
title: Jest 적용 방법
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
# sidebar_position: 1
---

<!--title -->
# Jest 를 적용하는 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-09-01",
  "updatedAt": "2024-09-01"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-09-01
  updatedAt: 2024-09-01
```

---

## Install Jest Packages

  ### All Packages

    ```shell
      $ npm i --save-dev @types/jest jest ts-jest
      $ yarn add -D @types/jest jest ts-jest
    ```

  ### Jest

    ```shell
      $ npm i --save-dev jest
      # $ yarn add -D jest
    ```

  ### @Types/Jest

    ```shell
      $ npm i --save-dev @types/jest
      # $ yarn add -D @types/jest
    ```

  ### Ts-Jest

    ```shell
      $ npm i --save-dev ts-jest
      # $ yarn add -D ts-jest
    ```

## Error

  ### Jest encountered an unexpected token

    ```shell
    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

        Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

        By default "node_modules" folder is ignored by transformers.

        Here's what you can do:
        • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
        • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
        • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
        • If you need a custom transformation specify a "transform" option in your config.
        • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

        You'll find more details and examples of these config options in the docs:
        https://jestjs.io/docs/configuration
        For information about custom transformations, see:
        https://jestjs.io/docs/code-transformation
    ```

    ### package.json 수정 

      - jest 설정에서 `transform` 추가

        ```json
          "transform": {
            "^.+\\.(t|j)s$": "ts-jest"
          },
        ```



<br /><br /><br /><br /><br />

--- 
- Refs:
  + [Jest - Code Transformation](https://jestjs.io/docs/code-transformation)
  + [Jest - Configuring Jest:transform ](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object)



