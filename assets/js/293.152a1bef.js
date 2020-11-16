(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{715:function(e,_,v){"use strict";v.r(_);var o=v(25),d=Object(o.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Node",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),v("OutboundLink")],1),e._v("：")]),e._v(" "),v("ul",[v("li",[e._v("许多 "),v("code",[e._v("DOM API")]),e._v(" 对象的类型会从这个接口继承，如\n"),v("ul",[v("li",[v("code",[e._v("Attr")])]),e._v(" "),v("li",[v("code",[e._v("CharacterData")])]),e._v(" "),v("li",[v("code",[e._v("Document")])]),e._v(" "),v("li",[v("code",[e._v("DocumentFragment")])]),e._v(" "),v("li",[v("code",[e._v("DocumentType")])]),e._v(" "),v("li",[v("code",[e._v("Element")])])])])]),e._v(" "),v("h2",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),v("p",[e._v("包含一些 Node 节点属性、子节点等属性：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("baseURI: readonly String")]),e._v(": 该节点在文档的基础 "),v("code",[e._v("URL")])]),e._v(" "),v("li",[v("code",[e._v("baseURIObject: readonly Object")]),e._v(": 包含更多节点 "),v("code",[e._v("URL")]),e._v(" 信息的对象")]),e._v(" "),v("li",[v("code",[e._v("childNodes readonly NodeList")]),e._v(": 该节点的所有子节点的实时的 "),v("code",[e._v("NodeList")])]),e._v(" "),v("li",[v("code",[e._v("firstChild: readonly Node | Null")]),e._v(": 第一个子节点(不存在时返回 "),v("code",[e._v("null")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("laseChild: readonly Node | Null")]),e._v(": 最后一个子节点(不存在时返回 "),v("code",[e._v("null")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("previousSibling: readonly Node | Null")]),e._v(": 上一个兄弟节点(不存在时返回 "),v("code",[e._v("null")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("nextSibling: readonly Node | Null")]),e._v(": 下一个兄弟节点(不存在时返回 "),v("code",[e._v("null")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("parentNode: readonly Node | Null")]),e._v(": 父节点(不存在时返回 "),v("code",[e._v("null")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("parentElement: readonly Node | Element")]),e._v(": 父节点(不存在时返回 "),v("code",[e._v("null")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("nodeName: readonly String")]),e._v(": 该节点的名字")]),e._v(" "),v("li",[v("code",[e._v("nodeType: readonly Number")]),e._v(": 该节点类型对应的 "),v("code",[e._v("ID")]),e._v(" 值")]),e._v(" "),v("li",[v("code",[e._v("nodeValue")]),e._v(": 返回/设置当前节点的值")]),e._v(" "),v("li",[v("code",[e._v("textContent")]),e._v(": 返回/设置元素的内容")]),e._v(" "),v("li",[v("code",[e._v("isConnected: readonly Boolean")]),e._v(": 检测节点是否已连接")]),e._v(" "),v("li",[v("code",[e._v("ownerDocument: readonly Document")]),e._v(": 该元素所属的 "),v("code",[e._v("Document")]),e._v(" 对象")])]),e._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[e._v("注意：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("parentNode")]),e._v(" 返回的是一个 "),v("code",[e._v("Node")]),e._v(" 节点对象或 "),v("code",[e._v("null")]),e._v("；而 "),v("code",[e._v("parentElement")]),e._v(" 返回的是一个 "),v("code",[e._v("Element")]),e._v(" 节点对象或 "),v("code",[e._v("null")]),e._v("，也就是说除了检测是父节点外还检测该节点是不是一个 "),v("code",[e._v("Element")]),e._v(" 节点对象")])])]),e._v(" "),v("h2",{attrs:{id:"方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),v("p",[e._v("包含一些关于 "),v("code",[e._v("Node")]),e._v(" 节点的添加、删除、克隆、比较等操作的方法：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("appendChild(newNode: Node): resultNode")]),e._v(": 将一个节点添加到指定节点内(作为最后一个子节点)")]),e._v(" "),v("li",[v("code",[e._v("insertBefore(newNode: Node, referenceNode=null?: Node): resultNode")]),e._v(": 在参考节点之前插入一个节点(不传入参考节点相当于 "),v("code",[e._v("appendChild()")]),e._v(")")]),e._v(" "),v("li",[v("code",[e._v("removeChild(childNode: Node): childNode")]),e._v(": 从 DOM 中删除一个子节点")]),e._v(" "),v("li",[v("code",[e._v("replaceChild(newChild: Node, oldChild: Node): oldChild")]),e._v(": 替换当前节点的一个子节点")]),e._v(" "),v("li",[v("code",[e._v("cloneNode(deep=true?: Boolean): Node")]),e._v(": 返回调用该方法的节点的一个副本")]),e._v(" "),v("li",[v("code",[e._v("getRootNode(option?: Object)")]),e._v(": 返回上下文的根节点")]),e._v(" "),v("li",[v("code",[e._v("hasChildNodes(): Booleadn")]),e._v(": 指示当前节点是否有子节点")]),e._v(" "),v("li",[v("code",[e._v("compareDocumentPosition(otherNode: Node): BitMask")]),e._v(": 比较当前节点与任意文档中的另一个节点的位置关系")]),e._v(" "),v("li",[v("code",[e._v("contains(otherNode: Node): Boolean")]),e._v(": 指示指定节点是否为该节点的后代节点")]),e._v(" "),v("li",[v("code",[e._v("normalize()")]),e._v(": 将节点及其后代节点规范化(规范化的 DOM 树中不存在空的文本节点或相邻的文本节点)")]),e._v(" "),v("li",[v("code",[e._v("isDefaultNamespace(namespaceURI: String): Boolean")]),e._v(": 判断指定命名空间是否是当前节点的默认命名空间")]),e._v(" "),v("li",[v("code",[e._v("isEqualNode(otherNode): Boolean")]),e._v(": 判断两个节点是否相等(不比较引用，只比较节点类型、内容、属性、子节点等)")]),e._v(" "),v("li",[v("code",[e._v("lookupPrefix(namespaceURI: String): String | Null")]),e._v(": 返回一个和指定命名空间 URI 绑定的命名空间前缀")]),e._v(" "),v("li",[v("code",[e._v("lookupNamespaceURI(prefix: String | null): String")]),e._v(": 返回当前节点上与指定命名空间前缀绑定的命名空间 URI")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("说明：")]),e._v(" "),v("ul",[v("li",[e._v("DOM4 规范移除了 "),v("code",[e._v("isSameNode()")]),e._v(" 方法，转而用 "),v("code",[e._v("node1 === node2")]),e._v(" 的方式判断两个节点是否为同一个节点")])])]),e._v(" "),v("h2",{attrs:{id:"bitmask"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bitmask"}},[e._v("#")]),e._v(" BitMask")]),e._v(" "),v("p",[e._v("位掩码指示节点与文档的位置关系，是 "),v("code",[e._v("compareDocumentPosition()")]),e._v(" 方法的返回值：")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("常量")]),e._v(" "),v("th",[e._v("十进制值")]),e._v(" "),v("th",[e._v("含义")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("DOCUMENT_POSITION_DISCONNECTED")])]),e._v(" "),v("td",[e._v("1")]),e._v(" "),v("td",[e._v("不在同一文档")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("DOCUMENT_POSITION_PRECEDING")])]),e._v(" "),v("td",[e._v("2")]),e._v(" "),v("td",[e._v("在指定节点前")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("DOCUMENT_POSITION_FOLLOWING")])]),e._v(" "),v("td",[e._v("4")]),e._v(" "),v("td",[e._v("在指定节点后")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("DOCUMENT_POSITION_CONTAINS")])]),e._v(" "),v("td",[e._v("8")]),e._v(" "),v("td",[e._v("包含指定节点")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("DOCUMENT_POSITION_CONTAINED_BY")])]),e._v(" "),v("td",[e._v("16")]),e._v(" "),v("td",[e._v("被指定节点包含")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC")])]),e._v(" "),v("td",[e._v("32")]),e._v(" "),v("td",[e._v("待定")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);