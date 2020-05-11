## transition

+ transition 用于描述元素的属性过渡，即从一个状态到另一个状态
+ 当元素的样式属性发生变化时才能出现过渡，此时需要配合**CSS伪类**或**JS事件**

**CSS 属性：**
|属性|说明|取值|
|-|-|-|
|`transition`|过渡，快速定义所有值|-|
|`transition-property`|设置参与过渡的属性，多个属性用逗号分隔|`all`<br>`none`<br>`<property-name>`|
|`transition-duration`|设置过渡持续的时间，多个属性用逗号分隔|`<time>`|
|`transition-timing-function`|设置过渡使用的速度函数|`ease`<br>`linear`<br>`ease-in`<br>`ease-out`<br>`ease-in-out`<br>`cubiz-besier()`|
|`transition-delay`|设置延迟过渡的时间|`<time>`|


**Demo：** 鼠标悬浮在元素上时触发渐变，离开时再反向触发渐变

```html
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

+ animation 是增强的 transition，是真正意义上的动画
+ 可以将 transition 理解为 animation 的一个帧
+ 需要先使用 `@keyframes` 定义动画，再对动画名称进行引用

**CSS 属性：**
|属性|说明|取值|
|-|-|-|
|`animation`|动画，快速定义以下 8 个值|-|
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

**Demo：**
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

+ 
+ 

**CSS 属性：**
+ `transform`：定义对象的 2D/3D 变换(平移，拉伸，旋转)，取值为：
  + 平移：
    + `translateX()`：
    + `translateY()`：
    + `translateZ()`：
    + `translate()`：
    + `translate3D()`：
  + 拉伸：
    + `skewX()`：
    + `skewY()`：
    + `skewZ()`：
    + `skew()`：
    + `skew3D()`：
  + 旋转：
    + `rotateX()`：
    + `rotateY()`：
    + `rotateZ()`：
    + `rotate()`：
    + `rotate3D()`：
  + 通用：
    + `matrix()`：
+ `transform-origin`：设置对象进行转换的原点。支持多种参数组合：
  + 默认参数：center, center || 50%, 50%
  + 两个参数：以 3x3 的九宫格组合中任意一个或两个百分比组合
  + 一个参数：第二个参数默认为 50% 
+ `perspective`：设置 3D 变换时的视距。视距越大，元素看起来越小。
+ `perspective-origin`：设置 3D 变换时的视点。
+ `backface-visibility`：设置 3D 变换时的元素背面是否可见。
+ `transform-style`：设置 3D 变换时被嵌套的元素如何显示。`flat || preserve-3d`


::: warning 注意：
+ 2D 变换和 3D 变换
+ `perspective` 需要在父级元素中设置，用于对比个元素的位置变化，在同级元素之间互不影响
+ `transform-style` 需要在父级元素中设置，默认为 `flat(2D)`
+ 除了设置 `transform-style`，还需要将舞台(父元素)旋转一定的角度，才能观察到子元素的 3D 变化
:::
