## 列表

属性|说明|兼容性
-|-|-
`list-style`|复合属性，设置列表项目样式|All
`list-style-image`|设置列表标记为指定图像，取值：<br><font color="orange">none</font><br>`<url>`|All
`list-style-position`|指定图像的列表项标记的排列方式，取值：<br><font color="orange">outside</font><br>inside|All
`list-style-type`|设置对象的列表项的预设标记，取值：<br><font color="orange">disc</font><br>circle<br>square<br>decimal<br>lower-roman<br>upper-roman<br>lower-alpha<br>upper-alpha<br>none<br>armenian<br>cjk-ideographic<br>georgian<br>lower-greek<br>hebrew<br>hiragana<br>hiragana-iroba<br>kataKana<br>kataKana-iroba<br>lower-latin<br>upper-latin|All

::: warning 注意：
+ list-style 属性可以不按照顺序，而且不限制必须设置三个属性(未设置的属性均有默认值)
+ 上述属性都是在 `<ol>` 或 `<ul>` 元素下设置，而不是 `<li>`
:::


## 表格

属性|说明|兼容性
-|-|-
`table-layout`|设置表格的布局算法，取值：<br><font color="orange">auto</font><br>fixed|All
`table-collapse`|设置表格行和单元格边框是否合并，取值：<br><font color="orange">seperate</font><br>collapse|All
`border-spacing`|指定行和单元格在横/纵向上的间距，取值：<br><font color="orange">0</font><br>`<length>`{1, 2}|>IE7
`caption-side`|设置表格的标题显示位置，取值：<br><font color="orange">top</font><br>right<br>bottom<br>left|>IE7
`empty-cells`|设置空单元格是否显示，取值：<br><font color="orange">show</font><br>hide|>IE7