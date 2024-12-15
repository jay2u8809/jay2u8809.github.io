"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[6497],{73067:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var r=s(44275),t=s(74848),i=s(28453);const l={slug:"2022-05-28-error-eslint-parsing-error",title:"ReactNative - [Error] ES Lint - Parsing error",authors:["devian"],tags:["devian-lab","dev-posts","react native","trouble shooting"],keywords:["devian-lab","Job\u02d0\u8ac7","react native","ios","error","trouble shooting","ios build failed","could not get the simulator list from xcode","could not find podfile"],description:"React Native \uc5d0\uc11c ES Lint \uc758 Parsing error \ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."},o="[React Native] ES Lint - Parsing error",c={authorsImageUrls:[void 0]},a=[{value:"Intro",id:"intro",level:2},{value:"\uc6d0\uc778 \ubd84\uc11d",id:"\uc6d0\uc778-\ubd84\uc11d",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2},{value:"\ud2b9\uc815 \ud30c\uc77c \ud615\uc2dd(*.ts, *.tsx) \ub9cc ES Lint \uccb4\ud06c \ub300\uc0c1\uc5d0 \ub123\uae30",id:"\ud2b9\uc815-\ud30c\uc77c-\ud615\uc2ddts-tsx-\ub9cc-es-lint-\uccb4\ud06c-\ub300\uc0c1\uc5d0-\ub123\uae30",level:3},{value:"\ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac\ub9cc ES Lint \uccb4\ud06c \ub300\uc0c1\uc5d0 \ub123\uae30",id:"\ud2b9\uc815-\ub514\ub809\ud1a0\ub9ac\ub9cc-es-lint-\uccb4\ud06c-\ub300\uc0c1\uc5d0-\ub123\uae30",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2022-05-28\n  updatedAt: 2022-05-28\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"ReactNative \uc758 EsLint \uc5d0\ub7ec\ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsxs)(n.p,{children:["React Native \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ES Lint \uc124\uc815\uc744 \ud55c \ub4a4, ",(0,t.jsx)(n.code,{children:".eslintrc.js"})," \ud30c\uc77c\uc744 \uc870\uae08 \uc218\uc815\ud588\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["Typescript \ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uae30\uc5d0 parserOptions \uc5d0 project \ud56d\ubaa9\uc744 \ucd94\uac00\ud558\uc5ec ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," \ud30c\uc77c\uc744 \ucc38\uc870\ud558\ub3c4\ub85d \ud588\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".eslintrc.js"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"  ... \n\n  'parserOptions': {\n    'ecmaFeatures': {\n      'jsx': true\n    },\n    'ecmaVersion': 12,\n    'project': './tsconfig.json',\n  },\n\n  ...\n  \n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub9ac\uace0 \uae30\ubcf8\uac12\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\ub294 ",(0,t.jsx)(n.code,{children:"package.json"})," \ud30c\uc77c\uc758 lint\ub97c \uc2e4\ud589\ud588\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"package.json"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "scripts": {\n    ...\n    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",\n    ...\n  },\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\uc2e4\ud589"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'  $ npm run lint\n\n  /${PROJECT_PATH}/${APP_NAME}/.eslintrc.js\n    0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.\n  The file does not match your project config: .eslintrc.js.\n  The file must be included in at least one of the projects provided\n\n  /${PROJECT_PATH}/${APP_NAME}/babel.config.js\n    0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.\n  The file does not match your project config: babel.config.js.\n  The file must be included in at least one of the projects provided\n\n  /${PROJECT_PATH}/${APP_NAME}/metro.config.js\n    0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.\n  The file does not match your project config: metro.config.js.\n  The file must be included in at least one of the projects provided\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uc6d0\uc778-\ubd84\uc11d",children:"\uc6d0\uc778 \ubd84\uc11d"}),"\n",(0,t.jsxs)(n.p,{children:["Error \ub85c\uadf8\ub97c \uc77d\uc5b4\ubcf4\ub2c8 ",(0,t.jsx)(n.code,{children:".eslintrc.js"}),", ",(0,t.jsx)(n.code,{children:"babel.config.js"}),", ",(0,t.jsx)(n.code,{children:"metro.config.js"})," 3\uac1c\uc758 \uc124\uc815 \ud30c\uc77c\ub4e4\uc774 ",(0,t.jsx)(n.code,{children:".eslintrc.js"})," \ud30c\uc77c\uc5d0 \ubc29\uae08 \ucd94\uac00\ud55c project \uc18d\uc131\uc758 \uc124\uc815\uacfc \ub9de\uc9c0 \uc54a\ub294\ub2e4\uace0 \ud55c\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"Typescript \ub97c \uc801\uc6a9\ud558\uba74\uc11c project \uc18d\uc131\uc5d0 tsconfig.json \uc744 \uc124\uc815\ud588\ub294\ub370 \uc774\uac8c \ubb38\uc81c\uc600\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud574\uacb0",children:"\ud574\uacb0"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".eslinltrc.js"})," \uc758 \uc801\uc6a9 \ub300\uc0c1\uc5d0\uc11c 3\uac1c\uc758 \ud30c\uc77c\uc744 \uc81c\uc678"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \uc5d0\ub7ec\uc5d0 \ub300\ud574 \uad6c\uae00\ub9c1\ud574\ubcf4\ub2c8 \uc758\uc678\ub85c \ud574\uacb0 \ubc29\ubc95\uc740 \uac04\ub2e8\ud588\ub2e4. ",(0,t.jsx)(n.code,{children:".eslinltrc.js"})," \uc758  \uc801\uc6a9\ub418\ub294 \ub300\uc0c1\uc5d0\uc11c \uc774 3\uac1c\uc758 \ud30c\uc77c\ub4e4\uc744 \uc81c\uc678\ud558\uba74 \ub41c\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"es lint \ucc98\ub9ac\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8\uc758 \ucf54\ub4dc\ub4e4\uc744 \ub300\uc0c1\uc73c\ub85c \ucc98\ub9ac\ud558\uae30\uc5d0 3\uac1c\uc758 \uc124\uc815 \ud30c\uc77c(js)\ub3c4 \ud3ec\ud568 \ub41c\ub2e4. \ud558\uc9c0\ub9cc \uc774 3\uac1c\uc758 \uc124\uc815 \ud30c\uc77c\ub4e4\uc740 es lint \ucc98\ub9ac\ub97c \ud560 \ud544\uc694\uac00 \uc5c6\ub2e4. (\uc9c1\uc811\uc801\uc73c\ub85c \ucf54\ub529\ud558\ub294 \ud30c\uc77c\uc774 \uc544\ub2c8\ubbc0\ub85c)"}),"\n",(0,t.jsx)(n.p,{children:"\ub354\uc6b1\uc774 Typescript \ub85c \ucf54\ub529\ud558\uae30 \ub54c\ubb38\uc5d0 ts, tsx \ud30c\uc77c\ub4e4\ub9cc lint \ucc98\ub9ac\ub97c \ud558\uba74 \ub41c\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"\ud2b9\uc815-\ud30c\uc77c-\ud615\uc2ddts-tsx-\ub9cc-es-lint-\uccb4\ud06c-\ub300\uc0c1\uc5d0-\ub123\uae30",children:"\ud2b9\uc815 \ud30c\uc77c \ud615\uc2dd(*.ts, *.tsx) \ub9cc ES Lint \uccb4\ud06c \ub300\uc0c1\uc5d0 \ub123\uae30"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"package.json"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["*.js, *.jsx \ud30c\uc77c\uc744 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678: ",(0,t.jsx)(n.code,{children:"eslint . --ext .ts,.tsx"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "scripts": {\n    ...\n    "lint": "eslint . --ext .ts,.tsx",\n    ...\n  },\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\ud2b9\uc815-\ub514\ub809\ud1a0\ub9ac\ub9cc-es-lint-\uccb4\ud06c-\ub300\uc0c1\uc5d0-\ub123\uae30",children:"\ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac\ub9cc ES Lint \uccb4\ud06c \ub300\uc0c1\uc5d0 \ub123\uae30"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"package.json"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["src \ub514\ub809\ud1a0\ub9ac\ub9cc \ub300\uc0c1\uc73c\ub85c \ud558\uae30: ",(0,t.jsx)(n.code,{children:"eslint . --ext .ts,.tsx src/"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "scripts": {\n    ...\n    "lint": "eslint . --ext .ts,.tsx src/",\n    ...\n  },\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Refs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://dev-yakuza.posstree.com/ko/react-native/eslint-prettier-husky-lint-staged/",children:"React Native\uc5d0\uc11c ESLint, Prettier\ub97c \ud504\ub85c\ucc98\ub7fc \uc0ac\uc6a9\ud558\uae30"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},44275:e=>{e.exports=JSON.parse('{"permalink":"/dev-posts/2022-05-28-error-eslint-parsing-error","source":"@site/dev-posts/programming/react/react-native/2022-05-28-error-eslint-parsing-error.md","title":"ReactNative - [Error] ES Lint - Parsing error","description":"React Native \uc5d0\uc11c ES Lint \uc758 Parsing error \ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4.","date":"2022-05-28T00:00:00.000Z","tags":[{"inline":true,"label":"devian-lab","permalink":"/dev-posts/tags/devian-lab"},{"inline":true,"label":"dev-posts","permalink":"/dev-posts/tags/dev-posts"},{"inline":true,"label":"react native","permalink":"/dev-posts/tags/react-native"},{"inline":true,"label":"trouble shooting","permalink":"/dev-posts/tags/trouble-shooting"}],"readingTime":3.18,"hasTruncateMarker":true,"authors":[{"name":"Dev.ian","title":"Software Engineer","url":"https://github.com/jay2u8809","imageURL":"/img/onigiri_icon.jpg","key":"devian","page":null}],"frontMatter":{"slug":"2022-05-28-error-eslint-parsing-error","title":"ReactNative - [Error] ES Lint - Parsing error","authors":["devian"],"tags":["devian-lab","dev-posts","react native","trouble shooting"],"keywords":["devian-lab","Job\u02d0\u8ac7","react native","ios","error","trouble shooting","ios build failed","could not get the simulator list from xcode","could not find podfile"],"description":"React Native \uc5d0\uc11c ES Lint \uc758 Parsing error \ub97c \ud574\uacb0\ud574 \ubcf8\ub2e4."},"unlisted":false,"prevItem":{"title":"Git - [Error] adding files failed","permalink":"/dev-posts/2022-05-28-error-adding-files-failed"},"nextItem":{"title":"ReactNative - [Error] iOS - Could not get the simulator list from Xcode","permalink":"/dev-posts/2022-05-28-error-ios-could-not-get-simulator-list-from-xcode"}}')}}]);