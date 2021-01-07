## 数据库

+ **显示数据库列表：**
```sh
$ show dbs
```


+ **切换数据库：**
```sh
# 方式1: 使用 use 命令，切换到需要使用的数据库
$ use testDB

# 方式2: 使用 db.getSiblingDB() 方法
$ db = db.getSiblingDB('testDB)
```


+ **创建新的数据库：**
```sh
# 1.使用一个不存在的数据库
$ use newDB

# 2.创建一个集合
$ db.createCollection('newCollection')
```

::: tip 
+ 通过直接使用一个不存在的数据库，然后再其上添加一个集合来创建数据库
+ 但是，如果只使用了不存在的数据库而不进行添加集合的操作，数据库并不会保存
:::


+ **删除数据库：**
```sh
$ use newDB
$ db.dropDatabase()   # 删除
```

::: tip 
+ 要删除一个数据库，首先切换到该数据库中，再使用 `db.dropDatabase()` 方法进行删除
+ 数据库删除后，`db` 句柄依然为当前数据库(即使他已经被删除)，若新建一个集合，该数据库便会**复活**
:::


+ **复制数据库：**
```sh
$ db.copyDatabase(origin, destination, [hostname])

# origin：要复制的数据库名称
# destination：在此 MongoDB 服务器上要创建的数据库名称
# hostname：[可选]，指定 origin 数据库所在的 MongoDB 服务器的主机名(当要在不同的主机复制数据库时)
```






## 集合

+ 对集合的操作都需要在数据库中进行，因此都需要切换句柄到相应数据库：`use testDB`

+ **显示集合：**
```sh
$ use testDB
$ show collections
```

+ **创建集合：**

```sh
$ db.createCollection(name, [options])

# options 选项对象有以下可选属性：
#   capped：布尔值，默认 false。指定了集合是否是一个封顶集合(封顶集合不会增长到比 size 属性指定的最大规模更大)
#   autoIndexID：布尔值，默认 true。表明是否自动为集合中的每个文档创建一个 _id 字段并实现该字段上的索引
#   size：以字节为单位，用于封顶集合。最旧的文件被删除，腾出空间给新的文件
#   max：在封顶集合中允许的最大文档数。最旧的文件被删除，腾出空间给新的文件

# 示例
$ use testDB
$ db.createCollection('newCollection')
```


+ **删除集合：**
```sh
$ use testDB
$ coll = db.getCollection('newCollection')  # 获取集合句柄
$ coll.drop()
```