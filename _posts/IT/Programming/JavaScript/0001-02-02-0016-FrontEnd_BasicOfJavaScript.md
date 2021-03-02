---
layout: post
title: Javascript - 기본 사용법
categories: [Programming]
tags: 
- Programming
- Typescript
- TypeScript
comments: false
description:
author: J.ian
date:   2019-07-13
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2019-07-13" />

> ## JavaScript? <br/>

&nbsp;- JavaScript : 웹 브라우저(Web Browser)에 포함된 스크립트 언어.<br />
&nbsp;- **`인터프리터`** 타입(Compile Time과 Run Time이 함께 동작)의 언어.

```text

    [자바스크립트의 실행 순서]
        1. 웹 페이지의 스크립트 코드 파싱 : 전역 스코프에 스크립트 변수와 함수 할당
        2. 스크립트 코드 실행
        3. 함수 호출
        4. 함수 파싱 : 함수 스코프에 함수 지역 변수 할당
        5. 함수 실행
        
            예) var num = 100;
                var fun = function add(x, y) {
                    return x + y;
                };
            
            num, fun    // 전역 스코프에 할당
            x, y        // 함수 스코프에 할당
       
```

> ### JavaScript 변수 및 데이터 타입 <br />

&nbsp;- 자바스크립트 변수는 데이터 타입을 정하지 않고 데이터의 내용에 따라 타입이 변한다.<br />
&nbsp;- 자바스크립트 변수를 초기화 하지 않을 경우 **`undefined`** 상태.

```html

<script>
    var a = 100;        // 숫자타입(정수, 실수 구분하지 않음)
    a = "javascript"    // 문자열 타입
    
    var b;              // undefined (존재하지 않는 객체 또는 값이 할당된 적이 없는 객체)
    
    var str = "java";               // 문자열
    var arr = [10, 20, 30];         // 배열(arr[0] arr[1] arr[2])
    var obj = { x:100, y:200 };     // 객체(obj.x obj.y)
    var fun = function add(num1, num2) {
        return num1 + num2;
    };                              // 함수
</script>

```
<br />

> ### JavaScript 숫자(Number) 리터럴 <br />

&nbsp;- **`Infinity와 NaN`** 은 typeof 결과가 Number

```text

    ・ Infinity : 무한대를 의미. 비교연산자(==) 사용 가능. isFinite()가 false.
        예) var num = 100;
            isFinite(num);  // true 
            Number.isFinite(num)
    ・ NaN : 숫자가 아님을 의미. 비교연산자(==) 사용 불가능. isNaN()가 true.
        예) var num = 100;
            isNaN(num);     // false
            Number.isNaN(num);
    ・ Number.MAX_VALUE : Number 최대값
    ・ Number.MIN_VALUE : Number 최소값 

```
<br />

> ### JavaScript 배열(Array) 및 객체(Object) 리터럴 <br />

```text

    ・ 배열(Array) : 데이터들의 집합. []와 ,로 표현하고 index를 통해 사용한다.

        예) var arr1 = [];                             // 빈 배열
            var arr2 = [10, 20, 30];        
            var arr3 = ['JAVA', 'HTML', 'JavaScript', 'Web'];
            var arr4 = [['JAVA', 'HTML'], [10, 20]];  // 배열 안에 배열
            
            arr2.length = 3                           // 배열의 크기 속성(메소드가 아니다.)
            arr3[3]                                   // Web (0부터 시작)
            arr1[0]                                   // undefined
            arr1.lenght;                              // 0
            arr4[0][1]                                // HTML
            arr4[1].length;                           // 2 (10, 20) 



    ・ 객체(Object) : 이름이 존재하는 데이터.
                    대괄호로 둘러싸서 표현. 프로퍼티명 : 프로퍼티값 으로 구성되어있다.
                    객체 내의 함수를 메소드(Method)라고 따로 부른다.
                    객체의 프로퍼티에 접근할 때는 this라는 키워드를 사용하여 접근.

        예) var person = {
            name : { first: "Jay", last : "Bran" },                 // name Property
            address : { nation : "Korea", city : "Seoul" },         // address Property
            size : { height : 170, weight : 70},                    // size Property
            sizeFunc : function () {                                // Method Property

                return this.size.height + this.size.weight;
            }
        }; 

```
<br />

