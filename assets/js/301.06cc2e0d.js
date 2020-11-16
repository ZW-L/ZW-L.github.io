(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{724:function(v,_,e){"use strict";e.r(_);var o=e(25),d=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"类型转换规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型转换规则"}},[v._v("#")]),v._v(" 类型转换规则")]),v._v(" "),e("ul",[e("li",[v._v("转换为 "),e("code",[v._v("Boolean")]),v._v("：相当于使用 "),e("code",[v._v("Boolean()")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("false")]),v._v("："),e("code",[v._v("0")]),v._v(", "),e("code",[v._v("NaN")]),v._v(", "),e("code",[v._v("''")]),v._v(", "),e("code",[v._v("null")]),v._v(", "),e("code",[v._v("undefined")])]),v._v(" "),e("li",[e("code",[v._v("true")]),v._v("：其他所有类型")])])]),v._v(" "),e("li",[v._v("转换为 "),e("code",[v._v("Number")]),v._v("：相当于使用 "),e("code",[v._v("Number()")]),v._v(" "),e("ul",[e("li",[v._v("1："),e("code",[v._v("true")]),v._v(", "),e("code",[v._v("'1'")])]),v._v(" "),e("li",[v._v("0："),e("code",[v._v("false")]),v._v(", "),e("code",[v._v("''")]),v._v(", "),e("code",[v._v("null")]),v._v(", "),e("code",[v._v("[]")])]),v._v(" "),e("li",[v._v("NaN："),e("code",[v._v("undefined")]),v._v(", 任何函数、对象、非空数组、包含非数字的字符串")]),v._v(" "),e("li",[v._v("123："),e("code",[v._v("'123'")])])])]),v._v(" "),e("li",[v._v("转换为 "),e("code",[v._v("String")]),v._v("：相当于使用 "),e("code",[v._v("String()")]),v._v(" "),e("ul",[e("li",[v._v("有 "),e("code",[v._v("toString()")]),v._v(" 方法时，直接使用 "),e("code",[v._v("toString()")]),v._v(" 返回的结果")]),v._v(" "),e("li",[e("code",[v._v("null")]),v._v(" 返回 "),e("code",[v._v("'null'")]),v._v("，"),e("code",[v._v("undefined")]),v._v(" 返回 "),e("code",[v._v("'undefined'")])])])])]),v._v(" "),e("h2",{attrs:{id:"隐式类型转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[v._v("#")]),v._v(" 隐式类型转换")]),v._v(" "),e("h3",{attrs:{id:"布尔操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布尔操作符"}},[v._v("#")]),v._v(" 布尔操作符")]),v._v(" "),e("p",[v._v("("),e("code",[v._v("!")]),v._v(", "),e("code",[v._v("&&")]),v._v(", "),e("code",[v._v("||")]),v._v(")理解为操作布尔值，"),e("code",[v._v("Boolean")]),v._v(" 的优先级高，对非布尔值自动调用 "),e("code",[v._v("Boolean()")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("逻辑非("),e("code",[v._v("!")]),v._v(")：先自动转换为 "),e("code",[v._v("Boolean")]),v._v(" 类型再取反")]),v._v(" "),e("li",[v._v("逻辑与("),e("code",[v._v("&&")]),v._v(")：先遇真值，直接返回第二个操作数；先遇假值，直接返回第一个操作数")]),v._v(" "),e("li",[v._v("逻辑或("),e("code",[v._v("||")]),v._v(")：先遇真值，直接返回第一个操作数；先遇假值，直接返回第二个操作数")])]),v._v(" "),e("h3",{attrs:{id:"算术运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符"}},[v._v("#")]),v._v(" 算术运算符")]),v._v(" "),e("p",[v._v("("),e("code",[v._v("+")]),v._v(", "),e("code",[v._v("-")]),v._v(", "),e("code",[v._v("*")]),v._v(", "),e("code",[v._v("/")]),v._v(", "),e("code",[v._v("%")]),v._v(", "),e("code",[v._v("++")]),v._v(", "),e("code",[v._v("--")]),v._v(")：理解为操作数值，"),e("code",[v._v("Number")]),v._v(" 的优先级高，对非数值自动调用 "),e("code",[v._v("Number()")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("加法：有一个操作数是字符串，都进行字符串拼接")]),v._v(" "),e("li",[v._v("其他：操作数不是数值时，自动使用 "),e("code",[v._v("Number()")]),v._v(" 进行转换后再进行操作")])]),v._v(" "),e("h3",{attrs:{id:"关系操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系操作符"}},[v._v("#")]),v._v(" 关系操作符")]),v._v(" "),e("p",[v._v("("),e("code",[v._v(">")]),v._v(", "),e("code",[v._v(">=")]),v._v(", "),e("code",[v._v("<")]),v._v(", "),e("code",[v._v("<=")]),v._v(", "),e("code",[v._v("==")]),v._v(", "),e("code",[v._v("!=")]),v._v(")：理解为比较数值，"),e("code",[v._v("Number")]),v._v(" 的优先级高，对非数值自动调用 "),e("code",[v._v("Number()")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("两个操作数不同且不是对象，都是使用 "),e("code",[v._v("Number()")]),v._v(" 转换为数值，再比较")]),v._v(" "),e("li",[v._v("原始类型和引用类型比较时，对象类型会依照 "),e("code",[v._v("ToPrimitive")]),v._v(" 规则转换为原始类型")])]),v._v(" "),e("h2",{attrs:{id:"避免使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免使用"}},[v._v("#")]),v._v(" 避免使用")]),v._v(" "),e("ul",[e("li",[v._v("尽量使用 "),e("code",[v._v("===")]),v._v(" 代替 "),e("code",[v._v("==")])])]),v._v(" "),e("h2",{attrs:{id:"应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[v._v("#")]),v._v(" 应用")]),v._v(" "),e("ul",[e("li",[v._v("使用 "),e("code",[v._v("!!variable")]),v._v(" 将变量转换为对应的 "),e("code",[v._v("Boolean")]),v._v(" 类型的值")]),v._v(" "),e("li",[e("code",[v._v("React")]),v._v(" 使用 "),e("code",[v._v("&&")]),v._v(" 作条件渲染")])])])}),[],!1,null,null,null);_.default=d.exports}}]);