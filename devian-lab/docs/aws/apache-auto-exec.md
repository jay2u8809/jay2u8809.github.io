---
# slug: /aws/ec2/apache-auto-exec
id: apache-auto-exec
title: Apache 자동 실행 설정
tags: [devian-lab, wiki, aws, ec2, linux, apache, config, run level, 실행레벨, 부팅레벨]
# sidebar_position: 1
---

<!--title -->
# Linux(EC2) 기동 시에 Apache 자동으로 실행하기
<!--//title -->


```json
{
  "author": "Onigiri.J",
  "createdAt": "2024-05-21",
  "updatedAt": "2024-05-21"
}
```

## Remark
- Apache 의 서비스명은 httpd 이다.
- chkconfig 는 Redhat 계열 리눅스에서만 사용가능하다.


## Apache (httpd) 시작
- 수동으로 시작할 때 명령어
- Apache 자동 실행을 설정하지 않았다면 EC2 인스턴스를 시작할 때마다 실행시켜야 한다.
```shell
$ sudo service httpd start  
```


## Apache (httpd) 상태 확인
- Apache 가 자동 실행되는 상태인지 확인하는 명령어
- Linux 실행레벨 0 ~ 6 까지 httpd(Apache) 는 off(실행X) 로 한다.
```shell
$ sudo chkconfig --list httpd

httpd 0:off 1:off 2:off 3:off 4:off 5:off 6:off
```

### Linux 실행 레벨(Run Level)
- 실행레벨, Run Level, 부팅레벨 등으로 불린다.
- 0 ~ 6 까지 7가지의 레벨

| Level | Status               | Desc |
| ---   | ---                  | ---  |
| 0     | Halt                 | 인스턴스 정지, 시스템 종료, 기본값 설정 불가 |
| 1     | Single User Mode     | Root 유저만 로그인 가능, 시스템 복구 등 관리 목적으로 사용, 네트워크 X |
| 2     | Multi User Mode      | 다중 사용자 모드, 네트워크 X |
| 3     | Full Multi User Mode | 일반적인 기동 상태, 다중 사용자 모드 |
| 4     | Unused               | 사용하지 않는 레벨이지만, 사용자가 정의해서 사용 가능 |
| 5     | X11                  | GUI 기동상태, 다중 사용자 모드 |
| 6     | Reboot               | 인스턴스 재기동, 시스템 재시작, 기본값 설정 불가 |

- Run Level 확인
```shell
$ runlevel

N3
```

- Run Level 변경
  + `init 0` 는 시스템 종료를 의미한다.
  + 시스템 부팅시의 기본 Run Level 은 `/etc/inittab` 에 정의되어 있다.
```shell
$ init 0  # terminate
$ init 6  # reboot
```


## Apache (httpd) 자동 실행 설정
- 인스터스 실행 시 항상 Apache 가 실행되도록 하는 명령어
```shell
$ sudo chkconfig httpd on
```

- 설정 후 확인
  + 실행레벨 2 ~ 5 의 값이 변경되었다.
  + 실행레벨 0(시스템 종료), 6(재부팅) 상태에서는 Apach 를 실행하지 않는다.
  + 실행레벨 1 ~ 5 상태에서는 Apache 를 실행한다.
  + EC2 인스턴스를 재기동해도 자동으로 Apache 가 실행되는 것을 확인할 수 있다.
```shell
$ sudo chkconfig --list httpd

httpd 0:off 1:off 2:on 3:on 4:on 5:on 6:off
```


## httpd 자동 시작 설정 해제
- Apache 가 자동 실행되는 것을 해제할 때 명령어
```shell
$ sudo chkconfig httpd off
```