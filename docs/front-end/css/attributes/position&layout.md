## 定位

**CSS 属性：**

属性|说明|兼容性
-|-|-
`position`|设置定位方式。取值：<br>`static`: <font color="orange">默认值。</font>静态定位，对象遵循正常文档流<br>`relative`: 相对定位，对象遵循正常文档流<br>`absolute`: 绝对定位，对象脱离正常文档流<br>`fixed`: 固定定位，对象脱离正常文档流|IE6 不支持 fixed
`z-index`|设置对象的层叠优先级。取值: <br>`auto`: <font color="orange">默认值。</font>遵循父对象的行为。<br>`<integer>`: 整数，可为负值|-
`top`<br>`right`<br>`bottom`<br>`left`|设置对象相对其最近定位父元素顶部的偏移。取值: <br>`auto`: <font color="orange">默认值。</font>无特殊定位，根据 HTML 定位规则在文档流中分配。<br>`<length>`: 长度，可以为负值。<br>`<percentage>`: 百分比，可以为负值。|-


::: warning 说明
+ `z-index`：仅当 `position` 属性值不是 `static` 时生效，可以取负值。
+ `top`/`right`/`bottom`/`left`：仅当 `position` 属性值不是 `static` 时生效，可以取负值。
:::




## 布局

**CSS 属性：**

属性|说明|兼容性
-|-|-
`display`|设置对象的显示方式。取值: <br>`none`: 隐藏对象，不占有其位置。<br>`inline`: 内联元素。<br>`block`: 块级元素。<br>`inline-block`: 内联块级元素。<br>`list-item`: 列表项目。<br>`table`: 块级元素的表格，类似 `<table>`。<br>`inline-table`: 内联元素的表格。<br>`table-caption`: 表格标题，类似`<caption>`。<br>`table-cell`: 表格单元格，类似 `<td>`。<br>`table-row`: 表格行，类似 `<tr>`。<br>`table-header-group`: 表格标题组，类似 `<thead>`。<br>`table-row-group`: 表格行组，类似 `<tbody>`。<br>`table-footer-group`: 表格脚注组，类似 `<tfoot>`。<br>`table-column`: 表格行，类似 `<col>`。<br>`table-column-group`: 表格行组，类似 `<colgroup>`。<br>`compact`: <br>`run-in`: |-
`float`|设置对象的浮动方式。取值: <br>`none`: <font color="orange">默认值。</font>不浮动。<br>`left`: 左浮动。<br>`right`: 右浮动。|-
`clear`|指定不允许有浮动的边。取值: <br>`none`: <font color="orange">默认值。</font><br>`left`: 不允许左侧有浮动元素。<br>`right`: 不允许右侧有浮动元素。<br>`both`: 两侧均不允许有浮动元素。|-
`visibility`|设置元素的显示方式。取值: <br>`visible`: <font color="orange">默认值。</font>元素可见。<br>`hidden`: 元素不可见，但仍占有其位置。<br>`collapse`: 元素被折叠，常用于折叠表格的行或列。|IE6 不支持 collapse
`clip`|将对象进行剪切|<font color="red">已废弃。</font>
`clip-path`|创建一个只有元素的部分区域可以显示的剪切区域|-
`overflow`<br>`overflow-x`<br>`overflow-y`|设置对象内容溢出的处理方式。取值: <br>`visible`: <font color="orange">默认值。</font>元素可见，但会溢出。<br>`hidden`: 超出部分隐藏。<br>`scroll`: 超出部分可滚动，出现滚动条。<br>`auto`: 自动添加滚动条(`body` 和 `textarea` 的默认值)。|-


::: warning 说明
+ `display`: 不同元素的 `display` 属性有不同的默认值。
+ `overflow`: `body` 和 `textarea` 默认值为 `auto`，在溢出时自动出现滚动条。
+ `display: none;` 和 `visibility: hidden;` 取使元素不可见，区别是 `hidden` 的元素仍占有空间。
:::