(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{697:function(t,e,s){"use strict";s.r(e);var l=s(25),o=Object(l.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("h3",{attrs:{id:"width-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#width-height"}},[t._v("#")]),t._v(" width/height")]),t._v(" "),s("p",[t._v("  由于无法从 "),s("code",[t._v("element.style")]),t._v(" 中读取 "),s("code",[t._v("width/height")]),t._v(" 属性，因此只能通过 "),s("code",[t._v("window.getComputedStyle(element)")]),t._v(" 读取：")]),t._v(" "),s("p",[t._v("首先：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" computedStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("再：")]),t._v(" "),s("ul",[s("li",[t._v("computedStyle.width：在 "),s("code",[t._v("<style>")]),t._v(" 标签中设置的元素宽度，不包括 margin, padding, border 等。")]),t._v(" "),s("li",[t._v("computedStyle.height：在 "),s("code",[t._v("<style>")]),t._v(" 标签中设置的元素高度，不包括 margin, padding, border 等。")])]),t._v(" "),s("h3",{attrs:{id:"client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" client")]),t._v(" "),s("p",[t._v("  client 其开头的几个只读属性与 "),s("code",[t._v("margin")]),t._v(" 无关：")]),t._v(" "),s("ul",[s("li",[t._v("clientWidth：盒子能被背景色影响的部分的宽度，即左右padding + content。受左右padding, content 影响。")]),t._v(" "),s("li",[t._v("clientHeight：盒子能被背景色影响的部分的高度，即上下padding + content。受上下padding, content 影响。")]),t._v(" "),s("li",[t._v("clientLeft：盒子的左边框厚度。只受 border-left 影响。")]),t._v(" "),s("li",[t._v("clientTop：盒子的上边框厚度。只受 border-top 影响。")])]),t._v(" "),s("h3",{attrs:{id:"offset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[t._v("#")]),t._v(" offset")]),t._v(" "),s("p",[t._v("  offset 其开头的几个只读属性：")]),t._v(" "),s("ul",[s("li",[t._v("offsetWidth：盒子除去 margin 外的宽度，即左右padding + 左右border + content。受左右padding, 左右border, content 影响。")]),t._v(" "),s("li",[t._v("offsetHeight：盒子除去 margin 外的高度，即上下padding + 上下border + content。受上下padding, 上下border, content 影响。")]),t._v(" "),s("li",[t._v("offsetLeft：盒子(不包括 margin)的左上角偏离父元素左上角的 x 距离。受左右margin, position, float 等影响。")]),t._v(" "),s("li",[t._v("offsetTop：盒子(不包括 margin)的左上角偏离父元素左上角的 y 距离。受上下margin, position, float 等影响。")])]),t._v(" "),s("h3",{attrs:{id:"scroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll"}},[t._v("#")]),t._v(" scroll")]),t._v(" "),s("p",[t._v("  scroll 其开头的几个属性(scrollLeft 和 scrollTop 可读写)：")]),t._v(" "),s("ul",[s("li",[t._v("scrollWidth：对于不可滚动的盒子，等同于 clientWidth；对于滚动盒子，受到所有盒子属性(margin, padding, border, content)的影响。")]),t._v(" "),s("li",[t._v("scrollHeight：对于不可滚动的盒子，等同于 clientHeight；对于滚动盒子，受到所有盒子属性(margin, padding, border, content)的影响。")]),t._v(" "),s("li",[t._v("scrollLeft：读取或设置(相当于 "),s("code",[t._v("el.scrollTo(x, 0)")]),t._v(")滚动元素的水平滚动距离；对于不可滚动的盒子，scrollLeft/scrollTop 的值为 0。")]),t._v(" "),s("li",[t._v("scrollTop：读取或设置(相当于 "),s("code",[t._v("el.scrollTo(0, y)")]),t._v(")滚动元素的垂直滚动距离；对于不可滚动的盒子，scrollLeft/scrollTop 的值为 0。")])]),t._v(" "),s("h2",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("h3",{attrs:{id:"对比-jquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比-jquery"}},[t._v("#")]),t._v(" 对比 jQuery")]),t._v(" "),s("p",[s("strong",[t._v("jQuery 的以下方法用于读取时：")])]),t._v(" "),s("ul",[s("li",[t._v("width()/height()：相当于 computedStyle.width/computedStyle.height")]),t._v(" "),s("li",[t._v("innerWidth()/innerHeight()：相当于 clientWidth/clientHeight")]),t._v(" "),s("li",[t._v("outerWidth()/outerHeight()：相当于 offsetWidth/offsetHeight")]),t._v(" "),s("li",[t._v("outerWidth(true)/outerHeight(true)：相当于用于滚动盒子时的 scrollWidth/scrollHeight")]),t._v(" "),s("li",[t._v("offset().left/offset().top：相当于 offsetLeft/offsetTop")]),t._v(" "),s("li",[t._v("position().left/position().top：")])]),t._v(" "),s("h3",{attrs:{id:"scroll-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll-2"}},[t._v("#")]),t._v(" scroll")]),t._v(" "),s("ul",[s("li",[t._v("滚动到顶部时：el.scrollTop = 0")]),t._v(" "),s("li",[t._v("滚动到底部时：el.scrollTop = el.scrollHeight - el.clientHeight")]),t._v(" "),s("li",[t._v("滚动到最左端时：el.scrollLeft = 0")]),t._v(" "),s("li",[t._v("滚动到最左端时：el.scrollLeft = el.scrollWidth - el.clientWidth")])])])}),[],!1,null,null,null);e.default=o.exports}}]);