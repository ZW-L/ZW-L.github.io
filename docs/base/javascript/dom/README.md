## 简介

### DOM

&emsp;&emsp;DOM (Document Object Model, 文档对象模型)，是HTML和XML文档的编程接口。[DOM 介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction):

+ 提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。
+ 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将 web 页面和脚本或程序语言连接起来。
+ DOM 是 web 页面的完全的面向对象表述，它能够使用如 JavaScript 等脚本语言进行修改。
+ [W3C DOM](https://www.w3.org/DOM/) 和 [WHATWG DOM](https://dom.spec.whatwg.org/) 标准在绝大多数现代浏览器中都有对DOM的基本实现。许多浏览器提供了对W3C标准的扩展，所以在使用时必须注意，文档可能会在多种浏览器上使用不同的DOM来访问。
+ 查看所有 [DOM 接口](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)。


### DOM 中的数据类型

&emsp;&emsp;为了方便描述，将 DOM 中一些对象、节点等称为为 DOM 的数据类型。

类型|描述
-|-
document|html 根文档对象
element|由 DOM API 中返回的类型为 element 的一个元素或节点。document.createElement() 等方法的返回值
nodeList|一个 element 的数组。document.getElementsByTagName() 等方法的返回值
attribute|属性对象。getAttribute() 等方法的返回值
namedNodeMap|


### DOM 节点类型

&emsp;&emsp;DOM 节点类型有以下几种，每种类型对应着一个 ID 值。

类型|ID|描述
-|-|-
Element|1|元素节点，<font color="red">可以有子节点</font>
Attribute|2|属性节点，无子节点
Text|3|文本节点，无子节点
Comment|8|注释节点，无子节点
Document|9|文档节点，代表整个文档




## 常用对象

+ document 文档对象
+ node 节点对象
+ element 元素节点对象
+ event 事件对象


### document

&emsp;&emsp;

+ document 对象的属性
+ document 对象的方法


### node

&emsp;&emsp;

+ node 对象的属性
+ node 对象的方法


### element

&emsp;&emsp;

+ element 对象的属性
+ element 对象的方法


### event

&emsp;&emsp;

+ 事件类型
+ 事件绑定
+ 事件流
+ 事件对象的通用属性和方法
+ 不同事件对象的属性和方法