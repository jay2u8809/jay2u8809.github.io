"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[5595],{1808:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=a(4848),r=a(8453);const o={id:"how-to-convert-map-to-array",title:"Map -> Array \ubcc0\ud658\ud558\uae30",tags:["devian-lab","wiki","nodejs","js","javascript","ts","typescript","map","array","convert"]},t="[JS] Map -> Array \ubcc0\ud658\ud558\uae30",i={id:"nodejs/how-to-convert-map-to-array",title:"Map -> Array \ubcc0\ud658\ud558\uae30",description:"Array.from()",source:"@site/docs/nodejs/how-to-convert-map-to-array.md",sourceDirName:"nodejs",slug:"/nodejs/how-to-convert-map-to-array",permalink:"/docs/nodejs/how-to-convert-map-to-array",draft:!1,unlisted:!1,tags:[{inline:!0,label:"devian-lab",permalink:"/docs/tags/devian-lab"},{inline:!0,label:"wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"nodejs",permalink:"/docs/tags/nodejs"},{inline:!0,label:"js",permalink:"/docs/tags/js"},{inline:!0,label:"javascript",permalink:"/docs/tags/javascript"},{inline:!0,label:"ts",permalink:"/docs/tags/ts"},{inline:!0,label:"typescript",permalink:"/docs/tags/typescript"},{inline:!0,label:"map",permalink:"/docs/tags/map"},{inline:!0,label:"array",permalink:"/docs/tags/array"},{inline:!0,label:"convert",permalink:"/docs/tags/convert"}],version:"current",frontMatter:{id:"how-to-convert-map-to-array",title:"Map -> Array \ubcc0\ud658\ud558\uae30",tags:["devian-lab","wiki","nodejs","js","javascript","ts","typescript","map","array","convert"]},sidebar:"defaultSidebar",previous:{title:"Mocking \ubc29\ubc95",permalink:"/docs/nodejs/jest/how-to-mocking-on-jest"},next:{title:"NodeJs \uba54\ubaa8\ub9ac \uc0ac\uc774\uc988 \ub298\ub9ac\uae30",permalink:"/docs/nodejs/how-to-increase-nodejs-default-memory"}},l={},c=[{value:"Array.from()",id:"arrayfrom",level:2},{value:"[...]",id:"",level:2}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"js-map---array-\ubcc0\ud658\ud558\uae30",children:"[JS] Map -> Array \ubcc0\ud658\ud558\uae30"}),"\n",(0,s.jsx)(e.h2,{id:"arrayfrom",children:"Array.from()"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"  let map: Map<string, string> = new Map<string, string>()\n    .set('apple', 'ios')\n    .set('google', 'android')\n    .set('ms', 'windows');\n\n  const arr = Array.from(map, ([name, os]) => ({name, os}));\n  \n  console.log(arr);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"  let map: Map<string, string> = new Map<string, string>()\n    .set('apple', 'ios')\n    .set('google', 'android')\n    .set('ms', 'windows');\n\n  const arr = Array.from(map, ([key, value]) => ({name: key, os: value}));\n  \n  console.log(arr);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'  [{\n    "name": "apple",\n    "os": "ios"\n  }, {\n    "name": "google",\n    "os": "android"\n  }, {\n    "name": "ms",\n    "os": "windows"\n  }] \n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"  let map: Map<string, string> = new Map<string, string>()\n    .set('apple', 'ios')\n    .set('google', 'android')\n    .set('ms', 'windows');\n\n  const arr = Array.from(map, ([key, value]) => ({[key]: value}));\n  \n  console.log(arr);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'  [{\n    "apple": "ios"\n  }, {\n    "google": "android"\n  }, {\n    "ms": "windows"\n  }] \n'})}),"\n",(0,s.jsx)(e.h2,{id:"",children:"[...]"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"  let map: Map<string, string> = new Map<string, string>()\n    .set('apple', 'ios')\n    .set('google', 'android')\n    .set('ms', 'windows');\n\n  const arr = [...map].map(([name, os]) => ({name, os}));\n  \n  console.log(arr);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"  let map: Map<string, string> = new Map<string, string>()\n    .set('apple', 'ios')\n    .set('google', 'android')\n    .set('ms', 'windows');\n\n  const arr = [...map].map(([key, value]) => ({name: key, os: value}));\n  \n  console.log(arr);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'  [{\n    "name": "apple",\n    "os": "ios"\n  }, {\n    "name": "google",\n    "os": "android"\n  }, {\n    "name": "ms",\n    "os": "windows"\n  }] \n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"  let map: Map<string, string> = new Map<string, string>()\n    .set('apple', 'ios')\n    .set('google', 'android')\n    .set('ms', 'windows');\n\n  const arr = [...map].map(([key, value]) => ({[key]: value}));\n  \n  console.log(arr);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'  [{\n    "apple": "ios"\n  }, {\n    "google": "android"\n  }, {\n    "ms": "windows"\n  }] \n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Refs:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://stackoverflow.com/questions/56795743/how-to-convert-map-to-array-of-object",children:"StackOverflow-How to convert Map to array of object?"})}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>t,x:()=>i});var s=a(6540);const r={},o=s.createContext(r);function t(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);