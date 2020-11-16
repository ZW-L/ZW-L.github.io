(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{845:function(a,t,s){"use strict";s.r(t);var e=s(25),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("ul",[s("li",[a._v("光标移动都是在 normal 模式下使用的")]),a._v(" "),s("li",[s("code",[a._v("h")]),a._v("/"),s("code",[a._v("j")]),a._v("/"),s("code",[a._v("k")]),a._v("/"),s("code",[a._v("l")]),a._v("：向 左/下/上/右 移动一次光标，但 "),s("code",[a._v("h")]),a._v("/"),s("code",[a._v("j")]),a._v(" 不能跨行移动")]),a._v(" "),s("li",[a._v("一些系统功能键的移动：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<Enter>: 移动到下一行的第一个非空字符\n<Backspace>: 移动到前一个字符，可跨行移动\n<Space>: 移动到下一个字符，相当于 l\n")])])]),s("ul",[s("li",[s("code",[a._v("``")]),a._v("：返回光标的前一个位置(很方便)")]),a._v(" "),s("li",[a._v("调整光标所在行的位置：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("zz: 将行调整到屏幕中间(z-center)\nzt: 将行调整到屏幕开头(z-top)\nzb: 将行调整到屏幕底部(z-bottom)\n")])])]),s("h2",{attrs:{id:"单词间移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单词间移动"}},[a._v("#")]),a._v(" 单词间移动")]),a._v(" "),s("ul",[s("li",[a._v("单词间的移动：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("w/e：移动到下一个单词的开头/结尾(认定单词以数字、字母、下划线分割)\nW/E：移动到下一个单词的开头/结尾(认定单词以空白符分割)\nb/B：移动到上一个单词的开头\n\n<Shift-#>: 移动到前一个相同的单词，并高亮所有相同单词 \n<Shift-*>: 移动到下一个相同的单词，并高亮所有相同单词 \n")])])]),s("h2",{attrs:{id:"括号间移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#括号间移动"}},[a._v("#")]),a._v(" 括号间移动")]),a._v(" "),s("ul",[s("li",[a._v("括号匹配：要先将光标移动到括号("),s("code",[a._v("(")]),a._v(", "),s("code",[a._v("{")]),a._v(", "),s("code",[a._v("[")]),a._v(")处")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("%：移动到一组括号匹配的位置\n\n如移动前光标在 '(' 则会移动到与之匹配的 ')'，反之\n")])])]),s("h2",{attrs:{id:"行内移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内移动"}},[a._v("#")]),a._v(" 行内移动")]),a._v(" "),s("ul",[s("li",[a._v("移动到行首/行尾：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0/$：移动到行首/行尾\n^/g_：移动到行首/行尾非空字符(空格，tab，换行等)处\n")])])]),s("ul",[s("li",[a._v("还可以移动到当前行的特定字符：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fa/Fa：移动到当前行的下一个/前一个 a 处\nt,/T,：移动到当前行的下一个/前一个 , 的前一个字符\n")])])]),s("h2",{attrs:{id:"快速移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速移动"}},[a._v("#")]),a._v(" 快速移动")]),a._v(" "),s("ul",[s("li",[a._v("更快速的移动：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("gg/G：移动到第一行/最后一行\nH/M/L：移动到页面顶部/中间/尾部\n:2/2G：移动到第二行\n\n页面是指编辑器界面能显示的的最大内容(为一页)\n")])])]),s("ul",[s("li",[a._v("翻页：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<Ctrl-f>/<Ctrl-b>: 向后/前翻一页\n<Ctrl-d>/<Ctrl-u>: 向后/前翻半页\n")])])]),s("h2",{attrs:{id:"查找并移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找并移动"}},[a._v("#")]),a._v(" 查找并移动")]),a._v(" "),s("ul",[s("li",[a._v("正则查找：使用正则匹配后，匹配的内容会高亮")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("?{pattern}: 向前查找\n/{patter}: 向后查找\n\n此时可使用 <Enter> 跳转到当前查找模式的下一个匹配\n")])])]),s("ul",[s("li",[a._v("单词搜索：需要将光标移动到要查找的单词中")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#: 移动到上一个相同的单词\n*: 移动到下一个相同的单词\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("其他")]),a._v(" "),s("ul",[s("li",[a._v("单词界定符：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\\<: 匹配以特定字符开头的单词，如 /\\<pos 会匹配所有以 pos 开头的单词\n\\>: 匹配以特定字符结尾的单词\n")])])]),s("ul",[s("li",[a._v("高亮搜索结果：通过在命令模式设置或 .vimrc 文件中永久设置")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置高亮，设置后再执行搜索时会高亮所有匹配的结果")]),a._v("\n:set hlsearch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 禁用高亮，nohlsearch 的缩写")]),a._v("\n:set noh\n")])])])]),a._v(" "),s("h2",{attrs:{id:"自动补全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动补全"}},[a._v("#")]),a._v(" 自动补全")]),a._v(" "),s("ul",[s("li",[a._v("输入单词后，按下组合键便可以开启提示补全：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<Ctrl-n>：开启/切换到下一个提示\n<Ctrl-p>：开启/切换到上一个提示\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);