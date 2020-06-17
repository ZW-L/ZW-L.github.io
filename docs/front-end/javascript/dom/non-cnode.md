## 简介

[NonDocumentTypeChildNode](https://developer.mozilla.org/zh-CN/docs/Web/API/NonDocumentTypeChildNode)：

+ 包含专属于某些特定 `Node` 节点对象(可以拥有父对象但不适用 `DocumentType` 的对象)的方法
+ 一个裸接口，无法创建实例，以下对象实现了该接口：
  + [Element](/base/javascript/dom/element)
  + [CharacterData](/base/javascript/dom/character-data)


## 属性

+ `previousElementSibling: readonly Element | Null`: 当前元素的前一个兄弟节点
+ `nextElementSibling: readonly Element | Null`: 当前元素的后一个兄弟节点