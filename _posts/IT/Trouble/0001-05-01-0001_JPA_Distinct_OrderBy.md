---
layout: post
title: PostgreSQL - for SELECT DISTINCT, ORDER BY expressions... 에러 
categories: [Trouble]
tags: 
- Trouble
- PostgreSQL
- JPA
- Hibernate
comments: false
description:
author: J.ian
---

<input type="hidden" id="categoryName" value="Trouble" />
<input type="hidden" id="postedDate" value="2021-01-05" />

> JPA를 사용했을 때 발생한 PostgreSQL의 "for SELECT DISTINCT, ORDER BY expressions... " 에러에 대해 알아본다.

```postgresql
    ERROR:  for SELECT DISTINCT, ORDER BY expressions must appear in select list
```

> ### PostgreSQL에서 Distinct와 Order by 를 함께 사용하는 방법 

___

#### 1. 에러가 발생한 상황      
&nbsp;&nbsp;
1) JPA를 이용해 간단한 select 쿼리Query를 작성하고 있었다. (1개의 테이블)     

&nbsp;&nbsp;
2) 1:N 형태의 테이블 구조이고 N에 해당하는 자식 테이블에서 부모 테이블의 Primary Key만을 select 하여 Long 타입의       
&nbsp;&nbsp;&nbsp;&nbsp; List 형식으로 받는 Query이다.(Foreign Key를 Select)     

&nbsp;&nbsp;
3) select 결과 Foreign Key가 중복인 경우가 많기 때문에 **`Distinct`** 를 사용하였고, Order By는 날짜 순서로 하였다.      
```java

    @Autowired
    private JPAQueryFactory factory;

    ...

    // Member(회원)와 OrderHistory(주문이력)은 1:N 관계
    QOrderHistory qOrderHistory = QOrderHistory.orderHistory;
    JPAQuery<Long> query = factory.query()
                .select(
                    qOrderHistory.member.memberSn   // memberSn은 Long 타입의 데이터
                )
                .distinct()
                .from(qOrderHistory)
                .where(qOrderHistory.orderStatus.eq(OrderStatus.Cancelled));    // 주문취소 이력이 있는 회원
                .orderBy(qOrderHistory.cancelledDate.asc());

    return query.fetch();   // List<Long> 으로 return

```

&nbsp;&nbsp;
4) 아래와 같은 에러가 발생하였다.
```postgresql
    ERROR:  for SELECT DISTINCT, ORDER BY expressions must appear in select list
```
<br /><br /> 


#### 2. 에러가 발생한 원인     
&nbsp;&nbsp;&nbsp;&nbsp;
PostgreSQL에서는 **`Distinct`** 를 사용할 때 select 절에서 없는 컬럼으로 Order By를 지정할 수 없다고 한다.      

&nbsp;&nbsp;
따라서!!! <b> select 절에 Order By로 지정한 컬럼을 넣어주면 된다. </b>

<br /><br /> 


#### 3. 해결 방법
&nbsp;&nbsp;&nbsp;&nbsp;
<b> 1) JPA의 **`distinct()`** 를 사용하지 않고 코드를 이용하여 중복 데이터를 제거 </b>     

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
추천하는 방법은 아니지만 중복 데이터가 있는 상태로 select 하여 코드로서 중복 데이터를 제거하는 방법이다.      

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b> ① **`Set`** 데이터 타입을 이용하는 방법 </b>     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Set은 중복을 허용하지 않는 데이터 타입이다. 따라서 **`Set`** 으로 변환한 뒤, 다시 **`List`** 로 변환한다.      

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b> ② **`Stream.distinct()`** 메소드를 이용하는 방법 </b>     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Stream.distinct()는 **`Ojbect 클래스의 equals()`** 메소드를 실행시켜 결과가 true 라면 동일한 데이터로 판단하여 중복을 제거한다.     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
커스텀Custom 클래스의 경우에는 equals() 메소드를 Override 해야하지만, 기본 제공 클래스의 경우에는 그럴 필요가 없다.    

```java

    QOrderHistory qOrderHistory = QOrderHistory.orderHistory;
    JPAQuery<Long> query = factory.query()
                .select(
                    qOrderHistory.member.memberSn   // memberSn은 Long 타입의 데이터
                )
                // .distinct()
                .from(qOrderHistory)
                .where(qOrderHistory.orderStatus.eq(OrderStatus.Cancelled));    // 주문취소 이력이 있는 회원
                .orderBy(qOrderHistory.cancelledDate.asc());
    
    List<Long> memberSns = query.fetch(); 

    // 1. Set을 이용하는 방법
    Set<Long> memberSnsSet = new HashSet<>(memberSns);  // Set으로 중복을 제거
    memberSns = new ArrayList<>(memberSnsSet);          // 다시 List로 만든다

    // 2. Stream의 distinct을 이용하는 방법
    memberSns = memberSns.stream()
                    .distinct()
                    .collect(Collectors.toList());  

    return memberSns;       
```
<br />


&nbsp;&nbsp;&nbsp;&nbsp;
<b> 2) **`Tuple`** 을 이용하여 중복 데이터를 제거 </b>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Order By로 지정한 컬럼을 select 절에 포함하여 **`Tuple`** 형식으로 받아 **`List`** 로 변환한다.     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
에러의 원인이 Order By로 지정한 컬럼이 select 절에 없기 때문이므로 에러가 발생하지 않는다.      
```java

    QOrderHistory qOrderHistory = QOrderHistory.orderHistory;
    JPAQuery<Tuple> query = factory.query()
                .select(
                    qOrderHistory.member.memberSn   // memberSn은 Long 타입의 데이터
                    , qOrderHistory.cancelledDate   // Order By로 지정한 데이터
                )
                .distinct()
                .from(qOrderHistory)
                .where(qOrderHistory.orderStatus.eq(OrderStatus.Cancelled));    // 주문취소 이력이 있는 회원
                .orderBy(qOrderHistory.cancelledDate.asc());
    
    List<Tuple> tList = query.fetch();          // Tuple List
    List<Long> memberSns = new ArrayList<>();   // Tuple의 값을 저장할 Long List

    // Tuple에서 MemberSn 값만 꺼내 Long List에 추가한다
    for (Tuple t : tList) {
        memberSns.add(t.get(qOrderHistory.member.memberSn));    
    }

    return memberSns;       
```
<br /><br />


### 4. 마무리
&nbsp;&nbsp;&nbsp;&nbsp;
원하는 데이터를 얻었지만 많은 아쉬움이 남는다.       

&nbsp;&nbsp;&nbsp;&nbsp;
SQL을 이용해 select로 데이터를 가져오는 시점부터 원하는 데이터를 얻고 싶었지만 아직 그 방법을 찾지 못했다.      

&nbsp;&nbsp;&nbsp;&nbsp;
데이터의 가공없이 바로 원하는 데이터를 가져오는게 쉬운 일은 아니라고 생각해도 그 방법 자체를 모르는 것이 아쉽다.      

&nbsp;&nbsp;&nbsp;&nbsp;
JPA에서 Native Query를 이용한다면 더 다양하고 효과가 좋은 방법을 얻을지도 모르겠다.     

<br /><br />

___
