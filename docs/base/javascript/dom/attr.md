## 介绍

[Attr](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr)：

+ 表示一个 `DOM` 元素的属性

::: danger 注意：
+ 在 DOM4 规范中，它不再继承自 `Node`；但在 DOM4.1 中又有变动，因此不建议使用 `Attr` 上有关 `Node` 的属性和方法
:::

## 属性

+ `name: readonly String`: 属性的名称
+ `namespaceURI: readonly String | Null`: 属性的命名空间
+ `localName: readonly String`: 属性的命名空间的本地名称
+ `prefix: readonly String | Null`: 属性的命名空间前缀
+ `ownerElement: readonly Element`: 属性所附属的元素节点
+ `specified: readonly Boolean`
+ `value: readonly String`: 属性的值