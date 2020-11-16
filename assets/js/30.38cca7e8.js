(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{390:function(_,v,t){_.exports=t.p+"assets/img/dom_01.bf281581.png"},678:function(_,v,t){"use strict";t.r(v);var e=t(25),o=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"javascript-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-简介"}},[_._v("#")]),_._v(" Javascript 简介")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("javascript")]),_._v(" 由三部分组成："),e("code",[_._v("BOM")]),_._v("(Browser Object Model)、"),e("code",[_._v("DOM")]),_._v("(Document Object Model) 和 "),e("code",[_._v("ECMAScript")])]),_._v(" "),e("li",[e("code",[_._v("BOM")]),_._v(" 能使用浏览器提供的基于客户端的存储、URL 定位等接口")]),_._v(" "),e("li",[e("code",[_._v("DOM")]),_._v(" 能使用操作文档、修改样式、事件监听等接口")]),_._v(" "),e("li",[e("code",[_._v("ECMAScript")]),_._v(" 是一门脚本语言，能无缝使用 "),e("code",[_._v("BOM")]),_._v(" 和 "),e("code",[_._v("DOM")]),_._v(" 提供的接口功能，而且还有自身丰富的语言特点:\n"),e("ul",[e("li",[e("code",[_._v("ES3")]),_._v(" 可以作为第一个 "),e("code",[_._v("ECMAScript")]),_._v(" 版本的标准")]),_._v(" "),e("li",[e("code",[_._v("ES5")]),_._v(" 对部分功能进行修订，并且添加了新的功能(JSON 对象，继承的方法，高级属性定义等)和"),e("strong",[_._v("严格模式")])]),_._v(" "),e("li",[e("code",[_._v("ES6")]),_._v(" 增加了众多新功能特性，是一个最为丰富的版本更新")]),_._v(" "),e("li",[e("code",[_._v("ES7/8/9/10")]),_._v(" 等版本都增加了少部分的功能特性")])])])]),_._v(" "),e("h2",{attrs:{id:"dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[_._v("#")]),_._v(" DOM")]),_._v(" "),e("ul",[e("li",[_._v("DOM (Document Object Model, 文档对象模型)，是 HTML 和 XML 文档的编程接口。"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction",target:"_blank",rel:"noopener noreferrer"}},[_._v("DOM 介绍"),e("OutboundLink")],1)]),_._v(" "),e("li",[_._v("提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容")]),_._v(" "),e("li",[_._v("将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将 web 页面和脚本或程序语言连接起来")]),_._v(" "),e("li",[_._v("DOM 是 Web 页面的完全的面向对象表述，它能够使用如 JavaScript 等脚本语言进行修改")]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.w3.org/DOM/",target:"_blank",rel:"noopener noreferrer"}},[_._v("W3C DOM"),e("OutboundLink")],1),_._v(" 和 "),e("a",{attrs:{href:"https://dom.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("WHATWG DOM"),e("OutboundLink")],1),_._v(" 标准在绝大多数现代浏览器中都有对DOM的基本实现；许多浏览器提供了对W3C标准的扩展，所以在使用时必须注意，文档可能会在多种浏览器上使用不同的 DOM 来访问")])]),_._v(" "),e("h3",{attrs:{id:"节点类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点类型"}},[_._v("#")]),_._v(" 节点类型")]),_._v(" "),e("p",[_._v("  DOM 节点类型有以下几种，每种类型对应着一个 ID 值。")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("类型")]),_._v(" "),e("th",[_._v("ID")]),_._v(" "),e("th",[_._v("描述")]),_._v(" "),e("th",[_._v("规范")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("ELEMENT_NODE")]),_._v(" "),e("td",[_._v("1")]),_._v(" "),e("td",[_._v("元素节点，"),e("font",{attrs:{color:"blue"}},[_._v("可有子节点")])],1),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("TEXT_NODE")]),_._v(" "),e("td",[_._v("3")]),_._v(" "),e("td",[_._v("文本节点，无子节点")]),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("CDATA_SECTION_NODE")]),_._v(" "),e("td",[_._v("4")]),_._v(" "),e("td",[_._v("CDATASection: "),e("code",[_._v("<~CDATA[[...]]>")])]),_._v(" "),e("td")]),_._v(" "),e("tr",[e("td",[_._v("PROCESSING_INSTRUCTION_NODE")]),_._v(" "),e("td",[_._v("7")]),_._v(" "),e("td",[_._v("XML 文档的 "),e("code",[_._v("ProcessingInstruction")])]),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("COMMENT_NODE")]),_._v(" "),e("td",[_._v("8")]),_._v(" "),e("td",[_._v("注释节点，无子节点")]),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("DOCUMENT_NODE")]),_._v(" "),e("td",[_._v("9")]),_._v(" "),e("td",[_._v("Document 节点，代表整个文档")]),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("DOCUMENT_TYPE_NODE")]),_._v(" "),e("td",[_._v("10")]),_._v(" "),e("td",[_._v("DocumentType 节点，如 "),e("code",[_._v("<!DOCTYPE html>")])]),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("DOCUMENT_FRAGMENT_NODE")]),_._v(" "),e("td",[_._v("11")]),_._v(" "),e("td",[e("code",[_._v("DocumentFragment")]),_._v(" 节点，"),e("font",{attrs:{color:"blue"}},[_._v("可有子节点")])],1),_._v(" "),e("td",[_._v("-")])]),_._v(" "),e("tr",[e("td",[_._v("ATTRIBUTE_NODE")]),_._v(" "),e("td",[_._v("2")]),_._v(" "),e("td",[_._v("属性节点，无子节点")]),_._v(" "),e("td",[e("font",{attrs:{color:"red"}},[_._v("DOM4 废弃")])],1)]),_._v(" "),e("tr",[e("td",[_._v("ENTITY_REFERENCE_NODE")]),_._v(" "),e("td",[_._v("5")]),_._v(" "),e("td",[_._v("一个 XML 实体引用节点")]),_._v(" "),e("td",[e("font",{attrs:{color:"red"}},[_._v("DOM4 废弃")])],1)]),_._v(" "),e("tr",[e("td",[_._v("ENTITY_NODE")]),_._v(" "),e("td",[_._v("6")]),_._v(" "),e("td",[_._v("一个 XML "),e("code",[_._v("<!ENTITY>")]),_._v(" 节点")]),_._v(" "),e("td",[e("font",{attrs:{color:"red"}},[_._v("DOM4 废弃")])],1)]),_._v(" "),e("tr",[e("td",[_._v("NOTATION_NODE")]),_._v(" "),e("td",[_._v("12")]),_._v(" "),e("td",[_._v("一个 XML "),e("code",[_._v("<!NOTATION>")]),_._v(" 节点")]),_._v(" "),e("td",[e("font",{attrs:{color:"red"}},[_._v("DOM4 废弃")])],1)])])]),_._v(" "),e("h3",{attrs:{id:"接口关系图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口关系图"}},[_._v("#")]),_._v(" 接口关系图")]),_._v(" "),e("ul",[e("li",[_._v("参考："),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model",target:"_blank",rel:"noopener noreferrer"}},[_._v("MDN DOM 接口"),e("OutboundLink")],1)])]),_._v(" "),e("p",[e("img",{attrs:{src:t(390),alt:"DOM 关系"}})]),_._v(" "),e("h3",{attrs:{id:"接口说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[_._v("#")]),_._v(" 接口说明")]),_._v(" "),e("ul",[e("li",[_._v("常规 DOM 操作应用最多的接口为 "),e("code",[_._v("EventTarget")]),_._v("：\n"),e("ul",[e("li",[e("code",[_._v("Node")]),_._v(" 描述了 DOM 的所有类型的节点对象")]),_._v(" "),e("li",[e("code",[_._v("Attr")]),_._v("(属性节点对象), "),e("code",[_._v("Document")]),_._v("(文档节点对象), "),e("code",[_._v("DocumentFragment")]),_._v("(文档片段节点对象), "),e("code",[_._v("Element")]),_._v("(元素节点对象)分别扩展了 "),e("code",[_._v("Node")]),_._v(" 对象")]),_._v(" "),e("li",[e("code",[_._v("HTMLDocument")]),_._v(" 对象继承自 "),e("code",[_._v("Document")]),_._v("，并扩展了一些属性")]),_._v(" "),e("li",[e("code",[_._v("CharacterData")]),_._v(" 是一个抽象接口，作为下层接口 "),e("code",[_._v("Comment")]),_._v("(注释节点对象) 和 "),e("code",[_._v("Text")]),_._v("(文本节点对象) 的补充")]),_._v(" "),e("li",[e("code",[_._v("Element")]),_._v(" 对象涵盖所有的标签节点，而且它的后代也有不同功能的扩展："),e("code",[_._v("HTMLElement")]),_._v("("),e("code",[_._v("HTML")]),_._v(" 元素节点对象), "),e("code",[_._v("SVGElement")]),_._v("("),e("code",[_._v("<svg>")]),_._v(" 元素节点对象), "),e("code",[_._v("HTMLCanvasElement")]),_._v("("),e("code",[_._v("<canvas>")]),_._v(" 元素节点对象)")])])]),_._v(" "),e("li",[e("code",[_._v("ChildNode")]),_._v(" 和 "),e("code",[_._v("ParentNode")]),_._v(" 接口作为某些节点对象的补充，提供相关的属性和方法")]),_._v(" "),e("li",[e("code",[_._v("NodeList")]),_._v("(节点列表) 和 "),e("code",[_._v("HTMLCollection")]),_._v("("),e("code",[_._v("HTML")]),_._v(" 元素节点集合)")]),_._v(" "),e("li",[e("code",[_._v("Event")]),_._v(" 对象作为所有事件对象的超类，包括自定义事件("),e("code",[_._v("CustomEvent")]),_._v(")和常见的 UI 事件("),e("code",[_._v("UIEvent")]),_._v(")")])])])}),[],!1,null,null,null);v.default=o.exports}}]);