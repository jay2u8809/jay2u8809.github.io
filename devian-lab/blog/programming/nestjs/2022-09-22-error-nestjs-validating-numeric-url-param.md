---
slug: 2022-09-22-error-nestjs-validating-numeric-url-param
title: Nest.js - [Error] number 유효성 체크
authors: [devian]
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  blog,
  nest.js,
  error,
  trouble shooting,
  validate,
  query string,
  path variable,
]
keywords: [
  devian-lab,
  Jobː談,
  nest.js,
  error,
  trouble shooting,
  validate,
  query string,
  path variable,
]
description: Nest.js 에서 request 을 받을 때 발생한 validate 에러를 해결해 본다.
---

<!--title -->
# [Nest.js] must be a number conforming to the specified constraints 
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2022-09-22",
  "updatedAt": "2022-09-22"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2022-09-22
  updatedAt: 2022-09-22
```

---

## Intro

  Client 에서 URL에 데이터를 넣는 Request (QueryString 또는 Path Variable) 를 보낼 때, 문자열이 아닌 데이터(숫자 등)를 보내면 발생하는 에러를 해결해 본다.

## Source Code

  ### Controller

    - 아래의 코드와 같이 주문 상품의 수량을 변경하는 EndPoint 가 있다고 가정한다.

      ```typescript
        @Patch('order/prod/count/:id/:count')
        @ApiResponse({
          status: HttpStatus.OK,
          type: OrderProdUpdateResponseDto,
          description: 'udpdate ord prod',
        })
        @HttpCode(HttpStatus.OK)
        @UseGuards(ParamGuard)
        async updateOrdProd(
          @Param() param: OrderProdUpdateDto,
        ): Promise<OrderProdUpdateResponseDto> {
          console.log(TAG, 'patch-ord-prod-req', param);

          const result: OrderProdUpdateResponseDto = await this.orderService.updateOrdProd
            param.id,
            param.count,
          );

          console.log(TAG, 'patch-ord-prod-res', result);

          return result;
        }
      ```

  ### DTO

    - 위의 엔드포인트의 Path Variable (id, count) 에 해당하는 데이터를 정의한다.

      ```typescript
        import {ApiProperty} from '@nestjs/swagger';
        import {IsNotEmpty, IsNumber, IsString} from 'class-validator';
        import {Type} from 'class-transformer';

        export class OrderProdUpdateDto {
          @ApiProperty()
          @IsNotEmpty()
          @IsString()
          id: string;

          @ApiProperty({
            description: '주문 상품 수량',
          })
          @IsNotEmpty()
          @IsNumber()
          count: number;
        }
      ```



## Error

  위의 DTO 코드를 보면 `count` 는 숫자형 변수이고 데코레이터로도 숫자형 데이터만을 받을 수 있도록 유효성 검사(`@IsNumber`)를 하고 있다.

  그럼에도 불구하고 API 테스트 툴(Postman, Insomnia 등) 나 Swagger를 사용해 Request 를 보내면 아래와 같이 숫자형 데이터가 아니라는 에러가 발생한다.

    ```text
      count must be a number conforming to the specified constraints
    ```



## 원인 분석

  > URL의 데이터를 통해 Request 를 받을 때, 숫자형 데이터가 문자열 타입 (URL이 문자열이므로) 그대로 DTO와 Mapping 되는 것

  데이터를 RequestBody 와 같이 JSON 형태가 아니라 URL의 **문자열로 보냈기 때문**에,  URL 경로에서 `:count`에 해당하는 데이터는 아래와 같이 **문자열** 로 DTO 의 `count` 필드와 맵핑된다. 

    - Request

      ```text
        https://www.ooooo.com/api/v1/order/prod/count/ABCD321321-12/3
      ```

    - count 는 숫자 3 이 아닌 문자열 '3' 이다.

      ```typescript
        {
          id: 'ABCD321321-12',
          count: '3'
        }
      ```

  그렇기 때문에 URL 경로의 데이터들을 DTO 객체와 맵핑하는 과정에서 _문자열 -> 숫자_ 로 변경하는 처리가 필요하다.



## 해결

  > **@Type(() => 변경하고자 하는 타입)** 데코레이터

  - `@Type` 데코레이터를 사용하면 URL 경로의 데이터들을 DTO 객체와 맵핑하는 과정에서 _문자열 -> 숫자_ 로 변경하는 처리를 할 수 있다.
  - `@Type(() => Number)` 를 이용해 URL 경로의 데이터와 DTO의 필드가 **맵핑 되기 전** 에 숫자로 타입을 변경한다.

    ```typescript
      @Type(() => Number)
      @IsNumber()
      count: number;
    ```

  - 데코레이터는 위에서 아래로 적용된다. 따라서 `@Type` 데코레이터가 `@IsNumber` 데코레이터 보다 위에 있어야 한다. 반대의 경우, 숫자 타입으로 변경하지 않은 채 `@IsNumber` 가 적용되어 똑같은 에러가 발생한다.

  지금까지 주로 JSON을 사용하여 데이터를 서버로 넘겼기 때문에 이와 같은 에러를 본 적이 없었다. 이번 경우도 URL 경로가 아닌 JSON 형태로 Request 를 보내면 문제없이 처리할 수 있었다.
  
  하지만  _QueryString_ 이나 _Path Variable_ 과 같이 URL 에 직접 데이터를 보내는 경우에는 데이터를 모두 문자열 타입으로 처리하기 때문에 DTO 매핑 단계에서 타입 변경 처리가 반드시 필요하다는 사실을 알 수 있었다. 





<br /><br /><br /><br /><br />

---
- Refs
  + [Validating numeric query parameters in NestJS](https://dev.to/avantar/validating-numeric-query-parameters-in-nestjs-gk9)
  + [[NestJS] must be a number conforming to the specified constraints - body dto 타입 에러 해결](https://sleepy-it.tistory.com/41)