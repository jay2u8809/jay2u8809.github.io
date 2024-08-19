"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[7246],{7060:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var n=r(4848),t=r(8453);const o={slug:"2024-08-14-how-to-change-git-remote-repo-url",title:"Git - Remote Repository URL \uc744 \ubc14\uafd4\ubcf4\uc790",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","git","remote repository"]},l="Remote repository URL \ubcc0\uacbd \ubc29\ubc95",s={permalink:"/blog/2024-08-14-how-to-change-git-remote-repo-url",source:"@site/blog/tools/git/2024-06-20-how-to-change-git-remote-repo-url.md",title:"Git - Remote Repository URL \uc744 \ubc14\uafd4\ubcf4\uc790",description:"\x3c!--",date:"2024-06-20T00:00:00.000Z",tags:[{inline:!0,label:"devian-lab",permalink:"/blog/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/blog/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/blog/tags/job\u02d0\u8ac7"},{inline:!0,label:"wiki",permalink:"/blog/tags/wiki"},{inline:!0,label:"git",permalink:"/blog/tags/git"},{inline:!0,label:"remote repository",permalink:"/blog/tags/remote-repository"}],hasTruncateMarker:!1,authors:[{name:"Dev.ian",title:"Software Engineer",url:"https://github.com/jay2u8809",imageURL:"/img/onigiri_icon.jpg",key:"devian",page:null}],frontMatter:{slug:"2024-08-14-how-to-change-git-remote-repo-url",title:"Git - Remote Repository URL \uc744 \ubc14\uafd4\ubcf4\uc790",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","git","remote repository"]},unlisted:!1,prevItem:{title:"AWS Lambda - Code Storage Limit \ud574\uacb0\ubc29\ubc95",permalink:"/blog/2024-06-26-how-to-set-prune-plugin"},nextItem:{title:"AWS Lambda - Webpack \uc73c\ub85c Upload Size Limit \ud574\uacb0\ud558\uae30",permalink:"/blog/2024-05-28-how-to-set-webpack"}},c={authorsImageUrls:[void 0]},a=[{value:"Intro",id:"intro",level:2},{value:"Git remote repository URL \ud655\uc778",id:"git-remote-repository-url-\ud655\uc778",level:2},{value:"URL \ubcc0\uacbd",id:"url-\ubcc0\uacbd",level:2},{value:"Set-Url",id:"set-url",level:3},{value:"Rename",id:"rename",level:3},{value:"1) \ud604\uc7ac repository \uc758 \ubcc4\uce6d\uc744 \ub2e4\ub978 \ubcc4\uce6d\uc73c\ub85c \ubcc0\uacbd <em>(origin -&gt; old_origin)</em>",id:"1-\ud604\uc7ac-repository-\uc758-\ubcc4\uce6d\uc744-\ub2e4\ub978-\ubcc4\uce6d\uc73c\ub85c-\ubcc0\uacbd-origin---old_origin",level:4},{value:"2) \uae30\uc874 \ubcc4\uce6d\uc73c\ub85c \uc0c8\ub85c\uc6b4 URL \uc758 repositroy \ub97c \ucd94\uac00",id:"2-\uae30\uc874-\ubcc4\uce6d\uc73c\ub85c-\uc0c8\ub85c\uc6b4-url-\uc758-repositroy-\ub97c-\ucd94\uac00",level:4},{value:"3) repository \ud655\uc778",id:"3-repository-\ud655\uc778",level:4},{value:"4) 1) \uc5d0\uc11c \ubcc0\uacbd\ud55c \ubcc4\uce6d\uc758 repository (old_origin) \uc0ad\uc81c",id:"4-1-\uc5d0\uc11c-\ubcc0\uacbd\ud55c-\ubcc4\uce6d\uc758-repository-old_origin-\uc0ad\uc81c",level:4},{value:"- example code",id:"--example-code",level:4},{value:"- error: No such remote",id:"--error-no-such-remote",level:4}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-06-20\n  updatedAt: 2024-08-18\n"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(i.p,{children:"\ud68c\uc0ac\uc758 Gitlab \ud50c\ub79c\uc744 \ubcc0\uacbd\ud558\uba74\uc11c \uc0ac\ub0b4 Gitlab \uc758 URL \ub3c4 \ud568\uaed8 \ubcc0\uacbd\ud588\ub2e4. \ud68c\uc0ac \uc790\uccb4\uc801\uc73c\ub85c \uc6b4\uc601\ud558\ub358 Git \uc11c\ubc84\ub97c \ub2e4\ub978 \ub300\ud589 \uc5c5\uccb4\ub97c \ud1b5\ud574 \ub9e1\uae30\ub294 \ud615\ud0dc\ub85c \uc6b4\uc601 \ubc29\uc2dd\uc744 \ubc14\uafb8\uac8c \ub418\uba74\uc11c URL \ub85c \ud568\uaed8 \ubc14\ub00c\uac8c \ub418\uc5c8\ub2e4. Git \uc758 URL \uc774 \ubc14\ub00c\uba74\uc11c \uadf8\ub3d9\uc548 \uc0ac\uc6a9\ud558\ub358 Git Repository \uc758 URL \ub3c4 \ubaa8\ub450 \ubc14\ub00c\uac8c \ub41c \uac83\uc774\ub2e4."}),"\n",(0,n.jsx)(i.p,{children:"\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 Git Remote Repository \uc758 URL \uc774 \ubcc0\uacbd\ub418\uc5c8\uac70\ub098 \ub2e4\ub978 \uc774\uc720\ub85c \ubcc0\uacbd\ud574\uc57c\ud560 \ub54c Local \uc5d0\uc11c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc815\ub9ac\ud55c\ub2e4."}),"\n",(0,n.jsx)(i.h2,{id:"git-remote-repository-url-\ud655\uc778",children:"Git remote repository URL \ud655\uc778"}),"\n",(0,n.jsx)(i.p,{children:"\uac00\uc7a5 \uba3c\uc800 \ud560 \uc791\uc5c5\uc740 \ud604\uc7ac \uc124\uc815\ub418\uc5b4 \uc788\ub294 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uac83\uc774\ub2e4. \uac01 \ud504\ub85c\uc81d\ud2b8\uc758 Git repository \uc758 Remote URL \uc774 \ubb34\uc5c7\uc778\uc9c0 \ud655\uc778\ud55c\ub2e4."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"git remote -v"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"fetch"})," \ud558\uace0 ",(0,n.jsx)(i.strong,{children:"push"})," \ud560\ub54c \uc5b4\ub5a4 url \ub85c \ud558\ub294\uc9c0 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"  $ git remote -v\n\n  origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)\n  origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)\n"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"origin"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"repository url\uc758 \ubcc4\uce6d(alias)"}),"\n",(0,n.jsx)(i.li,{children:"reposiory url \uc774 \uae38\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ubcc4\uce6d\uc73c\ub85c \uae30\ubcf8\uc801\uc73c\ub85c origin \uc744 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"git@gitlab.com:projects/sample1/ABCDE-service.git"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"repository \uc758 ssh url"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["\ube44\uc2b7\ud55c \uba85\ub839\uc5b4\ub85c ",(0,n.jsx)(i.code,{children:"git config --get remote.origin.url"})," \uac00 \uc788\ub2e4. fetch, push \ub97c \ub098\ub220\uc11c \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uace0 \ub2e8\uc21c\ud788 \ud604\uc7ac \ub85c\uceec git config \uc5d0\uc11c \uc124\uc815\ub418\uc5b4 \uc788\ub294 remote url \uc744 \ubcf4\uc5ec\uc900\ub2e4."]}),"\n",(0,n.jsx)(i.h2,{id:"url-\ubcc0\uacbd",children:"URL \ubcc0\uacbd"}),"\n",(0,n.jsx)(i.h3,{id:"set-url",children:"Set-Url"}),"\n",(0,n.jsxs)(i.p,{children:["\ud604\uc7ac\uc758 Repository remote url \uc744 \ud655\uc778\ud588\ub2e4\uba74 \uc0c8\ub85c\uc6b4 URL \ub85c \ubcc0\uacbd\ud55c\ub2e4. (",(0,n.jsx)(i.em,{children:"sample1 -> sample2"}),")"]}),"\n",(0,n.jsxs)(i.p,{children:["URL \ubcc0\uacbd\uc740 ",(0,n.jsx)(i.strong,{children:"remote set-url"})," \uc774\ub77c\ub294 \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud574\uc11c \ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"git remote set-url ${REPOSITORY_ALIAS} ${REPOSITORY_NEW_URL}"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"url \uc744 \ubcc0\uacbd\ud560 repository \uc758 \ubcc4\uce6d\uacfc \uc0c8\ub85c\uc6b4 URL \uc744 \uc9c0\uc815\ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["origin \uc774\ub77c\ub294 \ubcc4\uce6d\uc758 repository \uc758 URL \uc744 ",(0,n.jsx)(i.code,{children:"git@gitlab.com:projects/sample2/ABCDE-service.git"})," \ub85c \uc9c0\uc815\ud55c \ub4a4, \ud655\uc778\ud55c\ub2e4."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"  # URL \ubcc0\uacbd\n  $ git remote set-url origin git@gitlab.com:projects/sample2/ABCDE-service.git\n\n  # URL \ud655\uc778\n  $ git remote -v\n  origin  git@gitlab.com:projects/sample2/ABCDE-service.git (fetch)\n  origin  git@gitlab.com:projects/sample2/ABCDE-service.git (push)\n"})}),"\n",(0,n.jsx)(i.h3,{id:"rename",children:"Rename"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"remote rename"})," \uc774\ub77c\ub294 \uba85\ub839\uc5b4\ub85c\ub3c4 remote repository url \uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,n.jsxs)(i.h4,{id:"1-\ud604\uc7ac-repository-\uc758-\ubcc4\uce6d\uc744-\ub2e4\ub978-\ubcc4\uce6d\uc73c\ub85c-\ubcc0\uacbd-origin---old_origin",children:["1) \ud604\uc7ac repository \uc758 \ubcc4\uce6d\uc744 \ub2e4\ub978 \ubcc4\uce6d\uc73c\ub85c \ubcc0\uacbd ",(0,n.jsx)(i.em,{children:"(origin -> old_origin)"})]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"git remote rename ${CURRENT_ALIAS} ${NEW_ALIAS}"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"2-\uae30\uc874-\ubcc4\uce6d\uc73c\ub85c-\uc0c8\ub85c\uc6b4-url-\uc758-repositroy-\ub97c-\ucd94\uac00",children:"2) \uae30\uc874 \ubcc4\uce6d\uc73c\ub85c \uc0c8\ub85c\uc6b4 URL \uc758 repositroy \ub97c \ucd94\uac00"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"git remote add origin ${REPOSITORY_NEW_URL}"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"3-repository-\ud655\uc778",children:"3) repository \ud655\uc778"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"git remote -v"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"4-1-\uc5d0\uc11c-\ubcc0\uacbd\ud55c-\ubcc4\uce6d\uc758-repository-old_origin-\uc0ad\uc81c",children:"4) 1) \uc5d0\uc11c \ubcc0\uacbd\ud55c \ubcc4\uce6d\uc758 repository (old_origin) \uc0ad\uc81c"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"git remote rm ${NEW_ALIAS}"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"--example-code",children:"- example code"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"  # 1) \n  $ git remote rename origin old_origin\n\n  # 2) \n  $ git remote add origin git@gitlab.com:projects/sample2/ABCDE-service.git\n\n  # 3) \n  $ git remote -v\n  old_origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)\n  old_origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)\n  origin  git@gitlab.com:projects/sample1/ABCDE-service.git (fetch)\n  origin  git@gitlab.com:projects/sample1/ABCDE-service.git (push)\n\n  # 4) \n  $ git remote rm old_origin\n"})}),"\n",(0,n.jsx)(i.h4,{id:"--error-no-such-remote",children:"- error: No such remote"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"rename"})," \uba85\ub839\uc5b4\ub85c repository \ubcc4\uce6d(alias)\uc744 \ubc14\uafb8\ub294\uac8c \uc544\ub2c8\ub77c URL \uc744 \ubcc0\uacbd\ud588\uc744 \ub54c, \uc544\ub798\uc640 \uac19\uc740 \uc5d0\ub7ec\uac00 \ub098\uc62c \uc218 \uc788\ub2e4."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"  # URL \ubcc0\uacbd: sample1 -> sample2\n  $ git remote rename git@gitlab.com:projects/sample1/ABCDE-service.git git@gitlab.com:projects/sample1/ABCDE-service.git\n\n  fatal: No such remote: 'git@gitlab.com:projects/sample1/ABCDE-service.git' # \uc774\uc804 url(sample1) \uc744 \ucc3e\uc744 \uc218 \uc5c6\ub2e4.\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"git remote rename ${OLD_URL} ${NEW_URL}"})," \uc5d0\uc11c OLD_URL \uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \uc774\ub7ec\ud55c \uc5d0\ub7ec\uac00 \ub098\uc628\ub2e4."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Git \uc11c\ubc84"})," \uc0c1\uc5d0\uc11c \uae30\uc874\uc758 remote repository url \uc744 \uc0c8\ub85c\uc6b4 url \ub85c \ubc14\uafbc \ub4a4\ub77c\uba74, \uae30\uc874 url \uc740 \uc774\ubbf8 \uc0ac\ub77c\uc84c\uae30\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4. \ub530\ub77c\uc11c \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 ",(0,n.jsx)(i.code,{children:"remote set-url"})," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 rename \uba85\ub839\uc5b4\ub85c repository \uc758 \ubcc4\uce6d\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ud574\uc57c\ud55c\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Refs","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.github.com/ko/get-started/getting-started-with-git/managing-remote-repositories",children:"Official Github Docs-\uc6d0\uaca9 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac \uad00\ub9ac"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://phoeducation.work/entry/20210827/1630018680",children:"\u3010Git&GitHub\u3011\u30ea\u30e2\u30fc\u30c8\u306e\u5909\u66f4\u30fb\u524a\u9664\uff08git remote rename\u30b3\u30de\u30f3\u30c9\uff09"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://qiita.com/minoringo/items/917e325892733e0d606e",children:"git\u306eremote url\u3092\u5909\u66f4\u3059\u308b(\u30ec\u30dd\u30b8\u30c8\u30ea\u79fb\u884c\u6642)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://m.blog.naver.com/rinjyu/222180087428",children:"\uc6d0\uaca9 \uc800\uc7a5\uc18c\uc758 origin\uc740 \uc5b4\ub5a4 \uac83\uc744 \uc758\ubbf8\ud560\uae4c"})}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>s});var n=r(6540);const t={},o=n.createContext(t);function l(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);