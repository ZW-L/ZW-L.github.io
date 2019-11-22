## 初步

### 了解 Mongoose


### 使用 Mongoose 连接 MongoDB 数据库
&emsp;&emsp;使用 mongoose 模块的 `connect()` 方法连接数据库，使用 `disconnect()` 方法关闭连接。
+ mongoose.connect(dbUrl, options, [callback])
  + dbUrl：String
  + options
    + username：String
    + password：String
    + autoIndex：Boolean，默认 true。
    + bufferCommands：Boolean，默认 true。
  + callback：Function
+ mongoose.disconnect()

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


## 概念

### 模式

**1.认识模式**

&emsp;&emsp;使用 mongoose 时，通常要实现模式，模式为集合中的文档定义字段和字段类型。其中，字段的值支持下列类型：

+ String
+ Number
+ Boolean | Bool
+ Array
+ Buffer
+ Date
+ ObjectId | Oid
+ Mixed
+ Decimal128

&emsp;&emsp;**建议**：

1. 为每个不同的文档类型都定义一个模式
2. 只在每个集合中存储一个文档类型


**2.认识路径**

&emsp;&emsp;mongoose 使用 path(路径) 定义访问子文档(嵌套文档)，即之前的句点语法，只是说法不一样。
```js
name
name.title
name.first
name.last
```

**3.创建模式**

&emsp;&emsp;通过创建一个 Schema 对象的实例：
+ new Schema(definition, options)
  + definition：Object。用于描述模式。
  + options：Object。可选下表中的选项。

**定义 Schema 对象时可指定的选项**：
<center>选项</center>|<center>说明</center>
---|---
autoIndex|默认为 true。为 true 时开启对集合的自动索引功能。
bufferCommands|默认为 true。为 true 时缓存由于连接问题而无法完成的命令。
capped|指在封顶集合中支持的最大文档数。
collection|指定用于此 Schema 模型的集合名称。(当编译模式模型时，会自动连接至该集合)
id|默认为 true。为 true 时使模型中的文档有对应于该对象的 _id 值的 id 获取器。
_id|默认为 true。为 true 时自动为文档分配 _id 字段。
read|指定副本的读取首选项。(primary|primaryPreferred|secondary|secondaryPreferred|nearest)。
safe|默认为 true。为 true 时发出一个写入关注到更新数据库的请求。
strict|默认为 true。为 true 时不会将没定义在模式中的对象保存到数据库中。

```js
const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
}, { collection: 'users' })
```

**4.在模式上的更多操作**

&emsp;&emsp;在定义字段时，除了定义字段值的类型，还能对其定义一些 `schema type`。

（1）添加索引

&emsp;&emsp;使用 `index(Boolean)` 把索引应用到模式对象：
```js
const mySchema = new Schema({
  name: { type: String, index: 1 }
})
// 或者
const mySchema = new Schema({ name: String })
mySchema.index({ name: 1 })
```
&emsp;&emsp;另外，可以通过 Schema 对象的 `indexes()` 获取索引字段列表：
```js
mySchema.indexes()
```

（2）实现字段唯一

&emsp;&emsp;使用 `unique(Boolean)` 实现字段唯一：
```js
const mySchema = new Schema({
  name: { type: String, index: 1, unique: true }
})
```

（3）强制字段必须

&emsp;&emsp;默认情况下，创建 Document 实例时若不指定字段，则创建的对象就不包含字段。但使用 required(Boolean) 可以强制字段必须：

```js
const mySchema = new Schema({
  name: { type: String, index: 1, unique: true, required: true }
})
```
&emsp;&emsp;另外，可以通过 Schema 对象的 `requiredPaths()` 获取必须字段列表：
```js
mySchema.requiredPaths()
```

（4）所有 schema type

