---
layout: post
title: PostgreSQL - PostgreSQL10의 날짜 함수 사용법
categories: [Database]
tags: 
- Database
- PostgreSQL
comments: false
description:
author: J.ian
---

<input type="hidden" id="categoryName" value="Database" />
<input type="hidden" id="postedDate" value="2019-02-03" />

> PostgreSQL의 함수 중 날짜 함수에 대해 정리해 본다.

> ### PostgreSQL의 날짜 함수 사용법

___

#### 1) to_char
&nbsp;&nbsp;
**`to_char(`** 변경할 데이터, 변경할 데이터 타입 **`)`**     
&nbsp;&nbsp;&nbsp;&nbsp;
- 날짜를 문자, 특정한 형식으로 변경     

```postgresql

  -- 날짜 select to_char(); or select * from to_char();
  
    to_char(current_timestamp, 'yyyy');     -- 2019, (timestamp -> varchar)
    to_char(current_timestamp, 'yyy');      -- 019, (timestamp -> varchar)
    to_char(current_timestamp, 'yy');       -- 19, (timestamp -> varchar)
    to_char(current_timestamp, 'y');        -- 9, (timestamp -> varchar)
    
    to_char(current_timestamp, 'month');    -- february
    to_char(current_timestamp, 'mon');      -- feb
    to_char(current_timestamp, 'mm');       -- 02
    
    to_char(current_timestamp, 'dd');       -- 03, (2019-02-03의 일자)
    to_char(current_timestamp, 'd');        -- 1, 해당 일자의 요일 번호(일요일:1 ~ 토요일:6)
    to_char(current_timestamp, 'ddd');      -- 034, 해당 일자의 n/365(1월 1일 : 01)
    to_char(current_timestamp, 'day');      -- sunday, 해당 일자의 요일
    
    to_char(current_timestamp, 'hh');       -- 01, 해당 일자 시간(12시)
    to_char(current_timestamp, 'hh24');     -- 13, 해당 일자 시간(24시)
    
    to_char(current_timestamp, 'mi');       -- 50, 해당 일자 분(13시50분의 경우)
    to_char(current_timestamp, 'ss');       -- 50, 해당 일자 초
    
    to_char(current_timestamp, 'ww');       -- 05, 해당 일자 주(몇 번째 주인가?) 
```    
<br />

#### 2) extract
&nbsp;&nbsp; 
**`extract`** 함수        
&nbsp;&nbsp;&nbsp;&nbsp;
날짜의 일부 정보를 double precision 타입으로 변경하여 추출       

```postgresql

  extract(year from timestamp '2019-02-01 10:23:24');     --2,019.0000
  extract(month from timestamptz '2019-02-01 10:23:24');  --2.0000
  extract(day from date '2019-02-01 10:23:24');           --1.0000
```
<br />

#### 3) date_part
&nbsp;&nbsp;
**`date_part`** (필요한 정보, 날짜)      
&nbsp;&nbsp;&nbsp;&nbsp;
날짜의 일부 정보를 double precision 타입으로 변경하여 추출       

```postgresql

  date_part('year', timestamp '2019-02-01 10:23:24');     --2,019.0000
  date_part('month', timestamptz '2019-02-01 10:23:24');  --2.0000
  date_part('day', date '2019-02-01 10:23:24');           --1.0000
```
<br />

#### 4) interval
&nbsp;&nbsp; 
**`interval`**;      
&nbsp;&nbsp;&nbsp;&nbsp;
날짜를 계산      

```postgresql

      select current_timestamp - interval '1 day';      -- 1일 전
      select current_timestamp + interval '2 day';      -- 2일 후
      select current_timestamp - interval '1 day' * 3;  -- 3일 전
      select current_timestamp - interval '2 days' * 5; -- 10일 전
```
&nbsp;&nbsp;
day, days 구분하지 않고 사용해도 무관       

<br /><br />


___
