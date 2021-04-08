---
sidebarDepth: 2
---

## 开始

:::: tabs
::: tab 简介

mongoose 是一个更友好的 MongoDB 驱动，并增强了 mongodb 原生驱动：
+ 在某些方面，操作比 mongodb 更容易，如扩展了 Document 对象
+ 引入模式和模型的概念，使数据操作更安全
+ 支持验证和类型转换
+ 支持中间件函数


新对象：
+ **Schema**：定义结构化的模式集合的文档，允许设置字段及其类型、唯一性、索引和验证
+ **Model**：表示某一集合中所有的文档（类似 Collection 对象）
+ **Document**：表示某一集合中的某个文档
+ **Query**：实现查询功能，并可以链式调用（类似 Cursor 和 query 的结合）
+ **Aggregate**：实现聚合功能（类似 aggregate 对象）
:::

::: tab 对比

mongodb|mongoose
-|-
Db|
Admin|
-|Schema
Collection|Model
-|Document
Cursor|Query
query|
:::



::: tab 连接

+ `mongoose.connect(dbUrl, options, [callback])`：连接数据库
  + dbUrl：String
  + options：
    + username：String
    + password：String
    + autoIndex：Boolean，默认 true
    + bufferCommands：Boolean，默认 true
  + callback：Function
+ `mongoose.disconnect()`：关闭连接

```js
const mongoose = require('mongoose')
const test = require('assert')

const dbUrl = 'mongodb://localhost:27017/newDB'
mongoose.connect(dbUrl, function(err, client) {
  test.equal(null, err)
  console.log('Connect MongoDB by mongoose.')
  console.log(client)
  mongoose.disconnect()
})
```
:::
::::




## Schema

:::: tabs
::: tab 模式
+ 使用 mongoose 时，通常要实现模式，模式为集合中的文档定义字段和字段类型；其中，字段的值支持下列类型：

|字段|描述|
|-|-|
|String|字符串|
|Number|数值|
|Boolean(Bool)|布尔值|
|Array|数组|
|Buffer|缓冲区|
|Date|日期|
|ObjectId(Oid)||
|Mixed|混合|
|Decimal128||

建议
1. 为每个不同的文档类型都定义一个模式
2. 只在每个集合中存储一个文档类型
:::



::: tab 路径

+ mongoose 使用 path(路径) 定义访问子文档(嵌套文档)，即之前的句点语法，只是说法不一样

```js
name        // 子文档
name.title  // 子文档字段
name.first
name.last
```
:::


::: tab 创建模式

