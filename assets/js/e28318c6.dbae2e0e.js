"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[3245],{9533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var l=s(4848),a=s(8453);const i={slug:"2024-05-28-how-to-set-webpack",title:"AWS Lambda - Webpack \uc73c\ub85c Upload Size Limit \ud574\uacb0\ud558\uae30",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","blog","aws","lambda","serverless","serverless framework","webpack","multiple entry"]},r="[Job\u02d0\u8ac7] AWS Lambda Unzipped size must be smaller than 262144000 bytes Error: Webpack",t={permalink:"/blog/2024-05-28-how-to-set-webpack",source:"@site/blog/aws/serverless-framework/2024-05-28-how-to-set-webpack.md",title:"AWS Lambda - Webpack \uc73c\ub85c Upload Size Limit \ud574\uacb0\ud558\uae30",description:"\x3c!--",date:"2024-05-28T00:00:00.000Z",tags:[{inline:!0,label:"devian-lab",permalink:"/blog/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/blog/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/blog/tags/job\u02d0\u8ac7"},{inline:!0,label:"blog",permalink:"/blog/tags/blog"},{inline:!0,label:"aws",permalink:"/blog/tags/aws"},{inline:!0,label:"lambda",permalink:"/blog/tags/lambda"},{inline:!0,label:"serverless",permalink:"/blog/tags/serverless"},{inline:!0,label:"serverless framework",permalink:"/blog/tags/serverless-framework"},{inline:!0,label:"webpack",permalink:"/blog/tags/webpack"},{inline:!0,label:"multiple entry",permalink:"/blog/tags/multiple-entry"}],hasTruncateMarker:!1,authors:[{name:"Dev.ian",title:"Software Engineer",url:"https://github.com/jay2u8809",imageURL:"/img/onigiri_icon.jpg",key:"devian",page:null}],frontMatter:{slug:"2024-05-28-how-to-set-webpack",title:"AWS Lambda - Webpack \uc73c\ub85c Upload Size Limit \ud574\uacb0\ud558\uae30",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","blog","aws","lambda","serverless","serverless framework","webpack","multiple entry"]},unlisted:!1,prevItem:{title:"Git - Remote Repository URL \uc744 \ubc14\uafd4\ubcf4\uc790",permalink:"/blog/2024-08-14-how-to-change-git-remote-repo-url"},nextItem:{title:"Intro",permalink:"/blog/intro"}},c={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \uc6a9\ub7c9\uc774 \ub298\uc5b4\ub09c \uc774\uc720",id:"\uc18c\uc2a4\ucf54\ub4dc\uc758-\uc6a9\ub7c9\uc774-\ub298\uc5b4\ub09c-\uc774\uc720",level:2},{value:"Webpack \uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720",id:"webpack-\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720",level:2},{value:"Nest.js Webpack",id:"nestjs-webpack",level:2},{value:"main.js",id:"mainjs",level:3},{value:"Serverless Framework YAML",id:"serverless-framework-yaml",level:2},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-05-28\n  updatedAt: 2024-08-16\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:'"Webpack \uc744 \uc801\uc6a9\ud558\uc5ec AWS Lambda \uc5d0 \uc5c5\ub85c\ub4dc\ud560 \uc18c\uc2a4\ucf54\ub4dc\uc758 \uc0ac\uc774\uc988\ub97c \uc904\uc5ec\ubcf8\ub2e4"'}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  Unzipped size must be smaller than 262144000 bytes\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\ucd5c\uadfc\uc5d0 Serverless Framework(\uc774\ud558 ",(0,l.jsx)(n.code,{children:"sls"}),")\ub85c AWS Lambda \ub97c Deploy \ud558\uba74\uc11c \ub098\uc628 \uc5d0\ub7ec \uba54\uc138\uc9c0\ub2e4. AWS Lambda \uc5d0 \uc5c5\ub85c\ub4dc\ud560 \uc18c\uc2a4\ucf54\ub4dc\uc758 \uc6a9\ub7c9\uc774 (\uc555\ucd95\ud558\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0\uc5d0) \uc57d 250MB \ubcf4\ub2e4 \uc801\uc5b4\uc57c \ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:"\ud604\uc7ac \uc6b0\ub9ac \ud300\uc758 \uc11c\ube44\uc2a4\ub294 AWS Lambda \uc640 ECS Fargate \uc5d0 Nest.js \ud504\ub85c\uc81d\ud2b8\ub97c \uc62c\ub824 \uc6b4\uc601\ud558\uace0 \uc788\ub2e4. ECS Fargate \ub294 \ud2b9\ubcc4\ud788 \uc18c\uc2a4\ucf54\ub4dc \uc6a9\ub7c9 \uc81c\ud55c\uc774 \uc5c6\uc9c0\ub9cc AWS Lambda \ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc6a9\ub7c9 \uc81c\ud55c\uc774 \uc788\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#function-configuration-deployment-and-execution",children:"Lambda quotas - Function configuration, deployment, and execution"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["AWS Lambda \uc5d0 \uc9c1\uc811 \uc62c\ub9b4\uc218 \uc5c6\ub294 \uc6a9\ub7c9\uc774 \ud070 \ud30c\uc77c\uc744 S3\uc5d0 \uc5c5\ub85c\ub4dc\ud558\uac8c \ub418\ub294\ub370 ",(0,l.jsx)(n.strong,{children:"50MB(\uc555\ucd95\ud588\uc744 \uacbd\uc6b0)"})," \ub610\ub294 ",(0,l.jsx)(n.strong,{children:"250MB(\uc555\ucd95\ud558\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0)"})," \uc774\ud558\uc5ec\uc57c\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 Webpack \uc744 \uc774\uc6a9\ud574 Nest.js \ud504\ub85c\uc81d\ud2b8\uc758 \uc18c\uc2a4\ucf54\ub4dc \uc0ac\uc774\uc988\ub97c \uc904\uc774\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\uc18c\uc2a4\ucf54\ub4dc\uc758-\uc6a9\ub7c9\uc774-\ub298\uc5b4\ub09c-\uc774\uc720",children:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \uc6a9\ub7c9\uc774 \ub298\uc5b4\ub09c \uc774\uc720"}),"\n",(0,l.jsx)(n.p,{children:"\uc11c\ube44\uc2a4\uac00 \uc131\uc7a5\ud558\uba74\uc11c \ucd94\uac00\ud55c \uae30\ub2a5\ub9cc\ud07c \uc18c\uc2a4\ucf54\ub4dc\ub3c4 \ub298\uc5b4\ub0ac\uc9c0\ub9cc, \uac00\uc7a5 \ud070 \uc6d0\uc778\uc740 \uc5c5\ub85c\ub4dc\ud560 \ud30c\uc77c\uc5d0 \ud544\uc694\uc5c6\ub294 \ub0b4\uc6a9\uc774 \ub9ce\uc740 \uac83\uc774\uc5c8\ub2e4."}),"\n",(0,l.jsxs)(n.p,{children:["\uc6b0\ub9ac \ud300\uc758 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\ub97c \uac04\ub7b5\ud788 \uc124\uba85\ud558\uc790\uba74 1\uac1c\uc758 Nest.js \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0\uc11c \uc5ec\ub7ec\uac00\uc9c0 \ub9c8\uc774\ud06c\ub85c \uc11c\ube44\uc2a4\ub4e4\uc744 \uac01\uac01 deploy \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c MSA\ub97c \uad6c\ud604\ud558\uace0 \uc788\ub2e4. \uac01 \ub9c8\uc774\ud06c\ub85c \uc11c\ube44\uc2a4\ub9c8\ub2e4 \uac01\uac01\uc758 Nest.js Application \uacfc Module \uc744 \ud1b5\ud574 \ud544\uc694\ud55c \uae30\ub2a5\ub4e4\ub9cc import \ud574\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0\ub9cc, \uc758\uc874\uc131Dependencies(",(0,l.jsx)(n.code,{children:"node_modules"}),")\uc740 \uacf5\ud1b5\uc774\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"  functions: \n    exampleLambdaIndex:\n      handler: ${PATH}.handler\n      package:\n          patterns: \n              - '!**'\n              - dist/** # js transfer result\n              - node_modules/** # all of dependencies\n          individually: true\n"})}),"\n",(0,l.jsx)(n.p,{children:'\uac00\ub839 A, B, C \ub77c\ub294 \uc758\uc874\uc131\uc774 \uc788\uc744 \ub54c, "\ud68c\uc6d0 \uc11c\ube44\uc2a4"\uc5d0\uc11c\ub294 A, C \ub9cc \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \ud68c\uc6d0 \uc11c\ube44\uc2a4\ub97c deploy \ud560 \ub54c\uc5d0\ub294 node_modules \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc758\uc874\uc131(A, B, C)\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294 \uac83\uc774\ub2e4. \uc774\ub807\ub2e4\ubcf4\ub2c8 \uc11c\ube44\uc2a4 \ucd08\ucc3d\uae30\uc5d0\ub294 \ubcc4 \ubb38\uc81c \uc5c6\uc5c8\uc9c0\ub9cc, \uc11c\ube44\uc2a4\uac00 \uc131\uc7a5\ud558\uace0 \uc18c\uc2a4\ucf54\ub4dc\uc640 \uc758\uc874\uc131\uc774 \ub298\uc5b4\ub098\uba74\uc11c \uc774\uc81c \ub354\uc774\uc0c1\uc740 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc5c6\ub294 \uc0c1\ud669\uae4c\uc9c0 \uc624\uac8c \ub418\uc5c8\ub2e4.'}),"\n",(0,l.jsx)(n.p,{children:"Lambda Layer\ub97c \uc0ac\uc6a9\ud574 \uacf5\ud1b5 \uc758\uc874\uc131\ub4e4\uc744 \ub530\ub85c \uad00\ub9ac\ud558\uace0 \uc788\uc74c\uc5d0\ub3c4 \uc774\ub7ec\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud574 \ub9c9\ub9c9\ud588\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"webpack-\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720",children:"Webpack \uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720"}),"\n",(0,l.jsx)(n.p,{children:"\uc6f9\ud329Webpack\uc740 \ud544\uc694\uc5c6\ub294(\uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294) \ucf54\ub4dc\ub97c \uc5c6\uc568\uc218 \uc788\ub2e4. \uac01 \ub9c8\uc774\ud06c\ub85c \uc11c\ube44\uc2a4\uc5d0 \uc2e4\uc81c \uc0ac\uc6a9\ub418\ub294 \uc18c\uc2a4\ucf54\ub4dc\uc640 \uc758\uc874\uc131\ub9cc\uc744 \uc774\uc6a9\ud574 \uacb0\uacfc\ubb3c\uc744 \ub9cc\ub4e4\uc5b4 \ub0b8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\uc5c6\ub294 \ucf54\ub4dc\ub4e4\uc744 \uc5c6\uc568 \uc218 \uc788\uace0 \uc2e4\uc81c \uae30\ub2a5\uc5d0 \ud544\uc694\ud55c \ucf54\ub4dc\ub9cc\uc744 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:'\uc704\uc5d0\uc11c \uc608\ub97c \ub4e0 "\ud68c\uc6d0 \uc11c\ube44\uc2a4"\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 B \uc758\uc874\uc131\uc744 \uc81c\uac70\ud560 \uc218 \uc788\ub2e4. \ud544\uc694\uc5c6\ub294 \uc758\uc874\uc131\uc744 \uc81c\uac70\ud560 \uc218 \uc788\uae30\uc5d0 \uc18c\uc2a4\ucf54\ub4dc\uc758 \uc6a9\ub7c9\uc744 \ud68d\uae30\uc801\uc73c\ub85c \uc904\uc77c\uc218 \uc788\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ud588\ub2e4.'}),"\n",(0,l.jsx)(n.h2,{id:"nestjs-webpack",children:"Nest.js Webpack"}),"\n",(0,l.jsx)(n.p,{children:"\ub2e4\uc591\ud55c \uc6f9\ud329 \ud234\ub4e4\uc774 \uc788\uc5c8\uc9c0\ub9cc Nest.js \uc758 \uc6f9\ud329 \uc635\uc158\uc744 \uc0ac\uc6a9\ud574 \ube4c\ub4dc\ud558\ub294 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud588\ub2e4. \uc6f9\ud329\uc744 \uc801\uc6a9\ud560 \ub54c \uac00\uc7a5 \uc911\uc694\ud55c \uc870\uac74 \uc911 \ud558\ub098\uac00 Nest.js \uc640\uc758 \ud638\ud658\uc131\uc774\uc5c8\ub294\ub370, Nest.js \uc5d0\uc11c \uc6f9\ud329\uc744 \uc9c0\uc6d0\ud558\uace0 \uc788\ub2e4\uba74 \uadf8 \ubc29\ubc95\uc774 \ucd5c\uc120\uc774\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.nestjs.com/cli/monorepo#webpack-options",children:"Nest.js-Webpack Options"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://webpack.js.org/configuration/",children:"Webpack Configuration"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"package.json"})," \ud30c\uc77c\uc5d0 \uc6f9\ud329\uc744 \uc801\uc6a9\ud574 \ube4c\ub4dc\ud558\ub3c4\ub85d \uc124\uc815\ud558\uace0, \uc6f9\ud329 \uc124\uc815\uc744 \uc704\ud574 ",(0,l.jsx)(n.code,{children:"webpack.config.js"})," \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5c8\ub2e4. \uc880 \ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.jsx)(n.a,{href:"../../../docs/aws/serverless-framework/how-to-set-webpack-multiple-entry",children:"Nest.js Webpack \uc801\uc6a9 \ubc29\ubc95"}),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"package.json"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'  "scripts": {\n    "build": "nest build --webpack --webpackPath ${PATH}/webpack.config.js"\n  }\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"webpack.config.js"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"  module.exports = (options, webpack) => {\n    return {\n      ...options,\n      entry: `./src/${NESTJS_APP_PATH}`,\n      externals: [],\n      output: {\n        ...options.output,\n        clean: true,\n        libraryTarget: 'commonjs2'\n      },\n      plugins: [\n        ...options.plugins,\n        new webpack.optimize.LimitChunkCountPlugin({\n          maxChunks: 1,\n        }),\n      ],\n    }\n  };\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"mainjs",children:"main.js"}),"\n",(0,l.jsxs)(n.p,{children:["\uc6f9\ud329\uc744 \uc801\uc6a9\ud574 Nest.js \ub97c \ube4c\ub4dc\ud558\uba74 ",(0,l.jsx)(n.code,{children:"dist"})," \ub514\ub809\ud1a0\ub9ac\uc5d0 ",(0,l.jsx)(n.strong,{children:"main.js"})," \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c\ub2e4. \uc774 \ud30c\uc77c\uc740 ",(0,l.jsx)(n.em,{children:"\uc6f9\ud329\uc774 \uc801\uc6a9\ub41c \ube4c\ub4dc \uacb0\uacfc \ud30c\uc77c"})," \uc774\ub2e4. \ud30c\uc77c\uc744 \ud655\uc778\ud574\ubcf4\uba74 \uc758\uc874\uc131\uc744 \ud3ec\ud568\ud55c \uad00\ub828 \uc18c\uc2a4\ucf54\ub4dc\uac00 1\uac1c\uc758 \ud30c\uc77c\ub85c \ub9cc\ub4e4\uc5b4\uc838 \uc788\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"main.js \ub77c\ub294 \uc774\ub984\uc740 \ubcc0\uacbd\ud560 \uc218 \uc788\uc73c\uba70 \uae30\ubcf8\uac12\uc774 main.js \uc774\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"serverless-framework-yaml",children:"Serverless Framework YAML"}),"\n",(0,l.jsx)(n.p,{children:"Nest.js \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc6f9\ud329\uc744 \uc801\uc6a9\ud588\ub2e4\uba74 \uc6f9\ud329\uc774 \uc801\uc6a9\ub41c \ud30c\uc77c\uc744 deploy \ud560 \uc218\uc788\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4. package.json \uc640 sls YAML \ud30c\uc77c\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc218\uc815\ud55c\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"package.json"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'  "scripts": {\n    "deploy:example": "nest build --webpack --webpackPath ${PATH}/webpack.config.js && sls deploy -c ./${YAML_PATH}/serverless.yaml"\n  }\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"YAML"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"main.js \ud30c\uc77c\uc744 \uadf8\ub300\ub85c \uc5c5\ub85c\ub4dc \ud558\ub294 \ubc29\uc2dd\uc774\uae30\uc5d0 \ub354 \uc774\uc0c1 Lambda Layer \ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"  functions: \n    exampleLambdaIndex:\n      handler: dist/main.handler  # main.js \uc758 handler \ud568\uc218\n      package:\n        patterns: \n          - '!**'\n          - dist/main.js # webpack result\n        individually: true\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc6f9\ud329 \uc801\uc6a9\uc744 \ub05d\ub0b4\uace0 deploy \ud574\ubcf4\uba74 \ubb38\uc81c \uc5c6\uc774 \uc18c\uc2a4\ucf54\ub4dc\uac00 \uc5c5\ub85c\ub4dc\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"  $ npm run deploy:example\n"})}),"\n",(0,l.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"250MB -> 15MB"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\uc6f9\ud329\uc744 \uc801\uc6a9\ud568\uc73c\ub85c\uc11c deploy \ud560 \ub54c \uc5c5\ub85c\ub4dc\ud560 \uc18c\uc2a4\ucf54\ub4dc\uc758 \uc591\uc744 \ub300\ud3ed \uc904\uc77c \uc218 \uc788\uc5c8\ub2e4. \uae30\uc874\uc758 \ubc29\uc2dd\uc740 \ud504\ub85c\uc81d\ud2b8\uc758 \uc18c\uc2a4\ucf54\ub4dc(",(0,l.jsx)(n.code,{children:"dist"}),")\uc640 \uc758\uc874\uc131(",(0,l.jsx)(n.code,{children:"node_module"}),")\uc744 \ubaa8\ub450 \uc5c5\ub85c\ub4dc\ud558\ub294 \ubc29\uc2dd\uc774\uc5c8\uae30\uc5d0 250MB\uac00 \ub118\uc5b4\uac00\ub294 \uc6a9\ub7c9\uc774\uc5c8\uc9c0\ub9cc \uc6f9\ud329\uc744 \ud1b5\ud574 \uc57d 15MB \uc815\ub3c4\uc758 main.js \ub9cc \uc5c5\ub85c\ub4dc\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ubc14\uafb8\uc5c8\ub2e4. \uc774\ub97c \ud1b5\ud574 S3 \uc758 \uc800\uc7a5\uc6a9\ub7c9\ub3c4 \uc904\uc77c \uc218 \uc788\uc5c8\ub2e4. (AWS Lambda \uc758 \uc18c\uc2a4\ucf54\ub4dc\ub294 \uc77c\uc815 \uc6a9\ub7c9 \uc774\uc0c1\uc778 \uacbd\uc6b0 S3 \uc5d0 \uc5c5\ub85c\ub4dc \ub41c\ub2e4.)"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Build \ud544\uc218"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["sls \ub294 deploy \ud560 \ub54c, ",(0,l.jsx)(n.code,{children:"patterns"})," \uc5d0 \uc9c0\uc815\ud55c \ud30c\uc77c\ub4e4\uc744 \uadf8\ub300\ub85c \ud328\ud0a4\uc9d5\ud574 \uc5c5\ub85c\ub4dc\ud55c\ub2e4. \ube4c\ub4dc\uc5ec\ubd80\ub294 \uc911\uc694\ud558\uc9c0 \uc54a\ub2e4. \uadf8\ub798\uc11c \uac00\ub054 \ucf54\ub4dc\ub97c \uc218\uc815\ud55c \ub4a4, build \ub97c \ud558\uc9c0 \uc54a\uace0 deploy \ud588\ub358 \uacbd\uc6b0\uac00 \uc788\uc5c8\ub2e4. \uadf8\ub7ec\uba74 \uc218\uc815 \ub0b4\uc6a9\uc774 \uc804\ud600 \ubc18\uc601\ub418\uc9c0 \uc54a\ub294\ub2e4. webpack \ucc98\ub9ac\ub97c \uc704\ud574 \ubc18\ub4dc\uc2dc build \ub97c \ud574\uc57c\ud558\uae30\uc5d0 build \uac00 \ub418\uc9c0 \uc54a\uc740 \ucf54\ub4dc\uac00 deploy \ud558\ub294 \uc77c\uc774 \uc5c6\uc5b4\uc84c\ub2e4."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Build \uc2dc\uac04 \uc99d\uac00"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc544\uc26c\uc6b4 \uc810\uc740 \uc774\ub97c \ud1b5\ud574 build \uc2dc\uac04\uc774 \uaf64\ub098 \uae38\uc5b4\uc84c\ub2e4\ub294 \uac83\uc774\ub2e4. webpack \uc744 \uc801\uc6a9\ud558\ub294 \uc2dc\uac04\uc774 \uac78\ub9ac\uba74\uc11c \uc57d 30\ucd08 \uc774\uc0c1, \uacbd\uc6b0\uc5d0 \ub530\ub77c\uc11c\ub294 \uc57d 3\ubd84 \uc774\uc0c1 build \uc2dc\uac04\uc774 \ub298\uc5b4\ub0ac\ub2e4. build \uc2dc\uac04\uc740 \ub2e8\ucd95 \ud560 \uc218 \uc788\ub294 \ub2e4\ub978 \ud234\ub4e4\ub3c4 \uc54c\uc544\ubd10\uc57c\ud560 \ud544\uc694\uac00 \uc0dd\uacbc\ub2e4."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var l=s(6540);const a={},i=l.createContext(a);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);