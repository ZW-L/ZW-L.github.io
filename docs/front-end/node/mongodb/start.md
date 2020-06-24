## 使用

+ 必须现在本地或服务器安装 MongoDB
+ 项目安装 MongoDB 驱动依赖
```shell
npm install mongodb
```
+ 引入
```js
const mongodb = require('mongodb')
```
+ 示例
```js
const MongoClient = require('mongodb').MongoClient

const dbUrl = 'mongodb://localhost:27017/testDB'
MongoClient.connect(dbUrl, function(err, db) {
  if (err) {
    console.log('Can\'t to connect MongoDB!')
  } else {
    console.log('Connect success.')
    db.logout(function(err, result) {
      if (!err) {
        console.log('Logout!')
      }
      db.close()
      console.log('Close!')
    })
  }
})
```



## 连接

+ 在连接到 MongoDB 之前，要熟悉[写入关注](#写入关注) 和[Server](#server)对象
+ `MongoClient` 构造函数第一个参数为[Server](#server)对象，第二个参数为[数据库连接选项](#数据库连接选项)
```js
MongoClient(Server, options)
```

+ 使用静态方法 `connect()`
```js
MongoClient.connect(connString, options, callback)
```

::: tip 
+ connString 基本语法：`mongodb://username:password@host:port/database?options`
  + `mongodb://`：表示 MongoDB 连接
  + `username`：可选。验证时使用的用户名
  + `password`：可选。验证时使用的密码
  + `host`：主机名或地址。可以用逗号分隔指定连接多个 MongoDB 服务器：`mongodb://host1:27017,host2:27017,host3:27017/testDB`
  + `port`：默认 27017。端口号
  + `database`：默认 admin。数据库名称
  + `options`：指定连接时使用的选项对象。还可以在 dpOpt 和 serverOpt 参数上指定这些选项
+ options：
  + `db`：是[数据库连接选项](#数据库连接选项)描述的**选项对象**
  + `server`：是[Server](#server)描述的**选项对象**
  + `rplSet`：包含用于处理连接到复制集的**选项对象**
  + `mongos`：是包含用于连接到 mongos 代理的**选项对象**
+ callback：第一个参数为 err；第二个参数为 **Db对象实例**(出错时为 null)
:::




## 写入关注

+ 在连接和更新 MongoDB 的数据之前，可以指定要在连接上实现什么级别的写入关注
+ 写入关注是指：**在报告写操作成功的时候，MongoDB 连接提供的保证**；写入关注的强度决定保证的级别
+ 写入关注级别：

级别|说明
---|---
-1|网络错误被忽略
0|写确认是不必要的
1|请求写确认
2|写确认请求跨主服务器和副本集中的一个辅助服务器
majority|写确认是从副本集的主服务器请求的



## 数据库连接选项

选项|说明
---|---
`w`|指定数据库连接的写入关注级别
`wtimeout`|以毫秒为单位，指定等待写入关注结束的时间
`fsync`|布尔值。为 true 时，让写请求在返回前等待 fsync 完成
`journal`|布尔值。为 true 时，让写请求在返回前等待日志同步完成
`retryMilliSeconds`|默认值 5000。指定重连时等待的毫秒数
`numberOfRetries`|默认值 5。指定失败前重连的次数
`bufferMaxEntries`|默认值 -1。指定连接失败前将被缓冲等待连接操作的最大数量



## Server

+ `MongoClient` 连接利用了后台的 Server 对象，该对象定义了 MongoDB 应怎样连接到服务器；它包含了创建连接时所用的主机、端口、池大小、套接字的超时值等信息
+ 尽管不需要直接与 Server 对象进行交互，但是需要指定创建它时的选项
+ Server 对象选项：

选项|说明
---|---
readPreference|指定从副本集读取对象时使用的读取首选项（有助于优化读取操作）：<br>1. ReadPreference.PRIMARY<br>2. ReadPreference.PRIMARY_PREFERRED<br>3. ReadPreference.SECONDARY<br>4. ReadPreference.SECONDARY_PREFERRED<br>5. ReadPreference.NEAREST
ssl|布尔值。为 true 时，表示该连接使用 SSL。
poolSize|默认为 5。指定在服务器连接池用的连接数量。
socketOptions|一个对象。定义套接字创建选项，可以为：<br>1. noDelay：布尔值，指定无延迟套接字<br>2. keepAlive：指定套接字保持活动的时间<br>3. connectTimeoutMS：以毫秒为单位，指定连接超时之前等待的时间量<br>4. socketTimeoutMS：以毫秒为单位，指定套接字超时之前等待的时间量
auto_reconnect|布尔值。为 true 时，表示客户端在遇到错误是尝试重新连接。