> ### JavaScript 그 외 리터럴 <br />

&nbsp;- **`Boolean, undefined, null`** 

```text

    ・ Boolean : true/false 2개의 리터럴을 가진다.
                숫자 연산 : true -> 1 / false -> 0
                문자열 연산 : true -> "true" / false -> "false"
                논리 연산 : 0, undefined, NaN, null -> false

        예) var bool = false;
            if(!bool) {
                ...
            }


    ・ Undefined : 초기화 된 적이 없는 객체이거나 존재하지 않는 객체를 의미.
            return이 없거나 반환값이 없는 함수(메소드)는  undefined를 반환한다.
                숫자 연산 : NaN
                문자열 연산 : "undefined"
                논리 연산 : false

    ・ null : 지정된 데이터가 없는 객체를 의미.
                숫자 연산 : 0
                문자열 연산 : "null"
                논리 연산 : false

```
<br />

> ### JavaScript 비교 연산자 <br />

&nbsp;-**` ==, !=, ===, !== `** 

```text

    ・ == : 비교 대상(변수)의 값이나 참조값(주소)이 같을 경우 true를 반환.
        기본 자료형의 경우 데이터의 값을 비교하고, 객체의 경우 참조값을 비교한다.
        ★ 데이터 타입의 변환이 일어나는 비교연산자

        예) var num1 = 1;       
            var num2 = 1;
            -> num1 == num2;                   // true (데이터가 같다)

            var arr1 = [10, 20, 30];
            var arr2 = [10, 20, 30];
            -> arr1 == arr2;                   // false(데이터는 같으나 참조값이 다르다)

            var num3 = 5;
            var num4 = "5";
            -> num3 == num4;                   // true (숫자 -> 문자열로 변경하여 데이터를 비교한다.)

            var bool = true;
            var num5 = 1;
            -> bool == num5;                   // true (불리언 -> 숫자로 변경하여 비교한다.)

            var num6 = null;
            var num7;
            -> num6 == num7;                   // true (null과 undefined는 같다고 비교한다.)

            var obj = {
                num1 : 100,
                num2 : 200
            };
            var num8 = 100;
            -> obj.valueOf().num1 == num8;     // true (객체의 경우 valueOf(), 이나 toString()을 이용해 비교한다.)


    ・ != : ==의 반대. 비교 대상(변수)의 값이나 참조값이 같지 않을 때 true를 반환.


    ・ === : ==와 유사하나 비교 대상(변수)의 값이나 참조값 외에 데이터의 타입도 같아야 true를 반환.
        ★ 데이터 타입의 변환이 일어나지 않는 비교연산자

        예) var num1 = 1;       
            var num2 = "1";
            -> num1 == num2;                   // true (데이터가 같다)
            -> num1 === num2;                  // false (데이터는 같으나 타입이 다르다.)


    ・ !== : ===의 반대. 비교 대상(변수)의 값이나 참조값 외에 데이터의 타입이 같지 않을 때 true를 반환.

```
<br />

> ### JavaScript 기타 연산자 <br />

&nbsp;-**` typeof, instanceof, delete, void `** 

```html

    <script>

        var arr = [1, 'JAVA', true, new Date(), [10, 20, 30]];

        typeof arr[0];                      // number
        typeof arr[1];                      // string
        typeof arr[2];                      // boolean
        typeof arr[3];                      // object
        typeof arr[4];                      // object

        arr[3] instanceof Date;             // true
        arr[4] instanceof Array;            // true

        delete arr[0];                      // true (0번 째 원소 삭제)

        void arr[3];                        // undefined (피연산자와 관계없이 무조건 undefined 반환)

    </script>

```
<br />


> ### JavaScript 반복문 <br />

&nbsp;-**` for, for in `** 

