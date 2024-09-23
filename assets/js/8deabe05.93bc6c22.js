"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[2911],{88791:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>t,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=l(74848),d=l(28453);const i={slug:"/programming/nodejs/tips/how-to-install-nodenv",title:"\uc5ec\ub7ec \ubc84\uc804\uc758 node.js \uad00\ub9ac\ud558\uae30",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","nodenv","node version","homebrew"],keywords:["devian-lab","Job\u02d0\u8ac7","nodejs","nodenv","node version","homebrew"],description:"Nodenv\ub97c \uc124\uce58\ud558\uc5ec \uc5ec\ub7ec \ubc84\uc804\uc758 Node.js \ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc815\ub9ac\ud55c\ub2e4."},o="Nodenv \ub85c \uc5ec\ub7ec \ubc84\uc804\uc758 node.js \uad00\ub9ac\ud558\uae30",r={id:"programming/nodejs/tips/how-to-install-nodenv",title:"\uc5ec\ub7ec \ubc84\uc804\uc758 node.js \uad00\ub9ac\ud558\uae30",description:"Nodenv\ub97c \uc124\uce58\ud558\uc5ec \uc5ec\ub7ec \ubc84\uc804\uc758 Node.js \ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc815\ub9ac\ud55c\ub2e4.",source:"@site/docs/programming/nodejs/tips/how-to-install-nodenv.md",sourceDirName:"programming/nodejs/tips",slug:"/programming/nodejs/tips/how-to-install-nodenv",permalink:"/docs/programming/nodejs/tips/how-to-install-nodenv",draft:!1,unlisted:!1,tags:[{inline:!0,label:"devian-lab",permalink:"/docs/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/docs/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/docs/tags/job\u02d0\u8ac7"},{inline:!0,label:"wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"nodejs",permalink:"/docs/tags/nodejs"},{inline:!0,label:"nodenv",permalink:"/docs/tags/nodenv"},{inline:!0,label:"node version",permalink:"/docs/tags/node-version"},{inline:!0,label:"homebrew",permalink:"/docs/tags/homebrew"}],version:"current",frontMatter:{slug:"/programming/nodejs/tips/how-to-install-nodenv",title:"\uc5ec\ub7ec \ubc84\uc804\uc758 node.js \uad00\ub9ac\ud558\uae30",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","nodenv","node version","homebrew"],keywords:["devian-lab","Job\u02d0\u8ac7","nodejs","nodenv","node version","homebrew"],description:"Nodenv\ub97c \uc124\uce58\ud558\uc5ec \uc5ec\ub7ec \ubc84\uc804\uc758 Node.js \ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc815\ub9ac\ud55c\ub2e4."},sidebar:"labDocsSidebar",previous:{title:"Heap \uba54\ubaa8\ub9ac \uc0ac\uc774\uc988 \uc124\uc815 \ubc29\ubc95",permalink:"/docs/programming/nodejs/tips/how-to-increase-nodejs-default-memory"},next:{title:"Base64 \uc778\ucf54\ub529\ud558\ub294 \ubc29\ubc95",permalink:"/docs/programming/nodejs/tips/how-to-encode-base64"}},a={},c=[{value:"1. Install Nodenv",id:"1-install-nodenv",level:2},{value:"1-1) install",id:"1-1-install",level:3},{value:"1-2) check version",id:"1-2-check-version",level:3},{value:"1-3) Nodenv \ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc2dc\uc2a4\ud15c \ud658\uacbd \ubcc0\uc218\uc5d0 \ub4f1\ub85d",id:"1-3-nodenv-\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc704\ud574-\uc2dc\uc2a4\ud15c-\ud658\uacbd-\ubcc0\uc218\uc5d0-\ub4f1\ub85d",level:3},{value:"2. Install Node.js",id:"2-install-nodejs",level:2},{value:"2-1) Nodenv \ub85c \uc124\uce58 \uac00\ub2a5\ud55c Node.js \ubc84\uc804 \ud655\uc778",id:"2-1-nodenv-\ub85c-\uc124\uce58-\uac00\ub2a5\ud55c-nodejs-\ubc84\uc804-\ud655\uc778",level:3},{value:"2-2) install Node",id:"2-2-install-node",level:3},{value:"2-3) Node.js \ubc84\uc804 \ud655\uc778",id:"2-3-nodejs-\ubc84\uc804-\ud655\uc778",level:3},{value:"3. \uadf8 \uc678\uc758 Nodenv \uba85\ub839\uc5b4\ub4e4",id:"3-\uadf8-\uc678\uc758-nodenv-\uba85\ub839\uc5b4\ub4e4",level:2},{value:"3-1) \ud604\uc7ac \uc124\uce58\ub41c node.js \ub4e4\uc758 \ubc84\uc804 \ud655\uc778",id:"3-1-\ud604\uc7ac-\uc124\uce58\ub41c-nodejs-\ub4e4\uc758-\ubc84\uc804-\ud655\uc778",level:3},{value:"3-2) Default node version \uc124\uc815",id:"3-2-default-node-version-\uc124\uc815",level:3},{value:"3-3) \uac01 \ud504\ub85c\uc81d\ud2b8 \ubcc4 node version \uc124\uc815",id:"3-3-\uac01-\ud504\ub85c\uc81d\ud2b8-\ubcc4-node-version-\uc124\uc815",level:3},{value:"3-4) Nodenv \ucd5c\uc2e0\ud654",id:"3-4-nodenv-\ucd5c\uc2e0\ud654",level:3},{value:"4. Uninstall Node.js &amp; Npm",id:"4-uninstall-nodejs--npm",level:2},{value:"Homebrew \ub85c \uc124\uce58\ud55c node.js \ub97c Uninstall",id:"homebrew-\ub85c-\uc124\uce58\ud55c-nodejs-\ub97c-uninstall",level:3},{value:"\uc124\uce58 \ud30c\uc77c\ub85c \uc124\uce58\ud55c node \ub97c Uninstall",id:"\uc124\uce58-\ud30c\uc77c\ub85c-\uc124\uce58\ud55c-node-\ub97c-uninstall",level:3}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"nodenv-\ub85c-\uc5ec\ub7ec-\ubc84\uc804\uc758-nodejs-\uad00\ub9ac\ud558\uae30",children:"Nodenv \ub85c \uc5ec\ub7ec \ubc84\uc804\uc758 node.js \uad00\ub9ac\ud558\uae30"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2022-05-22\n  updatedAt: 2022-01-01\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Nodenv \ub294 Mac\uacfc Linux \uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"1-install-nodenv",children:"1. Install Nodenv"}),"\n",(0,s.jsx)(e.h3,{id:"1-1-install",children:"1-1) install"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ brew install nodenv\n"})}),"\n",(0,s.jsx)(e.h3,{id:"1-2-check-version",children:"1-2) check version"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv -v\n  \n    nodenv 1.4.0\n"})}),"\n",(0,s.jsx)(e.h3,{id:"1-3-nodenv-\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc704\ud574-\uc2dc\uc2a4\ud15c-\ud658\uacbd-\ubcc0\uc218\uc5d0-\ub4f1\ub85d",children:"1-3) Nodenv \ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc2dc\uc2a4\ud15c \ud658\uacbd \ubcc0\uc218\uc5d0 \ub4f1\ub85d"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ vim .zshrc\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".zshrc"})," \ud30c\uc77c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'  ...\n  ...\n\n  ### Nodenv Setting ###\n  export PATH="$HOME/.nodenv/bin:$PATH"\n  eval "$(nodenv init -)"\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ud655\uc778"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash\n  \n  Checking for `nodenv' in PATH: /usr/local/bin/nodenv\n  Checking for nodenv shims in PATH: OK\n  Checking `nodenv install' support: /usr/local/bin/nodenv-install (node-build 4.9.43)\n  Counting installed Node versions: 1 versions\n  Auditing installed plugins: OK\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"2-install-nodejs",children:"2. Install Node.js"}),"\n",(0,s.jsx)(e.h3,{id:"2-1-nodenv-\ub85c-\uc124\uce58-\uac00\ub2a5\ud55c-nodejs-\ubc84\uc804-\ud655\uc778",children:"2-1) Nodenv \ub85c \uc124\uce58 \uac00\ub2a5\ud55c Node.js \ubc84\uc804 \ud655\uc778"}),"\n",(0,s.jsx)(e.p,{children:"\uc5b4\ub5a4 \ubc84\uc804\uc758 node.js \ub97c \uc124\uce58\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778. \ub300\ubd80\ubd84\uc758 node.js \ubc84\uc804\uc744 \uc9c0\uc6d0\ud558\uc9c0\ub9cc \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ubc84\uc804\uc774 \uc788\uc744\uc218 \uc788\uc73c\ubbc0\ub85c \ud655\uc778\uc774 \ud544\uc694\ud558\ub2e4."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc124\uce58\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 node.js \ubc84\uc804 \ud655\uc778"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv install -l\n\n  0.1.14\n  0.1.15\n  0.1.16\n  ...\n  16.14.2\n  16.15.0\n  16.15.1\n  ...\n  iojs-3.3.1\n  nightly\n  node-dev\n  rc\n  v8-canary\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ud2b9\uc815 \ubc84\uc804\ub9cc \ud655\uc778"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv install -l | grep 16.15.0\n\n    16.15.0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"16 \ubc84\uc804\ub9cc \ud655\uc778"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'  $ nodenv install --list | grep -e "^16"\n\n    16.0.0\n    16.1.0\n    ...\n    16.20.1\n    16.20.2\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-2-install-node",children:"2-2) install Node"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv install 16.15.0\n\n  Downloading node-v16.15.0-darwin-x64.tar.gz...\n  -> https://nodejs.org/dist/v16.15.0/node-v16.15.0-darwin-x64.tar.gz\n  Installing node-v16.15.0-darwin-x64...\n  Installed node-v16.15.0-darwin-x64 to /Users/${\uc720\uc800\uba85}/.nodenv/versions/16.15.0\n"})}),"\n",(0,s.jsx)(e.h3,{id:"2-3-nodejs-\ubc84\uc804-\ud655\uc778",children:"2-3) Node.js \ubc84\uc804 \ud655\uc778"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"node version"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ node -v\n\n  v16.15.0\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\uc544\ub798\uc640 \uac19\uc774 \ubc84\uc804 \uc815\ubcf4\uac00 \ub098\uc624\uc9c0 \uc54a\ub294\ub2e4\uba74 \ud130\ubbf8\ub110\uc744 \uc0c8\ub85c \uc5f4\uac70\ub098 ",(0,s.jsx)(e.code,{children:"source ~/.zshrc"})," \ub97c \uc2e4\ud589\ud558\uace0 \ub2e4\uc2dc \ubc84\uc804\uc744 \ud655\uc778\ud55c\ub2e4."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n  $ node -v\n\n  nodenv: node: command not found\n  The `node' command exists in these Node versions:\n  \xa0 16.15.0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"shell \ud658\uacbd\ubcc0\uc218 \uc801\uc6a9\ud558\ub294 \uba85\ub839\uc5b4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ source ~/.zshrc\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-\uadf8-\uc678\uc758-nodenv-\uba85\ub839\uc5b4\ub4e4",children:"3. \uadf8 \uc678\uc758 Nodenv \uba85\ub839\uc5b4\ub4e4"}),"\n",(0,s.jsx)(e.h3,{id:"3-1-\ud604\uc7ac-\uc124\uce58\ub41c-nodejs-\ub4e4\uc758-\ubc84\uc804-\ud655\uc778",children:"3-1) \ud604\uc7ac \uc124\uce58\ub41c node.js \ub4e4\uc758 \ubc84\uc804 \ud655\uc778"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"check installed node list"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv versions\n\n    16.15.0\n    14.7.0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-2-default-node-version-\uc124\uc815",children:"3-2) Default node version \uc124\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc5ec\ub7ec \ubc84\uc804\uc758 node \uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub2e4\uba74 \uc8fc\ub825\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uae30\ubcf8 \ubc84\uc804\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv global 16.15.0\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ node -v\n\n    v16.15.0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-3-\uac01-\ud504\ub85c\uc81d\ud2b8-\ubcc4-node-version-\uc124\uc815",children:"3-3) \uac01 \ud504\ub85c\uc81d\ud2b8 \ubcc4 node version \uc124\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc5ec\ub7ec \ubc84\uc804\uc758 node \uc911 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 node \ubc84\uc804\uc744 \ub530\ub85c \uc124\uc815\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc0ac\uc6a9\ud558\ub294 node \uc758 \ubc84\uc804\uc774 Default \ubc84\uc804\uacfc \ub2e4\ub97c \uacbd\uc6b0 \uc124\uc815"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 \ub514\ub809\ud130\ub9ac\ub85c \uc774\ub3d9\ud55c \ud6c4 \uc544\ub798\uc758 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ nodenv local 14.7.0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-4-nodenv-\ucd5c\uc2e0\ud654",children:"3-4) Nodenv \ucd5c\uc2e0\ud654"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nodenv \uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 Node \ubc84\uc804\uc788\ub2e4\uba74 Nodenv \uc790\uccb4\ub97c \uc5c5\ub370\uc774\ud2b8 \ud574\ubcf8\ub2e4.","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Brew \ub97c \ud1b5\ud574 \ucd5c\uc2e0\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ brew upgrade nodenv node-build\n"})}),"\n",(0,s.jsx)(e.h2,{id:"4-uninstall-nodejs--npm",children:"4. Uninstall Node.js & Npm"}),"\n",(0,s.jsx)(e.h3,{id:"homebrew-\ub85c-\uc124\uce58\ud55c-nodejs-\ub97c-uninstall",children:"Homebrew \ub85c \uc124\uce58\ud55c node.js \ub97c Uninstall"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uninstall npm"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ sudo npm uninstall npm -g\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"unintall node.js"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ brew uninstall node\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\uc124\uce58-\ud30c\uc77c\ub85c-\uc124\uce58\ud55c-node-\ub97c-uninstall",children:"\uc124\uce58 \ud30c\uc77c\ub85c \uc124\uce58\ud55c node \ub97c Uninstall"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://nodejs.org/en/download/",children:"Node \uacf5\uc2dd \uc0ac\uc774\ud2b8"}),"\uc5d0\uc11c \uc124\uce58 \ud30c\uc77c(",(0,s.jsx)(e.code,{children:"*.dmg"}),", ",(0,s.jsx)(e.code,{children:"*.pkg"})," \ub4f1) \uc744 \ub2e4\uc6b4 \ubc1b\uc544 \uc124\uce58\ud55c \uacbd\uc6b0, \uc124\uce58\ub418\uc5b4\uc788\ub294 \uac01 \ub514\ub809\ud1a0\ub9ac\uc758 \ud30c\uc77c\ub4e4\uc744 \ucc3e\uc544 \ud558\ub098\ud558\ub098 \uc9c0\uc6cc\uc57c \ud55c\ub2e4."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uninstall npm"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ sudo npm uninstall npm -g\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"remove node files"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \\\n    > | while read i; do\n    pipe while> sudo rm /usr/local/{i}\n    pipe while> done\n\n  rm: /usr/local/{i}: No such file or directory\n  rm: /usr/local/{i}: No such file or directory\n  rm: /usr/local/{i}: No such file or directory\n  ...\n  rm: /usr/local/{i}: No such file or directory\n  rm: /usr/local/{i}: No such file or directory\n\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ sudo rm -rf /usr/local/lib/node \\\n    > /usr/local/lib/node_modules \\\n    > /var/db/receipts/org.nodejs.*\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"  $ which node\n    /usr/local/bin/node\n\n  $ rm -rf /usr/local/bin/node\n\n  $ which node\n    node not found\n\n  $ which npm\n    npm not found\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Refs\n\xa0 + ",(0,s.jsx)(e.a,{href:"https://github.com/nodenv/nodenv#readme",children:"Nodenv Github"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://qiita.com/jozuo-dev/items/223430e554c1f5f20320",children:"\u3010nodenv\u3011\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u6700\u65b0\u5316"})}),"\n"]}),"\n"]}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,l)=>{l.d(e,{R:()=>o,x:()=>r});var s=l(96540);const d={},i=s.createContext(d);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);