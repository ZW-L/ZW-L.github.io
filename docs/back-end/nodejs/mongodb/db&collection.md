---
sidebarDepth: 2
---

## 对象介绍

### Db

+ Db 对象提供对数据库的访问：连接、添加用户、访问集合等；当连接数据库成功时，一个 Db 对象就会被创建

|方 法|说 明|
|-|-|
open(callback)|连接到数据库
db(dbName)|创建 Db 对象的新实例
close( [forceClose], callback)|关闭数据库连接。参数1是布尔值，为 true 时迫使套接字关闭；回调第二个参数为 `results`
admin()|返回 Admin() 对象的实例
collectionInfo( [name], callback)|返回数据库集合信息的 Cursor 对象；指定 name 时则只有该名字的集合在游标中返回。回调第二个参数为 Cursor 对象
collectionName(callback)|返回该数据库的集合成名的列表；回调第二个参数为集合名称的数组
collection(name, [options], callback)|获取集合的有关信息，并创建一个 Collection 对象的实例；options 是定义了对集合访问的对象；回调第二个参数为 Collection 对象
collections(callback)|获取当前数据库中所有集合的信息，并为每个集合创建 collection 对象的实例；回调第二个参数为 Collection 对象
logout(callback)|将用户从数据库注销；回调第二个参数为 `results`
authenticate(username, password, callback)|验证连接数据库时的用户身份。访问数据库时可以使用此方法在用户之间切换，回调第二个参数为 `results`
addUser(username, password, callback)|添加新用户。当前验证的用户需要用户管理权限才能使用该方法，回调第二个参数为 `results`
removeUser(username, password, callback)|删除用户，回调第二个参数为 `results`
createCollection(collectionName, callback)|在数据库创建新的集合，回调第二个参数为 `results`
dropCollection(collectionName, callback)|在数据库删除集合，回调第二个参数为 `results`
renameCollection(oldName, newName, callback)|重命名数据库中的集合，回调第二个参数为 `results`
dropDatabase(dbName, callback)|从 MongoDB 中删除数据库，回调第二个参数为 `results`



### Admin

+ 使用 Admin 对象对数据库执行某些管理职能，其专门代表 admin 数据库的连接。可以得到 Admin 对象的方法：
```js
const adminDb = db.admin()
// 或者
const adminDb = new Admin(db)
```

|方 法|说 明|
|-|-|
serverStatus(callback)|检索服务器的状态。回调第二个参数为 status
ping(callback)|Ping 服务器。回调第二个参数为 results
listDatabases(callback)|获取数据库列表。回调第二个参数为 results
authenticate(username, password, callback)|用法同 Db 对象
logout(callback)|用法同 Db 对象
addUser(username, password, [options], callback)|用法同 Db 对象
removeUser(username, callback)|用法同 Db 对象



### Collection

+ Collection 对象对 MongoDB 数据库集合进行操作：访问集合、操作文档等。可以通过以下方法获取集合对象：
```js
const collection = db.collection('users')
// 或者
const collection = new Collection(db, 'users')
// 或者
db.createCollection('users', function(err, collection) { })
```

|方 法|说 明|回调第二个参数|
|-|-|-|
insert(docs, [callback])|插入一个/多个文档|results
remove( [query], [options], [callback])|从集合中删除文档|results
rename(newName, callback)|将集合重命名|results
save( [doc], [options], [callback])|将文档保存至集合|results
update(query, document, [options], [callback])|更新指定的文档|results
find(query, [options], callback)|找到多个匹配的文档|Cursor
findOne(query, [options], callback)|找到第一个匹配的文档|Document
findAndModify(query, sort, update, [options], callback)|将匹配的文档进行修改|results
findAndRemove(query, sort, update, [options], callback)|删除匹配的文档|results
distinct(key, [query], callback)|为 key 创建不同的值的列表|values
count([query], callback)|计算集合中文档的数量|count
drop(callback)|删除当前集合|results
state(callback)|获取集合的统计信息|stats