```html

    <script>

        /*
            for : 배열 원소에서 접근할 때.
            for in : 객체의 프로퍼티에 접근할 때. (주로 사용)
        */
        var arr = [
            
            {name : "JAVA", num : 10},
            {name : "PYTHON", num : 20},
            {name : "RUBY", num : 30},
            {name : "JAVASCRIPT", num : 40},
            {name : "C++", num : 50}

        ];

        for (var idx in arr) {

            for (var prop in arr[idx]) {    // prop에 프로퍼티명이 대입.
                console.log(prop + ':' + arr[idx][prop]);
            }
        }

    </script>

```
<br />

> ### JavaScript 예외 <br />

```text

    ・ 예외 : 예외적인 상황이나 에러가 발생했음을 나타내는 객체.
        런타임(실행 중)에서 에러가 발생할 때마다 예외를 발생시킴.

        throw문을 사용해 일부러 예외를 발생시킬 수도 있다. 
            throw 표현식;
            throw new Error('에러메세지');          // Error객체 또는 Error객체를 상속 받은 객체.

    ・ try... catch...finally
        
        try {
            정상적인 코드
        } catch (e) {
            예외가 발생할 경우 실행될 코드
            예외 처리 또는 다른 예외 발생
        } finally {
            try블록이 모두 실행 완료되거나 catch블록이 실행된 이후에도
            반드시 실행이 필요한 코드
        }


        try {
            var reuslt = 100/0;
            throw new Error('0으로 나눌 수 없습니다.');
        } catch(e) {
            console.log(e);
        } finally {
            ...
        }
```    
<br />

> ### JavaScript 함수(Function) <br />

```text

    [함수를 정의하는 방법]

        1. function 함수명([매개변수 목록]) {
            코드
            [return 반환값;]
        }

        2. var 변수명 = function([매겨변수 목록]) {     // 이름없는 함수
            코드
            [return 반환값;]
        }

        3. var 변수명 = new Function(['매겨변수'....]);

        ★ 2, 3번은 해당 함수를 호출하는 구문보다 먼저 실행되어야 한다. 지칭하는 이름이 없기 때문에 선언문 뒤에 호출할 수 있다.

```

```text

    [변수의 스코프]
        1. 전역 스코프(Global Scope) : 코드 전체에서 접근 가능한 스코프
        2. 지역 스코프(Local Scope) :  함수 내의 코드에서만 접근 가능한 스코프
        3. 블록 스코프 (Blcok Scope) : 자바스크립트는 존재하지 않음

    [함수 매개변수의 스코프]
        ・ 함수의 매개변수는 지역 스코프에 해당.
            기본 자료형 : 매개변수로 전달된 값은 복사되어 함수 내에서 독립적으로 처리
            참조 자료형 : 해당 주소값만 복사되므로 실제 동일한 데이터가 처리 

    [함수의 매개변수 특징]
        ・ 함수 정의 시의 데이터 타입과 다른 어떠한 타입의 데이터도 전달 가능.
        ・ 값을 전달 받지 못한 매개변수는 undefined로 처리.
        ・ 생략이 가능한 매개변수는 매개변수 목록 끝에 두어 임의로 생략할 수 있도록 한다.

    [객체를 매개변수로 전달하는 경우]
        ・ 객체의 프로퍼티를 인자로 활용할 수 있는 장점.
        ・ 가독성이 높아지고, 매개변수의 순서에 상관없이 값을 자유롭게 전달할 수 있고, 생략된 매개변수를 명확히 표현할 수 있다.
            예)
                function person (arg) {

                    if(!arg.name) {
                        arg.name = 'Bran';
                    }

                    if(!arg.age) {
                        arge.age = 30;
                    }

                    console.log(arg.name, arg.age);
                }

                console.log(person({name:"jay", age:10});
                console.log(person({age:50}));

    [함수를 매개변수를 전달하는 경우]
        ・ 자바스크립트에서는 함수도 하나의 객체로서 다른 함수의 매개변수로 전달할 수 있다.
    
    [익명 함수]
        ・ 이름이 없는 함수. 함수 리터럴을 이용해 정의한 함수를 의미
        ・ 변수나 객체 프로퍼티에 저장하거나 함수의 인자, 반환값으로 사용.

    [중첩 함수]
        ・ 다른 함수 안에서만 사용할 수 있는 함수. 함수 외부에서 사용 불가.
        ・ 특정 함수에서만 필요한 기능을 외부에 노출시키지 않고 구현할 수 있어서 객체지향의 정보은닉이라는 특징을 구현하는데 사용할 수 있다.

    [스코프 체인]
        ・ 전역 객체와 함수 호출 시 생성된 호출 객체를 생성 순서대로 연결한 리스트
        ・ 함수는 함수가 호출되는 시점을 기준으로 스코프 체인에 연결되어 있는 모든 것에 접근 가능.

    [콜백 함수]
        ・ 직접 호출하는 함수가 아닌 특정 시점이나 조건을 만족했을 때 호출될 수 있도록 라이브러리 함수의 인자로 전달되는 함수를 의미.

    [클로저]
        ・ 비공개 속성/함수를 만들 수 있다
        ・ 실행될 코드와 함수의 유효 범위, 함수의 호출 객체와 연결된 스코프 체인의 조합.
        ・ 함수의 지역변수에 대한 중접함수를 만들면 비공개 속성과 접근자 메소드를 구현해 객체 지향의 정보은닉을 실현할 수 있다.
            예)
                function func1() {
                    var num = 0;

                    return function() { return ++num;   };
                }    

                var num1 = func1();

                var idx = 0;
                while(idx < 5) {
                    console.log(num1());
                    idx++;
                }

```

