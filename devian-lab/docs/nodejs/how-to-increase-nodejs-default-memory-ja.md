---
# slug: /wiki/nodejs/how-to-increase-nodejs-default-memory-ja
id: how-to-increase-nodejs-default-memory-ja
title: NodeJs メモリーサイズアップ
tags: [devian-lab, wiki, nodejs, memory, node, japanese]
# sidebar_position: 1
---

<!--title -->
# NodeJs メモリーサイズアップ
<!--//title -->


## 一時的に NodeJs のデフォルト Heap メモリーを指定
- 4GB (1024 * 4)
```shell
$ export NODE_OPTIONS=--max_old_space_size=4096
```

- 8GB (1024 * 8)
```shell
$ export NODE_OPTIONS=--max_old_space_size=8192
```


## スクリプトの実行時に Heap メモリーを指定
- Example
  + `${NODE_SCRIPT_FILE}` はスクリプト名です。
```shell
$ node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js
```

## package.json で設定する場合
- 上のコマンドを `package.json` に固定にすれば、使いやすいです。
- package.json
```json
{
  // other package.json stuff
  "scripts": {
    "start": "node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js"
  }
}
```

- run
```shell
$ npm run start
```


<br /><br /><br /><br /><br />

---
- Refs
  + [how to increase nodejs default memory?](https://stackoverflow.com/questions/34356012/how-to-increase-nodejs-default-memory)