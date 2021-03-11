---
sidebarDepth: 2
---

## 对象

### query

+ query 对象用于检索文档，它的值称为**运算符**。使用 query 对象时，可以指定子文档字段，运算符也可以使用多个

运算符|说明
-|-
field:value|匹配指定键值的文档
$gt|匹配大于指定的值的值
$gte|匹配大于或等于指定的值的值
$in|匹配在指定数组中存在的值
$lt|匹配小于指定的值的值
$lte|匹配小于或等于指定的值的值
$ne|匹配不等于指定的值的值
$nin|匹配不在指定数组中存在的值
$or|将查询子句用逻辑 OR 连接起来，返回匹配任何子句的文档
$and|将查询子句用逻辑 AND 连接起来，返回匹配所有子句的文档
$not|反转查询表达式，返回与表达式不匹配的文档
$nor|将查询子句用逻辑 NOR 连接起来，返回不匹配任一子句的文档
$exists|匹配具有(或没有)指定字段的文档(不管为何值)
$type|选择一个字段是指定的 BSON 类型号的文档
$mod|对某字段的值进行取模，匹配指定结果的文档。取模参数为数组，数组元素分别为除数和余数
$regex|选择值与正则表达式匹配的文档
$all|匹配包含在查询中指定的所有元素的**数组**
$elemMatch|匹配数组字段的元素匹配所有 $elemMatch 所指定条件的文档
$size|选择数组字段是指定大小的文档



### options

+ options 对象允许在检索文档时定义请求的行为；允许限制结果集、排序等操作；可选选项：

选项|说明
-|-
limit|指定返回文档的最大数量
sort|指定文档的排序。如：[['name', 1], ['age', -1]]
fields|指定一个对象，其各个值指定返回文档必须包含的字段。1 为包含，0 为排除
skip|指定返回文档前在查询结果中跳过的文档数量。通常用作结果集分页
explain|返回在服务器上执行查询时会发生什么解释，而不是实际运行查询
snapshot|布尔值。为 true 时创建一个快照查询
timeout|布尔值。为 true 时允许游标超时
maxScan|指定执行查询返回前扫描的文档的最大数量
comment|指定将在 MongoDB 日志中输出的字符串
readPreference|指定是从主服务器、辅助服务器还是只在复制服务器集中最近的 MongoDB 服务器读取来执行查询
numberOfRetries|默认值5。指定查询执行失败之前超时重试的次数
partial|布尔值




## 操作技巧

### 查找特定文档

```js

```

### 文档计数

+ `count([query], [options], callback)`： Collection 对象的 count() 方法
+ query 和 options 参数等同于 find() 方法的参数
+ callback 的第二个参数为整数 count，指定了结果数

```js
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.count({}, function(err, count) {
      test.equal(null, err)
      console.log(count)
      client.close()
    })
})
```


### 限制结果

1. 使用 options 的 `limit` 选项指定返回的条目数：
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.find({}, { limit: 5 }, function(err, items) {
      test.equal(null, err)
      items.toArray(function(err, itemArr) {
        test.equal(null, err)
        console.log(itemArr)
        client.close()
      })
    })
})
```

2. 使用 options 的 `fields` 选项限制返回的字段：
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.find({}, { fields: { name: 1 } }, function(err, items) {
      test.equal(null, err)
      items.toArray(function(err, itemArr) {
        test.equal(null, err)
        console.log(itemArr)
        client.close()
      })
    })
})
```
::: tip 备注
+ fields 是从查询结果的文档选取所需的属性，并不是再次筛选结果
+ 如：`fields: { name: 1 }` 则表明返回的所有文档都只带 name 一个字段
+ 如：`fields: { name: 0, age: 0 }` 则表明返回的所有文档都不包含 name 和 age 两个字段
+ 因此，fields 中不能同时存在 0 和 1
:::

3. 使用 options 对象的 `limit` 和 `skip` 选项对结果进行分页：
```js{9,18}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.find({}, { sort: [['age', 1]], skip: 0, limit: 5 }, function(err, items) {
    test.equal(null, err)
    items.toArray(function(err, itemArr) {
      test.equal(null, err)
      console.log(itemArr)
      client.close()
    })
  })

  users.find({}, { sort: [['age', 1]], skip: 5, limit: 5 }, function(err, items) {
    test.equal(null, err)
    items.toArray(function(err, itemArr) {
      test.equal(null, err)
      console.log(itemArr)
      client.close()
    })
  })
})
```


### 排序

