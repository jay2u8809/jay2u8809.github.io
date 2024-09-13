---
slug: /programming/shell-script/how-to-set-default-value
# id: how-to-set-default-value
title: Default 값 설정 방법
tags: [
  devian-lab, 
  dev.ian,
  Jobː談,
  wiki,
  shell script,
  default value,
]
keywords: [
  devian-lab,
  Jobː談,
  shell script,
  default value,
]
description: 쉘스크립트에서 디폴트값을 설정하는 방법에 대해 정리한다.
# sidebar_position: 1
---

<!--title -->
# Default 값 설정 방법
<!--//title -->

<!-- 
```json
{
  "author": "Dev.ian",
  "createdAt": "2024-08-20",
  "updatedAt": "2024-08-25"
}
``` 
-->

```yaml
  author: Dev.ian
  createdAt: 2024-08-20
  updatedAt: 2024-08-25
```


---

## Shell Script 에서 기본값(Default Value)을 설정하는 방법

  쉘스크립트ShellSCript에서 기본값은 `:`을 이용해 지정할 수 있는데 `:`과 함께 사용되는 `=`, `+` 등에 따라 조건이 달라진다.

  ### := 
    - 변수가 null 인 경우에 기본값을 설정

    ```sh
      declare num
      declare amount=32
      "${num:="${amount}"}" # num 이 null 인 경웅 amount 의 값을 대입
    ```


<br /><br /><br /><br /><br />

---
- Refs
  + [初心者向け、「上手い」シェルスクリプトの書き方メモ](https://qiita.com/m-yamashita/items/889c116b92dc0bf4ea7d)
  + [シェルスクリプトでデフォルト値の代入](https://qiita.com/knqyf263/items/54814e5331770f28582d)
