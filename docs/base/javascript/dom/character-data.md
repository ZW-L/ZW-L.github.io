## 介绍

[CharacterData](https://developer.mozilla.org/zh-CN/docs/Web/API/CharacterData)：

+ 是一个抽象接口，代表 `Node` 节点对象中包含的字符
+ 以下对象实现了该接口
  + `Comment`
  + `Text`
  + `ProcessingInstruction`


## 属性

+ `data: String`: 该对象中包含的文本数据
+ `length: Number`: 包含字符串的长度


::: tip 其他属性：
+ 从 [Node](/base/javascript/dom/node) 对象继承了属性
+ 从 [ChildNode](/base/javascript/dom/child-node) 接口实现了属性
+ 从 [NonDocumentTypeChildNode](/base/javascript/dom/non-cnode) 接口实现了属性
:::

## 方法

+ `appendData()`
+ `deleteData()`
+ `insertData()`
+ `replaceData()`
+ `substringData()`


::: tip 其他方法：
+ 从 [Node](/base/javascript/dom/node) 对象继承了方法
+ 从 [ChildNode](/base/javascript/dom/child-node) 接口实现了方法
+ 从 [NonDocumentTypeChildNode](/base/javascript/dom/non-cnode) 接口实现了方法
:::