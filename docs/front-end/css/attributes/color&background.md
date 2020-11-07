---
sidebarDepth: 2
---


## 颜色

### 属性说明

属性|说明|备注
-|-|-
`color`|设置文本颜色。取值: <br>`<color>`: 颜色值(hex, rgb, rgba, hsl, hsla)<br>`transparent`: 透明|IE9 以下只支持 hex, rgb
`opacity`|设置不透明度。取值：<br>`<number>`: <font color="orange">默认 1。</font>取值范围 0~1|IE9 以下不支持

::: warning 注意：
IE9 以下 不支持 `opacity` ，但可用滤镜属性实现
:::






## 背景

### 属性说明

属性|说明|兼容性
-|-|-
`background`|设置背景。取值: 可一次性设置以下八个属性。|
`background-color`|设置背景色。取值: <br>`color`: `<color>`<br>`transparent`: <font color="orange">默认值。</font>透明。<br>`inherit`: 从父元素继承|IE7 不支持 `inherit`
`background-image`|设置背景图片。取值: <br>`url(URL)`: 图像的 URL<br>`none`: <font color="orange">默认值。</font>无背景。<br>`inherit`: 从父元素继承<br>`gradient`: 渐变函数|IE8 不支持设置多个背景图片<br>IE9 不支持渐变作为背景图像
`background-repeat`|设置背景图像如何排列填充。取值: <br>`repeat`: <font color="orange">默认值。</font>向垂直和水平方向重复<br>`repeat-x`: 水平位置会重复背景图像<br>`repeat-y`: 垂直位置会重复背景图像<br>`no-repeat`: 不重复<br>`inherit`: 从父元素继承<br>`round`: 自动缩放直至适应且填充满整个容器<br>`space`: 以相同的间距平铺且填充满容器或某个方向|IE7 不支持 `inherit`
`background-attachment`|设置背景图像的固定方式。取值: <br>`scroll`: <font color="orange">默认值。</font>背景图片随页面的其余部分滚动<br>`fixed`: 相对于窗体固定<br>`local`: 相对于元素内容固定<br>`inherit`: 从父元素继承|IE8 不支持 `local`
`background-position`|设置背景图像的位置。取值: <br>`left/center/right` 和 `top/center/bottom` 的九宫格组合<br>`x% y%`:<font color="orange">默认值 `(0% 0%)`。</font>以百分比指定<br>`pos_x pox_y`: 以长度单位指定<br>`inherit`: 从父元素继承|IE8 只支持一个参数
`background-origin`|设置计算 background-position 的参考点。取值: <br>`padding-box`: <font color="orange">默认值。</font>从 padding 区域开始显示<br>`border-box`: 从 border 区域开始显示<br>`content-box`: 从 content 区域开始显示|>IE8
`background-clip`|设置背景图像向外裁剪的区域。取值: <br>`border-box`: <font color="orange">默认值。</font>从 border 区域开始向外裁剪<br>`padding-box`: 从 padding 区域开始向外裁剪<br>`content-box`: 从 content 区域开始向外裁剪|>IE8
`background-size`|设置背景图像的尺寸。取值: <br>`auto`: <font color="orange">默认值。</font>真实大小<br>`<length>`: 分别设置背景图片高度和宽度<br>`percentage`: 相对于背景定位区域的百分比分别设置宽高<br>`cover`: 等比缩放直至完全覆盖容器(有可能超出容器或显示不全)<br>`contain`: 等比缩放至最大宽高(图像始终包含在容器)|>IE8
`linear-gradient()`|线性渐变。参数: <br>`<point>`: <font color="orange">默认从上到下。</font>指定渐变方向，可以为关键字表达(`to bottom`)或`<angle>`(`45deg`)<br>`<color-stop>`: 渐变颜色(至少两个)，还可以指定颜色的位置(长度，不允许负值)|>IE9
`repeating-linear-gradient()`|重复的线性渐变。参数: <br>和线性渐变基本一致，但是渐变颜色后面的长度表示计算后的重复次数|>IE9
`radial-gradient()`|径向渐变。参数: <br>`<position>`: <br>`<shape><size>`: <br>`<shape-size>`:<br>`<color-stop>`: |>IE9
`repeating-radial-gradient()`|重复的径向渐变。参数: <br>和线性渐变基本一致，|>IE9


::: tip 说明
+ `background` 是一个复合属性，可以一次性定义多个上述中以 `background` 为前缀的属性；还可以设置多重背景，它们之间用 `,` 分隔
+ `background-color` 是会被 `background-image` 覆盖的
+ `background-image` 可用一系列的 `gradient()` 渐变函数创建
+ `background-repeat` 属性的值可以有两个，将会分别指定横向和纵向的平铺(`repeat-x` 和 `repeat-y` 除外)
+ `background-position` 属性的值也可以是一个，会应用于横坐标，纵坐标则默认为 `center/50%`
+ `background-size` 属性的值只有一个(除 `cover` 和 `contain`)时，会应用于宽度，高度默认为 `auto`
:::