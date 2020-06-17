## 介绍

[Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)：

+ 许多 `DOM API` 对象的类型会从这个接口继承，如
  + `Attr`
  + `CharacterData`
  + `Document`
  + `DocumentFragment`
  + `DocumentType`
  + `Element`



## 属性

包含一些 Node 节点属性、子节点等属性：

+ `baseURI: readonly String`: 该节点在文档的基础 `URL`
+ `baseURIObject: readonly Object`: 包含更多节点 `URL` 信息的对象
+ `childNodes readonly NodeList`: 该节点的所有子节点的实时的 `NodeList`
+ `firstChild: readonly Node | Null`: 第一个子节点(不存在时返回 `null`)
+ `laseChild: readonly Node | Null`: 最后一个子节点(不存在时返回 `null`)
+ `previousSibling: readonly Node | Null`: 上一个兄弟节点(不存在时返回 `null`)
+ `nextSibling: readonly Node | Null`: 下一个兄弟节点(不存在时返回 `null`)
+ `parentNode: readonly Node | Null`: 父节点(不存在时返回 `null`)
+ `parentElement: readonly Node | Element`: 父节点(不存在时返回 `null`)
+ `nodeName: readonly String`: 该节点的名字
+ `nodeType: readonly Number`: 该节点类型对应的 `ID` 值
+ `nodeValue`: 返回/设置当前节点的值
+ `textContent`: 返回/设置元素的内容
+ `isConnected: readonly Boolean`: 检测节点是否已连接
+ `ownerDocument: readonly Document`: 该元素所属的 `Document` 对象


::: danger 注意：
+ `parentNode` 返回的是一个 `Node` 节点对象或 `null`；而 `parentElement` 返回的是一个 `Element` 节点对象或 `null`，也就是说除了检测是父节点外还检测该节点是不是一个 `Element` 节点对象
:::


## 方法

包含一些关于 `Node` 节点的添加、删除、克隆、比较等操作的方法：

+ `appendChild(newNode: Node): resultNode`: 将一个节点添加到指定节点内(作为最后一个子节点)
+ `insertBefore(newNode: Node, referenceNode=null?: Node): resultNode`: 在参考节点之前插入一个节点(不传入参考节点相当于 `appendChild()`)
+ `removeChild(childNode: Node): childNode`: 从 DOM 中删除一个子节点
+ `replaceChild(newChild: Node, oldChild: Node): oldChild`: 替换当前节点的一个子节点
+ `cloneNode(deep=true?: Boolean): Node`: 返回调用该方法的节点的一个副本
+ `getRootNode(option?: Object)`: 返回上下文的根节点
+ `hasChildNodes(): Booleadn`: 指示当前节点是否有子节点
+ `compareDocumentPosition(otherNode: Node): BitMask`: 比较当前节点与任意文档中的另一个节点的位置关系
+ `contains(otherNode: Node): Boolean`: 指示指定节点是否为该节点的后代节点
+ `normalize()`: 将节点及其后代节点规范化(规范化的 DOM 树中不存在空的文本节点或相邻的文本节点)
+ `isDefaultNamespace(namespaceURI: String): Boolean`: 判断指定命名空间是否是当前节点的默认命名空间
+ `isEqualNode(otherNode): Boolean`: 判断两个节点是否相等(不比较引用，只比较节点类型、内容、属性、子节点等)
+ `lookupPrefix(namespaceURI: String): String | Null`: 返回一个和指定命名空间 URI 绑定的命名空间前缀
+ `lookupNamespaceURI(prefix: String | null): String`: 返回当前节点上与指定命名空间前缀绑定的命名空间 URI

::: tip 说明：
+ DOM4 规范移除了 `isSameNode()` 方法，转而用 `node1 === node2` 的方式判断两个节点是否为同一个节点
:::

## BitMask

位掩码指示节点与文档的位置关系，是 `compareDocumentPosition()` 方法的返回值：

|常量|十进制值|含义|
|-|-|-|
|`DOCUMENT_POSITION_DISCONNECTED`|1|不在同一文档|
|`DOCUMENT_POSITION_PRECEDING`|2|在指定节点前|
|`DOCUMENT_POSITION_FOLLOWING`|4|在指定节点后|
|`DOCUMENT_POSITION_CONTAINS`|8|包含指定节点
|`DOCUMENT_POSITION_CONTAINED_BY`|16|被指定节点包含|
|`DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`|32|待定|