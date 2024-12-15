"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[4035],{65765:(l,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"programming/shell-script/how-to-check-shell","title":"Shell \uc885\ub958 \ud655\uc778 \ubc0f \uae30\ubcf8 Shell \ubcc0\uacbd \ubc29\ubc95","description":"Shell \uc758 \uc885\ub958\ub97c \ud655\uc778\ud558\uace0 \uae30\ubcf8 \uc258\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4.","source":"@site/docs/programming/shell-script/how-to-check-shell.md","sourceDirName":"programming/shell-script","slug":"/programming/shell-script/how-to-check-shell","permalink":"/docs/programming/shell-script/how-to-check-shell","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"devian-lab","permalink":"/docs/tags/devian-lab"},{"inline":true,"label":"dev.ian","permalink":"/docs/tags/dev-ian"},{"inline":true,"label":"Job\u02d0\u8ac7","permalink":"/docs/tags/job\u02d0\u8ac7"},{"inline":true,"label":"shell","permalink":"/docs/tags/shell"}],"version":"current","frontMatter":{"slug":"/programming/shell-script/how-to-check-shell","title":"Shell \uc885\ub958 \ud655\uc778 \ubc0f \uae30\ubcf8 Shell \ubcc0\uacbd \ubc29\ubc95","tags":["devian-lab","dev.ian","Job\u02d0\u8ac7","shell"],"keywords":["devian-lab","Job\u02d0\u8ac7","shell"],"description":"Shell \uc758 \uc885\ub958\ub97c \ud655\uc778\ud558\uace0 \uae30\ubcf8 \uc258\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},"sidebar":"labDocsSidebar","previous":{"title":"Default \uac12 \uc124\uc815 \ubc29\ubc95","permalink":"/docs/programming/shell-script/how-to-set-default-value"},"next":{"title":"\uc870\uac74\ubb38 \uc0ac\uc6a9 \ubc29\ubc95","permalink":"/docs/programming/react/how-to-use-if-else"}}');var h=n(74848),i=n(28453);const r={slug:"/programming/shell-script/how-to-check-shell",title:"Shell \uc885\ub958 \ud655\uc778 \ubc0f \uae30\ubcf8 Shell \ubcc0\uacbd \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","shell"],keywords:["devian-lab","Job\u02d0\u8ac7","shell"],description:"Shell \uc758 \uc885\ub958\ub97c \ud655\uc778\ud558\uace0 \uae30\ubcf8 \uc258\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},c="[Shell] \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \uc258(Shell)\uc744 \ud655\uc778\ud574 \ubcf4\uc790",d={},t=[{value:"Shell?",id:"shell",level:2},{value:"\ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 Shell \ud655\uc778\ud558\uae30",id:"\ud604\uc7ac-\uc0ac\uc6a9\uc911\uc778-shell-\ud655\uc778\ud558\uae30",level:2},{value:"1) \uc6b4\uc601\uccb4\uc81c\uc758 \ud658\uacbd\ubcc0\uc218\ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\ub4e4",id:"1-\uc6b4\uc601\uccb4\uc81c\uc758-\ud658\uacbd\ubcc0\uc218\ub97c-\uc774\uc6a9\ud55c-\ubc29\ubc95\ub4e4",level:3},{value:"2) PID(Process ID)\ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\ub4e4",id:"2-pidprocess-id\ub97c-\uc774\uc6a9\ud55c-\ubc29\ubc95\ub4e4",level:3},{value:"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Shell \ud655\uc778 \ubc29\ubc95",id:"\uc0ac\uc6a9\ud560-\uc218-\uc788\ub294-shell-\ud655\uc778-\ubc29\ubc95",level:2},{value:"Shell \uc758 \uc885\ub958",id:"shell-\uc758-\uc885\ub958",level:3},{value:"1) sh (Bourne Shell)",id:"1-sh-bourne-shell",level:4},{value:"2) bash (Bourne-Again Shell)",id:"2-bash-bourne-again-shell",level:4},{value:"3) zsh (Z Shell)",id:"3-zsh-z-shell",level:4},{value:"4) csh (C Shell)",id:"4-csh-c-shell",level:4},{value:"5) ksh (Korn Shell)",id:"5-ksh-korn-shell",level:4},{value:"6) tcsh (Tee See Shell)",id:"6-tcsh-tee-see-shell",level:4},{value:"Default Shell \ubcc0\uacbd \ubc29\ubc95",id:"default-shell-\ubcc0\uacbd-\ubc29\ubc95",level:2},{value:"\ud2b9\uc815 \uc720\uc800\uc758 Default Shell \ub9cc \ubcc0\uacbd\ud558\uace0 \uc2f6\ub2e4\uba74?",id:"\ud2b9\uc815-\uc720\uc800\uc758-default-shell-\ub9cc-\ubcc0\uacbd\ud558\uace0-\uc2f6\ub2e4\uba74",level:3}];function a(l){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...l.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.header,{children:(0,h.jsx)(e.h1,{id:"shell-\ud604\uc7ac-\uc0ac\uc6a9-\uc911\uc778-\uc258shell\uc744-\ud655\uc778\ud574-\ubcf4\uc790",children:"[Shell] \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \uc258(Shell)\uc744 \ud655\uc778\ud574 \ubcf4\uc790"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2022-09-04\n  updatedAt: 2022-09-04\n"})}),"\n",(0,h.jsx)(e.hr,{}),"\n",(0,h.jsx)(e.h2,{id:"shell",children:"Shell?"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"\uc720\ub2c9\uc2a4Unix \uae30\ubc18 \uc6b4\uc601\uccb4\uc81c\uc758 \uba85\ub839\uc5b4 \ud574\uc11d \ud504\ub85c\uadf8\ub7a8"}),"\n",(0,h.jsxs)(e.li,{children:["User\uac00 \ucef4\ud4e8\ud130\uc5d0 \uc6d0\ud558\ub294 \ub0b4\uc6a9\uc744 \uba85\ub839\uc5b4\ub85c \uc804\ub2ec\ud588\uc744 \ub54c \uba85\ub839\uc5b4\ub97c \ud574\uc11d\ud558\uc5ec \ucef4\ud4e8\ud130\uc5d0 \uc804\ub2ec\ud558\uace0 \ucef4\ud4e8\ud130\uc758 \ucc98\ub9ac \uacb0\uacfc\ub97c \ud574\uc11d\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \ucd9c\ub825\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:(0,h.jsx)(e.em,{children:"User -> Shell -> \ucef4\ud4e8\ud130 -> Shell -> User"})}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\uc6f9\ube0c\ub77c\uc6b0\uc800\uac00 HTML, CSS, JS \ub97c \ud574\uc11d\ud574 \uc0ac\uc6a9\uc790\uac00 \ubcfc \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uacfc \ube44\uc2b7\ud558\ub2e4.","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.table,{children:[(0,h.jsx)(e.thead,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.th,{children:"Shell"}),(0,h.jsx)(e.th,{children:"Web Browser"})]})}),(0,h.jsxs)(e.tbody,{children:[(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"mkdir sample"})}),(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"www.google.com"})})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:"sample \ub514\ub809\ud1a0\ub9ac\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ucef4\ud4e8\ud130\uc5d0 \uc694\uccad"}),(0,h.jsx)(e.td,{children:"\uad6c\uae00 \ud648\ud398\uc774\uc9c0\ub97c \uc694\uccad"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h2,{id:"\ud604\uc7ac-\uc0ac\uc6a9\uc911\uc778-shell-\ud655\uc778\ud558\uae30",children:"\ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 Shell \ud655\uc778\ud558\uae30"}),"\n",(0,h.jsx)(e.h3,{id:"1-\uc6b4\uc601\uccb4\uc81c\uc758-\ud658\uacbd\ubcc0\uc218\ub97c-\uc774\uc6a9\ud55c-\ubc29\ubc95\ub4e4",children:"1) \uc6b4\uc601\uccb4\uc81c\uc758 \ud658\uacbd\ubcc0\uc218\ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\ub4e4"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"echo $SHELL"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ echo $SHELL\n\n  SHELL=/bin/zsh\n"})}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"echo $0"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ echo $0\n\n  -zsh\n"})}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"env | grep SHELL"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ env | grep SHELL\n  \n  /bin/zsh\n"})}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h3,{id:"2-pidprocess-id\ub97c-\uc774\uc6a9\ud55c-\ubc29\ubc95\ub4e4",children:"2) PID(Process ID)\ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\ub4e4"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"ps -p $$"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ ps -p $$\n  \n  PID TTY           TIME CMD\n  11085 ttys000    0:00.05 -zsh\n"})}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"ps -cp $$"})}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ ps -cp $$\n\n  PID TTY           TIME CMD\n  11085 ttys000    0:00.05 -zsh\n"})}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h2,{id:"\uc0ac\uc6a9\ud560-\uc218-\uc788\ub294-shell-\ud655\uc778-\ubc29\ubc95",children:"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Shell \ud655\uc778 \ubc29\ubc95"}),"\n",(0,h.jsxs)(e.blockquote,{children:["\n",(0,h.jsx)(e.p,{children:"\ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 Shell \uc774\uc678\uc5d0 \ub2e4\ub978 Shell \uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ubc29\ubc95"}),"\n"]}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"cat /etc/shells"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"etc \ub514\ub808\ud1a0\ub9ac\uc758 shells \ub77c\ub294 \ud30c\uc77c\uc5d0\ub294 \ud574\ub2f9 \uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 Shell \ub4e4\uc758 \uc124\uce58 \uacbd\ub85c\uac00 \uc800\uc7a5\ub418\uc5b4 \uc788\ub2e4."}),"\n",(0,h.jsx)(e.li,{children:"bash, csh \ub4f1\ub4f1 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \uc258\ub4e4\uc758 \uc124\uce58 \uacbd\ub85c\uac00 \ucd9c\ub825\ub41c\ub2e4."}),"\n"]}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ cat /etc/shells\n  \n  # List of acceptable shells for chpass(1).\n  # Ftpd will not allow users to connect who are not using\n  # one of these shells.\n  \n  /bin/bash\n  /bin/csh\n  /bin/dash\n  /bin/ksh\n  /bin/sh\n  /bin/tcsh\n  /bin/zsh\n"})}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h3,{id:"shell-\uc758-\uc885\ub958",children:"Shell \uc758 \uc885\ub958"}),"\n",(0,h.jsx)(e.h4,{id:"1-sh-bourne-shell",children:"1) sh (Bourne Shell)"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\ucd5c\ucd08\uc758 \uc258. \ub300\ubd80\ubd84\uc758 \ub9ac\ub205\uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5b4 \uc788\uc5b4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc124\uce58 \uacbd\ub85c: ",(0,h.jsx)(e.code,{children:"[/bin/sh]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h4,{id:"2-bash-bourne-again-shell",children:"2) bash (Bourne-Again Shell)"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uac00\uc7a5 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uc258. \ub9ac\ub205\uc2a4\uc758 \uae30\ubcf8 \uc258\uc774\uba70 ShellScript\uc758 \ub300\ubd80\ubd84\uc740 Bash\ub97c \uae30\ubc18\uc73c\ub85c \ub418\uc5b4\uc788\ub2e4\uace0 \ud574\ub3c4 \ubb34\ubc29\ud558\ub2e4.","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc124\uce58 \uacbd\ub85c : ",(0,h.jsx)(e.code,{children:"[/bin/bash]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h4,{id:"3-zsh-z-shell",children:"3) zsh (Z Shell)"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc218 \ub9ce\uc740 \uc258\ub4e4\uc758 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \ud655\uc7a5\ud604 Bourne Shell \uc774\ub2e4.","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc124\uce58 \uacbd\ub85c : ",(0,h.jsx)(e.code,{children:"[/bin/zsh]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h4,{id:"4-csh-c-shell",children:"4) csh (C Shell)"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc720\ub2c9\uc2a4\uc758 \uae30\ubcf8 \uc258. \uc774\ub984\ucc98\ub7fc C \uc5b8\uc5b4\ub97c \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e0 \uc258\uc774\uae30\uc5d0 C \uc5b8\uc5b4\uc758 \ubb38\ubc95\uacfc \uc720\uc0ac\ud558\ub2e4. \uac15\ub825\ud55c \ud504\ub85c\uadf8\ub798\ubc0d \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4.","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc124\uce58 \uacbd\ub85c : ",(0,h.jsx)(e.code,{children:"[/bin/csh]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h4,{id:"5-ksh-korn-shell",children:"5) ksh (Korn Shell)"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc124\uce58 \uacbd\ub85c : ",(0,h.jsx)(e.code,{children:"[/bin/ksh]"})]}),"\n"]}),"\n",(0,h.jsx)(e.h4,{id:"6-tcsh-tee-see-shell",children:"6) tcsh (Tee See Shell)"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\uc124\uce58 \uacbd\ub85c : ",(0,h.jsx)(e.code,{children:"[/bin/tcsh]"})]}),"\n"]}),"\n",(0,h.jsx)(e.h2,{id:"default-shell-\ubcc0\uacbd-\ubc29\ubc95",children:"Default Shell \ubcc0\uacbd \ubc29\ubc95"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:(0,h.jsx)(e.code,{children:"chsh -s ${SHELL_PATH}"})})}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:["\uc704\uc5d0\uc11c \ud655\uc778\ud588\ub358 \uc258 \uc124\uce58 \uacbd\ub85c\ub97c ",(0,h.jsx)(e.code,{children:"${SHELL_PATH}"})," \uc704\uce58\uc5d0 \ub123\uc5b4 \uc2e4\ud589\ud55c\ub2e4."]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:"Bash Shell \ub85c \ubcc0\uacbd"}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ chsh -s /bin/bash\n  Password: \ube44\ubc00\ubc88\ud638 \uc785\ub825\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:"\uae30\ubcf8 \uc258\uc774 \ubcc0\uacbd\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"\ud130\ubbf8\ub110\uc744 \uc0c8\ub86d\uac8c \uc2dc\uc791\ud558\uc5ec \ud655\uc778\ud55c\ub2e4."}),"\n"]}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ echo $SHELL\n  \n  /bin/bash\n"})}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h3,{id:"\ud2b9\uc815-\uc720\uc800\uc758-default-shell-\ub9cc-\ubcc0\uacbd\ud558\uace0-\uc2f6\ub2e4\uba74",children:"\ud2b9\uc815 \uc720\uc800\uc758 Default Shell \ub9cc \ubcc0\uacbd\ud558\uace0 \uc2f6\ub2e4\uba74?"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.code,{children:"chsh -s ${SHELL_PATH} ${USER_NAME}"})}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"onigiri \uc720\uc800\uc758 zsh \ub85c \ubc14\uafb8\uae30"}),"\n"]}),"\n",(0,h.jsx)(e.pre,{children:(0,h.jsx)(e.code,{className:"language-shell",children:"  $ chsh -s /bin/zsh onigiri\n"})}),"\n"]}),"\n"]}),"\n",(0,h.jsx)("br",{}),"\n",(0,h.jsx)("br",{}),"\n",(0,h.jsx)("br",{}),"\n",(0,h.jsx)("br",{}),"\n",(0,h.jsx)("br",{}),"\n",(0,h.jsx)(e.hr,{}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["Refs","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:(0,h.jsx)(e.a,{href:"https://www.leafcats.com/185",children:"Unix / Linux \uc6b4\uc601\uccb4\uc81c\uc758 Shell, POSIX"})}),"\n",(0,h.jsx)(e.li,{children:(0,h.jsx)(e.a,{href:"https://soft.plusblog.co.kr/27",children:"\ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc258(Shell) \uc815\ubcf4\ub97c \uc54c \uc218 \uc788\ub294 \ubc29\ubc95"})}),"\n",(0,h.jsx)(e.li,{children:(0,h.jsx)(e.a,{href:"https://nochoco-lee.tistory.com/350",children:"4.1: \uae30\ubcf8 \uc258 \ubcc0\uacbd\ud558\uae30"})}),"\n"]}),"\n"]}),"\n"]})]})}function o(l={}){const{wrapper:e}={...(0,i.R)(),...l.components};return e?(0,h.jsx)(e,{...l,children:(0,h.jsx)(a,{...l})}):a(l)}},28453:(l,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var s=n(96540);const h={},i=s.createContext(h);function r(l){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof l?l(e):{...e,...l}}),[e,l])}function c(l){let e;return e=l.disableParentContext?"function"==typeof l.components?l.components(h):l.components||h:r(l.components),s.createElement(i.Provider,{value:e},l.children)}}}]);