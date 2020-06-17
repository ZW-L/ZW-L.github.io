---
sidebarDepth: 2
---

## transition

### 简介

+ transition 用于描述元素的属性过渡，即从一个状态到另一个状态
+ 当元素的样式属性发生变化时才能出现过渡，此时需要配合**CSS伪类**或**JS事件**

### 属性

|属性|说明|取值|
|-|-|-|
|`transition`|快速定义以下 4 个值|-|
|`transition-property`|参与过渡的属性|`all`<br>`none`<br>`<property-name>`|
|`transition-duration`|过渡持续的时间|`<time>`|
|`transition-timing-function`|过渡的速度函数|`ease`<br>`linear`<br>`ease-in`<br>`ease-out`<br>`ease-in-out`<br>`cubiz-besier()`|
|`transition-delay`|延迟过渡的时间|`<time>`|


::: tip 备注：
+ 可以分别设置多组属性的过渡，它们用逗号隔开：
```css
#content:hover {
  transition: border-radius .5s, background 1s;
}
```
:::


### Demo

```html
<!-- 鼠标悬浮在元素上时触发渐变，离开时再反向触发渐变 -->
<div id="content"></div>
```
```css
#content {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  transition: all .8s;
}
#content:hover {
  border-radius: 50%;
  background-color: red;
}
```



## animation

### 简介

+ animation 是增强的 transition，是真正意义上的动画
+ 可以将 transition 理解为 animation 的一个帧
+ 需要先使用 `@keyframes` 定义动画，再对动画名称进行引用

### 属性

|属性|说明|取值|
|-|-|-|
|`animation`|快速定义以下 8 个值|-|
|`animation-name`|设置使用的动画名称|`none`<br>`<identifier>`|
|`animation-duration`|设置动画持续的时间|`<time>`|
|`animation-timing-function`|设置动画的速度函数|`ease`<br>`linear`<br>`ease-in`<br>`ease-out`<br>`ease-in-out`<br>`cubiz-besier()`|
|`animation-delay`|设置延迟动画的时间|`<time>`|
|`animation-iteration-count`|设置动画循环的次数|`infinity`<br>`<number>`|
|`animation-direction`|设置动画是否反向运动|`normal`<br>`alternate`|
|`animation-play-state`|设置动画的状态|`running`<br>`paused`|
|`animation-fill-mode`|设置动画时间之外的状态|`none`<br>`forwards`<br>`backwards`<br>`both`|
|`@key-frames identifier`|定义动画效果|-|


::: tip 两种方式定义 @keyframes
+ 使用 `from...to` 指定开始和结束状态(只能定义两个状态)
```css
@keyframes my-animation {
  from {
    border-radius: 0;
    background-color: #ccc;
  }
  to {
    border-radius: 50%;
    background-color: red;
  }
}
```
+ 使用百分比指定多个时间帧(可以定义多个状态)
```css
@keyframes my-animation {
  0% {
    border-radius: 0;
    background-color: #ccc;
  }
  100% {
    border-radius: 50%;
    background-color: red;
  }
}
```
:::


### Demo

```html
<div id="content"></div>
```
```css
#content {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  animation: my-animation 1s 0s infinite alternate;
}

@keyframes my-animation {
  from {
    border-radius: 0;
    background-color: #ccc;
  }
  to {
    border-radius: 50%;
    background-color: red;
  }
}
```




## transform

+ 用于旋转(rotate)，缩放(scale)，扭曲(skew)，平移(translate)元素
+ 既可以实现 2D 变换，也可以实现 3D 变换
+ 当元素先旋转再执行其他变换时，要切记，其<font color="red">坐标轴也发生了平移</font>
+ 变换根据坐标轴进行：
  + x 轴：屏幕水平方向，以右为正向
  + y 轴：屏幕垂直方向，以下为正向
  + z 轴：视线与屏幕垂直的方向，向外为正向

### 平移

+ `translateX(<length>)`：x 轴方向平移
+ `translateY(<length>)`：y 轴方向平移
+ `translateZ(<length>)`：z 轴方向平移
+ `translate(<length>{1, 2})`：x/y 两个方向上的平移，第二个参数默认为 0
+ `translate3d(<length>{3})`：x/y/z 三个方向上的平移

::: tip 备注：
+ 正值时为向坐标轴正向平移
:::


### 缩放

+ `scaleX(<number>)`：x 轴方向缩放
+ `scaleY(<number>)`：y 轴方向缩放
+ `scaleZ(<number>)`：z 轴方向缩放
+ `scale(<number>{1, 2})`：x/y 两个方向上的缩放，第二个参数默认取第一个参数的值
+ `scale3d(<number>{3})`：x/y/z 三个方向上的缩放

