## 安装

1. 官网下载并解压缩 MongoDB 文件夹到指定目录，如 `/usr/local/mongodb`
2. 创建目录 `/usr/local/mongodb/data`，用于保存数据库文件
3. 创建目录 `/usr/local/mongodb/log/mongodb.log`，用于保存数据库日志
4. 配置用户写入权限
```sh
sudo chown -R seven /usr/local/mongodb
```




## 启动

+ 方式1：通过指定存取数据库文件的路径
```sh
sudo mongod --dbpath /usr/local/mongodb/data
```

+ 方式2：通过指定配置文件启动（建议），可自定义配置更多选项
```sh
# 配置 /etc/mongodb.conf
dbpath = /Users/mongodb/data
logpath = /Users/mongodb/log/mongodb.log
logappend = true
port = 27017

# 启动
sudo mongod --config=/etc/mongodb.conf # 或 mongod -f /etc/mongodb.conf
```



## 停止

```sh
use admin
db.shutdownServer()
```