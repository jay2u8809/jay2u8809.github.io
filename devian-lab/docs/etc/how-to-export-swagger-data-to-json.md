---
# slug: /etc/how-to-export-swagger-data-to-json
id: how-to-export-swagger-data-to-json
title: Swagger 데이터를 JSON 으로 export하기
tags: [devian-lab, project, javaScript, typescript, nestjs, swagger, export, json, 자바스크립트, 타입스크립트]
# sidebar_position: 1
---

<!--title -->
# Swagger 의 API 명세를 JSON 으로 Export 하기
<!--//title -->

```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-23",
  "updatedAt": "2024-06-23"
}
```

---

## Intro
 API 개발을 할 때, Swagger 는 참 유용한 도구이다. URL, Request, Response 정보를 명확하게 정리해서 보여줄 수 있고, 바로 기능을 테스트도 해 볼 수 있으니 프론트엔드, 백엔드 개발자들 사이에서 문서처럼, 테스트 툴처럼 사용할 수 있다. 프로젝트에서 전체 API 의 정보를 가장 정확하게 확인할 수 있는 것도 Swagger 이기에 API 문서를 대신해서 사용하는 팀들도 많다. 
 
 가끔이지만 기획팀이나 운영팀에서 현재 운용 중인 API 의 목록이나 특정 기능의 API 정보를 뽑아달라고 할 때가 있다. 개발자들의 요구면 Swagger URL 만 보내줘도 되지만, 개발자가 아닌 팀의 경우, API 목록이나 정보를 Excel 파일이나 csv 파일로 정리해서 보내줘야 한다. 그럴 때 Swagger 의 정보를 JSON 으로 만들어서 필요한 정보만 뽑아 csv 파일로 건네줄 수 있다.
 

## Contents

### Swagger Page Link
 Swagger UI 는 Swagger 페이지의 데이터를 JSON 형태로 볼수 있는 링크를 제공한다.
 아래의 데모 사이트를 보면 `https://petstore.swagger.io/v2/swagger.json` 라는 URL 링크가 있다. 해당 링크를 누르면 JSON 형태의 데이터가 나오는 페이지로 이동한다. 
  
 - https://petstore.swagger.io/


### api-json
 하지만 간혹 각 팀의 운영 사정상 해당 JSON 데이터를 볼 수 있는 링크가 없는 경우도 있다. 만약, 자신의 팀 Swagger 의 URL 이 `~/api` 로 끝나는지 확인해보자. `~/api` 로 끝나는 URL 이라면 다른 특별한 설정없이 아래와 같은 URL 로 JSON 데이터를 가져올 수 있다.
 
 - ex) `https://sample-swaggerXXXXX.com/api` 의 경우
   + JSON: `https://sample-swaggerXXXXX.com/api-json`



<br /><br /><br /><br /><br />

--- 
- Refs
  + [StackOverflow: How to export swagger.json (or yaml)](https://stackoverflow.com/questions/48525546/how-to-export-swagger-json-or-yaml)
  + [ガイド：SwaggerをJSON/ HTML/ Markdownフォーマットにエクスポート](https://apidog.com/jp/blog/export-swagger-to-json-html-markdown/)