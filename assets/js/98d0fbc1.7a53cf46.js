"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[2280],{6187:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var s=l(4848),r=l(8453);const i={slug:"2024-06-26-how-to-set-prune-plugin",title:"AWS Lambda - Code Storage Limit \ud574\uacb0\ubc29\ubc95",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","blog","aws","lambda","serverless","serverless framework","code storage limit exceeded","prune","\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0"]},a="[Job\u02d0\u8ac7] AWS Lambda Storage Limit Error \ud574\uacb0: Prune Plugin",d={permalink:"/blog/2024-06-26-how-to-set-prune-plugin",source:"@site/blog/aws/serverless-framework/2024-06-26-how-to-set-prune-plugin.md",title:"AWS Lambda - Code Storage Limit \ud574\uacb0\ubc29\ubc95",description:"\x3c!--",date:"2024-06-26T00:00:00.000Z",tags:[{inline:!0,label:"devian-lab",permalink:"/blog/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/blog/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/blog/tags/job\u02d0\u8ac7"},{inline:!0,label:"blog",permalink:"/blog/tags/blog"},{inline:!0,label:"aws",permalink:"/blog/tags/aws"},{inline:!0,label:"lambda",permalink:"/blog/tags/lambda"},{inline:!0,label:"serverless",permalink:"/blog/tags/serverless"},{inline:!0,label:"serverless framework",permalink:"/blog/tags/serverless-framework"},{inline:!0,label:"code storage limit exceeded",permalink:"/blog/tags/code-storage-limit-exceeded"},{inline:!0,label:"prune",permalink:"/blog/tags/prune"},{inline:!0,label:"\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0",permalink:"/blog/tags/\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0"}],hasTruncateMarker:!1,authors:[{name:"Dev.ian",title:"Software Engineer",url:"https://github.com/jay2u8809",imageURL:"/img/onigiri_icon.jpg",key:"devian",page:null}],frontMatter:{slug:"2024-06-26-how-to-set-prune-plugin",title:"AWS Lambda - Code Storage Limit \ud574\uacb0\ubc29\ubc95",authors:["devian"],tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","blog","aws","lambda","serverless","serverless framework","code storage limit exceeded","prune","\ucf54\ub4dc\uc2a4\ud1a0\ub9ac\uc9c0"]},unlisted:!1,prevItem:{title:"AWS Cloudwatch - \ub85c\uadf8\ub97c \uac04\ud3b8\ud558\uac8c \uac80\uc0c9\ud558\ub294 \ubc29\ubc95",permalink:"/blog/2024-08-14-how-to-use-log-insights-query"},nextItem:{title:"AWS Lambda - Webpack \uc73c\ub85c Upload Size Limit \ud574\uacb0\ud558\uae30",permalink:"/blog/2024-05-28-how-to-set-webpack"}},o={authorsImageUrls:[void 0]},t=[{value:"Intro",id:"intro",level:2},{value:"AWS Lambda Code Storage?",id:"aws-lambda-code-storage",level:2},{value:"\ud574\uacb0 \ubc29\ubc95",id:"\ud574\uacb0-\ubc29\ubc95",level:2},{value:"1) \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9 \ud655\ubcf4",id:"1-\ucf54\ub4dc-\uc2a4\ud1a0\ub9ac\uc9c0-\uc6a9\ub7c9-\ud655\ubcf4",level:3},{value:"\u203b Lambda Function Version",id:"-lambda-function-version",level:3},{value:"2) Serverless Framework \uc124\uc815",id:"2-serverless-framework-\uc124\uc815",level:3},{value:"3) Deploy",id:"3-deploy",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-06-26\n  updatedAt: 2024-08-14\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'"Serverless Framework \uc758 Prune Plugin \uc73c\ub85c AWS Lambda \uc758 Code Storage Limit \uc744 \ud574\uacb0\ud55c\ub2e4."'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsx)(n.p,{children:"AWS \ub97c \uc774\uc6a9\ud55c Serverless \uc544\ud0a4\ud14d\uccd0\ub85c \uc11c\ube44\uc2a4\ub97c \uc6b4\uc601\ud55c\ub2e4\uba74 AWS Lambda \ub97c \ubc18\ub4dc\uc2dc \uc4f0\uac8c \ub41c\ub2e4. AWS Lambda \ub294 \uac00\uc7a5 \uac04\ud3b8\ud558\uace0 \uc800\ub834\ud558\uba70 \ud65c\uc6a9\ub3c4\uac00 \ub192\uc740 \uc11c\ube44\uc2a4 \uc911 \ud558\ub098\uc774\uae30\uc5d0 \ub2e4\uc591\ud55c \ucc98\ub9ac\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc9c0\uae08 \uc6b4\uc601 \uc911\uc778 \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \ud06c\uac8c \uc544\ub798\uc640 \uac19\uc774 3\uac00\uc9c0 \uc6a9\ub3c4\ub85c AWS Lambda \ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"15\ubd84 \uc774\ub0b4\uc758 \uac04\ub2e8\ud55c \ubc30\uce58Batch \ucc98\ub9ac"}),"\n",(0,s.jsx)(n.li,{children:'"API Gateway + AWS Lambda" \uc870\ud569\uc73c\ub85c Web Server \ub85c \ud65c\uc6a9'}),"\n",(0,s.jsx)(n.li,{children:"Step Function \uc774\ub098 \ub2e4\ub978 AWS \ub9ac\uc18c\uc2a4\uc758 \uc774\ubca4\ud2b8 \uc804\ud6c4\ucc98\ub9ac(Cloudfront Edge Function, S3 \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc2dc \uc378\ub124\uc77c \uc0dd\uc131 \ub4f1) \uac19\uc740 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud55c \ubd80\ubd84\uc73c\ub85c \ud65c\uc6a9"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub807\ub4ef \ud65c\uc6a9\ub3c4\uac00 \ub192\uc740 AWS Lambda \uc774\uae30\uc5d0 \ub10b \ub193\uace0 \uc4f0\ub2e4\ubcf4\uba74 \uae08\ubc29 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \ubd80\uc871\ud574\uc9c8 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["AWS Lambda \uc758 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub294 ",(0,s.jsx)(n.code,{children:"75GB"}),"\uc774\ub2e4.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Refs: ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#compute-and-storage",children:"Lambda quotas"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\uc2e4\uc81c\ub85c \ucd5c\uadfc\uc5d0 Serverless Framework(",(0,s.jsx)(n.em,{children:"\uc774\ud558 sls"}),") \ub85c deploy \ud558\ub358 \uc911 ",(0,s.jsx)(n.code,{children:"Code storage limit exceeded"})," \uc5d0\ub7ec\uac00 \ub0ac\ub2e4. \uc774\ubc88 \uae30\ud68c\uc5d0 AWS Lambda \uc758 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d sls \uc124\uc815\uc744 \ud558\uace0 \uadf8 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574 \ubcf8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"aws-lambda-code-storage",children:"AWS Lambda Code Storage?"}),"\n",(0,s.jsxs)(n.p,{children:["AWS Lambda \ub294 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ucee8\ud14c\uc774\ub108Container\ub97c \ud1b5\ud574 \ubc14\ub85c \uc2e4\ud589\ud558\ub294 \uad6c\uc870\uc774\uae30\uc5d0 ",(0,s.jsxs)(n.strong,{children:["\uc18c\uc2a4\ucf54\ub4dc (",(0,s.jsx)(n.em,{children:"\uc9c1\uc811 \ucf54\ub529\ud55c \uc18c\uc2a4\ucf54\ub4dc \ubc0f \uc758\uc874\uc131 \ucf54\ub4dc"}),") \ub97c \uc5c5\ub85c\ub4dc\ud574\ub458 \uc2a4\ud1a0\ub9ac\uc9c0"]})," \uac00 \ud544\uc694\ud558\ub2e4. \uc774 \uc800\uc7a5 \uacf5\uac04\uc744 ",(0,s.jsx)(n.code,{children:"\ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0code storage"})," \ub77c \ud55c\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["AWS Lambda \uc11c\ube44\uc2a4\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub294 ",(0,s.jsx)(n.strong,{children:"75GB"})," \uc774\uace0 \uc774 \uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9\uc744 \ubaa8\ub450 \uc0ac\uc6a9\ud558\uba74 \uc18c\uc2a4\ucf54\ub4dc\ub97c \uc5c5\ub85c\ub4dc\ud560 \ub54c \uc544\ub798\uc640 \uac19\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4. (\u203b ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/operatorguide/code-storage.html",children:"Monitoring Lambda code storage"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"  Code storage limit exceeded. (Service: Lambda, Status Code: 400, ...)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ud574\uacb0-\ubc29\ubc95",children:"\ud574\uacb0 \ubc29\ubc95"}),"\n",(0,s.jsxs)(n.p,{children:["sls \ub85c AWS Lambda \ub97c Deploy \ud558\ub358 \uc911 \ubc1c\uc0dd\ud55c ",(0,s.jsx)(n.code,{children:"Code storage limit exceeded"})," \uc5d0\ub7ec\ub97c \uc5b4\ub5bb\uac8c \ud574\uacb0\ud574\uc57c\ud560\uae4c? \uc6b0\ub9ac \ud300\uc5d0\uc11c \ud574\uacb0\ud55c \ubc29\ubc95\uc744 \ucc28\ub840\ub85c \uc124\uba85\ud574 \ubcf8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"1-\ucf54\ub4dc-\uc2a4\ud1a0\ub9ac\uc9c0-\uc6a9\ub7c9-\ud655\ubcf4",children:"1) \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9 \ud655\ubcf4"}),"\n",(0,s.jsxs)(n.p,{children:["\ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uc6a9\ub7c9\uc774 \ubd80\uc871\ud558\uae30 \ub54c\ubb38\uc5d0 \uac00\uc7a5 \uba3c\uc800 \ud55c \uc77c\uc740 ",(0,s.jsx)(n.em,{children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9 \ud655\ubcf4"})," \uc774\ub2e4. \ud544\uc694\uc5c6\ub294 \ub78c\ub2e4 \ud568\uc218Lambda Function \ub97c \ucc3e\uc544 \uc0ad\uc81c\ud558\uac70\ub098 \uac01 \ub78c\ub2e4 \ud568\uc218\uc758 \ubc84\uc804Version\uc744 \ud655\uc778\ud574 \uc624\ub798\ub41c \ubc84\uc804\uc774 \ub9ce\uc774 \uc874\uc7ac\ud55c\ub2e4\uba74 \uadf8 \ubc84\uc804\ub4e4\uc744 \uc0ad\uc81c\ud558\ub294 \uc791\uc5c5\uc744 \uc9c4\ud589\ud588\ub2e4."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud544\uc694\uc5c6\ub294(\uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294) \ub78c\ub2e4 \ud568\uc218 \uc0ad\uc81c"}),"\n",(0,s.jsx)(n.li,{children:"\ub78c\ub2e4 \ud568\uc218\uc758 \uc624\ub798\ub41c \ubc84\uc804 \uc0ad\uc81c"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\uc870\uc0ac \uacb0\uacfc \ud544\uc694\uc5c6\ub294 \ub78c\ub2e4 \ud568\uc218\ub294 \uc5c6\uc5c8\uae30\uc5d0 ",(0,s.jsx)(n.em,{children:'"\ub78c\ub2e4 \ud568\uc218\uc758 \uc624\ub798\ub41c \ubc84\uc804 \uc0ad\uc81c"'})," \ub9cc \uc9c4\ud589\ud588\ub2e4. \uc774 \uc791\uc5c5\uc740 \ud300\uc758 \uc2dc\ub2c8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4\ubd84\uaed8\uc11c AWS CLI \ub97c \uc774\uc6a9\ud574 \uc218\ub3d9\uc73c\ub85c \ud558\ub098\ud558\ub098 \uc0ad\uc81c\ud574\uac00\uba70 \uc9c4\ud589\ud588\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"  $ aws lambda delete-function \\\n      --function-name ${LAMBDA_FUNCTION_NAME} \\\n      --qualifier ${LAMBDA_FUNCTION_VERSION}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/lambda/delete-function.html",children:"AWS CLI - delete-function"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 \uc774 \uc791\uc5c5\uc740 \ud55c \ubc88\uc774\ub77c\ub3c4 sls \ub85c deploy \uac00 \uac00\ub2a5\ud574\uc9c8\ub9cc\ud07c\uc758 \uc6a9\ub7c9\uc744 \ud655\ubcf4\ud560 \ub54c\uae4c\uc9c0 \uacc4\uc18d\ub418\uc5c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"-lambda-function-version",children:"\u203b Lambda Function Version"}),"\n",(0,s.jsxs)(n.p,{children:["AWS Lambda \uc758 \ucf58\uc194\uc5d0\uc11c \uc544\ubb34 \ud568\uc218Function\ub97c \uc120\ud0dd\ud574\ubcf4\uba74 ",(0,s.jsx)(n.code,{children:"\ubc84\uc804Version"})," \uc774\ub77c\ub294 \ud0ed\uc774 \uc788\ub2e4. \uc774 ",(0,s.jsx)(n.strong,{children:'"\ubc84\uc804"\uc774 \uc774\ubc88 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uac00\ub4dd \ucc28\uac8c \ud55c \uc6d0\uc778'})," \uc774\uc5c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"sls \ub85c \uc0c8\ub85c\uc6b4 \uc18c\uc2a4\ucf54\ub4dc\ub97c deploy \ud560 \ub54c, AWS Lambda\ub294 \ubc84\uc804\uc774\ub77c\ub294 \ud615\ud0dc\ub85c \ud30c\uc77c\uc744 \uc0dd\uc131\ud574 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5"})," \ud55c\ub2e4. \ud2b9\ubcc4\ud55c \uc124\uc815\uc774 \uc5c6\ub2e4\uba74, sls \ub85c ",(0,s.jsx)(n.strong,{children:"deploy \ud560 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 \uc800\uc7a5"})," \ud55c\ub2e4. (\uacfc\uac70\uc758 \ubc84\uc804\uc744 \uadf8\ub300\ub85c deploy \ud574\uc11c Rollback \ud560 \uc218 \uc788\ub294 \uae30\ub2a5)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"5MB \ud06c\uae30\uc758 \uc18c\uc2a4\ucf54\ub4dc\ub97c 30\ubc88 deploy \ud588\ub2e4\uba74 5MB * 30\ud68c, \ucd1d 150MB\ub97c \uc800\uc7a5\ud558\uac8c \ub41c\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uc9c0\uae08\uaecf \ud55c \ubc88\ub3c4 \uc774 \ubc84\uc804 \ud30c\uc77c\ub4e4\uc744 \ub530\ub85c \uad00\ub9ac\ud55c \uc801\uc774 \uc5c6\uc5c8\ub2e4. \uc11c\ube44\uc2a4 \ucd08\ubc18\uc5d0 \ub9cc\ub4e0 \uc5b4\ub5a4 \ub78c\ub2e4\ud568\uc218\ub294 \ubc84\uc804 \ud30c\uc77c\ub9cc 300\uac1c\uac00 \ub118\uc5c8\ub2e4. \uc774\ub7ec\ud55c \ubc84\uc804 \ud30c\uc77c\ub4e4\uc774 \uc313\uc774\uace0 \uc313\uc5ec 75GB \uc758 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uac00\ub4dd\ucc28\uac8c \ud588\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"2-serverless-framework-\uc124\uc815",children:"2) Serverless Framework \uc124\uc815"}),"\n",(0,s.jsx)(n.p,{children:"sls \ub85c AWS Lambda \ub97c deploy \ud560 \uc218 \uc788\uc744\ub9cc\ud07c\uc758 \ucd5c\uc18c\ud55c\uc758 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uc6a9\ub7c9\uc744 \ud655\ubcf4\ud588\ub2e4\uba74, sls \uc758 \ud50c\ub7ec\uadf8\uc778Plugin\uc744 \uc774\uc6a9\ud574 \ud544\uc694\uc5c6\ub294 \ubc84\uc804 \ud30c\uc77c\uc744 \ubaa8\ub450 \uc0ad\uc81c\ud560 \uc218 \uc788\ub3c4\ub85d \ud588\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.serverless.com/plugins/serverless-prune-plugin",children:"Serverless Prune Plugin"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \ud50c\ub7ec\uadf8\uc778\uc740 sls \ub85c deploy \ud558\uace0 \ub09c \ub4a4, ",(0,s.jsx)(n.strong,{children:"\uc124\uc815\ud55c \uac2f\uc218\uc758 \ubc84\uc804 \ud30c\uc77c\ub9cc \ub0a8\uaca8\ub450\uace0 \ubaa8\ub4e0 \ubc84\uc804 \ud30c\uc77c\ub4e4\uc744 \uc0ad\uc81c"})," \ud55c\ub2e4. sls \ub85c deploy \ud560 \ub54c\ub9c8\ub2e4 \uc624\ub798\ub41c \ubc84\uc804 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc55e\uc73c\ub85c\ub294 \uc624\ub798\ub41c \ubc84\uc804 \ud30c\uc77c\ub4e4\uc774 \uc313\uc5ec \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucc28\uc9c0\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud560 \uc218 \uc788\ub2e4. \uc9c0\uc18d\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\uae30\uc5d0 \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc774\ub77c \uc0dd\uac01\ud55c\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \ud50c\ub7ec\uadf8\uc778\uc758 \uc124\uc815 \ubc29\ubc95\uc740 ",(0,s.jsx)(n.a,{href:"../../../docs/aws/serverless-framework/how-to-set-prune-plugin",children:"Prune Plugin: AWS Lambda Storage Limit Error"})," \uc5d0\uc11c \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"3-deploy",children:"3) Deploy"}),"\n",(0,s.jsx)(n.p,{children:"\uc2dc\ud5d8 \uc0bc\uc544 1\uac1c\uc758 Sereverless Framework \uc124\uc815 \ud30c\uc77c(YAML)\uc5d0 Serverless Prune Plugin\uc744 \uc124\uc815\ud558\uace0 sls \ub85c deploy \ud588\ub2e4. \uc608\uc0c1\ub300\ub85c \uc624\ub798\ub41c \ubc84\uc804\uc758 \ud30c\uc77c\ub4e4\uc774 \ubaa8\ub450 \uc0ad\uc81c\ub418\uc5c8\ub2e4. \ub098\uba38\uc9c0 Sereverless Framework \uc124\uc815 \ud30c\uc77c(YAML)\uc5d0\ub3c4 \ud50c\ub7ec\uadf8\uc778\uc744 \uc124\uc815\ud558\uace0 \ubaa8\ub450 deploy \ub97c \ud574\uc11c \uc624\ub798\ub41c \ubc84\uc804 \ud30c\uc77c\ub4e4\uc744 \uc0ad\uc81c\ud588\ub2e4. \uac1c\ubc1c\ud658\uacbd(Dev)\uc758 \ub78c\ub2e4\ud568\uc218\ub4e4\uc758 deploy \ud69f\uc218\uac00 \ub9ce\uc558\uc5c8\uae30\uc5d0 \uac1c\ubc1c\ud658\uacbd\ub9cc deploy \ud574\ub3c4 \uc0c1\ub2f9\ud55c \uc591\uc758 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ud655\ubcf4\ud560 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"75GB -> 22GB"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"75GB\ub97c \uac00\ub4dd\ucc44\uc6e0\ub358 \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0 \uc0ac\uc6a9 \uc6a9\ub7c9\uc774 22GB\ub85c \uc5ec\uc720\ub85c\uc6cc\uc84c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"AWS Lambda \ub97c Deploy \ud560 \ub54c, \ubc84\uc804\uc744 \uc0dd\uc131\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uc124\uc815\uc774\ub098 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub17c\uc758\ub3c4 \uc788\uc5c8\uc73c\ub098 \ucd5c\uc885\uc801\uc73c\ub85c\ub294 \uc9c0\uae08\ucc98\ub7fc \ud50c\ub7ec\uadf8\uc778\uc744 \uc774\uc6a9\ud55c \ubc29\ubc95\uc744 \uc720\uc9c0\ud558\ub294 \uac83\uc73c\ub85c \uacb0\ub860\uc774 \ub0ac\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774\uc720\ub294 \ubc84\uc804\uc744 \uc0dd\uc131\ud558\uc9c0 \uc54a\ub294 \uc124\uc815\uc774\ub098 \ubc29\ubc95\uc774 Serverless Framework \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uc774 \uc544\ub2c8\ub77c\uba74 \ub530\ub85c \ubb38\uc11c\ub97c \ub9cc\ub4e4\uc5b4 \ub0b4\uc6a9\uc744 \uad00\ub9ac\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc774\uace0 Serverless Framework \ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774\ub77c\ub3c4 \ud604\uc7ac\uc758 \ud50c\ub7ec\uadf8\uc778\uc744 \uc774\uc6a9\ud55c \ubc29\ubc95\uacfc \uc911\ubcf5\ub418\uae30 \ub54c\ubb38\uc774\ub2e4. \uc6b0\ub9ac \ud300\uc740 \uc778\ud504\ub77c\uc5d0 \uad00\ud55c \ub0b4\uc6a9\uc740 YAML \ud30c\uc77c \uc790\uccb4\uac00 \ubb38\uc11c\ub85c\uc11c\uc758 \uae30\ub2a5\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 \ucd5c\ub300\ud55c YAML \ud30c\uc77c\uc744 \ud1b5\ud574\uc11c\ub9cc \uad00\ub9ac\ud558\uace0 \uc2f6\uc5b4\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc18c \ub2f9\ud669\uc2a4\ub7ec\uc6b4 \uc0c1\ud669\uc774\uc5c8\uc9c0\ub9cc, \uc774\ubc88 \uae30\ud68c\ub97c \ud1b5\ud574 AWS Lambda \uc758 \ubc84\uc804\uacfc \ucf54\ub4dc \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc744 \uacf5\ubd80\ud560 \uc218 \uc788\uc5b4\uc11c \uc88b\uc740 \uacbd\ud5d8\uc774\uc5c8\ub2e4."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Refs","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://qiita.com/spring_i/items/40cfc99504d26b0834cc",children:"\u3010ServerlessFramework\u3011Lambda\u304cCode storage limit exceeded\u306b\u306a\u3063\u3066\u3057\u307e\u3063\u305f\u6642\u306e\u5bfe\u51e6\u6cd5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://dev.classmethod.jp/articles/lambda-error-storage-limit",children:"Lambda\u306e\u95a2\u6570\u3068\u30ec\u30a4\u30e4\u30fc\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u4e0a\u9650\uff0875GB\uff09\u306b\u9054\u3057\u3066\u3057\u307e\u3063\u305f\u6642\u306b\u5bfe\u5fdc\u3057\u305f\u3053\u3068"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/51722526/aws-serverless-code-storage-limit-exceeded",children:"AWS Serverless | Code storage limit exceeded"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/lambda/delete-function.html",children:"AWS CLI - Delete Functions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://qiita.com/tcsh/items/dc4592c2f73e64eb9f10",children:"[JAWS-UG CLI] Lambda:#8 \u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u524a\u9664"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>d});var s=l(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);