::: tip 备注：
+ 绝对值大于 1 为放大，小于 1 为缩小
:::


### 扭曲

+ `skewX(<angle>)`：x 轴方向扭曲，若以下边为底，正值时为向左倾斜
+ `skewY(<angle>)`：y 轴方向扭曲，若以左边为底，正值时为向下倾斜
+ `skew(<angle>{1, 2})`：x/y 两个方向上的扭曲，第二个参数默认为 0

::: tip 备注：
+ 没有 z 轴方向的扭曲
:::


### 旋转

+ `rotateX(<angle>)`：绕 x 轴旋转
+ `rotateY(<angle>)`：绕 y 轴旋转
+ `rotateZ(<angle>)`：绕 z 轴旋转
+ `rotate(<angle>)`：2D 旋转，类似绕 z 轴旋转
+ `rotate3d(<number>{3}, <angle>)`：分别绕 x/y/z 轴旋转

::: tip 备注：
+ 正值时为绕坐标轴正向顺时针旋转("左手螺旋定则")
+ ratate3d 的 `<number>` 取值为 0～1，特殊情况下
```css
rotate3d(1, 0, 0, 30deg) 相当于 rotateX(30deg)
rotate3d(0, 1, 0, 30deg) 相当于 rotateY(30deg)
rotate3d(0, 0, 1, 30deg) 相当于 rotateZ(30deg)
```
+ 当三个 `<number>` 的平方和不为1时，视觉上看到的元素是变形的；一般使用是将它们都设置为 1，然后控制旋转的角度，正值为顺时针旋转
```css
#content {
  transform: rotate3d(1, 1, 1, 45deg);
}
```
:::




### 通用


|属性|描述|取值|
|-|-|-|
|`matrix(<number>{6})`|2D变换的二阶矩阵|前4个参数描述线性变换<br>后2个参数描述如何应用变换|
|`matrix3d(<number>{16})`|3D变换的四阶矩阵|前12个参数描述线性变换<br>后4个参数描述如何应用变换|
|`transform-origin`|对象进行转换时的原点|默认：center,center<br>两个：九宫格位置<br>一个：第二个参数默认 50%|
|`transform-style`|3D变换时子元素的显示方式|`flat`：2D 扁平化<br>`preserve-3d`：以 3D 显示|
|`perspective`|3D变换时的视距|`none`：默认值<br>`<number>`：长度值|
|`perspective-origin`|3D变换时的视点|九宫格位置|
|`backface-visibility`|3D变换时元素背面的可见性|`visible`：可见<br>`hidden`：不可见|


::: tip 备注：
+ `matrix()/matrix3d()` 定义的矩阵，其参数是按列排列的，`matrix(a, b, c, d, tx, ty)` 相当于 `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`
+ 九宫格位置：由 [left, center, right] 和 [top, center, bottom] 两两组合的九种取值，可分别转化为 [0, 50%, 100%]
+ 3D 变换的属性，一般都在父元素上进行设置：
```css
/* 可以将父元素理解为画布 */
.container {
  transform-style: preserve-3d; /* 子元素的呈现为 3D */
  perspective: 2000px; /* 影响同级的子元素 */
  /* transform-origin */
  /* perspective-origin */
}
```
:::


### Demo

一个旋转的立方体：
```html
<div class="container">
  <div class="face face1"></div>
  <div class="face face2"></div>
  <div class="face face3"></div>
  <div class="face face4"></div>
  <div class="face face5"></div>
  <div class="face face6"></div>
</div>
```
```css
body {
  background-color: rgb(67, 62, 62);
}
.container {
  margin: 100px;
  perspective: 2000px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
  animation: cube-rotate 3s infinite alternate;
}
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  font-size: 20px;
  text-align: center;
  line-height: 100px;
  border: 1px solid pink;
  box-shadow: 0px 0px 10px 3px rgb(169, 25, 49);
}

.face1 {
  transform: rotateY(90deg) translateZ(50px);
}
.face3 {
  transform: rotateY(90deg) translateZ(-50px);
}
.face2 {
  transform: rotateX(90deg) translateZ(50px);
}
.face4 {
  transform: rotateX(90deg) translateZ(-50px);
}
.face5 {
  transform: translateZ(50px);
}
.face6 {
  transform: translateZ(-50px);
}

@keyframes cube-rotate {
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  50% {
    transform: rotateY(45deg) rotateX(45deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
}
```

::: tip 备注：
+ 同个元素的多个变换属性，需要写在同一个 `transform` 中，若定义多个 `transform` 属性，只会应用后面的
+ 因为几个面是先旋转(坐标轴也会旋转)后平移，所以其平移属性都是 `translateZ()`
:::