&emsp;&emsp;除了 index 和 require 外，还能添加更多的 schema type。
<center>类别</center>|<center>说明</center>
---|---
全部可用|required: Boolean\|Function，true 时为字段添加 required 验证器。<br>default：Boolean\|Function，设置此路径默认值。<br>select：Boolean，指定 query 的默认 projection。<br>validate：Function，为该属性添加验证器函数。<br>get：Function，使用 Object.defineProperty() 定义自定义 getter。<br>set：Function，使用 Object.defineProperty() 定义自定义 setter。<br>alias：String，为该字段定义别名。<br>
索引相关|index：Boolean，是否为该属性创建索引。<br>unique：Boolean，是否对该属性创建唯一索引。<br>sparse：Boolean，是否对这个属性创建稀疏索引。<br>
String|lowercase：Boolean，转换为小写。<br>uppercase：Boolean，转换为大写。<br>trim：Boolean，去除两端空白字符。<br>match：RegExp，使用正则检查这个值是否匹配。<br>enum：Array，使用数组检查这个值是否包含。<br>
Number|min：Number，检查属性是否大于或等于该值。<br>max：Number，检查属性是否小于或等于该值。<br>
Date|min：Date，检查属性是否大于或等于该值。<br>max：Date，检查属性是否小于或等于该值。<br>


**5.在 Schema 对象上添加方法**

&emsp;&emsp;可以在 `Scheme.methods` 属性上添加自定义的方法，这样便可以利用 Document 对象调用这些方法:
```js
const mySchema = new Schema({
  name: String,
  age: Number
}) 
// 在 Scheme.methods 上定义方法
mySchema.methods.toString = function() { return `${this.name} is ${this.age}.` }

// 在 Document 对象上使用方法

```

### 编译模型
&emsp;&emsp;使用 `mongoose.model()` 方法将 `Schema 模型`编译为` Model 对象`(具有和之前 mongodb 的 Collection 对象大致相同的行为)。
+ mongoose.model(name, [schema], [collection], [skipInit])
  + name：String，之后可以通过 `mongoose.model(name)` 发现该模型。
  + schema：Schema Object，
  + collection：String，要连接的集合名。缺省时返回一个 `Query` 对象。
  + skipInit：Boolean，默认 false。指定是否跳过初始化，跳过初始化则没有连接到数据库。

### 使用 Model 对象
```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const test = require('assert')

// 连接到数据库
mongoose.connect('mongodb://localhost:27017/testDB')
// 定义一个模型
const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number
}, { collection: 'users' })
// 编译模型为 Model 对象
const Users = mongoose.model('users', usersSchema)

const user1 = {
  name: 'Alice',
  age: 20
}
const user2 = {
  name: 'Anna',
  age: 18
}
const user3 = {
  name: 'Zed',
  age: 22
}
// 使用 Model 对象的 create() 方法添加文档
Users.create([user1, user2, user3], function(err) {
  test.equal(null, err)
  for (const i in arguments) {
    console.log(arguments[i])
  }
  mongoose.disconnect()
})
```
说明：
+ 首先连接到 MongoDB 服务器下的 `testDB` 数据库
+ 定义一个模型 usersSchema，指定连接 `users` 集合
+ 编译模型得到 Users对象(一个 Model 对象)
+ 使用 Model 对象的 create() 方法添加文档


## 对象

### Query
&emsp;&emsp;在使用 Model 对象的过程中，回调函数时可以缺省的：
+ 带回调函数：方法与 mongodb 模块的行为类似
+ 不带回调函数：方法返回一个 Query 对象
&emsp;&emsp;而 `Query` 对象允许链式执行一系列的数据库操作，直到使用 `exec(callback)` 方法为止。

1.获得 `Query` 对象的途径：
+ 使用 Model 对象的方法，但不指定回调函数
+ 从 Query 对象的方法返回一个 Query 对象

