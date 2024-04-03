---
slug: /nodejs/how-to-increase-nodejs-default-memory
# id: how-to-increase-nodejs-default-memory
title: NodeJs のメモリーサイズを増加する方法
tags: [de.log, nodejs, memory, node]
# sidebar_position: 1
---

<!--title -->
# NodeJs のメモリーサイズを増加する方法
<!--//title -->


## 一時的に NodeJs のデフォルト Heap メモリー増加 Command
```shell
# 4GB (1024 * 4)
$ export NODE_OPTIONS=--max_old_space_size=4096

# 8GB (1024 * 8)
$ export NODE_OPTIONS=--max_old_space_size=8192

```


## スクリプトの実行時に Heap メモリーを指定する方法
```shell
# ${NODE_SCRIPT_FILE} is the file name that you want to execute using node.
$ node --max_old_space_size=4096 ${NODE_SCRIPT_FILE}.js
```

## package.json で設定する場合
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