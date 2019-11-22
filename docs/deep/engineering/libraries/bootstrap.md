## 全局 CSS 样式

### 1. `viewport`

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

### 2.布局

```html
<!-- 用于固定宽度并支持响应式布局的容器 -->
<div class="container">
  ...
</div>
<!-- 用于 100% 宽度，占据全部视口（viewport）的容器 -->
<div class="container-fluid">
  ...
</div>
```

注意

+ 由于 `padding` 等属性的原因，这两种 容器类不能互相嵌套。

### 3.栅格系统

1）使用方式

+ 行 `row` 必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）
+ 通过 `row` 在水平方向创建一组列 `column`
+ 栅格系统中的列是通过指定 1 到 12 的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 `.col-xs-4` 来创建
+ 如果一行（row）中包含了的列（column）大于 12，多余的列（column）所在的元素将被作为一个整体另起一行排列
+ 通过为列（column）设置 `padding` 属性，从而创建列与列之间的间隔（gutter）。通过为 `.row` 元素设置负值 `margin` 从而抵消掉为 `.container` 元素设置的 `padding`，也就间接为行（row）所包含的列（column）抵消掉了`padding`

2）栅格参数

|                       | 超小屏幕 手机 (<768px)     | 小屏幕 平板 (≥768px)                               | 中等屏幕 桌面显示器 (≥992px) | 大屏幕 大桌面显示器 (≥1200px) |
| --------------------- | -------------------------- | -------------------------------------------------- | ---------------------------- | ----------------------------- |
| 栅格系统行为          | 总是水平排列               | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列 |                              |                               |
| `.container` 最大宽度 | None （自动）              | 750px                                              | 970px                        | 1170px                        |
| 类前缀                | `.col-xs-`                 | `.col-sm-`                                         | `.col-md-`                   | `.col-lg-`                    |
| 列（column）数        | 12                         |                                                    |                              |                               |
| 最大列（column）宽    | 自动                       | ~62px                                              | ~81px                        | ~97px                         |
| 槽（gutter）宽        | 30px （每列左右均有 15px） |                                                    |                              |                               |
| 可嵌套                | 是                         |                                                    |                              |                               |
| 偏移（Offsets）       | 是                         |                                                    |                              |                               |
| 列排序                | 是                         |                                                    |                              |                               |

3）**类名**

+ 创建行：`row`
+ 创建列：`col-xs/sm/md/lg-*` (*为1~12)
+ 列偏移：`col-xs/sm/md/lg-offset-*` (*为偏移的列数)
+ 列排序：`col-xs/sm/md/lg-push-*` & `col-xs/sm/md/lg-pull-*`
+ 列嵌套：在列中使用 `row`



### 4.排版

**类名**

+ 副标题：`<small>` 或 `.small`

+ 段落 `<p> ` 突出显示：`.lead`

+ 内联文本：相当于原生标签

  + 背景高亮：`<mark>`
  + 删除文本：`<del>`
  + 无用文本：`<s>`
  + 插入文本：`<ins>`
  + 下划线：`<u>`
  + 小文本：`<small> ` 或 `.small`
  + 着重：`<strong>`
  + 斜体：`<em>`

+ 对齐：`text-left/right/center/justify/nowrap`

+ 大小写：`text-lowercase/uppercase/capitalize`

+  `<abbr>` 缩略语：`.initialism `

+ 地址：行结尾添加 `<br>`

+ 引用 `<blockquote> `

  1. 添加 `<footer> ` 和 `<site>`

  ```html
  <blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
  ```

  2. 右对齐：`.blockquote-reverse` 

+ 列表

  + 无样式列表：`.list-unstyled` （用于  `<ul> ` ）
  + 内联列表：`list-inline` （用于 `<ul>` ）
  + 描述列表：`.dl-horizontal` （用于 `<dl>` ）

### 5.代码

**类名**

+ 内联代码：`<code>`
+ 用户输入：`<kbd>`
+ 代码块：`<pre>` （ `<` 和 `>`要转义 ）
+ 变量：`<var>`
+ 程序输出：`<samp>`

### 6.表格

**类名**

+ table 样式：`.table`
+ 条纹：`.table-striped`
+ 边框：`.table-bordered`
+ 鼠标悬停：`.table-hover`
+ 紧凑：`.table-condensed`
+ 状态：`.active` / `success` / `info` / `warning` / `danger` 
+ 响应式：`.table-responsive`

**注意**

+ 表格类基本上都用于 `<table>` ，状态类一般用于改变 `<td>` 、`<tr>` 的颜色 

### 7. 表单

**类名**

+ 组织 `label` 和 输入框/选择框：`.form-group` （父级 div 包裹元素 ）
+ 内联表单： `.form-inline` （ form 元素）
+ 输入框组：`.input-group` （父级 div 包裹元素）
+ addon：`.input-group-addon` （单个元素）
+ 水平排列：`.form-horizontal`  （相当于 `row`， 用于 form 元素）
+ 占据整行：`.form-control` （占据100%宽度的表单元素）
+ 默认。多行文本行数，设置 `rows` 属性
+ 单选/多选
  + 对齐：`checkbox/radio` （每个单选/多选框的 div 包裹元素）
  + 内联：`.checkbox-inline/.radio-inline` （用于 label ）
+ 静态控件：`.form-control-static` （用于纯文本在表单中排列）
+ 默认。焦点状态：移除一些 元素的 `outline` ，并添加了 `:hover` 时的 `box-shadow`
+ 默认。禁用状态：输入框设置为 `disabled` 时的状态
+ 默认。fieldset 的 `disabled`
+ 默认。`readonly` 状态
+ 帮助文本：`.help-block` （浅色的文本）
+ 校验状态：`.has-warning/error/success` （父类标签，用于改变整个控件颜色状态）
+ 额外的图标：`.has-feedback` （用于父类包裹元素）、`.form-control-feedback` （用于子元素，还需要设置对应图标类）
+ 控件尺寸：
  + 高度：`.input-sm/lg`
  + 宽度：`.col-*-*`
