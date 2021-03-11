## 介绍

[ParentNode](https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode)：

+ 描述了拥有子元素的 `Node` 对象的公有方法和属性
+ 是一个原始接口，不能够创建这种类型的对象
+ 以下对象实现了该接口：
  + [Document](/base/javascript/dom/document)
  + [DocumentFragment](/base/javascript/dom/document-fragment)
  + [Element](/base/javascript/dom/element)


## 属性

+ `children: readonly NodeList`: 特定元素的子元素列表(不包括后代元素)
+ `childElementCount: readonly Number`: 特定元素的后代元素的数量
+ `firstElementChild: readonly Element | Null`: 特定元素的第一个 `Element` 子元素
+ `lastElementChild: readonly Element | Null`: 特定元素的最后一个 `Element` 子元素



## 方法

+ `append(node*: Node | String): void`: 在指定节点的最后一个节点后追加一组 `Node` 节点或文本
+ `prepend(node*: Node | String): void`: 在指定节点的第一个节点前追加一组 `Node` 节点或文本
+ `querySelector(CSSSelector: String): Element`: 返回符合筛选条件的第一个 `Element` 元素
+ `querySelectorAll(CSSSelector: String): NodeList`: 返回符合筛选条件的 `Element` 元素列表

::: tip 区分 append() 和 appendChild()：
+ `append()` 无返回值，而 `appendChild()` 返回追加的节点
+ `append()` 可以追加字符串，而 `appendChild()` 只接受 `Node` 节点
+ `append()` 可以追加多个节点，而 `appendChild()` 只能追加一个几点
:::