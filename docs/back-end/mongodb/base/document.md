## 获取句柄

+ 方式1：使用 `getCollection()`
```sh
use testDB
db.getCollection('newCollection')
```

+ 方式2：直接获取
```sh
use testDB
db.newCollection
```



## 增

+ `insert(document)`
```sh
use testDB
coll = db.getCollection('newCollection')
coll.insert({name: 'Anna', age: '20'})
coll.insert({name: 'Alice', age: '22'})
```
+ `save(document)`
```sh
coll.save({name: 'Zed', age: '18'})
```



## 删

+ `remove([query])`
```sh
use testDB
db.newCollection.remove({name: 'Anna'})   # 删除匹配的文档
db.newCollection.remove()   # 删除所有文档
```




## 改

+ `save(object)`：文档中 `_id` 字段是唯一的，通过使用相同的 `_id` 字段去覆盖文档(并不是添加)
```sh

```

+ `update(query, update, options)`
```sh
use testDB
# 以下命令将所有年龄为20的文档的 job 字段的值设置为 'student'
db.newCollection.update(
  {age: '20'},
  {$set: {job: 'student'},
  {upsert: false, multi: true}
)

# 以下命令将覆盖对应 _id 字段的文档
db.newCollection.update(
  {'_id': '5d594b30f464fc645f888fcf', age: '21'}
)
```

::: tip update(query, update, options)
+ `query`：指定字段和值与集合中匹配的文档，相当于用 `find(query)` 查找到匹配的文档
+ `update`：一个对象，指定再更新时使用的更新运算符
  + `$inc`：递增字段值
  + `$set`：设置字段值
  + `$push`：将一个条目推送到数组
+ `options`：一个对象
  + `upsert`：布尔值，为 `true` 则当没有找到就创建一个新的文档
  + `multi`： 布尔值，为 `true` 则与查询匹配的所有文档都被更新，否则只有第一个文档被更新
:::




## 查

+ `find([query])`
```sh
use testDB
db.newCollection.find({name: 'Anna'})   # 返回匹配的文档
db.newCollection.find()   # 返回集合中所有文档
```