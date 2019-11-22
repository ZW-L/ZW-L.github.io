## 安装

**说明：** 需要先安装 node，若安装不能使用，需要确认最低 node 版本。

```shell
$ npm install -g pm2
```


## 管理应用

```shell
# 查看应用列表
$ pm2 list

# 启动应用
$ pm2 start index.js

# 暂停应用
$ pm2 stop index.js

# 暂停所有
$ pm2 stop all

# 删除应用
$ pm2 delete index.js

# 删除所有
$ pm2 delete all
```