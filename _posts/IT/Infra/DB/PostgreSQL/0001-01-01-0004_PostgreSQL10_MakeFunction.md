---
layout: post
title: PostgreSQL - PostgreSQL10 함수(Function, Stored Procedure) 만들기
categories: [Database]
tags: 
- Database
- PostgreSQL
- Function
- Stored Procedure
comments: false
description:
author: J.ian
date:   2019-02-03
---

<input type="hidden" id="categoryName" value="Database" />
<input type="hidden" id="postedDate" value="2019-02-03" />

> PostgreSQL에서 함수(Function)을 만들어 사용할 수 있는 방법을 정리해 본다.      

&nbsp;&nbsp;
  Stored Procedure라는 이름으로도 불린다고 한다. 특정 DBMS에서 종속적인 언어를 이용하여 작성하기도 하고 C언어 같은 외부 언어를 이용해서 작성하기도 한다고 한다.      
&nbsp;&nbsp;
 ※ 업무를 통해 처음 접하게 되었기에 막막한 면이 컸었는데 [GIS DEVELOPER](http://www.gisdeveloper.co.kr/?s=pl%2Fpgsql "GIS DEVELOPER") 블로그를 통해 큰 도움을 받았다.      

> ### PostgreSQL의 함수(Function, Stored Procedure)을 만드는 방법 

___

#### 1. 함수(Function)의 생성       

&nbsp;&nbsp; **`CREATE FUCNTION`** 함수이름 **`(`** 변수명 **` dataType)`**       
&nbsp;&nbsp; **`RETURNS dataType AS $$`**        
&nbsp;&nbsp;&nbsp;&nbsp; **`DECLARE`**        
&nbsp;&nbsp;&nbsp;&nbsp; **`BEGIN`**         
&nbsp;&nbsp;&nbsp;&nbsp; **`END; $$`**        
&nbsp;&nbsp; **`LANGUAGE plpgsql;`**         

```postgresql

    CREATE FUNCTION add_calc(num1 integer, num2 integer)
    RETURNS integer AS $$               -- 1) 함수의 return type 설정

        DECLARE                         -- 2) 함수의 변수 선언부
            result_sum integer;         -- resultSum integer := num1 + num2; 도 가능

        BEGIN                           -- 3) 함수 시작
            result_sum := num1 + num2;  -- 대입연산자 :=

            RETURN result_sum;          -- 4) 결과값 반환
        END; $$                         -- 5) 함수 종료
    LANGUAGE plpgsql;                   -- 6) 사용 언어
```
&nbsp;
 1)의 함수의 returnType 선언부는 returns이다, 4)의 return과 구분하여 사용.       
<br /><br />


####  2. 생성한 함수(Function)에서 내장함수 사용        

&nbsp;&nbsp; - **`EXTRACT(year from timestamptz '2019-02-04');`** : 2019.000000 (double precision 타입으로 반환)      
&nbsp;&nbsp; - **`CAST(2019.000000 AS integer);`** : 2019 (double precision -> integer) ;      

```postgresql

    CREATE FUNCTION calc_year(input_date timestamptz)
    RETURNS integer AS $$

        DECLARE
            result_year integer;

        BEGIN
            result_year := cast(extract(year from input_date) as integer);
                            -- extract(year from input_date)::integer;

            RETURN result_year;
        
        END; $$ LANGUAGE plpgsql;
```
&nbsp;
extract()함수 내에 변수를 사용할 경우, data type을 적지 않고 변수명만 적어준다.      
<br /><br />


#### 3. 함수(Function)에서의 조건문 사용 - 1 (IF문)      

&nbsp;&nbsp; **`IF`** 조건 **`THEN`**        
&nbsp;&nbsp;&nbsp;&nbsp; 조건문의 내용 **`;`**         
&nbsp;&nbsp; **`ELSEIF`** 조건 **`THEN`**        
&nbsp;&nbsp;&nbsp;&nbsp; 조건문의 내용 **`;`**        
&nbsp;&nbsp; **`ELSE`**      
&nbsp;&nbsp;&nbsp;&nbsp; 조건문의 내용 **`;`**        
&nbsp;&nbsp; **`END IF;`**      

```postgresql

    CREATE FUNCTION OR REPLACE print_grade(score integer)
        RETURNS char(1) AS $$

        DECLARE
            result_grade char(1);
        
        BEGIN

            IF (score >= 90) THEN
                result_grade := 'A';
            
            ELSEIF (score >= 80) THEN
                result_grad := 'B';
            
            ELSEIF (score >= 70) THEN
                result_grade := 'C';
            
            ELSE
                result_grade := 'D';
            
            END IF;

            RETURN result_grade;
        
        END; $$ LANGUAGE plpgsql;
```
&nbsp;
경우에 따라 **`ELSEIF`**와 **`ELSE`**를 사용하지 않을 수 있다.       
&nbsp;
not null 조건은 **`IF`** 변수명 **`IS NOT NULL THEN`** 을 사용한다.       
<br /><br />


#### 4. 함수(Function)에서의 조건문 사용 - 2 (CASE문)         
&nbsp;&nbsp; **`CASE`**         
&nbsp;&nbsp; **`WHEN`** 조건 **`THEN`**         
&nbsp;&nbsp;&nbsp;&nbsp; 조건문의 내용 **`;`**        
&nbsp;&nbsp; **`WHEN`** 조건 **`THEN`**           
&nbsp;&nbsp;&nbsp;&nbsp; 조건문의 내용 **`;`**         
&nbsp;&nbsp; **`ELSE`**            
&nbsp;&nbsp;&nbsp;&nbsp; 조건문의 내용 **`;`**          
&nbsp;&nbsp; **`END CASE;`**          

```postgresql

    CREATE FUNCTION OR REPLACE print_grade(score integer)
        RETURNS char(1) AS $$

        DECLARE
            result_grade char(1);
        
        BEGIN
            CASE
                WHEN (score >= 90) THEN
                    result_grade := 'A';
            
                WHEN (score >= 80) THEN
                    result_grad := 'B';
            
                WHEN (score >= 70) THEN
                    result_grade := 'C';
            
                ELSE
                    result_grade := 'D';
            
            END CASE;

            RETURN result_grade;
        
        END; $$ LANGUAGE plpgsql;
```
```postgresql

    CREATE FUNCTION OR REPLACE print_grade(score char(1))
        RETURNS varchar AS $$

        DECLARE
            result_grade varchar;
        
        BEGIN
            CASE score
            WHEN 'A' THEN
                result_grade := '90점 이상';
            WHEN 'B' THEN
                result_grad := '80점 이상';
            WHEN 'C' THEN
                result_grade := '70점 이상';
            ELSE
                result_grade := '70점 미만';
            END CASE;

            RETURN result_grade;
        
        END; $$ LANGUAGE plpgsql;
```
<br /><br />


#### 5. 함수(Function)에서 Select 결과 반영        
&nbsp;&nbsp; - **`INTO`** 변수명;        

```postgresql

    CREATE FUNCTION student_name(student_num integer)
        RETURNS varchar AS $$
        
        DECLARE
            result_name varchar;

        BEGIN
            SELECT name into result_name FROM tbl_student
                WHERE s_number = student_num;
                -- name 컬럼의 결과를 result_name 변수에 대입한다.

            RETURN result_name;
        
        END; $$ LAGUAGE plpgsql;
```
<br /><br />


___
