## 文本

+ 可供设置的文本属性：
  + `ctx.font`: 字体。默认(10px sans-serif)
  + `ctx.textAlign`: 文字对齐。取值：start(默认)，end，left，right center
  + `ctx.textBaseLine`: 基线对齐。取值：alphabetic(默认)，top，hanging，middle，ideographic bottom
  + `ctx.direction`: 文本方向。取值：inherit(默认)，ltr，rtl，
+ 以及一些方法：
  + `ctx.fillText(text, x, y [, maxWidth])`: 在指定坐标绘制(填充)给定的文本
  + `ctx.strokeText(text, x, y [, maxWidth])`: 在指定坐标绘制(笔划)给定的文本
  + `ctx.measureText(text)`: 返回一个 `TextMetrics` 对象，其包含一些属性

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.font = '20px san-serif'
ctx.textAlign = 'center'
ctx.strokeText('Hello World!', 100, 100)
```



## 线条

+ `ctx.lineWidth`: 设置线条宽度。默认(1.0)
+ `ctx.lineCap`: 设置线条末端样式。取值：butt(默认)，round，square
+ `ctx.lineJoin`: 设置线条与线条间接合处的样式。取值：miter(默认)，round，bevel
+ `ctx.miterLimit`: 斜接极限比。默认(10)
+ `ctx.lineDashOffset`: 设置虚线样式的起始偏移量
+ `ctx.getLineDash()`: 获取当前的虚线样式
+ `ctx.setLineDash(segments)`: 设置当前的虚线样式



## 填充和描边

+ `ctx.fillStyle`: 设置填充样式(可以为颜色、[渐变](./effect&transform.html#渐变)或[图案](effect&transform.html#图案))。默认(#000)
+ `ctx.strokeStyle`: 设置笔触样式(可以为颜色、[渐变](./effect&transform.html#渐变)或[图案](effect&transform.html#图案))。默认(#000)
+ `ctx.drawFocusIfNeeded([path, ] element)`: 如果给定元素已获取焦点，会在当前路径周围绘制聚焦环
+ `ctx.scrollPathIntoView([path])`: 将当前或给定的路径滚动到视图中
+ `ctx.clip([path, fillRule])`: 根据指定规则剪切当前路径或给定路径
+ `ctx.isPointInPath([path, ] x, y [, fillRule])`: 根据指定规则判断指定点是否包含在当前路径中
+ `ctx.isPointInStroke([path, ] x, y)`: 判断指定点是否在笔触路径包含的区域内
+ 案例：创建一个色板
```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

for (var i=0; i<6; i++){
  for (var j=0; j<6; j++){
    ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                      Math.floor(255-42.5*j) + ', 0)'
    ctx.fillRect(j*25, i*25, 25, 25)
  }
}
```



## 合成

+ `globalAlpha`: 设置应用于形状和图像的透明度。默认(1.0)，取值 0.0 ~ 1.0
+ [globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation): 设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串