"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[6314],{76183:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var s=r(15012),t=r(74848),i=r(28453);const o={slug:"2022-09-22-error-nestjs-validating-numeric-url-param",title:"Nest.js - [Error] number \uc720\ud6a8\uc131 \uccb4\ud06c",authors:["devian"],tags:["devian-lab","dev-posts","nest.js","trouble shooting","validation"],keywords:["devian-lab","Job\u02d0\u8ac7","nest.js","error","trouble shooting","validate","query string","path variable"],description:"Nest.js \uc5d0\uc11c request \uc744 \ubc1b\uc744 \ub54c \ubc1c\uc0dd\ud55c validate \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."},l="[Nest.js] must be a number conforming to the specified constraints",a={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"Source Code",id:"source-code",level:2},{value:"Controller",id:"controller",level:3},{value:"DTO",id:"dto",level:3},{value:"Error",id:"error",level:2},{value:"\uc6d0\uc778 \ubd84\uc11d",id:"\uc6d0\uc778-\ubd84\uc11d",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2022-09-22\n  updatedAt: 2022-09-22\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Nest.js \uc5d0\uc11c request \uc744 \ubc1b\uc744 \ub54c \ubc1c\uc0dd\ud55c validate \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(n.p,{children:"Client \uc5d0\uc11c URL\uc5d0 \ub370\uc774\ud130\ub97c \ub123\ub294 Request (QueryString \ub610\ub294 Path Variable) \ub97c \ubcf4\ub0bc \ub54c, \ubb38\uc790\uc5f4\uc774 \uc544\ub2cc \ub370\uc774\ud130(\uc22b\uc790 \ub4f1)\ub97c \ubcf4\ub0b4\uba74 \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"source-code",children:"Source Code"}),"\n",(0,t.jsx)(n.h3,{id:"controller",children:"Controller"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\uc544\ub798\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 \uc8fc\ubb38 \uc0c1\ud488\uc758 \uc218\ub7c9\uc744 \ubcc0\uacbd\ud558\ub294 EndPoint \uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"  @Patch('order/prod/count/:id/:count')\n  @ApiResponse({\n    status: HttpStatus.OK,\n    type: OrderProdUpdateResponseDto,\n    description: 'udpdate ord prod',\n  })\n  @HttpCode(HttpStatus.OK)\n  @UseGuards(ParamGuard)\n  async updateOrdProd(\n    @Param() param: OrderProdUpdateDto,\n  ): Promise<OrderProdUpdateResponseDto> {\n    console.log(TAG, 'patch-ord-prod-req', param);\n\n    const result: OrderProdUpdateResponseDto = await this.orderService.updateOrdProd\n      param.id,\n      param.count,\n    );\n\n    console.log(TAG, 'patch-ord-prod-res', result);\n\n    return result;\n  }\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dto",children:"DTO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\uc704\uc758 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc758 Path Variable (id, count) \uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\ub97c \uc815\uc758\ud55c\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"  import {ApiProperty} from '@nestjs/swagger';\n  import {IsNotEmpty, IsNumber, IsString} from 'class-validator';\n  import {Type} from 'class-transformer';\n\n  export class OrderProdUpdateDto {\n    @ApiProperty()\n    @IsNotEmpty()\n    @IsString()\n    id: string;\n\n    @ApiProperty({\n      description: '\uc8fc\ubb38 \uc0c1\ud488 \uc218\ub7c9',\n    })\n    @IsNotEmpty()\n    @IsNumber()\n    count: number;\n  }\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"error",children:"Error"}),"\n",(0,t.jsxs)(n.p,{children:["\uc704\uc758 DTO \ucf54\ub4dc\ub97c \ubcf4\uba74 ",(0,t.jsx)(n.code,{children:"count"})," \ub294 \uc22b\uc790\ud615 \ubcc0\uc218\uc774\uace0 \ub370\ucf54\ub808\uc774\ud130\ub85c\ub3c4 \uc22b\uc790\ud615 \ub370\uc774\ud130\ub9cc\uc744 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \uc720\ud6a8\uc131 \uac80\uc0ac(",(0,t.jsx)(n.code,{children:"@IsNumber"}),")\ub97c \ud558\uace0 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uadf8\ub7fc\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 API \ud14c\uc2a4\ud2b8 \ud234(Postman, Insomnia \ub4f1) \ub098 Swagger\ub97c \uc0ac\uc6a9\ud574 Request \ub97c \ubcf4\ub0b4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc22b\uc790\ud615 \ub370\uc774\ud130\uac00 \uc544\ub2c8\ub77c\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"  count must be a number conforming to the specified constraints\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\uc6d0\uc778-\ubd84\uc11d",children:"\uc6d0\uc778 \ubd84\uc11d"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"URL\uc758 \ub370\uc774\ud130\ub97c \ud1b5\ud574 Request \ub97c \ubc1b\uc744 \ub54c, \uc22b\uc790\ud615 \ub370\uc774\ud130\uac00 \ubb38\uc790\uc5f4 \ud0c0\uc785 (URL\uc774 \ubb38\uc790\uc5f4\uc774\ubbc0\ub85c) \uadf8\ub300\ub85c DTO\uc640 Mapping \ub418\ub294 \uac83"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\ub370\uc774\ud130\ub97c RequestBody \uc640 \uac19\uc774 JSON \ud615\ud0dc\uac00 \uc544\ub2c8\ub77c URL\uc758 ",(0,t.jsx)(n.strong,{children:"\ubb38\uc790\uc5f4\ub85c \ubcf4\ub0c8\uae30 \ub54c\ubb38"}),"\uc5d0,  URL \uacbd\ub85c\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:":count"}),"\uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\ub294 \uc544\ub798\uc640 \uac19\uc774 ",(0,t.jsx)(n.strong,{children:"\ubb38\uc790\uc5f4"})," \ub85c DTO \uc758 ",(0,t.jsx)(n.code,{children:"count"})," \ud544\ub4dc\uc640 \ub9f5\ud551\ub41c\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"  https://www.ooooo.com/api/v1/order/prod/count/ABCD321321-12/3\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"count \ub294 \uc22b\uc790 3 \uc774 \uc544\ub2cc \ubb38\uc790\uc5f4 '3' \uc774\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"  {\n    id: 'ABCD321321-12',\n    count: '3'\n  }\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 URL \uacbd\ub85c\uc758 \ub370\uc774\ud130\ub4e4\uc744 DTO \uac1d\uccb4\uc640 \ub9f5\ud551\ud558\ub294 \uacfc\uc815\uc5d0\uc11c ",(0,t.jsx)(n.em,{children:"\ubb38\uc790\uc5f4 -> \uc22b\uc790"})," \ub85c \ubcc0\uacbd\ud558\ub294 \ucc98\ub9ac\uac00 \ud544\uc694\ud558\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"\ud574\uacb0",children:"\ud574\uacb0"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"@Type(() => \ubcc0\uacbd\ud558\uace0\uc790 \ud558\ub294 \ud0c0\uc785)"})," \ub370\ucf54\ub808\uc774\ud130"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@Type"})," \ub370\ucf54\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uba74 URL \uacbd\ub85c\uc758 \ub370\uc774\ud130\ub4e4\uc744 DTO \uac1d\uccb4\uc640 \ub9f5\ud551\ud558\ub294 \uacfc\uc815\uc5d0\uc11c ",(0,t.jsx)(n.em,{children:"\ubb38\uc790\uc5f4 -> \uc22b\uc790"})," \ub85c \ubcc0\uacbd\ud558\ub294 \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@Type(() => Number)"})," \ub97c \uc774\uc6a9\ud574 URL \uacbd\ub85c\uc758 \ub370\uc774\ud130\uc640 DTO\uc758 \ud544\ub4dc\uac00 ",(0,t.jsx)(n.strong,{children:"\ub9f5\ud551 \ub418\uae30 \uc804"})," \uc5d0 \uc22b\uc790\ub85c \ud0c0\uc785\uc744 \ubcc0\uacbd\ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"  @Type(() => Number)\n  @IsNumber()\n  count: number;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\ub370\ucf54\ub808\uc774\ud130\ub294 \uc704\uc5d0\uc11c \uc544\ub798\ub85c \uc801\uc6a9\ub41c\ub2e4. \ub530\ub77c\uc11c ",(0,t.jsx)(n.code,{children:"@Type"})," \ub370\ucf54\ub808\uc774\ud130\uac00 ",(0,t.jsx)(n.code,{children:"@IsNumber"})," \ub370\ucf54\ub808\uc774\ud130 \ubcf4\ub2e4 \uc704\uc5d0 \uc788\uc5b4\uc57c \ud55c\ub2e4. \ubc18\ub300\uc758 \uacbd\uc6b0, \uc22b\uc790 \ud0c0\uc785\uc73c\ub85c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc740 \ucc44 ",(0,t.jsx)(n.code,{children:"@IsNumber"})," \uac00 \uc801\uc6a9\ub418\uc5b4 \ub611\uac19\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \uc8fc\ub85c JSON\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc11c\ubc84\ub85c \ub118\uacbc\uae30 \ub54c\ubb38\uc5d0 \uc774\uc640 \uac19\uc740 \uc5d0\ub7ec\ub97c \ubcf8 \uc801\uc774 \uc5c6\uc5c8\ub2e4. \uc774\ubc88 \uacbd\uc6b0\ub3c4 URL \uacbd\ub85c\uac00 \uc544\ub2cc JSON \ud615\ud0dc\ub85c Request \ub97c \ubcf4\ub0b4\uba74 \ubb38\uc81c\uc5c6\uc774 \ucc98\ub9ac\ud560 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\ud558\uc9c0\ub9cc  ",(0,t.jsx)(n.em,{children:"QueryString"})," \uc774\ub098 ",(0,t.jsx)(n.em,{children:"Path Variable"})," \uacfc \uac19\uc774 URL \uc5d0 \uc9c1\uc811 \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\ub294 \uacbd\uc6b0\uc5d0\ub294 \ub370\uc774\ud130\ub97c \ubaa8\ub450 \ubb38\uc790\uc5f4 \ud0c0\uc785\uc73c\ub85c \ucc98\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 DTO \ub9e4\ud551 \ub2e8\uacc4\uc5d0\uc11c \ud0c0\uc785 \ubcc0\uacbd \ucc98\ub9ac\uac00 \ubc18\ub4dc\uc2dc \ud544\uc694\ud558\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc54c \uc218 \uc788\uc5c8\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Refs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://dev.to/avantar/validating-numeric-query-parameters-in-nestjs-gk9",children:"Validating numeric query parameters in NestJS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sleepy-it.tistory.com/41",children:"[NestJS] must be a number conforming to the specified constraints - body dto \ud0c0\uc785 \uc5d0\ub7ec \ud574\uacb0"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},15012:e=>{e.exports=JSON.parse('{"permalink":"/dev-posts/2022-09-22-error-nestjs-validating-numeric-url-param","source":"@site/dev-posts/programming/nestjs/2022-09-22-error-nestjs-validating-numeric-url-param.md","title":"Nest.js - [Error] number \uc720\ud6a8\uc131 \uccb4\ud06c","description":"Nest.js \uc5d0\uc11c request \uc744 \ubc1b\uc744 \ub54c \ubc1c\uc0dd\ud55c validate \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4.","date":"2022-09-22T00:00:00.000Z","tags":[{"inline":true,"label":"devian-lab","permalink":"/dev-posts/tags/devian-lab"},{"inline":true,"label":"dev-posts","permalink":"/dev-posts/tags/dev-posts"},{"inline":true,"label":"nest.js","permalink":"/dev-posts/tags/nest-js"},{"inline":true,"label":"trouble shooting","permalink":"/dev-posts/tags/trouble-shooting"},{"inline":true,"label":"validation","permalink":"/dev-posts/tags/validation"}],"readingTime":4.565,"hasTruncateMarker":true,"authors":[{"name":"Dev.ian","title":"Software Engineer","url":"https://github.com/jay2u8809","imageURL":"/img/onigiri_icon.jpg","key":"devian","page":null}],"frontMatter":{"slug":"2022-09-22-error-nestjs-validating-numeric-url-param","title":"Nest.js - [Error] number \uc720\ud6a8\uc131 \uccb4\ud06c","authors":["devian"],"tags":["devian-lab","dev-posts","nest.js","trouble shooting","validation"],"keywords":["devian-lab","Job\u02d0\u8ac7","nest.js","error","trouble shooting","validate","query string","path variable"],"description":"Nest.js \uc5d0\uc11c request \uc744 \ubc1b\uc744 \ub54c \ubc1c\uc0dd\ud55c validate \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."},"unlisted":false,"prevItem":{"title":"Typescript - \uc21c\uc218\ud568\uc218\ub780?","permalink":"/dev-posts/2023-01-21-what-is-the-pure-function"},"nextItem":{"title":"Typescript - filter \ud568\uc218\uc758 \uc0ac\uc6a9\ubc95","permalink":"/dev-posts/2022-09-07-how-to-use-filter-func"}}')}}]);