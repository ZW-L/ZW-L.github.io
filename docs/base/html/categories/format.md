## 概述

&emsp;&emsp;删除了 6 个标签，新增了 9 个标签，保留了 23 个标签。

## 删除
+ `<acronym>`：<font color="red">HTML5 不支持</font>。首字母缩写
+ `<big>`：<font color="red">HTML5 不支持</font>。大号文本
+ `<center>`：<font color="red">HTML5 不支持</font>。居中文本
+ `<font>`：<font color="red">HTML5 不支持</font>。定义文本的字体、尺寸、颜色
+ `<strike>`：<font color="red">HTML5 不支持</font>。加删除线的文本
+ `<tt>`：<font color="red">HTML5 不支持</font>。 打字机文本

## 新增

**注：**
+ <font color="red">红色</font>代表 `HTML5` 不再支持
+ <font color="orange">橙色</font>代表 `HTML5` 新增

标签|描述|属性|版本|兼容性
-|-|-|-|-
`<bdi>`|设置脱离其父元素文本方向的文本|-|<font color="orange">HTML5</font>|IE 不支持
`<mark>`|带有记号的文本|-|<font color="orange">HTML5</font>|IE8 及更早不支持
`<meter>`|度量衡，用于已知最大和最小值的度量|<font color="orange">form</font><br><font color="orange">high</font><br><font color="orange">low</font><br><font color="orange">max</font><br><font color="orange">min</font><br><font color="orange">optimum</font><br><font color="orange">value</font><br>|<font color="orange">HTML5</font>|均支持
`<progress>`|进度条|<font color="orange">max</font><br><font color="orange">value</font><br>|<font color="orange">HTML5</font>|IE9 及更早不支持
`<time>`|日期/时间|<font color="orange">datetime</font><br>|<font color="orange">HTML5</font>|均支持
`<wbr>`|约定文本换行的位置|-|<font color="orange">HTML5</font>|IE 不支持
`<ruby>`|ruby 注释（中文注音或字符）|-|<font color="orange">HTML5</font>|IE8 及更早不支持
`<rp>`|不支持 ruby 元素的浏览器所显示的内容|-|<font color="orange">HTML5</font>|IE8 及更早不支持
`<rt>`|字符（中文注音或字符）的解释或发音|-|<font color="orange">HTML5</font>|IE8 及更早不支持

**说明：**
+ `<bdi>`：`bidi` 隔离（Bi-directional Isolation）；设置一段文本，使其脱离其父元素的文本方向设置；在发布用户评论或其他您无法完全控制的内容时，该标签很有用
+ `<mark>`：需要突出显示文本时使用
+ `<meter>`：度量衡，有以下几个属性
  + `form`：取值：form_id。规定 `<meter>` 元素所属的一个或多个表单
  + `high`：取值：number。规定被界定为高的值的范围
  + `low`：取值：number。规定被界定为低的值的范围
  + `min`：取值：number。规定范围的最大值
  + `max`：取值：number。规定范围的最小值
  + `optimum`：取值：number。规定度量的最优值
  + `value`：取值：number。<font color="red">必需。</font>规定度量的当前值
+ `<progress>`：进度条，类似度量衡，但属性只有两个；`max` 属性规定需要完成的值，`value` 属性规定进程的当前值
+ `<time>`：设置该标签让用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果；`datetime` 属性用于规定日期/时间
+ `<wbr>`：(Word Break Opportunity) ，约定在文本中的何处适合添加换行符；如果单词太长，或者担心浏览器会在错误的位置换行，可以使用该标签
+ `<ruby>`：作为 `<rp>` 和 `<rt>` 的容器使用，描述一段 `ruby` 注释（中文注音或字符）
+ `<rp>`：定义不支持 `ruby` 元素的浏览器所显示的内容
+ `<rt>`：由一个或多个需要解释/发音的字符和一个提供该信息的 `<rt>` 元素组成；还可以包含 `<rp>` 元素，定义当浏览器不支持 `ruby` 元素时显示的内容


## 保留

