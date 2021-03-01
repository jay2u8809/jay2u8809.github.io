---
layout: post
title: GoLang - Go 언어에서 함수와 변수를 사용하는 법
categories: [Programming]
tags: 
- Programming
- Go
- Go Lang
- Function
comments: false
description:
author: J.ian
date:   2020-08-01
---

<input type="hidden" id="categoryName" value="Programming" />
<input type="hidden" id="postedDate" value="2020-08-01" />

> GO언어에서 함수와 변수를 사용하는 방법 정리

### 1. 기본 함수 main()과 fmt.Println() 
&nbsp;-&nbsp; **`func main()`** Go 언어로 만든 **`어플리케이션이 처음 시작`** 되는 메소드 <br />
&nbsp;-&nbsp; **`fmt.Println()`** console 출력을 위한 메소드
```golang

    // fmt 패키지 : 기본적인 입력과 출력에 대한 포맷에 대한 기능 제공
    import "fmt"

    // 어플리케이션 실행 시 가장 먼저 실행
    func main() {

        fmt.Println("Hello world")
        // [Result] : Hello world

        fmt.Printf("숫자 : %d \n", 8)
        // [Result] : 숫자 : 8 

        fmt.Printf("문자열 : %s \n", "Hello world")
        // [Result] : 문자열 : Hello world
    }

```
참고 : [Printf 함수의 다양한 사용법](https://gobyexample.com/string-formatting)
<br /><br />

### 2. 변수Variable 
##### 1) 변수의 선언
&nbsp;-&nbsp; **`var 변수명 데이터타입 `** 데이터 타입이 뒤에 온다. <br />
&nbsp;&nbsp; JS처럼 var를 이용해 변수임을 나타내나 데이터 타입을 선언해주어 데이터를 명확하게 정의할 수 있다.
```golang

    import "fmt"

    // int형 변수 선언
    var num int
   
    // int형 변수를 여러개 선언
    var num1, num2 int  // var num2 int, num3 int 와 동일 

    // 여러 변수 값을 초기화 : 선언과 동시에 값을 초기화하면 타입을 생략할 수 있다.
    var num1, num2, str = 1, 10, "hello world"   

    // '함수 안'에서는 ' = ' 대신 ' := ' 를 사용하여 var를 사용하지 않고 변수를 선언할 수 있다.
    // '함수 밖'에서는 에러가 발생 (함수 밖의 모든 선언들은 키워드(var, func 등)로 시작해야 하기 때문)
    // num := 8

    // 서로 다른 데이터 타입을 가지는 변수를 여러 개 동시에 선언할 수 있다.
    var (
        num int
        isExist bool
        str string
    )

```
<br />

##### 2) 기본 자료형 
&nbsp;-&nbsp; Go는 묵시적 형 변환을 하지 않는다. 따라서 타입이 맞지 않으면 값을 할당할 수 없습니다. <br />

| Data Type | 설명 | 예시 | 비고 | 
|:---|:---|:---|:---|
| bool | 참/거짓을 표현하는 Boolean | true, false | 자바 : boolean |
| string | 문자열을 표현 | "Hello World" | 자바 : String |
| int | 정수를 표현 | 1, -58, 0, 120 | 32비트 시스템에서는 int32, 64비트 시스템에서는 int64 |
| int8 | 부호 있는 8비트 정수형 | -128 ~ 127 | - |
| int16 | 부호 있는 16비트 정수형 | -32,768 ~ 32,767  | - |
| int32 | 부호 있는 32비트 정수형 | -2,147,483,648 ~ 2,147,483,647 | - |
| int64 | 부호 있는 64비트 정수형 | -9,233,372,036,854,775,808 ~ 9,223,372,036,854,775,807 | - |
| uint | 정수를 표현 | 1, 0, 120 | 32비트 시스템에서는 uint32, 64비트에서는 uint64 |
| uint8 | 부호 없는 8비트 정수형 | 	0 ~ 255  | - |
| uint16 | 부호 없는 16비트 정수형 | 0 ~ 65,535 | - |
| uint32 | 부호 없는 32비트 정수형 | 0 ~ 4,294,967,295 | - |
| uint64 | 부호 없는 64비트 정수형 | 0 ~ 18,446,744,073,709,551,615  | - |
| uintptr | uint와 같은 크기를 갖는 포인터형, 포인터를 저장할 때 사용 | - | 32비트 시스템에서는 32비트 길이, 64비트에서는 64비트 길이 |
| float32 | IEEE-754 32비트 단정밀도 부동소수점, 7자리 정밀도 보장 | - | - |
| float64 | IEEE-754 64비트 배정밀도 부동소수점, 15자리 정밀도 보장 | - | - |
| complex64 | float32 크기의 실수부와 허수부로 된 복소수 | - | - |
| complex128 | float64 크기의 실수부와 허수부로 된 복소수 | - | - |
| byte | uint8과 크기가 동일(8비트), 바이트 단위로 저장할 때 사용 | - | uint8의 다른 이름(alias) |
| rune | int32와 크기가 동일(32비트), 유니코드 문자 코드(Code point)를 저장할 때 사용 | - | int32의 다른 이름(alias), 유니코드 코드 포인트 값을 표현 |

&nbsp;&nbsp; ※ 복소수를 표현할 수 있다는 점이 특이하다.
```go

    // 복소수의 표현 : 1i (i만 사용할 경우 변수로 판단될 수 있기에 1을 붙여준다.)
    var zNum complex128 = 7 + 1i

```
<br />

&nbsp;-&nbsp; **`변환할 타입(변환할 값)`** 형태로 데이터의 형 변환을 반드시 해야 한다.<br />
```go

    import "fmt"

    var num int = 9
    var f1 float64

    func main() {

        // 형 변환
        f1 = float64(num)
        f2 := float64(num)      // 함수 내에서 사용하는 변수 선언

        fmt.Printf(" >> num : %d, f1 : %6.2f \n", num, f1)
        // [Result] : >> num : 9, f1 :   9.00 

        fmt.Printf(" >> num : %d, f2 : %6.4f \n", num, f2)
        // [Result] : >> num : 9, f2 : 9.0000
    }

```
<br />

&nbsp;-&nbsp; 선언만 하고 초기화 하지 않은 변수들은 **`zero value`** 로 초기화 된다.<br />
```go

    import (
        "fmt"
    )

    var (
        num int         // num = 0
        f float64       // f = 0
        isExist bool    // isExist = false
        str string      // str = ""
    )

    func main() {

        fmt.Printf(" >> 숫자형의 zero value - num : %v, f : %v \n", num, f)
        // [Result] : >> 숫자형의 zero value - num : 0, f : 0

        fmt.Printf(" >> bool의 zero value - isExist : %v \n", isExist)
        // [Result] : >> bool의 zero value - isExist : false

        fmt.Printf(" >> string의 zero value - %q \n", str)
        // [Result] : >> string의 zero value - "" 
    }

```
<br />

##### 2) 상수
&nbsp;-&nbsp; **`const 변수명`** var 대신 const를 사 <br />
&nbsp;&nbsp; 상수 선언은 const를 명시해야 하기 때문에 **`:=로는 선언할 수 없다`** <br />
&nbsp;&nbsp; 타입을 지정하지 않은 상수는 상황에 따라 타입이 변한다.
```golang

    import "fmt"

    // 상수 선언
    const Pi1 float32 = 3.14
    const Pi2 = 3.14
    const (
        Pi3 float32 = 3.14      // 데이터 타입 지정
        Pi4 = 3.14              // 데이터 타입 미지정
    )

```
<br /><br />


### 3. 함수Function 
##### 1) 매개변수Parameter
&nbsp;-&nbsp; **`변수명 데이터타입 `** 순서로 매개변수를 선언 <br />
&nbsp;&nbsp; ex) **`(num1 int, num2 int)`**  <br />
&nbsp;&nbsp; ex) **`(num1, num2 int)`** 매개변수의 데이터 타입이 같을 경우 한 번만 선언
```golang

    // 변수명 데이터타입 순서로 선언한다.
    func sum(num1 int, num2 int) int {
        return num1 + num2
    }
   
    // 매개변수의 데이터 타입이 동일할 경우, 데이터타입의 선언은 한 번으로 충분하다.
    func sum(num1, num2 int) int {
        return num1 + num2
    }

```
<br />