1. 使用 options 对象的 `sort` 选项对结果进行排序
```js
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.find({}, { sort: [['age', 1], ['name', -1]] }, function(err, items) {
    test.equal(null, err)
    items.toArray(function(err, itemArr) {
      test.equal(null, err)
      console.log(itemArr)
      client.close()
    })
  })
})
```


### 查找不同字段值

+ `distinct(key, [query], [options], callback)`：Collection 对象的 distinct() 方法找到一组文档中单个字段的清单
```js{9}
const MongoClient = require('mongodb').MongoClient
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017'
MongoClient.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  const users = client.db('newDB').collection('users')

  users.distinct('age', function(err, items) {
    test.equal(null, err)
    console.log(items)
    client.close()
  })
})
```

::: tip 备注
+ 举例：从一组文档中返回一个数组，该数组包含不同的 age 值
+ key 是一个字符串(字段)，就是上述的 age 等
+ callback 的第二个参数是一个数组
:::



### 对结果进行分组

+ 使用 Collection 对象的 `group()` 方法：
```js
group(keys, query, initial, reduce, finalize, command, [options], callback)
```

+ keys：Object|Array|Function，表达分组依据的键
+ query：Object，匹配文档
+ initial：Object，汇总计数器对象的初始值
+ reduce：Function|Code，函数在每个匹配的文档上执行，带参数 `obj`(当前文档) 和 `prev`(initial参数创建的对象)
+ finalize：Function|Code，在结果响应前对每个不同的键生成的对象调用此函数，带参数 `obj`(从initial参数得到的最终obj)
+ command：Boolean，默认为 true。表示使用内部的 group 命令，而不是 eval()
+ options：Object，允许定义 readPreference 选项
+ callback：Function，第二个参数为分组结果(一个对象数组)




## 聚合

+ 聚合是指把 MongoDB 服务器上的文档汇编一个结果集时，对它们进行一些列的操作；这比在 Node.js 应用程序上检索和处理要快


### aggregate()

+ Collection 对象提供了 `aggregate()` 方法：
```js
aggregate(operators, [options], callback)
```
+ operators：Array，可包含上述的的**聚合运算符**
+ options：Object，允许定义 readPreference 选项
+ callback： Function，第二个参数为聚合结果(一个对象数组)



### 聚合运算符

**可在 aggregate() 上使用的聚合运算符**：
<center>运算符</center>|<center>说明</center>
---|---
$project|通过重命名、添加或删除字段来重塑文档。还可以重新计算值、添加子文档、排除文档等。
$match|可以使用 query 对象运算符来排除文档。
$limit|限制传递到下一个聚合管道的文档数量。
$skip|指定传递到下一个聚合管道前跳过的的文档数量。
$unwind|指定一个数组字段用于分割，对每个值创建一个单独的文档。
$group|将文档分组成一组新的文档后再传递到下一个聚合管道。可以使用下列 **聚合 $group 表达式运算符**。
$sort|将文档排序后再传递到下一个聚合管道。

**特点**：
+ 可以把一个聚合运算符的结果传输到另一个聚合运算符
+ 可用 `$` 前缀引用文档中字段的值，如 `$name` 引用文档中的 name 字段
+ 所有聚合运算符都可以使用用于处理字符串和算术运算的**聚合表达式可用运算符**，而 $group 表达式还可以使用额外的**聚合 $group 表达式可用运算符**。

**聚合 $group 表达式可用运算符**：
<center>运算符</center>|<center>说明</center>
---|---
$addToSet|返回一组文档中所有文档所选字段的全部唯一值的数组。
$first|返回一组文档中一个字段的第一个值。
$last|返回一组文档中一个字段的最后一个值。
$max|返回一组文档中一个字段的最大值。
$min|返回一组文档中一个字段的最小值。
$avg|返回一组文档中一个字段的平均值。
$push|返回一组文档中所有文档所选字段的全部值的数组。
$sum|返回一组文档中一个字段的全部值的和。

**聚合表达式可用运算符**：
<center>运算符</center>|<center>说明</center>
---|---
$add|计算数值数组的和。
$divide|给定两个值的数组，作除法。
$mod|给定两个值的数组，作取模。
$multiply|给定两个值的数组，作乘法。
$subtract|给定两个值的数组，作减法。
$concat|连接字符串。
$strcasecmp|返回一个整数。反映两个字符串比较的结果。
$substr|返回字符串的一部分。
$toLower|将字符串转换为小写。
$toUpper|将字符串转换为大写。