### Cursor

+ Cursor 对象是一个可迭代的可在数据库中访问一组对象的指针

|方 法|说 明|回调第二个参数|
|-|-|-|
each(callback)|遍历 Cursor|item
toArray(callback)|遍历 Cursor 并返回数组|items
nextObject(callback)|返回 Cursor 的下一个对象，并递增索引|item
rewind()|把 Cursor 对象重置到初始状态|
count(callback)|确定由游标所表示的条目数量|count
sort(keyOrList, direction, callback)|对 Cursor 对象表示的条目进行排序|Cursor
close(callback)|关闭 Cursor 对象，释放内存|
isClosed()|布尔值。检测 Cursor 对象是否已关闭|





## 操作数据库

:::: tabs
::: tab 列表

+ 使用 Admin 对象的 `listDatabases()` 方法，能够打印数据库列表
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const adminDB = client.db('testDB').admin()

  adminDB.listDatabases(function(err, dbs) {
    test.equal(null, err)
    console.log(dbs.databases)
    client.close()
  })
})
```
:::

::: tab 创建

+ 先创建一个 Db 对象的实例，再在实例上使用 `createCollection()` 来创建数据库
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const newDB = client.db('newDB')

  newDB.createCollection('newCollection', function(err, collection) {
    test.equal(null, err)
    newDB.admin().listDatabases(function(err, dbs) {
      test.equal(null, err)
      console.log(dbs.databases)
      client.close()
    })
  })
})
```
:::


::: tab 删除

+ 使用指向该数据库的 Db 对象上的 `dropDatabase()` 方法删除数据库
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const newDB = client.db('newDB')

  newDB.dropDatabase(function(err, results) {
    test.equal(null, err)
    console.log(results)  // true
    client.close()
  })
})
```
:::


::: tab 状态

+ 使用 Admin() 对象的 `serverStatus()` 方法能获取有关 MongoDB 服务器的状态信息：主机名、版本、运行时间、打开的游标等
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const testDBAdmin = client.db('testDB').admin()

  testDBAdmin.serverStatus(function(err, status) {
    test.equal(null, err)
    console.log(status)
    client.close()
  })
})
```
:::
::::



## 操作集合

:::: tabs
::: tab 列表

+ 创建一个 Db 对象的实例后，调用它的 `collections()` 方法，可以获取当前数据库的集合列表
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const testDB = client.db('testDB')

  testDB.collections(function(err, collections) {
    test.equal(null, err)
    console.log(collections)
    client.close()
  })
})
```
:::


::: tab 创建

+ 创建一个 Db 对象的实例后，调用它的 `createCollection()` 方法
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const newDB = client.db('newDB')

  newDB.createCollection('newCollection', function(err, collection) {
    test.equal(null, err)
    newDB.admin().listDatabases(function(err, dbs) {
      test.equal(null, err)
      console.log(dbs.databases)
      client.close()
    })
  })
})
```
:::


::: tab 删除

+ 方法1：在 Db 对象上调用 `dropCollections()` 方法
```js{7,9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const newDB = client.db('newDB')

  newDB.dropCollection('newCollection', function(err, results) {
    test.equal(null, err)
    console.log(results)  // true
    client.close()
  })
})
```

+ 方法2：调用 Collection 对象上的 `drop()` 方法
```js{7,11}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const newDB = client.db('newDB')

  newDB.collection('newCollection', function(err, coll) {
    test.equal(null, err)
    coll.drop()
    console.log('Drop success.')
    client.close()
  })
})
```
:::


::: tab 信息

+ 使用 Collection 对象的 `stats()` 方法
```js{7,11}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const newDB = client.db('newDB')

  newDB.createCollection('newCollection', function(err, coll) {
    test.equal(null, err)
    coll.stats(function(err, stats) {
      test.equal(null, err)
      console.log(stats)
      client.close()
    })
  })
})
```
:::
::::