(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{712:function(v,e,_){"use strict";_.r(e);var t=_(25),o=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLDocument",target:"_blank",rel:"noopener noreferrer"}},[v._v("HTMLDocument"),_("OutboundLink")],1),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("继承了 "),_("a",{attrs:{href:"/base/javascript/dom/document"}},[v._v("Document")]),v._v(" 接口，并扩展了一些属性")])]),v._v(" "),_("h2",{attrs:{id:"属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[v._v("#")]),v._v(" 属性")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("属性")]),v._v(" "),_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("描述")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[_("code",[v._v("cookie")])]),v._v(" "),_("td",[_("code",[v._v("String")])]),v._v(" "),_("td",[v._v("获取/设置与当前文档相关联的 "),_("code",[v._v("cookie")])])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("domain")])]),v._v(" "),_("td",[_("code",[v._v("String")])]),v._v(" "),_("td",[v._v("获取/设置当前文档的原始域部分")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("title")])]),v._v(" "),_("td",[_("code",[v._v("String")])]),v._v(" "),_("td",[v._v("获取/设置当前文档的标题")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("designMode")])]),v._v(" "),_("td",[_("code",[v._v("Enum('off', 'on')")])]),v._v(" "),_("td",[v._v("获取/设置整个文档是否可编辑(默认 "),_("code",[v._v("off")]),v._v(")")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("dir")])]),v._v(" "),_("td",[_("code",[v._v("Enum('ltr', 'rtl')")])]),v._v(" "),_("td",[v._v("获取/设置文档的文字方向(默认 "),_("code",[v._v("ltr")]),v._v(")")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("location")])]),v._v(" "),_("td",[_("code",[v._v("readonly Location")])]),v._v(" "),_("td",[v._v("文档的 "),_("code",[v._v("URI")])])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("URL")])]),v._v(" "),_("td",[_("code",[v._v("readonly String")])]),v._v(" "),_("td",[v._v("文档的 "),_("code",[v._v("URL")])])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("referrer")])]),v._v(" "),_("td",[_("code",[v._v("readonly Location")])]),v._v(" "),_("td",[v._v("来源页面的 "),_("code",[v._v("URI")])])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("defaultView")])]),v._v(" "),_("td",[_("code",[v._v("readonly Window | Null")])]),v._v(" "),_("td",[v._v("文档对象所关联的 "),_("code",[v._v("window")]),v._v(" 对象")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("lastModified")])]),v._v(" "),_("td",[_("code",[v._v("readonly String")])]),v._v(" "),_("td",[v._v("文档的最后修改日期和时间")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v("readyState")])]),v._v(" "),_("td",[_("code",[v._v("readonly Enum('loading', 'interactive', 'complete')")])]),v._v(" "),_("td",[v._v("文档的加载状态")])])])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("说明：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cookie")]),v._v(" 的设置格式为 "),_("code",[v._v("key1=value1;key2=value2;...")]),v._v("，多个键值对间用分号隔开")]),v._v(" "),_("li",[_("code",[v._v("readyState")]),v._v(" 属性的值可以是以下之一，它们每次改变都会触发 "),_("code",[v._v("readystatechange")]),v._v(" 事件\n"),_("ul",[_("li",[_("code",[v._v("loading")]),v._v(": 正在加载")]),v._v(" "),_("li",[_("code",[v._v("interactive")]),v._v(": 可交互(文档被解析，但图像和样式表等资源可能仍在加载)")]),v._v(" "),_("li",[_("code",[v._v("complete")]),v._v(": 加载完成(文档和所有子资源均已加载完成)")])])])])]),v._v(" "),_("h2",{attrs:{id:"方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[v._v("#")]),v._v(" 方法")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("open(): Document")]),v._v(": 打开一个要写入的文档")]),v._v(" "),_("li",[_("code",[v._v("close(): void")]),v._v(": 结束由 "),_("code",[v._v("write()")]),v._v(" 的写入(这种写入操作一般由 "),_("code",[v._v("open()")]),v._v(" 打开)")]),v._v(" "),_("li",[_("code",[v._v("write(markup: String): void")]),v._v(": 将文本字符串写入由 "),_("code",[v._v("open()")]),v._v(" 打开的文档流")]),v._v(" "),_("li",[_("code",[v._v("writeln(markup: String): void")]),v._v(": 比 "),_("code",[v._v("write()")]),v._v(" 多输入一个换行符")]),v._v(" "),_("li",[_("code",[v._v("execCommand(commandName: String, showUI: Boolean, args=null: any): Boolean")]),v._v(": 运行命令操纵可编辑内容区域的元素")]),v._v(" "),_("li",[_("code",[v._v("getElementsByName(name: String): NodeList")]),v._v(": 返回符合指定标签名的节点列表")]),v._v(" "),_("li",[_("code",[v._v("hasFocus(): Boolean")]),v._v(": 指示当前文档是否获得了焦点")]),v._v(" "),_("li",[_("code",[v._v("queryCommandEnabled(command: String): Boolean")]),v._v(": 指示浏览器中是否可使用指定指令")]),v._v(" "),_("li",[_("code",[v._v("queryCommandIndeterm(command: String): Boolean")]),v._v(": 指示指定命令在当前范围内是否处于不确定状态")]),v._v(" "),_("li",[_("code",[v._v("queryCommandState(command: String): Boolean")]),v._v(": 指示指定命令是否已在当前范围内执行")]),v._v(" "),_("li",[_("code",[v._v("queryCommandValue(command: String): Boolean")]),v._v(": 指示当前范围是否支持指定命令")]),v._v(" "),_("li",[_("code",[v._v("queryCommandSupported()")]),v._v(": 返回当前范围支持的的命令")])])])}),[],!1,null,null,null);e.default=o.exports}}]);