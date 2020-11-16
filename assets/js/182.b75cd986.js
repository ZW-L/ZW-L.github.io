(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{596:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"组件内管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件内管理"}},[s._v("#")]),s._v(" 组件内管理")]),s._v(" "),a("h3",{attrs:{id:"bem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bem"}},[s._v("#")]),s._v(" BEM")]),s._v(" "),a("ul",[a("li",[s._v("BEM 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的前端 CSS 命名方法论")]),s._v(" "),a("li",[s._v("其中命名规则如下：\n"),a("ul",[a("li",[a("code",[s._v("__")]),s._v("：双下划线，用来连接块和块的子元素")]),s._v(" "),a("li",[a("code",[s._v("--")]),s._v("：单中划线，用来描述一个块或者块的子元素的一种状态")]),s._v(" "),a("li",[a("code",[s._v("-")]),s._v("：中划线，作为连字符使用，为多单词之间的连接记号")])])])]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".stick-man__head--small")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".stick-man__head--big")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("优点：能有效避免样式重名，并且语义化更明显")]),s._v(" "),a("li",[s._v("缺点：类名特别长，不适合小项目/小组件中使用，更适用于大型项目/组件库的全局样式管理")])]),s._v(" "),a("h3",{attrs:{id:"scoped-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped-css"}},[s._v("#")]),s._v(" scoped css")]),s._v(" "),a("ul",[a("li",[s._v("参考 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/guide/scoped-css.html#scoped-css",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue scoped css"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("code",[s._v("<style>")]),s._v(" 标签上添加 scoped 属性指定样式只在该组件内有效：")])]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hi"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 本地样式 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".example")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 全局样式 */")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("ul",[a("li",[s._v("Vue 规定子组件的根结点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响")]),s._v(" "),a("li",[s._v("Vue 还提供了深度作用操作符，可以修改子组件的样式，以下写法都是允许的")])]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a >>> .b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a /deep/ .b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a ::v-deep .b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("h3",{attrs:{id:"css-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-module"}},[s._v("#")]),s._v(" css module")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Modules"),a("OutboundLink")],1),s._v(" 是一个流行的，用于模块化和组合 CSS 的系统")]),s._v(" "),a("li",[s._v("Vue 中把其作为一个计算属性 "),a("code",[s._v("$style")]),s._v("，可用于引用响应的类名")])]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".red")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("$style.red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    This should be red\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("ul",[a("li",[s._v("其内部会对类名进行编码来避免重名，因此最终会转换为")])]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("._1yZGjg0pYkMbaHPr4wT6P__1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("_1yZGjg0pYkMbaHPr4wT6P__1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    This should be red\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("h3",{attrs:{id:"css-in-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js"}},[s._v("#")]),s._v(" css in js")]),s._v(" "),a("ul",[a("li",[s._v("参考 "),a("a",{attrs:{href:"https://github.com/styled-components/vue-styled-components",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-in-js"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"全局样式管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局样式管理"}},[s._v("#")]),s._v(" 全局样式管理")]),s._v(" "),a("ul",[a("li",[s._v("预处理：使用 CSS 预处理器(Sass/Less/Stylus)提供的便捷语法(嵌套、变量、函数、...)简化/复用样式")])]),s._v(" "),a("h3",{attrs:{id:"样式文件拆分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式文件拆分"}},[s._v("#")]),s._v(" 样式文件拆分")]),s._v(" "),a("ul",[a("li",[s._v("将样式文件拆分，再借助预处理器的功能来管理全局样式")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- styles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" reset.css        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 样式重置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- variables.scss   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- layout.scss      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 布局样式")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- mixins.scss      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 混入")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- animation.scss   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 动画样式")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- element-ui.scss  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第三方 UI 库的样式修改")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更多样式")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("- index.scss       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引入并组织所有样式")]),s._v("\n")])])]),a("ul",[a("li",[s._v("在 index.scss 中组织所有样式(注意样式导入顺序)")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./reset.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./variables.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./mixins.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./layout.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#app ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);