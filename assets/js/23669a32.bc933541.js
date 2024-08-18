"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[8903],{7007:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(4848),l=s(8453);const i={id:"how-to-set-prune-plugin",title:"Prune Plugin",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","aws","lambda","serverless","serverless framework","code storage limit exceeded","prune","\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0"]},a="Prune Plugin: AWS Lambda Storage Limit Error",d={id:"aws/serverless-framework/how-to-set-prune-plugin",title:"Prune Plugin",description:"\x3c!--",source:"@site/docs/aws/serverless-framework/how-to-set-prune-plugin.md",sourceDirName:"aws/serverless-framework",slug:"/aws/serverless-framework/how-to-set-prune-plugin",permalink:"/docs/aws/serverless-framework/how-to-set-prune-plugin",draft:!1,unlisted:!1,tags:[{inline:!0,label:"devian-lab",permalink:"/docs/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/docs/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/docs/tags/job\u02d0\u8ac7"},{inline:!0,label:"wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"aws",permalink:"/docs/tags/aws"},{inline:!0,label:"lambda",permalink:"/docs/tags/lambda"},{inline:!0,label:"serverless",permalink:"/docs/tags/serverless"},{inline:!0,label:"serverless framework",permalink:"/docs/tags/serverless-framework"},{inline:!0,label:"code storage limit exceeded",permalink:"/docs/tags/code-storage-limit-exceeded"},{inline:!0,label:"prune",permalink:"/docs/tags/prune"},{inline:!0,label:"\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0",permalink:"/docs/tags/\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0"}],version:"current",frontMatter:{id:"how-to-set-prune-plugin",title:"Prune Plugin",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","aws","lambda","serverless","serverless framework","code storage limit exceeded","prune","\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0"]},sidebar:"labDocsSidebar",previous:{title:"Nest.js Webpack \uc801\uc6a9 \ubc29\ubc95",permalink:"/docs/aws/serverless-framework/how-to-set-webpack-multiple-entry"},next:{title:"\ud544\uc694\ud55c \ud30c\uc77c\ub9cc Packaging \ud558\ub294 \ubc29\ubc95",permalink:"/docs/aws/serverless-framework/how-to-set-exclude-file"}},t={},c=[{value:"Storage Limit Error",id:"storage-limit-error",level:2},{value:"Serverless Framework",id:"serverless-framework",level:2},{value:"Plugin: Serverless Prune Plugin",id:"plugin-serverless-prune-plugin",level:3},{value:"1) Install plugin",id:"1-install-plugin",level:4},{value:"2) YAML",id:"2-yaml",level:4},{value:"3) Command",id:"3-command",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"prune-plugin-aws-lambda-storage-limit-error",children:"Prune Plugin: AWS Lambda Storage Limit Error"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-06-26\n  updatedAt: 2024-08-14\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"storage-limit-error",children:"Storage Limit Error"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Refs: ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#compute-and-storage",children:"Lambda quotas"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"  Code storage limit exceeded. (Service: Lambda, Status Code: 400, ...)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"serverless-framework",children:"Serverless Framework"}),"\n",(0,r.jsx)(n.h3,{id:"plugin-serverless-prune-plugin",children:"Plugin: Serverless Prune Plugin"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Refs: ",(0,r.jsx)(n.a,{href:"https://www.serverless.com/plugins/serverless-prune-plugin",children:"Serverless Prune Plugin"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"1-install-plugin",children:"1) Install plugin"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"sls \ub85c deploy \ud560 \ub54c\ub9cc \uc0ac\uc6a9\ud558\ubbc0\ub85c dev dependency \ub85c \ucda9\ubd84\ud558\ub2e4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"  npm install --save-dev serverless-prune-plugin\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"2-yaml",children:"2) YAML"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML \uc124\uc815\uc744 \ud1b5\ud574 Deploy \ub97c \ud560 \ub54c\ub9c8\ub2e4 \ub3d9\uc77c\ud55c \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  service: example-service\n\n  plugins:\n    - serverless-prune-plugin\n\n  custom:\n    prune:\n      automatic: true\n      number: 3\n      # includeLayers: true\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"3\uc778 \uacbd\uc6b0 \ubc29\uae08 deploy \ud55c \ubc84\uc804 \ud3ec\ud568 \ucd5c\uc2e0 3\uac1c\ub9cc \ub0a8\uae30\uace0 \ubaa8\ub450 \uc9c0\uc6b4\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"includeLayers"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AWS Lambda Layer \uc758 \uc774\uc804 \ubc84\uc804\ub3c4 \uc0ad\uc81c\ud560 \uac83\uc778\uac00?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\ud50c\ub7ec\uadf8\uc778\uc744 \uc124\uc815\ud55c \ub4a4 sls \ub85c deploy \ud558\uba74 \uc544\ub798\uc640 \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ub098\uc628\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"  \u2714 Pruning of functions complete\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"3-command",children:"3) Command"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"sls command \ub97c \uc774\uc6a9\ud55c\ub2e4\uba74 \uc218\ub3d9\uc73c\ub85c\ub3c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n  $ sls prune -n 3 -c serverless.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Refs","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/serverless-prune-plugin",children:"Npm - serverless-prune-plugin"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@pjoshi_96874/serverless-pruning-what-is-it-when-and-how-to-use-it-1ac79dcb927a",children:"Serverless Pruning What is it? When and How to use it?"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(6540);const l={},i=r.createContext(l);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);