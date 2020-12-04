## [IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)

+ 是一种低级 API，用于客户端存储大量结构化数据(包括文件/blobs)，使用索引来实现对该数据的高性能搜索
+ 是一个基于事务操作的 `key-value` 型数数据库，类似于基于 `SQL` 的 `RDBMS`
+ 是一个基于 `JavaScript` 的面向对象的数据库

::: tip 说明：
+ `Web Storage` 只用于存储较少量的数据，`IndexedDB` 用于存储更大量的结构化数据
+ `IndexedDB` 在 `Web Worker` 中可用
+ `IndexedDB` 遵守同源策略
+ `IndexedDB` 是异步执行的，不会阻塞应用程序
:::



## ACID

数据库事务保证了数据操作的 `ACID` 特性：

+ 原子性(Atomicity)：事务作为一个整体被执行，包含在其中的对数据库的操作要么全部被执行，要么都不执行
+ 一致性(Consistency)：事务应确保数据库的状态从一个一致状态转变为另一个一致状态
+ 隔离性(Isolation)：多个事务并发执行时，一个事务的执行不应影响其他事务的执行
+ 持久性(Durability)：已被提交的事务对数据库的修改应该永久保存在数据库中

::: tip 说明：
+ 简单来说，事务保证数据库操作要么全部成功，要么全部失败。
:::