**这些方法在 Query 对象或 编译后的 Model 对象上使用能返回 Query 对象**：
<center>方法</center>|<center>说明</center>
---|---
create(objects, [callback])|objects 为对象或对象数组，回调函数第二个参数为保存的 Document(或数组)。
count([query], [callback])|回调函数第二个参数为匹配的项数。
distinct([query], [field], [callback])|回调函数第二个参数为执行结果的 Document 数组。
find([query], [options], [callback])|回调函数第二个参数为匹配的 Document 数组。
findOne([query], [options], [callback])|回调函数第二个参数为匹配的第一个 Document 对象。
findAndRemove([query], [options], [callback])|回调函数第二个参数为删除的 Document 对象。
findOneAndUpdate([query], [update], [options], [callback])|回调函数第二个参数为...
remove([query], [options], [callback])|回调函数第二个参数为...
update([query], [update], [options], [callback])|回调函数第二个参数为...
aggregate(operators, [callback])|回调函数第二个参数为聚合结果的 js 对象数组

**上述方法的 options 参数对象可以设置以下方法(也可以在 Query 对象上直接使用)**：
<center>方法</center>|<center>说明</center>
---|---
setOptions(options)|设置执行数据库请求时，用于与 MongoDB 交互的选项。
limit(number)|设置在结果中包含的文档的最大数量。
select(fields)|指定包含在结果集的每个文档中的字段。(还可以指定不存在的字段)
sort(fields)|以字符串或对象形式指定排序的字段。
skip(number)|指定要在结果集的开头跳过的文档数量。
read(preference)|允许设置读取首选项。(primary|primaryPreferred|secondary|secondaryPreferred|nearest)
snapshot(Boolean)|为 true 时把查询设置为快照查询。
safe(Boolean)|为 true 时数据库请求对更新操作使用写入关注。
hint(hints)|指定查找文档时要使用或排除的索引。
comment(string)|将 string 连同查询添加到 MongoDB 的日志中。

**可以在 Query 对象上使用查询运算符**：
<center>运算符</center>|<center>说明</center>
---|---
where(path, [value])|为运算符设置当前字段路径。
gt([path], value)|匹配大于指定的 value 的值的文档。
gte([path], value)|匹配大于或等于指定的 value 的值的文档。
lt([path], value)|匹配小于指定的 value 的值的文档。
lte([path], value)|匹配小于或等于指定的 value 的值的文档。
ne([path], value)|匹配不等于指定的 value 的值的文档。
in([path], Array)|匹配存在于指定数组中的文档。
nin([path], Array)|匹配不存在于指定数组中的文档。
or(conditions)|用逻辑 OR 连接查询子句。
and(conditions)|用逻辑 AND 连接查询子句。
nor(conditions)|用逻辑 NOR 连接查询子句。
exists([path], Boolean)|匹配具有指定字段的文档。
mod([path], value, remainder)|对字段的值执行取模运算，匹配符合的结果。
regex([path], expression)|匹配指定正则表达式的文档。
all([path], array)|匹配包含在数组指定的字段的所有数组字段。
elemMatch([path], criteria)|匹配子文档的数组中的元素具有匹配所有指定的 $elemMatch 标准的字段，criteria 为对象或函数。
size([path], value)|匹配数组字段为指定大小的文档。



### Document
&emsp;&emsp;使用 Model 对象时，回调函数中的文档属于 Mongoose 的 `Document` 对象，其继承于 Model 对象，代表集合中的文档。可以对 Document 对象使用一系列的方法来操作文档。

**可以在 Document 对象上使用的属性和方法**：
<center>属性/方法</center>|<center>说明</center>
---|---
id|包含文档的 _id 值。
isNew|布尔值。表示是否是一个未存储在集合中 Model 的新对象。
errors|文档的错误列表。
schema|连接到定义了 Document 对象的模型的 Schema 对象。
equals(doc)|布尔值。返回 Document 对象与 doc 参数指定的文档是否匹配。
get(path, [type])|返回指定路径的值，type 可以强制转换返回值的类型。
set(path, value, [type])|设置指定路径的值，type 可以强制转换返回值的类型。
update(update, [options], [callback])|更新文档。
save([callback])|保存文档。回调函数只接受错误对象。
remove([callback])|删除文档。回调函数只接受错误对象。
isInit(path)|布尔值。当前路径的字段是否已初始化。
isSelected(path)|布尔值。路径的字段是否从结果集中选择的。
isModified(path)|布尔值。路径的字段是否已被修改但未保存。
markModified(path)|把路径标记为正在被修改，触发它保存/更新。
modifiedPaths()|返回已被修改的对象中的路径的数组。
toJSON()|以 JSON 格式显示 Document 对象。
toObject()|以 JS 对象格式显示 Document 对象，但是它没有 Document 对象的属性和方法。
toString()|以字符串格式显示 Document 对象。
validate(callback)|在文档上执行验证。回调函数只接受错误对象。
invalidate(path, msg, value)|将路径标志为无效，从而导致验证失败。msg 指定错误信息，value 指定值。



