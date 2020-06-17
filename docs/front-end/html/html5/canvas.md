---
sidebarDepth: 2
---

## 说明

[MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)：

+ `Canvas` 主要用于绘制 2D 图形，而且它能操作到每一个像素
+ `<canvas>` 标签只是图形容器，必须使用 `javascript` 脚本来绘制图形

## HTMLCanvasElement

`HTMLCanvasElement` 是一个 `<canvas>` 节点对象：

```js
const canvas = document.getElementById('canvas')
```

**属性/方法：**

|属性/方法|描述|
|-|-|
|width|画布对象的宽度，默认 300|
|height|画布对象的高度，默认 150|
|captureStream()|画布表面的实时视频捕获|
|getContext()|获取画布上的绘图上下文|
|toDataURL()|返回以 type 参数指定的格式包含图像表示形式的 data-URL，默认 png|
|toBlob()|创建一个 Blob 对象，该对象表示画布中包含的图像|
|transferControlToOffscreen()|将控制权转移到 OffscreenCanvas 主线程或工作线程上的对象|


**事件：**

|属性/方法|描述|
|-|-|
|webglcontextcreationerror||
|webglcontextlost||
|webglcontextrestored||


## CanvasRenderingContext2D

使用 `CanvasRenderingContext2D` 能绘制各种图形和动画，`CanvasRenderingContext2D` 实例的创建：

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
```

::: tip 说明：
使用 `getContext('2d')` 方法创建 `CanvasRenderingContext2D` 实例后，就可以使用下面的所有属性和方法
:::

### 矩形

+ `fillRect(x, y, w, h)`: 在指定坐标绘制一个填充的矩形，w 和 h 指定宽高
+ `strokeRect(x, y, w, h)`: 使用当前的笔触样式在指定坐标绘制一个矩形
+ `clearRect(x, y, w, h)`: 将矩形中的所有像素设置为透明黑色，擦除任何先前绘制的内容

### 文本

+ `font`: 字体。默认(10px sans-serif)
+ `textAlign`: 文字对齐。取值：start(默认)，end，left，right center
+ `textBaseLine`: 基线对齐。取值：alphabetic(默认)，top，hanging，middle，ideographic bottom
+ `direction`: 文本方向。取值：inherit(默认)，ltr，rtl，
+ `fillText(text, x, y [, maxWidth])`: 在指定坐标绘制(填充)给定的文本
+ `strokeText(text, x, y [, maxWidth])`: 在指定坐标绘制(笔划)给定的文本
+ `measureText(text)`: 返回一个 `TextMetrics` 对象


### 线条

+ `lineWidth`: 线宽。默认(1.0)
+ `lineCap`: 行尾的结尾类型。取值：butt(默认)，round，square
+ `lineJoin`: 定义两条线相交的角的类型。取值：miter(默认)，round，bevel
+ `miterLimit`: 斜接极限比。默认(10)
+ `lineDashOffset`: 设置行破折号偏移量
+ `getLineDash()`: 获取当前的虚线模式
+ `setLineDash(segments)`: 设置当前的虚线模式


### 渐变和图案

+ `createLinearGradient(x1, y1, x2, y2)`: 根据两个坐标创建线性渐变
+ `createRadialGradient(x1, y1, r1, x2, y2, r2)`: 根据两个圆创建径向渐变
+ `createPattern(image, repetition)`: 使用指定的图像和重复来创建图案

::: tip 说明：
+ `createLinearGradient()`/`createRadialGradient()` 会返回一个 `CanvasGradient` 对象，该对象能使用方法 `addColorStop(offset, color)` 向渐变对象添加一个终止颜色(`offset` 为颜色偏移，取值：0~1)

+ image 为用作图案的图像，允许多种形式的图像对象：
  + `HTMLImageElement`: `<img>` 标签 
  + `SVGImageElement`: SVG 的 image
  + `HTMLVideoElement`: 通过捕获 `<video>` 标签
  + `HTMLCanvasElement`: `<canvas>` 标签
  + `ImageBitmap`:
  + `OffscreenCanvas`:

+ `repetition` 用于指示如何重复，取值：`repeat`, `repeat-x`, `repeat-y`, `no-repeat`
:::


### 阴影

+ `shadowBlur`: 阴影的模糊效果。默认：0
+ `shadowColor`: 阴影的颜色。默认值：全透明黑色
+ `shadowOffsetX`: 阴影的水平偏移距离。默认值：0
+ `shadowOffsetY`: 阴影的垂直偏移距离。默认值：0


### 路径相关

+ `beginPath()`: 创建新路径
+ `closePath()`: 闭合路径
+ `moveTo(x, y)`: 移动路径起点到指定 (x, y) 坐标(不创建线条)
+ `lineTo(x, y)`: 将路径起点与指定 (x, y) 坐标连接(创建线条)
+ `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`: 添加三次贝塞尔曲线到当前路径
  + `cp1x`/`cp1y`: 第一个控制点的坐标
  + `cp2x`/`cp2y`: 第二个控制点的坐标
  + `x`/`y`: 终点的坐标
+ `quadraticCurveTo(cpx, cpy, x, y)`: 添加二次贝塞尔曲线到当前路径
  + `cpx`/`cpy`: 控制点的坐标
  + `x`/`y`: 终点的坐标
+ `arc(x, y, radius, startAngle, endAngle [, anticlockwise])`: 将圆弧添加到当前路径
  + `x`/`y`: 圆弧中心的坐标
  + `startAngle`/`endAngle`: 圆弧的起始和结束弧度
  + `anticlockwise`: 布尔值，false 时为顺时针
+ `arcTo(x1, y1, x2, y2, radius)`: 使用给定的控制点和半径将圆弧添加到当前子路径，通常用于制作圆角
  + `x1`/`y1`: 第一个控制点
  + `x2`/`y2`: 第二个控制点
  + `radius`: 圆弧的半径，非负数
+ `ellipse(x, y, rx, ry, rotation, startAngle, endAngle [, anticlockwise])`: 添加椭圆弧到当前路径
  + `x`/`y`: 椭圆中心的坐标
  + `rotation`: 旋转角度
  + `rx`/`ry`: 椭圆主轴/短轴的半径
  + `startAngle`/`endAngle`: 椭圆的起始和结束弧度
  + `anticlockwise`: 布尔值，false 时为顺时针
+ `rect(x, y, w, h)`: 添加一个矩形到当前路径
  + `x`/`y`: 矩形的起点坐标
  + `w`/`h`: 矩形的宽高

::: danger 注意：
+ 使用上述绘制路径的方法只是将要绘制的信息保存在路径中，并不会马上绘制，而是要手动调用 `fill()`/`stroke()` 进行填充/绘制
:::

### 填充和描边

+ `fillStyle`: 设置填充样式(可以为颜色、渐变或图案)。默认(#000)
+ `strokeStyle`: 设置笔触样式(可以为颜色、渐变或图案)。默认(#000)
+ `fill([path, fillRule])`: 使用给定填充规则当前路径或给定路径，`fillRule` 取值为 `nonzero`(默认) 或 `evenodd`
+ `stroke([path])`: 使用当前笔触填充当前路径或给定路径
+ `drawFocusIfNeeded([path, ] element)`: 如果给定元素已获取焦点，会在当前路径周围绘制聚焦环
+ `scrollPathIntoView([path])`: 将当前或给定的路径滚动到视图中
+ `clip([path, fillRule])`: 根据指定规则剪切当前路径或给定路径
+ `isPointInPath([path, ] x, y [, fillRule])`: 根据指定规则判断指定点是否包含在当前路径中
+ `isPointInStroke([path, ] x, y)`: 判断指定点是否在笔触路径包含的区域内



### 变换

+ `currentTransform`: 返回或设置当前转换矩阵的 `DOMMatrix` 对象
+ `getTransform()`: 检索应用于上下文的当前转换矩阵
+ `rotate(angle)`: 将旋转添加到变换矩阵
+ `scale(x, y)`: 按照指定的比例在 x/y 轴上缩放
+ `translate(x, y)`: 按照指定的偏移量进行偏移
+ `transform(a, b, c, d, e, f)`: 快捷设置转换，参数分别为
  + a: 水平缩放
  + b: 垂直倾斜
  + c: 水平倾斜
  + d: 垂直缩放
  + e: 水平平移
  + f: 垂直平移
+ `setTransform()`: 将当前矩阵转换重置为单位矩阵，参数与 `transform()` 相同
+ `resetTransform()`: 将当前变换重置为单位矩阵

::: warning 区分：
+ `setTransform()` 将当前矩阵转换重置为单位矩阵，然后调用 `transform()`；而 `transform()` 不覆盖当前的变换矩阵，而是将其与给定的矩阵相乘。
:::


### 合成

+ `globalAlpha`: 设置应用于形状和图像的透明度。默认(1.0)，取值 0.0 ~ 1.0
+ [globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation): 设置在绘制新形状时要应用的合成操作的类型，有非常多可设置的类型


### 绘制图像

+ [drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage): 将图像绘制到画布上，有多种使用方式
  + `drawImage(image, dx, dy)`: 
  + `drawImage(image, dx, dy, dw, dh)`: 
  + `drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)`: 

::: tip 说明：
+ `dx`/`dy`: 画布的坐标
+ `sx`/`sy`: 源矩形的坐标
+ `dw`/`dh`: 在画布中绘制的宽高，允许缩放
+ `sw`/`sh`: 源矩形的宽高
:::


### 操作像素

+ `crateImageData(w, h)`: 创建一个具有指定尺寸的新的 `ImageData` 对象。新对象中的所有像素均为透明黑色
+ `getImageData(x, y, w, h)`: 返回一个 `ImageData` 对象
+ `putImageData(ImageData)`: 将 `ImageData` 对象中的数据绘制到画布上

::: tip 说明：
+ `crateImageData()` 也能复制自现有的 `ImageData` 对象：`createImageData(ImageData)`
+ `getImageData()` 中的 w, h 不能为 0，否则报错
+ `putImageData()` 接受了脏矩形时，仅绘制该矩形中的像素
:::


### 图像平滑

+ `imageSmoothingEnabled`: 设置图像平滑模式；禁用时缩放后图像将不会平滑
+ `imageSmoothQuality`: 设置图像平滑的质量，取值：low, medium, high


### 其他

+ `save()`: 通过将当前状态压入堆栈来保存画布的整个状态
+ `restore()`: 通过弹出绘图状态堆栈中的顶部条目来恢复最近保存的画布状态
+ `canvas()`: 对 `HTMLCanvasElement` 与给定上下文关联的对象的只读引用
+ [addHitRegion([options])](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion): 将命中区域添加到位图，可选 `options` 对象可以设置多个属性
  + path
  + fillRule
  + id
  + parentID
  + cursor
  + control
  + label
  + role
+ `removeHitRegion(id)`: 从画布中删除给定的点击区域
+ `clearHitRegion()`: 从画布中删除所有命中区域
+ `filter()`: 滤镜效果，例如模糊和灰度。类似 CSS 的 `filter` 属性，并且接受相同的值


## ImageData

**创建：**

+ `crateImageData(w, h)`
+ `getImageData(x, y, w, h)`

**属性：**

+ `data`: 只读。一维数组，每四个数字代表每个像素点的 `rgba` 值
+ `height`: 只读。图像的实际高度
+ `width`: 只读。图像实际宽度

::: tip 说明：
+ 使用 `ImageData` 对象，能够读取到图像的每一个像素的颜色和透明度数据
+ 通过 `putImageData(ImageData)` 能够修改任意一个像素的颜色和透明度数据
:::