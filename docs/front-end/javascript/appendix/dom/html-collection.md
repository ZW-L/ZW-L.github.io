## 介绍

[HTMLCollection](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)：

+ 一个包含 `HTML` 元素(按照文档流的顺序)的集合，一些会返回一个 `HTMLCollection` 的情况：
  + `getElementsByName()`
  + `getElementsByTagName()`
  + `getElementsByClassName()`

::: tip 说明：
+ 不同于 `NodeList`，`HTMLCollection` 是实时变化的
:::


## 属性

+ `length: Number`: 集合包含的元素个数


## 方法

+ `item(index: Number): Element | Null`: 返回指定索引的 `Element` 对象
+ `namedItem(idName: String): Element | null`: 返回指定 `id` 属性的 `Element` 对象

::: tip 说明：
+ 作为一个类数组，使用 `coll.item(n)` 和 `coll[n]` 是一样的
+ `coll.namedItem(idName)` 也等同于 `coll[idName]` 
:::