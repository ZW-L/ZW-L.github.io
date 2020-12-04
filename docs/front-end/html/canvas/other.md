## 绘制图片

+ `ctx.drawImage(image, x, y)`：将一个源图像渲染到 canvas 中
+ `ctx.drawImage(image, x, y, width, height)`：渲染缩放后的图片
+ `ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWeight, dHeight)`：渲染切片后的图片，后八个参数分为两组
  + 第一组：针对 source image，分别为其左上角位置，截取的宽和高
  + 第二组：针对 destination canvas，分别为其左上角位置，需要缩放的宽和高
```js
const img = new Image()
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png'

img.onload = function() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, 300, 150)
  ctx.beginPath()
  ctx.moveTo(30,96)
  ctx.lineTo(70,66)
  ctx.lineTo(103,76)
  ctx.lineTo(170,15)
  ctx.stroke()
}
```
+ 还有一些选项可以控制图像平滑：
  + `ctx.imageSmoothingEnabled`: 设置图像平滑，取值：true(默认), false
  + `ctx.imageSmoothQuality`: 设置图像平滑的质量，取值：low, medium, high



## 操作像素

+ 对像素的操作需要获取 `ImageData` 对象，再修改它的属性：
  + `data`: 一维数组，每四个数字代表每个像素点的 `rgba` 值
  + `width`: 图像实际宽度
  + `height`: 图像实际高度
+ `ctx.crateImageData(w, h)`: 创建一个具有指定尺寸的空的 `ImageData` 对象，其所有像素均为透明黑色
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const imgData = ctx.createImageData(10, 10)
console.log(imgData.data.length)    // 400
```
+ `ctx.getImageData(x, y, w, h)`: 返回一个包含画布场景像素数据 `ImageData` 对象
+ `ctx.putImageData(ImageData, x, y)`: 将 `ImageData` 对象中的数据绘制到画布上



## 保存状态和恢复状态

+ Canvas 的状态就是当前画面应用的所有样式和变形的一个快照，可以将状态保存或从堆栈中恢复：
  + `ctx.save()`: 保存画布的整个状态(通过将当前状态压入堆栈)
  + `ctx.restore()`: 通过弹出绘图状态堆栈中的顶部条目来恢复最近保存的画布状态
+ 因为是栈结构，所以可以调用任意次数的 `save()`，只要调用 `restore()` 就会恢复最近一次的状态

::: tip 提示：
+ 在作变形前保存状态是一个好习惯，变形后想要恢复原先的状态，`restore()` 就显得非常方便
:::