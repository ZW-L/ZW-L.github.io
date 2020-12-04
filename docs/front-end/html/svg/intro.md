---
sidebarDepth: 2
---

## 介绍

+ SVG (Scalable Vector Graphics)可伸缩矢量图形，在放大或改变尺寸的情况下其图形质量不会有损失
+ SVG 使用 XML 格式定义，是万维网联盟的标准
+ SVG 可通过文本编辑器来创建和修改，可被搜索、索引、脚本化或压缩



## 对比 Canvas

|Canvas|SVG|
|-|-|
|依赖分辨率|不依赖分辨率|
|不支持事件处理器|支持事件处理器|
|弱的文本渲染能力|适合带有大型渲染区域的应用(如谷歌地图)|
|能够以 .png 或 .jpg 格式保存结果图像|复杂度高会减慢渲染速度(过度使用 DOM)|
|适合图像密集型的游戏，许多对象会被频繁重绘|不适合游戏应用|




## 元素

+ SVG 由特殊的容器标签(`<svg>`)包裹，其子元素又是一系列的 svg 元素标签，[标签元素参考](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
+ 本文档将元素按照以下分类：

|类别|列表|
|-|-|
|容器|[svg](./container.md#svg), [a](./container.md#a), [g](./container.md#g), [defs](./container.md#defs), [marker](./container.md#marker), [mask](./container.md#mask), [pattern](./container.md#pattern), [switch](./container.md#switch), [symbol](./container.md#symbol), [use](./container.md#use)|
|形状和路径|[rect](./shape.md#rect), [circle](./shape.md#circle), [ellipse](./shape.md#ellipse), [image](./shape.md#image), [line](./shape.md#line), [path](./shape.md#path), [polygon](./shape.md#polygon), [polyline](./shape.md#polyline)|
|特效和动画|[stop](./effect&animation.md#stop), [linearGradient](./effect&animation.md#linearGradient), [radialGradient](./effect&animation.md#radialGradient), [animation](./effect&animation.md#animation), [animateMotion](./effect&animation.md#animateMotion), [animateTransform](./effect&animation.md#animateTransform), [discard](./effect&animation.md#discard), [mpath](./effect&animation.md#mpath), [set](./effect&animation.md#set)|
|过滤器|[filter](./filter#filter), ...|
|其他|[title](./other.md#title), [metadata](./other.md#metadata), [desc](./other.md#desc), [text](./other.md#text), [textPath](./other.md#textPath), [tspan](./other.md#tspan), [clipPath](./other.md#clipPath), [foreignObject](./other.md#foreignObject), [script](./other.md#script), [style](./other.md#style)|





## 属性

+ 每个 SVG 元素标签除了拥有 HTML 标签的部分属性外，还拥有自身的特殊属性
+ 由于属性过多，这里只对属性进行简要说明，详细参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)




## 原理

SVG 元素可对图像进行无损缩放的主要原因是 `<svg>` 元素的两个属性：
+ `viewBox`：描述视口盒子
+ `preserveAspectRatio`：设置缩放的模式


::: tip 术语约定：
+ 画布：svg 通过设置 weight/height 创建的区域
+ 视口：即 viewBox
:::


### viewBox

+ 分别在不同尺寸的 svg 画布中画一个正方形：
::: details 点击查看代码：
```html
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="200px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="200px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="100px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="50" height="50"></rect>
</svg>
```
:::

<Base-SvgDemo>
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="200px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="200px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
</Base-SvgDemo>

::: tip 可以看出：
+ 当 svg 画布的 w/h 比例和 viewBox 中定义的 w/h 比例一致时，viewBox 会占据整个画布
+ 否则，它会根据一个规则来处理图像的显示，而这个规则由 `preserveAspectRatio` 属性定义
:::

+ viewBox 的前两个值表示其原点(默认为 0,0)的坐标；修改后会使整个 viewBox 发生偏移，超出画布的部分会隐藏：
::: details 点击查看代码：
```html
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <!-- 画布左上角为 (0, 0) -->
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="100px" height="100px" viewBox="-50 -50 100 100" style="background: #ccc;">
  <!-- 画布左上角为 (-50, -50) -->
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
```
:::

<Base-SvgDemo>
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <!-- 画布左上角为 (0, 0) -->
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="100px" height="100px" viewBox="-50 -50 100 100" style="background: #ccc;">
  <!-- 画布左上角为 (-50, -50) -->
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
</Base-SvgDemo>


+ viewBox 的后两个值表示一个基准，svg 的子元素中表示长度的值都以其作为标准：
::: details 点击查看代码：
```html
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <!-- 宽高等于 viewBox，因此会占据整个 viewBox -->
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <!-- 只会占据 viewBox 的一部分 -->
  <rect x="0" y="0" width="50" height="50"></rect>
</svg>
```
:::

<Base-SvgDemo>
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
<svg width="100px" height="100px" viewBox="0 0 100 100" style="background: #ccc;">
  <rect x="0" y="0" width="50" height="50"></rect>
</svg>
</Base-SvgDemo>



### preserveAspectRatio

+ 参考 [MDN viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) 的一个例子，对比 `preserveAspectRatio` 取不同值时的结果：
::: details 点击查看代码：
```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;">
  <defs>
      <path id="smiley" fill="yellow" stroke="black" stroke-width="3"
        d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
<!-- (width>height) meet -->
<text>(width>height) meet</text>
<br>
<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMinYMid meet" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMaxYMid meet" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
<!-- (width<height) meet -->
<br>
<text>(width&lt;height) meet</text>
<br>
<svg class="svg-item" preserveAspectRatio="xMidYMin meet" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMidYMax meet" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
<!-- (width>height) slice -->
<br>
<text>(width>height) slice</text>
<br>
<svg class="svg-item" preserveAspectRatio="xMidYMin slice" viewBox="0 0 100 100" width="100"  height="50"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" width="100"  height="50"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMidYMax slice" viewBox="0 0 100 100" width="100"  height="50"><use href="#smiley" /></svg>
<!-- (width<height) slice -->
<br>
<text>(width&lt;height) slice</text>
<br>
<svg class="svg-item" preserveAspectRatio="xMinYMid slice" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
<svg class="svg-item" preserveAspectRatio="xMaxYMid slice" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
<!-- none -->
<br>
<text>none</text>
<br>
<svg class="svg-item" preserveAspectRatio="none" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
</svg>
```
:::

<Base-SvgDemo height="auto">
  <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;">
    <defs>
        <path id="smiley" fill="yellow" stroke="black" stroke-width="3"
          d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
    </defs>
  </svg>
  <!-- (width>height) meet -->
  <span>(width>height) meet</span>
  <br>
  <svg class="svg-item" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMinYMid meet" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMaxYMid meet" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
  <!-- (width<height) meet -->
  <br>
  <span>(width&lt;height) meet</span>
  <br>
  <svg class="svg-item" preserveAspectRatio="xMidYMin meet" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMidYMax meet" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
  <!-- (width>height) slice -->
  <br>
  <span>(width>height) slice</span>
  <br>
  <svg class="svg-item" preserveAspectRatio="xMidYMin slice" viewBox="0 0 100 100" width="100"  height="50"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" width="100"  height="50"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMidYMax slice" viewBox="0 0 100 100" width="100"  height="50"><use href="#smiley" /></svg>
  <!-- (width<height) slice -->
  <br>
  <span>(width&lt;height) slice</span>
  <br>
  <svg class="svg-item" preserveAspectRatio="xMinYMid slice" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
  <svg class="svg-item" preserveAspectRatio="xMaxYMid slice" viewBox="0 0 100 100" width="50"  height="100"><use href="#smiley" /></svg>
  <!-- none -->
  <br>
  <span>none</span>
  <br>
  <svg class="svg-item" preserveAspectRatio="none" viewBox="0 0 100 100" width="100" height="50"><use href="#smiley" /></svg>
</Base-SvgDemo>

+ `preserveAspectRatio` 是一个由两个值组成的字符串，语法类似： `<align> [<meetOrSlice>]`，其中
  + `<align>`：选择对齐方式，其中 `xMidYMid` 表示 viewBox 的中心与画布的中心对齐，依次类推
  + `<meetOrSlice>`：meet 表示包含完整图像，而 slice 表示将切割图像
+ meet 会以画布的短边为基准去成像，因此画布始终包含完整图像
+ slice 会以画布的长边为基准去成像，因此画布始终不能包裹整个图像
+ 当 `preserveAspectRatio` 取值为 none 时，最终成像会包裹完整图像，但会拉伸变形
+ 由结果可见，其默认为 `xMidYMid meet`，即不切割图像，并将图像居中