## 介绍

[ChildNode](https://developer.mozilla.org/zh-CN/docs/Web/API/ChildNode)：

+ 描述了可以拥有父对象的对象中特定于 `Node` 对象的方法
+ 是一个原始接口，不能创建此类型的对象
+ 以下对象实现了该接口：
  + [CharacterData](/base/javascript/dom/character-data)
  + [DocumentType](/base/javascript/dom/document-type)
  + [Element](/base/javascript/dom/element)


## 方法

+ `remove(): void`: 把指定节点删除
+ `before(node*: Node | String): void`: 在指定节点的前面追加一组 `Node` 节点或文本
+ `after(node*: Node | String): void`: 在指定节点的后面追加一组 `Node` 节点或文本
+ `replaceWith(node*: Node | String): void`: 用一组 `Node` 节点或文本替换指定节点