## 矩形

绘制矩形的相关方法，其中 (x, y) 是矩形的左上角坐标，它相对于画布的左上角：
+ `ctx.fillRect(x, y, width, height)`: 绘制一个填充的矩形
+ `ctx.strokeRect(x, y, width, height)`: 绘制一个矩形的边框
+ `ctx.clearRect(x, y, width, height)`: 清除指定矩形区域，让清除部分完全透明

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillRect(25, 25, 100, 100)
ctx.clearRect(45, 45, 60, 60)
ctx.strokeRect(50, 50, 50, 50)
```

<!-- <Base-CanvasDemo></Base-CanvasDemo> -->

::: tip 备注：
+ `fillRect()` 绘制的是无边框有填充色的矩形，而 `strokeRect()` 刚好相反
+ `clearRect()` 类似 `fillRect()`，但是它的填充色是画布的颜色(或者说擦除了颜色)
:::



## 路径

+ 一个路径必须由 `beginPath()` 创建，并可选地使用 `closePath()` 关闭
  + `ctx.beginPath()`: 创建新路径
  + `ctx.closePath()`: 闭合路径，会将路径终点和起点连接起来
+ 路径关闭后并不会马上绘制，而是要手动调用 `fill()`/`stroke()` 进行填充/绘制
  + `ctx.fill([path, fillRules])`：使用给定填充规则当前路径或给定路径，`fillRule` 取值为 `nonzero`(默认) 或 `evenodd`
  + `ctx.stroke([path])`：使用当前笔触绘制当前路径或给定路径
  + `ctx.clip()`：将当前正在构建的路径转换为当前的裁剪路径
+ 然后，可以通过移动笔触和划线来绘制路径
  + `ctx.moveTo(x, y)`: 移动笔触到指定坐标，通常作为路径的起点
  + `ctx.lineTo(x, y)`: 将笔触与指定坐标连接
+ 还可以添加其他曲线到路径：
  + `ctx.rect(x, y, w, h)`: 矩形
  + `ctx.quadraticCurveTo(cpx, cpy, x, y)`: 二次贝塞尔曲线，参数分别为控制点坐标、终点坐标
  + `ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`: 三次贝塞尔曲线，前两个为控制点坐标，最后一个为终点坐标
  + `ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise])`: 圆弧
    + `x`/`y`: 圆弧中心的坐标
    + `startAngle`/`endAngle`: 圆弧的起始和结束弧度
    + `anticlockwise`: 布尔值，false 时为顺时针
  + `ctx.arcTo(x1, y1, x2, y2, radius)`: 使用给定的控制点和半径将圆弧添加到当前子路径，通常用于制作圆角
    + `x1`/`y1`: 第一个控制点
    + `x2`/`y2`: 第二个控制点
    + `radius`: 圆弧的半径，非负数
  + `ctx.ellipse(x, y, rx, ry, rotation, startAngle, endAngle [, anticlockwise])`: 椭圆弧
    + `x`/`y`: 椭圆中心的坐标
    + `rx`/`ry`: 椭圆主轴/短轴的半径
    + `rotation`: 旋转角度
    + `startAngle`/`endAngle`: 椭圆的起始和结束弧度
    + `anticlockwise`: 布尔值，false 时为顺时针
+ 绘制一个三角形：
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(30, 30)
ctx.lineTo(30, 60)
ctx.lineTo(60, 60)
ctx.lineTo(30, 30)
ctx.closePath()
ctx.stroke()
```
+ 绘制一个笑脸：
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 脑袋
ctx.moveTo(110, 75)
ctx.arc(75, 75, 35, 0, Math.PI, false)    // 嘴巴
ctx.moveTo(65, 65)
ctx.arc(60, 65, 5, 0, Math.PI * 2, true)  // 左眼
ctx.moveTo(95, 65)
ctx.arc(90, 65, 5, 0, Math.PI * 2, true)  // 右眼
ctx.closePath()
ctx.stroke()    // 绘制
```




## 绘制图像

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