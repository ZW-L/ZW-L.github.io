## 获取句柄

+ 对文档的增删改查都需要依次获取两个句柄：
```sh
# 1.获取数据库句柄
$ use testDB

# 2.获取文档句柄，有两种方式
$ db.newCollection
$ db.getCollection('newCollection')
```



## 增

+ `insert(document)`：添加字段
+ `save(document)`：保存字段，但使用已存在的 `_id` 字段时会是覆盖已有文档

```sh
# 获取句柄
$ use testDB
$ coll = db.getCollection('newCollection')

# insert
$ coll.insert({name: 'Anna', age: '20'})
$ coll.insert({name: 'Alice', age: '22'})

# save
$ coll.save({name: 'Zed', age: '18'})
```



## 删

+ `remove([query])`：
```sh
$ use testDB

# remove
$ db.newCollection.remove({name: 'Anna'})   # 删除匹配的文档
$ db.newCollection.remove()                 # 删除集合中所有文档
```


## 改

+ `save(document)`：文档中 `_id` 字段是唯一的，通过使用相同的 `_id` 字段去覆盖文档(并不是添加)
```sh
$ use testDB

# save
$ db.newCollection.save({name: 'Zed', age: '18'})
```

+ `update(query, update, options)`
```sh
$ use testDB

# 以下命令将所有年龄为20的文档的 job 字段的值设置为 'student'
$ db.newCollection.update(
  {age: '20'},
  {$set: {job: 'student'},
  {upsert: false, multi: true}
)

# 以下命令将覆盖对应 _id 字段的文档
$ db.newCollection.update(
  {'_id': '5d594b30f464fc645f888fcf', age: '21'}
)
```

::: tip update(query, update, options)
+ `query`：指定字段和值与集合中匹配的文档，相当于用 `find(query)` 查找到匹配的文档
+ `update`：一个对象，指定在更新时使用的更新运算符
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
$ use testDB

$ db.newCollection.find({name: 'Anna'})   # 返回匹配的文档
$ db.newCollection.find()                 # 返回集合中所有文档
```
