## 伪类 first-child 和 first-of-type 的区别



## box-sizing

```css
.box {
  box-sizing: content-box | border-box | padding-box;
}
```

+ content-box：（默认），设置的宽高为 content 的宽高，额外的 padding 和 border 会撑大盒子的实际宽高。
+ border-box：设置的宽高为 content + padding + border 之和，额外的 padding 和 border 会缩小 content 的实际宽高。
+ padding-box：设置的宽高为 content + padding 之和，额外的 padding 会缩小 content 的实际宽高。

## 文本阴影，盒子阴影，边框圆角

**text-shadow**：
**box-shadow**：
**border-radius**：

## 渐变

+ linear-gradient
+ repeating-linear-gradient
+ radial-gradient
+ repeating-radial-gradient


## transform

`transform` 用于设置元素的转换(平移、缩放、扭曲、旋转)，对应的 X, Y, Z 轴如下所示，其中，由屏幕向外的轴为 Z 正半轴，屏幕向右和向下分别为 X 正半轴和 Y 正半轴：


```css
/* 2D 转换 */
.box {
  transform-origin: center center; /* 设置转换的原点，使用九宫格参数 */
  transform: translateX(100px) translateY(100px) rotateX(50deg); /* 设置转换方式 */
}
/* 3D 转换 */
.box {
  perspective: 100; /* 视距，视距越大，元素看起来越小 */
  perspective-origin: left center; /* 视点位置，使用九宫格参数 */
  backface-visibility: visible; /* 设置元素背面是否可见 */
  transform-style: flat; /* 设置被嵌套元素如何在 3D 空间中显示，flat 为 2D 扁平化，preserve-3d 为 3D 空间 */
}
```

**技巧：**
+ `transform` 表示一个属性状态，能用于 `transition` 中；
+ 设置 `3D` 变换时一定要设置属性 `transform-style: preserve-3d`，并控制视点的位置，才能较明显地看到变化；


## transition

`transition` 用于设置 `CSS` 属性的过渡：
```css
.box {
  transition-property：all; /* 设置参与过渡的属性，多个属性用逗号分隔 */
  transition-duration：.8s; /* 设置过渡持续的时间，多个属性用逗号分隔 */
  transition-timing-function：ease; /* 设置过渡使用的速度函数 */
  transition-delay：1s; /* 设置延迟过渡的时间 */
  transition：all .8s ease 1s; /* 一次性设置上述值，按顺序 */
}
```

**技巧：**
+ 设置 `transition` 属性后不会产生动画，需要在指定过渡的属性发生变化时才会看得到变化
+ 可以用 `CSS` 伪类(`:hover` 等)设置元素属性变化，或者通过 `js` 事件设置元素属性变化

## animation

`animation` 用于设置动画：
```css
/* 使用 @keyframes 设置动画 */
@keyframes bounce {
  0% { top: 0; } /* 可以使用 from 和 to 快速设置动画开始和结束的状态 */
  50% { top: 100px; }
  100% { top: 0; }
}
.box {
  animation-duration: 0.2s; /* 动画持续事件 */
  animation-timing-function: ease; /* 动画速度函数 */
  animation-delay: 0s; /* 延迟 */
  animation-iteration-count: infinite; /* 动画循环次数，默认 1 次 */
  animation-direction: normal; /* 动画循环中是否反向运动，设置 alternate 会反向运动 */
  animation-fill-mode: none; /* 动画时间外(或动画结束后)的状态 */
  animation-play-state: running; /* 动画当前的运动状态 */
  animation-name: bounce; /* 动画名称 */
  animation: bounce .2s infinite; /* 快捷设置上述值 */
}
```

**技巧：**
+ 可以使用 `js` 控制元素的 `el.style.animationPlayState` 属性来控制动画的开始和暂停

## transition 和 animation 的区别

+ `animation` 是更高级的 `transition`，他能展示多个动画帧，`transition` 只能展示一个状态；
+ `CSS` 实现的 `transition` 只能单向运动，而 `animation` 能够双向运动；
+ `transition` 激活时只能运动一次，`animation` 能运动任意次数

## 超出文本显示省略号

**单行文本省略号：**
```css
.ellipsis {
  overflow: hidden; /* 超出隐藏 */
  text-overflow: ellipsis; /* 超出显示省略号 */
  white-space: nowrap; /* 不换行 */
}
```

**多行文本省略号：**
```css
.ellipsis-multi {
  overflow: hidden; /* 超出隐藏 */
  text-overflow: ellipsis; /* 超出显示省略号 */
  display: -webkit-box; /* 或 display: -webkit-inline-box */
  -webkit-box-orient: vertical; /* 垂直朝向 */
  -webkit-line-clamp: 3; /* 指定行数 */
}
```

## 实现蒙版


## 实现倒影


## 实现淡入/淡出效果



## 怎样使用媒体查询


## flex 布局

更多参考 [Flex](https://www.runoob.com/w3cnote/flex-grammar.html)

使用 flex 布局需要分别在父元素和子元素中设置选项，需要注意的是：
+ 块级元素和行内元素都能设置 flex 布局
+ 定义 flex 布局后，子元素的 float, clear, vertical-align 属性会失效
+ flex 布局存在一个 flex 容器的概念，父元素作为容器，子元素作为项目
  + 容器默认存在两根轴线：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）
  + 项目默认沿主轴排列，单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做 `cross size`


父元素（容器）：第一个为默认值
```css
.container {
  display: flex || inline-flex; /* 将容器定义为 flex 布局 */
  flex-direction: row || row-reverse || column || column-reverse; /* 项目排列的方向 */
  flex-wrap: nowrap || wrap || wrap-reverse; /* 一行排满时换行方式 */
  flex-flow: row nowrap; /* 一组 flex-direction 和 flex-wrap 的缩写 */
  justify-content: flex-start || flex-end || center || space-between || space-around; /* 项目在主轴上的对齐方式 */
  align-content: flex-start || flex-end || center || space-between || space-around || stretch; /* 多根轴线的对齐方式，只有一根轴线时不起作用 */
  align-items: flex-start || flex-end || center || baseline || stretch; /* 定义项目在交叉轴上的对齐方式 */
}
```

子元素（项目）：第一个为默认值
```css
.item {
  order: 0 || <整数>; /* 项目的排列顺序，数值越小，排列越靠前 */
  flex-grow: 0 || <正数>; /* 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大 */
  flex-shrink: 1 || <正数>; /* 定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小 */
  flex-basis: auto || <length>; /* 定义分配多余空间前项目占据的主轴空间，默认 auto */
  flex: 0 1 auto; /* flex-grow, flex-shrink, flex-basis 三者的简写，默认为：0 1 auto，后两个属性可选；有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)*/
  align-self: auto || flex-start || flex-end || center || baseline || stretch; /* 定义自身的对齐，覆盖父元素设置的 align-items 属性，默认 auto 继承自父元素，无父元素时为 stretch */
}
```

**使用技巧：**
+ 保持一个项目的属性 `flex: 1;`，它将占据容器主轴的剩余空间

## grid 布局