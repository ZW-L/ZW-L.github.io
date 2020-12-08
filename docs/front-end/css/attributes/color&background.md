## 颜色

属性|说明|备注
-|-|-
`color`|设置文本颜色。取值: <br><br>`<color>`: 颜色值(hex, rgb, rgba, hsl, hsla)<br><br>`transparent`: 透明|IE9 以下只支持 hex, rgb
`opacity`|设置不透明度。取值：<br><br>`<number>`: <font color="orange">默认 1。</font>取值范围 0~1|IE9 以下不支持

::: tip 注意：
IE9 以下可用滤镜属性实现 `opacity`
:::




## 背景

属性|说明|兼容性
-|-|-
`background`|设置背景。取值: 可一次性设置以下八个属性。|
`background-color`|设置背景色。取值: <br><br>`color`: `<color>`<br><br>`transparent`: <font color="orange">默认值。</font>透明。<br><br>`inherit`: 从父元素继承|IE7 不支持 `inherit`
`background-image`|设置背景图片。取值: <br><br>`url(URL)`: 图像的 URL<br><br>`none`: <font color="orange">默认值。</font>无背景。<br><br>`inherit`: 从父元素继承<br><br>`gradient`: 渐变函数|IE8 不支持设置多个背景图片<br><br>IE9 不支持渐变作为背景图像
`background-repeat`|设置背景图像如何排列填充。取值: <br><br>`repeat`: <font color="orange">默认值。</font>向垂直和水平方向重复<br><br>`repeat-x`: 水平位置会重复背景图像<br><br>`repeat-y`: 垂直位置会重复背景图像<br><br>`no-repeat`: 不重复<br><br>`inherit`: 从父元素继承<br><br>`round`: 自动缩放直至适应且填充满整个容器<br><br>`space`: 以相同的间距平铺且填充满容器或某个方向|IE7 不支持 `inherit`
`background-attachment`|设置背景图像的固定方式。取值: <br><br>`scroll`: <font color="orange">默认值。</font>背景图片随页面的其余部分滚动<br><br>`fixed`: 相对于窗体固定<br><br>`local`: 相对于元素内容固定<br><br>`inherit`: 从父元素继承|IE8 不支持 `local`
`background-position`|设置背景图像的位置。取值: <br><br>`left/center/right` 和 `top/center/bottom` 的九宫格组合<br><br>`x% y%`:<font color="orange">默认值 `(0% 0%)`。</font>以百分比指定<br><br>`pos_x pox_y`: 以长度单位指定<br><br>`inherit`: 从父元素继承|IE8 只支持一个参数
`background-origin`|设置计算 `background-position` 的参考点。取值: <br><br>`padding-box`: <font color="orange">默认值。</font>从 padding 区域开始显示<br><br>`border-box`: 从 border 区域开始显示<br><br>`content-box`: 从 content 区域开始显示|>IE8
`background-clip`|设置背景图像向外裁剪的区域。取值: <br><br>`border-box`: <font color="orange">默认值。</font>从 border 区域开始向外裁剪<br><br>`padding-box`: 从 padding 区域开始向外裁剪<br><br>`content-box`: 从 content 区域开始向外裁剪|>IE8
`background-size`|设置背景图像的尺寸。取值: <br><br>`auto`: <font color="orange">默认值。</font>真实大小<br><br>`<length>`: 分别设置背景图片高度和宽度<br><br>`percentage`: 相对于背景定位区域的百分比分别设置宽高<br><br>`cover`: 等比缩放直至完全覆盖容器(有可能超出容器或显示不全)<br><br>`contain`: 等比缩放至最大宽高(图像始终包含在容器)|>IE8



::: tip 说明
+ `background` 是一个复合属性，可以一次性定义多个上述中以 `background` 为前缀的属性；还可以设置多重背景，它们之间用 `,` 分隔

+ `background-color` 是会被 `background-image` 覆盖的

