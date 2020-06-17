## 安装

**步骤：**

1. 官网下载并解压缩 MongoDB 文件夹到指定目录，如 `/usr/local/mongodb`
2. 创建目录 `/usr/local/mongodb/data`，用于保存数据库文件
3. 创建目录 `/usr/local/mongodb/log/mongodb.log`，用于保存数据库日志
4. 配置用户写入权限

```sh
sudo chown -R seven /usr/local/mongodb
```

3. 两种方式启动 MongoDB：

## 启动和停止

**启动：** 两种方式启动 MongoDB
+ 通过指定存取数据库文件的路径
```sh
mongod --dbpath /usr/local/mongodb/data
```

+ 通过指定配置文件启动（建议），可自定义配置更多选项
```sh
# 配置 /etc/mongodb.conf
dbpath = /Users/mongodb/data
logpath = /Users/mongodb/log/mongodb.log
logappend = true
port = 27017

# 启动
mongod --config=/etc/mongodb.conf # 或 mongod -f /etc/mongodb.conf
```


**停止：**

```powershell
use admin
db.shutdownServer()
```




## 管理数据库

**显示数据库清单：**

```powershell
show dbs
```

**切换当前数据库：**

&emsp;&emsp;`MongoDB` 使用内置的句柄 `db` 进行数据库的操作，需要使用其他数据库时，需要将当前的 `db` 句柄指向目标数据库。以下操作均会将 `db` 句柄指向 `testDB` 数据库：
```powershell
# 使用 use 命令，切换到需要使用的数据库
use testDB

# 或使用 db.getSiblingDB() 方法
db = db.getSiblingDB('testDB)
```

**创建数据库：**

&emsp;&emsp;`MongoDB` 没有显式创建数据库的命令，但可以通过直接使用一个不存在的数据库，然后再其上添加一个集合来创建数据库。但是，如果只使用了不存在的数据库而不进行添加集合的操作，数据库并不会保存。

```powershell
use newDB
db.createCollection('newCollection')
```

**删除数据库：**

&emsp;&emsp;要删除一个数据库，首先切换到该数据库中，再使用 `db.dropDatabase()` 方法进行删除。但是，数据库删除后，`db` 句柄依然为当前数据库(即使他已经被删除)，此时若新建一个集合，该数据库便会 **复活**。

```powershell
use newDB
db.dropDatabase()
```

**复制数据库：**

&emsp;&emsp;使用 `db.copyDatabase(origin, destination, [hostname])` 方法。其中：
+ `origin`：要复制的数据库名称
+ `destination`：在此 `MongoDB` 服务器上要创建的数据库名称
+ `hostname`：可选，指定 `origin` 数据库所在的 `MongoDB` 服务器的主机名(当要在不同的主机复制数据库时)

```powershell
db.copyDatabase(origin, destination, [hostname])
```



## 管理集合

&emsp;&emsp;对集合的操作都需要在数据库中进行，因此都需要切换句柄到相应数据库：`use testDB`。

**显示集合：**
```powershell
use testDB
show collections
```

**创建集合：**

&emsp;&emsp;使用方法 `db.createCollection(name, [options])`。`options` 是一个对象，有以下可选属性：

|属性|说明|
|---|---|
|`capped`|布尔值，默认 `false`。指定了集合是否是一个封顶集合(封顶集合不会增长到比 `size` 属性指定的最大规模更大)|
|`autoIndexID`|布尔值，默认 `true`。表明是否自动为集合中的每个文档创建一个 `_id` 字段并实现该字段上的索引|
|`size`|以字节为单位，用于封顶集合。最旧的文件被删除，腾出空间给新的文件|
|`max`|在封顶集合中允许的最大文档数。最旧的文件被删除，腾出空间给新的文件|

```powershell
use testDB
db.createCollection('newCollection')
```

**删除集合：**

&emsp;&emsp;删除集合时，先使用方法 `db.getCollection('newCollection')` 获取集合对象，然后在对象上调用方法 `coll.drop()` 进行删除。

```powershell
use testDB
coll = db.getCollection('newCollection')
coll.drop()
```

&emsp;&emsp;也可以直接使用：

```powershell
use testDB
db.coll.drop()
```

## 管理文档

&emsp;&emsp;管理文档时，需要切换到相关的数据库(`use testDB`)，通过以下其中一种方式获取集合的引用：

+ 使用方法 `db.getCollection('newCollection')` 
+ 直接使用 `db.newCollection` 

**添加文档：**

`insert(document)` 方法或 `save(document)` 方法

```powershell
use testDB
coll = db.getCollection('newCollection')
coll.insert({name: 'Anna', age: '20'})  # 等同于 db.newCollection.insert({name: 'Anna', age: '20'})
coll.insert({name: 'Alice', age: '22'}) # 等同于 db.newCollection.insert({name: 'Alice', age: '22'})
coll.save({name: 'Zed', age: '18'})  # 等同于 db.newCollection.save({name: 'Zed', age: '18'})
```

**删除文档：**

`remove([query])` 方法：
+ `remove()`：删除所有文档
+ `remove({name: 'Anna'})`：删除匹配字段 name 及其值的文档

```powershell
use testDB
db.newCollection.remove({name: 'Anna'})
db.newCollection.remove()
```

**查找文档：**

`find([query])` 方法：

+ `find()`：返回集合中所有文档
+ `coll.find({name: 'Anna'})`：返回匹配字段 name 及其值的文档

```powershell
use testDB
db.newCollection.find({name: 'Anna'})
db.newCollection.find()
```

**更新文档：**

`save(object)` 或 `update(query, update, options)`

+ `save(object)`：文档中 `_id` 字段是唯一的，通过使用相同的 `_id` 字段去覆盖文档(并不是添加)
+ `update(query, update, options)`：
  + `query`：指定字段和值与集合中匹配的文档，相当于用 `find(query)` 查找到匹配的文档
  + `update`：一个对象，指定再更新时使用的更新运算符
    + `$inc`：递增字段值
    + `$set`：设置字段值
    + `$push`：将一个条目推送到数组
  + `options`：一个对象
    + `upsert`：布尔值，为 `true` 则当没有找到就创建一个新的文档
    + `multi`： 布尔值，为 `true` 则与查询匹配的所有文档都被更新，否则只有第一个文档被更新

```powershell
# 以下命令将所有年龄为20的文档的 job 字段的值设置为 'student'
use testDB
# 以下命令将覆盖对应 _id 字段的文档
db.newCollection.update({age: '20'}, {$set: {job: 'student'}, {upsert: false, multi: true}})
db.newCollection.update({'_id': '5d594b30f464fc645f888fcf', age: '21'})
```