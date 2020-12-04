## rect

+ [rect](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect): 在指定位置创建一个矩形，其中 `x`/`y` 指定矩形左上角相对 svg 容器的偏移，`rx`/`ry` 指定矩形的横轴/纵轴圆角：
```html
<svg width="300" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="10" width="100" height="100"/>
  <rect x="110" y="10" width="100" height="100" rx="15" ry="15"/>
</svg>
```

<Base-SvgDemo>
  <svg width="300" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="10" width="100" height="100"/>
    <rect x="110" y="10" width="100" height="100" rx="15" ry="15"/>
  </svg>
</Base-SvgDemo>




## circle

+ [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle): 根据圆心和半径绘制圆，其中 `cx`/`cy` 表示圆心坐标，`r` 表示半径
```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50"/>
</svg>
```

<Base-SvgDemo>
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50"/>
  </svg>
</Base-SvgDemo>

+ `stroke-width` 也会占据一定的宽度，但它的表现是：覆盖在圆上，而且始终**有一部分在圆内，另一部分在圆外**；因此，要使一个圆及其 stroke 在视角上刚好占据一个正方形，需要满足：`2*r + stroke-width === d`
::: details 点此查看代码：
```html
<svg width="200px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
  <!-- 45*2 + 10 = 100，刚好能占据画布 -->
  <circle cx="50" cy="50" r="45" stroke="red" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="100"></circle>
</svg>
<svg width="200px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
  <!-- 50*2 + 10 > 100，stroke 会超出画布 -->
  <circle cx="50" cy="50" r="50" stroke="red" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="100"></circle>
</svg>
```
:::

<Base-SvgDemo>
  <svg width="200px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
    <circle cx="50" cy="50" r="45" stroke="red" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="100"></circle>
  </svg>
  <svg width="200px" height="200px" viewBox="0 0 100 100" style="background: #ccc;">
    <circle cx="50" cy="50" r="50" stroke="red" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="100"></circle>
  </svg>
</Base-SvgDemo>

+ 利用 `stroke-dasharray` 和 `stroke-dashoffset` 构造一个圆形进度条：
::: details 点此查看代码：
```vue
<template>
  <div class="box">
    <button @click="start">开始</button>
    <div>
      <svg width="300px" viewBox="0 0 30 30" style="background: #ccc;">
        <circle cx="15" cy="15" :r="R"
          transform="rotate(-90, 15, 15)"
          fill="none" stroke="#d62c39" :stroke-width="strokeWidth"
          :stroke-dasharray="perimeter"
          :stroke-dashoffset="current"
        />
        <text x="10" y="16" style="font-size:5;">{{percent}}%</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      R: 14.5,
      strokeWidth: 1,
      current: 0
    }
  },
  computed: {
    perimeter () {
      return 2 * Math.PI * this.R
    },
    percent () {
      return Math.floor((this.perimeter - this.current) / this.perimeter * 100)
    }
  },
  methods: {
    start () {
      this.current = this.perimeter
      const timer = setInterval(() => {
        this.current--
        if (this.current < 0) {
          this.current = 0
          clearInterval(timer)
          console.log('done!')
        }
      }, 30)
    }
  }
}
</script>
```
+ `stroke-dashoffset` 的取值是一个值时，它表示的是未着色的长度，我们将它递减，那着色的值便会增加
+ 另外 `stroke-dashoffset` 默认是从3点钟方向开始的，现在要它从12点钟方向开始，因此将圆绕圆心逆时针旋转了 90deg
:::

<Demo-SvgProgress></Demo-SvgProgress>




## ellipse

+ [ellipse](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse): 根据圆心、x 轴半径和 y 轴半径绘制椭圆
```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 椭圆 -->
  <ellipse cx="50" cy="50" rx="50" ry="30"/>
</svg>
```


## image

+ [image](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image): 渲染一个远程图像(设置 `href` 属性)
```html
<svg width="200" height="200"
  xmlns="http://www.w3.org/2000/svg">       
  <image href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="200" width="200"/>
</svg>
```


## line

+ [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line): 根据两点连线，**必须指定 stroke，否则线是透明的**
```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 线 -->
  <line x1="0" y1="0" x2="20" y2="30" stroke="red"/>
</svg>
```


## path

+ [path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path): 根据指令绘制路径
```html
<svg width="200px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"/>
</svg>
```

<Base-SvgDemo>
  <svg width="200px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10,30
            A 20,20 0,0,1 50,30
            A 20,20 0,0,1 90,30
            Q 90,60 50,90
            Q 10,60 10,30 z"/>
  </svg>
</Base-SvgDemo>

::: tip 路径指令：
+ 移动到某个点：M/m，需要提供一个点的坐标
+ 绘制直线：L/l/H
+ 绘制二次比塞尔曲线：Q/q/T/t
+ 绘制三次比塞尔曲线：C/c/S/s
+ 绘制椭圆弧曲线：A/a
+ 闭合路径：Z/z
:::




## polygon

+ [polygon](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon): 根据 `points` 绘制多边形(闭合)
```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Example of a polygon with the default fill -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polygon shape with stroke and no fill -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```




## polyline

+ [polyline](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline): 根据 `points` 绘制多边形(不闭合)，但最后的点不会和第一个点连接
```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Example of a polyline with the default fill -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polyline shape with stroke and no fill -->
  <polyline points="100,100 150,25 150,75 200,0"
            fill="none" stroke="black" />
</svg>
```
