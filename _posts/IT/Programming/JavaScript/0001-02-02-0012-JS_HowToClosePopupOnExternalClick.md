---
layout: post
title: Javascript - 팝업 창 밖을 클릭하여 팝업 창 닫기
categories: [Programming]
tags: 
- Programming
- Javascript
- jquery
comments: true
description:
author: J.ian
date:   2019-11-22
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-11-22" />

> 팝업 창(특정 레이어) 이외의 부분에 클릭 이벤트 설정.

```javascript

    // pop-up close(close button)
    $('#popUpClose').on('click', function() {
      
        // 팝업 닫기 클릭 이벤트
    });

    // pop-up close(other space click)
    $(document).mouseup(function (e) {

      // 팝업창 영역
      let container = $('#popUpLayer');
      // 팝업창 이외 영역인지 확인
      let isPopupLayer
         = ( container.has(e.target).length === 0 ) && ( !container.is(e.target) ) ;

      // 팝업창 이외 영역일 경우 닫기 이벤트 실행
      if(isPopupLayer) {

        $('#popUpClose').trigger('click');
      }

    });
```