---
sidebarDepth: 2
---

## 说明

+ 参考 [MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
+ canvas 翻译为画布，顾名思义其主要用于绘制 2D 图形
+ `<canvas>` 标签是一个图形容器，必须使用 `javascript` 脚本来绘制图形
+ 能操作到每一个像素，进行像素级别的操作



## 对象

### HTMLCanvasElement

+ 该对象实际上是一个 `<canvas>` 节点对象
```js
const canvas = document.getElementById('canvas')
```
+ **属性：**
  + `width`：画布对象的宽度，默认 300
  + `height`：画布对象的高度，默认 150
+ 方法：
  + `captureStream()`：画布表面的实时视频捕获
  + `getContext()`：获取画布上的绘图上下文，之后可通过该上下文对象进行绘图
  + `toDataURL()`：返回以 type 参数指定的格式包含图像表示形式的 data-URL，默认 png
  + `toBlob()`：创建一个 `Blob` 对象，该对象表示画布中包含的图像
  + `transferControlToOffscreen()`：将控制权转移到 OffscreenCanvas 主线程或工作线程上的对象
+ 作为一个 HTML 标签，允许绑定一些**事件：**
  + `webglcontextcreationerror`
  + `webglcontextlost`
  + `webglcontextrestored`



### CanvasRenderingContext2D

+ 该对象由 `HTMLCanvasElement` 对象调用 `getContext()` 返回
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// 接着可以使用 ctx 绘图
```
+ 之后基本上所有绘图操作都是该对象提供的，后面均使用 `ctx` 缩写


### Path2D

+ [Path2D](https://developer.mozilla.org/zh-CN/docs/Web/API/Path2D) 对象可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，能用于快速地回顾路径
+ 使用方式与 ctx 相同：
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const rectangle = new Path2D()
rectangle.rect(10, 10, 50, 50)

const circle = new Path2D()
circle.moveTo(125, 35)
circle.arc(100, 35, 25, 0, 2 * Math.PI)

ctx.stroke(rectangle)
ctx.fill(circle)
```



### ImageData

+ 对象中存储着 canvas 对象真实的像素数据，它包含以下几个**只读属性**：
  + `data`: 一维数组，每四个数字代表每个像素点的 `rgba` 值
  + `width`: 图像实际宽度
  + `height`: 图像实际高度
+ 该对象有两种创建方式：
  + `createImageData(w, h)`
  + `getImageData(x, y, w, h)`

::: tip 说明：
+ 使用 `ImageData` 对象，能够读取到图像的每一个像素的颜色和透明度数据
+ 通过 `putImageData(ImageData)` 能够修改任意一个像素的颜色和透明度数据
:::