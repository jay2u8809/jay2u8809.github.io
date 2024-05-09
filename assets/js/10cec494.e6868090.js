"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[5950],{9203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=s(4848),i=s(8453);const r={id:"how-to-set-webpack-multiple-entry",title:"Webpack \uc801\uc6a9\ud558\uae30 - Multiple EntryPoint",tags:["de.log","wiki","serverless framework","aws lambda","serverless","sls","webpack","multi entry","multiple entry","nest.js"]},t="Webpack \uc801\uc6a9\ud558\uae30: Multiple Entry",a={id:"serverless-framework/how-to-set-webpack-multiple-entry",title:"Webpack \uc801\uc6a9\ud558\uae30 - Multiple EntryPoint",description:"Nest.js \ub85c \uac1c\ubc1c, Serverless Framework \ub85c AWS Lambda \ub97c Deploy \ud569\ub2c8\ub2e4.",source:"@site/onigiri/delog/serverless-framework/how-to-set-webpack-multiple-entry.md",sourceDirName:"serverless-framework",slug:"/serverless-framework/how-to-set-webpack-multiple-entry",permalink:"/onigiri/delog/serverless-framework/how-to-set-webpack-multiple-entry",draft:!1,unlisted:!1,tags:[{label:"de.log",permalink:"/onigiri/delog/tags/de-log"},{label:"wiki",permalink:"/onigiri/delog/tags/wiki"},{label:"serverless framework",permalink:"/onigiri/delog/tags/serverless-framework"},{label:"aws lambda",permalink:"/onigiri/delog/tags/aws-lambda"},{label:"serverless",permalink:"/onigiri/delog/tags/serverless"},{label:"sls",permalink:"/onigiri/delog/tags/sls"},{label:"webpack",permalink:"/onigiri/delog/tags/webpack"},{label:"multi entry",permalink:"/onigiri/delog/tags/multi-entry"},{label:"multiple entry",permalink:"/onigiri/delog/tags/multiple-entry"},{label:"nest.js",permalink:"/onigiri/delog/tags/nest-js"}],version:"current",frontMatter:{id:"how-to-set-webpack-multiple-entry",title:"Webpack \uc801\uc6a9\ud558\uae30 - Multiple EntryPoint",tags:["de.log","wiki","serverless framework","aws lambda","serverless","sls","webpack","multi entry","multiple entry","nest.js"]},sidebar:"delogSidebar",previous:{title:"Serverless Framework",permalink:"/onigiri/delog/category/serverless-framework-1"},next:{title:"Living in Japan",permalink:"/onigiri/delog/category/living-in-japan-1"}},c={},d=[{value:"Nest.js Build: Webpack",id:"nestjs-build-webpack",level:2},{value:"webpack.config.js",id:"webpackconfigjs",level:2},{value:"Serverless Framework: YAML",id:"serverless-framework-yaml",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"webpack-\uc801\uc6a9\ud558\uae30-multiple-entry",children:"Webpack \uc801\uc6a9\ud558\uae30: Multiple Entry"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Nest.js \ub85c \uac1c\ubc1c, Serverless Framework \ub85c AWS Lambda \ub97c Deploy \ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"System:\n  Versions:\n    NodeJs: v16.20.2\n    NestJs: v8.2.8\n    ServerlessFramework: v3.36.0\n    Typescript: v4.3.5\n"})}),"\n",(0,l.jsx)(n.h2,{id:"nestjs-build-webpack",children:"Nest.js Build: Webpack"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["nest.js \uc758 webpack \uc635\uc158\uc744 \uc774\uc6a9\ud558\uc5ec build \ud55c\ub2e4.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"nest build --webpack --webpackPath ${webpack.config.js path}"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["package.json","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"AWS Lambda \ub97c Serverless Framework \ub97c \uc774\uc6a9\ud574 Deploy \ud560 \ub54c, webpack \uc744 \uc801\uc6a9\ud574 build \ud558\ub3c4\ub85d \uba85\ub839\uc5b4\ub97c \ub9cc\ub4e0\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "name": "example-project",\n  "version": "0.0.1",\n  "scripts": {\n    "build": "nest build",\n    "deploy:lambda": "nest build --webpack --webpackPath src/lambda/webpack.config.js && sls deploy -c serverless.yaml"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"webpackconfigjs",children:"webpack.config.js"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["entry","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"key \uac12\uc73c\ub85c Serverless framework \ub85c Deploy \ud560 AWS Lambda \ud568\uc218\ub97c \uc9c0\uc815"}),"\n",(0,l.jsxs)(n.li,{children:["\ud30c\uc77c\uc758 \uacbd\ub85c\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 Root \ub97c \uae30\uc900\uc73c\ub85c ",(0,l.jsx)(n.code,{children:"\uc808\ub300\uacbd\ub85c"}),"\ub97c \uc9c0\uc815"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["output.filename","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"webpack \uc73c\ub85c bundling \ud588\uc744 \ub54c, \uc0dd\uc131\ub41c \ud30c\uc77c\uba85"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[name]"})," \uc5d0 entry \uac1d\uccb4\uc758 key \uac00 \uc9c0\uc815\ub41c\ub2e4.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://qiita.com/sansaisoba/items/921438a19cbf5a31ec53",children:"Qiita: webpack\u306e\u57fa\u672c\u3060\u3051\u3069\u30cf\u30de\u308a\u3084\u3059\u3044entry\u306e\u8a2d\u5b9a\u3068[name]"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"[name].bundle.js"})," \ucc98\ub7fc ",(0,l.jsx)(n.code,{children:"."})," \uc744 \uc774\uc6a9\ud558\uc5ec \uc9c0\uc815\ud558\uc9c0 \uc54a\ub294\ub2e4.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["AWS Lambda \uac00 \uc2e4\ud589\ub420 \ub54c ",(0,l.jsx)(n.code,{children:"Runtime.ImportModuleError"})," \uac00 \ubc1c\uc0dd\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["plugins","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"LimitChunkCountPlugin"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uac01 AWS Lambda \ud568\uc218\ub9c8\ub2e4 1\uac1c\uc758 \ud30c\uc77c\ub85c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 plugin"}),"\n",(0,l.jsx)(n.li,{children:"\uc5f0\uacb0\ub41c \uc18c\uc2a4\ucf54\ub4dc\uac00 \ub9ce\uace0 \uae38 \uacbd\uc6b0, Webpack \uc740 \uc790\ub3d9\uc73c\ub85c chunk \ud558\uc5ec bundling \ud55c\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ud558\ub098\uc758 \ud30c\uc77c\uc774 \uc544\ub2cc \uc5ec\ub7ec \uac1c\uc758 \ud30c\uc77c\ub85c \ubd84\ud560 \ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \ud30c\uc77c\uc758 \uac2f\uc218\ub97c \uc9c0\uc815\ud560 \uacbd\uc6b0 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"module.exports = (options, webpack) => {\n  return {\n    ...options,\n    entry: {\n      convertImage: './src/lambda/convert-image.ts',\n      backupS3: './src/lambda/backup-s3.ts',\n      statisticsUsers: './src/statistics/statistics-users.ts',\n    },\n    externals: [],\n    output: {\n      ...options.output,\n      clean: true,\n      libraryTarget: 'commonjs2'\n      filename: '[name]-bundle.js',\n    },\n    plugins: [\n      ...options.plugins,\n      new webpack.optimize.LimitChunkCountPlugin({\n        maxChunks: 1,\n      }),\n    ],\n  }\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"serverless-framework-yaml",children:"Serverless Framework: YAML"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["handler","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"webpack \uc73c\ub85c \uc0dd\uc131\ub41c \ud30c\uc77c\uba85\uc5d0 \ud574\ub2f9\ud558\ub294 handler \ud568\uc218\uba85\uc744 \uc9c0\uc815"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["include","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["webpack \uc73c\ub85c \uc0dd\uc131\ub41c \ud30c\uc77c\uba85\uc744 \uc9c0\uc815(",(0,l.jsx)(n.code,{children:"[name]-bundle.js"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"?-bundle.js"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\uac04\ud639 webpack \uc758 ",(0,l.jsx)(n.code,{children:"LimitChunkCountPlugin"})," \ub97c \uc774\uc6a9\ud574\ub3c4 \ud30c\uc77c\uc774 \ubd84\ud560(chunk)\ub418\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[name]-bundle.js"})," \uc758 \uacbd\uc6b0, \ubd84\ud560\ub41c\ub2e4\uba74 [name] \uc5d0 \uc22b\uc790\uac00 \ubd99\uc5b4 ",(0,l.jsx)(n.code,{children:"8-bundle.js"})," \ub098 ",(0,l.jsx)(n.code,{children:"10-bundle.js"})," \ub4f1\uc758 \uc22b\uc790 \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c\ub2e4.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://stackoverflow.com/questions/43507438/webpack-is-producing-lots-of-numbered-files",children:"StackOverflow: webpack is producing lots of numbered files"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\uc774\ub7ec\ud55c \ud30c\uc77c\ub4e4\ub3c4 \ud568\uaed8 include \ud574\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 \uae00\uc790 \uc218\uc5d0 \ub9de\ucdb0 ",(0,l.jsx)(n.code,{children:"?-bundle.js"})," \ub610\ub294 ",(0,l.jsx)(n.code,{children:"??-bundle.js"})," \ub97c \uc9c0\uc815\ud55c\ub2e4."]}),"\n",(0,l.jsx)(n.li,{children:"\uc18c\uc2a4\ucf54\ub4dc\uac00 \uae38\uc5b4\uc9c8 \uacbd\uc6b0\uc5d0 \ubd84\ud560 \ud30c\uc77c\ub4e4\uc774 \uc0dd\uc131\ub420 \uc218 \uc788\uae30\uc5d0 \ubc18\ub4dc\uc2dc \ud574\uc57c\ud558\ub294 \uac83\uc740 \uc544\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"...\nfunctions: \n  handleConvertImage:\n    handler: dist/convertImage-bundle.handler\n    package:\n      individually: true\n      include:\n        - dist/convertImage-bundle.js\n        - dist/?-bundule.js\n        - dist/??-bundule.js\n      exclude:\n        - '**'\n    timeout: 900\n    memorySize: 1024\n    events:\n      - sns: XXXXXXXXX\n\n  handleBackupS3:\n    handler: dist/backupS3-bundle.backupUserHandler\n      package:\n        individually: true\n        include:\n          - dist/backupS3-bundle.js\n          - dist/?-bundule.js\n          - dist/??-bundule.js\n        exclude:\n          - '**'\n      timeout: 900\n      memorySize: 1024\n      events:\n        - schedule: cron(10 18 L * ? *)\n  \n  handleStatisticsUsers:\n    handler: dist/statisticsUsers-bundle.handler\n      package:\n        individually: true\n        include:\n          - dist/statisticsUsers-bundle.js\n          - dist/?-bundule.js\n          - dist/??-bundule.js\n        exclude:\n          - '**'\n      timeout: 900\n      memorySize: 4096\n      events:\n        - schedule: cron(30 22 * * ? *)\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Refs:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://webpack.js.org/concepts/entry-points/",children:"Webpack.js.org: Entry Point"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://webpack.js.org/plugins/limit-chunk-count-plugin",children:"Webpack.js.org: LimitChunkCountPlugin"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://webpack.js.org/configuration/output/",children:"Webpack.js.org: Output"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var l=s(6540);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);