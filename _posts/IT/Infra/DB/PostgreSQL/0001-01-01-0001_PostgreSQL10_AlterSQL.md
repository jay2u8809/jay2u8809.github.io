---
layout: post
title: PostgreSQL - PostgreSQL10 Alter문
categories: [Database]
tags: 
- Database
- PostgreSQL
- SQL
- Alter
comments: false
description:
author: J.ian
date:   2019-01-06
---

<input type="hidden" id="categoryName" value="Database" />
<input type="hidden" id="postedDate" value="2019-01-06" />

> PostgreSQL의 Alter문에 대해 정리해 본다.

> ### PostgreSQL의 ALTER문 정리

___

#### 1. Table Column 추가     

**`ALTER TABLE`** 테이블이름      
&nbsp;&nbsp;&nbsp;&nbsp; **`ADD COLUMN`** 컬럼이름 데이터타입 (기타속성);
```postgresql
    alter table inventory
        add column a_qty NUMERIC(10,0),
        add column b_qty NUMERIC(10,0) DEFAULT 0;
```
<br /><br />


#### 2. Table Column 제거

**`ALTER TABLE`** 테이블이름       
&nbsp;&nbsp;&nbsp;&nbsp; **`DROP COLUMN`**  컬럼이름;
```postgresql
    alter table inventory
        drop column a_qty,
        drop column b_qty;
```
<br /><br />


#### 3. TABLE Column 이름 변경

**`ALTER TABLE`** 테이블이름        
&nbsp;&nbsp;&nbsp;&nbsp; **`RENAME COLUMN`** 원래컬럼이름 **`TO`** 새로운컬럼이름;
```postgresql
    alter table inventory
        rename column a_qty to c_qty;
```
<br /><br />


#### 4. TABLE Column 데이터타입 변경

**`ALTER TABLE`** 테이블이름      
&nbsp;&nbsp;&nbsp;&nbsp;**`ALTER COLUMN`** 컬럼이름 **`TYPE`** 변경할데이터타입;
```postgresql
    alter table inventory
        alter column a_qty type NUMERIC(100,0),
        alter column b_qty type VARCHAR(30),
        alter column c_qty type VARCHAR(30);
```
<br /><br />


#### 5. TABLE Column 디폴트 설정 및 수정

**`ALTER TABLE`** 테이블이름       
&nbsp;&nbsp;&nbsp;&nbsp; **`ALTER COLUMN`** 컬럼이름 **`SET DEFAULT`** 디폴트값;
```postgresql
    alter table inventory
        alter column b_qty set default 'empty';
```
<br /><br />


#### 6. TABLE Column 디폴트 제거

**`ALTER TABLE`** 테이블이름         
&nbsp;&nbsp;&nbsp;&nbsp; **`ALTER COLUMN`** 컬럼이름 **`DROP DEFAULT`**;
```postgresql
    alter table inventory
        alter column b_qty drop default;
```
<br /><br />


#### 7. TABLE Column not null 설정
**`ALTER TABLE`** 테이블이름       
&nbsp;&nbsp;&nbsp;&nbsp; **`ALTER COLUMN`** 컬럼이름 **`SET NOT NULL`**;
```postgresql
    alter table inventory
        alter column c_qty set not null;
```
<br /><br />


#### 8. TABLE Column not null 제거

**`ALTER TABLE`** 테이블이름         
&nbsp;&nbsp;&nbsp;&nbsp; **`ALTER COLUMN`** 컬럼이름 **`DROP NOT NULL`**;
```postgresql
    alter table inventory
        alter column c_qty drop not null;
```
<br /><br />


#### 9. TABLE 복합 기본키 삭제

&nbsp;복합 기본키(기본키가 2개인 테이블)의 경우, 기본키 제약조건을 각각 삭제한 뒤 다시 하나 기본키를 정하여 제약조건을 설정해준다.     

&nbsp;&nbsp;&nbsp;&nbsp;
1) **`ALTER TABLE`** 테이블이름         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
**`DROP CONSTRAINT`** 제약조건이름;     

&nbsp;&nbsp;&nbsp;&nbsp;
2) **`ALTER TABLE`** 테이블이름          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**`ADD CONSTRAINT`** 제약조건이름 **`PRIMARY KEY`**(기본키로 설정할 컬럼명);      

```postgresql
    alter table inventory
        drop constraint inventory_pkey;

    alter table inventory
        add constraint inventory_pkey primary key(inventory_sn);
```
<br /><br />

___
