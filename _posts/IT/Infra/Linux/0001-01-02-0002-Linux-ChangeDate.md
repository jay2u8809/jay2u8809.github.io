---
layout: post
title: Linux - 날짜(Date) 변경 명령어
categories: [Linux]
tags: 
- Linux
- Command
comments: false
description:
author: J.ian
date:   2019-05-01
---

<input type="hidden" id="categoryName" value="Linux" />
<input type="hidden" id="postedDate" value="2019-05-01" />


> Linux에서 시스템 날짜를 변경하고 확인하기 위한 명령어 사용하기


### Linux 시스템 날짜(System Date) 변경
**`systemctl stop chronyd`** : Root 사용자로 변경 후 또는 앞에 sudo 명령어를 사용해야만 한다. <br />
**`date -s "변경할 날짜(Date)"`** : "12/21 01:10 2020" 형태로 변경
```
    systemctl stop chronyd
    date -s "12/21 01:10 2020"    
```
<br />

### Linux 시스템 날짜(System Date) 확인
**`date`** : 현재 시스템 날짜(System Date) 확인 -> Mon Dec 21 18:48:01 JST 2020 <br />
**`date +%x `** : 현재 시스템 날짜(System Date) 확인 -> 12/21/2020 <br />
**`date +%r `** : 현재 시스템 날짜(System Date) 확인 -> 06:48:01 PM

```
    date
    date +%x
    date +%r
```
<br />

### AWS에서의 시스템 날짜 변경 시 주의 사항
&nbsp;AWS 상에서의 인스턴스(시스템)의 시간을 임의로 변경할 경우, **`일정한 시간이 지나고 자동으로 인스턴스가 멈추는 현상`**이 나타났다. 아마도 AWS의 시스템 시간과 임의로 변경한 인스턴스의 시간이 맞지 않을 경우, AWS가 인스턴스를 강제적으로 멈추게 하는 것 같다. 주의!

<br />
