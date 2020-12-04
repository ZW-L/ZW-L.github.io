## 渐变

+ 类似 CSS3，渐变可以用作背景
+ 可以创建线性渐变和径向渐变，它们均返回一个 `CanvasGradient` 对象：
  + `ctx.createLinearGradient(x1, y1, x2, y2)`: 根据两个坐标创建线性渐变
  + `ctx.createRadialGradient(x1, y1, r1, x2, y2, r2)`: 根据两个圆创建径向渐变
+ 在 `CanvasGradient` 对象上可以添加一个或多个终止色：
  + `gradient.addColorStop(offset, color)`：向渐变对象添加一个终止颜色(`offset` 为颜色偏移，取值：0~1)
+ 案例：简单的线性渐变
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const linearGradient = ctx.createLinearGradient(0, 0, 100, 0)
linearGradient.addColorStop(0, 'white')
linearGradient.addColorStop(.5, 'red')
linearGradient.addColorStop(1, 'blue')

ctx.fillStyle = linearGradient
ctx.fillRect(10, 10, 130, 130)
```
+ 案例：径向渐变
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30)
radGrad.addColorStop(0, '#A7D30C')
radGrad.addColorStop(0.9, '#019F62')
radGrad.addColorStop(1, 'rgba(1,159,98,0)')

ctx.fillStyle = radGrad
ctx.fillRect(0, 0, 150, 150)
```



## 图案

+ 图案也可以用作背景
+ `ctx.createPattern(image, repetition)`: 使用指定的图像和重复来创建图案，其中：
  + image 为用作图案的图像，允许多种形式的图像对象：
    + `HTMLImageElement`: `<img>` 标签 
    + `SVGImageElement`: SVG 的 image
    + `HTMLVideoElement`: 通过捕获 `<video>` 标签
    + `HTMLCanvasElement`: `<canvas>` 标签
    + `ImageBitmap`:
    + `OffscreenCanvas`:
  + `repetition` 用于指示如何重复，取值：`repeat`, `repeat-x`, `repeat-y`, `no-repeat`
+ 案例：使用一个图案
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const img = new Image()
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png'
img.onload = function() {
  const pat = ctx.createPattern(img, 'repeat')
  ctx.fillStyle = pat
  ctx.fillRect(0, 0, 150, 150)
}
```



## 阴影

+ `ctx.shadowOffsetX`: 阴影的水平偏移。默认 0
+ `ctx.shadowOffsetY`: 阴影的垂直偏移。默认 0
+ `ctx.shadowBlur`: 阴影的模糊程度。默认 0
+ `ctx.shadowColor`: 阴影的颜色。默认 全透明黑色

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.shadowOffsetX = 2
ctx.shadowOffsetY = 2
ctx.shadowBlur = 2
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'

ctx.font = '20px Times New Roman'
ctx.fillStyle = 'Black'
ctx.fillText('Sample String', 5, 30)
```



## 变换

+ `ctx.translate(x, y)`: 移动 canvas 和它的原点到指定坐标
```js
function draw() {
  const ctx = document.getElementById('canvas').getContext('2d')
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save()    // 保存状态方便恢复到原来的位置
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)'
      ctx.translate(10 + j * 50, 10 + i * 50)
      ctx.fillRect(0, 0, 25, 25)
      ctx.restore() // 恢复状态
    }
  }
}
```
+ `ctx.rotate(angle)`: 以原点为中心顺旋转 canvas
```js
function draw() {
  const ctx = document.getElementById('canvas').getContext('2d')
  ctx.translate(75, 75)

  for (const i = 1; i < 6; i++) {
    ctx.save()    // 保存状态方便恢复到原来的位置
    ctx.fillStyle = 'rgb(' + (51*i)+',' + (255-51*i)+ ',255)'
    for (const j = 0; j < i*6; j++) {
      ctx.rotate(Math.PI*2/(i*6))
      ctx.beginPath()
      ctx.arc(0, i*12.5, 5, 0, Math.PI*2, true)
      ctx.fill()  // 恢复状态
    }
    ctx.restore()
  }
}
```
+ `ctx.scale(x, y)`: 用来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或放大
```js
function draw() {
  const ctx = document.getElementById('canvas').getContext('2d')

  // 放大 canvas 后绘制一个 10x10 的矩形
  ctx.save()
  ctx.scale(10, 3)
  ctx.fillRect(1, 10, 10, 10)
  ctx.restore()

  // 反转坐标轴或绘制文本
  ctx.scale(-1, 1)
  ctx.font = '48px serif'
  ctx.fillText('MDN', -135, 120)
}
```
+ `ctx.transform(a, b, c, d, e, f)`: 快捷设置转换，参数分别为
  + a/c/e: 水平方向的 缩放/倾斜/平移
  + b/d/f: 垂直方向的 倾斜/缩放/平移
+ `ctx.setTransform(a, b, c, d, e)`: 将当前矩阵转换重置为单位矩阵，再以参数调用 `transform()`
+ `ctx.resetTransform()`: 将当前变换重置为单位矩阵，相当于 `setTransform(1, 0, 0, 1, 0, 0)`
+ `ctx.getTransform()`: 返回当前应用的转换矩阵(一个 `DOMMatrix` 对象)

::: tip 说明：
+ 在 `scale()` 中，原始比例为 1，当取值：
  + 位于区间 (-1, 1)，表示缩小，其余为放大
  + 为负值时，表示以 x 轴或 y 轴作对称轴镜像反转
:::