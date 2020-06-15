## 安装

+ 需要先安装 node，若安装不能使用，需要确认node 版本
```sh
npm install -g pm2
```
+ 如果不能全局使用 pm2 命令，需要手动添加软连接链向
```sh
ln -s /you/pm2/path/bin/pm2 /usr/local/bin/pm2
```




## 管理应用


+ 查看
```sh
# 查看应用列表
pm2 list      # 或 pm2 l

# 查看指定应用状态
pm2 show 10
```

+ 启动新应用
```sh
# 启动一个新应用，需要定位到文件目录或使用路径
pm2 start index.js
# 启动一个新应用，并自定义应用名称
pm2 start index.js -n "api-service"
```

+ 对于已添加的应用，以下操作的方式都是类似的
  + start：启动一个已暂停的应用
  + restart：重启一个应用
  + stop：暂停一个应用
  + delete：删除一个应用
```sh
# 根据名称
pm2 start index
# 根据 ID
pm2 start 10
# 启动多个
pm2 start 1 2
# 启动全部
pm2 start all
```


## 问题解决

+ 启动后立即暂停
  1. 可能为代码出错：用 `node app.js` 启动，查看是否能启动成功
  2. 版本原因：重新安装 node 或 pm2