## 操作文档

### 添加文档

+ Model 对象的 create() 添加多个文档
+ Document 对象的 save() 添加单个文档

### 查找文档
&emsp;&emsp;Model 对象或 Query 对象上的：
+ find()
+ findOne()


### 更新文档

+ Document 对象的 save() 修改单个文档
+ Model 对象的 update() 更新多个文档
+ Document 对象的 update() 更新单个文档

### 删除文档

+ + Model 对象的 remove() 删除多个文档
+ Document 对象的 remove() 删除单个文档

### 聚合文档
&emsp;&emsp;Model 对象提供了 aggregate() 方法进行聚合操作，同样回调函数是可选的，缺省时会返回一个 Aggregate 对象，可继续进行管道操作。
**可在 Aggregate 对象上使用的方法**：
<center>方法</center>|<center>说明</center>
---|---
exec(callback)|回调函数的第二个参数时 JS 数组对象。
append(operations)|在管道追加额外的操作，可执行多个。
group(operators)|追加 group 操作。
limit(number)|限制结果集数量。
match(operators)|追加 match 操作。
project(operators)|追加 project 投影操作。
read(preference)|指定用于集合的副本读取首选项。(primary|primaryPreferred|secondary|secondaryPreferred|nearest)
skip(number)|指定跳过的文档数。
sort(fields)|追加排序操作。
unwind(arrFields)|通过为数组的每个值在聚合集中建立一个新的文档解除其 arrFields 参数。


## 验证框架

&emsp;&emsp;可以为字段添加验证函数，当读取或保存文件时，会执行验证函数:
```js
Users.mySchema.path('name').validate(function(val) {
  return val.length < 20
}, 'Name is too long!')
```
当验证结果为 false 时，第二个字符串参数会写进错误对象的 error 字符串。错误对象具有以下字段：
+ error.errors.<field>.message
+ error.errors.<field>.type
+ error.errors.<field>.path
+ error.errors.<field>.value
+ error.name
+ error.message


## 中间件函数

&emsp;&emsp;Mongoose 提供一个中间件框架，在 **Document** 对象上使用 `init()`、 `validate()`、 `save()`、 `remove()` 方法的前后，会分别执行 `pre` 和 `post` 函数。但二者有些区别：
+ `pre` 函数可以被同步或异步执行；同步时它的回调函数接收一个 next 参数；异步时额外接收一个 done 参数。
+ `post` 函数的回调函数接收 Document 对象(或对象数组)。

而且：
+ 这两个中间件函数要在模型编译前使用才有效
+ 只有 Document 对象使用上述方法才会触发，Model 对象或 Query 对象的 `remove()` 不会触发。

### pre

同步：
```js
mySchema.pre('save', function(next) {
  console.log('...')
  next()
})
```

异步：
```js
// 还要用一个 true 指明异步使用
mySchema.pre('save', true, function(next, done) {
  console.log('...')
  next()
  doAsync(done)
})
```

### post

```js
Users.mySchema.post('save', function(doc) {
  console.log(doc)
  console.log('...')
})
```

### 例子

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const test = require('assert')

// 连接到数据库
mongoose.connect('mongodb://localhost:27017/testDB')
// 定义一个模型
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
// 编译模型为 Model 对象
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