<br />

> ### JavaScript 객체(Object) <br />

```text
    [객체]
        ・ 이름과 값으로 구성된 프로퍼티들의 집합. 모든 객체는 Object 생성자 함수를 상속하며 Object에서 상속받은 프로퍼티와 메소드가 존재한다.

        var empty = {};                         // 빈 객체
        var empty1 = new Object();              // 빈 객체
        empty.x = 10;                           // 프로퍼티 추가
        empty1.x = 20;                          // 프로퍼티 추가

    [생성자]
        ・ 객체를 생성하고 초기화하기 위한 함수. return 이 없다. 
        ・ this키워드는 new 연산자로 새로 생성된 객체를 의미함.
            예) 
            function Person(name, address, age) {
                this.name = name;
                this.address = address;
                this.age = age;
                this.toString = function() {
                    return '{name : ' + this.name + ' address : ' + this.address + ' age : ' + this.age + '}';
                }
            }

            var bran = new Person("Bran", "Seoul", 25);

        ・ 생성자 함수를 통한 프로퍼티 접근
            예) Math.random();              // 0~1사이의 수 반환.
                Math.round(1.58);           // 2 반환
                Math.PI;                    // 원주율 반환

    [프로토타입 객체]
        ・ 자바스크립트의 모든 객체는 프로토타입이라는 객체를 내부적으로 참조한다
        ・ 프로토타입의 실체는 Objcet객체를 의미
        ・ 프로토타입 객체의 프로퍼티를 상속하고 있고, 효율적으로 메소드를 추가할 수 있다.
        ・ 프로토타입 객체에 의한 상속을 통해 메모리 사용량을 줄일수 있다.
        ・ 프로토타입 객체의 프로퍼티가 추가/제거되면 바로 사용할 수 있다.
            예)
            function Person(name, age, height, weight) {
                this.name = name;
                this.age = age;
                this.height = height;
                this.weight = weight;
            }

            Person.prototype.bmi = function() {
                return this.height * this.weight * 0.8;
            }

            var temp = new Person("Bran", 25, 170, 70);
            console.log(temp.bmi());


    [Constructor 속성]
        ・ 모든 객체는 객체를 초기화하는데 사용하는 생성자 함수를 참조하는 constructor 프로퍼티를 가지고 있다.
        ・ constructor 프로퍼티를 이용해 객체의 타입을 판단할 수 있으며 객체 생성도 가능하다.    
            예)
            if(temp.constructor == Person)  {
                ...
            }

            var temp2 = new temp.constructor("jay", 20, 180, 65);   // temp.constructor == Person

```
<br />
