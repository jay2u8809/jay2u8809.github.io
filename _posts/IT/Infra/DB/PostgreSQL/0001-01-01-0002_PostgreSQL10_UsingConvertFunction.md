---
layout: post
title: PostgreSQL - PostgreSQL10 데이터 타입 변경 함수의 사용법
categories: [Database]
tags: 
- Database
- PostgreSQL
- SQL
comments: false
description:
author: J.ian
date:   2019-02-03
---

<input type="hidden" id="categoryName" value="Database" />
<input type="hidden" id="postedDate" value="2019-02-03" />

> PostgreSQL의 함수 중 데이터 타입을 변경하는 함수에 대해 정리해 본다.

> ### PostgreSQL의 데이터 타입 변경 함수의 사용법

___


### 데이터 타입(Data Type)을 변경하는 함수들     
<br />

#### 1) CAST     
&nbsp;&nbsp; ・ **`CAST`** (변경할 데이터 **`AS`** 변경할 데이터 타입)      
```postgresql
    CAST(123.00000 AS integer);   -- 123 (double precision -> integer)
    CAST('1234' AS numeric);      -- 1,234 (varchar -> numeric)
    CAST(12302 AS vachar);        -- 12302 (integer -> varchar)

    -- 예)    
        select CAST(123.00000 AS integer);
        select * from CAST(123.00000 AS integer);
```
<br />

#### 2) ::     
&nbsp;&nbsp; ・ 변경할데이터 **`::`** 변경할 데이터 타입       
```postgresql
    123.00000::integer;   -- 123 (double precision -> integer)
    '1234'::numeric;      -- 1,234 (varchar -> numeric)
    12302::vachar;        -- 12302 (integer -> varchar)
    
    -- 예)
        select 123.00000::integer;
```
<br />

#### 3) to_char     
&nbsp;&nbsp; ・ **`to_char(`** 변경할 데이터, 변경할 데이터 타입 **`)`**       
&nbsp;&nbsp;&nbsp;&nbsp; - 숫자를 문자, 특정한 형식으로 변경      
```postgresql
  -- 숫자 
    to_char(12345, '999,999');        -- 12,345
    to_char(12345, '999,999.99');     -- 12,345.00
    to_char(-12345, '999,999PR');     -- <12,345>, 음수의 경우 <>로 표시
    to_char(45, 'rn');                -- xlv, 숫자를 로마자로 표시
    to_char(12345, '999,999s');       -- 12,345+ (음수 양수 표시)
    to_char(12345, 's999,999');       -- +12,345 (음수 양수 표시) 
```

<br /><br />


___