+ 通过创建一个 Schema 对象的实例
+ `definition`：Object。用于描述模式的字段，字段中还能指定[模式类型](#模式类型)
+ `options`：Object。可选[模式选项](#模式选项)
```js
new Schema(definition, options)
```
+ 示例
```js
const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
}, {
  collection: 'users'
})
```
:::


::: tab 模式选项

选项|说明
-|-
autoIndex|默认 true。开启对集合的自动索引功能
bufferCommands|默认 true。缓存由于连接问题而无法完成的命令
id|默认 true。使模型中的文档有对应于该对象的 _id 值的 id 获取器
_id|默认 true。自动为文档分配 _id 字段
safe|默认 true。发出一个写入关注到更新数据库的请求
strict|默认 true。不会将没定义在模式中的对象保存到数据库中
capped|指定在封顶集合中支持的最大文档数
collection|指定用于此 Schema 模型的集合名称(编译模型时会自动连接至该集合)
read|副本的读取首选项(primary/primaryPreferred/secondary/secondaryPreferred/nearest)
:::


::: tab 模式类型

+ 在定义字段时，除了定义字段值的类型，还能对其定义一些 `schema type`
+ 若写入文档时字段值不能通过验证，会提示并报错

类别|说明
-|-
<Badge>索引</Badge>|
index|Boolean，是否为该属性创建索引
unique|Boolean，是否对该属性创建唯一索引
sparse|Boolean，是否对这个属性创建稀疏索引
<Badge>String</Badge>|
lowercase|Boolean，是否转换为小写
uppercase|Boolean，是否转换为大写
trim|Boolean，是否去除两端空白字符
match|RegExp，使用正则检查这个值是否匹配
enum|Array，使用数组检查这个值是否包含
<Badge>Number</Badge>|
min|Number，检查属性是否大于或等于该值
max|Number，检查属性是否小于或等于该值
<Badge>Date</Badge>|
min|Date，检查属性是否大于或等于该值
max|Date，检查属性是否小于或等于该值
<Badge>其他</Badge>|
required|Boolean \| Function，true 时表示字段必填
default|Boolean \| Function，设置默认值
select|Boolean，指定 query 的默认 projection
alias|String，为该字段定义别名
validate|Function，添加验证器函数
get|Function，自定义 getter
set|Function，自定义 setter


+ 添加索引：使用 `index(Boolean)`
```js
const mySchema = new Schema({
  name: { type: String, index: 1 }
})
// 或者
const mySchema = new Schema({ name: String })
mySchema.index({ name: 1 })

// 此时，可以通过 Schema 对象的 indexes() 获取索引字段列表
mySchema.indexes()
```

+ 实现字段唯一：`unique(Boolean)`
```js
const mySchema = new Schema({
  name: { type: String, index: 1, unique: true }
})
```

+ 强制字段必须：`required(Boolean)`(默认情况下创建 Document 实例时若不指定字段，则创建的对象不包含字段)
```js
const mySchema = new Schema({
  name: { type: String, index: 1, unique: true, required: true }
})

// 此时，可以通过 Schema 对象的 requiredPaths() 获取必须字段列表
mySchema.requiredPaths()
```
:::


::: tab 添加方法

+ 可以在 `Scheme.methods` 属性上添加自定义的方法，这样便可以利用 Document 对象调用这些方法:
```js
const mySchema = new Schema({
  name: String,
  age: Number
}) 
// 在 Scheme.methods 上定义方法
mySchema.methods.toString = function() { return `${this.name} is ${this.age}.` }

// 在 Document 对象上使用方法
doc.toString()    // Alice is 26.
```
:::
::::



## Model

:::: tabs
::: tab 编译模型
+ `mongoose.model()`：将 `Schema` 编译为` Model`(类似 Collection 对象)
```js
mongoose.model(name, [schema], [collection], [skipInit])
// name：String，之后可以通过 mongoose.model(name) 引用该模型
// schema：模式(Schema)对象示例
// collection：String，要连接的集合名。缺省时返回一个 Query 对象
// skipInit：Boolean，默认 false。指定是否跳过初始化，跳过初始化则没有连接到数据库
```
:::


::: tab 示例
```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const test = require('assert')

// 连接到数据库
mongoose.connect('mongodb://localhost:27017/testDB')
// 定义一个 Schema
const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
}, { collection: 'users' })
// 编译 Schema 为 Model
const Users = mongoose.model('users', usersSchema)

const user1 = { name: 'Alice', age: 20 }
const user2 = { name: 'Anna', age: 18 }
const user3 = { name: 'Zed', age: 22 }

// 使用 Model 对象的 create() 方法添加文档
Users.create([user1, user2, user3], function(err) {
  test.equal(null, err)
  for (const i in arguments) {
    console.log(arguments[i])
  }
  mongoose.disconnect()
})
```
:::

::: tab 技巧
+ 定义和编译 Schema 的步骤不需要连接数据库，因此可以分离 Model 和 Controller
```js
// model.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
})

mongoose.model('users', usersSchema)

// controller.js
const mongoose = require('mongoose')
const test = require('assert')
require('./model')    // 可在 main.js 引入

mongoose.connect('mongodb://localhost:27017/testDB')

const user1 = { name: 'Alice', age: 20 }
const user2 = { name: 'Anna', age: 18 }
const user3 = { name: 'Zed', age: 22 }

const Users = mongoose.model('users')

Users.create([user1, user2, user3], function(err) {
  test.equal(null, err)
  console.log('add all success')
  mongoose.disconnect()
})
```
:::
::::




## Query

:::: tabs
::: tab 介绍

+ Query 对象允许链式执行一系列的数据库操作，直到使用 `exec(callback)` 退出
+ 在使用 Model 对象的过程中，回调函数是可以缺省的：
  + 带回调函数：方法与 mongodb 模块的 Collection 对象的行为类似
  + 不带回调函数：方法返回一个 Query 对象
+ 获得 Query 对象的途径：
  + 使用 Model 对象的方法，但不指定回调函数
  + 从 Query 对象的方法返回另一个 Query 对象
+ <font color="red">注意</font>：Query 对象最后一定要调用 `exec()`，才会发出数据库请求触发更改
:::


::: tab 获取

方法|回调函数第二个参数|操作多项
-|-|-
create(objects, [callback])|保存的 Document(或数组)|✅
count([query], [callback])|匹配的项数
distinct([query], [field], [callback])|执行结果的 Document 数组
find([query], [options], [callback])|匹配的 Document 数组
findOne([query], [options], [callback])|匹配的第一个 Document 对象
findAndRemove([query], [options], [callback])|删除的 Document 对象
findOneAndUpdate([query], [update], [options], [callback])|...
remove([query], [options], [callback])|...
update([query], [update], [options], [callback])|...
aggregate(operators, [callback])|聚合结果的 js 对象数组
:::

::: tab 查询选项

+ 其中 options 可以设置以下方法(或在 Query 对象上使用)：

方法|描述
-|-
setOptions(options)|[options 选项对象](./document-pro.md#options)
limit(number)|设置在结果中包含的文档的最大数量
select(fields)|指定包含在结果集的每个文档中的字段。(还可以指定不存在的字段)
sort(fields)|以字符串或对象形式指定排序的字段
skip(number)|指定要在结果集的开头跳过的文档数量
read(preference)|设置读取首选项(primary/primaryPreferred/secondary/secondaryPreferred/nearest)
snapshot(Boolean)|为 true 时把查询设置为快照查询
safe(Boolean)|为 true 时数据库请求对更新操作使用写入关注
hint(hints)|指定查找文档时要使用或排除的索引
comment(string)|将 string 连同查询添加到 MongoDB 的日志中
:::

::: tab 查询运算符

+ 即查询子句：

运算符|描述
-|-
where(path, [value])|为运算符设置当前字段路径
gt([path], value)|匹配大于指定的 value 的值的文档
gte([path], value)|匹配大于或等于指定的 value 的值的文档
lt([path], value)|匹配小于指定的 value 的值的文档
lte([path], value)|匹配小于或等于指定的 value 的值的文档
ne([path], value)|匹配不等于指定的 value 的值的文档
in([path], Array)|匹配存在于指定数组中的文档
nin([path], Array)|匹配不存在于指定数组中的文档
or(conditions)|用逻辑 OR 连接查询子句
and(conditions)|用逻辑 AND 连接查询子句
nor(conditions)|用逻辑 NOR 连接查询子句
exists([path], Boolean)|匹配具有指定字段的文档
mod([path], value, remainder)|对字段的值取模后匹配
regex([path], expression)|匹配指定正则表达式的文档
all([path], array)|匹配包含在数组指定的字段的所有数组字段
elemMatch([path], criteria)|匹配子文档的数组，criteria 为对象或函数
size([path], value)|匹配数组字段为指定大小的文档
:::
::::




## Document

+ 使用 Model 对象时，回调函数中的文档属于 Mongoose 的 `Document` 对象，其继承于 Model 对象，代表集合中的文档
+ 可以对文档对象使用一系列的方法来操作文档：

属性/方法|描述
-|-
id|文档的 _id 值
isNew|布尔值。表示是否是一个未存储在集合中 Model 的新对象
errors|文档的错误列表
schema|定义该文档的模型的 Schema 对象
equals(doc)|布尔值。返回 Document 对象与 doc 参数指定的文档是否匹配
get(path, [type])|返回指定路径的值，type 可以强制转换返回值的类型
set(path, value, [type])|设置指定路径的值，type 可以强制转换返回值的类型
update(update, [options], [callback])|更新文档
save([callback])|保存文档。回调函数只接受错误对象
remove([callback])|删除文档。回调函数只接受错误对象
isInit(path)|布尔值。当前路径的字段是否已初始化
isSelected(path)|布尔值。路径的字段是否从结果集中选择的
isModified(path)|布尔值。路径的字段是否已被修改但未保存
markModified(path)|把路径标记为正在被修改，触发它保存/更新
modifiedPaths()|返回已被修改的对象中的路径的数组
toJSON()|以 JSON 格式显示 Document 对象
toObject()|以 JS 对象格式显示 Document 对象（没有其属性和方法）
toString()|以字符串格式显示 Document 对象
validate(callback)|在文档上执行验证。回调函数只接受错误对象
invalidate(path, msg, value)|验证失败并将路径标志为无效。msg 指定错误信息，value 指定值





## 操作文档

:::: tabs
::: tab 增

+ 添加单个文档：Document 对象的 save()
+ 添加多个文档：Model 对象的 create()
:::


::: tab 删

+ 删除单个文档：Document 对象的 remove()
+ 删除多个文档：Model 对象的 remove()
:::


::: tab 改

+ 修改单个文档：Document 对象的 save()
+ 更新多个文档
  + Model 对象的 update()
  + Document 对象的 update()
:::


::: tab 查

+ 可以在 Model 对象或 Query 对象上执行
  + find()
  + findOne()
:::


::: tab 聚合

+ Model 对象提供了 aggregate() 方法进行聚合操作，同样回调函数是可选的，缺省时会返回一个 Aggregate 对象，可继续进行管道操作
+ Aggregate 对象上可用的方法：

方法|说明
-|-
exec(callback)|回调函数的第二个参数时 JS 数组对象
append(operations)|在管道追加额外的操作，可执行多个
group(operators)|追加 group 操作
limit(number)|限制结果集数量
match(operators)|追加 match 操作
project(operators)|追加 project 投影操作
read(preference)|指定用于集合的副本读取首选项。(primary|primaryPreferred|secondary|secondaryPreferred|nearest)
skip(number)|指定跳过的文档数
sort(fields)|追加排序操作
unwind(arrFields)|通过为数组的每个值在聚合集中建立一个新的文档解除其 arrFields 参数
:::




## 验证框架

+ 可以为字段添加验证函数，当读取或保存文件时，会执行验证函数：
```js
Users.mySchema.path('name').validate(function(val) {
  return val.length < 20
}, 'Name is too long!')
```

+ 当验证结果为 false 时，第二个字符串参数会写进错误对象的 error 字符串。错误对象具有以下字段：
  + `error.errors.<field>.message`
  + `error.errors.<field>.type`
  + `error.errors.<field>.path`
  + `error.errors.<field>.value`
  + `error.name`
  + `error.message`






## 中间件函数

+ Mongoose 提供一个中间件框架，在 **Document** 对象上使用 `init()`、 `validate()`、 `save()`、 `remove()` 方法的前后，会分别执行 `pre` 和 `post` 函数
+ 这两个中间件函数要在模型编译前使用才有效
+ 只有 Document 对象使用上述方法才会触发，Model 对象或 Query 对象的 `remove()` 不会触发



:::: tabs
::: tab pre

+ `pre` 函数可以被同步或异步执行，回调函数第一个参数为 `next` 函数
+ 同步：最后一步需要手动调用 `next`
```js
mySchema.pre('save', function(next) {
  console.log('...')
  next()
})
```

+ 异步：第二个参数指定为 `true`，回调函数额外接收一个 `done` 参数
```js
mySchema.pre('save', true, function(next, done) {
  console.log('...')
  next()
  doAsync(done)
})
```
:::


::: tab post

+ `post` 函数的回调函数接收 Document 对象(或对象数组)
```js
Users.mySchema.post('save', function(doc) {
  console.log(doc)
  console.log('...')
})
```
:::


::: tab 示例

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const test = require('assert')

mongoose.connect('mongodb://localhost:27017/testDB')

const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
}, { collection: 'users' })

// 使用中间件
usersSchema.pre('remove', function(next) {
  console.log('Before remove.')
  next()
})
usersSchema.post('remove', function(doc) {
  console.log('After Remove.')
  console.log(JSON.stringify(doc))
})

// 编译模型
const Users = mongoose.model('users', usersSchema)

Users.findOne({ name: 'Anna' }, function(err, doc) {
  test.equal(null, err)
  console.log(doc)
  doc.remove(function(err) {
    test.equal(null, err)
    console.log('Remove success!')
    mongoose.disconnect()
  })
})
```
:::
::::