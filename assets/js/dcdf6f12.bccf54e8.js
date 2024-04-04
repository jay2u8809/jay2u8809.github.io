"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[1019],{4063:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(4848),o=n(8453);const l={slug:"/aws/cloudwatch/how-to-use-log-insights-query",title:"Log Insights \ub85c Log \uac80\uc0c9\ud558\uae30",tags:["de.log","aws","cloudwatch","log","log insights"]},t="Log Insights \ub85c Log \uac80\uc0c9\ud558\uae30",r={id:"aws/cloudwatch/how-to-use-log-insights-query",title:"Log Insights \ub85c Log \uac80\uc0c9\ud558\uae30",description:"Log Insights Query",source:"@site/onigiri/delog/docs/aws/cloudwatch/how-to-use-log-insights-query.md",sourceDirName:"aws/cloudwatch",slug:"/aws/cloudwatch/how-to-use-log-insights-query",permalink:"/onigiri/delog/docs/aws/cloudwatch/how-to-use-log-insights-query",draft:!1,unlisted:!1,tags:[{label:"de.log",permalink:"/onigiri/delog/docs/tags/de-log"},{label:"aws",permalink:"/onigiri/delog/docs/tags/aws"},{label:"cloudwatch",permalink:"/onigiri/delog/docs/tags/cloudwatch"},{label:"log",permalink:"/onigiri/delog/docs/tags/log"},{label:"log insights",permalink:"/onigiri/delog/docs/tags/log-insights"}],version:"current",frontMatter:{slug:"/aws/cloudwatch/how-to-use-log-insights-query",title:"Log Insights \ub85c Log \uac80\uc0c9\ud558\uae30",tags:["de.log","aws","cloudwatch","log","log insights"]},sidebar:"lifelogSidebar",previous:{title:"CloudWatch",permalink:"/onigiri/delog/docs/category/cloudwatch-2"},next:{title:"NodeJs",permalink:"/onigiri/delog/docs/category/nodejs-2"}},a={},d=[{value:"Log Insights Query",id:"log-insights-query",level:2},{value:"Keyword \uac80\uc0c9",id:"keyword-\uac80\uc0c9",level:3},{value:"Url Path \ub4f1 \ud2b9\uc218 \ubb38\uc790\uac00 \ud3ec\ud568\ub41c Keyword \uac80\uc0c9",id:"url-path-\ub4f1-\ud2b9\uc218-\ubb38\uc790\uac00-\ud3ec\ud568\ub41c-keyword-\uac80\uc0c9",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"log-insights-\ub85c-log-\uac80\uc0c9\ud558\uae30",children:"Log Insights \ub85c Log \uac80\uc0c9\ud558\uae30"}),"\n",(0,i.jsx)(s.h2,{id:"log-insights-query",children:"Log Insights Query"}),"\n",(0,i.jsx)(s.h3,{id:"keyword-\uac80\uc0c9",children:"Keyword \uac80\uc0c9"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Example"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"filter @message like /${SEARCH_KEYWORD}/\n  | sort @timestamp desc\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Android"})," \uac80\uc0c9"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"filter @message like /Android/\n  | sort @timestamp desc\n"})}),"\n",(0,i.jsx)(s.h3,{id:"url-path-\ub4f1-\ud2b9\uc218-\ubb38\uc790\uac00-\ud3ec\ud568\ub41c-keyword-\uac80\uc0c9",children:"Url Path \ub4f1 \ud2b9\uc218 \ubb38\uc790\uac00 \ud3ec\ud568\ub41c Keyword \uac80\uc0c9"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Example","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"api/v1/display/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"filter @message like /api\\/v1\\/display\\//\n  | sort @timestamp desc\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Refs:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",children:"Analyzing log data with CloudWatch Logs Insights"})}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var i=n(6540);const o={},l=i.createContext(o);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);