**注：**
+ <font color="red">红色</font>代表 `HTML5` 不再支持
+ <font color="orange">橙色</font>代表 `HTML5` 新增

标签|描述|属性|版本|兼容性
-|-|-|-|-
`<abbr>`|缩写|`title`|-|IE6 及更早不支持
`<address>`|文档作者/拥有者的联系信息|-|-|均支持
`<bdo>`|独立于父元素文本方向的文本|`dir`|-|均支持
`<blockquote>`|块引用|-|-|均支持
`<cite>`|作品标题的引用|-|-|均支持
`<q>`|短引用|-|-|均支持
`<pre>`|预格式块|<font color="red">pre</font>|-|均支持
`<del>`|删除|`cite`<br>`datetime`|-|均支持
`<ins>`|被插入|`cite`<br>`datetime`|-|均支持
`<b>`|粗体文本|-|-|均支持
`<i>`|斜体文本|-|-|均支持
`<s>`|加删除线文本|-|-|均支持
`<u>`|下划线文本|-|-|均支持
`<small>`|小号字体|-|-|均支持
`<sub>`|下标|-|-|均支持
`<sup>`|上标|-|-|均支持
`<em>`|斜体强调|-|-|均支持
`<strong>`|粗体强调|-|-|均支持
`<dfn>`|定义项目|-|-|均支持
`<code>`|计算机代码|-|-|均支持
`<kbd>`|键盘|-|-|均支持
`<samp>`|计算机代码样本|-|-|均支持
`<var>`|变量|-|-|均支持


**说明：**
+ `<abbr>`：将鼠标悬停于该标签包含的字符上方时，会显示它的 `title` 属性设置的文本
+ `<address>` 用于包含一系列的文档作者/拥有者的联系信息，它所包含的文本默认显示为斜体
+ `<bdo>` 可以指定其文本的方向，`dir` 属性的取值分别为：`ltr`(从左到右)，`rtl`(从右到左)
+ `<blockquote>`，`<cite>`，`<q>` 都表示引用：
  + `<blockquote>` 表示块引用，浏览器通常会对他的内容进行缩进
  + `<q>` 表示短的引用，浏览器通常会在它的周围加上引号
  + `<cite>` 在 `HTML5` 中常用于表示作品的标题，显示为斜体
+ `<pre>` 包含的文本可以自由使用空格和换行符，常用于显示代码块，在其中包含众多的 `<code>` 标签
+ `<del>` 和 `<ins>` 通常成对出现，分别表示删除和插入；删除的文本带一条删除线，插入的文本带一条下划线；它们包含两个属性：`cite` 可以指定删除/插入的原因的 URL，`datetime` 指定文本被删除/插入的日期和时间
+ `<b>`，`<i>`，`<s>`，`<small>`，`<u>` 都有其语义化场景：
  + `<b>` 表示为粗体，但是 `<strong>` 也能表示强调的粗体，因此 `<b>` 是一种**备用的选择**
  + `<i>` 表示为斜体，用来表示特别与其他文本的部分，现在多用来表示图标元素
  + `<s>` 对那些不正确、不准确或者没有用的文本进行标识，它与 `<del>` 的视觉效果一样
  + `<small>` 定义小型文本（旁注）
  + `<u>` 定义与常规文本风格不同的文本，它与 `<ins>` 或 `<a>` 一样带下划线，也是一种**备用的选择**
+ `<sub>` 和 `<sup>` 可分别将字符串显示在当前文本流中字符高度的一半为基准线的下方/上方
+ `<em>`、`<strong>`、`<dfn>`、`<code>`、`<kbd>`、`<samp>`、`<var>` 都属于短语类标签，它们都有默认的样式显示，但不要为了使用默认样式而滥用这些标签，应该在需要语义化的场景中使用
  + `<em>` 和 `<strong>` 都有强调意义，区别是 `<em>` 默认显示为斜体，而 `<strong>` 显示为粗体
  + `<dfn>`、`<var>` 和 `<em>` 一样默认显示为斜体
  + `<code>`、`<kbd>`、`<samp>` 都显示为正常的文本