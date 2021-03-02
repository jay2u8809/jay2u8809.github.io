---
layout: post
title: Javascript - IE(인터넷 익스플로러) 브라우저 확인하기
categories: [Programming]
tags: 
- Programming
- Javascript
- checkBrowser
- IE
- InternetExplorer
comments: false
description:
author: J.ian
date:   2019-11-20
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-11-20" />

> Javascript로 IE(인터넷 익스플로러) 브라우저 확인

&nbsp;-&nbsp;`navigator.userAgent` : 브라우저 정보 확인 <br />

```javascript
    $(function() {
    
      // Internet Explorer(IE) Check
      let userAgent = navigator.userAgent.toLowerCase();  // 브라우저 정보
        // 크롬       : if(userAgent.indexOf("chrome") != -1) { ... }
        // 사파리     : if(userAgent.indexOf("safari") != -1) { ... }
        // 파이어폭스 : if(userAgent.indexOf("firefox") != -1) { ... }
        // 익스플로러 (IE10까지, IE11 불가) : if(userAgent.indexOf("msie") != -1) { ... }
      
      if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) 
              || (userAgent.indexOf("msie") != -1) ) {
      
        // navigator.appName
        //    ⇒ IE10까지는 'Microsoft Internet Explorer', IE11 부터 'Netscape'
        // navigator.userAgent.search('Trident')
        //    ⇒ Trident는 MS의 IE에서만 사용하는 레이아웃 엔진의 이름(MSHTML), IE를 구분하는 유일한 값
        //    ⇒ but, IE7 이하에서는 나오지 않는다.
        
        // navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)
        //    ⇒ Internet Explorer(IE)11 확인
        // agent.indexOf("msie") != -1
        //    ⇒ Internet Explorer(IE)10 까지 확인
        
        console.log('Internet Explorer 입니다.');
        
      }
      
    });
```