"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[8689],{30768:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"aws/serverless-framework/how-to-set-exclude-file","title":"\ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95","description":"AWS Lambda \uc5d0\uc11c \ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4.","source":"@site/docs/aws/serverless-framework/how-to-set-exclude-file.md","sourceDirName":"aws/serverless-framework","slug":"/aws/serverless-framework/how-to-set-exclude-file","permalink":"/docs/aws/serverless-framework/how-to-set-exclude-file","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"devian-lab","permalink":"/docs/tags/devian-lab"},{"inline":true,"label":"dev.ian","permalink":"/docs/tags/dev-ian"},{"inline":true,"label":"Job\u02d0\u8ac7","permalink":"/docs/tags/job\u02d0\u8ac7"},{"inline":true,"label":"wiki","permalink":"/docs/tags/wiki"},{"inline":true,"label":"aws","permalink":"/docs/tags/aws"},{"inline":true,"label":"lambda","permalink":"/docs/tags/lambda"},{"inline":true,"label":"serverless","permalink":"/docs/tags/serverless"},{"inline":true,"label":"serverless framework","permalink":"/docs/tags/serverless-framework"},{"inline":true,"label":"package exclude","permalink":"/docs/tags/package-exclude"}],"version":"current","frontMatter":{"id":"how-to-set-exclude-file","title":"\ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95","tags":["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","aws","lambda","serverless","serverless framework","package exclude"],"keywords":["devian-lab","Job\u02d0\u8ac7","aws","lambda","serverless","serverless framework","package exclude"],"description":"AWS Lambda \uc5d0\uc11c \ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},"sidebar":"labDocsSidebar","previous":{"title":"Prune Plugin","permalink":"/docs/aws/serverless-framework/how-to-set-prune-plugin"},"next":{"title":"CloudWatch - Log Insights \ucffc\ub9ac","permalink":"/docs/aws/tips/how-to-use-log-insights-query"}}');var r=n(74848),l=n(28453);const i={id:"how-to-set-exclude-file",title:"\ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","aws","lambda","serverless","serverless framework","package exclude"],keywords:["devian-lab","Job\u02d0\u8ac7","aws","lambda","serverless","serverless framework","package exclude"],description:"AWS Lambda \uc5d0\uc11c \ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},c="\ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\uae30",d={},t=[{value:"Packaging \ub300\uc0c1 \uc120\ud0dd",id:"packaging-\ub300\uc0c1-\uc120\ud0dd",level:2},{value:"\uc120\ud0dd \ubc29\ubc95",id:"\uc120\ud0dd-\ubc29\ubc95",level:2},{value:"\ud2b9\uc815\ud55c \ud30c\uc77c \ub610\ub294 \ub514\ub809\ud1a0\ub9ac\ub9cc \uc9c0\uc815",id:"\ud2b9\uc815\ud55c-\ud30c\uc77c-\ub610\ub294-\ub514\ub809\ud1a0\ub9ac\ub9cc-\uc9c0\uc815",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"\ud544\uc694\ud55c-\ud30c\uc77c\ub9cc-packaging-\ud558\uae30",children:"\ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\uae30"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-08-14\n  updatedAt: 2024-08-14\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"packaging-\ub300\uc0c1-\uc120\ud0dd",children:"Packaging \ub300\uc0c1 \uc120\ud0dd"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Serverless Framework(\uc774\ud558 ",(0,r.jsx)(s.code,{children:"sls"}),") \ub85c AWS Lambda \ub97c deploy \ud560 \ub54c\uc5d0\ub294 ",(0,r.jsx)(s.strong,{children:"packaging"})," \uc774\ub77c\ub294 \uacfc\uc815\uc774 \ud544\uc694","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"AWS Lambda Code Storage \ub098 S3 \uc5d0 \uc5c5\ub85c\ub4dc\ud560 \uc18c\uc2a4\ucf54\ub4dc\ub97c \uc555\ucd95\ud558\ub294 \uacfc\uc815"}),"\n",(0,r.jsx)(s.li,{children:"\ud544\uc694\uc5c6\ub294 \uc18c\uc2a4\ucf54\ub4dc \uc81c\uc678 or \ud544\uc694\ud55c \uc18c\uc2a4\ucf54\ub4dc\ub9cc \ud3ec\ud568 \ub4f1\uc758 \uc124\uc815\uc774 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\uae30\ubcf8\uc801\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8\uc758 Root \uc5d0 \uc788\ub294 ",(0,r.jsx)(s.strong,{children:"\ubaa8\ub4e0 \ud30c\uc77c\uc774 \ub300\uc0c1"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\ud544\uc694\uc5c6\ub294 \uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c or \uc774\ubbf8\uc9c0 \ub4f1\uc774 \uc788\ub294 \ub514\ub809\ud1a0\ub9ac\ub294 \uc81c\uc678\ud558\ub294 \uac83\uc774 \ud6a8\uc728\uc801"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\uc120\ud0dd-\ubc29\ubc95",children:"\uc120\ud0dd \ubc29\ubc95"}),"\n",(0,r.jsxs)(s.p,{children:["sls \uc758 ",(0,r.jsx)(s.code,{children:"package.patterns"})," \ud56d\ubaa9\uc5d0\uc11c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac \ud3ec\ud568"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"  package:\n    patterns:\n      - 'node_modules/**'  # node_modules \uc544\ub798\uc758 \ubaa8\ub4e0 \ud30c\uc77c packaging\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac \uc81c\uc678"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"  package:\n    patterns:\n      - '!node_modules/**'  # node_modules \uc544\ub798\uc758 \ubaa8\ub4e0 \ud30c\uc77c packaging \uc5d0\uc11c \uc81c\uc678\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\ud2b9\uc815\ud55c-\ud30c\uc77c-\ub610\ub294-\ub514\ub809\ud1a0\ub9ac\ub9cc-\uc9c0\uc815",children:"\ud2b9\uc815\ud55c \ud30c\uc77c \ub610\ub294 \ub514\ub809\ud1a0\ub9ac\ub9cc \uc9c0\uc815"}),"\n",(0,r.jsx)(s.p,{children:"\ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac \ubaa8\ub450\uac00 \uc544\ub2c8\ub77c 1\uac1c\uc758 \ud30c\uc77c \ub610\ub294 1\uac1c\uc758 \ub514\ub809\ud1a0\ub9ac\ub9cc \uc9c0\uc815\ud558\uace0 \uc2f6\uc744 \ub54c\uac00 \uc788\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc9c0\uc815\ud55c\ub2e4."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"dist"})," \ub514\ub809\ud1a0\ub9ac\uc758 \uc544\ub798\uc758 \ud30c\uc77c, \ud3f4\ub354\ub9cc \uc9c0\uc815"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\uc0c1\uc704 \ub514\ub809\ud1a0\ub9ac\uc758 \ud30c\uc77c, \ud3f4\ub354\ub97c \uc81c\uc678\ud558\ub294 \uc120\uc5b8\uc744 \ud55c \ud6c4, \uc9c0\uc815 \uc120\uc5b8\ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"  package:\n    patterns:\n      - '!**'  # \ubaa8\ub4e0 \ud30c\uc77c packaging\uc5d0\uc11c \uc81c\uc678\n      - 'dist/**'\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Refs","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.serverless.com/framework/docs/providers/aws/guide/packaging",children:"Serverless Framework - Packaging"})}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var a=n(96540);const r={},l=a.createContext(r);function i(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);