+ `background-image` 可用一系列的 `gradient()` 渐变函数创建

+ `background-repeat` 属性的值可以有两个，将会分别指定横向和纵向的平铺(`repeat-x` 和 `repeat-y` 除外)

+ `background-position` 属性的值也可以是一个，会应用于横坐标，纵坐标则默认为 `center/50%`

+ `background-size` 属性的值只有一个(除 `cover` 和 `contain`)时，会应用于宽度，高度默认为 `auto`
:::



## 渐变

+ 渐变是 CSS3 新增的属性，可用于绘制背景图片，即作为 `background-image` 的值
+ 不支持 IE9 及更低的浏览器

属性|说明
-|-
`linear-gradient()`|线性渐变。参数: <br><br>`<point>`: <font color="orange">默认从上到下。</font>指定渐变方向<br><br>`<color-stop>`: 渐变颜色(至少两个)
`repeating-linear-gradient()`|重复的线性渐变。<br><br>和线性渐变基本一致，可以构造重复的渐变
`radial-gradient()`|径向渐变。参数: <br><br>`<position>`: <br><br>`<shape><size>`: <br><br>`<shape-size>`:<br><br>`<color-stop>`: 
`repeating-radial-gradient()`|重复的径向渐变。<br><br>和径向渐变基本一致，可以构造重复的渐变


::: tip 备注：
+ `linear-gradient()` 的渐变方向可以为关键字表达(`to bottom`)或`<angle>`(`45deg`)
+ `linear-gradient()` 还可以指定颜色的位置(长度，不允许负值)
:::


### linear-gradient

**语法：** `linear-gradient: 渐变方向? 起止颜色列表`
+ `渐变方向`：默认为从左至右(`to right`)，可以有以下几种形式的取值
  + `to corner`：从左上角到右下角(`to right bottom`)，从上到下(`to bottom`)
  + `angle`：角度，从左上角到右下角(`135deg`)，从上到下(`180deg`)
  + `turn`：与角度类似，从左上角到右下角(`0.375turn`)，从上到下(`0.5turn`)
+ `起止颜色列表`：至少有两个(起始和结束)，它们用逗号隔开，还可以设置中间位置
  + 省略中间位置：`linear-gradient(red, orange, yellow, green, blue)`
  + 设置中间位置：`linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)`
```css
.box {
  height: 100px;
  background-image: linear-gradient(red, orange, yellow, green, blue);
  /* 等同于 */
  background-image: linear-gradient(to right, red, orange, yellow, green, blue);
  /* 等同于 */
  background-image: linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
}
```

::: tip 说明：
+ 线性渐变同样可以有多组，它们用逗号隔开：
```css
.box {
  height: 100px;
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70%),
              linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70%),
              linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70%);
}
```
+ 颜色起始位置和终止位置默认为 0 和 100%
```css
.box {
  height: 100px;
  background: linear-gradient(red, blue);
  /* 等同于 */
  background: linear-gradient(red 0%, blue 100%);
}
```
+ 有一些简写的写法，下列三种写法的效果一样
```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```
:::



### repeating-linear-gradient

**语法：** 与线性渐变基本一样，但
+ 渐变方向的默认角度是从上到下(`to bottom`)
+ 若起始位置为 0，终止位置的长度确定了渐变重复的次数(25% -> 重复四次，10% -> 重复十次)
```css
.box {
  height: 100px;
  background-image: repeating-linear-gradient(to right, red, orange, yellow, green 10%);
}
```
+ 与线性渐变不同，当任一个中间位置大于等于后面的中间位置时，将会忽略后面的设置
```css
.box {
  height: 100px;
  background-image: repeating-linear-gradient(to right, red, orange 10%, yellow, green 10%);
  /* 相当于 */
  background-image: repeating-linear-gradient(to right, red, orange 10%)
}
```


### radial-gradient






### repeating-radial-gradient



