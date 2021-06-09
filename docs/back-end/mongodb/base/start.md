---
sidebarDepth: 2
---

## 介绍

+ MongoDB 是热门的 NoSQL(非关系式数据库)，基于文档的数据库
+ 支持事务()
+ 可以嵌入文档(反规范化数据)或引用文档(规范化数据)
+ 对比 MySQL：

MongoDB|MySQL
-|-
数据库(database)|数据库(database)
集合(Collection)|表(Table)
文档(Document)|行(Row)
字段(Filed)|列(Column)


## 安装

1. [官网下载](https://www.mongodb.com/try/download/community)并解压缩 MongoDB 文件夹到指定目录，如 `/usr/local/mongodb`
2. 创建目录 `/usr/local/mongodb/data`，用于保存数据库文件
3. 创建目录 `/usr/local/mongodb/log/mongodb.log`，用于保存数据库日志
4. 配置用户写入权限
```sh
$ sudo chown -R user_name /usr/local/mongodb
```

::: tip 备注：
+ 实际上，使用 MongoDB 不需要安装，只需要下载下来解压并配置即可
+ 可以随意指定 MongoDB 的目录，只要你记得 `mongod` 命令的位置或添加到环境变量(PATH)中
+ 通常来说，MongoDB 的目录如下：
```
|-mongodb\
  |- bin\     一些命令，如 mongod、mongo
  |- data\    数据库文件
  |- etc\     配置文件，如 mongodb.conf
  |- log\     日志文件
  |- README
  |- ...
```
:::




## 启动和停止


### mongod 和 mongo

+ `mongod`：启动 MongoDB 服务（类似启动一个 nodejs 服务），此后才能访问数据库
+ `mongo`：进入 MongoDB REPL（类似 Nodejs REPL），可以在里面使用 MongoDB 命令

::: warning 注意
+ 需要先使用 `mongod` 命令启动 MongoDB 服务，才能使用 `mongo` 命令进入 MongoDB REPL
+ 未添加至环境变量(PATH)的命令需要使用 `./mongod` 的方式使用
:::


### 启动

+ `mongod` 命令提供了许多启动选项，可以使用 `mongod --help` 查看

+ 方式1：指定存取数据库文件的路径
```sh
$ sudo mongod --dbpath /usr/local/mongodb/data
```

+ 方式2：指定配置文件启动（推荐），可自定义配置更多选项
```sh
# 1.先创建配置文件 /etc/mongodb.conf
dbpath = /Users/mongodb/data
logpath = /Users/mongodb/log/mongodb.log
logappend = true
port = 27017

# 2.启动
$ sudo mongod --config=/etc/mongodb.conf
# 或
$ sudo mongod -f /etc/mongodb.conf
```

::: warning 注意
+ `mongod` 至少需要传入 `--dbpath` 参数，否则无法启动
:::


### 停止

+ 方法1: `CTRL + C` 强制关闭 `mongod` 服务（不知道有没有什么影响）
+ 方法2: `mongo` REPL 中使用命令：
```sh
$ use admin     # 需要先切换至 admin database，才能使用下面的命令
$ db.shutdownServer()
```
