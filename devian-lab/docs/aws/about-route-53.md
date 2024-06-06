---
# slug: aws/route53/about-route-53
id: about-route-53
title: Route53 설명
tags: [devian-lab, wiki, aws, ec2, linux, apache, config, run level, 실행레벨, 부팅레벨]
# sidebar_position: 1
---

<!--title -->
# Route53 설명
<!--//title -->


```json
{
  "author": "Onigiri.J",
  "createdAt": "2024-05-21",
  "updatedAt": "2024-05-21"
}
```

## Remark
- 53은 대표적인 DNS 포트번호이다.


## Route 53 의 대표 기능
|No |Title     |Desc|
|---|---       |---|
|1  |도메인 등록|도메인 네임을 구입/관리 가능한 Registra |
|2  |DNS 서비스 |도메인 네임을 IP 주소로 변환|
|3  |헬스 체크   |App에 리퀘스트를 보내 헬스체크 가능, Fail over 기능|

- Registra: 도메인 대행 업체
- Fail Over: 장애극복기능, 컴퓨터 서버/시스템/네트워크 등에서 이상이 생겼을 때 예비 시스템으로 자동 전환되는 기능 


## Hosting Zone(호스팅 영역)
- 레코드의 컨테이너
  + 도메인 네임을 관리하기 위한 다양한 정보가 있는 논리적인 분류
- 레코드
  + 특정 도메인(예: example.com)과 그 하위 도메인(app.example.com, api.example.com)의 트래픽을 라우팅하는 방식을 정의
  + DNS 서버에서 IP 주소와 호스트 이름을 연결하는 엔트리(Entry)
- 종류
  + Public Hosted Zone
    - 일반적으로 Route 53에 도메인을 등록하면 자동으로 생성
    - 특정 도메인 네임(예: example.com)과 그 하위 도메인 네임(acme.example.com, zenith.example.com)의 트래픽을 라우팅하는 방식에 대한 정보를 담고 있는 컨테이너
  + Private Hosted Zone
    - VPC 내에 있는 도메인과 그 하위 도메인에 대하여 Route 53의 DNS 쿼리 응답 정보가 담긴 컨테이너
    - 내부에서만 접근할 수 있는 비공개 URL 이 필요 할 때 사용
    - 비공개 URL 이기 때문에 private DNS 레코드가 존재
    -  VPC 에서만 작동을 하고 비공개 도메인 명의 프라이빗 리소스를 식별할 수 있게 한다.

### DNS 레코드

|No |Record Name|Desc|
|---|---  |---|
|1  |A    |도메인 네임에 매핑되는 IPv4 주소를 저장하는 레코드, Forward DNS Lookup 에 사용|
|2  |AAAA |도메인 네임에 매핑되는 IPv6 주소를 저장하는 레코드, Forward DNS Lookup 에 사용|
|3  |CNAME|도메인 네임에 대한 별칭, `www.exampe.com` 에 대한 CNAME -> `api.example.com`|
|4  |NS   |DNS 서버가 참조하는 다른 DNS 서버|
|5  |PTR  |IP주소 -> 도메인 네임, Backward DNS Lookup 에 사용|
|6  |SOA  |Start of Authority, 해당 도메인 네임에 대한 기본적인 인증정보를 담고 있는 레코드|

- A 레코드는 IP 주소를 등록하거나 IP 주소가 없는 경우(ELB)에는 별칭을 사용해 등록한다.
  + [[AWS] Route53 호스팅 영역 설정 (ELB에 도메인 연결)](https://m.blog.naver.com/chloemoretz2000/222677946888)

- Refs
  + [DNS 레코드에 대하여](https://blog.naver.com/chloemoretz2000/222672544033)
  + [DNS NS 레코드](https://www.cloudflare.com/ko-kr/learning/dns/dns-records/dns-ns-record/)


## 정방향/역방향(Forward/Backward) DNS Lookup
- **Forward DNS Lookup** : `도메인 네임 -> IP 주소` 
- **Backward DNS Lookup** : `IP 주소 -> 도메인 네임`
- 도메인 이름 분석(Domain Name Resolution): IP 주소와 도메인 네임을 대응시키는 것

### URL 의 구성
```text
  scheme://<user>:<password>@<host>:<port>/<url-path>?<searchepart>
```
- schema: 프로토콜 지정
  + ftp: 파일 전송
  + http: Web Server 접속
  + mailto: e-Mail 주소(수신자)
  + telnet: 서버 원격 접속
  + file: 파일에 대한 접근

- user: 인증이 필요한 서버에 접속할 때의 사용자 이름
  + 생략가능

- password: 인증이 필요한 서버에 접속할 때의 비밀번호
  + 생략가능

- host: 서버 주소
  + IP 주소나 도메인 네임

- port: Port 번호
  + 생략가능
  + DNS: 53
  + http: 80
  + https: 443

- url-path: 서버에 저장되어 있는 리소스의 경로
  + 생략가능

- searchpart: QueryString
  + 생략가능

### FQDN (Fully Qualified Domain Name)
```text
  www.example.com
```
- www: 호스트 네임
- example.com: 도메인 네임
- FQDN: 호스트 네임 + 도메인 네임 (`www.example.com`)
- FQDN 은 IP 주소로 변환된 후 통신이 이뤄진다. 이 변환을 담당하는 서버가 DNS 서버이다.

---
- Refs
  + [[Route 53] Route 53 개요](https://ssunw.tistory.com/entry/Route-53-Route-53-%EA%B0%9C%EC%9A%94)
  + [Route53에서 취득한 서브 도메인으로 EC2에 https로 접속해 보기](https://dev.classmethod.jp/articles/jw-access-ec2-with-https-with-subdomain-acquired-from-route53/)
  + [[AWS] 📚 Route53 개념 원리 & 사용 세팅 💯 정리](https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-Route-53-%EA%B0%9C%EB%85%90-%EC%9B%90%EB%A6%AC-%EC%82%AC%EC%9A%A9-%EC%84%B8%ED%8C%85-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC)