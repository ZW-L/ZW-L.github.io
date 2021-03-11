---
sidebarDepth: 2
---

## 熟悉

### 数据库更改选项

+ 每一个更改数据库的方法，都可以传递一个可选的 options 参数对象，其包含以下可选属性

选项|说明
-|-
w|指定数据库连接的写入关注级别
wtimeout|以毫秒为单位。指定等待写入关注完成的时间
fsync|布尔值。为 true 时，让写请求在返回前等待 fsync 完成
journal|布尔值。为 true 时，让写请求在返回前等待日志同步完成
serializeFunctions|布尔值。为 true 时，表示附加到对象的函数存储在文档中时应进行序列化
forceServerObjectId|布尔值。为 true 时，表示由客户端设置的任何 ID 值在插入过程中将被服务器覆盖
checkKeys|布尔值，默认为 true。指定插入时文档的键是否要在数据库中进行查找。设置 false 时可能受到注入攻击！
upsert|布尔值。为 true 时，表示如果没有与更新请求匹配的文档，则新建文档
multi|布尔值。为 true 时，若有多个文档与更新请求的查询匹配，则所有文档都会被更新。否则，只有第一个匹配文档被更新
new|布尔值。为 true 时，表示返回的是 findAndModify() 方法修改后的对象(而不是修改前的对象)



### 数据库更新运算符

+ 在进行更新操作时，MongoDB 提供了运算符用于定义如果去修改文档，其包含以下可选运算符

运算符|说明
-|-
$inc|按指定量递增字段的值
$rename|重命名字段
$setOnInsert|设置当在更新操作中新建文档时，其字段的值
$set|设置现有文档中一个字段的值
$unset|从现有文档删除指定的字段
$|占位符，以更新符合一个更新中的查询条件的第一个元素
$addToSet|往现有数组添加元素，仅当它们在该集合中不存在时才插入
$pop|删除数组的第一个或最后一个条目。值为 -1 时删除第一个，为 1 时删除最后一个
$pullAll|删除数组中的多个值，这些值作为数组传递到字段名
$pull|删除与查询语句匹配的数据项
$push|将条目添加到数组
$each|修改 $push 和 $addToSet 运算符来追加多个条目用于数组更新
$slice|修改 $push 运算符，以限制更新的数组的大小
$sort|修改 $push 运算符来对存储在数组中的文档重新排列
$bit|对整数执行按位 AND 和 OR 更新




## 增

### insertOne

+ `insertOne(doc, [options], callback)`：插入单个文档
+ doc 只能是一个对象，不同于 `insert()`
+ callback 的第二个参数是一个 `CommandResult` 对象，其 ops 属性是一个包含插入文档内容的数组
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.insertOne({ name: 'Alice', age: 20 }, function(err, docs) {
    test.equal(null, err)
    console.log('InsertOne: ')
    console.log(docs)
    client.close()
  })
})
```


### insert

+ `insert(docs, [options], callback)`：插入单个或多个文档
+ docs 可以是一个对象或一个对象数组
+ callback 的第二个参数是一个对象(包含本次插入的统计信息)，其 ops 属性是一个包含插入文档内容的数组
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.insert([{ name: 'Seven', age: 18 }, { name: 'Bob', age: 18 }], function(err, docs) {
    test.equal(null, err)
    console.log('Insert: ')
    console.log(docs)
    client.close()
  })
})
```


### insertAny

+ `insertAny(docs, [options], callback)`：
```js

```


### save

+ `save(doc, [options], [callback])`：插入或更新单个文档；虽然效率不如 insert() 和 update()，但是在某些情况下 save() 更容易实现
+ doc 只能是一个对象，不能是对象数组
+ callback 的第二个参数是一个 `CommandResult` 对象，它的 ops 属性也是一个包含插入文档内容的数组
```js
// 1. 直接使用时，效果相当于 insertOne()
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.save({ name: 'Zed', age: 24 }, function(err, results) {
      test.equal(null, err)
      console.log(results)
      client.close()
    })
})

// 2.先查找后保存，效果等同于 findAndModify() 和 update()，但实现更简单
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.findOne({ name: 'Alice' }, function(err, item) {
      test.equal(null, err)
      item.job = 'professor'
      users.save(item, function(err, saveItem) {
        test.equal(null, err)
        console.log(saveItem)
        client.close()
      })
    })
})
```




## 删

### findAndRemove

+ `findAndRemove(query, sort, [options], callback)`：删除单个文档
+ query 缺省(或者为{})时会删除第一个匹配的文档
+ callback 的第二个参数是删除的结果对象(一个数据文档)
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.findAndRemove({ name: 'Alice' }, [['age', -1]], function(err, doc) {
      test.equal(null, err)
      console.log(doc)
      client.close()
    })
})
```



### remove

+ `remove([query], [options], [callback])`：删除一个或多个文档
+ query 缺省(或者为{})时会删除该集合中的所有文档！
+ callback 的第二个参数是 `CommandResult` 对象
+ 不同于 update()，不用在 options 中指定 `multi: true` 也会删除所有匹配的文档
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.remove({ name: 'Seven' }, function(err, results) {
      test.equal(null, err)
      console.log(results)
      client.close()
    })
})
```


### findOneAndDelete

```js

```



## 改

### update

+ `update(query, update, [options], [callback])`：更新匹配的所有文档
+ query 缺省(或者为{})时匹配所有对象
+ update 设置了更新运算符
+ options 指定更改时的其他选项，其中 multi 属性为 true 时才会将更新应用于所有匹配的文档，否则只会更新第一个
+ callback 的第二个参数是一个 `CommandResult` 对象，它的 ops 属性也是一个包含插入文档内容的数组
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.update({}, { $set: { job: 'student' } }, { multi: true }, function(err, results) {
    test.equal(null, err)
    console.log(results)
    client.close()
  })
})
```


### findAndModify

+ `findAndModify(query, sort, update, [options], callback)`：在单个文档上执行**原子写操作**
+ sort 参数可用于指定排序的字段，并且可以指定多个。如 [['name', 1], ['age', -1]]，则将按名字升序、年龄降序排序。
+ 该方法只会修改并返回一个对象，修改的对象就是用 sort 排序后的第一个对象
+ callback 的第二个参数是被修改的数据对象
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.findAndModify({}, [['name', 1], ['age', -1]], 
    { $set: { job: 'teacher' } }, 
    { new: true },
    function(err, doc) {
      test.equal(null, err)
      console.log(doc)
      client.close()
    })
})
```


### updateOne
### updateMany
### findOneAndUpdate



## 查

### findOne

+ `findOne([query], [options], callback)`：查找文档，返回符合条件的第一个
+ query 缺省(或者为{})时，返回集合的第一个文档
+ callback 的第二个参数是一个数据对象(不是 Cursor 对象)
```js
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.findOne({ name: 'Alice' }, function(err, item) {
    test.equal(null, err)
    console.log('FindOne: ')
    console.log(item)
    client.close()
  })
})
```



### find

+ `find([query], [options], callback)`：查找一个或多个符合的文档
+ query 缺省(或者为{})时，匹配所有的文档
+ callback 的第二个参数为一个 Cursor 对象，可以进一步操作获得数据
```js
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.find({ age: 18 }, function(err, items) {
    test.equal(null, err)
    console.log('Find: ')
    items.toArray(function(err, itemArr) {
      test.equal(null, err)
      console.log(itemArr)
    })
    client.close()
  })
})
```


### findOneAndDelete
### findOneAndReplace
### findOneAndUpdate