##### 2) 함수의 결과 반환 Return
&nbsp;-&nbsp; **`함수(매개변수) 리턴타입 `** 순서로 리턴타입을 선언 <br />
&nbsp;&nbsp; ex) ① **`함수(매개변수) int`**  int형 데이터 반환 <br />
&nbsp;&nbsp; ex) ② **`함수(매개변수) (int, int)`** int형 데이터 2개 반환 <br />
&nbsp;&nbsp; ex) ③ **`함수(매개변수) (result int)`** int형 변수 result를 선언하고 result를 반환 <br />
&nbsp;&nbsp; ex) ④ **`함수(매개변수) (result1, result2 int)`** int형 변수 result1, result2를 선언하고 2개의 변수를 반환
```golang

    import "fmt"

    // ① int형 데이터로 반환Return한다.
    func divide1(num1 int, num2 int) int {
        var result int = (int) (num1 / num2)    // (num1 / num2)의 형변환 시 괄호가 없으면 에러가 발생
        return result
    }

    // ② 2개의 int형 데이터로 반환Return한다.
    func divide2(num1, num2 int) (int, int) {
        var result1 int = (int) (num1 / num2)
        var result2 int = num1 % num2 
        return result1, result2
    }

    // ③ int형 변수 result를 정의하면서 반환Return한다. 
    func divide3(num1, num2 int) (result int) {
        result = (int) (num1 / num2)      // result 변수를 선언한 필요가 없다. 
        return result
    }
    // ④ int형 변수 result1, result2를 정의하면서 반환Return한다.
    func divide4(num1, num2 int) (result1, result2 int) {
        result1 = (int) (num1 / num2)
        result2 = num1 % num2 
        return result1, result2
    }

    func main() {

        var result1, result2 int

        result1, result2 = divide2(10, 3)
        fmt.Println(" >> divide2 result : ", result1, result2)
        // [Result] : >> divide2 result :  3 1

        result1, result2 = divide4(10, 3)
        fmt.Println(" >> divide2 result : ", result1, result2)
        // [Result] : >> divide2 result :  3 1
    } 

```
<br /><br />

※ 프로그래머스 30분 Go를 보고 정리한 내용입니다.
&nbsp;&nbsp;참고 : [프로그래머스 - 30분 Go](https://programmers.co.kr/learn/courses/13) <br />

