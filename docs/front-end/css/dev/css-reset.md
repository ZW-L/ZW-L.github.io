---
sidebarDepth: 2
---

## 为什么要初始化样式

+ 减少浏览器差异带来的影响(不同浏览器对某些标签的样式有不同的表现)
+ 对初始样式进行把控，减少重复代码，提高编写代码时的效率


### 标签有默认样式

```css
li {display: list-item } /*默认以列表显示*/` 
head {display: none } /*默认不显示*/
table {display: table } /*默认为表格显示*/
tr {display: table-row } /*默认为表格行显示*/
thead {display: table-header-group } /*默认为表格头部分组显示*/
tbody {display: table-row-group } /*默认为表格行分组显示*/
tfoot {display: table-footer-group } /*默认为表格底部分组显示*/
col {display: table-column } /*默认为表格列显示*/
colgroup {display: table-column-group } /*默认为表格列分组显示*/
td, th { display:table-cell; } /*默认为单元格显示*/
caption {display: table-caption } /*默认为表格标题显示*/
th {font-weight: bolder; text-align: center } /*默认为表格标题显示，呈现加粗居中状态*/
caption {text-align: center } /*默认为表格标题显示，呈现居中状态*/
body {margin: 8px; line-height: 1.12 }
h1 {font-size: 2em; margin: .67em 0 }
h2 {font-size: 1.5em; margin: .75em 0 }
h3 {font-size: 1.17em; margin: .83em 0 }
h4, p,blockquote, ul, fieldset, form, ol, dl, dir, menu { margin: 1.12em 0 }
h5 {font-size: .83em; margin: 1.5em 0 }
h6 {font-size: .75em; margin: 1.67em 0 }
h1, h2,h3, h4, h5, h6, b,strong { font-weight: bolder }
blockquote{ margin-left: 40px; margin-right: 40px }
i, cite,em,var, address { font-style: italic }
pre, tt,code, kbd, samp { font-family: monospace }
pre {white-space: pre }
button,textarea, input, object, select { display:inline-block; }
big {font-size: 1.17em }
small,sub, sup { font-size: .83em }
sub {vertical-align: sub }/*定义sub元素默认为下标显示*/
sup {vertical-align: super }/*定义sub元素默认为上标显示*/
table {border-spacing: 2px; }
thead,tbody, tfoot { vertical-align: middle }/*定义表头、主体表、表脚元素默认为垂直对齐*/
td, th {vertical-align: inherit }/*定义单元格、列标题默认为垂直对齐默认为继承*/
s, strike,del { text-decoration: line-through }/*定义这些元素默认为删除线显示*/
hr {border: 1px inset }/*定义分割线默认为1px宽的3D凹边效果*/
ol, ul,dir, menu, dd { margin-left: 40px }
ol {list-style-type: decimal }
ol ul, ul, ol, ul ul, ol ol { margin-top: 0; margin-bottom: 0 }
u, ins {text-decoration: underline }
br:before{ content: "A" }
```


### 标签会自带属性

```css
:before, :after { white-space: pre-line }
center { text-align: center }
abbr, acronym { font-variant: small-caps; letter-spacing: 0.1em }
:link, :visited { text-decoration: underline }
:focus { outline: thin dotted invert }
/* Beginbidirectionality settings (do not change) */
BDO[DIR="ltr"] { direction: ltr; unicode-bidi: bidi-override }
BDO[DIR="rtl"] { direction: rtl; unicode-bidi: bidi-override }
*[DIR="ltr"] { direction: ltr; unicode-bidi: embed }
*[DIR="rtl"] { direction: rtl; unicode-bidi: embed }
@mediaprint { /*定义标题和列表默认的打印样式*/
h1 { page-break-before: always }
h1, h2,h3, h4, h5, h6 { page-break-after: avoid }
ul, ol, dl{ page-break-before: avoid }
```


### 标签在不同浏览器的表现不一致

+ 基本上都不一致，如 IE 和 Firefox 的 `margin` 不一致





## 方案

### 最简单的初始化

```css
* { padding: 0; margin: 0; }
```


### 淘宝

```css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form,
fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6 { font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; }
```


### Yahoo

```css
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre, 
form,fieldset,input,textarea,p,blockquote,th,td {padding:0;margin:0;} 
table {border-collapse:collapse;border-spacing:0;} 
fieldset,img {border:0;} 
address,caption,cite,code,dfn,em,strong,th,var {font-weight:normal;font-style:normal;} 
ol,ul {list-style: none;} 
caption,th {text-align:left;} 
h1,h2,h3,h4,h5,h6 {font-weight:normal;font-size:100%;} 
q:before,q:after {content:'';} 
abbr,acronym {border: 0;}
```



## 可继承 & 不可继承的样式

+ 大多数样式是不可继承的，但所有元素都可以继承这两个样式：`visibility`/`cursor`
+ 块状元素可继承：`text-indent`/`text-align`
+ 内联元素可继承较多类型的样式：
  + 字体类样式：`font`/`font-family`/`font-size`/`font-style`/`font-variant`/`font-weight`
  + 文本颜色、描述等：`color`/`text-decoration`/`text-transform`/`direction`
  + 词间间隔、行高等：`letter-spacing`/`word-spacing`/`white-space`/`line-height`
+ 列表元素可继承：`list-style`/`list-style-type`/`list-style-position`/`list-style-image`
+ 表格元素可继承：`border-collapse`


::: tip 备注：
+ 样式继承是为了能写更少的 CSS，因此字体样式、文本样式等都是可继承的；而一些布局样式(`margin`, `padding`, `box-sizing` 等)都是不可继承的，否则容易打乱页面布局，或者在 js 中容易触发回流
:::
