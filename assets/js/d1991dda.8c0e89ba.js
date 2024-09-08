"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[8054],{4022:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(4848),o=n(8453);const a={id:"how-to-adopt-jest",title:"Jest \uc801\uc6a9 \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","javascript","typescript","jest","unit test"]},i="Jest \ub97c \uc801\uc6a9\ud558\ub294 \ubc29\ubc95",r={id:"programming/nodejs/jest/how-to-adopt-jest",title:"Jest \uc801\uc6a9 \ubc29\ubc95",description:"\x3c!--",source:"@site/docs/programming/nodejs/jest/how-to-adopt-jest.md",sourceDirName:"programming/nodejs/jest",slug:"/programming/nodejs/jest/how-to-adopt-jest",permalink:"/docs/programming/nodejs/jest/how-to-adopt-jest",draft:!1,unlisted:!1,tags:[{inline:!0,label:"devian-lab",permalink:"/docs/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/docs/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/docs/tags/job\u02d0\u8ac7"},{inline:!0,label:"wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"nodejs",permalink:"/docs/tags/nodejs"},{inline:!0,label:"javascript",permalink:"/docs/tags/javascript"},{inline:!0,label:"typescript",permalink:"/docs/tags/typescript"},{inline:!0,label:"jest",permalink:"/docs/tags/jest"},{inline:!0,label:"unit test",permalink:"/docs/tags/unit-test"}],version:"current",frontMatter:{id:"how-to-adopt-jest",title:"Jest \uc801\uc6a9 \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","javascript","typescript","jest","unit test"]},sidebar:"labDocsSidebar",previous:{title:"Unit Test \ubc29\ubc95",permalink:"/docs/programming/nodejs/jest/how-to-do-unit-test-on-jest"},next:{title:"Data Type \ubcc0\uacbd \ubc29\ubc95",permalink:"/docs/programming/nodejs/how-to-convert-data-type"}},l={},d=[{value:"Install Jest Packages",id:"install-jest-packages",level:2},{value:"All Packages",id:"all-packages",level:3},{value:"Jest",id:"jest",level:3},{value:"@Types/Jest",id:"typesjest",level:3},{value:"Ts-Jest",id:"ts-jest",level:3},{value:"Error",id:"error",level:2},{value:"Jest encountered an unexpected token",id:"jest-encountered-an-unexpected-token",level:3},{value:"package.json \uc218\uc815",id:"packagejson-\uc218\uc815",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jest-\ub97c-\uc801\uc6a9\ud558\ub294-\ubc29\ubc95",children:"Jest \ub97c \uc801\uc6a9\ud558\ub294 \ubc29\ubc95"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-09-01\n  updatedAt: 2024-09-01\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"install-jest-packages",children:"Install Jest Packages"}),"\n",(0,t.jsx)(s.h3,{id:"all-packages",children:"All Packages"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"  $ npm i --save-dev @types/jest jest ts-jest\n  $ yarn add -D @types/jest jest ts-jest\n"})}),"\n",(0,t.jsx)(s.h3,{id:"jest",children:"Jest"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"  $ npm i --save-dev jest\n  # $ yarn add -D jest\n"})}),"\n",(0,t.jsx)(s.h3,{id:"typesjest",children:"@Types/Jest"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"  $ npm i --save-dev @types/jest\n  # $ yarn add -D @types/jest\n"})}),"\n",(0,t.jsx)(s.h3,{id:"ts-jest",children:"Ts-Jest"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"  $ npm i --save-dev ts-jest\n  # $ yarn add -D ts-jest\n"})}),"\n",(0,t.jsx)(s.h2,{id:"error",children:"Error"}),"\n",(0,t.jsx)(s.h3,{id:"jest-encountered-an-unexpected-token",children:"Jest encountered an unexpected token"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'Jest encountered an unexpected token\n\nJest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.\n\n    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.\n\n    By default "node_modules" folder is ignored by transformers.\n\n    Here\'s what you can do:\n    \u2022 If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.\n    \u2022 If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript\n    \u2022 To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.\n    \u2022 If you need a custom transformation specify a "transform" option in your config.\n    \u2022 If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.\n\n    You\'ll find more details and examples of these config options in the docs:\n    https://jestjs.io/docs/configuration\n    For information about custom transformations, see:\n    https://jestjs.io/docs/code-transformation\n'})}),"\n",(0,t.jsx)(s.h3,{id:"packagejson-\uc218\uc815",children:"package.json \uc218\uc815"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["jest \uc124\uc815\uc5d0\uc11c ",(0,t.jsx)(s.code,{children:"transform"})," \ucd94\uac00"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'  "transform": {\n    "^.+\\\\.(t|j)s$": "ts-jest"\n  },\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Refs:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://jestjs.io/docs/code-transformation",children:"Jest - Code Transformation"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.a,{href:"https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:["Jest - Configuring Jest",":transform"," "]})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(6540);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);