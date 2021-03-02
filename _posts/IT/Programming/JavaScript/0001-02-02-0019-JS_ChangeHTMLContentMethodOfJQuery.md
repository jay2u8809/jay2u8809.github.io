---
layout: post
title: Javascript - 내용과 속성을 변경하는 JQuery 메소드들
categories: [JavaScript]
tags: 
- Programming
- Javascript
- jquery
comments: false
description:
author: J.ian
date:   2019-05-07
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-05-07" />

> JQuery를 이용하여 HTML의 태그 속성이나 텍스트를 변경하는 메소드들.
 text(), html(), attr()

> ### HTML 내의 내용 변경하기 - text() <br />

&nbsp;-&nbsp;**`$('선택자명').text('변경하고 싶은 내용')`** : text() 안에 변경하고 싶은 내용을 입력. <br />
&nbsp;-&nbsp;※text()에서 내용을 입력하지 않을 경우 해당 태그가 감싸고 있는 내용을 가져온다.

```html

    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
        <script type="text/javascript">

            $(function(){

                $('#jian').text('Wiki of J.Ian');
            });

        </script>
    </head>
    <body>
        <p id = "jian">Wiki</p>
    </body>

```
<br />
&nbsp;-&nbsp;**`Wiki -> Wiki of J.Ian`** 로 변경된다. <br />
&nbsp;-&nbsp;해당 태그의 속성은 건드리지 않고 태그로 감싼 내용만 변경한다.

```html

    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
        <script type="text/javascript">

            $(function(){

                var test = $('#jian').text();
                console.log(test);  <!-- Wiki라는 텍스트를 가져온다. -->
            });

        </script>
    </head>
    <body>
        <p id = "jian">Wiki</p>
    </body>

```
<br />

> ### HTML 내의 내용 변경하기 - html() <br />

&nbsp;-&nbsp;**`$('선택자명').html('변경하고 싶은 내용')`** : 기본적으로 text()와 동일하지만 변경하고 싶은 내용에 html태그도 포함할 수 있다. <br />
&nbsp;-&nbsp;html태그를 함께 넣어 주면 변경된 태그가 적용되게 할 수 있다.

```html

    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
        <script type="text/javascript">

            $(function(){

                $('#jian').html('<b>Wiki of J.Ian</b>');
            });

        </script>
    </head>
    <body>
        <p id = "jian">Wiki</p>
    </body>

```
<br />
&nbsp;-&nbsp;Wiki -> **`Wiki of J.ian`**로 변경된다. <br />
&nbsp;-&nbsp;태그를 포함할 수 있는 것을 제외하면 text()와 동일하다. <br />
<br />

> ### HTML 태그(tag)의 속성 변경하기 - attr() <br />

&nbsp;-&nbsp;**`$('선택자명').attr('속성명', '변경할 속성값')`** : 선택한 객체의 속성을 변경할 수 있다. <br />

```html

    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
        <script type="text/javascript">

            $(function(){

                $('#jian').attr('src', '/111.png');
            });

        </script>
    </head>
    <body>
        <img id = "jian" src="/809.png" />
    </body>

```
해당 태그의 사진경로가 809.png-> 111.png 로 변경된다. <br />

&nbsp;-&nbsp;**`$('선택자명').attr('속성명')`** : 선택한 객체의 속성의 값을 알 수 있다. <br />

```html

    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
        <script type="text/javascript">

            $(function(){

                // img 태그의 id인 jia이 저장된다.
                var imgTagId = $('img').attr('id');
            });

        </script>
    </head>
    <body>
        <img id = "jian" src="/809.png" />
    </body>

```
<br />

> ### Etc - empty(), remove(), val() <br />

&nbsp;-&nbsp;**`$('선택자명').empty()`** : 선택한 객체로 감싼 내용이 제거, 태그는 남아있다. <br />
&nbsp;-&nbsp;**`$('선택자명').remove()`** : 선택한 객체 자체가 삭제 <br />
&nbsp;-&nbsp;**`$('선택자명').val()`** : 선택한 객체의 value속성의 값을 변경, 내용을 입력하지 않을 경우 태그의 value 값을 가져온다.

```html

    <head>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
        <script type="text/javascript">

            $(function(){

                $('#jian1').empty();     <!-- <p id = "jian1"></p> -->
                $('#jian2').remove();    <!--                         -->       
                $('#jian3').val();       <!-- Wiki -->
                $('#jian3').val('Hello');<!-- <input type = "text" id = "jian3" value="Hello" /> -->
                
            });
            
        </script>
    </head>
    <body>
        <p id = "jian1">Wiki</p>
        <p id = "jian2">Wiki</p>
        <input type = "text" id = "jian3" value="Wiki" />
    </body>

```
<br />
