## 介绍

[NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)：

+ 节点的集合(一个类数组)，由以下方式返回：
  + `childNodes`
  + `querySelectorAll()`
  + `getElementsByName()`

::: danger 注意：
+ `childNodes` 返回一个动态的 `NodeList`，而 `querySelectorAll()` 返回一个静态的 `NodeList`
:::


## 属性

+ `length: Number`: `NodeList` 包含的节点个数


## 方法

+ `item(index: Number): Node | Null`: 返回指定索引的 `Node` 对象
+ `forEach(callback: Function, thisArg?: Object): undefined`: 遍历每个 `Node` 节点
+ `keys(): Iterator`: 返回一个包含 `NodeList` 所有键的 `Iterator`
+ `values(): Iterator`: 返回一个包含 `NodeList` 所有值的 `Iterator`
+ `entries(): Iterator`: 返回一个包含 `NodeList` 所有键值数组的 `Iterator`


::: tip 说明：
+ 作为一个类数组，使用 `list.item(n)` 和 `list[n]` 是一样的
:::


## 不是数组

&emsp;&emsp;`NodeList` 不是一个数组，而是类数组，这是因为它们的原型链不同。

**数组的原型链：**

```
myArray --> Array.prototype --> Object.prototype --> null
```

**NodeList 的原型链：**

```
myNodeList --> NodeList.prototype --> Object.prototype --> null
```