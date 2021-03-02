---
layout: post
title: Javascript - Vue.js 문법
categories: [Programming]
tags: 
- Programming
- Javascript
- Vuejs
comments: false
description:
author: J.ian
date:   2019-07-13
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-07-13" />

> ## Vue.js? <br/>

```html
    
    <!-- https://kr.vuejs.org/v2/guide/ -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: '#app',             // DOM요소와 Vue Instance 연결
            data: {
                str: 'Vue.js'
            }
        });
    </script>

    <body>
        <div id="app">
            <h1> Hello {{ str }} world !! </h1>
        </div>
    </body>

    <!-- 결과 : Hello Vue.js world !! -->
```

### Vue.js <br />

&nbsp;- el을 통해 지정한 DOM요소 안쪽에서만 접근이 가능.

```html

    <style>

        .bg {
            background-color: red;
        }

    </style>    

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        var vueConfigs = {
            el: '#container',
            data:  {
                contents: 'Contets Area',
                aside: 'Aside Area',
                header: 'Header Area',
                footer: 'Footer Area'
            }
        };

        var app = new Vue(vueConfigs);

    </script>
    <body>

        <div id="aside"> {{ aside }} </div>
        <div id="container">
            <div id="header"> {{ header }} </div>
            <div id="contents"> {{ contents }} </div>
            <div id="fotter" v-bind:class=' "bg" '> {{ footer }} </div>
        </div>

    </body>

```
<br />

### Vue.js의 템플릿 문법 <br />

&nbsp;- **`Interpolations`** : {{ 변수 }} 를 이용한 방법 <br />
&nbsp;- **`Directive`** : v-XXX로 시작하는 속성 (v-html, v-if, v-show, v-on, v-for, v-model)<br />

```html

   <!-- 
       Interpolations의 유효범위 :  el의 범위 내에서 태그의 속성이 아닌 태그가 둘러싸고 있는 곳에서 유효하다.
    -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: '#app',             // DOM요소와 Vue Instance 연결
            data: {
                str: 'Vue.js'
            }
        });

        var test = new Vue({
            el: '#test',
            data:  {
                str: "<strong>안녕</strong>하세요!!"
            }
        });
    </script>

    <body>
        <div id="app">
            <h1> Hello {{ str }} world !! </h1>             <!-- O -->
            <h1 class="{{ str }}"> Hello  world !! </h1>    <!-- X -->
            <h1 {{ str }}> Hello world !! </h1>             <!-- X -->

            <!-- 
                내부에서 간단한 자바스크립트 문법도 사용 가능
                if문은 사용불가. 복잡할 경우 메소드 호출로 대응.
             -->
            <p> {{ new Date() }} </p>                               <!-- O -->
            <p> {{ ((Math.random * 10) > 5) ? "UP" : "DOWN" }} </p> <!-- O -->
        </div>

        <div id="test">
            <p v-html="str"></p>        <!-- directive 속성(v-XXX) -->
        </div>
    </body>

```
<br />

### Vue.js의 메소드 <br />

```html

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var dataObj = { num: 30};
        var methodObj = {

            func1 : function(r) {
                return Math.round(r*r*Math.PI);
            },

            func2 : function(r) {
                return Math.round(2*r*Math.PI);
            }
        };

        var vueConfigs = {
            el: '#app',             // DOM요소와 Vue Instance 연결
            data: dataObj,
            methods: methodObj
        };

        var app = new Vue(vueConfigs);
    </script>

    <body>
        <div id="app">
            {{ num }}
            {{ func1(num) }}
            {{ func2(num) }}
        </div>
    </body>

```
<br />

### Vue.js의 데이터 바인딩 <br />

&nbsp;- dataObjX와 tempMethodX() 그대로 바인딩된다. <br />
&nbsp;- 데이터가 변경되면 화면을 다시 렌더링한다. <br />

```html

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        var vueConfigs = {
            el: '#app',
            data: {
                dataObj1: "vue.js1",
                dataObj2: "vue.js2", 
                dataObj3: "vue.js3", 
                dataObj4: "vue.js4",
                dataObj5: "vue.js5"
            },
            methods: {
                tempMethod1() { return 0;   },
                tempMethod2() { return 0;   },
                tempMethod3() { return 0;   },
                tempMethod4() { return 0;   },
                tempMethod5() { return 0;   }
            }
        };

        var app = new Vue(vueConfigs);
    </script>

    <body>
        <div id="app">
            
        </div>
    </body>

```
<br />

### Vue.js의 조건문과 반복문 <br />

```html

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        var vueConfigs = {
            el: '#app',
            data: {
                dataObj1: [
                    {messages: "JavaScript"},
                    {messages: "VueJS"}
                ],
                dataObj2: {
                    name: "bran",
                    address: "Seoul",
                    age: 25
                }
            },
            methods: {
               //
            }
        };

        var app = new Vue(vueConfigs);
    </script>

    <body>
        <div id="app">
            <ul>
                <li v-for="obj of dataObj1">
                    {{ obj.messages }}
                </li>
                <li v-for="(obj, idx) of dataObj1"> <!-- version 2.0 -->
                    {{idx}} : {{ obj.messages }}
                </li>
                <li v-for="(idx, obj) of dataObj1"> <!-- version 1.0 -->
                    {{idx}} : {{ obj.messages }}
                    <span v-if="idx == '0'"></span>
                </li>
            </ul> 

            <ul>
                <li v-for="value in dataObj2">
                    {{ value }}
                </li>
                <li v-for="(value, key) in dataObj2">
                    {{ key }} : {{ value }}
                </li>
                <li v-for="(value, key, index) in object">
                    {{ index }}. {{ key }} : {{ value }}
                </li>
            </ul>
        </div>
    </body>

```
<br />