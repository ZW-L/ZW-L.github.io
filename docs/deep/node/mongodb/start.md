## 安装
&emsp;&emsp;在项目中安装 MongoDB 驱动非常简单，只需要使用：
```shell
npm install mongodb
```
&emsp;&emsp;接着在相关模块中引入：
```js
const mongodb = require('mongodb')
```

## 连接
&emsp;&emsp;Node.js 连接 MongoDB 的最佳方法是使用 `mongodb` 模块中的 `MongoClient` 类，接着可以使用以下方法：
+ 创建 `MongoClient` 类的一个实例，然后使用该实例来创建和管理 MongoDB。
+ 使用连接字符串进行连接

&emsp;&emsp;在连接到 MongoDB 之前，要熟悉 `写入关注` 和 `Server对象`。

### 写入关注
&emsp;&emsp;在连接和更新 MongoDB 的数据之前，可以指定要在连接上实现什么级别的写入关注。 **写入关注是指：在报告写操作成功的时候，MongoDB 连接提供的保证。** 写入关注的强度决定保证的级别。

&emsp;&emsp;**写入关注级别**：
级别|说明
---|---
-1|网络错误被忽略
0|写确认是不必要的
1|请求写确认
2|写确认请求跨主服务器和副本集中的一个辅助服务器
majority|写确认是从副本集的主服务器请求的

### Server 对象
&emsp;&emsp;`MongoClient` 连接利用了后台的 Server 对象，该对象定义了 MongoDB 应怎样连接到服务器。它包含了创建连接时所用的主机、端口、池大小、套接字的超时值的信息等。
&emsp;&emsp;尽管不需要直接与 Server 对象进行交互，但是需要指定创建它时的选项。**Server 对象创建选项**为：
选项|说明
---|---
readPreference|指定从副本集读取对象时使用的读取首选项（有助于优化读取操作）：<br>1. ReadPreference.PRIMARY<br>2. ReadPreference.PRIMARY_PREFERRED<br>3. ReadPreference.SECONDARY<br>4. ReadPreference.SECONDARY_PREFERRED<br>5. ReadPreference.NEAREST
ssl|布尔值。为 true 时，表示该连接使用 SSL。
poolSize|默认为 5。指定在服务器连接池用的连接数量。
socketOptions|一个对象。定义套接字创建选项，可以为：<br>1. noDelay：布尔值，指定无延迟套接字<br>2. keepAlive：指定套接字保持活动的时间<br>3. connectTimeoutMS：以毫秒为单位，指定连接超时之前等待的时间量<br>4. socketTimeoutMS：以毫秒为单位，指定套接字超时之前等待的时间量
auto_reconnect|布尔值。为 true 时，表示客户端在遇到错误是尝试重新连接。


### 通过 MongoClient 实例连接到 MongoDB (待编辑，可能不能使用)
&emsp;&emsp;`MongoClient` 类的构造函数第一个参数为 `Server 对象`，第二个参数为 `规定了数据库连接选项的对象`：
```js
MongoClient(Server, options)
```
&emsp;&emsp;重要的适用于该方法连接的**数据库连接选项**：
选项|说明
---|---
w|指定数据库连接的写入关注级别。
wtimeout|以毫秒为单位，指定等待写入关注结束的时间。
fsync|布尔值。为 true 时，让写请求在返回前等待 fsync 完成。
journal|布尔值。为 true 时，让写请求在返回前等待日志同步完成。
retryMilliSeconds|默认值 5000。指定重连时等待的毫秒数。
numberOfRetries|默认值 5。指定失败前重连的次数。
bufferMaxEntries|默认值 -1。指定连接失败前将被缓冲等待连接操作的最大数量。


### 通过连接字符串连接到 MongoDB
&emsp;&emsp;此方法的实现比较简单，只需要使用一个 `connect()` 方法，不需要创建实例，语法为：
```js
MongoClient.connect(connString, options, callback)
```
参数如下：
+ connString：基本语法为：`mongodb://username:password@host:port/database?options`，选项描述如下表
+ options：包含了 db、server、rplSet、mongos属性的**对象**。
  + db 属性可以是上述 **数据库连接选项** 描述的一个**对象**
  + server 属性可以是上述 **Server 对象创建选项** 描述的一个**对象**
  + rplSet 属性包含用于处理连接到复制集的选项的**对象**
  + mongos 是包含用于连接到 mongos 代理的选项的**对象**
+ callback：第一个参数为 err；第二个参数为 **Db对象实例** ，出错时其为 null。

**connString 的选项描述**：
<center>选 项</center>|<center>说 明</center>
---|---
mongodb://|指定该字符串使用 MongoDB 的连接方式
username|可选。指定验证时使用的用户名
password|可选。指定验证时使用的密码
host|指定 MongoDB 服务器的主机名或地址。可以用逗号分隔指定连接多个 MongoDB 服务器：<br>mongodb://host1:27017,host2:27017,host3:27017/testDB
port|默认 27017。指定连接到 MongoDB 服务器时使用的端口
database|默认 admin。指定要连接的数据库名字
options|指定连接时使用的选项对象。还可以在 dpOpt 和 serverOpt 参数上指定这些选项

一个简单的例子：
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