+ 表单组尺寸：`.form-group-sm/lg`



### 8.按钮

**类名**

+ 基础类：`btn`
+ 预定义样式：`btn-default/primary/success/info/warning/danger/link`
+ 尺寸：`btn-xs/sm/lg`
+ 块级：`btn-block` （延伸至父元素的100%宽度）
+ 激活状态：`.active`
+ 禁用状态：`.disabled`



**注意**

+ 为 `<a>`、`<button>` 或 `<input>` 元素添加按钮类（button class）即可使用 Bootstrap 提供的样式
+ 虽然按钮类可以应用到 `<a>` 和 `<button>` 元素上，但是，导航和导航条组件只支持 `<button>` 元素
+ 如果 `<a>` 元素被作为按钮使用 -- 并用于在当前页面触发某些功能 -- 而不是用于链接其他页面或链接当前页面中的其他部分，那么，务必为其设置 `role="button"` 属性



### 9.图片

**类名**

+ 响应式：`.img-responsive`

+ 图片居中：`.center-block`

+ 图片形状：`.img-rounded/circle/thumbnail`


### 10.辅助类

**类名**

+ 情景文本：`.text-muted/primary/success/info/warning/danger`
+ 情景背景色：`.bg-primary/success/info/warning/danger`
+ 关闭按钮：`.close`
+ 三角符号：`.caret`
+ 快速浮动：`.pull-right/left` （不能用于导航条中）
+ 内容块居中：`.center-block`
+ 清除浮动：`.clearfix`
+ 显示/隐藏：`.show/.hidden`
+ 屏幕阅读器：`.sr-only` / `.sr-only-focusable`
+ 图片替换：`.text-hide`



## 组件

### 1.glyphicon  图标

**类名**

+ 基础：`.glyphicon`  
+ 更多：`.glyphicon-*`


### 2.按钮组

**类名**

+ 基础：`.btn-group` （按钮的 div 包裹元素）
+ 按钮工具栏：`.btn-toolbar` （按钮组的 div 包裹元素）
+ 尺寸：`.btn-group-xs/sm/lg`
+ 垂直排列：`.btn-group-vertical`
+ 两端排列：`.btn-group-justified`

### 3.输入框组

**类名**

+ 基础：`.input-group`（输入框的 div 包裹元素）
+ 前/后缀：`.input-group-addon`
+ 尺寸：`.input-group-sm/lg`
+ 其他：`.input-group-btn`


### 4.导航

**类名**

+ 基础：`.nav`
+ 标签页：`.nav-tabs`
+ 胶囊式：`.nav-pills`
+ 垂直方向：`.nav-stacked`
+ 两端对齐：`.nav-justified`
+ 禁用：`.disabled`


### 5.导航条

**类名**

+ 基础：`.navbar`
+ 样式：`.navbar-default`
+ 头部：`.navbar-header`
+ 品牌图标：`.navbar-brand`
+ 表单：`.navbar-form`
+ 按钮：`.navbar-btn`
+ 文本：`.navbar-text`
+ 非导航链接：`.navbar-link`
+ 排列：`.navbar-left/right`
+ 固定：`.navbar-fixed-top/bottom`
+ 静止在顶部：`.navbar-static-top`
+ 反色：`.navbar-inverse`


### 6.路径导航

**类名**

+ 面包屑：`.breadcrumb` 


### 7.分页

**类名**

+ 基础：`.pagination`
+ 状态：`.active` /  `disabled` （用于 li ）
+ 尺寸：`.pagination-xs/lg`
+ 翻页：`.pager` 
+ 翻页两端对齐：`.previous` /  `.next` （用于 li ）


### 8.标签

**类名**

+ 基础：`.label`
+ 背景色：`.label-default/primary/success/info/warning/danger`


### 9.徽章

**类名**

+ 基础：`.badge` （用于 span 并嵌套于其他标签中）


### 10.巨幕

**类名**

+ 基础：`.jumbotron`

**注意**

+ 如果需要让巨幕组件的宽度与浏览器宽度一致并且没有圆角，请把此组件放在所有 `.container` 元素的外面，并在组件内部添加一个 `.container` 元素


### 11.页头

**类名**

+ 基础：`.page-header**`**

**注意**

+ 页头组件能够为 `h1` 标签增加适当的空间，并且与页面的其他部分形成一定的分隔。它支持 `h1` 标签内内嵌 `small` 元素的默认效果，还支持大部分其他组件（需要增加一些额外的样式）


### 12.进度条

**类名**

+ 基础：`.progress`
+ 进度条：`.progress-bar`
+ 默认。设置当前进度，使用 `style="width: 60%;"`，还可以设置 `min-width`
+ 情景色：`.progress-bar-success/info/warning/danger`
+ 条纹：`.progress-bar-striped`
+ 动画：`.active`
+ 堆叠：将多个 `.progress-bar` 的元素放于同一个 `.progress` 元素中


### 13.列表组

**类名**

+ 父元素：`.list-group`
+ 子元素：`.list-group-item`
+ 禁用/激活：`.disabled` / `.active`
+ 情景：`.list-group-item-success/info/warning/danger`

### 14.面板

**类名**

+ 基础：`.panel`  （父元素）
+ 情景：`.panel-default/primary/success/info/warning/danger`
+ 分级：`.panel-heading/body/footer`  / `.panel-title`（子元素）
+ 其他：插入表格 / 列表组 


### 15.Well

**类名**

+ 基础：`.well`
+ 尺寸：`.well-sm/lg`