"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[663],{60120:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"aws/tips/how-to-set-crontab","title":"Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815","description":"AWS - Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4.","source":"@site/docs/aws/tips/how-to-set-crontab.md","sourceDirName":"aws/tips","slug":"/aws/tips/how-to-set-crontab","permalink":"/docs/aws/tips/how-to-set-crontab","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"devian-lab","permalink":"/docs/tags/devian-lab"},{"inline":true,"label":"dev.ian","permalink":"/docs/tags/dev-ian"},{"inline":true,"label":"Job\u02d0\u8ac7","permalink":"/docs/tags/job\u02d0\u8ac7"},{"inline":true,"label":"wiki","permalink":"/docs/tags/wiki"},{"inline":true,"label":"aws","permalink":"/docs/tags/aws"},{"inline":true,"label":"crontab","permalink":"/docs/tags/crontab"}],"version":"current","frontMatter":{"slug":"/aws/tips/how-to-set-crontab","title":"Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815","tags":["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","aws","crontab"],"keywords":["devian-lab","Job\u02d0\u8ac7","aws","crontab"],"description":"AWS - Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},"sidebar":"labDocsSidebar","previous":{"title":"CloudWatch - Log Insights \ucffc\ub9ac","permalink":"/docs/aws/tips/how-to-use-log-insights-query"},"next":{"title":"\uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\uc5b4","permalink":"/docs/aws/amplify/frequently-used-command"}}');var s=n(74848),i=n(28453);const d={slug:"/aws/tips/how-to-set-crontab",title:"Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","aws","crontab"],keywords:["devian-lab","Job\u02d0\u8ac7","aws","crontab"],description:"AWS - Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},r="Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815",c={},x=[{value:"Crontab\uc758 \uc2dc\uac04 \uc124\uc815?",id:"crontab\uc758-\uc2dc\uac04-\uc124\uc815",level:2},{value:"Crontab \uc2dc\uac04 \uc124\uc815 \ubc29\ubc95",id:"crontab-\uc2dc\uac04-\uc124\uc815-\ubc29\ubc95",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const l={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"crontab\ud06c\ub860\ud0ed-\uc2dc\uac04-\uc124\uc815",children:"Crontab(\ud06c\ub860\ud0ed) \uc2dc\uac04 \uc124\uc815"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2021-10-09\n  updatedAt: 2021-10-09\n"})}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h2,{id:"crontab\uc758-\uc2dc\uac04-\uc124\uc815",children:"Crontab\uc758 \uc2dc\uac04 \uc124\uc815?"}),"\n",(0,s.jsxs)(l.blockquote,{children:["\n",(0,s.jsx)(l.p,{children:"\ubc30\uce58Batch\ucc98\ub7fc \ud2b9\uc815 \uc2dc\uac04\ub9c8\ub2e4 \uc815\uae30\uc801\uc73c\ub85c ShellScript\ub098 \uba85\ub839\uc5b4Command, \ud504\ub85c\uadf8\ub7a8 \ub4f1\uc744 \uc2e4\ud589 \uc2dc\ud0a4\uae30 \uc704\ud55c \uc124\uc815"}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"crontab-\uc2dc\uac04-\uc124\uc815-\ubc29\ubc95",children:"Crontab \uc2dc\uac04 \uc124\uc815 \ubc29\ubc95"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\uc544\ub798\uc640 \uac19\uc774 \uacf5\ubc31(space)\uc73c\ub85c 5\uac1c \uac12\uc744 \uad6c\ubd84\ud558\uc5ec \uc124\uc815\ud55c\ub2e4. \ubd84 \uc2dc \uc77c \uc6d4 \uc694\uc77c \uc258\uc2a4\ud06c\ub9bd\ud2b8\uacbd\ub85c"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-text",children:"  \ubd84 \uc2dc \uc77c \uc6d4 \uc694\uc77c \uc258\uc2a4\ud06c\ub9bd\ud2b8\uacbd\ub85c_or_\uba85\ub839\uc5b4\n"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"example"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"/home/test/sample.sh"})," \ub97c \ub9e4\ub2ec 3\uc77c 11\uc2dc 01 \ubd84\uc5d0 \uc2e4\ud589"]}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-shell",children:"  1 11 3 * * /home/test/sample.sh\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"1\ubc88\uc9f8"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\ubd84(minute)"}),"\n",(0,s.jsx)(l.li,{children:"\uba87 \ubd84\uc5d0 \uc2e4\ud589 \ud560 \uac83\uc778\uc9c0 \uc124\uc815"}),"\n",(0,s.jsxs)(l.li,{children:["ex) ",(0,s.jsx)(l.code,{children:"1 11 3 * * \uc258\uc2a4\ud06c\ub9bd\ud2b8 \uacbd\ub85c_or_\uba85\ub839\uc5b4"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"XX\uc77c XX\uc2dc '01\ubd84'\uc5d0 \uc2e4\ud589"}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"*"}),"\uc744 \uc124\uc815\ud560 \uacbd\uc6b0, \ub9e4\ubd84(1\ubd84 \ub9c8\ub2e4) \uc2e4\ud589\uc744 \uc758\ubbf8"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["2\ubc88\uc9f8","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\uc2dc\uac04(hour)"}),"\n",(0,s.jsx)(l.li,{children:"\uba87 \uc2dc\uc5d0 \uc2e4\ud589 \ud560 \uac83\uc778\uc9c0 \uc124\uc815"}),"\n",(0,s.jsxs)(l.li,{children:["ex) ",(0,s.jsx)(l.code,{children:"1 11 3 * * \uc258\uc2a4\ud06c\ub9bd\ud2b8 \uacbd\ub85c_or_\uba85\ub839\uc5b4"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"XX\uc77c '11\uc2dc' 01\ubd84\uc5d0 \uc2e4\ud589"}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"*"}),"\uc744 \uc124\uc815\ud560 \uacbd\uc6b0, \ub9e4\uc2dc\uac04(1\uc2dc\uac04 \ub9c8\ub2e4) \uc2e4\ud589\uc744 \uc758\ubbf8"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["3\ubc88\uc9f8","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\uc77c(day of month)"}),"\n",(0,s.jsx)(l.li,{children:"\uba87 \uc77c\uc5d0 \uc2e4\ud589 \ud560 \uac83\uc778\uc9c0 \uc124\uc815"}),"\n",(0,s.jsxs)(l.li,{children:["ex) ",(0,s.jsx)(l.code,{children:"1 11 3 * * \uc258\uc2a4\ud06c\ub9bd\ud2b8 \uacbd\ub85c_or_\uba85\ub839\uc5b4"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"'3\uc77c' 11\uc2dc 01\ubd84\uc5d0 \uc2e4\ud589"}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"*"}),"\uc744 \uc124\uc815\ud560 \uacbd\uc6b0, \ub9e4\uc77c \uc2e4\ud589\uc744 \uc758\ubbf8"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["4\ubc88\uc9f8","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\uc6d4(month)"}),"\n",(0,s.jsx)(l.li,{children:"\uba87 \uc6d4\uc5d0 \uc2e4\ud589 \ud560 \uac83\uc778\uc9c0 \uc124\uc815"}),"\n",(0,s.jsxs)(l.li,{children:["ex) ",(0,s.jsx)(l.code,{children:"1 11 3 * * \uc258\uc2a4\ud06c\ub9bd\ud2b8 \uacbd\ub85c_or_\uba85\ub839\uc5b4"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"'5\uc6d4' 3\uc77c 11\uc2dc 01\ubd84\uc5d0 \uc2e4\ud589"}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"*"}),"\uc744 \uc124\uc815\ud560 \uacbd\uc6b0, \ub9e4\uc6d4 \uc2e4\ud589\uc744 \uc758\ubbf8"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["5\ubc88\uc9f8","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\uc694\uc77c(day of week)"}),"\n",(0,s.jsx)(l.li,{children:"\ubb34\uc2a8 \uc694\uc77c\uc5d0 \uc2e4\ud589 \ud560 \uac83\uc778\uc9c0 \uc124\uc815"}),"\n",(0,s.jsx)(l.li,{children:"0 ~ 6 \uc0ac\uc774\uc758 \uac12\uc744 \uc124\uc815 (0: \uc77c\uc694\uc77c, 6: \ud1a0\uc694\uc77c)"}),"\n",(0,s.jsxs)(l.li,{children:["ex) ",(0,s.jsx)(l.code,{children:"1 11 3 * * \uc258\uc2a4\ud06c\ub9bd\ud2b8 \uacbd\ub85c_or_\uba85\ub839\uc5b4"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\ub9e4\ub2ec 3\uc77c 11\uc2dc 01\ubd84 \uc218\uc694\uc77c\uc5d0 \uc2e4\ud589"}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"*"}),"\uc744 \uc124\uc815\ud560 \uacbd\uc6b0, \ub9e4\uc77c \uc2e4\ud589\uc744 \uc758\ubbf8"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Expressions"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"Desc"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"* * * * * "})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 1\ubd84\ub9c8\ub2e4 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"5 * * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c \ub9e4\uc2dc\uac04 05\ubd84\uc5d0 \uc2e4\ud589 (1\uc2dc\uac04 \uac04\uaca9\uc73c\ub85c \uc2e4\ud589)"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"*/5 * * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 5\ubd84\ub9c8\ub2e4 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"*/10 * * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 10\ubd84\ub9c8\ub2e4 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0,10,20,30,40,50 * * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 10\ubd84\ub9c8\ub2e4 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 18 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 18\uc2dc 00\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"45 22 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 22\uc2dc 45\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"28 03 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 03\uc2dc 28\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"* 1 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 01\uc2dc 00\ubd84 ~ 01\uc2dc 59\ubd84 \uc0ac\uc774\uc5d0 1\ubd84 \uac04\uaca9\uc73c\ub85c \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 */1 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 1\uc2dc\uac04 \uac04\uaca9\uc73c\ub85c \uc2e4\ud589 (\ub9e4\uc2dc\uac04 00\ubd84)"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 */12 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 12\uc2dc\uac04\ub9c8\ub2e4 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 6,12 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 06\uc2dc, 12\uc2dc\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"10 2-5 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 02\uc2dc ~ 05\uc2dc \uc0ac\uc774 \ub9e4\uc2dc\uac04 10\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"}}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"(02\uc2dc 10\ubd84, 03\uc2dc 10\ubd84, 04\uc2dc 10\ubd84, 05\uc2dc 10\ubd84)"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"5 8-20/3 * * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc77c 08\uc2dc ~ 20\uc2dc \uc0ac\uc774 3\uc2dc\uac04 \uac04\uaca9\uc73c\ub85c 05\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"}}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"(08\uc2dc 05\ubd84, 11\uc2dc 05\ubd84, 14\uc2dc 05\ubd84, 17\uc2dc 05\ubd84, 20\uc2dc 05\ubd84)"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"42 4 10 * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\ub2ec 10\uc77c 04\uc2dc 42\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"30 5 1,15 * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\ub2ec 1\uc77c\uacfc 15\uc77c 05\uc2dc 30\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0-10 17 1 * *"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\ub2ec 1\uc77c 17\uc2dc 00\ubd84 ~ 17\uc2dc 10\ubd84\uae4c\uc9c0 1\ubd84 \ub2e8\uc704\ub85c \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 17 * * 1"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc8fc \uc6d4\uc694\uc77c 17\uc2dc 00\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0,10 17 * * 0,2,3"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\uc8fc \uc77c, \ud654, \uc218\uc694\uc77c 17\uc2dc 00\ubd84\uacfc 17\uc2dc 10\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 0 1,15 * 1"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\ub9e4\ub2ec 1\uc77c\uacfc 15\uc77c \uadf8\ub9ac\uace0 \uc6d4\uc694\uc77c 24\uc2dc 00\ubd84\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 6,12 * * 0,3"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\uc218, \uc77c\uc694\uc77c\ub9c8\ub2e4 06\uc2dc, 12\uc2dc\uc5d0 \uc2e4\ud589"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"0 21 * * 1-6"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\uc6d4 ~ \ud1a0 21\uc2dc 00\ubd84\uc5d0 \uc2e4\ud589"})]})]})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u203b AWS \uc758 Lambda \ub4f1\uc744 \uc2e4\ud589\ud558\ub294 EventBridge \uc758 \uc2dc\uac04 \uc124\uc815\uc740 6\ubc88\uc9f8\uc5d0 ",(0,s.jsx)(l.em,{children:"\uc5f0\ub3c4"})," \ub97c \ucd94\uac00\ud558\uc5ec \uc124\uc815\ud55c\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Refs","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"https://docs.aws.amazon.com/ko_kr/eventbridge/latest/userguide/eb-scheduled-rule-pattern.html",children:"AWS - Amazon\uc5d0\uc11c cron \ubc0f rate \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec \uaddc\uce59 \uc2a4\ucf00\uc904\ub9c1 EventBridge"})}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>d,x:()=>r});var t=n(96540);const s={},i=t.createContext(s);function d(e){const l=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:l},e.children)}}}]);