## 对比

标签|描述|属性|版本|兼容性
-|-|-|-|-
dir|目录列表|-|<font color="red">HTML5 废弃</font>|-
command|用户可能调用的命令|<font color="orange">checked</font><br><font color="orange">disabled</font><br><font color="orange">icon</font><br><font color="orange">label</font><br><font color="orange">radiogroup</font><br><font color="orange">type</font>|<font color="orange">HTML5</font>|仅 `IE9`
menu|命令列表或菜单|<br><font color="orange">label</font><br><font color="orange">type</font>|<font color="orange">HTML5 重定义</font>|均未支持
ol|有序列表. 列表排序以数字来显示|<font color="orange">reversed</font>|-|均支持
ul|无序列表|-|-|均支持
li|列表项目|-|-|均支持
dl|描述列表|-|-|均支持
dt|描述列表的标题|-|-|均支持
dd|描述列表的内容|-|-|均支持
table|表格|`border`|-|均支持
caption|表格的标题|-|-|均支持
thead|表格头部|-|-|均支持
tbody|表格主体|-|-|均支持
tfoot|表格脚注|-|-|均支持
tr|表格行|-|-|均支持
th|表格头部单元格|`colspan`<br>`rowspan`<br>`headers`<br>`scope`|-|均支持
td|表格主体单元格|`colspan`<br>`rowspan`<br>`headers`<br>`scope`|-|均支持
colgroup|对表格中的列进行组合|`span`|-|均支持
col|规定 `<colgroup>` 内每一列的列属性|`span`|-|均支持


::: tip 备注
+ 表格的大部分属性在 HTML5 中不再支持，建议使用 CSS 实现
+ `<table>`：`HTML5` 仅支持一个 `border` 属性，设置为 `1` 时表示显示边框
+ `<caption>`：可以使用 `CSS` 的 `text-align` 属性设置标题居中，`caption-side` 设置标题显示的位置
+ `<thead>` / `<tbody>` / `<tfoot>`：分别表示表头、表体和脚注，都不是必须的，可以根据需要添加
+ `<tr>`：表格行，用于包含 `<th>` 或 `<td>`
+ `<th>`：表示为粗体居中的文本；`colspan` 属性设置表头单元格横跨的列数，取值：`整数`；`rowspan` 属性设置表头单元格跨越的行数，取值：`整数`；`scope` 属性用于屏幕阅读器，规定表头单元格是否是行、列、行组或列组的头部，取值：`col` / `row` / `colgroup` / `rowgroup`
+ `<td>`：表示为左对齐的普通文本，`colspan` 属性和 `rowspan` 属性与 `<th>` 一致；还有一个 `headers` 属性用于屏幕阅读器，规定表体单元格关联的表头单元格
+ `<colgroup>`：对表格中的列进行组合，可以单独使用或作为 `<col>` 的容器；`span` 属性设置列组应该横跨的列数，可以为多个列快捷设置样式
+ `<col>`：规定 `<colgroup>` 内每一列的列属性；`span` 属性设置列组应该横跨的列数，可以为多个列快捷设置样式
:::