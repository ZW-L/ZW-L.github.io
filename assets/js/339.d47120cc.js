(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{768:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("ul",[n("li",[t._v("防篡改对象：\n"),n("ul",[n("li",[t._v("不可扩展的对象："),n("strong",[t._v("不能添加成员")]),t._v("，但是仍"),n("strong",[t._v("可以删除、修改已有成员")])]),t._v(" "),n("li",[t._v("密封的对象："),n("strong",[t._v("不能添加、删除成员")]),t._v("，但是仍"),n("strong",[t._v("可以修改已有成员")])]),t._v(" "),n("li",[t._v("冻结的对象："),n("strong",[t._v("不能添加、删除、修改成员")]),t._v("，但是仍"),n("strong",[t._v("可以通过 "),n("code",[t._v("[[Set]]")]),t._v(" 描述符修改已有成员")])])])]),t._v(" "),n("li",[t._v("相关 API：\n"),n("ul",[n("li",[n("code",[t._v("Object.preventExtensions()")]),t._v("：防止对象扩展")]),t._v(" "),n("li",[n("code",[t._v("Object.seal()")]),t._v("：密封对象")]),t._v(" "),n("li",[n("code",[t._v("Object.freeze()")]),t._v("：冻结对象")]),t._v(" "),n("li",[n("code",[t._v("Object.isExtensible()")]),t._v("：指示对象是否可扩展")]),t._v(" "),n("li",[n("code",[t._v("Object.isSealed()")]),t._v("：指示对象是否被密封")]),t._v(" "),n("li",[n("code",[t._v("Object.isFrozen()")]),t._v("：指示对象是否被冻结")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),n("ul",[n("li",[t._v("一旦将对象定义为防篡改后无法撤销")]),t._v(" "),n("li",[t._v("若进行对象禁止的操作，非严格模式下会忽略，严格模式下会抛出错误")]),t._v(" "),n("li",[t._v("密封对象会将对象成员的 "),n("code",[t._v("[[Configurable]]")]),t._v(" 特性设置为 "),n("code",[t._v("false")])]),t._v(" "),n("li",[t._v("冻结对象会将对象成员的 "),n("code",[t._v("[[Configurable]]")]),t._v("/"),n("code",[t._v("[[Writable]]")]),t._v(" 特性设置为 "),n("code",[t._v("false")])]),t._v(" "),n("li",[t._v("因为密封的对象也是不可扩展的，所以通过 "),n("code",[t._v("Object.isExtensible()")]),t._v(" 也会返回 "),n("code",[t._v("false")])]),t._v(" "),n("li",[t._v("因为冻结的对象也是不可扩展且是密封的，所以通过 "),n("code",[t._v("Object.isSealed()")]),t._v("/"),n("code",[t._v("Object.isExtensible()")]),t._v(" 分别返回 "),n("code",[t._v("true")]),t._v(" 和 "),n("code",[t._v("false")])])])]),t._v(" "),n("h2",{attrs:{id:"不可扩展的对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不可扩展的对象"}},[t._v("#")]),t._v(" 不可扩展的对象")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alice'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventExtensions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 严格模式下会报错 TypeError")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExtensible")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),n("h2",{attrs:{id:"密封的对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#密封的对象"}},[t._v("#")]),t._v(" 密封的对象")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alice'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alice")]),t._v("\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Anna'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Anna")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSealed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExtensible")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),n("h2",{attrs:{id:"冻结的对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#冻结的对象"}},[t._v("#")]),t._v(" 冻结的对象")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alice'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alice")]),t._v("\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Anna'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alice")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFrozen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSealed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExtensible")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);